"""Merges stateGeographies.json with a converter output (refactoredConvertedStateEconomies<year>.json)
into the states.json consumed by gdple-backend.

Usage: python3 build_states_json.py <converted json> <output states.json>
"""
import json
import sys


# Government sub-categories are renamed so they read unambiguously in the game.
RENAMES = {
    "Federal civilian": "Federal civilian government",
    "State and local": "State and local government",
}


def with_empty_leaf_children(node: dict) -> dict:
    node = dict(node)
    node["gdpCategory"] = RENAMES.get(node["gdpCategory"], node["gdpCategory"])
    node["children"] = [with_empty_leaf_children(c) for c in node.get("children", [])]
    return node


def build(converted_path: str, out_path: str, geographies_path: str = "stateGeographies.json") -> None:
    with open(converted_path) as f:
        economies = json.load(f)
    with open(geographies_path) as f:
        geographies = json.load(f)

    states = [
        {**geo, "stateEconomy": with_empty_leaf_children(economies[geo["name"]])}
        for geo in geographies
    ]
    with open(out_path, "w") as f:
        json.dump(states, f, indent=2)
        f.write("\n")


if __name__ == "__main__":
    build(*sys.argv[1:3])
