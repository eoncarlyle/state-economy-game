import csv
import json
from typing import List, Dict

class Conversion:
    selected_gdp_categories = [
        "Agriculture, forestry, fishing and hunting",
        "Mining, quarrying, and oil and gas extraction",
        "Utilities",
        "Construction",
        "Manufacturing",
        "Wholesale trade",
        "Retail trade",
        "Transportation and warehousing",
        "Information",
        "Finance, insurance, real estate, rental, and leasing",
        "Professional and business services",
        "Educational services, health care, and social assistance",
        "Arts, entertainment, recreation, accommodation, and food services",
        "Other services (except government and government enterprises)",
        "Federal civilian",
        "Military",
        "State and local",
    ]

    category_conversion = {
        "Agriculture, forestry, fishing and hunting": "naics11",
        "Mining, quarrying, and oil and gas extraction": "naics21",
        "Utilities": "naics22",
        "Construction": "naics23",
        "Manufacturing": "naics31",
        "Wholesale trade": "naics42",
        "Retail trade": "naics44",
        "Transportation and warehousing": "naics48",
        "Information": "naics51",
        "Finance, insurance, real estate, rental, and leasing": "naics52",
        "Professional and business services": "naics54",
        "Educational services, health care, and social assistance": "naics61",
        "Arts, entertainment, recreation, accommodation, and food services": "naics71",
        "Other services (except government and government enterprises)": "naics81",
        "Federal civilian" : "govCivil",
        "Military": "govMil",
        "State and local" : "govStateLocal"
    }

    def __init__(self, directory: str, input_file_name: str) -> None:
        self.file_path = f"{directory}/{input_file_name}" 
        self.state_gdp_categories: Dict[str, str | Dict[str, float]] = {}
        self.state_gdp_list: List[Dict[str, float | Dict[str, float]]] = []
        self.main()

    def main(self) -> None:
        with open(self.file_path, "r") as csv_file_obj:
            reader = csv.reader(csv_file_obj, delimiter=",", quotechar='"')
            for row in reader:
                self.row_handle([i.lstrip() for i in row])

        for state_name in self.state_gdp_categories:
            self.state_gdp_list.append({"name": state_name, "economy": self.state_gdp_categories[state_name]})
        
        with open(self.file_path.replace(".csv", ".json"), "w") as json_file_obj:
            json.dump(self.state_gdp_list, json_file_obj) 

    def row_handle(self, row: List[str]) -> None:
        #Skipping comment rows and headers
        if len(row) < 2 or "GeoFips" in row:
            return

        state_name, category, value = row[1], row[3], row[4]

        if category in self.selected_gdp_categories:
            if state_name not in self.state_gdp_categories.keys():
                self.state_gdp_categories[state_name] = {}
            self.state_gdp_categories[state_name][self.category_conversion[category]] = float(value)
