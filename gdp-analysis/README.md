# Updating the GDP data (`gdple-backend/states.json`)

## Where the data comes from

**BEA** (Bureau of Economic Analysis, not BLS): GDP by state by industry, in millions of
current dollars, 2017 NAICS industry detail. BEA publishes new annual state data in late
September and revises the three most recent years each time.

The interactive table (SAGDP2N) was discontinued in Sept 2024, so the website's table picker
no longer works for this. The bulk download still has the data, as table `SAGDP2`:

    https://apps.bea.gov/regional/zip/SAGDP.zip

(Linked from https://apps.bea.gov/regional/downloadzip.htm as "available for download".)
The file needed is `SAGDP2__ALL_AREAS_1997_<latest year>.csv`. Check the "Last updated" line
in `SAGDP2__Footnotes.html` to see which release you have. Ignore the other tables in the zip
(SASUMMARY, SAGDP9 and so on). Those are real GDP or summary stats with no industry breakdown.

## Steps

Run everything from this directory (`gdp-analysis/`) and replace `2025` with the new year.

```sh
# 1. Download and extract just the SAGDP2 csv (use a scratch dir, not the repo)
mkdir /tmp/bea && cd /tmp/bea
curl -LO https://apps.bea.gov/regional/zip/SAGDP.zip
unzip SAGDP.zip 'SAGDP2__ALL_AREAS_*.csv' 'SAGDP2__Footnotes.html'
cd -

# 2. Convert BEA's wide multi-year csv to the legacy single-year format the converter reads
python3 bea_to_legacy_csv.py /tmp/bea/SAGDP2__ALL_AREAS_1997_2025.csv 2025 resources/SGDP2N2025.csv

# 3. Build the nested JSON tree (writes refactoredConvertedStateEconomies2025.json to cwd)
python3 -c "from refactored_conversion import GDPDataConverter; GDPDataConverter('./resources', 'SGDP2N2025.csv', 2025).process()"

# 4. Merge in lat/long (stateGeographies.json) and write the file the backend serves
python3 build_states_json.py refactoredConvertedStateEconomies2025.json ../gdple-backend/states.json
```

Then sanity check with `git diff --stat` and run the app. Things that can break:

- **Industry names or hierarchy changes.** BEA may move to 2022 NAICS in a future release.
  The converter builds the tree from description indentation, so a new level or renamed
  category will either crash it or silently reshape the tree. The frontend and game logic
  may assume particular category names.
- **Column layout changes** in BEA's CSV (`bea_to_legacy_csv.py` indexes columns by position,
  and the year column by header name).
- Whether to keep the manual renames in `build_states_json.py` (`RENAMES`). They exist because
  `states.json` was hand-edited to say "Federal civilian government" and "State and local
  government", and the build script reapplies them so the output stays reproducible.

## Files

| File | What it is |
|---|---|
| `bea_to_legacy_csv.py` | BEA SAGDP2 wide csv -> legacy single-year csv (`resources/SGDP2N<year>.csv`) |
| `refactored_conversion.py` | csv -> nested JSON tree per state. Used by the steps above |
| `conversion.py`, `main.py` | Older version of the converter. `main.py` runs both for 2022 and 2023 |
| `build_states_json.py` | Converter output + `stateGeographies.json` -> `states.json` |
| `resources/SGDP2N<year>.csv` | Legacy-format source data per year |
| `*Transform*.json`, `convertedStateEconomies*.json` | Intermediate outputs from the old converter. Not needed |

Verified: running this pipeline on the 2023 data reproduces the old `states.json` byte-for-byte.
