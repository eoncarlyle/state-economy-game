namespace StateEconomyGame.Model

type Coordinates = { Latitude: float; Longitude: float }

type StateRecord =
    { Name: string
      LatitudeN: float
      LongitudeW: float }

type LeafEconomyNode = { GdpCategory: string; Gdp: int64 }

type EconomyNode = //Teaching point: originally had LeafEconomyNode | NonLeafEconomyNode! not same!
    | Leaf of LeafEconomyNode //Showed strange type hints
    | NonLeaf of NonLeafEconomyNode

and NonLeafEconomyNode =
    { GdpCategory: string
      Children: List<NonLeafEconomyNode> }


type Guess =
    { StateRecord: StateRecord
      Distance: float
      Bearing: float
      PercentileScore: float }
