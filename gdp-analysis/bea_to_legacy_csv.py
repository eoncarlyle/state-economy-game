"""Converts BEA's bulk SAGDP2 CSV (multi-year, wide) into the legacy single-year
SGDP2N format that conversion.py / refactored_conversion.py expect.

Source: https://apps.bea.gov/regional/zip/SAGDP.zip -> SAGDP2__ALL_AREAS_1997_<year>.csv
(BEA GDP by state, current dollars, all industry detail; the interactive SAGDP2N table
was discontinued in 2024 but the bulk ZIP still ships the same data as SAGDP2.)

Usage: python3 bea_to_legacy_csv.py <SAGDP2 csv> <year> <output csv>
"""
import csv
import re
import sys


def convert(src: str, year: str, dst: str) -> None:
    with open(src, encoding="latin-1", newline="") as f:
        rows = list(csv.reader(f, skipinitialspace=True))
    header = rows[0]
    col = header.index(year)

    out = [["GeoFips", "GeoName", "LineCode", "Description", year]]
    for r in rows[1:]:
        if len(r) <= col or not r[0].strip().strip('"').isdigit():
            continue
        desc = r[6]
        # BEA indents with one space per level; the legacy format used two.
        indent = len(desc) - len(desc.lstrip())
        text = re.sub(r"\s(\d+)/$", r" \1", desc.strip())  # "industries 2/" -> "industries 2"
        out.append([r[0].strip().strip('"'), r[1].strip('"'), r[4].strip(),
                    " " * (indent * 2) + text, r[col]])

    with open(dst, "w", newline="") as f:
        csv.writer(f).writerows(out)


if __name__ == "__main__":
    convert(*sys.argv[1:4])
