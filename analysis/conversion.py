import csv
import json
from typing import Any


class Row:
    def __init__(self, geo_name: str, clean_description: str, gdp: str, level: int):
        self.geo_name = geo_name
        self.clean_description = clean_description
        self.gdp = gdp
        self.level = level

    def __str__(self):
        return str(
            {
                "geo_name": self.geo_name,
                "clean_description": self.clean_description,
                "gdp": self.gdp,
                "level": self.level,
            }
        )


class TreeNode:
    def __init__(self, value: Row, children: list[Any]):
        self.value = value
        self.children = children


class Conversion:
    def __init__(self, directory: str, input_file_name: str) -> None:
        self.file_path = f"{directory}/{input_file_name}"
        self.main()

    def main(self) -> None:
        with open(self.file_path, "r") as csv_file_obj:
            reader = csv.reader(csv_file_obj, delimiter=",", quotechar='"')
            global_clean_row_data = [row for row in reader if self.row_filter(row)]
            state_names = set([row[1] for row in global_clean_row_data])
            result = {}
            for state in state_names:
                clean_row_data = [row for row in global_clean_row_data if row[1] == state]
                state_row_list: list[Row] = []
           
            
                for row in clean_row_data:
                    _, geo_name, _, raw_description, gdp = row
                    clean_description = self.clean_description(raw_description)
                    level = self.row_level(raw_description)
                    state_row_list.append(Row(geo_name, clean_description, gdp, level))

                root = self.createTree(state_row_list)
                result[state] = buildMap(root)

        with open("stateEconomies2022.json", "w") as json_file_obj:
            json.dump(result, json_file_obj) 

    def create_node_list(self, state_row_list: list[Row]):
        state_node_list: list[TreeNode] = []
        max_depth = 0
        for row in state_row_list:
            state_node_list.append(TreeNode(row, []))
            max_depth = max(row.level, max_depth)

        return max_depth, state_node_list

    def createTree(self, state_row_list: list[Row]):
        max_depth, state_node_list = self.create_node_list(state_row_list)
        # All lowest are correct at first
        for depth in range(max_depth, 0, -1):
            sorted_nodes = filter(
                lambda node: node.value.level == depth, state_node_list
            )

            for sorted_node in sorted_nodes:
                parent_row = self.get_parent_row(sorted_node.value, state_row_list)
                parent_node = list(
                    filter(lambda node: node.value == parent_row, state_node_list)
                )[0]
                parent_node.children = parent_node.children + [sorted_node]

        return list(filter(lambda node: node.value.level == 0, state_node_list))[0]

    # removes header row, anddenda and below rows
    def row_filter(self, row: list[str]) -> bool:
        return (
            row[0] != "GeoFips"
            and row[2] != ""
            and int(row[0]) >= 1000
            and int(row[0]) <= 56000
        )

    def clean_description(self, raw_description: str) -> str:
        return raw_description.lstrip()

    def row_level(self, raw_description: str) -> int:
        return int(
            (len(raw_description) - len(self.clean_description(raw_description))) / 2
        )

    def get_parent_row(self, row: Row, state_row_list: list[Row]) -> Row:
        index = state_row_list.index(row)
        while state_row_list[index].level >= row.level:
            index -= 1
        return state_row_list[index]


def printTree(root: TreeNode, level: int = 0):
    print((" " * level) + root.value.clean_description)
    for child in root.children:
        printTree(child, level + 1)


def buildMap(root: TreeNode):
    children = []
    for child in root.children:
        children.append(buildMap(child))
    value = root.value
    if len(children) > 0:
        return {
            "gdpCategory": value.clean_description,
            "gdp": float(value.gdp) if value.gdp != '(L)' else 0,
            "children": children,
        }
    else:
        return {
            "gdpCategory": value.clean_description,
            "gdp": float(value.gdp) if value.gdp != '(L)' else 0,
        }
