from conversion import Conversion
from refactored_conversion import GDPDataConverter

Conversion("./resources", "SGDP2N2022.csv", "2022")
Conversion("./resources", "SGDP2N2023.csv", "2023")

GDPDataConverter("./resources", "SGDP2N2022.csv", 2022)
GDPDataConverter("./resources", "SGDP2N2023.csv", 2023)
