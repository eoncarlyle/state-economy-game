import os

from conversion import Conversion

class Main:
    def __init__(self) -> None:
        Conversion("/Users/iainschmitt/code/state-economy-game/analysis/resources", "BEA_2021_SAGDP2N.csv")

if __name__ == '__main__':
    Main()