namespace StateEconomyGame.Model

type Coordinates = { Latitude: float; Longitude: float }

type StateRecord =
    { Name: string
      LatitudeN: float
      LongitudeW: float }

type NonLeafEconomyNodeM = {
    GdpCategory: string
    Gdp: float
}

type LeafEconomyNode = {
    GdpCategory: string
    Children: List<EconomyNode>
} and EconomyNode = Leaf of LeafEconomyNode | NonLeaf of NonLeafEconomyNodeM 

type StateEconomy = { }
  

type Guess =
    { StateRecord: StateRecord
      Distance: float
      Bearing: float
      PercentileScore: float }

