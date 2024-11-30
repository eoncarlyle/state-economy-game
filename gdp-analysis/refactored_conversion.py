from dataclasses import dataclass
from pathlib import Path
from typing import Any, Iterator
import csv
import json
from decimal import Decimal


@dataclass
class Row:
    """Represents a single row of GDP data."""
    geo_name: str
    clean_description: str
    gdp: str
    level: int


@dataclass
class TreeNode:
    """Tree structure for hierarchical GDP data."""
    value: Row
    children: list['TreeNode']


class GDPDataConverter:
    """Converts CSV GDP data into a hierarchical JSON structure."""

    def __init__(self, directory: str | Path, input_file_name: str, year: int) -> None:
        self.file_path = Path(directory) / input_file_name
        self.year = year

    def process(self) -> None:
        """Main processing method to convert CSV to JSON."""
        clean_row_data = self._read_csv_data()
        state_names = {row[1] for row in clean_row_data}  # Using set comprehension

        result = self._process_states(clean_row_data, state_names)
        self._write_json_output(result)

    def _read_csv_data(self) -> list[list[str]]:
        """Reads and filters CSV data."""
        with open(self.file_path, 'r') as csv_file:
            return [
                row for row in csv.reader(csv_file, delimiter=',', quotechar='"')
                if self._is_valid_row(row)
            ]

    def _process_states(self, clean_row_data: list[list[str]], state_names: set[str]) -> dict:
        """Process data for each state."""
        result = {}

        for state in state_names:
            state_rows = [row for row in clean_row_data if row[1] == state]
            row_objects = self._create_row_objects(state_rows)

            root = self._create_tree(row_objects)
            preliminary_result = self._build_hierarchy(root)

            # Combine state and local hierarchies into total industry
            result[state] = {
                "gdpCategory": preliminary_result["gdpCategory"],
                "children": (
                    preliminary_result["children"][0]["children"] +
                    preliminary_result["children"][1]["children"]
                )
            }

            print(f"{state}: {self._calculate_gdp_sum(root)}")

        return result

    def _create_row_objects(self, state_rows: list[list[str]]) -> list[Row]:
        """Creates Row objects from raw state data."""
        return [
            Row(
                geo_name=row[1],
                clean_description=self._clean_description(row[3]),
                gdp=row[4],
                level=self._calculate_indent_level(row[3])
            )
            for row in state_rows
        ]

    def _create_tree(self, rows: list[Row]) -> TreeNode:
        """Creates a tree structure from Row objects."""
        nodes = [TreeNode(row, []) for row in rows]
        max_depth = max(row.level for row in rows)

        # Build tree from bottom up
        for depth in range(max_depth, 0, -1):
            for node in (n for n in nodes if n.value.level == depth):
                parent = next(
                    n for n in nodes
                    if n.value == self._find_parent(node.value, rows)
                )
                parent.children.append(node)

        return next(node for node in nodes if node.value.level == 0)

    @staticmethod
    def _is_valid_row(row: list[str]) -> bool:
        """Validates a CSV row."""
        try:
            return (len(row) > 2 and
                   row[0] != "GeoFips" and
                   row[2] != "" and
                   1000 <= int(row[0]) <= 56000)
        except ValueError as e:
            print(f"Invalid row: {row}")
            raise ValueError(f"Error processing row: {e}")

    @staticmethod
    def _clean_description(description: str) -> str:
        """Removes leading whitespace from description."""
        return description.lstrip()

    @staticmethod
    def _calculate_indent_level(description: str) -> int:
        """Calculates indentation level based on leading spaces."""
        return (len(description) - len(description.lstrip())) // 2

    @staticmethod
    def _find_parent(row: Row, rows: list[Row]) -> Row:
        """Finds parent row based on indentation level."""
        for potential_parent in reversed(rows[:rows.index(row)]):
            if potential_parent.level < row.level:
                return potential_parent
        raise ValueError(f"No parent found for row: {row}")

    def _write_json_output(self, data: dict) -> None:
        """Writes processed data to JSON file."""
        output_path = f"refactoredConvertedStateEconomies{self.year}.json"
        with open(output_path, 'w') as json_file:
            json.dump(data, json_file, indent=2)

    @staticmethod
    def _build_hierarchy(node: TreeNode) -> dict:
        """Builds hierarchical dictionary from tree structure."""
        result = {
            "gdpCategory": node.value.clean_description,
        }

        if node.children:
            result["children"] = [
                GDPDataConverter._build_hierarchy(child)
                for child in node.children
            ]
        else:
            result["gdp"] = (
                float(node.value.gdp) if node.value.gdp != "(L)" else 0
            )

        return result

    @staticmethod
    def _calculate_gdp_sum(node: TreeNode) -> float:
        """Recursively calculates sum of GDP values in tree."""
        if not node.children:
            return float(node.value.gdp) if node.value.gdp != "(L)" else 0

        return sum(
            GDPDataConverter._calculate_gdp_sum(child)
            for child in node.children
        )
