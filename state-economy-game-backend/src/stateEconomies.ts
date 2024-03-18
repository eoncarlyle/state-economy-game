import { StateEconomies } from "./state-economy-game-util/model";

const stateEconomies: StateEconomies = {
  Indiana: {
    gdpCategory: "All industry total",
    children: [
      {
        gdpCategory: "Agriculture, forestry, fishing and hunting",
        children: [
          { gdpCategory: "Farms", gdp: 8405.3 },
          {
            gdpCategory: "Forestry, fishing, and related activities",
            gdp: 513.5
          }
        ]
      },
      {
        gdpCategory: "Mining, quarrying, and oil and gas extraction",
        children: [
          { gdpCategory: "Oil and gas extraction", gdp: 52.4 },
          { gdpCategory: "Mining (except oil and gas)", gdp: 1677.6 },
          { gdpCategory: "Support activities for mining", gdp: 111.2 }
        ]
      },
      { gdpCategory: "Utilities", gdp: 8697.2 },
      { gdpCategory: "Construction", gdp: 21667.4 },
      {
        gdpCategory: "Manufacturing",
        children: [
          {
            gdpCategory: "Durable goods manufacturing",
            children: [
              { gdpCategory: "Wood product manufacturing", gdp: 1744.3 },
              {
                gdpCategory: "Nonmetallic mineral product manufacturing",
                gdp: 2315.8
              },
              { gdpCategory: "Primary metal manufacturing", gdp: 15296.5 },
              {
                gdpCategory: "Fabricated metal product manufacturing",
                gdp: 7383.6
              },
              { gdpCategory: "Machinery manufacturing", gdp: 7581.2 },
              {
                gdpCategory: "Computer and electronic product manufacturing",
                gdp: 1744.4
              },
              {
                gdpCategory: "Electrical equipment, appliance, and component manufacturing",
                gdp: 1217.0
              },
              {
                gdpCategory: "Motor vehicles, bodies and trailers, and parts manufacturing",
                gdp: 21827.8
              },
              {
                gdpCategory: "Other transportation equipment manufacturing",
                gdp: 2856.2
              },
              {
                gdpCategory: "Furniture and related product manufacturing",
                gdp: 2213.7
              },
              { gdpCategory: "Miscellaneous manufacturing", gdp: 5309.5 }
            ]
          },
          {
            gdpCategory: "Nondurable goods manufacturing",
            children: [
              {
                gdpCategory: "Food and beverage and tobacco product manufacturing",
                gdp: 7669.2
              },
              {
                gdpCategory: "Textile mills and textile product mills",
                gdp: 251.0
              },
              {
                gdpCategory: "Apparel, leather, and allied product manufacturing",
                gdp: 79.7
              },
              { gdpCategory: "Paper manufacturing", gdp: 1581.0 },
              {
                gdpCategory: "Printing and related support activities",
                gdp: 1176.8
              },
              {
                gdpCategory: "Petroleum and coal products manufacturing",
                gdp: 7485.4
              },
              { gdpCategory: "Chemical manufacturing", gdp: 30406.7 },
              {
                gdpCategory: "Plastics and rubber products manufacturing",
                gdp: 3760.8
              }
            ]
          }
        ]
      },
      { gdpCategory: "Wholesale trade", gdp: 27621.5 },
      { gdpCategory: "Retail trade", gdp: 29297.5 },
      {
        gdpCategory: "Transportation and warehousing",
        children: [
          { gdpCategory: "Air transportation", gdp: 798.3 },
          { gdpCategory: "Rail transportation", gdp: 1674.0 },
          { gdpCategory: "Water transportation", gdp: 308.0 },
          { gdpCategory: "Truck transportation", gdp: 8641.6 },
          {
            gdpCategory: "Transit and ground passenger transportation",
            gdp: 436.9
          },
          { gdpCategory: "Pipeline transportation", gdp: 222.3 },
          {
            gdpCategory: "Other transportation and support activities",
            gdp: 3560.0
          },
          { gdpCategory: "Warehousing and storage", gdp: 3702.8 }
        ]
      },
      {
        gdpCategory: "Information",
        children: [
          {
            gdpCategory: "Publishing industries (except Internet)",
            gdp: 1509.2
          },
          {
            gdpCategory: "Motion picture and sound recording industries",
            gdp: 185.5
          },
          {
            gdpCategory: "Broadcasting (except Internet) and telecommunications",
            gdp: 4183.5
          },
          {
            gdpCategory: "Data processing, hosting, and other information services",
            gdp: 1232.7
          }
        ]
      },
      {
        gdpCategory: "Finance, insurance, real estate, rental, and leasing",
        children: [
          {
            gdpCategory: "Finance and insurance",
            children: [
              {
                gdpCategory: "Monetary Authorities- central bank, credit intermediation, and related services",
                gdp: 6863.3
              },
              {
                gdpCategory: "Securities, commodity contracts, and other financial investments and related activities",
                gdp: 1920.1
              },
              {
                gdpCategory: "Insurance carriers and related activities",
                gdp: 14356.9
              },
              {
                gdpCategory: "Funds, trusts, and other financial vehicles",
                gdp: 510.4
              }
            ]
          },
          {
            gdpCategory: "Real estate and rental and leasing",
            children: [
              { gdpCategory: "Real estate", gdp: 43308.4 },
              {
                gdpCategory: "Rental and leasing services and lessors of nonfinancial intangible assets",
                gdp: 5352.8
              }
            ]
          }
        ]
      },
      {
        gdpCategory: "Professional and business services",
        children: [
          {
            gdpCategory: "Professional, scientific, and technical services",
            children: [
              { gdpCategory: "Legal services", gdp: 3252.9 },
              {
                gdpCategory: "Computer systems design and related services",
                gdp: 4882.5
              },
              {
                gdpCategory: "Miscellaneous professional, scientific, and technical services",
                gdp: 13635.6
              }
            ]
          },
          {
            gdpCategory: "Management of companies and enterprises",
            gdp: 5686.3
          },
          {
            gdpCategory: "Administrative and support and waste management and remediation services",
            children: [
              {
                gdpCategory: "Administrative and support services",
                gdp: 12349.7
              },
              {
                gdpCategory: "Waste management and remediation services",
                gdp: 1731.7
              }
            ]
          }
        ]
      },
      {
        gdpCategory: "Educational services, health care, and social assistance",
        children: [
          { gdpCategory: "Educational services", gdp: 4316.1 },
          {
            gdpCategory: "Health care and social assistance",
            children: [
              { gdpCategory: "Ambulatory health care services", gdp: 17579.5 },
              { gdpCategory: "Hospitals", gdp: 13955.7 },
              {
                gdpCategory: "Nursing and residential care facilities",
                gdp: 4058.6
              },
              { gdpCategory: "Social assistance", gdp: 2616.7 }
            ]
          }
        ]
      },
      {
        gdpCategory: "Arts, entertainment, recreation, accommodation, and food services",
        children: [
          {
            gdpCategory: "Arts, entertainment, and recreation",
            children: [
              {
                gdpCategory: "Performing arts, spectator sports, museums, and related activities",
                gdp: 2104.3
              },
              {
                gdpCategory: "Amusement, gambling, and recreation industries",
                gdp: 2443.6
              }
            ]
          },
          {
            gdpCategory: "Accommodation and food services",
            children: [
              { gdpCategory: "Accommodation", gdp: 2700.3 },
              {
                gdpCategory: "Food services and drinking places",
                gdp: 10100.9
              }
            ]
          }
        ]
      },
      {
        gdpCategory: "Other services (except government and government enterprises)",
        gdp: 10319.4
      },
      { gdpCategory: "Federal civilian government", gdp: 6065.1 },
      { gdpCategory: "Military", gdp: 1400.0 },
      { gdpCategory: "State and local government", gdp: 32413.5 }
    ]
  },
  Idaho: {
    gdpCategory: "All industry total",
    children: [
      {
        gdpCategory: "Agriculture, forestry, fishing and hunting",
        children: [
          { gdpCategory: "Farms", gdp: 5152.0 },
          {
            gdpCategory: "Forestry, fishing, and related activities",
            gdp: 754.5
          }
        ]
      },
      {
        gdpCategory: "Mining, quarrying, and oil and gas extraction",
        children: [
          { gdpCategory: "Oil and gas extraction", gdp: 7.7 },
          { gdpCategory: "Mining (except oil and gas)", gdp: 802.6 },
          { gdpCategory: "Support activities for mining", gdp: 39.3 }
        ]
      },
      { gdpCategory: "Utilities", gdp: 1777.4 },
      { gdpCategory: "Construction", gdp: 6942.3 },
      {
        gdpCategory: "Manufacturing",
        children: [
          {
            gdpCategory: "Durable goods manufacturing",
            children: [
              { gdpCategory: "Wood product manufacturing", gdp: 1188.4 },
              {
                gdpCategory: "Nonmetallic mineral product manufacturing",
                gdp: 236.1
              },
              { gdpCategory: "Primary metal manufacturing", gdp: 165.6 },
              {
                gdpCategory: "Fabricated metal product manufacturing",
                gdp: 793.7
              },
              { gdpCategory: "Machinery manufacturing", gdp: 444.8 },
              {
                gdpCategory: "Computer and electronic product manufacturing",
                gdp: 2543.9
              },
              {
                gdpCategory: "Electrical equipment, appliance, and component manufacturing",
                gdp: 176.0
              },
              {
                gdpCategory: "Motor vehicles, bodies and trailers, and parts manufacturing",
                gdp: 234.6
              },
              {
                gdpCategory: "Other transportation equipment manufacturing",
                gdp: 124.9
              },
              {
                gdpCategory: "Furniture and related product manufacturing",
                gdp: 132.5
              },
              { gdpCategory: "Miscellaneous manufacturing", gdp: 195.8 }
            ]
          },
          {
            gdpCategory: "Nondurable goods manufacturing",
            children: [
              {
                gdpCategory: "Food and beverage and tobacco product manufacturing",
                gdp: 3033.4
              },
              {
                gdpCategory: "Textile mills and textile product mills",
                gdp: 24.9
              },
              {
                gdpCategory: "Apparel, leather, and allied product manufacturing",
                gdp: 26.3
              },
              { gdpCategory: "Paper manufacturing", gdp: 409.3 },
              {
                gdpCategory: "Printing and related support activities",
                gdp: 133.1
              },
              {
                gdpCategory: "Petroleum and coal products manufacturing",
                gdp: 16.2
              },
              { gdpCategory: "Chemical manufacturing", gdp: 566.6 },
              {
                gdpCategory: "Plastics and rubber products manufacturing",
                gdp: 280.7
              }
            ]
          }
        ]
      },
      { gdpCategory: "Wholesale trade", gdp: 7980.2 },
      { gdpCategory: "Retail trade", gdp: 9408.4 },
      {
        gdpCategory: "Transportation and warehousing",
        children: [
          { gdpCategory: "Air transportation", gdp: 338.7 },
          { gdpCategory: "Rail transportation", gdp: 460.7 },
          { gdpCategory: "Water transportation", gdp: 6.3 },
          { gdpCategory: "Truck transportation", gdp: 1631.6 },
          {
            gdpCategory: "Transit and ground passenger transportation",
            gdp: 121.9
          },
          { gdpCategory: "Pipeline transportation", gdp: 13.9 },
          {
            gdpCategory: "Other transportation and support activities",
            gdp: 963.5
          },
          { gdpCategory: "Warehousing and storage", gdp: 148.7 }
        ]
      },
      {
        gdpCategory: "Information",
        children: [
          {
            gdpCategory: "Publishing industries (except Internet)",
            gdp: 501.4
          },
          {
            gdpCategory: "Motion picture and sound recording industries",
            gdp: 81.9
          },
          {
            gdpCategory: "Broadcasting (except Internet) and telecommunications",
            gdp: 930.2
          },
          {
            gdpCategory: "Data processing, hosting, and other information services",
            gdp: 796.3
          }
        ]
      },
      {
        gdpCategory: "Finance, insurance, real estate, rental, and leasing",
        children: [
          {
            gdpCategory: "Finance and insurance",
            children: [
              {
                gdpCategory: "Monetary Authorities- central bank, credit intermediation, and related services",
                gdp: 2399.3
              },
              {
                gdpCategory: "Securities, commodity contracts, and other financial investments and related activities",
                gdp: 483.2
              },
              {
                gdpCategory: "Insurance carriers and related activities",
                gdp: 2032.6
              },
              {
                gdpCategory: "Funds, trusts, and other financial vehicles",
                gdp: 174.8
              }
            ]
          },
          {
            gdpCategory: "Real estate and rental and leasing",
            children: [
              { gdpCategory: "Real estate", gdp: 14025.9 },
              {
                gdpCategory: "Rental and leasing services and lessors of nonfinancial intangible assets",
                gdp: 848.1
              }
            ]
          }
        ]
      },
      {
        gdpCategory: "Professional and business services",
        children: [
          {
            gdpCategory: "Professional, scientific, and technical services",
            children: [
              { gdpCategory: "Legal services", gdp: 657.3 },
              {
                gdpCategory: "Computer systems design and related services",
                gdp: 1248.6
              },
              {
                gdpCategory: "Miscellaneous professional, scientific, and technical services",
                gdp: 4784.5
              }
            ]
          },
          {
            gdpCategory: "Management of companies and enterprises",
            gdp: 1225.5
          },
          {
            gdpCategory: "Administrative and support and waste management and remediation services",
            children: [
              {
                gdpCategory: "Administrative and support services",
                gdp: 3381.1
              },
              {
                gdpCategory: "Waste management and remediation services",
                gdp: 787.9
              }
            ]
          }
        ]
      },
      {
        gdpCategory: "Educational services, health care, and social assistance",
        children: [
          { gdpCategory: "Educational services", gdp: 934.3 },
          {
            gdpCategory: "Health care and social assistance",
            children: [
              { gdpCategory: "Ambulatory health care services", gdp: 4250.0 },
              { gdpCategory: "Hospitals", gdp: 3206.6 },
              {
                gdpCategory: "Nursing and residential care facilities",
                gdp: 761.9
              },
              { gdpCategory: "Social assistance", gdp: 643.6 }
            ]
          }
        ]
      },
      {
        gdpCategory: "Arts, entertainment, recreation, accommodation, and food services",
        children: [
          {
            gdpCategory: "Arts, entertainment, and recreation",
            children: [
              {
                gdpCategory: "Performing arts, spectator sports, museums, and related activities",
                gdp: 326.8
              },
              {
                gdpCategory: "Amusement, gambling, and recreation industries",
                gdp: 640.3
              }
            ]
          },
          {
            gdpCategory: "Accommodation and food services",
            children: [
              { gdpCategory: "Accommodation", gdp: 1121.7 },
              { gdpCategory: "Food services and drinking places", gdp: 2790.1 }
            ]
          }
        ]
      },
      {
        gdpCategory: "Other services (except government and government enterprises)",
        gdp: 2274.6
      },
      { gdpCategory: "Federal civilian government", gdp: 2368.4 },
      { gdpCategory: "Military", gdp: 708.0 },
      { gdpCategory: "State and local government", gdp: 9209.7 }
    ]
  },
  Connecticut: {
    gdpCategory: "All industry total",
    children: [
      {
        gdpCategory: "Agriculture, forestry, fishing and hunting",
        children: [
          { gdpCategory: "Farms", gdp: 495.7 },
          {
            gdpCategory: "Forestry, fishing, and related activities",
            gdp: 62.6
          }
        ]
      },
      {
        gdpCategory: "Mining, quarrying, and oil and gas extraction",
        children: [
          { gdpCategory: "Oil and gas extraction", gdp: 0.2 },
          { gdpCategory: "Mining (except oil and gas)", gdp: 145.4 },
          { gdpCategory: "Support activities for mining", gdp: 6.3 }
        ]
      },
      { gdpCategory: "Utilities", gdp: 5231.0 },
      { gdpCategory: "Construction", gdp: 8575.7 },
      {
        gdpCategory: "Manufacturing",
        children: [
          {
            gdpCategory: "Durable goods manufacturing",
            children: [
              { gdpCategory: "Wood product manufacturing", gdp: 84.0 },
              {
                gdpCategory: "Nonmetallic mineral product manufacturing",
                gdp: 286.8
              },
              { gdpCategory: "Primary metal manufacturing", gdp: 429.5 },
              {
                gdpCategory: "Fabricated metal product manufacturing",
                gdp: 4181.0
              },
              { gdpCategory: "Machinery manufacturing", gdp: 1861.4 },
              {
                gdpCategory: "Computer and electronic product manufacturing",
                gdp: 1641.7
              },
              {
                gdpCategory: "Electrical equipment, appliance, and component manufacturing",
                gdp: 1467.7
              },
              {
                gdpCategory: "Motor vehicles, bodies and trailers, and parts manufacturing",
                gdp: 396.1
              },
              {
                gdpCategory: "Other transportation equipment manufacturing",
                gdp: 14298.0
              },
              {
                gdpCategory: "Furniture and related product manufacturing",
                gdp: 222.9
              },
              { gdpCategory: "Miscellaneous manufacturing", gdp: 2945.2 }
            ]
          },
          {
            gdpCategory: "Nondurable goods manufacturing",
            children: [
              {
                gdpCategory: "Food and beverage and tobacco product manufacturing",
                gdp: 1658.6
              },
              {
                gdpCategory: "Textile mills and textile product mills",
                gdp: 162.2
              },
              {
                gdpCategory: "Apparel, leather, and allied product manufacturing",
                gdp: 41.1
              },
              { gdpCategory: "Paper manufacturing", gdp: 758.4 },
              {
                gdpCategory: "Printing and related support activities",
                gdp: 536.2
              },
              {
                gdpCategory: "Petroleum and coal products manufacturing",
                gdp: 186.8
              },
              { gdpCategory: "Chemical manufacturing", gdp: 5829.6 },
              {
                gdpCategory: "Plastics and rubber products manufacturing",
                gdp: 669.0
              }
            ]
          }
        ]
      },
      { gdpCategory: "Wholesale trade", gdp: 18004.7 },
      { gdpCategory: "Retail trade", gdp: 18660.2 },
      {
        gdpCategory: "Transportation and warehousing",
        children: [
          { gdpCategory: "Air transportation", gdp: 531.0 },
          { gdpCategory: "Rail transportation", gdp: 108.4 },
          { gdpCategory: "Water transportation", gdp: 196.6 },
          { gdpCategory: "Truck transportation", gdp: 1438.5 },
          {
            gdpCategory: "Transit and ground passenger transportation",
            gdp: 1025.2
          },
          { gdpCategory: "Pipeline transportation", gdp: 1098.0 },
          {
            gdpCategory: "Other transportation and support activities",
            gdp: 1853.5
          },
          { gdpCategory: "Warehousing and storage", gdp: 1336.3 }
        ]
      },
      {
        gdpCategory: "Information",
        children: [
          {
            gdpCategory: "Publishing industries (except Internet)",
            gdp: 2587.4
          },
          {
            gdpCategory: "Motion picture and sound recording industries",
            gdp: 1303.0
          },
          {
            gdpCategory: "Broadcasting (except Internet) and telecommunications",
            gdp: 11006.1
          },
          {
            gdpCategory: "Data processing, hosting, and other information services",
            gdp: 2986.2
          }
        ]
      },
      {
        gdpCategory: "Finance, insurance, real estate, rental, and leasing",
        children: [
          {
            gdpCategory: "Finance and insurance",
            children: [
              {
                gdpCategory: "Monetary Authorities- central bank, credit intermediation, and related services",
                gdp: 7676.4
              },
              {
                gdpCategory: "Securities, commodity contracts, and other financial investments and related activities",
                gdp: 11784.2
              },
              {
                gdpCategory: "Insurance carriers and related activities",
                gdp: 22675.2
              },
              {
                gdpCategory: "Funds, trusts, and other financial vehicles",
                gdp: 207.3
              }
            ]
          },
          {
            gdpCategory: "Real estate and rental and leasing",
            children: [
              { gdpCategory: "Real estate", gdp: 37078.8 },
              {
                gdpCategory: "Rental and leasing services and lessors of nonfinancial intangible assets",
                gdp: 5716.0
              }
            ]
          }
        ]
      },
      {
        gdpCategory: "Professional and business services",
        children: [
          {
            gdpCategory: "Professional, scientific, and technical services",
            children: [
              { gdpCategory: "Legal services", gdp: 3717.8 },
              {
                gdpCategory: "Computer systems design and related services",
                gdp: 4177.2
              },
              {
                gdpCategory: "Miscellaneous professional, scientific, and technical services",
                gdp: 14902.5
              }
            ]
          },
          {
            gdpCategory: "Management of companies and enterprises",
            gdp: 7045.5
          },
          {
            gdpCategory: "Administrative and support and waste management and remediation services",
            children: [
              {
                gdpCategory: "Administrative and support services",
                gdp: 8294.7
              },
              {
                gdpCategory: "Waste management and remediation services",
                gdp: 995.6
              }
            ]
          }
        ]
      },
      {
        gdpCategory: "Educational services, health care, and social assistance",
        children: [
          { gdpCategory: "Educational services", gdp: 7587.1 },
          {
            gdpCategory: "Health care and social assistance",
            children: [
              { gdpCategory: "Ambulatory health care services", gdp: 11960.6 },
              { gdpCategory: "Hospitals", gdp: 7651.4 },
              {
                gdpCategory: "Nursing and residential care facilities",
                gdp: 3783.6
              },
              { gdpCategory: "Social assistance", gdp: 2970.7 }
            ]
          }
        ]
      },
      {
        gdpCategory: "Arts, entertainment, recreation, accommodation, and food services",
        children: [
          {
            gdpCategory: "Arts, entertainment, and recreation",
            children: [
              {
                gdpCategory: "Performing arts, spectator sports, museums, and related activities",
                gdp: 1984.2
              },
              {
                gdpCategory: "Amusement, gambling, and recreation industries",
                gdp: 1481.1
              }
            ]
          },
          {
            gdpCategory: "Accommodation and food services",
            children: [
              { gdpCategory: "Accommodation", gdp: 1290.5 },
              { gdpCategory: "Food services and drinking places", gdp: 6670.5 }
            ]
          }
        ]
      },
      {
        gdpCategory: "Other services (except government and government enterprises)",
        gdp: 6223.9
      },
      { gdpCategory: "Federal civilian government", gdp: 3698.2 },
      { gdpCategory: "Military", gdp: 2882.5 },
      { gdpCategory: "State and local government", gdp: 22581.5 }
    ]
  },
  Montana: {
    gdpCategory: "All industry total",
    children: [
      {
        gdpCategory: "Agriculture, forestry, fishing and hunting",
        children: [
          { gdpCategory: "Farms", gdp: 2192.3 },
          {
            gdpCategory: "Forestry, fishing, and related activities",
            gdp: 373.4
          }
        ]
      },
      {
        gdpCategory: "Mining, quarrying, and oil and gas extraction",
        children: [
          { gdpCategory: "Oil and gas extraction", gdp: 816.3 },
          { gdpCategory: "Mining (except oil and gas)", gdp: 1779.1 },
          { gdpCategory: "Support activities for mining", gdp: 178.1 }
        ]
      },
      { gdpCategory: "Utilities", gdp: 1299.4 },
      { gdpCategory: "Construction", gdp: 4182.6 },
      {
        gdpCategory: "Manufacturing",
        children: [
          {
            gdpCategory: "Durable goods manufacturing",
            children: [
              { gdpCategory: "Wood product manufacturing", gdp: 355.1 },
              {
                gdpCategory: "Nonmetallic mineral product manufacturing",
                gdp: 200.5
              },
              { gdpCategory: "Primary metal manufacturing", gdp: 48.9 },
              {
                gdpCategory: "Fabricated metal product manufacturing",
                gdp: 238.7
              },
              { gdpCategory: "Machinery manufacturing", gdp: 161.4 },
              {
                gdpCategory: "Computer and electronic product manufacturing",
                gdp: 113.1
              },
              {
                gdpCategory: "Electrical equipment, appliance, and component manufacturing",
                gdp: 14.2
              },
              {
                gdpCategory: "Motor vehicles, bodies and trailers, and parts manufacturing",
                gdp: 53.5
              },
              {
                gdpCategory: "Other transportation equipment manufacturing",
                gdp: 42.6
              },
              {
                gdpCategory: "Furniture and related product manufacturing",
                gdp: 42.8
              },
              { gdpCategory: "Miscellaneous manufacturing", gdp: 244.9 }
            ]
          },
          {
            gdpCategory: "Nondurable goods manufacturing",
            children: [
              {
                gdpCategory: "Food and beverage and tobacco product manufacturing",
                gdp: 295.2
              },
              {
                gdpCategory: "Textile mills and textile product mills",
                gdp: 8.6
              },
              {
                gdpCategory: "Apparel, leather, and allied product manufacturing",
                gdp: 7.3
              },
              { gdpCategory: "Paper manufacturing", gdp: 1.7 },
              {
                gdpCategory: "Printing and related support activities",
                gdp: 103.4
              },
              {
                gdpCategory: "Petroleum and coal products manufacturing",
                gdp: 1800.0
              },
              { gdpCategory: "Chemical manufacturing", gdp: 244.9 },
              {
                gdpCategory: "Plastics and rubber products manufacturing",
                gdp: 42.1
              }
            ]
          }
        ]
      },
      { gdpCategory: "Wholesale trade", gdp: 3695.2 },
      { gdpCategory: "Retail trade", gdp: 4925.0 },
      {
        gdpCategory: "Transportation and warehousing",
        children: [
          { gdpCategory: "Air transportation", gdp: 241.0 },
          { gdpCategory: "Rail transportation", gdp: 1219.2 },
          { gdpCategory: "Water transportation", gdp: 2.3 },
          { gdpCategory: "Truck transportation", gdp: 785.8 },
          {
            gdpCategory: "Transit and ground passenger transportation",
            gdp: 82.7
          },
          { gdpCategory: "Pipeline transportation", gdp: 191.5 },
          {
            gdpCategory: "Other transportation and support activities",
            gdp: 550.0
          },
          { gdpCategory: "Warehousing and storage", gdp: 24.7 }
        ]
      },
      {
        gdpCategory: "Information",
        children: [
          {
            gdpCategory: "Publishing industries (except Internet)",
            gdp: 405.8
          },
          {
            gdpCategory: "Motion picture and sound recording industries",
            gdp: 115.7
          },
          {
            gdpCategory: "Broadcasting (except Internet) and telecommunications",
            gdp: 877.9
          },
          {
            gdpCategory: "Data processing, hosting, and other information services",
            gdp: 225.3
          }
        ]
      },
      {
        gdpCategory: "Finance, insurance, real estate, rental, and leasing",
        children: [
          {
            gdpCategory: "Finance and insurance",
            children: [
              {
                gdpCategory: "Monetary Authorities- central bank, credit intermediation, and related services",
                gdp: 1888.7
              },
              {
                gdpCategory: "Securities, commodity contracts, and other financial investments and related activities",
                gdp: 312.8
              },
              {
                gdpCategory: "Insurance carriers and related activities",
                gdp: 1059.4
              },
              {
                gdpCategory: "Funds, trusts, and other financial vehicles",
                gdp: 12.2
              }
            ]
          },
          {
            gdpCategory: "Real estate and rental and leasing",
            children: [
              { gdpCategory: "Real estate", gdp: 8230.7 },
              {
                gdpCategory: "Rental and leasing services and lessors of nonfinancial intangible assets",
                gdp: 740.6
              }
            ]
          }
        ]
      },
      {
        gdpCategory: "Professional and business services",
        children: [
          {
            gdpCategory: "Professional, scientific, and technical services",
            children: [
              { gdpCategory: "Legal services", gdp: 556.7 },
              {
                gdpCategory: "Computer systems design and related services",
                gdp: 854.8
              },
              {
                gdpCategory: "Miscellaneous professional, scientific, and technical services",
                gdp: 2404.7
              }
            ]
          },
          {
            gdpCategory: "Management of companies and enterprises",
            gdp: 282.6
          },
          {
            gdpCategory: "Administrative and support and waste management and remediation services",
            children: [
              {
                gdpCategory: "Administrative and support services",
                gdp: 1537.7
              },
              {
                gdpCategory: "Waste management and remediation services",
                gdp: 174.4
              }
            ]
          }
        ]
      },
      {
        gdpCategory: "Educational services, health care, and social assistance",
        children: [
          { gdpCategory: "Educational services", gdp: 346.3 },
          {
            gdpCategory: "Health care and social assistance",
            children: [
              { gdpCategory: "Ambulatory health care services", gdp: 2492.6 },
              { gdpCategory: "Hospitals", gdp: 2921.7 },
              {
                gdpCategory: "Nursing and residential care facilities",
                gdp: 549.0
              },
              { gdpCategory: "Social assistance", gdp: 430.3 }
            ]
          }
        ]
      },
      {
        gdpCategory: "Arts, entertainment, recreation, accommodation, and food services",
        children: [
          {
            gdpCategory: "Arts, entertainment, and recreation",
            children: [
              {
                gdpCategory: "Performing arts, spectator sports, museums, and related activities",
                gdp: 287.5
              },
              {
                gdpCategory: "Amusement, gambling, and recreation industries",
                gdp: 611.2
              }
            ]
          },
          {
            gdpCategory: "Accommodation and food services",
            children: [
              { gdpCategory: "Accommodation", gdp: 1247.1 },
              { gdpCategory: "Food services and drinking places", gdp: 1773.8 }
            ]
          }
        ]
      },
      {
        gdpCategory: "Other services (except government and government enterprises)",
        gdp: 1513.7
      },
      { gdpCategory: "Federal civilian government", gdp: 1964.4 },
      { gdpCategory: "Military", gdp: 615.6 },
      { gdpCategory: "State and local government", gdp: 6081.3 }
    ]
  },
  "New York": {
    gdpCategory: "All industry total",
    children: [
      {
        gdpCategory: "Agriculture, forestry, fishing and hunting",
        children: [
          { gdpCategory: "Farms", gdp: 4623.4 },
          {
            gdpCategory: "Forestry, fishing, and related activities",
            gdp: 570.4
          }
        ]
      },
      {
        gdpCategory: "Mining, quarrying, and oil and gas extraction",
        children: [
          { gdpCategory: "Oil and gas extraction", gdp: 98.0 },
          { gdpCategory: "Mining (except oil and gas)", gdp: 750.5 },
          { gdpCategory: "Support activities for mining", gdp: 67.9 }
        ]
      },
      { gdpCategory: "Utilities", gdp: 31438.5 },
      { gdpCategory: "Construction", gdp: 59162.8 },
      {
        gdpCategory: "Manufacturing",
        children: [
          {
            gdpCategory: "Durable goods manufacturing",
            children: [
              { gdpCategory: "Wood product manufacturing", gdp: 742.2 },
              {
                gdpCategory: "Nonmetallic mineral product manufacturing",
                gdp: 3842.2
              },
              { gdpCategory: "Primary metal manufacturing", gdp: 1880.5 },
              {
                gdpCategory: "Fabricated metal product manufacturing",
                gdp: 5173.4
              },
              { gdpCategory: "Machinery manufacturing", gdp: 5118.3 },
              {
                gdpCategory: "Computer and electronic product manufacturing",
                gdp: 10206.4
              },
              {
                gdpCategory: "Electrical equipment, appliance, and component manufacturing",
                gdp: 1721.2
              },
              {
                gdpCategory: "Motor vehicles, bodies and trailers, and parts manufacturing",
                gdp: 1452.5
              },
              {
                gdpCategory: "Other transportation equipment manufacturing",
                gdp: 1337.6
              },
              {
                gdpCategory: "Furniture and related product manufacturing",
                gdp: 814.7
              },
              { gdpCategory: "Miscellaneous manufacturing", gdp: 3735.5 }
            ]
          },
          {
            gdpCategory: "Nondurable goods manufacturing",
            children: [
              {
                gdpCategory: "Food and beverage and tobacco product manufacturing",
                gdp: 10760.1
              },
              {
                gdpCategory: "Textile mills and textile product mills",
                gdp: 515.2
              },
              {
                gdpCategory: "Apparel, leather, and allied product manufacturing",
                gdp: 973.6
              },
              { gdpCategory: "Paper manufacturing", gdp: 2361.7 },
              {
                gdpCategory: "Printing and related support activities",
                gdp: 2178.9
              },
              {
                gdpCategory: "Petroleum and coal products manufacturing",
                gdp: 1138.9
              },
              { gdpCategory: "Chemical manufacturing", gdp: 22312.8 },
              {
                gdpCategory: "Plastics and rubber products manufacturing",
                gdp: 4458.4
              }
            ]
          }
        ]
      },
      { gdpCategory: "Wholesale trade", gdp: 84111.2 },
      { gdpCategory: "Retail trade", gdp: 99316.6 },
      {
        gdpCategory: "Transportation and warehousing",
        children: [
          { gdpCategory: "Air transportation", gdp: 10905.1 },
          { gdpCategory: "Rail transportation", gdp: 969.7 },
          { gdpCategory: "Water transportation", gdp: 872.0 },
          { gdpCategory: "Truck transportation", gdp: 6608.6 },
          {
            gdpCategory: "Transit and ground passenger transportation",
            gdp: 10520.0
          },
          { gdpCategory: "Pipeline transportation", gdp: 615.3 },
          {
            gdpCategory: "Other transportation and support activities",
            gdp: 9366.0
          },
          { gdpCategory: "Warehousing and storage", gdp: 3347.9 }
        ]
      },
      {
        gdpCategory: "Information",
        children: [
          {
            gdpCategory: "Publishing industries (except Internet)",
            gdp: 30627.6
          },
          {
            gdpCategory: "Motion picture and sound recording industries",
            gdp: 20755.5
          },
          {
            gdpCategory: "Broadcasting (except Internet) and telecommunications",
            gdp: 68300.3
          },
          {
            gdpCategory: "Data processing, hosting, and other information services",
            gdp: 50381.5
          }
        ]
      },
      {
        gdpCategory: "Finance, insurance, real estate, rental, and leasing",
        children: [
          {
            gdpCategory: "Finance and insurance",
            children: [
              {
                gdpCategory: "Monetary Authorities- central bank, credit intermediation, and related services",
                gdp: 213046.4
              },
              {
                gdpCategory: "Securities, commodity contracts, and other financial investments and related activities",
                gdp: 125425.6
              },
              {
                gdpCategory: "Insurance carriers and related activities",
                gdp: 76625.1
              },
              {
                gdpCategory: "Funds, trusts, and other financial vehicles",
                gdp: 2260.3
              }
            ]
          },
          {
            gdpCategory: "Real estate and rental and leasing",
            children: [
              { gdpCategory: "Real estate", gdp: 266482.0 },
              {
                gdpCategory: "Rental and leasing services and lessors of nonfinancial intangible assets",
                gdp: 21161.4
              }
            ]
          }
        ]
      },
      {
        gdpCategory: "Professional and business services",
        children: [
          {
            gdpCategory: "Professional, scientific, and technical services",
            children: [
              { gdpCategory: "Legal services", gdp: 46947.0 },
              {
                gdpCategory: "Computer systems design and related services",
                gdp: 26843.9
              },
              {
                gdpCategory: "Miscellaneous professional, scientific, and technical services",
                gdp: 101060.7
              }
            ]
          },
          {
            gdpCategory: "Management of companies and enterprises",
            gdp: 32223.8
          },
          {
            gdpCategory: "Administrative and support and waste management and remediation services",
            children: [
              {
                gdpCategory: "Administrative and support services",
                gdp: 47517.8
              },
              {
                gdpCategory: "Waste management and remediation services",
                gdp: 3507.0
              }
            ]
          }
        ]
      },
      {
        gdpCategory: "Educational services, health care, and social assistance",
        children: [
          { gdpCategory: "Educational services", gdp: 39458.2 },
          {
            gdpCategory: "Health care and social assistance",
            children: [
              { gdpCategory: "Ambulatory health care services", gdp: 61621.6 },
              { gdpCategory: "Hospitals", gdp: 50946.0 },
              {
                gdpCategory: "Nursing and residential care facilities",
                gdp: 15044.9
              },
              { gdpCategory: "Social assistance", gdp: 19196.5 }
            ]
          }
        ]
      },
      {
        gdpCategory: "Arts, entertainment, recreation, accommodation, and food services",
        children: [
          {
            gdpCategory: "Arts, entertainment, and recreation",
            children: [
              {
                gdpCategory: "Performing arts, spectator sports, museums, and related activities",
                gdp: 26824.8
              },
              {
                gdpCategory: "Amusement, gambling, and recreation industries",
                gdp: 5257.0
              }
            ]
          },
          {
            gdpCategory: "Accommodation and food services",
            children: [
              { gdpCategory: "Accommodation", gdp: 17659.9 },
              {
                gdpCategory: "Food services and drinking places",
                gdp: 39231.1
              }
            ]
          }
        ]
      },
      {
        gdpCategory: "Other services (except government and government enterprises)",
        gdp: 37657.0
      },
      { gdpCategory: "Federal civilian government", gdp: 22736.3 },
      { gdpCategory: "Military", gdp: 5652.8 },
      { gdpCategory: "State and local government", gdp: 169882.7 }
    ]
  },
  Virginia: {
    gdpCategory: "All industry total",
    children: [
      {
        gdpCategory: "Agriculture, forestry, fishing and hunting",
        children: [
          { gdpCategory: "Farms", gdp: 2475.6 },
          {
            gdpCategory: "Forestry, fishing, and related activities",
            gdp: 549.9
          }
        ]
      },
      {
        gdpCategory: "Mining, quarrying, and oil and gas extraction",
        children: [
          { gdpCategory: "Oil and gas extraction", gdp: 96.4 },
          { gdpCategory: "Mining (except oil and gas)", gdp: 2089.1 },
          { gdpCategory: "Support activities for mining", gdp: 91.2 }
        ]
      },
      { gdpCategory: "Utilities", gdp: 10140.8 },
      { gdpCategory: "Construction", gdp: 30797.5 },
      {
        gdpCategory: "Manufacturing",
        children: [
          {
            gdpCategory: "Durable goods manufacturing",
            children: [
              { gdpCategory: "Wood product manufacturing", gdp: 1991.6 },
              {
                gdpCategory: "Nonmetallic mineral product manufacturing",
                gdp: 1649.9
              },
              { gdpCategory: "Primary metal manufacturing", gdp: 931.3 },
              {
                gdpCategory: "Fabricated metal product manufacturing",
                gdp: 2346.4
              },
              { gdpCategory: "Machinery manufacturing", gdp: 2420.8 },
              {
                gdpCategory: "Computer and electronic product manufacturing",
                gdp: 2415.2
              },
              {
                gdpCategory: "Electrical equipment, appliance, and component manufacturing",
                gdp: 849.4
              },
              {
                gdpCategory: "Motor vehicles, bodies and trailers, and parts manufacturing",
                gdp: 1963.4
              },
              {
                gdpCategory: "Other transportation equipment manufacturing",
                gdp: 6159.3
              },
              {
                gdpCategory: "Furniture and related product manufacturing",
                gdp: 755.6
              },
              { gdpCategory: "Miscellaneous manufacturing", gdp: 1005.0 }
            ]
          },
          {
            gdpCategory: "Nondurable goods manufacturing",
            children: [
              {
                gdpCategory: "Food and beverage and tobacco product manufacturing",
                gdp: 18560.7
              },
              {
                gdpCategory: "Textile mills and textile product mills",
                gdp: 566.7
              },
              {
                gdpCategory: "Apparel, leather, and allied product manufacturing",
                gdp: 93.8
              },
              { gdpCategory: "Paper manufacturing", gdp: 1352.1 },
              {
                gdpCategory: "Printing and related support activities",
                gdp: 714.7
              },
              {
                gdpCategory: "Petroleum and coal products manufacturing",
                gdp: 457.8
              },
              { gdpCategory: "Chemical manufacturing", gdp: 3351.9 },
              {
                gdpCategory: "Plastics and rubber products manufacturing",
                gdp: 2146.6
              }
            ]
          }
        ]
      },
      { gdpCategory: "Wholesale trade", gdp: 30509.2 },
      { gdpCategory: "Retail trade", gdp: 39611.1 },
      {
        gdpCategory: "Transportation and warehousing",
        children: [
          { gdpCategory: "Air transportation", gdp: 3900.6 },
          { gdpCategory: "Rail transportation", gdp: 1033.5 },
          { gdpCategory: "Water transportation", gdp: 957.7 },
          { gdpCategory: "Truck transportation", gdp: 4597.3 },
          {
            gdpCategory: "Transit and ground passenger transportation",
            gdp: 1245.7
          },
          { gdpCategory: "Pipeline transportation", gdp: 105.7 },
          {
            gdpCategory: "Other transportation and support activities",
            gdp: 4939.7
          },
          { gdpCategory: "Warehousing and storage", gdp: 2572.0 }
        ]
      },
      {
        gdpCategory: "Information",
        children: [
          {
            gdpCategory: "Publishing industries (except Internet)",
            gdp: 5186.6
          },
          {
            gdpCategory: "Motion picture and sound recording industries",
            gdp: 1071.2
          },
          {
            gdpCategory: "Broadcasting (except Internet) and telecommunications",
            gdp: 11581.5
          },
          {
            gdpCategory: "Data processing, hosting, and other information services",
            gdp: 9675.8
          }
        ]
      },
      {
        gdpCategory: "Finance, insurance, real estate, rental, and leasing",
        children: [
          {
            gdpCategory: "Finance and insurance",
            children: [
              {
                gdpCategory: "Monetary Authorities- central bank, credit intermediation, and related services",
                gdp: 20171.2
              },
              {
                gdpCategory: "Securities, commodity contracts, and other financial investments and related activities",
                gdp: 4247.0
              },
              {
                gdpCategory: "Insurance carriers and related activities",
                gdp: 11783.2
              },
              {
                gdpCategory: "Funds, trusts, and other financial vehicles",
                gdp: 445.2
              }
            ]
          },
          {
            gdpCategory: "Real estate and rental and leasing",
            children: [
              { gdpCategory: "Real estate", gdp: 84663.9 },
              {
                gdpCategory: "Rental and leasing services and lessors of nonfinancial intangible assets",
                gdp: 4906.9
              }
            ]
          }
        ]
      },
      {
        gdpCategory: "Professional and business services",
        children: [
          {
            gdpCategory: "Professional, scientific, and technical services",
            children: [
              { gdpCategory: "Legal services", gdp: 7308.4 },
              {
                gdpCategory: "Computer systems design and related services",
                gdp: 31487.5
              },
              {
                gdpCategory: "Miscellaneous professional, scientific, and technical services",
                gdp: 47171.2
              }
            ]
          },
          {
            gdpCategory: "Management of companies and enterprises",
            gdp: 16564.6
          },
          {
            gdpCategory: "Administrative and support and waste management and remediation services",
            children: [
              {
                gdpCategory: "Administrative and support services",
                gdp: 22845.5
              },
              {
                gdpCategory: "Waste management and remediation services",
                gdp: 1308.1
              }
            ]
          }
        ]
      },
      {
        gdpCategory: "Educational services, health care, and social assistance",
        children: [
          { gdpCategory: "Educational services", gdp: 5823.5 },
          {
            gdpCategory: "Health care and social assistance",
            children: [
              { gdpCategory: "Ambulatory health care services", gdp: 22380.9 },
              { gdpCategory: "Hospitals", gdp: 11408.5 },
              {
                gdpCategory: "Nursing and residential care facilities",
                gdp: 4086.0
              },
              { gdpCategory: "Social assistance", gdp: 3615.2 }
            ]
          }
        ]
      },
      {
        gdpCategory: "Arts, entertainment, recreation, accommodation, and food services",
        children: [
          {
            gdpCategory: "Arts, entertainment, and recreation",
            children: [
              {
                gdpCategory: "Performing arts, spectator sports, museums, and related activities",
                gdp: 3029.4
              },
              {
                gdpCategory: "Amusement, gambling, and recreation industries",
                gdp: 2107.2
              }
            ]
          },
          {
            gdpCategory: "Accommodation and food services",
            children: [
              { gdpCategory: "Accommodation", gdp: 3883.0 },
              {
                gdpCategory: "Food services and drinking places",
                gdp: 14199.6
              }
            ]
          }
        ]
      },
      {
        gdpCategory: "Other services (except government and government enterprises)",
        gdp: 16621.1
      },
      { gdpCategory: "Federal civilian government", gdp: 38958.3 },
      { gdpCategory: "Military", gdp: 20720.2 },
      { gdpCategory: "State and local government", gdp: 50410.1 }
    ]
  },
  "West Virginia": {
    gdpCategory: "All industry total",
    children: [
      {
        gdpCategory: "Agriculture, forestry, fishing and hunting",
        children: [
          { gdpCategory: "Farms", gdp: 241.1 },
          {
            gdpCategory: "Forestry, fishing, and related activities",
            gdp: 134.9
          }
        ]
      },
      {
        gdpCategory: "Mining, quarrying, and oil and gas extraction",
        children: [
          { gdpCategory: "Oil and gas extraction", gdp: 7547.1 },
          { gdpCategory: "Mining (except oil and gas)", gdp: 8459.3 },
          { gdpCategory: "Support activities for mining", gdp: 773.9 }
        ]
      },
      { gdpCategory: "Utilities", gdp: 2695.7 },
      { gdpCategory: "Construction", gdp: 3502.5 },
      {
        gdpCategory: "Manufacturing",
        children: [
          {
            gdpCategory: "Durable goods manufacturing",
            children: [
              { gdpCategory: "Wood product manufacturing", gdp: 685.4 },
              {
                gdpCategory: "Nonmetallic mineral product manufacturing",
                gdp: 424.6
              },
              { gdpCategory: "Primary metal manufacturing", gdp: 832.0 },
              {
                gdpCategory: "Fabricated metal product manufacturing",
                gdp: 490.9
              },
              { gdpCategory: "Machinery manufacturing", gdp: 191.6 },
              {
                gdpCategory: "Computer and electronic product manufacturing",
                gdp: 42.8
              },
              {
                gdpCategory: "Electrical equipment, appliance, and component manufacturing",
                gdp: 46.1
              },
              {
                gdpCategory: "Motor vehicles, bodies and trailers, and parts manufacturing",
                gdp: 840.1
              },
              {
                gdpCategory: "Other transportation equipment manufacturing",
                gdp: 341.6
              },
              {
                gdpCategory: "Furniture and related product manufacturing",
                gdp: 67.1
              },
              { gdpCategory: "Miscellaneous manufacturing", gdp: 175.3 }
            ]
          },
          {
            gdpCategory: "Nondurable goods manufacturing",
            children: [
              {
                gdpCategory: "Food and beverage and tobacco product manufacturing",
                gdp: 331.1
              },
              {
                gdpCategory: "Textile mills and textile product mills",
                gdp: 6.2
              },
              {
                gdpCategory: "Apparel, leather, and allied product manufacturing",
                gdp: 5.0
              },
              { gdpCategory: "Paper manufacturing", gdp: 76.7 },
              {
                gdpCategory: "Printing and related support activities",
                gdp: 73.4
              },
              {
                gdpCategory: "Petroleum and coal products manufacturing",
                gdp: 414.0
              },
              { gdpCategory: "Chemical manufacturing", gdp: 3140.7 },
              {
                gdpCategory: "Plastics and rubber products manufacturing",
                gdp: 467.7
              }
            ]
          }
        ]
      },
      { gdpCategory: "Wholesale trade", gdp: 4264.3 },
      { gdpCategory: "Retail trade", gdp: 6880.8 },
      {
        gdpCategory: "Transportation and warehousing",
        children: [
          { gdpCategory: "Air transportation", gdp: 32.4 },
          { gdpCategory: "Rail transportation", gdp: 541.1 },
          { gdpCategory: "Water transportation", gdp: 49.5 },
          { gdpCategory: "Truck transportation", gdp: 899.5 },
          {
            gdpCategory: "Transit and ground passenger transportation",
            gdp: 27.9
          },
          { gdpCategory: "Pipeline transportation", gdp: 370.9 },
          {
            gdpCategory: "Other transportation and support activities",
            gdp: 644.1
          },
          { gdpCategory: "Warehousing and storage", gdp: 231.6 }
        ]
      },
      {
        gdpCategory: "Information",
        children: [
          {
            gdpCategory: "Publishing industries (except Internet)",
            gdp: 262.3
          },
          {
            gdpCategory: "Motion picture and sound recording industries",
            gdp: 25.8
          },
          {
            gdpCategory: "Broadcasting (except Internet) and telecommunications",
            gdp: 1088.9
          },
          {
            gdpCategory: "Data processing, hosting, and other information services",
            gdp: 296.8
          }
        ]
      },
      {
        gdpCategory: "Finance, insurance, real estate, rental, and leasing",
        children: [
          {
            gdpCategory: "Finance and insurance",
            children: [
              {
                gdpCategory: "Monetary Authorities- central bank, credit intermediation, and related services",
                gdp: 1302.4
              },
              {
                gdpCategory: "Securities, commodity contracts, and other financial investments and related activities",
                gdp: 205.8
              },
              {
                gdpCategory: "Insurance carriers and related activities",
                gdp: 1733.8
              },
              {
                gdpCategory: "Funds, trusts, and other financial vehicles",
                gdp: 15.4
              }
            ]
          },
          {
            gdpCategory: "Real estate and rental and leasing",
            children: [
              { gdpCategory: "Real estate", gdp: 8744.2 },
              {
                gdpCategory: "Rental and leasing services and lessors of nonfinancial intangible assets",
                gdp: 628.2
              }
            ]
          }
        ]
      },
      {
        gdpCategory: "Professional and business services",
        children: [
          {
            gdpCategory: "Professional, scientific, and technical services",
            children: [
              { gdpCategory: "Legal services", gdp: 961.9 },
              {
                gdpCategory: "Computer systems design and related services",
                gdp: 656.7
              },
              {
                gdpCategory: "Miscellaneous professional, scientific, and technical services",
                gdp: 1956.0
              }
            ]
          },
          {
            gdpCategory: "Management of companies and enterprises",
            gdp: 925.5
          },
          {
            gdpCategory: "Administrative and support and waste management and remediation services",
            children: [
              {
                gdpCategory: "Administrative and support services",
                gdp: 2274.7
              },
              {
                gdpCategory: "Waste management and remediation services",
                gdp: 321.3
              }
            ]
          }
        ]
      },
      {
        gdpCategory: "Educational services, health care, and social assistance",
        children: [
          { gdpCategory: "Educational services", gdp: 441.7 },
          {
            gdpCategory: "Health care and social assistance",
            children: [
              { gdpCategory: "Ambulatory health care services", gdp: 3876.7 },
              { gdpCategory: "Hospitals", gdp: 4083.7 },
              {
                gdpCategory: "Nursing and residential care facilities",
                gdp: 908.4
              },
              { gdpCategory: "Social assistance", gdp: 749.1 }
            ]
          }
        ]
      },
      {
        gdpCategory: "Arts, entertainment, recreation, accommodation, and food services",
        children: [
          {
            gdpCategory: "Arts, entertainment, and recreation",
            children: [
              {
                gdpCategory: "Performing arts, spectator sports, museums, and related activities",
                gdp: 182.9
              },
              {
                gdpCategory: "Amusement, gambling, and recreation industries",
                gdp: 356.1
              }
            ]
          },
          {
            gdpCategory: "Accommodation and food services",
            children: [
              { gdpCategory: "Accommodation", gdp: 893.5 },
              { gdpCategory: "Food services and drinking places", gdp: 2004.8 }
            ]
          }
        ]
      },
      {
        gdpCategory: "Other services (except government and government enterprises)",
        gdp: 1910.0
      },
      { gdpCategory: "Federal civilian government", gdp: 4083.5 },
      { gdpCategory: "Military", gdp: 423.0 },
      { gdpCategory: "State and local government", gdp: 10155.2 }
    ]
  },
  Washington: {
    gdpCategory: "All industry total",
    children: [
      {
        gdpCategory: "Agriculture, forestry, fishing and hunting",
        children: [
          { gdpCategory: "Farms", gdp: 7156.6 },
          {
            gdpCategory: "Forestry, fishing, and related activities",
            gdp: 2994.3
          }
        ]
      },
      {
        gdpCategory: "Mining, quarrying, and oil and gas extraction",
        children: [
          { gdpCategory: "Oil and gas extraction", gdp: 4.9 },
          { gdpCategory: "Mining (except oil and gas)", gdp: 521.7 },
          { gdpCategory: "Support activities for mining", gdp: 27.2 }
        ]
      },
      { gdpCategory: "Utilities", gdp: 6594.7 },
      { gdpCategory: "Construction", gdp: 31903.9 },
      {
        gdpCategory: "Manufacturing",
        children: [
          {
            gdpCategory: "Durable goods manufacturing",
            children: [
              { gdpCategory: "Wood product manufacturing", gdp: 3407.5 },
              {
                gdpCategory: "Nonmetallic mineral product manufacturing",
                gdp: 1488.9
              },
              { gdpCategory: "Primary metal manufacturing", gdp: 834.0 },
              {
                gdpCategory: "Fabricated metal product manufacturing",
                gdp: 1823.4
              },
              { gdpCategory: "Machinery manufacturing", gdp: 1954.7 },
              {
                gdpCategory: "Computer and electronic product manufacturing",
                gdp: 4379.1
              },
              {
                gdpCategory: "Electrical equipment, appliance, and component manufacturing",
                gdp: 1190.8
              },
              {
                gdpCategory: "Motor vehicles, bodies and trailers, and parts manufacturing",
                gdp: 877.7
              },
              {
                gdpCategory: "Other transportation equipment manufacturing",
                gdp: 27479.2
              },
              {
                gdpCategory: "Furniture and related product manufacturing",
                gdp: 395.7
              },
              { gdpCategory: "Miscellaneous manufacturing", gdp: 1528.9 }
            ]
          },
          {
            gdpCategory: "Nondurable goods manufacturing",
            children: [
              {
                gdpCategory: "Food and beverage and tobacco product manufacturing",
                gdp: 5586.0
              },
              {
                gdpCategory: "Textile mills and textile product mills",
                gdp: 141.3
              },
              {
                gdpCategory: "Apparel, leather, and allied product manufacturing",
                gdp: 85.8
              },
              { gdpCategory: "Paper manufacturing", gdp: 1344.3 },
              {
                gdpCategory: "Printing and related support activities",
                gdp: 498.7
              },
              {
                gdpCategory: "Petroleum and coal products manufacturing",
                gdp: 7939.8
              },
              { gdpCategory: "Chemical manufacturing", gdp: 3331.6 },
              {
                gdpCategory: "Plastics and rubber products manufacturing",
                gdp: 668.1
              }
            ]
          }
        ]
      },
      { gdpCategory: "Wholesale trade", gdp: 37965.5 },
      { gdpCategory: "Retail trade", gdp: 49564.4 },
      {
        gdpCategory: "Transportation and warehousing",
        children: [
          { gdpCategory: "Air transportation", gdp: 5020.6 },
          { gdpCategory: "Rail transportation", gdp: 1236.7 },
          { gdpCategory: "Water transportation", gdp: 926.1 },
          { gdpCategory: "Truck transportation", gdp: 5409.7 },
          {
            gdpCategory: "Transit and ground passenger transportation",
            gdp: 1296.4
          },
          { gdpCategory: "Pipeline transportation", gdp: 115.7 },
          {
            gdpCategory: "Other transportation and support activities",
            gdp: 5940.4
          },
          { gdpCategory: "Warehousing and storage", gdp: 2197.7 }
        ]
      },
      {
        gdpCategory: "Information",
        children: [
          {
            gdpCategory: "Publishing industries (except Internet)",
            gdp: 67646.4
          },
          {
            gdpCategory: "Motion picture and sound recording industries",
            gdp: 990.9
          },
          {
            gdpCategory: "Broadcasting (except Internet) and telecommunications",
            gdp: 13367.5
          },
          {
            gdpCategory: "Data processing, hosting, and other information services",
            gdp: 35586.6
          }
        ]
      },
      {
        gdpCategory: "Finance, insurance, real estate, rental, and leasing",
        children: [
          {
            gdpCategory: "Finance and insurance",
            children: [
              {
                gdpCategory: "Monetary Authorities- central bank, credit intermediation, and related services",
                gdp: 11729.4
              },
              {
                gdpCategory: "Securities, commodity contracts, and other financial investments and related activities",
                gdp: 3793.9
              },
              {
                gdpCategory: "Insurance carriers and related activities",
                gdp: 10673.8
              },
              {
                gdpCategory: "Funds, trusts, and other financial vehicles",
                gdp: 663.8
              }
            ]
          },
          {
            gdpCategory: "Real estate and rental and leasing",
            children: [
              { gdpCategory: "Real estate", gdp: 86320.6 },
              {
                gdpCategory: "Rental and leasing services and lessors of nonfinancial intangible assets",
                gdp: 9461.1
              }
            ]
          }
        ]
      },
      {
        gdpCategory: "Professional and business services",
        children: [
          {
            gdpCategory: "Professional, scientific, and technical services",
            children: [
              { gdpCategory: "Legal services", gdp: 7745.2 },
              {
                gdpCategory: "Computer systems design and related services",
                gdp: 17315.4
              },
              {
                gdpCategory: "Miscellaneous professional, scientific, and technical services",
                gdp: 31065.9
              }
            ]
          },
          {
            gdpCategory: "Management of companies and enterprises",
            gdp: 25895.1
          },
          {
            gdpCategory: "Administrative and support and waste management and remediation services",
            children: [
              {
                gdpCategory: "Administrative and support services",
                gdp: 16819.3
              },
              {
                gdpCategory: "Waste management and remediation services",
                gdp: 3682.6
              }
            ]
          }
        ]
      },
      {
        gdpCategory: "Educational services, health care, and social assistance",
        children: [
          { gdpCategory: "Educational services", gdp: 3814.2 },
          {
            gdpCategory: "Health care and social assistance",
            children: [
              { gdpCategory: "Ambulatory health care services", gdp: 20048.8 },
              { gdpCategory: "Hospitals", gdp: 12529.8 },
              {
                gdpCategory: "Nursing and residential care facilities",
                gdp: 3581.9
              },
              { gdpCategory: "Social assistance", gdp: 6173.3 }
            ]
          }
        ]
      },
      {
        gdpCategory: "Arts, entertainment, recreation, accommodation, and food services",
        children: [
          {
            gdpCategory: "Arts, entertainment, and recreation",
            children: [
              {
                gdpCategory: "Performing arts, spectator sports, museums, and related activities",
                gdp: 3458.5
              },
              {
                gdpCategory: "Amusement, gambling, and recreation industries",
                gdp: 2765.0
              }
            ]
          },
          {
            gdpCategory: "Accommodation and food services",
            children: [
              { gdpCategory: "Accommodation", gdp: 5011.1 },
              {
                gdpCategory: "Food services and drinking places",
                gdp: 15581.4
              }
            ]
          }
        ]
      },
      {
        gdpCategory: "Other services (except government and government enterprises)",
        gdp: 13812.1
      },
      { gdpCategory: "Federal civilian government", gdp: 14353.7 },
      { gdpCategory: "Military", gdp: 8334.2 },
      { gdpCategory: "State and local government", gdp: 62048.0 }
    ]
  },
  "New Hampshire": {
    gdpCategory: "All industry total",
    children: [
      {
        gdpCategory: "Agriculture, forestry, fishing and hunting",
        children: [
          { gdpCategory: "Farms", gdp: 55.0 },
          {
            gdpCategory: "Forestry, fishing, and related activities",
            gdp: 130.0
          }
        ]
      },
      {
        gdpCategory: "Mining, quarrying, and oil and gas extraction",
        children: [
          { gdpCategory: "Oil and gas extraction", gdp: 0.0 },
          { gdpCategory: "Mining (except oil and gas)", gdp: 145.1 },
          { gdpCategory: "Support activities for mining", gdp: 14.3 }
        ]
      },
      { gdpCategory: "Utilities", gdp: 1645.7 },
      { gdpCategory: "Construction", gdp: 3354.3 },
      {
        gdpCategory: "Manufacturing",
        children: [
          {
            gdpCategory: "Durable goods manufacturing",
            children: [
              { gdpCategory: "Wood product manufacturing", gdp: 241.3 },
              {
                gdpCategory: "Nonmetallic mineral product manufacturing",
                gdp: 281.2
              },
              { gdpCategory: "Primary metal manufacturing", gdp: 295.6 },
              {
                gdpCategory: "Fabricated metal product manufacturing",
                gdp: 1421.7
              },
              { gdpCategory: "Machinery manufacturing", gdp: 1165.8 },
              {
                gdpCategory: "Computer and electronic product manufacturing",
                gdp: 2479.5
              },
              {
                gdpCategory: "Electrical equipment, appliance, and component manufacturing",
                gdp: 652.9
              },
              {
                gdpCategory: "Motor vehicles, bodies and trailers, and parts manufacturing",
                gdp: 142.8
              },
              {
                gdpCategory: "Other transportation equipment manufacturing",
                gdp: 187.4
              },
              {
                gdpCategory: "Furniture and related product manufacturing",
                gdp: 50.4
              },
              { gdpCategory: "Miscellaneous manufacturing", gdp: 569.0 }
            ]
          },
          {
            gdpCategory: "Nondurable goods manufacturing",
            children: [
              {
                gdpCategory: "Food and beverage and tobacco product manufacturing",
                gdp: 721.8
              },
              {
                gdpCategory: "Textile mills and textile product mills",
                gdp: 141.7
              },
              {
                gdpCategory: "Apparel, leather, and allied product manufacturing",
                gdp: 48.2
              },
              { gdpCategory: "Paper manufacturing", gdp: 87.1 },
              {
                gdpCategory: "Printing and related support activities",
                gdp: 183.1
              },
              {
                gdpCategory: "Petroleum and coal products manufacturing",
                gdp: 125.4
              },
              { gdpCategory: "Chemical manufacturing", gdp: 849.3 },
              {
                gdpCategory: "Plastics and rubber products manufacturing",
                gdp: 427.1
              }
            ]
          }
        ]
      },
      { gdpCategory: "Wholesale trade", gdp: 7766.5 },
      { gdpCategory: "Retail trade", gdp: 8446.0 },
      {
        gdpCategory: "Transportation and warehousing",
        children: [
          { gdpCategory: "Air transportation", gdp: 203.8 },
          { gdpCategory: "Rail transportation", gdp: 11.1 },
          { gdpCategory: "Water transportation", gdp: 33.6 },
          { gdpCategory: "Truck transportation", gdp: 460.8 },
          {
            gdpCategory: "Transit and ground passenger transportation",
            gdp: 230.2
          },
          { gdpCategory: "Pipeline transportation", gdp: 44.3 },
          {
            gdpCategory: "Other transportation and support activities",
            gdp: 585.1
          },
          { gdpCategory: "Warehousing and storage", gdp: 264.3 }
        ]
      },
      {
        gdpCategory: "Information",
        children: [
          {
            gdpCategory: "Publishing industries (except Internet)",
            gdp: 1787.9
          },
          {
            gdpCategory: "Motion picture and sound recording industries",
            gdp: 156.8
          },
          {
            gdpCategory: "Broadcasting (except Internet) and telecommunications",
            gdp: 1438.7
          },
          {
            gdpCategory: "Data processing, hosting, and other information services",
            gdp: 732.5
          }
        ]
      },
      {
        gdpCategory: "Finance, insurance, real estate, rental, and leasing",
        children: [
          {
            gdpCategory: "Finance and insurance",
            children: [
              {
                gdpCategory: "Monetary Authorities- central bank, credit intermediation, and related services",
                gdp: 1921.0
              },
              {
                gdpCategory: "Securities, commodity contracts, and other financial investments and related activities",
                gdp: 1930.9
              },
              {
                gdpCategory: "Insurance carriers and related activities",
                gdp: 3467.2
              },
              {
                gdpCategory: "Funds, trusts, and other financial vehicles",
                gdp: 15.0
              }
            ]
          },
          {
            gdpCategory: "Real estate and rental and leasing",
            children: [
              { gdpCategory: "Real estate", gdp: 13549.2 },
              {
                gdpCategory: "Rental and leasing services and lessors of nonfinancial intangible assets",
                gdp: 1493.5
              }
            ]
          }
        ]
      },
      {
        gdpCategory: "Professional and business services",
        children: [
          {
            gdpCategory: "Professional, scientific, and technical services",
            children: [
              { gdpCategory: "Legal services", gdp: 997.8 },
              {
                gdpCategory: "Computer systems design and related services",
                gdp: 2907.9
              },
              {
                gdpCategory: "Miscellaneous professional, scientific, and technical services",
                gdp: 5567.5
              }
            ]
          },
          {
            gdpCategory: "Management of companies and enterprises",
            gdp: 1796.9
          },
          {
            gdpCategory: "Administrative and support and waste management and remediation services",
            children: [
              {
                gdpCategory: "Administrative and support services",
                gdp: 3779.0
              },
              {
                gdpCategory: "Waste management and remediation services",
                gdp: 298.9
              }
            ]
          }
        ]
      },
      {
        gdpCategory: "Educational services, health care, and social assistance",
        children: [
          { gdpCategory: "Educational services", gdp: 2338.4 },
          {
            gdpCategory: "Health care and social assistance",
            children: [
              { gdpCategory: "Ambulatory health care services", gdp: 4586.1 },
              { gdpCategory: "Hospitals", gdp: 3109.3 },
              {
                gdpCategory: "Nursing and residential care facilities",
                gdp: 896.4
              },
              { gdpCategory: "Social assistance", gdp: 694.8 }
            ]
          }
        ]
      },
      {
        gdpCategory: "Arts, entertainment, recreation, accommodation, and food services",
        children: [
          {
            gdpCategory: "Arts, entertainment, and recreation",
            children: [
              {
                gdpCategory: "Performing arts, spectator sports, museums, and related activities",
                gdp: 589.9
              },
              {
                gdpCategory: "Amusement, gambling, and recreation industries",
                gdp: 782.9
              }
            ]
          },
          {
            gdpCategory: "Accommodation and food services",
            children: [
              { gdpCategory: "Accommodation", gdp: 1590.8 },
              { gdpCategory: "Food services and drinking places", gdp: 2704.6 }
            ]
          }
        ]
      },
      {
        gdpCategory: "Other services (except government and government enterprises)",
        gdp: 2481.0
      },
      { gdpCategory: "Federal civilian government", gdp: 1761.3 },
      { gdpCategory: "Military", gdp: 1000.2 },
      { gdpCategory: "State and local government", gdp: 7187.0 }
    ]
  },
  "Rhode Island": {
    gdpCategory: "All industry total",
    children: [
      {
        gdpCategory: "Agriculture, forestry, fishing and hunting",
        children: [
          { gdpCategory: "Farms", gdp: 55.6 },
          {
            gdpCategory: "Forestry, fishing, and related activities",
            gdp: 75.2
          }
        ]
      },
      {
        gdpCategory: "Mining, quarrying, and oil and gas extraction",
        children: [
          { gdpCategory: "Oil and gas extraction", gdp: 0.0 },
          { gdpCategory: "Mining (except oil and gas)", gdp: 82.9 },
          { gdpCategory: "Support activities for mining", gdp: 0.0 }
        ]
      },
      { gdpCategory: "Utilities", gdp: 1311.5 },
      { gdpCategory: "Construction", gdp: 2750.7 },
      {
        gdpCategory: "Manufacturing",
        children: [
          {
            gdpCategory: "Durable goods manufacturing",
            children: [
              { gdpCategory: "Wood product manufacturing", gdp: 23.5 },
              {
                gdpCategory: "Nonmetallic mineral product manufacturing",
                gdp: 108.7
              },
              { gdpCategory: "Primary metal manufacturing", gdp: 449.1 },
              {
                gdpCategory: "Fabricated metal product manufacturing",
                gdp: 373.8
              },
              { gdpCategory: "Machinery manufacturing", gdp: 281.1 },
              {
                gdpCategory: "Computer and electronic product manufacturing",
                gdp: 635.4
              },
              {
                gdpCategory: "Electrical equipment, appliance, and component manufacturing",
                gdp: 127.2
              },
              {
                gdpCategory: "Motor vehicles, bodies and trailers, and parts manufacturing",
                gdp: 132.0
              },
              {
                gdpCategory: "Other transportation equipment manufacturing",
                gdp: 806.7
              },
              {
                gdpCategory: "Furniture and related product manufacturing",
                gdp: 75.3
              },
              { gdpCategory: "Miscellaneous manufacturing", gdp: 750.9 }
            ]
          },
          {
            gdpCategory: "Nondurable goods manufacturing",
            children: [
              {
                gdpCategory: "Food and beverage and tobacco product manufacturing",
                gdp: 278.8
              },
              {
                gdpCategory: "Textile mills and textile product mills",
                gdp: 101.7
              },
              {
                gdpCategory: "Apparel, leather, and allied product manufacturing",
                gdp: 11.7
              },
              { gdpCategory: "Paper manufacturing", gdp: 119.5 },
              {
                gdpCategory: "Printing and related support activities",
                gdp: 155.4
              },
              {
                gdpCategory: "Petroleum and coal products manufacturing",
                gdp: 71.2
              },
              { gdpCategory: "Chemical manufacturing", gdp: 1011.7 },
              {
                gdpCategory: "Plastics and rubber products manufacturing",
                gdp: 252.6
              }
            ]
          }
        ]
      },
      { gdpCategory: "Wholesale trade", gdp: 4203.0 },
      { gdpCategory: "Retail trade", gdp: 4803.4 },
      {
        gdpCategory: "Transportation and warehousing",
        children: [
          { gdpCategory: "Air transportation", gdp: 158.1 },
          { gdpCategory: "Rail transportation", gdp: 39.2 },
          { gdpCategory: "Water transportation", gdp: 36.7 },
          { gdpCategory: "Truck transportation", gdp: 348.7 },
          {
            gdpCategory: "Transit and ground passenger transportation",
            gdp: 243.6
          },
          { gdpCategory: "Pipeline transportation", gdp: 8.2 },
          {
            gdpCategory: "Other transportation and support activities",
            gdp: 445.4
          },
          { gdpCategory: "Warehousing and storage", gdp: 114.8 }
        ]
      },
      {
        gdpCategory: "Information",
        children: [
          {
            gdpCategory: "Publishing industries (except Internet)",
            gdp: 349.9
          },
          {
            gdpCategory: "Motion picture and sound recording industries",
            gdp: 103.2
          },
          {
            gdpCategory: "Broadcasting (except Internet) and telecommunications",
            gdp: 889.3
          },
          {
            gdpCategory: "Data processing, hosting, and other information services",
            gdp: 370.0
          }
        ]
      },
      {
        gdpCategory: "Finance, insurance, real estate, rental, and leasing",
        children: [
          {
            gdpCategory: "Finance and insurance",
            children: [
              {
                gdpCategory: "Monetary Authorities- central bank, credit intermediation, and related services",
                gdp: 2794.6
              },
              {
                gdpCategory: "Securities, commodity contracts, and other financial investments and related activities",
                gdp: 951.1
              },
              {
                gdpCategory: "Insurance carriers and related activities",
                gdp: 2835.8
              },
              {
                gdpCategory: "Funds, trusts, and other financial vehicles",
                gdp: 16.9
              }
            ]
          },
          {
            gdpCategory: "Real estate and rental and leasing",
            children: [
              { gdpCategory: "Real estate", gdp: 9906.2 },
              {
                gdpCategory: "Rental and leasing services and lessors of nonfinancial intangible assets",
                gdp: 589.5
              }
            ]
          }
        ]
      },
      {
        gdpCategory: "Professional and business services",
        children: [
          {
            gdpCategory: "Professional, scientific, and technical services",
            children: [
              { gdpCategory: "Legal services", gdp: 849.8 },
              {
                gdpCategory: "Computer systems design and related services",
                gdp: 1317.9
              },
              {
                gdpCategory: "Miscellaneous professional, scientific, and technical services",
                gdp: 2558.1
              }
            ]
          },
          {
            gdpCategory: "Management of companies and enterprises",
            gdp: 2259.3
          },
          {
            gdpCategory: "Administrative and support and waste management and remediation services",
            children: [
              {
                gdpCategory: "Administrative and support services",
                gdp: 2099.8
              },
              {
                gdpCategory: "Waste management and remediation services",
                gdp: 291.7
              }
            ]
          }
        ]
      },
      {
        gdpCategory: "Educational services, health care, and social assistance",
        children: [
          { gdpCategory: "Educational services", gdp: 2209.9 },
          {
            gdpCategory: "Health care and social assistance",
            children: [
              { gdpCategory: "Ambulatory health care services", gdp: 3012.2 },
              { gdpCategory: "Hospitals", gdp: 2442.1 },
              {
                gdpCategory: "Nursing and residential care facilities",
                gdp: 1000.2
              },
              { gdpCategory: "Social assistance", gdp: 589.9 }
            ]
          }
        ]
      },
      {
        gdpCategory: "Arts, entertainment, recreation, accommodation, and food services",
        children: [
          {
            gdpCategory: "Arts, entertainment, and recreation",
            children: [
              {
                gdpCategory: "Performing arts, spectator sports, museums, and related activities",
                gdp: 287.2
              },
              {
                gdpCategory: "Amusement, gambling, and recreation industries",
                gdp: 376.1
              }
            ]
          },
          {
            gdpCategory: "Accommodation and food services",
            children: [
              { gdpCategory: "Accommodation", gdp: 849.9 },
              { gdpCategory: "Food services and drinking places", gdp: 2319.4 }
            ]
          }
        ]
      },
      {
        gdpCategory: "Other services (except government and government enterprises)",
        gdp: 1548.9
      },
      { gdpCategory: "Federal civilian government", gdp: 2117.0 },
      { gdpCategory: "Military", gdp: 1319.7 },
      { gdpCategory: "State and local government", gdp: 6072.6 }
    ]
  },
  Oklahoma: {
    gdpCategory: "All industry total",
    children: [
      {
        gdpCategory: "Agriculture, forestry, fishing and hunting",
        children: [
          { gdpCategory: "Farms", gdp: 1712.8 },
          {
            gdpCategory: "Forestry, fishing, and related activities",
            gdp: 329.7
          }
        ]
      },
      {
        gdpCategory: "Mining, quarrying, and oil and gas extraction",
        children: [
          { gdpCategory: "Oil and gas extraction", gdp: 27954.9 },
          { gdpCategory: "Mining (except oil and gas)", gdp: 604.0 },
          { gdpCategory: "Support activities for mining", gdp: 2618.9 }
        ]
      },
      { gdpCategory: "Utilities", gdp: 5107.8 },
      { gdpCategory: "Construction", gdp: 8674.3 },
      {
        gdpCategory: "Manufacturing",
        children: [
          {
            gdpCategory: "Durable goods manufacturing",
            children: [
              { gdpCategory: "Wood product manufacturing", gdp: 394.8 },
              {
                gdpCategory: "Nonmetallic mineral product manufacturing",
                gdp: 1100.6
              },
              { gdpCategory: "Primary metal manufacturing", gdp: 604.2 },
              {
                gdpCategory: "Fabricated metal product manufacturing",
                gdp: 2616.1
              },
              { gdpCategory: "Machinery manufacturing", gdp: 2628.6 },
              {
                gdpCategory: "Computer and electronic product manufacturing",
                gdp: 471.8
              },
              {
                gdpCategory: "Electrical equipment, appliance, and component manufacturing",
                gdp: 288.0
              },
              {
                gdpCategory: "Motor vehicles, bodies and trailers, and parts manufacturing",
                gdp: 768.9
              },
              {
                gdpCategory: "Other transportation equipment manufacturing",
                gdp: 1377.5
              },
              {
                gdpCategory: "Furniture and related product manufacturing",
                gdp: 139.2
              },
              { gdpCategory: "Miscellaneous manufacturing", gdp: 311.1 }
            ]
          },
          {
            gdpCategory: "Nondurable goods manufacturing",
            children: [
              {
                gdpCategory: "Food and beverage and tobacco product manufacturing",
                gdp: 2485.2
              },
              {
                gdpCategory: "Textile mills and textile product mills",
                gdp: 38.9
              },
              {
                gdpCategory: "Apparel, leather, and allied product manufacturing",
                gdp: 72.5
              },
              { gdpCategory: "Paper manufacturing", gdp: 998.3 },
              {
                gdpCategory: "Printing and related support activities",
                gdp: 180.0
              },
              {
                gdpCategory: "Petroleum and coal products manufacturing",
                gdp: 977.6
              },
              { gdpCategory: "Chemical manufacturing", gdp: 1834.0 },
              {
                gdpCategory: "Plastics and rubber products manufacturing",
                gdp: 1361.8
              }
            ]
          }
        ]
      },
      { gdpCategory: "Wholesale trade", gdp: 11952.7 },
      { gdpCategory: "Retail trade", gdp: 16441.6 },
      {
        gdpCategory: "Transportation and warehousing",
        children: [
          { gdpCategory: "Air transportation", gdp: 1131.6 },
          { gdpCategory: "Rail transportation", gdp: 1156.0 },
          { gdpCategory: "Water transportation", gdp: 0.3 },
          { gdpCategory: "Truck transportation", gdp: 2944.3 },
          {
            gdpCategory: "Transit and ground passenger transportation",
            gdp: 67.2
          },
          { gdpCategory: "Pipeline transportation", gdp: 8198.6 },
          {
            gdpCategory: "Other transportation and support activities",
            gdp: 1519.5
          },
          { gdpCategory: "Warehousing and storage", gdp: 1284.0 }
        ]
      },
      {
        gdpCategory: "Information",
        children: [
          {
            gdpCategory: "Publishing industries (except Internet)",
            gdp: 1194.8
          },
          {
            gdpCategory: "Motion picture and sound recording industries",
            gdp: 134.7
          },
          {
            gdpCategory: "Broadcasting (except Internet) and telecommunications",
            gdp: 3891.8
          },
          {
            gdpCategory: "Data processing, hosting, and other information services",
            gdp: 622.3
          }
        ]
      },
      {
        gdpCategory: "Finance, insurance, real estate, rental, and leasing",
        children: [
          {
            gdpCategory: "Finance and insurance",
            children: [
              {
                gdpCategory: "Monetary Authorities- central bank, credit intermediation, and related services",
                gdp: 5131.6
              },
              {
                gdpCategory: "Securities, commodity contracts, and other financial investments and related activities",
                gdp: 815.8
              },
              {
                gdpCategory: "Insurance carriers and related activities",
                gdp: 3745.6
              },
              {
                gdpCategory: "Funds, trusts, and other financial vehicles",
                gdp: 85.4
              }
            ]
          },
          {
            gdpCategory: "Real estate and rental and leasing",
            children: [
              { gdpCategory: "Real estate", gdp: 21947.6 },
              {
                gdpCategory: "Rental and leasing services and lessors of nonfinancial intangible assets",
                gdp: 3265.7
              }
            ]
          }
        ]
      },
      {
        gdpCategory: "Professional and business services",
        children: [
          {
            gdpCategory: "Professional, scientific, and technical services",
            children: [
              { gdpCategory: "Legal services", gdp: 1886.2 },
              {
                gdpCategory: "Computer systems design and related services",
                gdp: 1424.3
              },
              {
                gdpCategory: "Miscellaneous professional, scientific, and technical services",
                gdp: 6388.6
              }
            ]
          },
          {
            gdpCategory: "Management of companies and enterprises",
            gdp: 3611.2
          },
          {
            gdpCategory: "Administrative and support and waste management and remediation services",
            children: [
              {
                gdpCategory: "Administrative and support services",
                gdp: 7389.8
              },
              {
                gdpCategory: "Waste management and remediation services",
                gdp: 498.3
              }
            ]
          }
        ]
      },
      {
        gdpCategory: "Educational services, health care, and social assistance",
        children: [
          { gdpCategory: "Educational services", gdp: 1467.4 },
          {
            gdpCategory: "Health care and social assistance",
            children: [
              { gdpCategory: "Ambulatory health care services", gdp: 8236.2 },
              { gdpCategory: "Hospitals", gdp: 5961.0 },
              {
                gdpCategory: "Nursing and residential care facilities",
                gdp: 1613.1
              },
              { gdpCategory: "Social assistance", gdp: 1438.8 }
            ]
          }
        ]
      },
      {
        gdpCategory: "Arts, entertainment, recreation, accommodation, and food services",
        children: [
          {
            gdpCategory: "Arts, entertainment, and recreation",
            children: [
              {
                gdpCategory: "Performing arts, spectator sports, museums, and related activities",
                gdp: 555.6
              },
              {
                gdpCategory: "Amusement, gambling, and recreation industries",
                gdp: 870.7
              }
            ]
          },
          {
            gdpCategory: "Accommodation and food services",
            children: [
              { gdpCategory: "Accommodation", gdp: 1018.0 },
              { gdpCategory: "Food services and drinking places", gdp: 6332.2 }
            ]
          }
        ]
      },
      {
        gdpCategory: "Other services (except government and government enterprises)",
        gdp: 5308.9
      },
      { gdpCategory: "Federal civilian government", gdp: 7364.8 },
      { gdpCategory: "Military", gdp: 3289.0 },
      { gdpCategory: "State and local government", gdp: 26902.0 }
    ]
  },
  "New Jersey": {
    gdpCategory: "All industry total",
    children: [
      {
        gdpCategory: "Agriculture, forestry, fishing and hunting",
        children: [
          { gdpCategory: "Farms", gdp: 990.5 },
          {
            gdpCategory: "Forestry, fishing, and related activities",
            gdp: 365.7
          }
        ]
      },
      {
        gdpCategory: "Mining, quarrying, and oil and gas extraction",
        children: [
          { gdpCategory: "Oil and gas extraction", gdp: 17.7 },
          { gdpCategory: "Mining (except oil and gas)", gdp: 426.8 },
          { gdpCategory: "Support activities for mining", gdp: 31.4 }
        ]
      },
      { gdpCategory: "Utilities", gdp: 12161.4 },
      { gdpCategory: "Construction", gdp: 24997.8 },
      {
        gdpCategory: "Manufacturing",
        children: [
          {
            gdpCategory: "Durable goods manufacturing",
            children: [
              { gdpCategory: "Wood product manufacturing", gdp: 236.1 },
              {
                gdpCategory: "Nonmetallic mineral product manufacturing",
                gdp: 1797.9
              },
              { gdpCategory: "Primary metal manufacturing", gdp: 709.9 },
              {
                gdpCategory: "Fabricated metal product manufacturing",
                gdp: 2554.9
              },
              { gdpCategory: "Machinery manufacturing", gdp: 2301.9 },
              {
                gdpCategory: "Computer and electronic product manufacturing",
                gdp: 5131.8
              },
              {
                gdpCategory: "Electrical equipment, appliance, and component manufacturing",
                gdp: 949.8
              },
              {
                gdpCategory: "Motor vehicles, bodies and trailers, and parts manufacturing",
                gdp: 172.5
              },
              {
                gdpCategory: "Other transportation equipment manufacturing",
                gdp: 568.1
              },
              {
                gdpCategory: "Furniture and related product manufacturing",
                gdp: 646.3
              },
              { gdpCategory: "Miscellaneous manufacturing", gdp: 4445.0 }
            ]
          },
          {
            gdpCategory: "Nondurable goods manufacturing",
            children: [
              {
                gdpCategory: "Food and beverage and tobacco product manufacturing",
                gdp: 5101.4
              },
              {
                gdpCategory: "Textile mills and textile product mills",
                gdp: 322.5
              },
              {
                gdpCategory: "Apparel, leather, and allied product manufacturing",
                gdp: 217.5
              },
              { gdpCategory: "Paper manufacturing", gdp: 1454.4 },
              {
                gdpCategory: "Printing and related support activities",
                gdp: 1808.7
              },
              {
                gdpCategory: "Petroleum and coal products manufacturing",
                gdp: 3954.2
              },
              { gdpCategory: "Chemical manufacturing", gdp: 28596.2 },
              {
                gdpCategory: "Plastics and rubber products manufacturing",
                gdp: 1922.3
              }
            ]
          }
        ]
      },
      { gdpCategory: "Wholesale trade", gdp: 64505.3 },
      { gdpCategory: "Retail trade", gdp: 47174.4 },
      {
        gdpCategory: "Transportation and warehousing",
        children: [
          { gdpCategory: "Air transportation", gdp: 6537.9 },
          { gdpCategory: "Rail transportation", gdp: 360.0 },
          { gdpCategory: "Water transportation", gdp: 929.1 },
          { gdpCategory: "Truck transportation", gdp: 7896.2 },
          {
            gdpCategory: "Transit and ground passenger transportation",
            gdp: 2339.9
          },
          { gdpCategory: "Pipeline transportation", gdp: 241.4 },
          {
            gdpCategory: "Other transportation and support activities",
            gdp: 9093.2
          },
          { gdpCategory: "Warehousing and storage", gdp: 5303.7 }
        ]
      },
      {
        gdpCategory: "Information",
        children: [
          {
            gdpCategory: "Publishing industries (except Internet)",
            gdp: 6983.3
          },
          {
            gdpCategory: "Motion picture and sound recording industries",
            gdp: 1579.8
          },
          {
            gdpCategory: "Broadcasting (except Internet) and telecommunications",
            gdp: 15614.3
          },
          {
            gdpCategory: "Data processing, hosting, and other information services",
            gdp: 10288.3
          }
        ]
      },
      {
        gdpCategory: "Finance, insurance, real estate, rental, and leasing",
        children: [
          {
            gdpCategory: "Finance and insurance",
            children: [
              {
                gdpCategory: "Monetary Authorities- central bank, credit intermediation, and related services",
                gdp: 13555.7
              },
              {
                gdpCategory: "Securities, commodity contracts, and other financial investments and related activities",
                gdp: 11828.7
              },
              {
                gdpCategory: "Insurance carriers and related activities",
                gdp: 23199.7
              },
              {
                gdpCategory: "Funds, trusts, and other financial vehicles",
                gdp: 419.6
              }
            ]
          },
          {
            gdpCategory: "Real estate and rental and leasing",
            children: [
              { gdpCategory: "Real estate", gdp: 110421.1 },
              {
                gdpCategory: "Rental and leasing services and lessors of nonfinancial intangible assets",
                gdp: 9135.2
              }
            ]
          }
        ]
      },
      {
        gdpCategory: "Professional and business services",
        children: [
          {
            gdpCategory: "Professional, scientific, and technical services",
            children: [
              { gdpCategory: "Legal services", gdp: 9135.0 },
              {
                gdpCategory: "Computer systems design and related services",
                gdp: 15682.2
              },
              {
                gdpCategory: "Miscellaneous professional, scientific, and technical services",
                gdp: 49318.4
              }
            ]
          },
          {
            gdpCategory: "Management of companies and enterprises",
            gdp: 20973.4
          },
          {
            gdpCategory: "Administrative and support and waste management and remediation services",
            children: [
              {
                gdpCategory: "Administrative and support services",
                gdp: 26979.3
              },
              {
                gdpCategory: "Waste management and remediation services",
                gdp: 2521.5
              }
            ]
          }
        ]
      },
      {
        gdpCategory: "Educational services, health care, and social assistance",
        children: [
          { gdpCategory: "Educational services", gdp: 8681.4 },
          {
            gdpCategory: "Health care and social assistance",
            children: [
              { gdpCategory: "Ambulatory health care services", gdp: 30279.5 },
              { gdpCategory: "Hospitals", gdp: 18456.6 },
              {
                gdpCategory: "Nursing and residential care facilities",
                gdp: 5861.0
              },
              { gdpCategory: "Social assistance", gdp: 5676.6 }
            ]
          }
        ]
      },
      {
        gdpCategory: "Arts, entertainment, recreation, accommodation, and food services",
        children: [
          {
            gdpCategory: "Arts, entertainment, and recreation",
            children: [
              {
                gdpCategory: "Performing arts, spectator sports, museums, and related activities",
                gdp: 2776.7
              },
              {
                gdpCategory: "Amusement, gambling, and recreation industries",
                gdp: 3657.0
              }
            ]
          },
          {
            gdpCategory: "Accommodation and food services",
            children: [
              { gdpCategory: "Accommodation", gdp: 4725.7 },
              {
                gdpCategory: "Food services and drinking places",
                gdp: 14599.5
              }
            ]
          }
        ]
      },
      {
        gdpCategory: "Other services (except government and government enterprises)",
        gdp: 15316.4
      },
      { gdpCategory: "Federal civilian government", gdp: 8698.0 },
      { gdpCategory: "Military", gdp: 3573.9 },
      { gdpCategory: "State and local government", gdp: 58746.9 }
    ]
  },
  Georgia: {
    gdpCategory: "All industry total",
    children: [
      {
        gdpCategory: "Agriculture, forestry, fishing and hunting",
        children: [
          { gdpCategory: "Farms", gdp: 5429.8 },
          {
            gdpCategory: "Forestry, fishing, and related activities",
            gdp: 1216.1
          }
        ]
      },
      {
        gdpCategory: "Mining, quarrying, and oil and gas extraction",
        children: [
          { gdpCategory: "Oil and gas extraction", gdp: 1.8 },
          { gdpCategory: "Mining (except oil and gas)", gdp: 2040.7 },
          { gdpCategory: "Support activities for mining", gdp: 83.2 }
        ]
      },
      { gdpCategory: "Utilities", gdp: 14962.6 },
      { gdpCategory: "Construction", gdp: 37951.3 },
      {
        gdpCategory: "Manufacturing",
        children: [
          {
            gdpCategory: "Durable goods manufacturing",
            children: [
              { gdpCategory: "Wood product manufacturing", gdp: 4044.6 },
              {
                gdpCategory: "Nonmetallic mineral product manufacturing",
                gdp: 3016.2
              },
              { gdpCategory: "Primary metal manufacturing", gdp: 1760.9 },
              {
                gdpCategory: "Fabricated metal product manufacturing",
                gdp: 4013.0
              },
              { gdpCategory: "Machinery manufacturing", gdp: 4768.6 },
              {
                gdpCategory: "Computer and electronic product manufacturing",
                gdp: 1879.4
              },
              {
                gdpCategory: "Electrical equipment, appliance, and component manufacturing",
                gdp: 2797.0
              },
              {
                gdpCategory: "Motor vehicles, bodies and trailers, and parts manufacturing",
                gdp: 3756.1
              },
              {
                gdpCategory: "Other transportation equipment manufacturing",
                gdp: 7306.3
              },
              {
                gdpCategory: "Furniture and related product manufacturing",
                gdp: 975.1
              },
              { gdpCategory: "Miscellaneous manufacturing", gdp: 1711.6 }
            ]
          },
          {
            gdpCategory: "Nondurable goods manufacturing",
            children: [
              {
                gdpCategory: "Food and beverage and tobacco product manufacturing",
                gdp: 14523.8
              },
              {
                gdpCategory: "Textile mills and textile product mills",
                gdp: 4390.1
              },
              {
                gdpCategory: "Apparel, leather, and allied product manufacturing",
                gdp: 117.2
              },
              { gdpCategory: "Paper manufacturing", gdp: 5422.2 },
              {
                gdpCategory: "Printing and related support activities",
                gdp: 1331.7
              },
              {
                gdpCategory: "Petroleum and coal products manufacturing",
                gdp: 1241.0
              },
              { gdpCategory: "Chemical manufacturing", gdp: 6551.2 },
              {
                gdpCategory: "Plastics and rubber products manufacturing",
                gdp: 3437.5
              }
            ]
          }
        ]
      },
      { gdpCategory: "Wholesale trade", gdp: 57694.9 },
      { gdpCategory: "Retail trade", gdp: 48940.8 },
      {
        gdpCategory: "Transportation and warehousing",
        children: [
          { gdpCategory: "Air transportation", gdp: 10470.6 },
          { gdpCategory: "Rail transportation", gdp: 1542.0 },
          { gdpCategory: "Water transportation", gdp: 68.6 },
          { gdpCategory: "Truck transportation", gdp: 9009.1 },
          {
            gdpCategory: "Transit and ground passenger transportation",
            gdp: 508.3
          },
          { gdpCategory: "Pipeline transportation", gdp: 325.8 },
          {
            gdpCategory: "Other transportation and support activities",
            gdp: 7351.2
          },
          { gdpCategory: "Warehousing and storage", gdp: 5120.8 }
        ]
      },
      {
        gdpCategory: "Information",
        children: [
          {
            gdpCategory: "Publishing industries (except Internet)",
            gdp: 8745.9
          },
          {
            gdpCategory: "Motion picture and sound recording industries",
            gdp: 4615.2
          },
          {
            gdpCategory: "Broadcasting (except Internet) and telecommunications",
            gdp: 27641.2
          },
          {
            gdpCategory: "Data processing, hosting, and other information services",
            gdp: 10390.4
          }
        ]
      },
      {
        gdpCategory: "Finance, insurance, real estate, rental, and leasing",
        children: [
          {
            gdpCategory: "Finance and insurance",
            children: [
              {
                gdpCategory: "Monetary Authorities- central bank, credit intermediation, and related services",
                gdp: 34545.4
              },
              {
                gdpCategory: "Securities, commodity contracts, and other financial investments and related activities",
                gdp: 5291.8
              },
              {
                gdpCategory: "Insurance carriers and related activities",
                gdp: 18151.8
              },
              {
                gdpCategory: "Funds, trusts, and other financial vehicles",
                gdp: 630.5
              }
            ]
          },
          {
            gdpCategory: "Real estate and rental and leasing",
            children: [
              { gdpCategory: "Real estate", gdp: 89107.8 },
              {
                gdpCategory: "Rental and leasing services and lessors of nonfinancial intangible assets",
                gdp: 13585.2
              }
            ]
          }
        ]
      },
      {
        gdpCategory: "Professional and business services",
        children: [
          {
            gdpCategory: "Professional, scientific, and technical services",
            children: [
              { gdpCategory: "Legal services", gdp: 8844.0 },
              {
                gdpCategory: "Computer systems design and related services",
                gdp: 12792.6
              },
              {
                gdpCategory: "Miscellaneous professional, scientific, and technical services",
                gdp: 32154.2
              }
            ]
          },
          {
            gdpCategory: "Management of companies and enterprises",
            gdp: 16295.2
          },
          {
            gdpCategory: "Administrative and support and waste management and remediation services",
            children: [
              {
                gdpCategory: "Administrative and support services",
                gdp: 27565.3
              },
              {
                gdpCategory: "Waste management and remediation services",
                gdp: 1432.2
              }
            ]
          }
        ]
      },
      {
        gdpCategory: "Educational services, health care, and social assistance",
        children: [
          { gdpCategory: "Educational services", gdp: 8120.9 },
          {
            gdpCategory: "Health care and social assistance",
            children: [
              { gdpCategory: "Ambulatory health care services", gdp: 26778.8 },
              { gdpCategory: "Hospitals", gdp: 15645.3 },
              {
                gdpCategory: "Nursing and residential care facilities",
                gdp: 3033.8
              },
              { gdpCategory: "Social assistance", gdp: 3213.5 }
            ]
          }
        ]
      },
      {
        gdpCategory: "Arts, entertainment, recreation, accommodation, and food services",
        children: [
          {
            gdpCategory: "Arts, entertainment, and recreation",
            children: [
              {
                gdpCategory: "Performing arts, spectator sports, museums, and related activities",
                gdp: 2980.8
              },
              {
                gdpCategory: "Amusement, gambling, and recreation industries",
                gdp: 2173.0
              }
            ]
          },
          {
            gdpCategory: "Accommodation and food services",
            children: [
              { gdpCategory: "Accommodation", gdp: 4541.2 },
              {
                gdpCategory: "Food services and drinking places",
                gdp: 18416.1
              }
            ]
          }
        ]
      },
      {
        gdpCategory: "Other services (except government and government enterprises)",
        gdp: 14239.4
      },
      { gdpCategory: "Federal civilian government", gdp: 17808.5 },
      { gdpCategory: "Military", gdp: 9300.6 },
      { gdpCategory: "State and local government", gdp: 53575.7 }
    ]
  },
  Illinois: {
    gdpCategory: "All industry total",
    children: [
      {
        gdpCategory: "Agriculture, forestry, fishing and hunting",
        children: [
          { gdpCategory: "Farms", gdp: 15154.4 },
          {
            gdpCategory: "Forestry, fishing, and related activities",
            gdp: 647.8
          }
        ]
      },
      {
        gdpCategory: "Mining, quarrying, and oil and gas extraction",
        children: [
          { gdpCategory: "Oil and gas extraction", gdp: 283.8 },
          { gdpCategory: "Mining (except oil and gas)", gdp: 1896.1 },
          { gdpCategory: "Support activities for mining", gdp: 141.3 }
        ]
      },
      { gdpCategory: "Utilities", gdp: 19441.3 },
      { gdpCategory: "Construction", gdp: 35024.2 },
      {
        gdpCategory: "Manufacturing",
        children: [
          {
            gdpCategory: "Durable goods manufacturing",
            children: [
              { gdpCategory: "Wood product manufacturing", gdp: 745.5 },
              {
                gdpCategory: "Nonmetallic mineral product manufacturing",
                gdp: 2571.0
              },
              { gdpCategory: "Primary metal manufacturing", gdp: 4693.7 },
              {
                gdpCategory: "Fabricated metal product manufacturing",
                gdp: 11020.2
              },
              { gdpCategory: "Machinery manufacturing", gdp: 15064.0 },
              {
                gdpCategory: "Computer and electronic product manufacturing",
                gdp: 5449.4
              },
              {
                gdpCategory: "Electrical equipment, appliance, and component manufacturing",
                gdp: 3948.1
              },
              {
                gdpCategory: "Motor vehicles, bodies and trailers, and parts manufacturing",
                gdp: 4385.7
              },
              {
                gdpCategory: "Other transportation equipment manufacturing",
                gdp: 997.3
              },
              {
                gdpCategory: "Furniture and related product manufacturing",
                gdp: 1090.3
              },
              { gdpCategory: "Miscellaneous manufacturing", gdp: 5489.0 }
            ]
          },
          {
            gdpCategory: "Nondurable goods manufacturing",
            children: [
              {
                gdpCategory: "Food and beverage and tobacco product manufacturing",
                gdp: 14878.3
              },
              {
                gdpCategory: "Textile mills and textile product mills",
                gdp: 328.4
              },
              {
                gdpCategory: "Apparel, leather, and allied product manufacturing",
                gdp: 464.3
              },
              { gdpCategory: "Paper manufacturing", gdp: 2195.7 },
              {
                gdpCategory: "Printing and related support activities",
                gdp: 2933.0
              },
              {
                gdpCategory: "Petroleum and coal products manufacturing",
                gdp: 7699.1
              },
              { gdpCategory: "Chemical manufacturing", gdp: 35521.2 },
              {
                gdpCategory: "Plastics and rubber products manufacturing",
                gdp: 6771.3
              }
            ]
          }
        ]
      },
      { gdpCategory: "Wholesale trade", gdp: 83595.6 },
      { gdpCategory: "Retail trade", gdp: 60176.9 },
      {
        gdpCategory: "Transportation and warehousing",
        children: [
          { gdpCategory: "Air transportation", gdp: 8902.6 },
          { gdpCategory: "Rail transportation", gdp: 3212.0 },
          { gdpCategory: "Water transportation", gdp: 535.0 },
          { gdpCategory: "Truck transportation", gdp: 13944.0 },
          {
            gdpCategory: "Transit and ground passenger transportation",
            gdp: 2574.9
          },
          { gdpCategory: "Pipeline transportation", gdp: 915.6 },
          {
            gdpCategory: "Other transportation and support activities",
            gdp: 10505.8
          },
          { gdpCategory: "Warehousing and storage", gdp: 4786.3 }
        ]
      },
      {
        gdpCategory: "Information",
        children: [
          {
            gdpCategory: "Publishing industries (except Internet)",
            gdp: 8231.9
          },
          {
            gdpCategory: "Motion picture and sound recording industries",
            gdp: 1330.3
          },
          {
            gdpCategory: "Broadcasting (except Internet) and telecommunications",
            gdp: 16415.3
          },
          {
            gdpCategory: "Data processing, hosting, and other information services",
            gdp: 11382.7
          }
        ]
      },
      {
        gdpCategory: "Finance, insurance, real estate, rental, and leasing",
        children: [
          {
            gdpCategory: "Finance and insurance",
            children: [
              {
                gdpCategory: "Monetary Authorities- central bank, credit intermediation, and related services",
                gdp: 32696.1
              },
              {
                gdpCategory: "Securities, commodity contracts, and other financial investments and related activities",
                gdp: 15111.8
              },
              {
                gdpCategory: "Insurance carriers and related activities",
                gdp: 34110.6
              },
              {
                gdpCategory: "Funds, trusts, and other financial vehicles",
                gdp: 1235.3
              }
            ]
          },
          {
            gdpCategory: "Real estate and rental and leasing",
            children: [
              { gdpCategory: "Real estate", gdp: 117494.6 },
              {
                gdpCategory: "Rental and leasing services and lessors of nonfinancial intangible assets",
                gdp: 13364.9
              }
            ]
          }
        ]
      },
      {
        gdpCategory: "Professional and business services",
        children: [
          {
            gdpCategory: "Professional, scientific, and technical services",
            children: [
              { gdpCategory: "Legal services", gdp: 18832.4 },
              {
                gdpCategory: "Computer systems design and related services",
                gdp: 15856.1
              },
              {
                gdpCategory: "Miscellaneous professional, scientific, and technical services",
                gdp: 52805.5
              }
            ]
          },
          {
            gdpCategory: "Management of companies and enterprises",
            gdp: 15577.4
          },
          {
            gdpCategory: "Administrative and support and waste management and remediation services",
            children: [
              {
                gdpCategory: "Administrative and support services",
                gdp: 35137.4
              },
              {
                gdpCategory: "Waste management and remediation services",
                gdp: 2571.6
              }
            ]
          }
        ]
      },
      {
        gdpCategory: "Educational services, health care, and social assistance",
        children: [
          { gdpCategory: "Educational services", gdp: 14078.1 },
          {
            gdpCategory: "Health care and social assistance",
            children: [
              { gdpCategory: "Ambulatory health care services", gdp: 29629.1 },
              { gdpCategory: "Hospitals", gdp: 28676.1 },
              {
                gdpCategory: "Nursing and residential care facilities",
                gdp: 8006.3
              },
              { gdpCategory: "Social assistance", gdp: 6535.7 }
            ]
          }
        ]
      },
      {
        gdpCategory: "Arts, entertainment, recreation, accommodation, and food services",
        children: [
          {
            gdpCategory: "Arts, entertainment, and recreation",
            children: [
              {
                gdpCategory: "Performing arts, spectator sports, museums, and related activities",
                gdp: 5558.0
              },
              {
                gdpCategory: "Amusement, gambling, and recreation industries",
                gdp: 5475.4
              }
            ]
          },
          {
            gdpCategory: "Accommodation and food services",
            children: [
              { gdpCategory: "Accommodation", gdp: 8564.4 },
              {
                gdpCategory: "Food services and drinking places",
                gdp: 23629.7
              }
            ]
          }
        ]
      },
      {
        gdpCategory: "Other services (except government and government enterprises)",
        gdp: 23361.8
      },
      { gdpCategory: "Federal civilian government", gdp: 14664.2 },
      { gdpCategory: "Military", gdp: 4417.1 },
      { gdpCategory: "State and local government", gdp: 72934.6 }
    ]
  },
  Tennessee: {
    gdpCategory: "All industry total",
    children: [
      {
        gdpCategory: "Agriculture, forestry, fishing and hunting",
        children: [
          { gdpCategory: "Farms", gdp: 1850.6 },
          {
            gdpCategory: "Forestry, fishing, and related activities",
            gdp: 391.7
          }
        ]
      },
      {
        gdpCategory: "Mining, quarrying, and oil and gas extraction",
        children: [
          { gdpCategory: "Oil and gas extraction", gdp: 21.7 },
          { gdpCategory: "Mining (except oil and gas)", gdp: 1307.8 },
          { gdpCategory: "Support activities for mining", gdp: 58.7 }
        ]
      },
      { gdpCategory: "Utilities", gdp: 4905.1 },
      { gdpCategory: "Construction", gdp: 18520.2 },
      {
        gdpCategory: "Manufacturing",
        children: [
          {
            gdpCategory: "Durable goods manufacturing",
            children: [
              { gdpCategory: "Wood product manufacturing", gdp: 1869.4 },
              {
                gdpCategory: "Nonmetallic mineral product manufacturing",
                gdp: 2382.3
              },
              { gdpCategory: "Primary metal manufacturing", gdp: 2205.4 },
              {
                gdpCategory: "Fabricated metal product manufacturing",
                gdp: 4787.0
              },
              { gdpCategory: "Machinery manufacturing", gdp: 3912.5 },
              {
                gdpCategory: "Computer and electronic product manufacturing",
                gdp: 971.9
              },
              {
                gdpCategory: "Electrical equipment, appliance, and component manufacturing",
                gdp: 3461.2
              },
              {
                gdpCategory: "Motor vehicles, bodies and trailers, and parts manufacturing",
                gdp: 10202.5
              },
              {
                gdpCategory: "Other transportation equipment manufacturing",
                gdp: 1092.9
              },
              {
                gdpCategory: "Furniture and related product manufacturing",
                gdp: 639.2
              },
              { gdpCategory: "Miscellaneous manufacturing", gdp: 3357.2 }
            ]
          },
          {
            gdpCategory: "Nondurable goods manufacturing",
            children: [
              {
                gdpCategory: "Food and beverage and tobacco product manufacturing",
                gdp: 12142.7
              },
              {
                gdpCategory: "Textile mills and textile product mills",
                gdp: 395.6
              },
              {
                gdpCategory: "Apparel, leather, and allied product manufacturing",
                gdp: 218.8
              },
              { gdpCategory: "Paper manufacturing", gdp: 4007.7 },
              {
                gdpCategory: "Printing and related support activities",
                gdp: 1065.3
              },
              {
                gdpCategory: "Petroleum and coal products manufacturing",
                gdp: 1544.4
              },
              { gdpCategory: "Chemical manufacturing", gdp: 8693.7 },
              {
                gdpCategory: "Plastics and rubber products manufacturing",
                gdp: 2870.1
              }
            ]
          }
        ]
      },
      { gdpCategory: "Wholesale trade", gdp: 33078.9 },
      { gdpCategory: "Retail trade", gdp: 38409.2 },
      {
        gdpCategory: "Transportation and warehousing",
        children: [
          { gdpCategory: "Air transportation", gdp: 1110.3 },
          { gdpCategory: "Rail transportation", gdp: 952.2 },
          { gdpCategory: "Water transportation", gdp: 520.3 },
          { gdpCategory: "Truck transportation", gdp: 9198.2 },
          {
            gdpCategory: "Transit and ground passenger transportation",
            gdp: 668.4
          },
          { gdpCategory: "Pipeline transportation", gdp: 212.6 },
          {
            gdpCategory: "Other transportation and support activities",
            gdp: 9801.0
          },
          { gdpCategory: "Warehousing and storage", gdp: 3250.4 }
        ]
      },
      {
        gdpCategory: "Information",
        children: [
          {
            gdpCategory: "Publishing industries (except Internet)",
            gdp: 3296.5
          },
          {
            gdpCategory: "Motion picture and sound recording industries",
            gdp: 2337.6
          },
          {
            gdpCategory: "Broadcasting (except Internet) and telecommunications",
            gdp: 6324.6
          },
          {
            gdpCategory: "Data processing, hosting, and other information services",
            gdp: 3811.3
          }
        ]
      },
      {
        gdpCategory: "Finance, insurance, real estate, rental, and leasing",
        children: [
          {
            gdpCategory: "Finance and insurance",
            children: [
              {
                gdpCategory: "Monetary Authorities- central bank, credit intermediation, and related services",
                gdp: 11707.7
              },
              {
                gdpCategory: "Securities, commodity contracts, and other financial investments and related activities",
                gdp: 3308.6
              },
              {
                gdpCategory: "Insurance carriers and related activities",
                gdp: 13050.1
              },
              {
                gdpCategory: "Funds, trusts, and other financial vehicles",
                gdp: 549.9
              }
            ]
          },
          {
            gdpCategory: "Real estate and rental and leasing",
            children: [
              { gdpCategory: "Real estate", gdp: 51526.6 },
              {
                gdpCategory: "Rental and leasing services and lessors of nonfinancial intangible assets",
                gdp: 4577.8
              }
            ]
          }
        ]
      },
      {
        gdpCategory: "Professional and business services",
        children: [
          {
            gdpCategory: "Professional, scientific, and technical services",
            children: [
              { gdpCategory: "Legal services", gdp: 4214.5 },
              {
                gdpCategory: "Computer systems design and related services",
                gdp: 4080.5
              },
              {
                gdpCategory: "Miscellaneous professional, scientific, and technical services",
                gdp: 20831.4
              }
            ]
          },
          {
            gdpCategory: "Management of companies and enterprises",
            gdp: 8313.0
          },
          {
            gdpCategory: "Administrative and support and waste management and remediation services",
            children: [
              {
                gdpCategory: "Administrative and support services",
                gdp: 17587.1
              },
              {
                gdpCategory: "Waste management and remediation services",
                gdp: 1390.5
              }
            ]
          }
        ]
      },
      {
        gdpCategory: "Educational services, health care, and social assistance",
        children: [
          { gdpCategory: "Educational services", gdp: 4856.1 },
          {
            gdpCategory: "Health care and social assistance",
            children: [
              { gdpCategory: "Ambulatory health care services", gdp: 20440.7 },
              { gdpCategory: "Hospitals", gdp: 17296.0 },
              {
                gdpCategory: "Nursing and residential care facilities",
                gdp: 3298.1
              },
              { gdpCategory: "Social assistance", gdp: 2267.3 }
            ]
          }
        ]
      },
      {
        gdpCategory: "Arts, entertainment, recreation, accommodation, and food services",
        children: [
          {
            gdpCategory: "Arts, entertainment, and recreation",
            children: [
              {
                gdpCategory: "Performing arts, spectator sports, museums, and related activities",
                gdp: 9434.5
              },
              {
                gdpCategory: "Amusement, gambling, and recreation industries",
                gdp: 1814.6
              }
            ]
          },
          {
            gdpCategory: "Accommodation and food services",
            children: [
              { gdpCategory: "Accommodation", gdp: 4906.1 },
              {
                gdpCategory: "Food services and drinking places",
                gdp: 14311.3
              }
            ]
          }
        ]
      },
      {
        gdpCategory: "Other services (except government and government enterprises)",
        gdp: 12400.8
      },
      { gdpCategory: "Federal civilian government", gdp: 12321.9 },
      { gdpCategory: "Military", gdp: 1765.9 },
      { gdpCategory: "State and local government", gdp: 33559.6 }
    ]
  },
  Wyoming: {
    gdpCategory: "All industry total",
    children: [
      {
        gdpCategory: "Agriculture, forestry, fishing and hunting",
        children: [
          { gdpCategory: "Farms", gdp: 900.7 },
          {
            gdpCategory: "Forestry, fishing, and related activities",
            gdp: 106.4
          }
        ]
      },
      {
        gdpCategory: "Mining, quarrying, and oil and gas extraction",
        children: [
          { gdpCategory: "Oil and gas extraction", gdp: 3864.4 },
          { gdpCategory: "Mining (except oil and gas)", gdp: 4440.1 },
          { gdpCategory: "Support activities for mining", gdp: 1048.1 }
        ]
      },
      { gdpCategory: "Utilities", gdp: 1143.4 },
      { gdpCategory: "Construction", gdp: 2480.1 },
      {
        gdpCategory: "Manufacturing",
        children: [
          {
            gdpCategory: "Durable goods manufacturing",
            children: [
              { gdpCategory: "Wood product manufacturing", gdp: 50.8 },
              {
                gdpCategory: "Nonmetallic mineral product manufacturing",
                gdp: 192.9
              },
              { gdpCategory: "Primary metal manufacturing", gdp: 33.4 },
              {
                gdpCategory: "Fabricated metal product manufacturing",
                gdp: 191.8
              },
              { gdpCategory: "Machinery manufacturing", gdp: 76.0 },
              {
                gdpCategory: "Computer and electronic product manufacturing",
                gdp: 38.7
              },
              {
                gdpCategory: "Electrical equipment, appliance, and component manufacturing",
                gdp: 55.1
              },
              {
                gdpCategory: "Motor vehicles, bodies and trailers, and parts manufacturing",
                gdp: 15.8
              },
              {
                gdpCategory: "Other transportation equipment manufacturing",
                gdp: 11.2
              },
              {
                gdpCategory: "Furniture and related product manufacturing",
                gdp: 9.8
              },
              { gdpCategory: "Miscellaneous manufacturing", gdp: 16.3 }
            ]
          },
          {
            gdpCategory: "Nondurable goods manufacturing",
            children: [
              {
                gdpCategory: "Food and beverage and tobacco product manufacturing",
                gdp: 95.1
              },
              {
                gdpCategory: "Textile mills and textile product mills",
                gdp: 7.4
              },
              {
                gdpCategory: "Apparel, leather, and allied product manufacturing",
                gdp: 0.5
              },
              { gdpCategory: "Paper manufacturing", gdp: 0 },
              {
                gdpCategory: "Printing and related support activities",
                gdp: 11.1
              },
              {
                gdpCategory: "Petroleum and coal products manufacturing",
                gdp: 2718.6
              },
              { gdpCategory: "Chemical manufacturing", gdp: 738.4 },
              {
                gdpCategory: "Plastics and rubber products manufacturing",
                gdp: 58.8
              }
            ]
          }
        ]
      },
      { gdpCategory: "Wholesale trade", gdp: 1577.3 },
      { gdpCategory: "Retail trade", gdp: 2893.6 },
      {
        gdpCategory: "Transportation and warehousing",
        children: [
          { gdpCategory: "Air transportation", gdp: 39.2 },
          { gdpCategory: "Rail transportation", gdp: 1752.7 },
          { gdpCategory: "Water transportation", gdp: 10.1 },
          { gdpCategory: "Truck transportation", gdp: 511.2 },
          {
            gdpCategory: "Transit and ground passenger transportation",
            gdp: 30.6
          },
          { gdpCategory: "Pipeline transportation", gdp: 1357.5 },
          {
            gdpCategory: "Other transportation and support activities",
            gdp: 366.8
          },
          { gdpCategory: "Warehousing and storage", gdp: 105.6 }
        ]
      },
      {
        gdpCategory: "Information",
        children: [
          {
            gdpCategory: "Publishing industries (except Internet)",
            gdp: 159.4
          },
          {
            gdpCategory: "Motion picture and sound recording industries",
            gdp: 58.6
          },
          {
            gdpCategory: "Broadcasting (except Internet) and telecommunications",
            gdp: 496.8
          },
          {
            gdpCategory: "Data processing, hosting, and other information services",
            gdp: 75.0
          }
        ]
      },
      {
        gdpCategory: "Finance, insurance, real estate, rental, and leasing",
        children: [
          {
            gdpCategory: "Finance and insurance",
            children: [
              {
                gdpCategory: "Monetary Authorities- central bank, credit intermediation, and related services",
                gdp: 840.0
              },
              {
                gdpCategory: "Securities, commodity contracts, and other financial investments and related activities",
                gdp: 200.7
              },
              {
                gdpCategory: "Insurance carriers and related activities",
                gdp: 431.5
              },
              {
                gdpCategory: "Funds, trusts, and other financial vehicles",
                gdp: 65.5
              }
            ]
          },
          {
            gdpCategory: "Real estate and rental and leasing",
            children: [
              { gdpCategory: "Real estate", gdp: 4410.7 },
              {
                gdpCategory: "Rental and leasing services and lessors of nonfinancial intangible assets",
                gdp: 528.4
              }
            ]
          }
        ]
      },
      {
        gdpCategory: "Professional and business services",
        children: [
          {
            gdpCategory: "Professional, scientific, and technical services",
            children: [
              { gdpCategory: "Legal services", gdp: 240.7 },
              {
                gdpCategory: "Computer systems design and related services",
                gdp: 244.7
              },
              {
                gdpCategory: "Miscellaneous professional, scientific, and technical services",
                gdp: 1144.7
              }
            ]
          },
          {
            gdpCategory: "Management of companies and enterprises",
            gdp: 267.5
          },
          {
            gdpCategory: "Administrative and support and waste management and remediation services",
            children: [
              {
                gdpCategory: "Administrative and support services",
                gdp: 632.0
              },
              {
                gdpCategory: "Waste management and remediation services",
                gdp: 91.2
              }
            ]
          }
        ]
      },
      {
        gdpCategory: "Educational services, health care, and social assistance",
        children: [
          { gdpCategory: "Educational services", gdp: 165.5 },
          {
            gdpCategory: "Health care and social assistance",
            children: [
              { gdpCategory: "Ambulatory health care services", gdp: 1094.0 },
              { gdpCategory: "Hospitals", gdp: 350.1 },
              {
                gdpCategory: "Nursing and residential care facilities",
                gdp: 215.5
              },
              { gdpCategory: "Social assistance", gdp: 288.7 }
            ]
          }
        ]
      },
      {
        gdpCategory: "Arts, entertainment, recreation, accommodation, and food services",
        children: [
          {
            gdpCategory: "Arts, entertainment, and recreation",
            children: [
              {
                gdpCategory: "Performing arts, spectator sports, museums, and related activities",
                gdp: 136.2
              },
              {
                gdpCategory: "Amusement, gambling, and recreation industries",
                gdp: 275.6
              }
            ]
          },
          {
            gdpCategory: "Accommodation and food services",
            children: [
              { gdpCategory: "Accommodation", gdp: 1123.9 },
              { gdpCategory: "Food services and drinking places", gdp: 841.1 }
            ]
          }
        ]
      },
      {
        gdpCategory: "Other services (except government and government enterprises)",
        gdp: 771.1
      },
      { gdpCategory: "Federal civilian government", gdp: 1113.8 },
      { gdpCategory: "Military", gdp: 521.0 },
      { gdpCategory: "State and local government", gdp: 5347.2 }
    ]
  },
  Maine: {
    gdpCategory: "All industry total",
    children: [
      {
        gdpCategory: "Agriculture, forestry, fishing and hunting",
        children: [
          { gdpCategory: "Farms", gdp: 657.2 },
          {
            gdpCategory: "Forestry, fishing, and related activities",
            gdp: 663.2
          }
        ]
      },
      {
        gdpCategory: "Mining, quarrying, and oil and gas extraction",
        children: [
          { gdpCategory: "Oil and gas extraction", gdp: 0.0 },
          { gdpCategory: "Mining (except oil and gas)", gdp: 47.5 },
          { gdpCategory: "Support activities for mining", gdp: 0.0 }
        ]
      },
      { gdpCategory: "Utilities", gdp: 1474.0 },
      { gdpCategory: "Construction", gdp: 2990.7 },
      {
        gdpCategory: "Manufacturing",
        children: [
          {
            gdpCategory: "Durable goods manufacturing",
            children: [
              { gdpCategory: "Wood product manufacturing", gdp: 636.1 },
              {
                gdpCategory: "Nonmetallic mineral product manufacturing",
                gdp: 154.8
              },
              { gdpCategory: "Primary metal manufacturing", gdp: 40.1 },
              {
                gdpCategory: "Fabricated metal product manufacturing",
                gdp: 554.1
              },
              { gdpCategory: "Machinery manufacturing", gdp: 271.5 },
              {
                gdpCategory: "Computer and electronic product manufacturing",
                gdp: 381.4
              },
              {
                gdpCategory: "Electrical equipment, appliance, and component manufacturing",
                gdp: 40.7
              },
              {
                gdpCategory: "Motor vehicles, bodies and trailers, and parts manufacturing",
                gdp: 112.1
              },
              {
                gdpCategory: "Other transportation equipment manufacturing",
                gdp: 1523.7
              },
              {
                gdpCategory: "Furniture and related product manufacturing",
                gdp: 71.8
              },
              { gdpCategory: "Miscellaneous manufacturing", gdp: 267.7 }
            ]
          },
          {
            gdpCategory: "Nondurable goods manufacturing",
            children: [
              {
                gdpCategory: "Food and beverage and tobacco product manufacturing",
                gdp: 1150.8
              },
              {
                gdpCategory: "Textile mills and textile product mills",
                gdp: 114.7
              },
              {
                gdpCategory: "Apparel, leather, and allied product manufacturing",
                gdp: 105.5
              },
              { gdpCategory: "Paper manufacturing", gdp: 778.1 },
              {
                gdpCategory: "Printing and related support activities",
                gdp: 148.8
              },
              {
                gdpCategory: "Petroleum and coal products manufacturing",
                gdp: 164.9
              },
              { gdpCategory: "Chemical manufacturing", gdp: 1152.3 },
              {
                gdpCategory: "Plastics and rubber products manufacturing",
                gdp: 307.7
              }
            ]
          }
        ]
      },
      { gdpCategory: "Wholesale trade", gdp: 4402.0 },
      { gdpCategory: "Retail trade", gdp: 7937.7 },
      {
        gdpCategory: "Transportation and warehousing",
        children: [
          { gdpCategory: "Air transportation", gdp: 111.7 },
          { gdpCategory: "Rail transportation", gdp: 80.0 },
          { gdpCategory: "Water transportation", gdp: 16.4 },
          { gdpCategory: "Truck transportation", gdp: 824.8 },
          {
            gdpCategory: "Transit and ground passenger transportation",
            gdp: 127.9
          },
          { gdpCategory: "Pipeline transportation", gdp: 28.2 },
          {
            gdpCategory: "Other transportation and support activities",
            gdp: 491.2
          },
          { gdpCategory: "Warehousing and storage", gdp: 256.4 }
        ]
      },
      {
        gdpCategory: "Information",
        children: [
          {
            gdpCategory: "Publishing industries (except Internet)",
            gdp: 398.8
          },
          {
            gdpCategory: "Motion picture and sound recording industries",
            gdp: 101.5
          },
          {
            gdpCategory: "Broadcasting (except Internet) and telecommunications",
            gdp: 765.7
          },
          {
            gdpCategory: "Data processing, hosting, and other information services",
            gdp: 289.1
          }
        ]
      },
      {
        gdpCategory: "Finance, insurance, real estate, rental, and leasing",
        children: [
          {
            gdpCategory: "Finance and insurance",
            children: [
              {
                gdpCategory: "Monetary Authorities- central bank, credit intermediation, and related services",
                gdp: 2429.7
              },
              {
                gdpCategory: "Securities, commodity contracts, and other financial investments and related activities",
                gdp: 397.1
              },
              {
                gdpCategory: "Insurance carriers and related activities",
                gdp: 2760.1
              },
              {
                gdpCategory: "Funds, trusts, and other financial vehicles",
                gdp: 32.0
              }
            ]
          },
          {
            gdpCategory: "Real estate and rental and leasing",
            children: [
              { gdpCategory: "Real estate", gdp: 12658.7 },
              {
                gdpCategory: "Rental and leasing services and lessors of nonfinancial intangible assets",
                gdp: 652.1
              }
            ]
          }
        ]
      },
      {
        gdpCategory: "Professional and business services",
        children: [
          {
            gdpCategory: "Professional, scientific, and technical services",
            children: [
              { gdpCategory: "Legal services", gdp: 792.3 },
              {
                gdpCategory: "Computer systems design and related services",
                gdp: 1052.0
              },
              {
                gdpCategory: "Miscellaneous professional, scientific, and technical services",
                gdp: 3136.1
              }
            ]
          },
          {
            gdpCategory: "Management of companies and enterprises",
            gdp: 2196.7
          },
          {
            gdpCategory: "Administrative and support and waste management and remediation services",
            children: [
              {
                gdpCategory: "Administrative and support services",
                gdp: 2297.2
              },
              {
                gdpCategory: "Waste management and remediation services",
                gdp: 311.0
              }
            ]
          }
        ]
      },
      {
        gdpCategory: "Educational services, health care, and social assistance",
        children: [
          { gdpCategory: "Educational services", gdp: 1241.8 },
          {
            gdpCategory: "Health care and social assistance",
            children: [
              { gdpCategory: "Ambulatory health care services", gdp: 3482.2 },
              { gdpCategory: "Hospitals", gdp: 3600.6 },
              {
                gdpCategory: "Nursing and residential care facilities",
                gdp: 1280.3
              },
              { gdpCategory: "Social assistance", gdp: 970.6 }
            ]
          }
        ]
      },
      {
        gdpCategory: "Arts, entertainment, recreation, accommodation, and food services",
        children: [
          {
            gdpCategory: "Arts, entertainment, and recreation",
            children: [
              {
                gdpCategory: "Performing arts, spectator sports, museums, and related activities",
                gdp: 529.7
              },
              {
                gdpCategory: "Amusement, gambling, and recreation industries",
                gdp: 484.7
              }
            ]
          },
          {
            gdpCategory: "Accommodation and food services",
            children: [
              { gdpCategory: "Accommodation", gdp: 1395.4 },
              { gdpCategory: "Food services and drinking places", gdp: 2565.8 }
            ]
          }
        ]
      },
      {
        gdpCategory: "Other services (except government and government enterprises)",
        gdp: 1846.0
      },
      { gdpCategory: "Federal civilian government", gdp: 2578.3 },
      { gdpCategory: "Military", gdp: 458.2 },
      { gdpCategory: "State and local government", gdp: 7011.8 }
    ]
  },
  Alaska: {
    gdpCategory: "All industry total",
    children: [
      {
        gdpCategory: "Agriculture, forestry, fishing and hunting",
        children: [
          { gdpCategory: "Farms", gdp: 7.5 },
          {
            gdpCategory: "Forestry, fishing, and related activities",
            gdp: 464.1
          }
        ]
      },
      {
        gdpCategory: "Mining, quarrying, and oil and gas extraction",
        children: [
          { gdpCategory: "Oil and gas extraction", gdp: 8489.9 },
          { gdpCategory: "Mining (except oil and gas)", gdp: 2160.2 },
          { gdpCategory: "Support activities for mining", gdp: 953.7 }
        ]
      },
      { gdpCategory: "Utilities", gdp: 1046.3 },
      { gdpCategory: "Construction", gdp: 2800.8 },
      {
        gdpCategory: "Manufacturing",
        children: [
          {
            gdpCategory: "Durable goods manufacturing",
            children: [
              { gdpCategory: "Wood product manufacturing", gdp: 50.9 },
              {
                gdpCategory: "Nonmetallic mineral product manufacturing",
                gdp: 30.5
              },
              { gdpCategory: "Primary metal manufacturing", gdp: 3.9 },
              {
                gdpCategory: "Fabricated metal product manufacturing",
                gdp: 41.5
              },
              { gdpCategory: "Machinery manufacturing", gdp: 14.0 },
              {
                gdpCategory: "Computer and electronic product manufacturing",
                gdp: 22.7
              },
              {
                gdpCategory: "Electrical equipment, appliance, and component manufacturing",
                gdp: 1.6
              },
              {
                gdpCategory: "Motor vehicles, bodies and trailers, and parts manufacturing",
                gdp: 2.9
              },
              {
                gdpCategory: "Other transportation equipment manufacturing",
                gdp: 67.2
              },
              {
                gdpCategory: "Furniture and related product manufacturing",
                gdp: 10.5
              },
              { gdpCategory: "Miscellaneous manufacturing", gdp: 14.5 }
            ]
          },
          {
            gdpCategory: "Nondurable goods manufacturing",
            children: [
              {
                gdpCategory: "Food and beverage and tobacco product manufacturing",
                gdp: 908.2
              },
              {
                gdpCategory: "Textile mills and textile product mills",
                gdp: 2.3
              },
              {
                gdpCategory: "Apparel, leather, and allied product manufacturing",
                gdp: 2.0
              },
              { gdpCategory: "Paper manufacturing", gdp: 0.8 },
              {
                gdpCategory: "Printing and related support activities",
                gdp: 19.7
              },
              {
                gdpCategory: "Petroleum and coal products manufacturing",
                gdp: 452.7
              },
              { gdpCategory: "Chemical manufacturing", gdp: 10.3 },
              {
                gdpCategory: "Plastics and rubber products manufacturing",
                gdp: 5.8
              }
            ]
          }
        ]
      },
      { gdpCategory: "Wholesale trade", gdp: 1695.4 },
      { gdpCategory: "Retail trade", gdp: 3179.2 },
      {
        gdpCategory: "Transportation and warehousing",
        children: [
          { gdpCategory: "Air transportation", gdp: 1335.5 },
          { gdpCategory: "Rail transportation", gdp: 0.0 },
          { gdpCategory: "Water transportation", gdp: 430.4 },
          { gdpCategory: "Truck transportation", gdp: 432.6 },
          {
            gdpCategory: "Transit and ground passenger transportation",
            gdp: 132.6
          },
          { gdpCategory: "Pipeline transportation", gdp: 6083.3 },
          {
            gdpCategory: "Other transportation and support activities",
            gdp: 1221.4
          },
          { gdpCategory: "Warehousing and storage", gdp: 31.8 }
        ]
      },
      {
        gdpCategory: "Information",
        children: [
          { gdpCategory: "Publishing industries (except Internet)", gdp: 75.9 },
          {
            gdpCategory: "Motion picture and sound recording industries",
            gdp: 40.9
          },
          {
            gdpCategory: "Broadcasting (except Internet) and telecommunications",
            gdp: 1243.9
          },
          {
            gdpCategory: "Data processing, hosting, and other information services",
            gdp: 155.1
          }
        ]
      },
      {
        gdpCategory: "Finance, insurance, real estate, rental, and leasing",
        children: [
          {
            gdpCategory: "Finance and insurance",
            children: [
              {
                gdpCategory: "Monetary Authorities- central bank, credit intermediation, and related services",
                gdp: 848.3
              },
              {
                gdpCategory: "Securities, commodity contracts, and other financial investments and related activities",
                gdp: 117.4
              },
              {
                gdpCategory: "Insurance carriers and related activities",
                gdp: 374.6
              },
              {
                gdpCategory: "Funds, trusts, and other financial vehicles",
                gdp: 10.7
              }
            ]
          },
          {
            gdpCategory: "Real estate and rental and leasing",
            children: [
              { gdpCategory: "Real estate", gdp: 5564.9 },
              {
                gdpCategory: "Rental and leasing services and lessors of nonfinancial intangible assets",
                gdp: 890.5
              }
            ]
          }
        ]
      },
      {
        gdpCategory: "Professional and business services",
        children: [
          {
            gdpCategory: "Professional, scientific, and technical services",
            children: [
              { gdpCategory: "Legal services", gdp: 209.1 },
              {
                gdpCategory: "Computer systems design and related services",
                gdp: 184.8
              },
              {
                gdpCategory: "Miscellaneous professional, scientific, and technical services",
                gdp: 1645.2
              }
            ]
          },
          {
            gdpCategory: "Management of companies and enterprises",
            gdp: 434.3
          },
          {
            gdpCategory: "Administrative and support and waste management and remediation services",
            children: [
              {
                gdpCategory: "Administrative and support services",
                gdp: 927.9
              },
              {
                gdpCategory: "Waste management and remediation services",
                gdp: 217.2
              }
            ]
          }
        ]
      },
      {
        gdpCategory: "Educational services, health care, and social assistance",
        children: [
          { gdpCategory: "Educational services", gdp: 218.6 },
          {
            gdpCategory: "Health care and social assistance",
            children: [
              { gdpCategory: "Ambulatory health care services", gdp: 2602.2 },
              { gdpCategory: "Hospitals", gdp: 1793.4 },
              {
                gdpCategory: "Nursing and residential care facilities",
                gdp: 233.9
              },
              { gdpCategory: "Social assistance", gdp: 431.4 }
            ]
          }
        ]
      },
      {
        gdpCategory: "Arts, entertainment, recreation, accommodation, and food services",
        children: [
          {
            gdpCategory: "Arts, entertainment, and recreation",
            children: [
              {
                gdpCategory: "Performing arts, spectator sports, museums, and related activities",
                gdp: 146.0
              },
              {
                gdpCategory: "Amusement, gambling, and recreation industries",
                gdp: 233.0
              }
            ]
          },
          {
            gdpCategory: "Accommodation and food services",
            children: [
              { gdpCategory: "Accommodation", gdp: 903.9 },
              { gdpCategory: "Food services and drinking places", gdp: 1097.6 }
            ]
          }
        ]
      },
      {
        gdpCategory: "Other services (except government and government enterprises)",
        gdp: 1112.1
      },
      { gdpCategory: "Federal civilian government", gdp: 2551.3 },
      { gdpCategory: "Military", gdp: 2816.7 },
      { gdpCategory: "State and local government", gdp: 6491.5 }
    ]
  },
  Wisconsin: {
    gdpCategory: "All industry total",
    children: [
      {
        gdpCategory: "Agriculture, forestry, fishing and hunting",
        children: [
          { gdpCategory: "Farms", gdp: 7700.5 },
          {
            gdpCategory: "Forestry, fishing, and related activities",
            gdp: 774.2
          }
        ]
      },
      {
        gdpCategory: "Mining, quarrying, and oil and gas extraction",
        children: [
          { gdpCategory: "Oil and gas extraction", gdp: 0.0 },
          { gdpCategory: "Mining (except oil and gas)", gdp: 847.2 },
          { gdpCategory: "Support activities for mining", gdp: 14.5 }
        ]
      },
      { gdpCategory: "Utilities", gdp: 6032.7 },
      { gdpCategory: "Construction", gdp: 17280.5 },
      {
        gdpCategory: "Manufacturing",
        children: [
          {
            gdpCategory: "Durable goods manufacturing",
            children: [
              { gdpCategory: "Wood product manufacturing", gdp: 1735.0 },
              {
                gdpCategory: "Nonmetallic mineral product manufacturing",
                gdp: 1634.7
              },
              { gdpCategory: "Primary metal manufacturing", gdp: 1634.0 },
              {
                gdpCategory: "Fabricated metal product manufacturing",
                gdp: 7723.9
              },
              { gdpCategory: "Machinery manufacturing", gdp: 10595.5 },
              {
                gdpCategory: "Computer and electronic product manufacturing",
                gdp: 2605.1
              },
              {
                gdpCategory: "Electrical equipment, appliance, and component manufacturing",
                gdp: 3392.8
              },
              {
                gdpCategory: "Motor vehicles, bodies and trailers, and parts manufacturing",
                gdp: 3092.8
              },
              {
                gdpCategory: "Other transportation equipment manufacturing",
                gdp: 1409.9
              },
              {
                gdpCategory: "Furniture and related product manufacturing",
                gdp: 953.1
              },
              { gdpCategory: "Miscellaneous manufacturing", gdp: 1953.5 }
            ]
          },
          {
            gdpCategory: "Nondurable goods manufacturing",
            children: [
              {
                gdpCategory: "Food and beverage and tobacco product manufacturing",
                gdp: 10647.5
              },
              {
                gdpCategory: "Textile mills and textile product mills",
                gdp: 296.8
              },
              {
                gdpCategory: "Apparel, leather, and allied product manufacturing",
                gdp: 110.5
              },
              { gdpCategory: "Paper manufacturing", gdp: 5606.1 },
              {
                gdpCategory: "Printing and related support activities",
                gdp: 2671.3
              },
              {
                gdpCategory: "Petroleum and coal products manufacturing",
                gdp: 312.4
              },
              { gdpCategory: "Chemical manufacturing", gdp: 5668.9 },
              {
                gdpCategory: "Plastics and rubber products manufacturing",
                gdp: 3679.5
              }
            ]
          }
        ]
      },
      { gdpCategory: "Wholesale trade", gdp: 25763.3 },
      { gdpCategory: "Retail trade", gdp: 26574.3 },
      {
        gdpCategory: "Transportation and warehousing",
        children: [
          { gdpCategory: "Air transportation", gdp: 516.5 },
          { gdpCategory: "Rail transportation", gdp: 1064.3 },
          { gdpCategory: "Water transportation", gdp: 17.2 },
          { gdpCategory: "Truck transportation", gdp: 6637.3 },
          {
            gdpCategory: "Transit and ground passenger transportation",
            gdp: 1427.1
          },
          { gdpCategory: "Pipeline transportation", gdp: 148.4 },
          {
            gdpCategory: "Other transportation and support activities",
            gdp: 2088.5
          },
          { gdpCategory: "Warehousing and storage", gdp: 1982.7 }
        ]
      },
      {
        gdpCategory: "Information",
        children: [
          {
            gdpCategory: "Publishing industries (except Internet)",
            gdp: 5986.9
          },
          {
            gdpCategory: "Motion picture and sound recording industries",
            gdp: 250.6
          },
          {
            gdpCategory: "Broadcasting (except Internet) and telecommunications",
            gdp: 5063.0
          },
          {
            gdpCategory: "Data processing, hosting, and other information services",
            gdp: 3350.1
          }
        ]
      },
      {
        gdpCategory: "Finance, insurance, real estate, rental, and leasing",
        children: [
          {
            gdpCategory: "Finance and insurance",
            children: [
              {
                gdpCategory: "Monetary Authorities- central bank, credit intermediation, and related services",
                gdp: 8440.2
              },
              {
                gdpCategory: "Securities, commodity contracts, and other financial investments and related activities",
                gdp: 2814.0
              },
              {
                gdpCategory: "Insurance carriers and related activities",
                gdp: 18872.5
              },
              {
                gdpCategory: "Funds, trusts, and other financial vehicles",
                gdp: 39.9
              }
            ]
          },
          {
            gdpCategory: "Real estate and rental and leasing",
            children: [
              { gdpCategory: "Real estate", gdp: 41670.1 },
              {
                gdpCategory: "Rental and leasing services and lessors of nonfinancial intangible assets",
                gdp: 2613.7
              }
            ]
          }
        ]
      },
      {
        gdpCategory: "Professional and business services",
        children: [
          {
            gdpCategory: "Professional, scientific, and technical services",
            children: [
              { gdpCategory: "Legal services", gdp: 3474.1 },
              {
                gdpCategory: "Computer systems design and related services",
                gdp: 4214.4
              },
              {
                gdpCategory: "Miscellaneous professional, scientific, and technical services",
                gdp: 11991.1
              }
            ]
          },
          {
            gdpCategory: "Management of companies and enterprises",
            gdp: 9949.7
          },
          {
            gdpCategory: "Administrative and support and waste management and remediation services",
            children: [
              {
                gdpCategory: "Administrative and support services",
                gdp: 9175.7
              },
              {
                gdpCategory: "Waste management and remediation services",
                gdp: 898.9
              }
            ]
          }
        ]
      },
      {
        gdpCategory: "Educational services, health care, and social assistance",
        children: [
          { gdpCategory: "Educational services", gdp: 4053.0 },
          {
            gdpCategory: "Health care and social assistance",
            children: [
              { gdpCategory: "Ambulatory health care services", gdp: 16379.4 },
              { gdpCategory: "Hospitals", gdp: 11475.7 },
              {
                gdpCategory: "Nursing and residential care facilities",
                gdp: 3407.6
              },
              { gdpCategory: "Social assistance", gdp: 3556.9 }
            ]
          }
        ]
      },
      {
        gdpCategory: "Arts, entertainment, recreation, accommodation, and food services",
        children: [
          {
            gdpCategory: "Arts, entertainment, and recreation",
            children: [
              {
                gdpCategory: "Performing arts, spectator sports, museums, and related activities",
                gdp: 2023.6
              },
              {
                gdpCategory: "Amusement, gambling, and recreation industries",
                gdp: 1366.0
              }
            ]
          },
          {
            gdpCategory: "Accommodation and food services",
            children: [
              { gdpCategory: "Accommodation", gdp: 2166.4 },
              { gdpCategory: "Food services and drinking places", gdp: 8536.8 }
            ]
          }
        ]
      },
      {
        gdpCategory: "Other services (except government and government enterprises)",
        gdp: 9142.4
      },
      { gdpCategory: "Federal civilian government", gdp: 4782.3 },
      { gdpCategory: "Military", gdp: 962.6 },
      { gdpCategory: "State and local government", gdp: 34959.5 }
    ]
  },
  Hawaii: {
    gdpCategory: "All industry total",
    children: [
      {
        gdpCategory: "Agriculture, forestry, fishing and hunting",
        children: [
          { gdpCategory: "Farms", gdp: 412.9 },
          {
            gdpCategory: "Forestry, fishing, and related activities",
            gdp: 104.1
          }
        ]
      },
      {
        gdpCategory: "Mining, quarrying, and oil and gas extraction",
        children: [
          { gdpCategory: "Oil and gas extraction", gdp: 0.0 },
          { gdpCategory: "Mining (except oil and gas)", gdp: 86.3 },
          { gdpCategory: "Support activities for mining", gdp: 0.9 }
        ]
      },
      { gdpCategory: "Utilities", gdp: 2519.2 },
      { gdpCategory: "Construction", gdp: 5714.9 },
      {
        gdpCategory: "Manufacturing",
        children: [
          {
            gdpCategory: "Durable goods manufacturing",
            children: [
              { gdpCategory: "Wood product manufacturing", gdp: 15.4 },
              {
                gdpCategory: "Nonmetallic mineral product manufacturing",
                gdp: 153.8
              },
              { gdpCategory: "Primary metal manufacturing", gdp: 4.8 },
              {
                gdpCategory: "Fabricated metal product manufacturing",
                gdp: 37.2
              },
              { gdpCategory: "Machinery manufacturing", gdp: 6.1 },
              {
                gdpCategory: "Computer and electronic product manufacturing",
                gdp: 51.6
              },
              {
                gdpCategory: "Electrical equipment, appliance, and component manufacturing",
                gdp: 2.9
              },
              {
                gdpCategory: "Motor vehicles, bodies and trailers, and parts manufacturing",
                gdp: 0.6
              },
              {
                gdpCategory: "Other transportation equipment manufacturing",
                gdp: 112.2
              },
              {
                gdpCategory: "Furniture and related product manufacturing",
                gdp: 30.0
              },
              { gdpCategory: "Miscellaneous manufacturing", gdp: 58.0 }
            ]
          },
          {
            gdpCategory: "Nondurable goods manufacturing",
            children: [
              {
                gdpCategory: "Food and beverage and tobacco product manufacturing",
                gdp: 545.6
              },
              {
                gdpCategory: "Textile mills and textile product mills",
                gdp: 13.9
              },
              {
                gdpCategory: "Apparel, leather, and allied product manufacturing",
                gdp: 17.7
              },
              { gdpCategory: "Paper manufacturing", gdp: 8.6 },
              {
                gdpCategory: "Printing and related support activities",
                gdp: 44.8
              },
              {
                gdpCategory: "Petroleum and coal products manufacturing",
                gdp: 429.4
              },
              { gdpCategory: "Chemical manufacturing", gdp: 153.8 },
              {
                gdpCategory: "Plastics and rubber products manufacturing",
                gdp: 24.0
              }
            ]
          }
        ]
      },
      { gdpCategory: "Wholesale trade", gdp: 3257.8 },
      { gdpCategory: "Retail trade", gdp: 7692.1 },
      {
        gdpCategory: "Transportation and warehousing",
        children: [
          { gdpCategory: "Air transportation", gdp: 2728.9 },
          { gdpCategory: "Rail transportation", gdp: 0.0 },
          { gdpCategory: "Water transportation", gdp: 343.1 },
          { gdpCategory: "Truck transportation", gdp: 448.7 },
          {
            gdpCategory: "Transit and ground passenger transportation",
            gdp: 347.8
          },
          { gdpCategory: "Pipeline transportation", gdp: 0.0 },
          {
            gdpCategory: "Other transportation and support activities",
            gdp: 1208.6
          },
          { gdpCategory: "Warehousing and storage", gdp: 59.7 }
        ]
      },
      {
        gdpCategory: "Information",
        children: [
          {
            gdpCategory: "Publishing industries (except Internet)",
            gdp: 258.7
          },
          {
            gdpCategory: "Motion picture and sound recording industries",
            gdp: 331.7
          },
          {
            gdpCategory: "Broadcasting (except Internet) and telecommunications",
            gdp: 1439.5
          },
          {
            gdpCategory: "Data processing, hosting, and other information services",
            gdp: 396.1
          }
        ]
      },
      {
        gdpCategory: "Finance, insurance, real estate, rental, and leasing",
        children: [
          {
            gdpCategory: "Finance and insurance",
            children: [
              {
                gdpCategory: "Monetary Authorities- central bank, credit intermediation, and related services",
                gdp: 1856.6
              },
              {
                gdpCategory: "Securities, commodity contracts, and other financial investments and related activities",
                gdp: 235.0
              },
              {
                gdpCategory: "Insurance carriers and related activities",
                gdp: 1965.6
              },
              {
                gdpCategory: "Funds, trusts, and other financial vehicles",
                gdp: 20.5
              }
            ]
          },
          {
            gdpCategory: "Real estate and rental and leasing",
            children: [
              { gdpCategory: "Real estate", gdp: 15231.2 },
              {
                gdpCategory: "Rental and leasing services and lessors of nonfinancial intangible assets",
                gdp: 2187.7
              }
            ]
          }
        ]
      },
      {
        gdpCategory: "Professional and business services",
        children: [
          {
            gdpCategory: "Professional, scientific, and technical services",
            children: [
              { gdpCategory: "Legal services", gdp: 855.5 },
              {
                gdpCategory: "Computer systems design and related services",
                gdp: 852.2
              },
              {
                gdpCategory: "Miscellaneous professional, scientific, and technical services",
                gdp: 2795.9
              }
            ]
          },
          {
            gdpCategory: "Management of companies and enterprises",
            gdp: 1255.0
          },
          {
            gdpCategory: "Administrative and support and waste management and remediation services",
            children: [
              {
                gdpCategory: "Administrative and support services",
                gdp: 2614.3
              },
              {
                gdpCategory: "Waste management and remediation services",
                gdp: 335.1
              }
            ]
          }
        ]
      },
      {
        gdpCategory: "Educational services, health care, and social assistance",
        children: [
          { gdpCategory: "Educational services", gdp: 1116.4 },
          {
            gdpCategory: "Health care and social assistance",
            children: [
              { gdpCategory: "Ambulatory health care services", gdp: 4053.1 },
              { gdpCategory: "Hospitals", gdp: 2116.3 },
              {
                gdpCategory: "Nursing and residential care facilities",
                gdp: 523.5
              },
              { gdpCategory: "Social assistance", gdp: 773.9 }
            ]
          }
        ]
      },
      {
        gdpCategory: "Arts, entertainment, recreation, accommodation, and food services",
        children: [
          {
            gdpCategory: "Arts, entertainment, and recreation",
            children: [
              {
                gdpCategory: "Performing arts, spectator sports, museums, and related activities",
                gdp: 681.9
              },
              {
                gdpCategory: "Amusement, gambling, and recreation industries",
                gdp: 619.6
              }
            ]
          },
          {
            gdpCategory: "Accommodation and food services",
            children: [
              { gdpCategory: "Accommodation", gdp: 6100.1 },
              { gdpCategory: "Food services and drinking places", gdp: 3599.2 }
            ]
          }
        ]
      },
      {
        gdpCategory: "Other services (except government and government enterprises)",
        gdp: 2459.5
      },
      { gdpCategory: "Federal civilian government", gdp: 5616.0 },
      { gdpCategory: "Military", gdp: 5604.2 },
      { gdpCategory: "State and local government", gdp: 8553.1 }
    ]
  },
  "South Dakota": {
    gdpCategory: "All industry total",
    children: [
      {
        gdpCategory: "Agriculture, forestry, fishing and hunting",
        children: [
          { gdpCategory: "Farms", gdp: 7626.1 },
          {
            gdpCategory: "Forestry, fishing, and related activities",
            gdp: 214.7
          }
        ]
      },
      {
        gdpCategory: "Mining, quarrying, and oil and gas extraction",
        children: [
          { gdpCategory: "Oil and gas extraction", gdp: 10.7 },
          { gdpCategory: "Mining (except oil and gas)", gdp: 182.3 },
          { gdpCategory: "Support activities for mining", gdp: 35.8 }
        ]
      },
      { gdpCategory: "Utilities", gdp: 1215.6 },
      { gdpCategory: "Construction", gdp: 2780.8 },
      {
        gdpCategory: "Manufacturing",
        children: [
          {
            gdpCategory: "Durable goods manufacturing",
            children: [
              { gdpCategory: "Wood product manufacturing", gdp: 272.2 },
              {
                gdpCategory: "Nonmetallic mineral product manufacturing",
                gdp: 235.8
              },
              { gdpCategory: "Primary metal manufacturing", gdp: 82.6 },
              {
                gdpCategory: "Fabricated metal product manufacturing",
                gdp: 300.8
              },
              { gdpCategory: "Machinery manufacturing", gdp: 648.5 },
              {
                gdpCategory: "Computer and electronic product manufacturing",
                gdp: 158.6
              },
              {
                gdpCategory: "Electrical equipment, appliance, and component manufacturing",
                gdp: 87.1
              },
              {
                gdpCategory: "Motor vehicles, bodies and trailers, and parts manufacturing",
                gdp: 305.1
              },
              {
                gdpCategory: "Other transportation equipment manufacturing",
                gdp: 50.9
              },
              {
                gdpCategory: "Furniture and related product manufacturing",
                gdp: 160.4
              },
              { gdpCategory: "Miscellaneous manufacturing", gdp: 960.6 }
            ]
          },
          {
            gdpCategory: "Nondurable goods manufacturing",
            children: [
              {
                gdpCategory: "Food and beverage and tobacco product manufacturing",
                gdp: 1196.1
              },
              {
                gdpCategory: "Textile mills and textile product mills",
                gdp: 49.6
              },
              {
                gdpCategory: "Apparel, leather, and allied product manufacturing",
                gdp: 2.3
              },
              { gdpCategory: "Paper manufacturing", gdp: 71.3 },
              {
                gdpCategory: "Printing and related support activities",
                gdp: 136.9
              },
              {
                gdpCategory: "Petroleum and coal products manufacturing",
                gdp: 1.9
              },
              { gdpCategory: "Chemical manufacturing", gdp: 427.7 },
              {
                gdpCategory: "Plastics and rubber products manufacturing",
                gdp: 44.4
              }
            ]
          }
        ]
      },
      { gdpCategory: "Wholesale trade", gdp: 4567.0 },
      { gdpCategory: "Retail trade", gdp: 4995.5 },
      {
        gdpCategory: "Transportation and warehousing",
        children: [
          { gdpCategory: "Air transportation", gdp: 99.6 },
          { gdpCategory: "Rail transportation", gdp: 192.0 },
          { gdpCategory: "Water transportation", gdp: 0.6 },
          { gdpCategory: "Truck transportation", gdp: 882.1 },
          {
            gdpCategory: "Transit and ground passenger transportation",
            gdp: 64.0
          },
          { gdpCategory: "Pipeline transportation", gdp: 43.2 },
          {
            gdpCategory: "Other transportation and support activities",
            gdp: 309.2
          },
          { gdpCategory: "Warehousing and storage", gdp: 74.1 }
        ]
      },
      {
        gdpCategory: "Information",
        children: [
          {
            gdpCategory: "Publishing industries (except Internet)",
            gdp: 132.1
          },
          {
            gdpCategory: "Motion picture and sound recording industries",
            gdp: 54.8
          },
          {
            gdpCategory: "Broadcasting (except Internet) and telecommunications",
            gdp: 1107.5
          },
          {
            gdpCategory: "Data processing, hosting, and other information services",
            gdp: 161.4
          }
        ]
      },
      {
        gdpCategory: "Finance, insurance, real estate, rental, and leasing",
        children: [
          {
            gdpCategory: "Finance and insurance",
            children: [
              {
                gdpCategory: "Monetary Authorities- central bank, credit intermediation, and related services",
                gdp: 8318.4
              },
              {
                gdpCategory: "Securities, commodity contracts, and other financial investments and related activities",
                gdp: 299.9
              },
              {
                gdpCategory: "Insurance carriers and related activities",
                gdp: 1498.2
              },
              {
                gdpCategory: "Funds, trusts, and other financial vehicles",
                gdp: 135.6
              }
            ]
          },
          {
            gdpCategory: "Real estate and rental and leasing",
            children: [
              { gdpCategory: "Real estate", gdp: 5766.0 },
              {
                gdpCategory: "Rental and leasing services and lessors of nonfinancial intangible assets",
                gdp: 476.3
              }
            ]
          }
        ]
      },
      {
        gdpCategory: "Professional and business services",
        children: [
          {
            gdpCategory: "Professional, scientific, and technical services",
            children: [
              { gdpCategory: "Legal services", gdp: 319.0 },
              {
                gdpCategory: "Computer systems design and related services",
                gdp: 517.9
              },
              {
                gdpCategory: "Miscellaneous professional, scientific, and technical services",
                gdp: 1566.6
              }
            ]
          },
          {
            gdpCategory: "Management of companies and enterprises",
            gdp: 895.9
          },
          {
            gdpCategory: "Administrative and support and waste management and remediation services",
            children: [
              {
                gdpCategory: "Administrative and support services",
                gdp: 1052.4
              },
              {
                gdpCategory: "Waste management and remediation services",
                gdp: 104.9
              }
            ]
          }
        ]
      },
      {
        gdpCategory: "Educational services, health care, and social assistance",
        children: [
          { gdpCategory: "Educational services", gdp: 408.2 },
          {
            gdpCategory: "Health care and social assistance",
            children: [
              { gdpCategory: "Ambulatory health care services", gdp: 2373.0 },
              { gdpCategory: "Hospitals", gdp: 2912.6 },
              {
                gdpCategory: "Nursing and residential care facilities",
                gdp: 603.2
              },
              { gdpCategory: "Social assistance", gdp: 368.5 }
            ]
          }
        ]
      },
      {
        gdpCategory: "Arts, entertainment, recreation, accommodation, and food services",
        children: [
          {
            gdpCategory: "Arts, entertainment, and recreation",
            children: [
              {
                gdpCategory: "Performing arts, spectator sports, museums, and related activities",
                gdp: 187.2
              },
              {
                gdpCategory: "Amusement, gambling, and recreation industries",
                gdp: 321.4
              }
            ]
          },
          {
            gdpCategory: "Accommodation and food services",
            children: [
              { gdpCategory: "Accommodation", gdp: 1087.0 },
              { gdpCategory: "Food services and drinking places", gdp: 1261.3 }
            ]
          }
        ]
      },
      {
        gdpCategory: "Other services (except government and government enterprises)",
        gdp: 1467.1
      },
      { gdpCategory: "Federal civilian government", gdp: 963.5 },
      { gdpCategory: "Military", gdp: 635.0 },
      { gdpCategory: "State and local government", gdp: 5300.5 }
    ]
  },
  Alabama: {
    gdpCategory: "All industry total",
    children: [
      {
        gdpCategory: "Agriculture, forestry, fishing and hunting",
        children: [
          { gdpCategory: "Farms", gdp: 2653.0 },
          {
            gdpCategory: "Forestry, fishing, and related activities",
            gdp: 684.3
          }
        ]
      },
      {
        gdpCategory: "Mining, quarrying, and oil and gas extraction",
        children: [
          { gdpCategory: "Oil and gas extraction", gdp: 450.1 },
          { gdpCategory: "Mining (except oil and gas)", gdp: 1926.1 },
          { gdpCategory: "Support activities for mining", gdp: 93.4 }
        ]
      },
      { gdpCategory: "Utilities", gdp: 8377.5 },
      { gdpCategory: "Construction", gdp: 12879.7 },
      {
        gdpCategory: "Manufacturing",
        children: [
          {
            gdpCategory: "Durable goods manufacturing",
            children: [
              { gdpCategory: "Wood product manufacturing", gdp: 3224.1 },
              {
                gdpCategory: "Nonmetallic mineral product manufacturing",
                gdp: 1947.6
              },
              { gdpCategory: "Primary metal manufacturing", gdp: 4900.8 },
              {
                gdpCategory: "Fabricated metal product manufacturing",
                gdp: 2965.5
              },
              { gdpCategory: "Machinery manufacturing", gdp: 1169.6 },
              {
                gdpCategory: "Computer and electronic product manufacturing",
                gdp: 1006.1
              },
              {
                gdpCategory: "Electrical equipment, appliance, and component manufacturing",
                gdp: 854.5
              },
              {
                gdpCategory: "Motor vehicles, bodies and trailers, and parts manufacturing",
                gdp: 5908.5
              },
              {
                gdpCategory: "Other transportation equipment manufacturing",
                gdp: 4887.6
              },
              {
                gdpCategory: "Furniture and related product manufacturing",
                gdp: 797.7
              },
              { gdpCategory: "Miscellaneous manufacturing", gdp: 794.8 }
            ]
          },
          {
            gdpCategory: "Nondurable goods manufacturing",
            children: [
              {
                gdpCategory: "Food and beverage and tobacco product manufacturing",
                gdp: 3300.4
              },
              {
                gdpCategory: "Textile mills and textile product mills",
                gdp: 562.8
              },
              {
                gdpCategory: "Apparel, leather, and allied product manufacturing",
                gdp: 101.8
              },
              { gdpCategory: "Paper manufacturing", gdp: 3332.4 },
              {
                gdpCategory: "Printing and related support activities",
                gdp: 248.4
              },
              {
                gdpCategory: "Petroleum and coal products manufacturing",
                gdp: 2262.7
              },
              { gdpCategory: "Chemical manufacturing", gdp: 4017.6 },
              {
                gdpCategory: "Plastics and rubber products manufacturing",
                gdp: 1578.3
              }
            ]
          }
        ]
      },
      { gdpCategory: "Wholesale trade", gdp: 17276.6 },
      { gdpCategory: "Retail trade", gdp: 21319.4 },
      {
        gdpCategory: "Transportation and warehousing",
        children: [
          { gdpCategory: "Air transportation", gdp: 248.5 },
          { gdpCategory: "Rail transportation", gdp: 858.3 },
          { gdpCategory: "Water transportation", gdp: 132.9 },
          { gdpCategory: "Truck transportation", gdp: 3961.2 },
          {
            gdpCategory: "Transit and ground passenger transportation",
            gdp: 99.6
          },
          { gdpCategory: "Pipeline transportation", gdp: 296.8 },
          {
            gdpCategory: "Other transportation and support activities",
            gdp: 2030.2
          },
          { gdpCategory: "Warehousing and storage", gdp: 1282.6 }
        ]
      },
      {
        gdpCategory: "Information",
        children: [
          {
            gdpCategory: "Publishing industries (except Internet)",
            gdp: 1223.0
          },
          {
            gdpCategory: "Motion picture and sound recording industries",
            gdp: 166.0
          },
          {
            gdpCategory: "Broadcasting (except Internet) and telecommunications",
            gdp: 3579.4
          },
          {
            gdpCategory: "Data processing, hosting, and other information services",
            gdp: 921.3
          }
        ]
      },
      {
        gdpCategory: "Finance, insurance, real estate, rental, and leasing",
        children: [
          {
            gdpCategory: "Finance and insurance",
            children: [
              {
                gdpCategory: "Monetary Authorities- central bank, credit intermediation, and related services",
                gdp: 7525.1
              },
              {
                gdpCategory: "Securities, commodity contracts, and other financial investments and related activities",
                gdp: 1113.3
              },
              {
                gdpCategory: "Insurance carriers and related activities",
                gdp: 6454.5
              },
              {
                gdpCategory: "Funds, trusts, and other financial vehicles",
                gdp: 29.5
              }
            ]
          },
          {
            gdpCategory: "Real estate and rental and leasing",
            children: [
              { gdpCategory: "Real estate", gdp: 29620.4 },
              {
                gdpCategory: "Rental and leasing services and lessors of nonfinancial intangible assets",
                gdp: 2763.3
              }
            ]
          }
        ]
      },
      {
        gdpCategory: "Professional and business services",
        children: [
          {
            gdpCategory: "Professional, scientific, and technical services",
            children: [
              { gdpCategory: "Legal services", gdp: 3088.1 },
              {
                gdpCategory: "Computer systems design and related services",
                gdp: 3554.9
              },
              {
                gdpCategory: "Miscellaneous professional, scientific, and technical services",
                gdp: 10815.0
              }
            ]
          },
          {
            gdpCategory: "Management of companies and enterprises",
            gdp: 2433.0
          },
          {
            gdpCategory: "Administrative and support and waste management and remediation services",
            children: [
              {
                gdpCategory: "Administrative and support services",
                gdp: 7012.6
              },
              {
                gdpCategory: "Waste management and remediation services",
                gdp: 871.4
              }
            ]
          }
        ]
      },
      {
        gdpCategory: "Educational services, health care, and social assistance",
        children: [
          { gdpCategory: "Educational services", gdp: 1411.1 },
          {
            gdpCategory: "Health care and social assistance",
            children: [
              { gdpCategory: "Ambulatory health care services", gdp: 11619.8 },
              { gdpCategory: "Hospitals", gdp: 5473.0 },
              {
                gdpCategory: "Nursing and residential care facilities",
                gdp: 1898.1
              },
              { gdpCategory: "Social assistance", gdp: 1120.4 }
            ]
          }
        ]
      },
      {
        gdpCategory: "Arts, entertainment, recreation, accommodation, and food services",
        children: [
          {
            gdpCategory: "Arts, entertainment, and recreation",
            children: [
              {
                gdpCategory: "Performing arts, spectator sports, museums, and related activities",
                gdp: 546.2
              },
              {
                gdpCategory: "Amusement, gambling, and recreation industries",
                gdp: 689.1
              }
            ]
          },
          {
            gdpCategory: "Accommodation and food services",
            children: [
              { gdpCategory: "Accommodation", gdp: 1469.1 },
              { gdpCategory: "Food services and drinking places", gdp: 7007.3 }
            ]
          }
        ]
      },
      {
        gdpCategory: "Other services (except government and government enterprises)",
        gdp: 7206.7
      },
      { gdpCategory: "Federal civilian government", gdp: 10316.3 },
      { gdpCategory: "Military", gdp: 5486.0 },
      { gdpCategory: "State and local government", gdp: 27723.5 }
    ]
  },
  Nebraska: {
    gdpCategory: "All industry total",
    children: [
      {
        gdpCategory: "Agriculture, forestry, fishing and hunting",
        children: [
          { gdpCategory: "Farms", gdp: 9054.7 },
          {
            gdpCategory: "Forestry, fishing, and related activities",
            gdp: 439.3
          }
        ]
      },
      {
        gdpCategory: "Mining, quarrying, and oil and gas extraction",
        children: [
          { gdpCategory: "Oil and gas extraction", gdp: 12.2 },
          { gdpCategory: "Mining (except oil and gas)", gdp: 151.1 },
          { gdpCategory: "Support activities for mining", gdp: 50.3 }
        ]
      },
      { gdpCategory: "Utilities", gdp: 4575.2 },
      { gdpCategory: "Construction", gdp: 7223.8 },
      {
        gdpCategory: "Manufacturing",
        children: [
          {
            gdpCategory: "Durable goods manufacturing",
            children: [
              { gdpCategory: "Wood product manufacturing", gdp: 297.8 },
              {
                gdpCategory: "Nonmetallic mineral product manufacturing",
                gdp: 517.7
              },
              { gdpCategory: "Primary metal manufacturing", gdp: 298.7 },
              {
                gdpCategory: "Fabricated metal product manufacturing",
                gdp: 1200.3
              },
              { gdpCategory: "Machinery manufacturing", gdp: 1472.7 },
              {
                gdpCategory: "Computer and electronic product manufacturing",
                gdp: 455.4
              },
              {
                gdpCategory: "Electrical equipment, appliance, and component manufacturing",
                gdp: 173.1
              },
              {
                gdpCategory: "Motor vehicles, bodies and trailers, and parts manufacturing",
                gdp: 879.9
              },
              {
                gdpCategory: "Other transportation equipment manufacturing",
                gdp: 235.2
              },
              {
                gdpCategory: "Furniture and related product manufacturing",
                gdp: 88.4
              },
              { gdpCategory: "Miscellaneous manufacturing", gdp: 1500.7 }
            ]
          },
          {
            gdpCategory: "Nondurable goods manufacturing",
            children: [
              {
                gdpCategory: "Food and beverage and tobacco product manufacturing",
                gdp: 7269.3
              },
              {
                gdpCategory: "Textile mills and textile product mills",
                gdp: 33.3
              },
              {
                gdpCategory: "Apparel, leather, and allied product manufacturing",
                gdp: 83.1
              },
              { gdpCategory: "Paper manufacturing", gdp: 172.0 },
              {
                gdpCategory: "Printing and related support activities",
                gdp: 179.7
              },
              {
                gdpCategory: "Petroleum and coal products manufacturing",
                gdp: 12.6
              },
              { gdpCategory: "Chemical manufacturing", gdp: 3692.7 },
              {
                gdpCategory: "Plastics and rubber products manufacturing",
                gdp: 430.1
              }
            ]
          }
        ]
      },
      { gdpCategory: "Wholesale trade", gdp: 9971.1 },
      { gdpCategory: "Retail trade", gdp: 8597.3 },
      {
        gdpCategory: "Transportation and warehousing",
        children: [
          { gdpCategory: "Air transportation", gdp: 246.2 },
          { gdpCategory: "Rail transportation", gdp: 4879.2 },
          { gdpCategory: "Water transportation", gdp: 1.6 },
          { gdpCategory: "Truck transportation", gdp: 4119.5 },
          {
            gdpCategory: "Transit and ground passenger transportation",
            gdp: 113.4
          },
          { gdpCategory: "Pipeline transportation", gdp: 1226.7 },
          {
            gdpCategory: "Other transportation and support activities",
            gdp: 948.2
          },
          { gdpCategory: "Warehousing and storage", gdp: 401.0 }
        ]
      },
      {
        gdpCategory: "Information",
        children: [
          {
            gdpCategory: "Publishing industries (except Internet)",
            gdp: 1699.1
          },
          {
            gdpCategory: "Motion picture and sound recording industries",
            gdp: 46.0
          },
          {
            gdpCategory: "Broadcasting (except Internet) and telecommunications",
            gdp: 1544.9
          },
          {
            gdpCategory: "Data processing, hosting, and other information services",
            gdp: 1430.8
          }
        ]
      },
      {
        gdpCategory: "Finance, insurance, real estate, rental, and leasing",
        children: [
          {
            gdpCategory: "Finance and insurance",
            children: [
              {
                gdpCategory: "Monetary Authorities- central bank, credit intermediation, and related services",
                gdp: 3594.4
              },
              {
                gdpCategory: "Securities, commodity contracts, and other financial investments and related activities",
                gdp: 1059.9
              },
              {
                gdpCategory: "Insurance carriers and related activities",
                gdp: 16265.2
              },
              {
                gdpCategory: "Funds, trusts, and other financial vehicles",
                gdp: 8.9
              }
            ]
          },
          {
            gdpCategory: "Real estate and rental and leasing",
            children: [
              { gdpCategory: "Real estate", gdp: 13724.7 },
              {
                gdpCategory: "Rental and leasing services and lessors of nonfinancial intangible assets",
                gdp: 1188.1
              }
            ]
          }
        ]
      },
      {
        gdpCategory: "Professional and business services",
        children: [
          {
            gdpCategory: "Professional, scientific, and technical services",
            children: [
              { gdpCategory: "Legal services", gdp: 1269.5 },
              {
                gdpCategory: "Computer systems design and related services",
                gdp: 1747.2
              },
              {
                gdpCategory: "Miscellaneous professional, scientific, and technical services",
                gdp: 3959.7
              }
            ]
          },
          {
            gdpCategory: "Management of companies and enterprises",
            gdp: 3200.0
          },
          {
            gdpCategory: "Administrative and support and waste management and remediation services",
            children: [
              {
                gdpCategory: "Administrative and support services",
                gdp: 3985.0
              },
              {
                gdpCategory: "Waste management and remediation services",
                gdp: 410.5
              }
            ]
          }
        ]
      },
      {
        gdpCategory: "Educational services, health care, and social assistance",
        children: [
          { gdpCategory: "Educational services", gdp: 1059.8 },
          {
            gdpCategory: "Health care and social assistance",
            children: [
              { gdpCategory: "Ambulatory health care services", gdp: 5511.2 },
              { gdpCategory: "Hospitals", gdp: 3669.5 },
              {
                gdpCategory: "Nursing and residential care facilities",
                gdp: 1494.5
              },
              { gdpCategory: "Social assistance", gdp: 918.5 }
            ]
          }
        ]
      },
      {
        gdpCategory: "Arts, entertainment, recreation, accommodation, and food services",
        children: [
          {
            gdpCategory: "Arts, entertainment, and recreation",
            children: [
              {
                gdpCategory: "Performing arts, spectator sports, museums, and related activities",
                gdp: 369.9
              },
              {
                gdpCategory: "Amusement, gambling, and recreation industries",
                gdp: 500.6
              }
            ]
          },
          {
            gdpCategory: "Accommodation and food services",
            children: [
              { gdpCategory: "Accommodation", gdp: 622.9 },
              { gdpCategory: "Food services and drinking places", gdp: 3078.1 }
            ]
          }
        ]
      },
      {
        gdpCategory: "Other services (except government and government enterprises)",
        gdp: 3336.2
      },
      { gdpCategory: "Federal civilian government", gdp: 2173.2 },
      { gdpCategory: "Military", gdp: 1218.6 },
      { gdpCategory: "State and local government", gdp: 14843.3 }
    ]
  },
  "South Carolina": {
    gdpCategory: "All industry total",
    children: [
      {
        gdpCategory: "Agriculture, forestry, fishing and hunting",
        children: [
          { gdpCategory: "Farms", gdp: 778.9 },
          {
            gdpCategory: "Forestry, fishing, and related activities",
            gdp: 583.7
          }
        ]
      },
      {
        gdpCategory: "Mining, quarrying, and oil and gas extraction",
        children: [
          { gdpCategory: "Oil and gas extraction", gdp: 2.2 },
          { gdpCategory: "Mining (except oil and gas)", gdp: 636.4 },
          { gdpCategory: "Support activities for mining", gdp: 32.7 }
        ]
      },
      { gdpCategory: "Utilities", gdp: 7050.8 },
      { gdpCategory: "Construction", gdp: 15497.7 },
      {
        gdpCategory: "Manufacturing",
        children: [
          {
            gdpCategory: "Durable goods manufacturing",
            children: [
              { gdpCategory: "Wood product manufacturing", gdp: 1216.9 },
              {
                gdpCategory: "Nonmetallic mineral product manufacturing",
                gdp: 1220.6
              },
              { gdpCategory: "Primary metal manufacturing", gdp: 1095.7 },
              {
                gdpCategory: "Fabricated metal product manufacturing",
                gdp: 2724.9
              },
              { gdpCategory: "Machinery manufacturing", gdp: 3134.2 },
              {
                gdpCategory: "Computer and electronic product manufacturing",
                gdp: 995.1
              },
              {
                gdpCategory: "Electrical equipment, appliance, and component manufacturing",
                gdp: 2256.5
              },
              {
                gdpCategory: "Motor vehicles, bodies and trailers, and parts manufacturing",
                gdp: 4958.4
              },
              {
                gdpCategory: "Other transportation equipment manufacturing",
                gdp: 2204.2
              },
              {
                gdpCategory: "Furniture and related product manufacturing",
                gdp: 666.5
              },
              { gdpCategory: "Miscellaneous manufacturing", gdp: 1145.7 }
            ]
          },
          {
            gdpCategory: "Nondurable goods manufacturing",
            children: [
              {
                gdpCategory: "Food and beverage and tobacco product manufacturing",
                gdp: 2180.6
              },
              {
                gdpCategory: "Textile mills and textile product mills",
                gdp: 1407.8
              },
              {
                gdpCategory: "Apparel, leather, and allied product manufacturing",
                gdp: 198.9
              },
              { gdpCategory: "Paper manufacturing", gdp: 3171.8 },
              {
                gdpCategory: "Printing and related support activities",
                gdp: 506.5
              },
              {
                gdpCategory: "Petroleum and coal products manufacturing",
                gdp: 460.7
              },
              { gdpCategory: "Chemical manufacturing", gdp: 5852.0 },
              {
                gdpCategory: "Plastics and rubber products manufacturing",
                gdp: 3693.4
              }
            ]
          }
        ]
      },
      { gdpCategory: "Wholesale trade", gdp: 19709.4 },
      { gdpCategory: "Retail trade", gdp: 23203.4 },
      {
        gdpCategory: "Transportation and warehousing",
        children: [
          { gdpCategory: "Air transportation", gdp: 542.4 },
          { gdpCategory: "Rail transportation", gdp: 345.8 },
          { gdpCategory: "Water transportation", gdp: 108.0 },
          { gdpCategory: "Truck transportation", gdp: 3510.8 },
          {
            gdpCategory: "Transit and ground passenger transportation",
            gdp: 218.6
          },
          { gdpCategory: "Pipeline transportation", gdp: 42.3 },
          {
            gdpCategory: "Other transportation and support activities",
            gdp: 2450.7
          },
          { gdpCategory: "Warehousing and storage", gdp: 1656.2 }
        ]
      },
      {
        gdpCategory: "Information",
        children: [
          {
            gdpCategory: "Publishing industries (except Internet)",
            gdp: 1764.1
          },
          {
            gdpCategory: "Motion picture and sound recording industries",
            gdp: 307.5
          },
          {
            gdpCategory: "Broadcasting (except Internet) and telecommunications",
            gdp: 4360.6
          },
          {
            gdpCategory: "Data processing, hosting, and other information services",
            gdp: 1547.6
          }
        ]
      },
      {
        gdpCategory: "Finance, insurance, real estate, rental, and leasing",
        children: [
          {
            gdpCategory: "Finance and insurance",
            children: [
              {
                gdpCategory: "Monetary Authorities- central bank, credit intermediation, and related services",
                gdp: 5635.7
              },
              {
                gdpCategory: "Securities, commodity contracts, and other financial investments and related activities",
                gdp: 1193.2
              },
              {
                gdpCategory: "Insurance carriers and related activities",
                gdp: 7047.6
              },
              {
                gdpCategory: "Funds, trusts, and other financial vehicles",
                gdp: 159.1
              }
            ]
          },
          {
            gdpCategory: "Real estate and rental and leasing",
            children: [
              { gdpCategory: "Real estate", gdp: 39830.6 },
              {
                gdpCategory: "Rental and leasing services and lessors of nonfinancial intangible assets",
                gdp: 3586.8
              }
            ]
          }
        ]
      },
      {
        gdpCategory: "Professional and business services",
        children: [
          {
            gdpCategory: "Professional, scientific, and technical services",
            children: [
              { gdpCategory: "Legal services", gdp: 3294.1 },
              {
                gdpCategory: "Computer systems design and related services",
                gdp: 3100.4
              },
              {
                gdpCategory: "Miscellaneous professional, scientific, and technical services",
                gdp: 10932.3
              }
            ]
          },
          {
            gdpCategory: "Management of companies and enterprises",
            gdp: 3421.3
          },
          {
            gdpCategory: "Administrative and support and waste management and remediation services",
            children: [
              {
                gdpCategory: "Administrative and support services",
                gdp: 9423.6
              },
              {
                gdpCategory: "Waste management and remediation services",
                gdp: 1763.7
              }
            ]
          }
        ]
      },
      {
        gdpCategory: "Educational services, health care, and social assistance",
        children: [
          { gdpCategory: "Educational services", gdp: 2069.7 },
          {
            gdpCategory: "Health care and social assistance",
            children: [
              { gdpCategory: "Ambulatory health care services", gdp: 11731.0 },
              { gdpCategory: "Hospitals", gdp: 3601.7 },
              {
                gdpCategory: "Nursing and residential care facilities",
                gdp: 2155.2
              },
              { gdpCategory: "Social assistance", gdp: 1452.2 }
            ]
          }
        ]
      },
      {
        gdpCategory: "Arts, entertainment, recreation, accommodation, and food services",
        children: [
          {
            gdpCategory: "Arts, entertainment, and recreation",
            children: [
              {
                gdpCategory: "Performing arts, spectator sports, museums, and related activities",
                gdp: 883.2
              },
              {
                gdpCategory: "Amusement, gambling, and recreation industries",
                gdp: 1237.3
              }
            ]
          },
          {
            gdpCategory: "Accommodation and food services",
            children: [
              { gdpCategory: "Accommodation", gdp: 3591.2 },
              { gdpCategory: "Food services and drinking places", gdp: 9131.0 }
            ]
          }
        ]
      },
      {
        gdpCategory: "Other services (except government and government enterprises)",
        gdp: 7242.7
      },
      { gdpCategory: "Federal civilian government", gdp: 5671.2 },
      { gdpCategory: "Military", gdp: 4358.5 },
      { gdpCategory: "State and local government", gdp: 31592.9 }
    ]
  },
  Colorado: {
    gdpCategory: "All industry total",
    children: [
      {
        gdpCategory: "Agriculture, forestry, fishing and hunting",
        children: [
          { gdpCategory: "Farms", gdp: 894.2 },
          {
            gdpCategory: "Forestry, fishing, and related activities",
            gdp: 446.1
          }
        ]
      },
      {
        gdpCategory: "Mining, quarrying, and oil and gas extraction",
        children: [
          { gdpCategory: "Oil and gas extraction", gdp: 16549.8 },
          { gdpCategory: "Mining (except oil and gas)", gdp: 1689.4 },
          { gdpCategory: "Support activities for mining", gdp: 2943.3 }
        ]
      },
      { gdpCategory: "Utilities", gdp: 6766.1 },
      { gdpCategory: "Construction", gdp: 28665.9 },
      {
        gdpCategory: "Manufacturing",
        children: [
          {
            gdpCategory: "Durable goods manufacturing",
            children: [
              { gdpCategory: "Wood product manufacturing", gdp: 488.7 },
              {
                gdpCategory: "Nonmetallic mineral product manufacturing",
                gdp: 1289.4
              },
              { gdpCategory: "Primary metal manufacturing", gdp: 428.5 },
              {
                gdpCategory: "Fabricated metal product manufacturing",
                gdp: 2057.6
              },
              { gdpCategory: "Machinery manufacturing", gdp: 1430.8 },
              {
                gdpCategory: "Computer and electronic product manufacturing",
                gdp: 5672.4
              },
              {
                gdpCategory: "Electrical equipment, appliance, and component manufacturing",
                gdp: 293.6
              },
              {
                gdpCategory: "Motor vehicles, bodies and trailers, and parts manufacturing",
                gdp: 320.1
              },
              {
                gdpCategory: "Other transportation equipment manufacturing",
                gdp: 3146.6
              },
              {
                gdpCategory: "Furniture and related product manufacturing",
                gdp: 526.7
              },
              { gdpCategory: "Miscellaneous manufacturing", gdp: 2339.2 }
            ]
          },
          {
            gdpCategory: "Nondurable goods manufacturing",
            children: [
              {
                gdpCategory: "Food and beverage and tobacco product manufacturing",
                gdp: 5175.2
              },
              {
                gdpCategory: "Textile mills and textile product mills",
                gdp: 84.8
              },
              {
                gdpCategory: "Apparel, leather, and allied product manufacturing",
                gdp: 56.2
              },
              { gdpCategory: "Paper manufacturing", gdp: 200.9 },
              {
                gdpCategory: "Printing and related support activities",
                gdp: 434.7
              },
              {
                gdpCategory: "Petroleum and coal products manufacturing",
                gdp: 1383.8
              },
              { gdpCategory: "Chemical manufacturing", gdp: 2219.5 },
              {
                gdpCategory: "Plastics and rubber products manufacturing",
                gdp: 845.3
              }
            ]
          }
        ]
      },
      { gdpCategory: "Wholesale trade", gdp: 27592.7 },
      { gdpCategory: "Retail trade", gdp: 29125.9 },
      {
        gdpCategory: "Transportation and warehousing",
        children: [
          { gdpCategory: "Air transportation", gdp: 6676.6 },
          { gdpCategory: "Rail transportation", gdp: 861.9 },
          { gdpCategory: "Water transportation", gdp: 7.6 },
          { gdpCategory: "Truck transportation", gdp: 3360.4 },
          {
            gdpCategory: "Transit and ground passenger transportation",
            gdp: 766.2
          },
          { gdpCategory: "Pipeline transportation", gdp: 1890.8 },
          {
            gdpCategory: "Other transportation and support activities",
            gdp: 2969.3
          },
          { gdpCategory: "Warehousing and storage", gdp: 1611.3 }
        ]
      },
      {
        gdpCategory: "Information",
        children: [
          {
            gdpCategory: "Publishing industries (except Internet)",
            gdp: 9191.9
          },
          {
            gdpCategory: "Motion picture and sound recording industries",
            gdp: 904.6
          },
          {
            gdpCategory: "Broadcasting (except Internet) and telecommunications",
            gdp: 12261.6
          },
          {
            gdpCategory: "Data processing, hosting, and other information services",
            gdp: 7811.7
          }
        ]
      },
      {
        gdpCategory: "Finance, insurance, real estate, rental, and leasing",
        children: [
          {
            gdpCategory: "Finance and insurance",
            children: [
              {
                gdpCategory: "Monetary Authorities- central bank, credit intermediation, and related services",
                gdp: 11491.7
              },
              {
                gdpCategory: "Securities, commodity contracts, and other financial investments and related activities",
                gdp: 5279.7
              },
              {
                gdpCategory: "Insurance carriers and related activities",
                gdp: 9706.1
              },
              {
                gdpCategory: "Funds, trusts, and other financial vehicles",
                gdp: 207.2
              }
            ]
          },
          {
            gdpCategory: "Real estate and rental and leasing",
            children: [
              { gdpCategory: "Real estate", gdp: 69209.3 },
              {
                gdpCategory: "Rental and leasing services and lessors of nonfinancial intangible assets",
                gdp: 5124.4
              }
            ]
          }
        ]
      },
      {
        gdpCategory: "Professional and business services",
        children: [
          {
            gdpCategory: "Professional, scientific, and technical services",
            children: [
              { gdpCategory: "Legal services", gdp: 4841.0 },
              {
                gdpCategory: "Computer systems design and related services",
                gdp: 15662.2
              },
              {
                gdpCategory: "Miscellaneous professional, scientific, and technical services",
                gdp: 30635.2
              }
            ]
          },
          {
            gdpCategory: "Management of companies and enterprises",
            gdp: 9444.5
          },
          {
            gdpCategory: "Administrative and support and waste management and remediation services",
            children: [
              {
                gdpCategory: "Administrative and support services",
                gdp: 13317.2
              },
              {
                gdpCategory: "Waste management and remediation services",
                gdp: 1334.3
              }
            ]
          }
        ]
      },
      {
        gdpCategory: "Educational services, health care, and social assistance",
        children: [
          { gdpCategory: "Educational services", gdp: 4114.9 },
          {
            gdpCategory: "Health care and social assistance",
            children: [
              { gdpCategory: "Ambulatory health care services", gdp: 16386.6 },
              { gdpCategory: "Hospitals", gdp: 6929.5 },
              {
                gdpCategory: "Nursing and residential care facilities",
                gdp: 2406.4
              },
              { gdpCategory: "Social assistance", gdp: 3028.4 }
            ]
          }
        ]
      },
      {
        gdpCategory: "Arts, entertainment, recreation, accommodation, and food services",
        children: [
          {
            gdpCategory: "Arts, entertainment, and recreation",
            children: [
              {
                gdpCategory: "Performing arts, spectator sports, museums, and related activities",
                gdp: 2491.3
              },
              {
                gdpCategory: "Amusement, gambling, and recreation industries",
                gdp: 4060.3
              }
            ]
          },
          {
            gdpCategory: "Accommodation and food services",
            children: [
              { gdpCategory: "Accommodation", gdp: 5365.5 },
              {
                gdpCategory: "Food services and drinking places",
                gdp: 13367.4
              }
            ]
          }
        ]
      },
      {
        gdpCategory: "Other services (except government and government enterprises)",
        gdp: 11138.5
      },
      { gdpCategory: "Federal civilian government", gdp: 11301.8 },
      { gdpCategory: "Military", gdp: 6403.4 },
      { gdpCategory: "State and local government", gdp: 36661.0 }
    ]
  },
  "North Carolina": {
    gdpCategory: "All industry total",
    children: [
      {
        gdpCategory: "Agriculture, forestry, fishing and hunting",
        children: [
          { gdpCategory: "Farms", gdp: 5640.4 },
          {
            gdpCategory: "Forestry, fishing, and related activities",
            gdp: 1029.4
          }
        ]
      },
      {
        gdpCategory: "Mining, quarrying, and oil and gas extraction",
        children: [
          { gdpCategory: "Oil and gas extraction", gdp: 3.5 },
          { gdpCategory: "Mining (except oil and gas)", gdp: 1068.8 },
          { gdpCategory: "Support activities for mining", gdp: 53.4 }
        ]
      },
      { gdpCategory: "Utilities", gdp: 13633.7 },
      { gdpCategory: "Construction", gdp: 32807.3 },
      {
        gdpCategory: "Manufacturing",
        children: [
          {
            gdpCategory: "Durable goods manufacturing",
            children: [
              { gdpCategory: "Wood product manufacturing", gdp: 3013.4 },
              {
                gdpCategory: "Nonmetallic mineral product manufacturing",
                gdp: 2556.7
              },
              { gdpCategory: "Primary metal manufacturing", gdp: 1866.1 },
              {
                gdpCategory: "Fabricated metal product manufacturing",
                gdp: 4454.2
              },
              { gdpCategory: "Machinery manufacturing", gdp: 7653.8 },
              {
                gdpCategory: "Computer and electronic product manufacturing",
                gdp: 7366.2
              },
              {
                gdpCategory: "Electrical equipment, appliance, and component manufacturing",
                gdp: 3399.1
              },
              {
                gdpCategory: "Motor vehicles, bodies and trailers, and parts manufacturing",
                gdp: 3091.4
              },
              {
                gdpCategory: "Other transportation equipment manufacturing",
                gdp: 4967.9
              },
              {
                gdpCategory: "Furniture and related product manufacturing",
                gdp: 2472.0
              },
              { gdpCategory: "Miscellaneous manufacturing", gdp: 1921.3 }
            ]
          },
          {
            gdpCategory: "Nondurable goods manufacturing",
            children: [
              {
                gdpCategory: "Food and beverage and tobacco product manufacturing",
                gdp: 23077.8
              },
              {
                gdpCategory: "Textile mills and textile product mills",
                gdp: 2352.5
              },
              {
                gdpCategory: "Apparel, leather, and allied product manufacturing",
                gdp: 258.0
              },
              { gdpCategory: "Paper manufacturing", gdp: 2347.5 },
              {
                gdpCategory: "Printing and related support activities",
                gdp: 1236.8
              },
              {
                gdpCategory: "Petroleum and coal products manufacturing",
                gdp: 190.4
              },
              { gdpCategory: "Chemical manufacturing", gdp: 21789.3 },
              {
                gdpCategory: "Plastics and rubber products manufacturing",
                gdp: 4450.4
              }
            ]
          }
        ]
      },
      { gdpCategory: "Wholesale trade", gdp: 44224.6 },
      { gdpCategory: "Retail trade", gdp: 46198.9 },
      {
        gdpCategory: "Transportation and warehousing",
        children: [
          { gdpCategory: "Air transportation", gdp: 3937.4 },
          { gdpCategory: "Rail transportation", gdp: 431.4 },
          { gdpCategory: "Water transportation", gdp: 135.4 },
          { gdpCategory: "Truck transportation", gdp: 7473.8 },
          {
            gdpCategory: "Transit and ground passenger transportation",
            gdp: 493.6
          },
          { gdpCategory: "Pipeline transportation", gdp: 102.4 },
          {
            gdpCategory: "Other transportation and support activities",
            gdp: 4773.3
          },
          { gdpCategory: "Warehousing and storage", gdp: 3060.2 }
        ]
      },
      {
        gdpCategory: "Information",
        children: [
          {
            gdpCategory: "Publishing industries (except Internet)",
            gdp: 9930.6
          },
          {
            gdpCategory: "Motion picture and sound recording industries",
            gdp: 591.1
          },
          {
            gdpCategory: "Broadcasting (except Internet) and telecommunications",
            gdp: 10473.3
          },
          {
            gdpCategory: "Data processing, hosting, and other information services",
            gdp: 4846.6
          }
        ]
      },
      {
        gdpCategory: "Finance, insurance, real estate, rental, and leasing",
        children: [
          {
            gdpCategory: "Finance and insurance",
            children: [
              {
                gdpCategory: "Monetary Authorities- central bank, credit intermediation, and related services",
                gdp: 41941.6
              },
              {
                gdpCategory: "Securities, commodity contracts, and other financial investments and related activities",
                gdp: 6105.2
              },
              {
                gdpCategory: "Insurance carriers and related activities",
                gdp: 14706.2
              },
              {
                gdpCategory: "Funds, trusts, and other financial vehicles",
                gdp: 353.4
              }
            ]
          },
          {
            gdpCategory: "Real estate and rental and leasing",
            children: [
              { gdpCategory: "Real estate", gdp: 79675.1 },
              {
                gdpCategory: "Rental and leasing services and lessors of nonfinancial intangible assets",
                gdp: 5839.6
              }
            ]
          }
        ]
      },
      {
        gdpCategory: "Professional and business services",
        children: [
          {
            gdpCategory: "Professional, scientific, and technical services",
            children: [
              { gdpCategory: "Legal services", gdp: 5667.5 },
              {
                gdpCategory: "Computer systems design and related services",
                gdp: 12343.6
              },
              {
                gdpCategory: "Miscellaneous professional, scientific, and technical services",
                gdp: 33475.6
              }
            ]
          },
          {
            gdpCategory: "Management of companies and enterprises",
            gdp: 15885.5
          },
          {
            gdpCategory: "Administrative and support and waste management and remediation services",
            children: [
              {
                gdpCategory: "Administrative and support services",
                gdp: 24400.6
              },
              {
                gdpCategory: "Waste management and remediation services",
                gdp: 1486.4
              }
            ]
          }
        ]
      },
      {
        gdpCategory: "Educational services, health care, and social assistance",
        children: [
          { gdpCategory: "Educational services", gdp: 8694.0 },
          {
            gdpCategory: "Health care and social assistance",
            children: [
              { gdpCategory: "Ambulatory health care services", gdp: 24354.0 },
              { gdpCategory: "Hospitals", gdp: 14248.4 },
              {
                gdpCategory: "Nursing and residential care facilities",
                gdp: 4534.4
              },
              { gdpCategory: "Social assistance", gdp: 4174.3 }
            ]
          }
        ]
      },
      {
        gdpCategory: "Arts, entertainment, recreation, accommodation, and food services",
        children: [
          {
            gdpCategory: "Arts, entertainment, and recreation",
            children: [
              {
                gdpCategory: "Performing arts, spectator sports, museums, and related activities",
                gdp: 3398.3
              },
              {
                gdpCategory: "Amusement, gambling, and recreation industries",
                gdp: 2465.0
              }
            ]
          },
          {
            gdpCategory: "Accommodation and food services",
            children: [
              { gdpCategory: "Accommodation", gdp: 3894.7 },
              {
                gdpCategory: "Food services and drinking places",
                gdp: 16726.5
              }
            ]
          }
        ]
      },
      {
        gdpCategory: "Other services (except government and government enterprises)",
        gdp: 15607.2
      },
      { gdpCategory: "Federal civilian government", gdp: 13366.9 },
      { gdpCategory: "Military", gdp: 13214.9 },
      { gdpCategory: "State and local government", gdp: 60035.5 }
    ]
  },
  Ohio: {
    gdpCategory: "All industry total",
    children: [
      {
        gdpCategory: "Agriculture, forestry, fishing and hunting",
        children: [
          { gdpCategory: "Farms", gdp: 6289.8 },
          {
            gdpCategory: "Forestry, fishing, and related activities",
            gdp: 815.0
          }
        ]
      },
      {
        gdpCategory: "Mining, quarrying, and oil and gas extraction",
        children: [
          { gdpCategory: "Oil and gas extraction", gdp: 5001.3 },
          { gdpCategory: "Mining (except oil and gas)", gdp: 1252.3 },
          { gdpCategory: "Support activities for mining", gdp: 531.4 }
        ]
      },
      { gdpCategory: "Utilities", gdp: 13879.4 },
      { gdpCategory: "Construction", gdp: 30993.1 },
      {
        gdpCategory: "Manufacturing",
        children: [
          {
            gdpCategory: "Durable goods manufacturing",
            children: [
              { gdpCategory: "Wood product manufacturing", gdp: 1562.0 },
              {
                gdpCategory: "Nonmetallic mineral product manufacturing",
                gdp: 4546.8
              },
              { gdpCategory: "Primary metal manufacturing", gdp: 8776.2 },
              {
                gdpCategory: "Fabricated metal product manufacturing",
                gdp: 11853.1
              },
              { gdpCategory: "Machinery manufacturing", gdp: 10120.3 },
              {
                gdpCategory: "Computer and electronic product manufacturing",
                gdp: 2413.3
              },
              {
                gdpCategory: "Electrical equipment, appliance, and component manufacturing",
                gdp: 4871.5
              },
              {
                gdpCategory: "Motor vehicles, bodies and trailers, and parts manufacturing",
                gdp: 9856.6
              },
              {
                gdpCategory: "Other transportation equipment manufacturing",
                gdp: 5186.5
              },
              {
                gdpCategory: "Furniture and related product manufacturing",
                gdp: 1129.2
              },
              { gdpCategory: "Miscellaneous manufacturing", gdp: 2739.7 }
            ]
          },
          {
            gdpCategory: "Nondurable goods manufacturing",
            children: [
              {
                gdpCategory: "Food and beverage and tobacco product manufacturing",
                gdp: 12638.0
              },
              {
                gdpCategory: "Textile mills and textile product mills",
                gdp: 343.5
              },
              {
                gdpCategory: "Apparel, leather, and allied product manufacturing",
                gdp: 286.9
              },
              { gdpCategory: "Paper manufacturing", gdp: 2791.7 },
              {
                gdpCategory: "Printing and related support activities",
                gdp: 1909.8
              },
              {
                gdpCategory: "Petroleum and coal products manufacturing",
                gdp: 14179.0
              },
              { gdpCategory: "Chemical manufacturing", gdp: 24050.9 },
              {
                gdpCategory: "Plastics and rubber products manufacturing",
                gdp: 6357.1
              }
            ]
          }
        ]
      },
      { gdpCategory: "Wholesale trade", gdp: 52269.8 },
      { gdpCategory: "Retail trade", gdp: 55295.1 },
      {
        gdpCategory: "Transportation and warehousing",
        children: [
          { gdpCategory: "Air transportation", gdp: 2714.9 },
          { gdpCategory: "Rail transportation", gdp: 1636.4 },
          { gdpCategory: "Water transportation", gdp: 146.8 },
          { gdpCategory: "Truck transportation", gdp: 11899.3 },
          {
            gdpCategory: "Transit and ground passenger transportation",
            gdp: 707.0
          },
          { gdpCategory: "Pipeline transportation", gdp: 1066.2 },
          {
            gdpCategory: "Other transportation and support activities",
            gdp: 6305.4
          },
          { gdpCategory: "Warehousing and storage", gdp: 5359.3 }
        ]
      },
      {
        gdpCategory: "Information",
        children: [
          {
            gdpCategory: "Publishing industries (except Internet)",
            gdp: 5574.6
          },
          {
            gdpCategory: "Motion picture and sound recording industries",
            gdp: 582.6
          },
          {
            gdpCategory: "Broadcasting (except Internet) and telecommunications",
            gdp: 8911.4
          },
          {
            gdpCategory: "Data processing, hosting, and other information services",
            gdp: 4518.9
          }
        ]
      },
      {
        gdpCategory: "Finance, insurance, real estate, rental, and leasing",
        children: [
          {
            gdpCategory: "Finance and insurance",
            children: [
              {
                gdpCategory: "Monetary Authorities- central bank, credit intermediation, and related services",
                gdp: 51453.1
              },
              {
                gdpCategory: "Securities, commodity contracts, and other financial investments and related activities",
                gdp: 4683.3
              },
              {
                gdpCategory: "Insurance carriers and related activities",
                gdp: 35500.3
              },
              {
                gdpCategory: "Funds, trusts, and other financial vehicles",
                gdp: 297.5
              }
            ]
          },
          {
            gdpCategory: "Real estate and rental and leasing",
            children: [
              { gdpCategory: "Real estate", gdp: 86254.2 },
              {
                gdpCategory: "Rental and leasing services and lessors of nonfinancial intangible assets",
                gdp: 6818.4
              }
            ]
          }
        ]
      },
      {
        gdpCategory: "Professional and business services",
        children: [
          {
            gdpCategory: "Professional, scientific, and technical services",
            children: [
              { gdpCategory: "Legal services", gdp: 7358.7 },
              {
                gdpCategory: "Computer systems design and related services",
                gdp: 10057.6
              },
              {
                gdpCategory: "Miscellaneous professional, scientific, and technical services",
                gdp: 26685.9
              }
            ]
          },
          {
            gdpCategory: "Management of companies and enterprises",
            gdp: 23950.0
          },
          {
            gdpCategory: "Administrative and support and waste management and remediation services",
            children: [
              {
                gdpCategory: "Administrative and support services",
                gdp: 22585.7
              },
              {
                gdpCategory: "Waste management and remediation services",
                gdp: 2753.5
              }
            ]
          }
        ]
      },
      {
        gdpCategory: "Educational services, health care, and social assistance",
        children: [
          { gdpCategory: "Educational services", gdp: 6631.0 },
          {
            gdpCategory: "Health care and social assistance",
            children: [
              { gdpCategory: "Ambulatory health care services", gdp: 29632.6 },
              { gdpCategory: "Hospitals", gdp: 26137.6 },
              {
                gdpCategory: "Nursing and residential care facilities",
                gdp: 7650.4
              },
              { gdpCategory: "Social assistance", gdp: 5088.1 }
            ]
          }
        ]
      },
      {
        gdpCategory: "Arts, entertainment, recreation, accommodation, and food services",
        children: [
          {
            gdpCategory: "Arts, entertainment, and recreation",
            children: [
              {
                gdpCategory: "Performing arts, spectator sports, museums, and related activities",
                gdp: 4186.0
              },
              {
                gdpCategory: "Amusement, gambling, and recreation industries",
                gdp: 4318.2
              }
            ]
          },
          {
            gdpCategory: "Accommodation and food services",
            children: [
              { gdpCategory: "Accommodation", gdp: 3064.6 },
              {
                gdpCategory: "Food services and drinking places",
                gdp: 18933.8
              }
            ]
          }
        ]
      },
      {
        gdpCategory: "Other services (except government and government enterprises)",
        gdp: 17304.2
      },
      { gdpCategory: "Federal civilian government", gdp: 14030.5 },
      { gdpCategory: "Military", gdp: 5715.9 },
      { gdpCategory: "State and local government", gdp: 63537.1 }
    ]
  },
  Utah: {
    gdpCategory: "All industry total",
    children: [
      {
        gdpCategory: "Agriculture, forestry, fishing and hunting",
        children: [
          { gdpCategory: "Farms", gdp: 1605.5 },
          {
            gdpCategory: "Forestry, fishing, and related activities",
            gdp: 130.1
          }
        ]
      },
      {
        gdpCategory: "Mining, quarrying, and oil and gas extraction",
        children: [
          { gdpCategory: "Oil and gas extraction", gdp: 904.3 },
          { gdpCategory: "Mining (except oil and gas)", gdp: 3608.9 },
          { gdpCategory: "Support activities for mining", gdp: 652.2 }
        ]
      },
      { gdpCategory: "Utilities", gdp: 5952.1 },
      { gdpCategory: "Construction", gdp: 19636.2 },
      {
        gdpCategory: "Manufacturing",
        children: [
          {
            gdpCategory: "Durable goods manufacturing",
            children: [
              { gdpCategory: "Wood product manufacturing", gdp: 296.6 },
              {
                gdpCategory: "Nonmetallic mineral product manufacturing",
                gdp: 989.5
              },
              { gdpCategory: "Primary metal manufacturing", gdp: 2005.6 },
              {
                gdpCategory: "Fabricated metal product manufacturing",
                gdp: 1618.4
              },
              { gdpCategory: "Machinery manufacturing", gdp: 951.5 },
              {
                gdpCategory: "Computer and electronic product manufacturing",
                gdp: 2267.1
              },
              {
                gdpCategory: "Electrical equipment, appliance, and component manufacturing",
                gdp: 583.0
              },
              {
                gdpCategory: "Motor vehicles, bodies and trailers, and parts manufacturing",
                gdp: 814.1
              },
              {
                gdpCategory: "Other transportation equipment manufacturing",
                gdp: 1724.9
              },
              {
                gdpCategory: "Furniture and related product manufacturing",
                gdp: 824.1
              },
              { gdpCategory: "Miscellaneous manufacturing", gdp: 3193.3 }
            ]
          },
          {
            gdpCategory: "Nondurable goods manufacturing",
            children: [
              {
                gdpCategory: "Food and beverage and tobacco product manufacturing",
                gdp: 2882.6
              },
              {
                gdpCategory: "Textile mills and textile product mills",
                gdp: 94.4
              },
              {
                gdpCategory: "Apparel, leather, and allied product manufacturing",
                gdp: 58.8
              },
              { gdpCategory: "Paper manufacturing", gdp: 893.2 },
              {
                gdpCategory: "Printing and related support activities",
                gdp: 604.4
              },
              {
                gdpCategory: "Petroleum and coal products manufacturing",
                gdp: 5509.4
              },
              { gdpCategory: "Chemical manufacturing", gdp: 2128.8 },
              {
                gdpCategory: "Plastics and rubber products manufacturing",
                gdp: 984.2
              }
            ]
          }
        ]
      },
      { gdpCategory: "Wholesale trade", gdp: 12229.1 },
      { gdpCategory: "Retail trade", gdp: 20675.5 },
      {
        gdpCategory: "Transportation and warehousing",
        children: [
          { gdpCategory: "Air transportation", gdp: 2873.1 },
          { gdpCategory: "Rail transportation", gdp: 377.2 },
          { gdpCategory: "Water transportation", gdp: 4.1 },
          { gdpCategory: "Truck transportation", gdp: 2697.3 },
          {
            gdpCategory: "Transit and ground passenger transportation",
            gdp: 282.5
          },
          { gdpCategory: "Pipeline transportation", gdp: 105.8 },
          {
            gdpCategory: "Other transportation and support activities",
            gdp: 2183.1
          },
          { gdpCategory: "Warehousing and storage", gdp: 821.3 }
        ]
      },
      {
        gdpCategory: "Information",
        children: [
          {
            gdpCategory: "Publishing industries (except Internet)",
            gdp: 5546.8
          },
          {
            gdpCategory: "Motion picture and sound recording industries",
            gdp: 516.0
          },
          {
            gdpCategory: "Broadcasting (except Internet) and telecommunications",
            gdp: 3310.3
          },
          {
            gdpCategory: "Data processing, hosting, and other information services",
            gdp: 3643.5
          }
        ]
      },
      {
        gdpCategory: "Finance, insurance, real estate, rental, and leasing",
        children: [
          {
            gdpCategory: "Finance and insurance",
            children: [
              {
                gdpCategory: "Monetary Authorities- central bank, credit intermediation, and related services",
                gdp: 14976.4
              },
              {
                gdpCategory: "Securities, commodity contracts, and other financial investments and related activities",
                gdp: 1463.4
              },
              {
                gdpCategory: "Insurance carriers and related activities",
                gdp: 5174.0
              },
              {
                gdpCategory: "Funds, trusts, and other financial vehicles",
                gdp: 476.3
              }
            ]
          },
          {
            gdpCategory: "Real estate and rental and leasing",
            children: [
              { gdpCategory: "Real estate", gdp: 27174.8 },
              {
                gdpCategory: "Rental and leasing services and lessors of nonfinancial intangible assets",
                gdp: 3164.0
              }
            ]
          }
        ]
      },
      {
        gdpCategory: "Professional and business services",
        children: [
          {
            gdpCategory: "Professional, scientific, and technical services",
            children: [
              { gdpCategory: "Legal services", gdp: 1801.3 },
              {
                gdpCategory: "Computer systems design and related services",
                gdp: 5793.4
              },
              {
                gdpCategory: "Miscellaneous professional, scientific, and technical services",
                gdp: 11234.3
              }
            ]
          },
          {
            gdpCategory: "Management of companies and enterprises",
            gdp: 2913.4
          },
          {
            gdpCategory: "Administrative and support and waste management and remediation services",
            children: [
              {
                gdpCategory: "Administrative and support services",
                gdp: 6436.5
              },
              {
                gdpCategory: "Waste management and remediation services",
                gdp: 509.8
              }
            ]
          }
        ]
      },
      {
        gdpCategory: "Educational services, health care, and social assistance",
        children: [
          { gdpCategory: "Educational services", gdp: 3440.4 },
          {
            gdpCategory: "Health care and social assistance",
            children: [
              { gdpCategory: "Ambulatory health care services", gdp: 6776.8 },
              { gdpCategory: "Hospitals", gdp: 4278.9 },
              {
                gdpCategory: "Nursing and residential care facilities",
                gdp: 1473.9
              },
              { gdpCategory: "Social assistance", gdp: 1102.5 }
            ]
          }
        ]
      },
      {
        gdpCategory: "Arts, entertainment, recreation, accommodation, and food services",
        children: [
          {
            gdpCategory: "Arts, entertainment, and recreation",
            children: [
              {
                gdpCategory: "Performing arts, spectator sports, museums, and related activities",
                gdp: 1034.0
              },
              {
                gdpCategory: "Amusement, gambling, and recreation industries",
                gdp: 1153.8
              }
            ]
          },
          {
            gdpCategory: "Accommodation and food services",
            children: [
              { gdpCategory: "Accommodation", gdp: 2013.5 },
              { gdpCategory: "Food services and drinking places", gdp: 4707.5 }
            ]
          }
        ]
      },
      {
        gdpCategory: "Other services (except government and government enterprises)",
        gdp: 6439.8
      },
      { gdpCategory: "Federal civilian government", gdp: 6148.4 },
      { gdpCategory: "Military", gdp: 1689.0 },
      { gdpCategory: "State and local government", gdp: 18815.1 }
    ]
  },
  Vermont: {
    gdpCategory: "All industry total",
    children: [
      {
        gdpCategory: "Agriculture, forestry, fishing and hunting",
        children: [
          { gdpCategory: "Farms", gdp: 620.8 },
          {
            gdpCategory: "Forestry, fishing, and related activities",
            gdp: 84.5
          }
        ]
      },
      {
        gdpCategory: "Mining, quarrying, and oil and gas extraction",
        children: [
          { gdpCategory: "Oil and gas extraction", gdp: 0.0 },
          { gdpCategory: "Mining (except oil and gas)", gdp: 167.5 },
          { gdpCategory: "Support activities for mining", gdp: 2.8 }
        ]
      },
      { gdpCategory: "Utilities", gdp: 887.6 },
      { gdpCategory: "Construction", gdp: 1383.9 },
      {
        gdpCategory: "Manufacturing",
        children: [
          {
            gdpCategory: "Durable goods manufacturing",
            children: [
              { gdpCategory: "Wood product manufacturing", gdp: 158.9 },
              {
                gdpCategory: "Nonmetallic mineral product manufacturing",
                gdp: 174.3
              },
              { gdpCategory: "Primary metal manufacturing", gdp: 22.3 },
              {
                gdpCategory: "Fabricated metal product manufacturing",
                gdp: 181.4
              },
              { gdpCategory: "Machinery manufacturing", gdp: 428.5 },
              {
                gdpCategory: "Computer and electronic product manufacturing",
                gdp: 796.9
              },
              {
                gdpCategory: "Electrical equipment, appliance, and component manufacturing",
                gdp: 95.4
              },
              {
                gdpCategory: "Motor vehicles, bodies and trailers, and parts manufacturing",
                gdp: 36.3
              },
              {
                gdpCategory: "Other transportation equipment manufacturing",
                gdp: 146.8
              },
              {
                gdpCategory: "Furniture and related product manufacturing",
                gdp: 76.8
              },
              { gdpCategory: "Miscellaneous manufacturing", gdp: 222.7 }
            ]
          },
          {
            gdpCategory: "Nondurable goods manufacturing",
            children: [
              {
                gdpCategory: "Food and beverage and tobacco product manufacturing",
                gdp: 601.7
              },
              {
                gdpCategory: "Textile mills and textile product mills",
                gdp: 13.8
              },
              {
                gdpCategory: "Apparel, leather, and allied product manufacturing",
                gdp: 60.3
              },
              { gdpCategory: "Paper manufacturing", gdp: 91.3 },
              {
                gdpCategory: "Printing and related support activities",
                gdp: 53.7
              },
              {
                gdpCategory: "Petroleum and coal products manufacturing",
                gdp: 27.0
              },
              { gdpCategory: "Chemical manufacturing", gdp: 159.0 },
              {
                gdpCategory: "Plastics and rubber products manufacturing",
                gdp: 127.4
              }
            ]
          }
        ]
      },
      { gdpCategory: "Wholesale trade", gdp: 2064.3 },
      { gdpCategory: "Retail trade", gdp: 3440.5 },
      {
        gdpCategory: "Transportation and warehousing",
        children: [
          { gdpCategory: "Air transportation", gdp: 41.9 },
          { gdpCategory: "Rail transportation", gdp: 23.0 },
          { gdpCategory: "Water transportation", gdp: 17.4 },
          { gdpCategory: "Truck transportation", gdp: 298.8 },
          {
            gdpCategory: "Transit and ground passenger transportation",
            gdp: 82.6
          },
          { gdpCategory: "Pipeline transportation", gdp: 0.0 },
          {
            gdpCategory: "Other transportation and support activities",
            gdp: 199.9
          },
          { gdpCategory: "Warehousing and storage", gdp: 66.2 }
        ]
      },
      {
        gdpCategory: "Information",
        children: [
          {
            gdpCategory: "Publishing industries (except Internet)",
            gdp: 338.5
          },
          {
            gdpCategory: "Motion picture and sound recording industries",
            gdp: 36.3
          },
          {
            gdpCategory: "Broadcasting (except Internet) and telecommunications",
            gdp: 395.0
          },
          {
            gdpCategory: "Data processing, hosting, and other information services",
            gdp: 252.4
          }
        ]
      },
      {
        gdpCategory: "Finance, insurance, real estate, rental, and leasing",
        children: [
          {
            gdpCategory: "Finance and insurance",
            children: [
              {
                gdpCategory: "Monetary Authorities- central bank, credit intermediation, and related services",
                gdp: 722.2
              },
              {
                gdpCategory: "Securities, commodity contracts, and other financial investments and related activities",
                gdp: 256.3
              },
              {
                gdpCategory: "Insurance carriers and related activities",
                gdp: 1072.0
              },
              {
                gdpCategory: "Funds, trusts, and other financial vehicles",
                gdp: 11.6
              }
            ]
          },
          {
            gdpCategory: "Real estate and rental and leasing",
            children: [
              { gdpCategory: "Real estate", gdp: 5182.6 },
              {
                gdpCategory: "Rental and leasing services and lessors of nonfinancial intangible assets",
                gdp: 221.5
              }
            ]
          }
        ]
      },
      {
        gdpCategory: "Professional and business services",
        children: [
          {
            gdpCategory: "Professional, scientific, and technical services",
            children: [
              { gdpCategory: "Legal services", gdp: 430.1 },
              {
                gdpCategory: "Computer systems design and related services",
                gdp: 794.0
              },
              {
                gdpCategory: "Miscellaneous professional, scientific, and technical services",
                gdp: 1940.6
              }
            ]
          },
          {
            gdpCategory: "Management of companies and enterprises",
            gdp: 336.8
          },
          {
            gdpCategory: "Administrative and support and waste management and remediation services",
            children: [
              {
                gdpCategory: "Administrative and support services",
                gdp: 1166.3
              },
              {
                gdpCategory: "Waste management and remediation services",
                gdp: 206.4
              }
            ]
          }
        ]
      },
      {
        gdpCategory: "Educational services, health care, and social assistance",
        children: [
          { gdpCategory: "Educational services", gdp: 912.1 },
          {
            gdpCategory: "Health care and social assistance",
            children: [
              { gdpCategory: "Ambulatory health care services", gdp: 1818.1 },
              { gdpCategory: "Hospitals", gdp: 1541.6 },
              {
                gdpCategory: "Nursing and residential care facilities",
                gdp: 386.7
              },
              { gdpCategory: "Social assistance", gdp: 517.6 }
            ]
          }
        ]
      },
      {
        gdpCategory: "Arts, entertainment, recreation, accommodation, and food services",
        children: [
          {
            gdpCategory: "Arts, entertainment, and recreation",
            children: [
              {
                gdpCategory: "Performing arts, spectator sports, museums, and related activities",
                gdp: 331.4
              },
              {
                gdpCategory: "Amusement, gambling, and recreation industries",
                gdp: 224.6
              }
            ]
          },
          {
            gdpCategory: "Accommodation and food services",
            children: [
              { gdpCategory: "Accommodation", gdp: 1433.3 },
              { gdpCategory: "Food services and drinking places", gdp: 1033.6 }
            ]
          }
        ]
      },
      {
        gdpCategory: "Other services (except government and government enterprises)",
        gdp: 938.6
      },
      { gdpCategory: "Federal civilian government", gdp: 1182.3 },
      { gdpCategory: "Military", gdp: 191.5 },
      { gdpCategory: "State and local government", gdp: 4100.5 }
    ]
  },
  Missouri: {
    gdpCategory: "All industry total",
    children: [
      {
        gdpCategory: "Agriculture, forestry, fishing and hunting",
        children: [
          { gdpCategory: "Farms", gdp: 5976.8 },
          {
            gdpCategory: "Forestry, fishing, and related activities",
            gdp: 495.1
          }
        ]
      },
      {
        gdpCategory: "Mining, quarrying, and oil and gas extraction",
        children: [
          { gdpCategory: "Oil and gas extraction", gdp: 5.2 },
          { gdpCategory: "Mining (except oil and gas)", gdp: 1100.3 },
          { gdpCategory: "Support activities for mining", gdp: 41.2 }
        ]
      },
      { gdpCategory: "Utilities", gdp: 6912.2 },
      { gdpCategory: "Construction", gdp: 17894.1 },
      {
        gdpCategory: "Manufacturing",
        children: [
          {
            gdpCategory: "Durable goods manufacturing",
            children: [
              { gdpCategory: "Wood product manufacturing", gdp: 603.6 },
              {
                gdpCategory: "Nonmetallic mineral product manufacturing",
                gdp: 1452.7
              },
              { gdpCategory: "Primary metal manufacturing", gdp: 901.7 },
              {
                gdpCategory: "Fabricated metal product manufacturing",
                gdp: 3364.6
              },
              { gdpCategory: "Machinery manufacturing", gdp: 3168.2 },
              {
                gdpCategory: "Computer and electronic product manufacturing",
                gdp: 1916.1
              },
              {
                gdpCategory: "Electrical equipment, appliance, and component manufacturing",
                gdp: 1550.1
              },
              {
                gdpCategory: "Motor vehicles, bodies and trailers, and parts manufacturing",
                gdp: 3677.1
              },
              {
                gdpCategory: "Other transportation equipment manufacturing",
                gdp: 4911.8
              },
              {
                gdpCategory: "Furniture and related product manufacturing",
                gdp: 515.0
              },
              { gdpCategory: "Miscellaneous manufacturing", gdp: 1050.8 }
            ]
          },
          {
            gdpCategory: "Nondurable goods manufacturing",
            children: [
              {
                gdpCategory: "Food and beverage and tobacco product manufacturing",
                gdp: 8257.1
              },
              {
                gdpCategory: "Textile mills and textile product mills",
                gdp: 144.8
              },
              {
                gdpCategory: "Apparel, leather, and allied product manufacturing",
                gdp: 176.7
              },
              { gdpCategory: "Paper manufacturing", gdp: 1412.6 },
              {
                gdpCategory: "Printing and related support activities",
                gdp: 1257.0
              },
              {
                gdpCategory: "Petroleum and coal products manufacturing",
                gdp: 784.3
              },
              { gdpCategory: "Chemical manufacturing", gdp: 8406.4 },
              {
                gdpCategory: "Plastics and rubber products manufacturing",
                gdp: 1736.0
              }
            ]
          }
        ]
      },
      { gdpCategory: "Wholesale trade", gdp: 27698.9 },
      { gdpCategory: "Retail trade", gdp: 27215.7 },
      {
        gdpCategory: "Transportation and warehousing",
        children: [
          { gdpCategory: "Air transportation", gdp: 953.5 },
          { gdpCategory: "Rail transportation", gdp: 2247.8 },
          { gdpCategory: "Water transportation", gdp: 146.4 },
          { gdpCategory: "Truck transportation", gdp: 6852.6 },
          {
            gdpCategory: "Transit and ground passenger transportation",
            gdp: 584.8
          },
          { gdpCategory: "Pipeline transportation", gdp: 111.5 },
          {
            gdpCategory: "Other transportation and support activities",
            gdp: 3174.3
          },
          { gdpCategory: "Warehousing and storage", gdp: 1494.8 }
        ]
      },
      {
        gdpCategory: "Information",
        children: [
          {
            gdpCategory: "Publishing industries (except Internet)",
            gdp: 1969.6
          },
          {
            gdpCategory: "Motion picture and sound recording industries",
            gdp: 290.6
          },
          {
            gdpCategory: "Broadcasting (except Internet) and telecommunications",
            gdp: 6219.5
          },
          {
            gdpCategory: "Data processing, hosting, and other information services",
            gdp: 4997.4
          }
        ]
      },
      {
        gdpCategory: "Finance, insurance, real estate, rental, and leasing",
        children: [
          {
            gdpCategory: "Finance and insurance",
            children: [
              {
                gdpCategory: "Monetary Authorities- central bank, credit intermediation, and related services",
                gdp: 11476.8
              },
              {
                gdpCategory: "Securities, commodity contracts, and other financial investments and related activities",
                gdp: 4988.8
              },
              {
                gdpCategory: "Insurance carriers and related activities",
                gdp: 11047.7
              },
              {
                gdpCategory: "Funds, trusts, and other financial vehicles",
                gdp: 263.4
              }
            ]
          },
          {
            gdpCategory: "Real estate and rental and leasing",
            children: [
              { gdpCategory: "Real estate", gdp: 41959.3 },
              {
                gdpCategory: "Rental and leasing services and lessors of nonfinancial intangible assets",
                gdp: 6965.6
              }
            ]
          }
        ]
      },
      {
        gdpCategory: "Professional and business services",
        children: [
          {
            gdpCategory: "Professional, scientific, and technical services",
            children: [
              { gdpCategory: "Legal services", gdp: 6253.4 },
              {
                gdpCategory: "Computer systems design and related services",
                gdp: 7165.3
              },
              {
                gdpCategory: "Miscellaneous professional, scientific, and technical services",
                gdp: 15605.5
              }
            ]
          },
          {
            gdpCategory: "Management of companies and enterprises",
            gdp: 9720.3
          },
          {
            gdpCategory: "Administrative and support and waste management and remediation services",
            children: [
              {
                gdpCategory: "Administrative and support services",
                gdp: 11218.8
              },
              {
                gdpCategory: "Waste management and remediation services",
                gdp: 953.3
              }
            ]
          }
        ]
      },
      {
        gdpCategory: "Educational services, health care, and social assistance",
        children: [
          { gdpCategory: "Educational services", gdp: 4884.2 },
          {
            gdpCategory: "Health care and social assistance",
            children: [
              { gdpCategory: "Ambulatory health care services", gdp: 13695.7 },
              { gdpCategory: "Hospitals", gdp: 13893.6 },
              {
                gdpCategory: "Nursing and residential care facilities",
                gdp: 3621.7
              },
              { gdpCategory: "Social assistance", gdp: 3370.8 }
            ]
          }
        ]
      },
      {
        gdpCategory: "Arts, entertainment, recreation, accommodation, and food services",
        children: [
          {
            gdpCategory: "Arts, entertainment, and recreation",
            children: [
              {
                gdpCategory: "Performing arts, spectator sports, museums, and related activities",
                gdp: 2831.3
              },
              {
                gdpCategory: "Amusement, gambling, and recreation industries",
                gdp: 1885.0
              }
            ]
          },
          {
            gdpCategory: "Accommodation and food services",
            children: [
              { gdpCategory: "Accommodation", gdp: 2803.5 },
              { gdpCategory: "Food services and drinking places", gdp: 9449.8 }
            ]
          }
        ]
      },
      {
        gdpCategory: "Other services (except government and government enterprises)",
        gdp: 9406.3
      },
      { gdpCategory: "Federal civilian government", gdp: 9126.7 },
      { gdpCategory: "Military", gdp: 2923.8 },
      { gdpCategory: "State and local government", gdp: 29710.3 }
    ]
  },
  Iowa: {
    gdpCategory: "All industry total",
    children: [
      {
        gdpCategory: "Agriculture, forestry, fishing and hunting",
        children: [
          { gdpCategory: "Farms", gdp: 17840.3 },
          {
            gdpCategory: "Forestry, fishing, and related activities",
            gdp: 796.5
          }
        ]
      },
      {
        gdpCategory: "Mining, quarrying, and oil and gas extraction",
        children: [
          { gdpCategory: "Oil and gas extraction", gdp: 1.1 },
          { gdpCategory: "Mining (except oil and gas)", gdp: 475.6 },
          { gdpCategory: "Support activities for mining", gdp: 8.0 }
        ]
      },
      { gdpCategory: "Utilities", gdp: 4192.8 },
      { gdpCategory: "Construction", gdp: 10195.3 },
      {
        gdpCategory: "Manufacturing",
        children: [
          {
            gdpCategory: "Durable goods manufacturing",
            children: [
              { gdpCategory: "Wood product manufacturing", gdp: 957.0 },
              {
                gdpCategory: "Nonmetallic mineral product manufacturing",
                gdp: 1166.2
              },
              { gdpCategory: "Primary metal manufacturing", gdp: 1998.7 },
              {
                gdpCategory: "Fabricated metal product manufacturing",
                gdp: 2317.9
              },
              { gdpCategory: "Machinery manufacturing", gdp: 8850.8 },
              {
                gdpCategory: "Computer and electronic product manufacturing",
                gdp: 1967.9
              },
              {
                gdpCategory: "Electrical equipment, appliance, and component manufacturing",
                gdp: 830.8
              },
              {
                gdpCategory: "Motor vehicles, bodies and trailers, and parts manufacturing",
                gdp: 926.1
              },
              {
                gdpCategory: "Other transportation equipment manufacturing",
                gdp: 259.9
              },
              {
                gdpCategory: "Furniture and related product manufacturing",
                gdp: 612.9
              },
              { gdpCategory: "Miscellaneous manufacturing", gdp: 684.6 }
            ]
          },
          {
            gdpCategory: "Nondurable goods manufacturing",
            children: [
              {
                gdpCategory: "Food and beverage and tobacco product manufacturing",
                gdp: 9050.3
              },
              {
                gdpCategory: "Textile mills and textile product mills",
                gdp: 39.0
              },
              {
                gdpCategory: "Apparel, leather, and allied product manufacturing",
                gdp: 62.2
              },
              { gdpCategory: "Paper manufacturing", gdp: 708.9 },
              {
                gdpCategory: "Printing and related support activities",
                gdp: 700.9
              },
              {
                gdpCategory: "Petroleum and coal products manufacturing",
                gdp: 218.8
              },
              { gdpCategory: "Chemical manufacturing", gdp: 6661.0 },
              {
                gdpCategory: "Plastics and rubber products manufacturing",
                gdp: 1275.0
              }
            ]
          }
        ]
      },
      { gdpCategory: "Wholesale trade", gdp: 14240.6 },
      { gdpCategory: "Retail trade", gdp: 13897.4 },
      {
        gdpCategory: "Transportation and warehousing",
        children: [
          { gdpCategory: "Air transportation", gdp: 172.3 },
          { gdpCategory: "Rail transportation", gdp: 1380.5 },
          { gdpCategory: "Water transportation", gdp: 21.4 },
          { gdpCategory: "Truck transportation", gdp: 4416.8 },
          {
            gdpCategory: "Transit and ground passenger transportation",
            gdp: 142.2
          },
          { gdpCategory: "Pipeline transportation", gdp: 139.2 },
          {
            gdpCategory: "Other transportation and support activities",
            gdp: 1162.2
          },
          { gdpCategory: "Warehousing and storage", gdp: 1133.3 }
        ]
      },
      {
        gdpCategory: "Information",
        children: [
          {
            gdpCategory: "Publishing industries (except Internet)",
            gdp: 1337.3
          },
          {
            gdpCategory: "Motion picture and sound recording industries",
            gdp: 106.2
          },
          {
            gdpCategory: "Broadcasting (except Internet) and telecommunications",
            gdp: 2574.3
          },
          {
            gdpCategory: "Data processing, hosting, and other information services",
            gdp: 1443.8
          }
        ]
      },
      {
        gdpCategory: "Finance, insurance, real estate, rental, and leasing",
        children: [
          {
            gdpCategory: "Finance and insurance",
            children: [
              {
                gdpCategory: "Monetary Authorities- central bank, credit intermediation, and related services",
                gdp: 8728.7
              },
              {
                gdpCategory: "Securities, commodity contracts, and other financial investments and related activities",
                gdp: 873.9
              },
              {
                gdpCategory: "Insurance carriers and related activities",
                gdp: 22937.5
              },
              {
                gdpCategory: "Funds, trusts, and other financial vehicles",
                gdp: 84.3
              }
            ]
          },
          {
            gdpCategory: "Real estate and rental and leasing",
            children: [
              { gdpCategory: "Real estate", gdp: 19681.2 },
              {
                gdpCategory: "Rental and leasing services and lessors of nonfinancial intangible assets",
                gdp: 1723.6
              }
            ]
          }
        ]
      },
      {
        gdpCategory: "Professional and business services",
        children: [
          {
            gdpCategory: "Professional, scientific, and technical services",
            children: [
              { gdpCategory: "Legal services", gdp: 1277.1 },
              {
                gdpCategory: "Computer systems design and related services",
                gdp: 1703.8
              },
              {
                gdpCategory: "Miscellaneous professional, scientific, and technical services",
                gdp: 4910.1
              }
            ]
          },
          {
            gdpCategory: "Management of companies and enterprises",
            gdp: 3543.3
          },
          {
            gdpCategory: "Administrative and support and waste management and remediation services",
            children: [
              {
                gdpCategory: "Administrative and support services",
                gdp: 4552.0
              },
              {
                gdpCategory: "Waste management and remediation services",
                gdp: 458.8
              }
            ]
          }
        ]
      },
      {
        gdpCategory: "Educational services, health care, and social assistance",
        children: [
          { gdpCategory: "Educational services", gdp: 1858.1 },
          {
            gdpCategory: "Health care and social assistance",
            children: [
              { gdpCategory: "Ambulatory health care services", gdp: 6514.9 },
              { gdpCategory: "Hospitals", gdp: 3873.0 },
              {
                gdpCategory: "Nursing and residential care facilities",
                gdp: 2518.1
              },
              { gdpCategory: "Social assistance", gdp: 1444.1 }
            ]
          }
        ]
      },
      {
        gdpCategory: "Arts, entertainment, recreation, accommodation, and food services",
        children: [
          {
            gdpCategory: "Arts, entertainment, and recreation",
            children: [
              {
                gdpCategory: "Performing arts, spectator sports, museums, and related activities",
                gdp: 564.4
              },
              {
                gdpCategory: "Amusement, gambling, and recreation industries",
                gdp: 1370.1
              }
            ]
          },
          {
            gdpCategory: "Accommodation and food services",
            children: [
              { gdpCategory: "Accommodation", gdp: 1536.3 },
              { gdpCategory: "Food services and drinking places", gdp: 3743.9 }
            ]
          }
        ]
      },
      {
        gdpCategory: "Other services (except government and government enterprises)",
        gdp: 4795.5
      },
      { gdpCategory: "Federal civilian government", gdp: 2352.0 },
      { gdpCategory: "Military", gdp: 1410.9 },
      { gdpCategory: "State and local government", gdp: 20920.8 }
    ]
  },
  Arizona: {
    gdpCategory: "All industry total",
    children: [
      {
        gdpCategory: "Agriculture, forestry, fishing and hunting",
        children: [
          { gdpCategory: "Farms", gdp: 1871.8 },
          {
            gdpCategory: "Forestry, fishing, and related activities",
            gdp: 743.8
          }
        ]
      },
      {
        gdpCategory: "Mining, quarrying, and oil and gas extraction",
        children: [
          { gdpCategory: "Oil and gas extraction", gdp: 25.6 },
          { gdpCategory: "Mining (except oil and gas)", gdp: 6805.9 },
          { gdpCategory: "Support activities for mining", gdp: 138.5 }
        ]
      },
      { gdpCategory: "Utilities", gdp: 8991.6 },
      { gdpCategory: "Construction", gdp: 27345.8 },
      {
        gdpCategory: "Manufacturing",
        children: [
          {
            gdpCategory: "Durable goods manufacturing",
            children: [
              { gdpCategory: "Wood product manufacturing", gdp: 485.0 },
              {
                gdpCategory: "Nonmetallic mineral product manufacturing",
                gdp: 1441.4
              },
              { gdpCategory: "Primary metal manufacturing", gdp: 1554.6 },
              {
                gdpCategory: "Fabricated metal product manufacturing",
                gdp: 2679.3
              },
              { gdpCategory: "Machinery manufacturing", gdp: 1556.4 },
              {
                gdpCategory: "Computer and electronic product manufacturing",
                gdp: 10039.0
              },
              {
                gdpCategory: "Electrical equipment, appliance, and component manufacturing",
                gdp: 818.0
              },
              {
                gdpCategory: "Motor vehicles, bodies and trailers, and parts manufacturing",
                gdp: 1168.4
              },
              {
                gdpCategory: "Other transportation equipment manufacturing",
                gdp: 9241.4
              },
              {
                gdpCategory: "Furniture and related product manufacturing",
                gdp: 495.3
              },
              { gdpCategory: "Miscellaneous manufacturing", gdp: 2683.1 }
            ]
          },
          {
            gdpCategory: "Nondurable goods manufacturing",
            children: [
              {
                gdpCategory: "Food and beverage and tobacco product manufacturing",
                gdp: 2680.3
              },
              {
                gdpCategory: "Textile mills and textile product mills",
                gdp: 139.6
              },
              {
                gdpCategory: "Apparel, leather, and allied product manufacturing",
                gdp: 65.7
              },
              { gdpCategory: "Paper manufacturing", gdp: 432.8 },
              {
                gdpCategory: "Printing and related support activities",
                gdp: 799.2
              },
              {
                gdpCategory: "Petroleum and coal products manufacturing",
                gdp: 204.9
              },
              { gdpCategory: "Chemical manufacturing", gdp: 1981.6 },
              {
                gdpCategory: "Plastics and rubber products manufacturing",
                gdp: 950.7
              }
            ]
          }
        ]
      },
      { gdpCategory: "Wholesale trade", gdp: 25697.2 },
      { gdpCategory: "Retail trade", gdp: 36242.3 },
      {
        gdpCategory: "Transportation and warehousing",
        children: [
          { gdpCategory: "Air transportation", gdp: 4735.1 },
          { gdpCategory: "Rail transportation", gdp: 1041.7 },
          { gdpCategory: "Water transportation", gdp: 0.3 },
          { gdpCategory: "Truck transportation", gdp: 4339.6 },
          {
            gdpCategory: "Transit and ground passenger transportation",
            gdp: 1053.7
          },
          { gdpCategory: "Pipeline transportation", gdp: 144.0 },
          {
            gdpCategory: "Other transportation and support activities",
            gdp: 4327.9
          },
          { gdpCategory: "Warehousing and storage", gdp: 2692.1 }
        ]
      },
      {
        gdpCategory: "Information",
        children: [
          {
            gdpCategory: "Publishing industries (except Internet)",
            gdp: 3689.8
          },
          {
            gdpCategory: "Motion picture and sound recording industries",
            gdp: 372.5
          },
          {
            gdpCategory: "Broadcasting (except Internet) and telecommunications",
            gdp: 7589.0
          },
          {
            gdpCategory: "Data processing, hosting, and other information services",
            gdp: 4465.1
          }
        ]
      },
      {
        gdpCategory: "Finance, insurance, real estate, rental, and leasing",
        children: [
          {
            gdpCategory: "Finance and insurance",
            children: [
              {
                gdpCategory: "Monetary Authorities- central bank, credit intermediation, and related services",
                gdp: 18331.7
              },
              {
                gdpCategory: "Securities, commodity contracts, and other financial investments and related activities",
                gdp: 3436.3
              },
              {
                gdpCategory: "Insurance carriers and related activities",
                gdp: 11859.7
              },
              {
                gdpCategory: "Funds, trusts, and other financial vehicles",
                gdp: 418.1
              }
            ]
          },
          {
            gdpCategory: "Real estate and rental and leasing",
            children: [
              { gdpCategory: "Real estate", gdp: 68828.7 },
              {
                gdpCategory: "Rental and leasing services and lessors of nonfinancial intangible assets",
                gdp: 8798.5
              }
            ]
          }
        ]
      },
      {
        gdpCategory: "Professional and business services",
        children: [
          {
            gdpCategory: "Professional, scientific, and technical services",
            children: [
              { gdpCategory: "Legal services", gdp: 3854.2 },
              {
                gdpCategory: "Computer systems design and related services",
                gdp: 6387.7
              },
              {
                gdpCategory: "Miscellaneous professional, scientific, and technical services",
                gdp: 16886.4
              }
            ]
          },
          {
            gdpCategory: "Management of companies and enterprises",
            gdp: 6553.0
          },
          {
            gdpCategory: "Administrative and support and waste management and remediation services",
            children: [
              {
                gdpCategory: "Administrative and support services",
                gdp: 19714.5
              },
              {
                gdpCategory: "Waste management and remediation services",
                gdp: 1671.8
              }
            ]
          }
        ]
      },
      {
        gdpCategory: "Educational services, health care, and social assistance",
        children: [
          { gdpCategory: "Educational services", gdp: 5121.3 },
          {
            gdpCategory: "Health care and social assistance",
            children: [
              { gdpCategory: "Ambulatory health care services", gdp: 20740.4 },
              { gdpCategory: "Hospitals", gdp: 11485.2 },
              {
                gdpCategory: "Nursing and residential care facilities",
                gdp: 3242.1
              },
              { gdpCategory: "Social assistance", gdp: 3273.9 }
            ]
          }
        ]
      },
      {
        gdpCategory: "Arts, entertainment, recreation, accommodation, and food services",
        children: [
          {
            gdpCategory: "Arts, entertainment, and recreation",
            children: [
              {
                gdpCategory: "Performing arts, spectator sports, museums, and related activities",
                gdp: 2081.8
              },
              {
                gdpCategory: "Amusement, gambling, and recreation industries",
                gdp: 1713.7
              }
            ]
          },
          {
            gdpCategory: "Accommodation and food services",
            children: [
              { gdpCategory: "Accommodation", gdp: 4306.4 },
              {
                gdpCategory: "Food services and drinking places",
                gdp: 13222.3
              }
            ]
          }
        ]
      },
      {
        gdpCategory: "Other services (except government and government enterprises)",
        gdp: 9589.0
      },
      { gdpCategory: "Federal civilian government", gdp: 9548.9 },
      { gdpCategory: "Military", gdp: 4806.5 },
      { gdpCategory: "State and local government", gdp: 38051.5 }
    ]
  },
  Delaware: {
    gdpCategory: "All industry total",
    children: [
      {
        gdpCategory: "Agriculture, forestry, fishing and hunting",
        children: [
          { gdpCategory: "Farms", gdp: 1121.2 },
          {
            gdpCategory: "Forestry, fishing, and related activities",
            gdp: 33.6
          }
        ]
      },
      {
        gdpCategory: "Mining, quarrying, and oil and gas extraction",
        children: [
          { gdpCategory: "Oil and gas extraction", gdp: 0.0 },
          { gdpCategory: "Mining (except oil and gas)", gdp: 9.5 },
          { gdpCategory: "Support activities for mining", gdp: 0.0 }
        ]
      },
      { gdpCategory: "Utilities", gdp: 1396.9 },
      { gdpCategory: "Construction", gdp: 3323.8 },
      {
        gdpCategory: "Manufacturing",
        children: [
          {
            gdpCategory: "Durable goods manufacturing",
            children: [
              { gdpCategory: "Wood product manufacturing", gdp: 26.3 },
              {
                gdpCategory: "Nonmetallic mineral product manufacturing",
                gdp: 114.0
              },
              { gdpCategory: "Primary metal manufacturing", gdp: 26.8 },
              {
                gdpCategory: "Fabricated metal product manufacturing",
                gdp: 120.1
              },
              { gdpCategory: "Machinery manufacturing", gdp: 185.0 },
              {
                gdpCategory: "Computer and electronic product manufacturing",
                gdp: 538.9
              },
              {
                gdpCategory: "Electrical equipment, appliance, and component manufacturing",
                gdp: 97.9
              },
              {
                gdpCategory: "Motor vehicles, bodies and trailers, and parts manufacturing",
                gdp: 7.1
              },
              {
                gdpCategory: "Other transportation equipment manufacturing",
                gdp: 99.1
              },
              {
                gdpCategory: "Furniture and related product manufacturing",
                gdp: 114.7
              },
              { gdpCategory: "Miscellaneous manufacturing", gdp: 241.8 }
            ]
          },
          {
            gdpCategory: "Nondurable goods manufacturing",
            children: [
              {
                gdpCategory: "Food and beverage and tobacco product manufacturing",
                gdp: 1310.1
              },
              {
                gdpCategory: "Textile mills and textile product mills",
                gdp: 62.8
              },
              {
                gdpCategory: "Apparel, leather, and allied product manufacturing",
                gdp: 4.0
              },
              { gdpCategory: "Paper manufacturing", gdp: 251.2 },
              {
                gdpCategory: "Printing and related support activities",
                gdp: 34.2
              },
              {
                gdpCategory: "Petroleum and coal products manufacturing",
                gdp: 540.7
              },
              { gdpCategory: "Chemical manufacturing", gdp: 2342.0 },
              {
                gdpCategory: "Plastics and rubber products manufacturing",
                gdp: 194.9
              }
            ]
          }
        ]
      },
      { gdpCategory: "Wholesale trade", gdp: 2632.9 },
      { gdpCategory: "Retail trade", gdp: 3988.1 },
      {
        gdpCategory: "Transportation and warehousing",
        children: [
          { gdpCategory: "Air transportation", gdp: 163.1 },
          { gdpCategory: "Rail transportation", gdp: 167.9 },
          { gdpCategory: "Water transportation", gdp: 4.8 },
          { gdpCategory: "Truck transportation", gdp: 401.0 },
          {
            gdpCategory: "Transit and ground passenger transportation",
            gdp: 141.9
          },
          { gdpCategory: "Pipeline transportation", gdp: 3.5 },
          {
            gdpCategory: "Other transportation and support activities",
            gdp: 518.5
          },
          { gdpCategory: "Warehousing and storage", gdp: 646.5 }
        ]
      },
      {
        gdpCategory: "Information",
        children: [
          {
            gdpCategory: "Publishing industries (except Internet)",
            gdp: 196.1
          },
          {
            gdpCategory: "Motion picture and sound recording industries",
            gdp: 33.0
          },
          {
            gdpCategory: "Broadcasting (except Internet) and telecommunications",
            gdp: 656.3
          },
          {
            gdpCategory: "Data processing, hosting, and other information services",
            gdp: 380.4
          }
        ]
      },
      {
        gdpCategory: "Finance, insurance, real estate, rental, and leasing",
        children: [
          {
            gdpCategory: "Finance and insurance",
            children: [
              {
                gdpCategory: "Monetary Authorities- central bank, credit intermediation, and related services",
                gdp: 15142.8
              },
              {
                gdpCategory: "Securities, commodity contracts, and other financial investments and related activities",
                gdp: 1152.6
              },
              {
                gdpCategory: "Insurance carriers and related activities",
                gdp: 4806.9
              },
              {
                gdpCategory: "Funds, trusts, and other financial vehicles",
                gdp: 22.6
              }
            ]
          },
          {
            gdpCategory: "Real estate and rental and leasing",
            children: [
              { gdpCategory: "Real estate", gdp: 9443.2 },
              {
                gdpCategory: "Rental and leasing services and lessors of nonfinancial intangible assets",
                gdp: 7277.6
              }
            ]
          }
        ]
      },
      {
        gdpCategory: "Professional and business services",
        children: [
          {
            gdpCategory: "Professional, scientific, and technical services",
            children: [
              { gdpCategory: "Legal services", gdp: 2320.4 },
              {
                gdpCategory: "Computer systems design and related services",
                gdp: 849.3
              },
              {
                gdpCategory: "Miscellaneous professional, scientific, and technical services",
                gdp: 2624.8
              }
            ]
          },
          {
            gdpCategory: "Management of companies and enterprises",
            gdp: 2048.0
          },
          {
            gdpCategory: "Administrative and support and waste management and remediation services",
            children: [
              {
                gdpCategory: "Administrative and support services",
                gdp: 2406.2
              },
              {
                gdpCategory: "Waste management and remediation services",
                gdp: 212.0
              }
            ]
          }
        ]
      },
      {
        gdpCategory: "Educational services, health care, and social assistance",
        children: [
          { gdpCategory: "Educational services", gdp: 457.2 },
          {
            gdpCategory: "Health care and social assistance",
            children: [
              { gdpCategory: "Ambulatory health care services", gdp: 2253.3 },
              { gdpCategory: "Hospitals", gdp: 3294.4 },
              {
                gdpCategory: "Nursing and residential care facilities",
                gdp: 636.0
              },
              { gdpCategory: "Social assistance", gdp: 532.2 }
            ]
          }
        ]
      },
      {
        gdpCategory: "Arts, entertainment, recreation, accommodation, and food services",
        children: [
          {
            gdpCategory: "Arts, entertainment, and recreation",
            children: [
              {
                gdpCategory: "Performing arts, spectator sports, museums, and related activities",
                gdp: 163.1
              },
              {
                gdpCategory: "Amusement, gambling, and recreation industries",
                gdp: 357.8
              }
            ]
          },
          {
            gdpCategory: "Accommodation and food services",
            children: [
              { gdpCategory: "Accommodation", gdp: 383.4 },
              { gdpCategory: "Food services and drinking places", gdp: 1784.4 }
            ]
          }
        ]
      },
      {
        gdpCategory: "Other services (except government and government enterprises)",
        gdp: 1257.7
      },
      { gdpCategory: "Federal civilian government", gdp: 1059.9 },
      { gdpCategory: "Military", gdp: 707.6 },
      { gdpCategory: "State and local government", gdp: 6884.0 }
    ]
  },
  "District of Columbia": {
    gdpCategory: "All industry total",
    children: [
      {
        gdpCategory: "Agriculture, forestry, fishing and hunting",
        children: [
          { gdpCategory: "Farms", gdp: 0.0 },
          {
            gdpCategory: "Forestry, fishing, and related activities",
            gdp: 4.6
          }
        ]
      },
      {
        gdpCategory: "Mining, quarrying, and oil and gas extraction",
        children: [
          { gdpCategory: "Oil and gas extraction", gdp: 0.0 },
          { gdpCategory: "Mining (except oil and gas)", gdp: 0.0 },
          { gdpCategory: "Support activities for mining", gdp: 0.0 }
        ]
      },
      { gdpCategory: "Utilities", gdp: 1779.6 },
      { gdpCategory: "Construction", gdp: 1875.9 },
      {
        gdpCategory: "Manufacturing",
        children: [
          {
            gdpCategory: "Durable goods manufacturing",
            children: [
              { gdpCategory: "Wood product manufacturing", gdp: 0.2 },
              {
                gdpCategory: "Nonmetallic mineral product manufacturing",
                gdp: 29.8
              },
              { gdpCategory: "Primary metal manufacturing", gdp: 10.4 },
              {
                gdpCategory: "Fabricated metal product manufacturing",
                gdp: 9.8
              },
              { gdpCategory: "Machinery manufacturing", gdp: 11.5 },
              {
                gdpCategory: "Computer and electronic product manufacturing",
                gdp: 53.9
              },
              {
                gdpCategory: "Electrical equipment, appliance, and component manufacturing",
                gdp: 1.9
              },
              {
                gdpCategory: "Motor vehicles, bodies and trailers, and parts manufacturing",
                gdp: 0
              },
              {
                gdpCategory: "Other transportation equipment manufacturing",
                gdp: 11.3
              },
              {
                gdpCategory: "Furniture and related product manufacturing",
                gdp: 9.8
              },
              { gdpCategory: "Miscellaneous manufacturing", gdp: 10.0 }
            ]
          },
          {
            gdpCategory: "Nondurable goods manufacturing",
            children: [
              {
                gdpCategory: "Food and beverage and tobacco product manufacturing",
                gdp: 48.0
              },
              {
                gdpCategory: "Textile mills and textile product mills",
                gdp: 4.3
              },
              {
                gdpCategory: "Apparel, leather, and allied product manufacturing",
                gdp: 2.2
              },
              { gdpCategory: "Paper manufacturing", gdp: 0.9 },
              {
                gdpCategory: "Printing and related support activities",
                gdp: 12.6
              },
              {
                gdpCategory: "Petroleum and coal products manufacturing",
                gdp: 0.3
              },
              { gdpCategory: "Chemical manufacturing", gdp: 139.7 },
              {
                gdpCategory: "Plastics and rubber products manufacturing",
                gdp: 0.3
              }
            ]
          }
        ]
      },
      { gdpCategory: "Wholesale trade", gdp: 1790.0 },
      { gdpCategory: "Retail trade", gdp: 1905.8 },
      {
        gdpCategory: "Transportation and warehousing",
        children: [
          { gdpCategory: "Air transportation", gdp: 23.3 },
          { gdpCategory: "Rail transportation", gdp: 237.6 },
          { gdpCategory: "Water transportation", gdp: 5.2 },
          { gdpCategory: "Truck transportation", gdp: 12.5 },
          {
            gdpCategory: "Transit and ground passenger transportation",
            gdp: 152.1
          },
          { gdpCategory: "Pipeline transportation", gdp: 4.0 },
          {
            gdpCategory: "Other transportation and support activities",
            gdp: 178.9
          },
          { gdpCategory: "Warehousing and storage", gdp: 2.9 }
        ]
      },
      {
        gdpCategory: "Information",
        children: [
          {
            gdpCategory: "Publishing industries (except Internet)",
            gdp: 3038.7
          },
          {
            gdpCategory: "Motion picture and sound recording industries",
            gdp: 293.3
          },
          {
            gdpCategory: "Broadcasting (except Internet) and telecommunications",
            gdp: 5124.9
          },
          {
            gdpCategory: "Data processing, hosting, and other information services",
            gdp: 2934.1
          }
        ]
      },
      {
        gdpCategory: "Finance, insurance, real estate, rental, and leasing",
        children: [
          {
            gdpCategory: "Finance and insurance",
            children: [
              {
                gdpCategory: "Monetary Authorities- central bank, credit intermediation, and related services",
                gdp: 3144.2
              },
              {
                gdpCategory: "Securities, commodity contracts, and other financial investments and related activities",
                gdp: 1201.1
              },
              {
                gdpCategory: "Insurance carriers and related activities",
                gdp: 2163.1
              },
              {
                gdpCategory: "Funds, trusts, and other financial vehicles",
                gdp: 819.3
              }
            ]
          },
          {
            gdpCategory: "Real estate and rental and leasing",
            children: [
              { gdpCategory: "Real estate", gdp: 14601.9 },
              {
                gdpCategory: "Rental and leasing services and lessors of nonfinancial intangible assets",
                gdp: 395.3
              }
            ]
          }
        ]
      },
      {
        gdpCategory: "Professional and business services",
        children: [
          {
            gdpCategory: "Professional, scientific, and technical services",
            children: [
              { gdpCategory: "Legal services", gdp: 13148.1 },
              {
                gdpCategory: "Computer systems design and related services",
                gdp: 4029.1
              },
              {
                gdpCategory: "Miscellaneous professional, scientific, and technical services",
                gdp: 16252.8
              }
            ]
          },
          {
            gdpCategory: "Management of companies and enterprises",
            gdp: 1138.0
          },
          {
            gdpCategory: "Administrative and support and waste management and remediation services",
            children: [
              {
                gdpCategory: "Administrative and support services",
                gdp: 4282.5
              },
              {
                gdpCategory: "Waste management and remediation services",
                gdp: 49.5
              }
            ]
          }
        ]
      },
      {
        gdpCategory: "Educational services, health care, and social assistance",
        children: [
          { gdpCategory: "Educational services", gdp: 4933.3 },
          {
            gdpCategory: "Health care and social assistance",
            children: [
              { gdpCategory: "Ambulatory health care services", gdp: 2722.1 },
              { gdpCategory: "Hospitals", gdp: 3219.8 },
              {
                gdpCategory: "Nursing and residential care facilities",
                gdp: 487.2
              },
              { gdpCategory: "Social assistance", gdp: 1089.8 }
            ]
          }
        ]
      },
      {
        gdpCategory: "Arts, entertainment, recreation, accommodation, and food services",
        children: [
          {
            gdpCategory: "Arts, entertainment, and recreation",
            children: [
              {
                gdpCategory: "Performing arts, spectator sports, museums, and related activities",
                gdp: 1176.8
              },
              {
                gdpCategory: "Amusement, gambling, and recreation industries",
                gdp: 169.7
              }
            ]
          },
          {
            gdpCategory: "Accommodation and food services",
            children: [
              { gdpCategory: "Accommodation", gdp: 2201.9 },
              { gdpCategory: "Food services and drinking places", gdp: 3313.6 }
            ]
          }
        ]
      },
      {
        gdpCategory: "Other services (except government and government enterprises)",
        gdp: 11724.9
      },
      { gdpCategory: "Federal civilian government", gdp: 44115.8 },
      { gdpCategory: "Military", gdp: 4218.6 },
      { gdpCategory: "State and local government", gdp: 4741.9 }
    ]
  },
  Kansas: {
    gdpCategory: "All industry total",
    children: [
      {
        gdpCategory: "Agriculture, forestry, fishing and hunting",
        children: [
          { gdpCategory: "Farms", gdp: 5149.9 },
          {
            gdpCategory: "Forestry, fishing, and related activities",
            gdp: 531.6
          }
        ]
      },
      {
        gdpCategory: "Mining, quarrying, and oil and gas extraction",
        children: [
          { gdpCategory: "Oil and gas extraction", gdp: 789.0 },
          { gdpCategory: "Mining (except oil and gas)", gdp: 437.2 },
          { gdpCategory: "Support activities for mining", gdp: 316.8 }
        ]
      },
      { gdpCategory: "Utilities", gdp: 3763.4 },
      { gdpCategory: "Construction", gdp: 8030.5 },
      {
        gdpCategory: "Manufacturing",
        children: [
          {
            gdpCategory: "Durable goods manufacturing",
            children: [
              { gdpCategory: "Wood product manufacturing", gdp: 284.7 },
              {
                gdpCategory: "Nonmetallic mineral product manufacturing",
                gdp: 704.9
              },
              { gdpCategory: "Primary metal manufacturing", gdp: 188.7 },
              {
                gdpCategory: "Fabricated metal product manufacturing",
                gdp: 1432.6
              },
              { gdpCategory: "Machinery manufacturing", gdp: 2860.9 },
              {
                gdpCategory: "Computer and electronic product manufacturing",
                gdp: 1290.2
              },
              {
                gdpCategory: "Electrical equipment, appliance, and component manufacturing",
                gdp: 689.8
              },
              {
                gdpCategory: "Motor vehicles, bodies and trailers, and parts manufacturing",
                gdp: 738.6
              },
              {
                gdpCategory: "Other transportation equipment manufacturing",
                gdp: 6028.6
              },
              {
                gdpCategory: "Furniture and related product manufacturing",
                gdp: 249.3
              },
              { gdpCategory: "Miscellaneous manufacturing", gdp: 365.0 }
            ]
          },
          {
            gdpCategory: "Nondurable goods manufacturing",
            children: [
              {
                gdpCategory: "Food and beverage and tobacco product manufacturing",
                gdp: 6946.2
              },
              {
                gdpCategory: "Textile mills and textile product mills",
                gdp: 50.3
              },
              {
                gdpCategory: "Apparel, leather, and allied product manufacturing",
                gdp: 30.5
              },
              { gdpCategory: "Paper manufacturing", gdp: 279.8 },
              {
                gdpCategory: "Printing and related support activities",
                gdp: 855.4
              },
              {
                gdpCategory: "Petroleum and coal products manufacturing",
                gdp: 3893.4
              },
              { gdpCategory: "Chemical manufacturing", gdp: 3252.4 },
              {
                gdpCategory: "Plastics and rubber products manufacturing",
                gdp: 1129.0
              }
            ]
          }
        ]
      },
      { gdpCategory: "Wholesale trade", gdp: 13437.9 },
      { gdpCategory: "Retail trade", gdp: 13478.7 },
      {
        gdpCategory: "Transportation and warehousing",
        children: [
          { gdpCategory: "Air transportation", gdp: 123.4 },
          { gdpCategory: "Rail transportation", gdp: 1967.2 },
          { gdpCategory: "Water transportation", gdp: 2.0 },
          { gdpCategory: "Truck transportation", gdp: 2839.4 },
          {
            gdpCategory: "Transit and ground passenger transportation",
            gdp: 208.7
          },
          { gdpCategory: "Pipeline transportation", gdp: 818.8 },
          {
            gdpCategory: "Other transportation and support activities",
            gdp: 2024.4
          },
          { gdpCategory: "Warehousing and storage", gdp: 1311.5 }
        ]
      },
      {
        gdpCategory: "Information",
        children: [
          {
            gdpCategory: "Publishing industries (except Internet)",
            gdp: 871.6
          },
          {
            gdpCategory: "Motion picture and sound recording industries",
            gdp: 72.7
          },
          {
            gdpCategory: "Broadcasting (except Internet) and telecommunications",
            gdp: 8614.3
          },
          {
            gdpCategory: "Data processing, hosting, and other information services",
            gdp: 955.7
          }
        ]
      },
      {
        gdpCategory: "Finance, insurance, real estate, rental, and leasing",
        children: [
          {
            gdpCategory: "Finance and insurance",
            children: [
              {
                gdpCategory: "Monetary Authorities- central bank, credit intermediation, and related services",
                gdp: 3460.0
              },
              {
                gdpCategory: "Securities, commodity contracts, and other financial investments and related activities",
                gdp: 1515.5
              },
              {
                gdpCategory: "Insurance carriers and related activities",
                gdp: 5577.4
              },
              {
                gdpCategory: "Funds, trusts, and other financial vehicles",
                gdp: 80.3
              }
            ]
          },
          {
            gdpCategory: "Real estate and rental and leasing",
            children: [
              { gdpCategory: "Real estate", gdp: 18306.2 },
              {
                gdpCategory: "Rental and leasing services and lessors of nonfinancial intangible assets",
                gdp: 9027.5
              }
            ]
          }
        ]
      },
      {
        gdpCategory: "Professional and business services",
        children: [
          {
            gdpCategory: "Professional, scientific, and technical services",
            children: [
              { gdpCategory: "Legal services", gdp: 1184.4 },
              {
                gdpCategory: "Computer systems design and related services",
                gdp: 2462.8
              },
              {
                gdpCategory: "Miscellaneous professional, scientific, and technical services",
                gdp: 7475.6
              }
            ]
          },
          {
            gdpCategory: "Management of companies and enterprises",
            gdp: 4005.2
          },
          {
            gdpCategory: "Administrative and support and waste management and remediation services",
            children: [
              {
                gdpCategory: "Administrative and support services",
                gdp: 5975.7
              },
              {
                gdpCategory: "Waste management and remediation services",
                gdp: 421.0
              }
            ]
          }
        ]
      },
      {
        gdpCategory: "Educational services, health care, and social assistance",
        children: [
          { gdpCategory: "Educational services", gdp: 1146.9 },
          {
            gdpCategory: "Health care and social assistance",
            children: [
              { gdpCategory: "Ambulatory health care services", gdp: 6910.1 },
              { gdpCategory: "Hospitals", gdp: 5320.3 },
              {
                gdpCategory: "Nursing and residential care facilities",
                gdp: 1782.8
              },
              { gdpCategory: "Social assistance", gdp: 1419.2 }
            ]
          }
        ]
      },
      {
        gdpCategory: "Arts, entertainment, recreation, accommodation, and food services",
        children: [
          {
            gdpCategory: "Arts, entertainment, and recreation",
            children: [
              {
                gdpCategory: "Performing arts, spectator sports, museums, and related activities",
                gdp: 345.8
              },
              {
                gdpCategory: "Amusement, gambling, and recreation industries",
                gdp: 699.9
              }
            ]
          },
          {
            gdpCategory: "Accommodation and food services",
            children: [
              { gdpCategory: "Accommodation", gdp: 741.8 },
              { gdpCategory: "Food services and drinking places", gdp: 4822.9 }
            ]
          }
        ]
      },
      {
        gdpCategory: "Other services (except government and government enterprises)",
        gdp: 4751.9
      },
      { gdpCategory: "Federal civilian government", gdp: 3326.5 },
      { gdpCategory: "Military", gdp: 3199.2 },
      { gdpCategory: "State and local government", gdp: 18352.3 }
    ]
  },
  Pennsylvania: {
    gdpCategory: "All industry total",
    children: [
      {
        gdpCategory: "Agriculture, forestry, fishing and hunting",
        children: [
          { gdpCategory: "Farms", gdp: 4673.9 },
          {
            gdpCategory: "Forestry, fishing, and related activities",
            gdp: 920.8
          }
        ]
      },
      {
        gdpCategory: "Mining, quarrying, and oil and gas extraction",
        children: [
          { gdpCategory: "Oil and gas extraction", gdp: 11690.8 },
          { gdpCategory: "Mining (except oil and gas)", gdp: 3924.1 },
          { gdpCategory: "Support activities for mining", gdp: 2247.3 }
        ]
      },
      { gdpCategory: "Utilities", gdp: 15052.9 },
      { gdpCategory: "Construction", gdp: 34900.4 },
      {
        gdpCategory: "Manufacturing",
        children: [
          {
            gdpCategory: "Durable goods manufacturing",
            children: [
              { gdpCategory: "Wood product manufacturing", gdp: 2485.7 },
              {
                gdpCategory: "Nonmetallic mineral product manufacturing",
                gdp: 3233.5
              },
              { gdpCategory: "Primary metal manufacturing", gdp: 8091.5 },
              {
                gdpCategory: "Fabricated metal product manufacturing",
                gdp: 8130.7
              },
              { gdpCategory: "Machinery manufacturing", gdp: 6643.9 },
              {
                gdpCategory: "Computer and electronic product manufacturing",
                gdp: 4316.8
              },
              {
                gdpCategory: "Electrical equipment, appliance, and component manufacturing",
                gdp: 3711.1
              },
              {
                gdpCategory: "Motor vehicles, bodies and trailers, and parts manufacturing",
                gdp: 1864.0
              },
              {
                gdpCategory: "Other transportation equipment manufacturing",
                gdp: 3373.6
              },
              {
                gdpCategory: "Furniture and related product manufacturing",
                gdp: 1309.2
              },
              { gdpCategory: "Miscellaneous manufacturing", gdp: 4206.6 }
            ]
          },
          {
            gdpCategory: "Nondurable goods manufacturing",
            children: [
              {
                gdpCategory: "Food and beverage and tobacco product manufacturing",
                gdp: 11587.7
              },
              {
                gdpCategory: "Textile mills and textile product mills",
                gdp: 371.7
              },
              {
                gdpCategory: "Apparel, leather, and allied product manufacturing",
                gdp: 295.4
              },
              { gdpCategory: "Paper manufacturing", gdp: 4178.3 },
              {
                gdpCategory: "Printing and related support activities",
                gdp: 2304.5
              },
              {
                gdpCategory: "Petroleum and coal products manufacturing",
                gdp: 6189.5
              },
              { gdpCategory: "Chemical manufacturing", gdp: 26488.0 },
              {
                gdpCategory: "Plastics and rubber products manufacturing",
                gdp: 5037.0
              }
            ]
          }
        ]
      },
      { gdpCategory: "Wholesale trade", gdp: 51506.8 },
      { gdpCategory: "Retail trade", gdp: 56591.9 },
      {
        gdpCategory: "Transportation and warehousing",
        children: [
          { gdpCategory: "Air transportation", gdp: 3450.0 },
          { gdpCategory: "Rail transportation", gdp: 1566.2 },
          { gdpCategory: "Water transportation", gdp: 179.8 },
          { gdpCategory: "Truck transportation", gdp: 11014.6 },
          {
            gdpCategory: "Transit and ground passenger transportation",
            gdp: 2279.8
          },
          { gdpCategory: "Pipeline transportation", gdp: 6742.3 },
          {
            gdpCategory: "Other transportation and support activities",
            gdp: 5808.4
          },
          { gdpCategory: "Warehousing and storage", gdp: 7534.5 }
        ]
      },
      {
        gdpCategory: "Information",
        children: [
          {
            gdpCategory: "Publishing industries (except Internet)",
            gdp: 8332.5
          },
          {
            gdpCategory: "Motion picture and sound recording industries",
            gdp: 1173.7
          },
          {
            gdpCategory: "Broadcasting (except Internet) and telecommunications",
            gdp: 27884.0
          },
          {
            gdpCategory: "Data processing, hosting, and other information services",
            gdp: 7380.1
          }
        ]
      },
      {
        gdpCategory: "Finance, insurance, real estate, rental, and leasing",
        children: [
          {
            gdpCategory: "Finance and insurance",
            children: [
              {
                gdpCategory: "Monetary Authorities- central bank, credit intermediation, and related services",
                gdp: 19793.9
              },
              {
                gdpCategory: "Securities, commodity contracts, and other financial investments and related activities",
                gdp: 12035.6
              },
              {
                gdpCategory: "Insurance carriers and related activities",
                gdp: 28258.2
              },
              {
                gdpCategory: "Funds, trusts, and other financial vehicles",
                gdp: 180.7
              }
            ]
          },
          {
            gdpCategory: "Real estate and rental and leasing",
            children: [
              { gdpCategory: "Real estate", gdp: 103529.7 },
              {
                gdpCategory: "Rental and leasing services and lessors of nonfinancial intangible assets",
                gdp: 9167.4
              }
            ]
          }
        ]
      },
      {
        gdpCategory: "Professional and business services",
        children: [
          {
            gdpCategory: "Professional, scientific, and technical services",
            children: [
              { gdpCategory: "Legal services", gdp: 13872.5 },
              {
                gdpCategory: "Computer systems design and related services",
                gdp: 12915.3
              },
              {
                gdpCategory: "Miscellaneous professional, scientific, and technical services",
                gdp: 44881.6
              }
            ]
          },
          {
            gdpCategory: "Management of companies and enterprises",
            gdp: 28064.6
          },
          {
            gdpCategory: "Administrative and support and waste management and remediation services",
            children: [
              {
                gdpCategory: "Administrative and support services",
                gdp: 21589.2
              },
              {
                gdpCategory: "Waste management and remediation services",
                gdp: 2838.2
              }
            ]
          }
        ]
      },
      {
        gdpCategory: "Educational services, health care, and social assistance",
        children: [
          { gdpCategory: "Educational services", gdp: 21418.4 },
          {
            gdpCategory: "Health care and social assistance",
            children: [
              { gdpCategory: "Ambulatory health care services", gdp: 39964.0 },
              { gdpCategory: "Hospitals", gdp: 29456.9 },
              {
                gdpCategory: "Nursing and residential care facilities",
                gdp: 10134.1
              },
              { gdpCategory: "Social assistance", gdp: 10909.4 }
            ]
          }
        ]
      },
      {
        gdpCategory: "Arts, entertainment, recreation, accommodation, and food services",
        children: [
          {
            gdpCategory: "Arts, entertainment, and recreation",
            children: [
              {
                gdpCategory: "Performing arts, spectator sports, museums, and related activities",
                gdp: 4761.3
              },
              {
                gdpCategory: "Amusement, gambling, and recreation industries",
                gdp: 4262.5
              }
            ]
          },
          {
            gdpCategory: "Accommodation and food services",
            children: [
              { gdpCategory: "Accommodation", gdp: 5059.5 },
              {
                gdpCategory: "Food services and drinking places",
                gdp: 17906.2
              }
            ]
          }
        ]
      },
      {
        gdpCategory: "Other services (except government and government enterprises)",
        gdp: 20553.7
      },
      { gdpCategory: "Federal civilian government", gdp: 17822.3 },
      { gdpCategory: "Military", gdp: 3239.7 },
      { gdpCategory: "State and local government", gdp: 60525.0 }
    ]
  },
  Massachusetts: {
    gdpCategory: "All industry total",
    children: [
      {
        gdpCategory: "Agriculture, forestry, fishing and hunting",
        children: [
          { gdpCategory: "Farms", gdp: 350.0 },
          {
            gdpCategory: "Forestry, fishing, and related activities",
            gdp: 624.9
          }
        ]
      },
      {
        gdpCategory: "Mining, quarrying, and oil and gas extraction",
        children: [
          { gdpCategory: "Oil and gas extraction", gdp: 2.0 },
          { gdpCategory: "Mining (except oil and gas)", gdp: 119.7 },
          { gdpCategory: "Support activities for mining", gdp: 8.4 }
        ]
      },
      { gdpCategory: "Utilities", gdp: 15499.3 },
      { gdpCategory: "Construction", gdp: 26297.1 },
      {
        gdpCategory: "Manufacturing",
        children: [
          {
            gdpCategory: "Durable goods manufacturing",
            children: [
              { gdpCategory: "Wood product manufacturing", gdp: 237.8 },
              {
                gdpCategory: "Nonmetallic mineral product manufacturing",
                gdp: 908.3
              },
              { gdpCategory: "Primary metal manufacturing", gdp: 489.3 },
              {
                gdpCategory: "Fabricated metal product manufacturing",
                gdp: 4284.8
              },
              { gdpCategory: "Machinery manufacturing", gdp: 3201.6 },
              {
                gdpCategory: "Computer and electronic product manufacturing",
                gdp: 13838.9
              },
              {
                gdpCategory: "Electrical equipment, appliance, and component manufacturing",
                gdp: 1439.8
              },
              {
                gdpCategory: "Motor vehicles, bodies and trailers, and parts manufacturing",
                gdp: 87.1
              },
              {
                gdpCategory: "Other transportation equipment manufacturing",
                gdp: 1807.8
              },
              {
                gdpCategory: "Furniture and related product manufacturing",
                gdp: 334.6
              },
              { gdpCategory: "Miscellaneous manufacturing", gdp: 4460.5 }
            ]
          },
          {
            gdpCategory: "Nondurable goods manufacturing",
            children: [
              {
                gdpCategory: "Food and beverage and tobacco product manufacturing",
                gdp: 3091.9
              },
              {
                gdpCategory: "Textile mills and textile product mills",
                gdp: 380.7
              },
              {
                gdpCategory: "Apparel, leather, and allied product manufacturing",
                gdp: 439.7
              },
              { gdpCategory: "Paper manufacturing", gdp: 1122.1 },
              {
                gdpCategory: "Printing and related support activities",
                gdp: 1169.3
              },
              {
                gdpCategory: "Petroleum and coal products manufacturing",
                gdp: 615.2
              },
              { gdpCategory: "Chemical manufacturing", gdp: 17424.9 },
              {
                gdpCategory: "Plastics and rubber products manufacturing",
                gdp: 1417.7
              }
            ]
          }
        ]
      },
      { gdpCategory: "Wholesale trade", gdp: 34595.3 },
      { gdpCategory: "Retail trade", gdp: 32889.7 },
      {
        gdpCategory: "Transportation and warehousing",
        children: [
          { gdpCategory: "Air transportation", gdp: 2570.1 },
          { gdpCategory: "Rail transportation", gdp: 526.3 },
          { gdpCategory: "Water transportation", gdp: 853.1 },
          { gdpCategory: "Truck transportation", gdp: 2840.0 },
          {
            gdpCategory: "Transit and ground passenger transportation",
            gdp: 2524.9
          },
          { gdpCategory: "Pipeline transportation", gdp: 70.3 },
          {
            gdpCategory: "Other transportation and support activities",
            gdp: 2836.2
          },
          { gdpCategory: "Warehousing and storage", gdp: 1229.3 }
        ]
      },
      {
        gdpCategory: "Information",
        children: [
          {
            gdpCategory: "Publishing industries (except Internet)",
            gdp: 19874.4
          },
          {
            gdpCategory: "Motion picture and sound recording industries",
            gdp: 1105.5
          },
          {
            gdpCategory: "Broadcasting (except Internet) and telecommunications",
            gdp: 7487.6
          },
          {
            gdpCategory: "Data processing, hosting, and other information services",
            gdp: 10149.5
          }
        ]
      },
      {
        gdpCategory: "Finance, insurance, real estate, rental, and leasing",
        children: [
          {
            gdpCategory: "Finance and insurance",
            children: [
              {
                gdpCategory: "Monetary Authorities- central bank, credit intermediation, and related services",
                gdp: 19308.8
              },
              {
                gdpCategory: "Securities, commodity contracts, and other financial investments and related activities",
                gdp: 19514.6
              },
              {
                gdpCategory: "Insurance carriers and related activities",
                gdp: 20227.2
              },
              {
                gdpCategory: "Funds, trusts, and other financial vehicles",
                gdp: 1661.9
              }
            ]
          },
          {
            gdpCategory: "Real estate and rental and leasing",
            children: [
              { gdpCategory: "Real estate", gdp: 88228.3 },
              {
                gdpCategory: "Rental and leasing services and lessors of nonfinancial intangible assets",
                gdp: 5848.8
              }
            ]
          }
        ]
      },
      {
        gdpCategory: "Professional and business services",
        children: [
          {
            gdpCategory: "Professional, scientific, and technical services",
            children: [
              { gdpCategory: "Legal services", gdp: 9731.4 },
              {
                gdpCategory: "Computer systems design and related services",
                gdp: 20783.0
              },
              {
                gdpCategory: "Miscellaneous professional, scientific, and technical services",
                gdp: 69256.6
              }
            ]
          },
          {
            gdpCategory: "Management of companies and enterprises",
            gdp: 13546.9
          },
          {
            gdpCategory: "Administrative and support and waste management and remediation services",
            children: [
              {
                gdpCategory: "Administrative and support services",
                gdp: 17573.1
              },
              {
                gdpCategory: "Waste management and remediation services",
                gdp: 2323.0
              }
            ]
          }
        ]
      },
      {
        gdpCategory: "Educational services, health care, and social assistance",
        children: [
          { gdpCategory: "Educational services", gdp: 19384.5 },
          {
            gdpCategory: "Health care and social assistance",
            children: [
              { gdpCategory: "Ambulatory health care services", gdp: 23804.0 },
              { gdpCategory: "Hospitals", gdp: 25308.6 },
              {
                gdpCategory: "Nursing and residential care facilities",
                gdp: 6134.9
              },
              { gdpCategory: "Social assistance", gdp: 6999.4 }
            ]
          }
        ]
      },
      {
        gdpCategory: "Arts, entertainment, recreation, accommodation, and food services",
        children: [
          {
            gdpCategory: "Arts, entertainment, and recreation",
            children: [
              {
                gdpCategory: "Performing arts, spectator sports, museums, and related activities",
                gdp: 4322.9
              },
              {
                gdpCategory: "Amusement, gambling, and recreation industries",
                gdp: 3072.7
              }
            ]
          },
          {
            gdpCategory: "Accommodation and food services",
            children: [
              { gdpCategory: "Accommodation", gdp: 5244.5 },
              {
                gdpCategory: "Food services and drinking places",
                gdp: 15340.2
              }
            ]
          }
        ]
      },
      {
        gdpCategory: "Other services (except government and government enterprises)",
        gdp: 13399.5
      },
      { gdpCategory: "Federal civilian government", gdp: 10835.1 },
      { gdpCategory: "Military", gdp: 7210.0 },
      { gdpCategory: "State and local government", gdp: 43195.5 }
    ]
  },
  "New Mexico": {
    gdpCategory: "All industry total",
    children: [
      {
        gdpCategory: "Agriculture, forestry, fishing and hunting",
        children: [
          { gdpCategory: "Farms", gdp: 1721.8 },
          {
            gdpCategory: "Forestry, fishing, and related activities",
            gdp: 198.6
          }
        ]
      },
      {
        gdpCategory: "Mining, quarrying, and oil and gas extraction",
        children: [
          { gdpCategory: "Oil and gas extraction", gdp: 11218.3 },
          { gdpCategory: "Mining (except oil and gas)", gdp: 2015.1 },
          { gdpCategory: "Support activities for mining", gdp: 2399.4 }
        ]
      },
      { gdpCategory: "Utilities", gdp: 2032.3 },
      { gdpCategory: "Construction", gdp: 4888.1 },
      {
        gdpCategory: "Manufacturing",
        children: [
          {
            gdpCategory: "Durable goods manufacturing",
            children: [
              { gdpCategory: "Wood product manufacturing", gdp: 41.0 },
              {
                gdpCategory: "Nonmetallic mineral product manufacturing",
                gdp: 220.1
              },
              { gdpCategory: "Primary metal manufacturing", gdp: 58.8 },
              {
                gdpCategory: "Fabricated metal product manufacturing",
                gdp: 208.3
              },
              { gdpCategory: "Machinery manufacturing", gdp: 142.7 },
              {
                gdpCategory: "Computer and electronic product manufacturing",
                gdp: 958.7
              },
              {
                gdpCategory: "Electrical equipment, appliance, and component manufacturing",
                gdp: 54.1
              },
              {
                gdpCategory: "Motor vehicles, bodies and trailers, and parts manufacturing",
                gdp: 13.3
              },
              {
                gdpCategory: "Other transportation equipment manufacturing",
                gdp: 166.3
              },
              {
                gdpCategory: "Furniture and related product manufacturing",
                gdp: 38.9
              },
              { gdpCategory: "Miscellaneous manufacturing", gdp: 181.6 }
            ]
          },
          {
            gdpCategory: "Nondurable goods manufacturing",
            children: [
              {
                gdpCategory: "Food and beverage and tobacco product manufacturing",
                gdp: 995.1
              },
              {
                gdpCategory: "Textile mills and textile product mills",
                gdp: 9.4
              },
              {
                gdpCategory: "Apparel, leather, and allied product manufacturing",
                gdp: 4.4
              },
              { gdpCategory: "Paper manufacturing", gdp: 109.5 },
              {
                gdpCategory: "Printing and related support activities",
                gdp: 54.4
              },
              {
                gdpCategory: "Petroleum and coal products manufacturing",
                gdp: 429.8
              },
              { gdpCategory: "Chemical manufacturing", gdp: 455.9 },
              {
                gdpCategory: "Plastics and rubber products manufacturing",
                gdp: 122.5
              }
            ]
          }
        ]
      },
      { gdpCategory: "Wholesale trade", gdp: 3894.7 },
      { gdpCategory: "Retail trade", gdp: 7405.5 },
      {
        gdpCategory: "Transportation and warehousing",
        children: [
          { gdpCategory: "Air transportation", gdp: 257.9 },
          { gdpCategory: "Rail transportation", gdp: 997.5 },
          { gdpCategory: "Water transportation", gdp: 1.5 },
          { gdpCategory: "Truck transportation", gdp: 1334.9 },
          {
            gdpCategory: "Transit and ground passenger transportation",
            gdp: 109.9
          },
          { gdpCategory: "Pipeline transportation", gdp: 200.8 },
          {
            gdpCategory: "Other transportation and support activities",
            gdp: 663.6
          },
          { gdpCategory: "Warehousing and storage", gdp: 267.5 }
        ]
      },
      {
        gdpCategory: "Information",
        children: [
          {
            gdpCategory: "Publishing industries (except Internet)",
            gdp: 333.3
          },
          {
            gdpCategory: "Motion picture and sound recording industries",
            gdp: 724.6
          },
          {
            gdpCategory: "Broadcasting (except Internet) and telecommunications",
            gdp: 1448.3
          },
          {
            gdpCategory: "Data processing, hosting, and other information services",
            gdp: 423.9
          }
        ]
      },
      {
        gdpCategory: "Finance, insurance, real estate, rental, and leasing",
        children: [
          {
            gdpCategory: "Finance and insurance",
            children: [
              {
                gdpCategory: "Monetary Authorities- central bank, credit intermediation, and related services",
                gdp: 1833.7
              },
              {
                gdpCategory: "Securities, commodity contracts, and other financial investments and related activities",
                gdp: 367.3
              },
              {
                gdpCategory: "Insurance carriers and related activities",
                gdp: 2167.6
              },
              {
                gdpCategory: "Funds, trusts, and other financial vehicles",
                gdp: 45.3
              }
            ]
          },
          {
            gdpCategory: "Real estate and rental and leasing",
            children: [
              { gdpCategory: "Real estate", gdp: 12940.0 },
              {
                gdpCategory: "Rental and leasing services and lessors of nonfinancial intangible assets",
                gdp: 1186.9
              }
            ]
          }
        ]
      },
      {
        gdpCategory: "Professional and business services",
        children: [
          {
            gdpCategory: "Professional, scientific, and technical services",
            children: [
              { gdpCategory: "Legal services", gdp: 747.6 },
              {
                gdpCategory: "Computer systems design and related services",
                gdp: 886.3
              },
              {
                gdpCategory: "Miscellaneous professional, scientific, and technical services",
                gdp: 7917.4
              }
            ]
          },
          {
            gdpCategory: "Management of companies and enterprises",
            gdp: 805.0
          },
          {
            gdpCategory: "Administrative and support and waste management and remediation services",
            children: [
              {
                gdpCategory: "Administrative and support services",
                gdp: 3143.1
              },
              {
                gdpCategory: "Waste management and remediation services",
                gdp: 613.5
              }
            ]
          }
        ]
      },
      {
        gdpCategory: "Educational services, health care, and social assistance",
        children: [
          { gdpCategory: "Educational services", gdp: 673.8 },
          {
            gdpCategory: "Health care and social assistance",
            children: [
              { gdpCategory: "Ambulatory health care services", gdp: 3952.9 },
              { gdpCategory: "Hospitals", gdp: 2913.6 },
              {
                gdpCategory: "Nursing and residential care facilities",
                gdp: 707.7
              },
              { gdpCategory: "Social assistance", gdp: 1322.2 }
            ]
          }
        ]
      },
      {
        gdpCategory: "Arts, entertainment, recreation, accommodation, and food services",
        children: [
          {
            gdpCategory: "Arts, entertainment, and recreation",
            children: [
              {
                gdpCategory: "Performing arts, spectator sports, museums, and related activities",
                gdp: 494.0
              },
              {
                gdpCategory: "Amusement, gambling, and recreation industries",
                gdp: 532.6
              }
            ]
          },
          {
            gdpCategory: "Accommodation and food services",
            children: [
              { gdpCategory: "Accommodation", gdp: 1029.6 },
              { gdpCategory: "Food services and drinking places", gdp: 3585.1 }
            ]
          }
        ]
      },
      {
        gdpCategory: "Other services (except government and government enterprises)",
        gdp: 2871.2
      },
      { gdpCategory: "Federal civilian government", gdp: 9017.4 },
      { gdpCategory: "Military", gdp: 4662.3 },
      { gdpCategory: "State and local government", gdp: 14322.2 }
    ]
  },
  Minnesota: {
    gdpCategory: "All industry total",
    children: [
      {
        gdpCategory: "Agriculture, forestry, fishing and hunting",
        children: [
          { gdpCategory: "Farms", gdp: 11014.2 },
          {
            gdpCategory: "Forestry, fishing, and related activities",
            gdp: 507.1
          }
        ]
      },
      {
        gdpCategory: "Mining, quarrying, and oil and gas extraction",
        children: [
          { gdpCategory: "Oil and gas extraction", gdp: 50.8 },
          { gdpCategory: "Mining (except oil and gas)", gdp: 2101.4 },
          { gdpCategory: "Support activities for mining", gdp: 12.8 }
        ]
      },
      { gdpCategory: "Utilities", gdp: 7273.1 },
      { gdpCategory: "Construction", gdp: 21030.6 },
      {
        gdpCategory: "Manufacturing",
        children: [
          {
            gdpCategory: "Durable goods manufacturing",
            children: [
              { gdpCategory: "Wood product manufacturing", gdp: 1782.4 },
              {
                gdpCategory: "Nonmetallic mineral product manufacturing",
                gdp: 1298.0
              },
              { gdpCategory: "Primary metal manufacturing", gdp: 815.1 },
              {
                gdpCategory: "Fabricated metal product manufacturing",
                gdp: 5204.6
              },
              { gdpCategory: "Machinery manufacturing", gdp: 5534.0 },
              {
                gdpCategory: "Computer and electronic product manufacturing",
                gdp: 8074.1
              },
              {
                gdpCategory: "Electrical equipment, appliance, and component manufacturing",
                gdp: 1245.7
              },
              {
                gdpCategory: "Motor vehicles, bodies and trailers, and parts manufacturing",
                gdp: 952.9
              },
              {
                gdpCategory: "Other transportation equipment manufacturing",
                gdp: 1743.9
              },
              {
                gdpCategory: "Furniture and related product manufacturing",
                gdp: 893.4
              },
              { gdpCategory: "Miscellaneous manufacturing", gdp: 5514.1 }
            ]
          },
          {
            gdpCategory: "Nondurable goods manufacturing",
            children: [
              {
                gdpCategory: "Food and beverage and tobacco product manufacturing",
                gdp: 6717.0
              },
              {
                gdpCategory: "Textile mills and textile product mills",
                gdp: 171.8
              },
              {
                gdpCategory: "Apparel, leather, and allied product manufacturing",
                gdp: 123.1
              },
              { gdpCategory: "Paper manufacturing", gdp: 1356.2 },
              {
                gdpCategory: "Printing and related support activities",
                gdp: 2175.2
              },
              {
                gdpCategory: "Petroleum and coal products manufacturing",
                gdp: 3986.5
              },
              { gdpCategory: "Chemical manufacturing", gdp: 4120.2 },
              {
                gdpCategory: "Plastics and rubber products manufacturing",
                gdp: 1949.5
              }
            ]
          }
        ]
      },
      { gdpCategory: "Wholesale trade", gdp: 32693.4 },
      { gdpCategory: "Retail trade", gdp: 26750.5 },
      {
        gdpCategory: "Transportation and warehousing",
        children: [
          { gdpCategory: "Air transportation", gdp: 3712.4 },
          { gdpCategory: "Rail transportation", gdp: 1492.4 },
          { gdpCategory: "Water transportation", gdp: 138.4 },
          { gdpCategory: "Truck transportation", gdp: 5303.6 },
          {
            gdpCategory: "Transit and ground passenger transportation",
            gdp: 969.0
          },
          { gdpCategory: "Pipeline transportation", gdp: 321.9 },
          {
            gdpCategory: "Other transportation and support activities",
            gdp: 2506.8
          },
          { gdpCategory: "Warehousing and storage", gdp: 1125.3 }
        ]
      },
      {
        gdpCategory: "Information",
        children: [
          {
            gdpCategory: "Publishing industries (except Internet)",
            gdp: 4947.4
          },
          {
            gdpCategory: "Motion picture and sound recording industries",
            gdp: 329.2
          },
          {
            gdpCategory: "Broadcasting (except Internet) and telecommunications",
            gdp: 6244.8
          },
          {
            gdpCategory: "Data processing, hosting, and other information services",
            gdp: 3390.7
          }
        ]
      },
      {
        gdpCategory: "Finance, insurance, real estate, rental, and leasing",
        children: [
          {
            gdpCategory: "Finance and insurance",
            children: [
              {
                gdpCategory: "Monetary Authorities- central bank, credit intermediation, and related services",
                gdp: 13574.8
              },
              {
                gdpCategory: "Securities, commodity contracts, and other financial investments and related activities",
                gdp: 5838.9
              },
              {
                gdpCategory: "Insurance carriers and related activities",
                gdp: 17324.1
              },
              {
                gdpCategory: "Funds, trusts, and other financial vehicles",
                gdp: 717.6
              }
            ]
          },
          {
            gdpCategory: "Real estate and rental and leasing",
            children: [
              { gdpCategory: "Real estate", gdp: 49916.0 },
              {
                gdpCategory: "Rental and leasing services and lessors of nonfinancial intangible assets",
                gdp: 4186.4
              }
            ]
          }
        ]
      },
      {
        gdpCategory: "Professional and business services",
        children: [
          {
            gdpCategory: "Professional, scientific, and technical services",
            children: [
              { gdpCategory: "Legal services", gdp: 5115.4 },
              {
                gdpCategory: "Computer systems design and related services",
                gdp: 7171.7
              },
              {
                gdpCategory: "Miscellaneous professional, scientific, and technical services",
                gdp: 18705.2
              }
            ]
          },
          {
            gdpCategory: "Management of companies and enterprises",
            gdp: 16361.0
          },
          {
            gdpCategory: "Administrative and support and waste management and remediation services",
            children: [
              {
                gdpCategory: "Administrative and support services",
                gdp: 10137.6
              },
              {
                gdpCategory: "Waste management and remediation services",
                gdp: 1236.4
              }
            ]
          }
        ]
      },
      {
        gdpCategory: "Educational services, health care, and social assistance",
        children: [
          { gdpCategory: "Educational services", gdp: 4223.2 },
          {
            gdpCategory: "Health care and social assistance",
            children: [
              { gdpCategory: "Ambulatory health care services", gdp: 18641.7 },
              { gdpCategory: "Hospitals", gdp: 12971.7 },
              {
                gdpCategory: "Nursing and residential care facilities",
                gdp: 5639.2
              },
              { gdpCategory: "Social assistance", gdp: 4487.8 }
            ]
          }
        ]
      },
      {
        gdpCategory: "Arts, entertainment, recreation, accommodation, and food services",
        children: [
          {
            gdpCategory: "Arts, entertainment, and recreation",
            children: [
              {
                gdpCategory: "Performing arts, spectator sports, museums, and related activities",
                gdp: 2919.9
              },
              {
                gdpCategory: "Amusement, gambling, and recreation industries",
                gdp: 1720.4
              }
            ]
          },
          {
            gdpCategory: "Accommodation and food services",
            children: [
              { gdpCategory: "Accommodation", gdp: 2507.9 },
              { gdpCategory: "Food services and drinking places", gdp: 8515.8 }
            ]
          }
        ]
      },
      {
        gdpCategory: "Other services (except government and government enterprises)",
        gdp: 9668.0
      },
      { gdpCategory: "Federal civilian government", gdp: 4971.6 },
      { gdpCategory: "Military", gdp: 1629.5 },
      { gdpCategory: "State and local government", gdp: 34276.8 }
    ]
  },
  California: {
    gdpCategory: "All industry total",
    children: [
      {
        gdpCategory: "Agriculture, forestry, fishing and hunting",
        children: [
          { gdpCategory: "Farms", gdp: 29169.4 },
          {
            gdpCategory: "Forestry, fishing, and related activities",
            gdp: 16161.1
          }
        ]
      },
      {
        gdpCategory: "Mining, quarrying, and oil and gas extraction",
        children: [
          { gdpCategory: "Oil and gas extraction", gdp: 7058.5 },
          { gdpCategory: "Mining (except oil and gas)", gdp: 3094.0 },
          { gdpCategory: "Support activities for mining", gdp: 1457.8 }
        ]
      },
      { gdpCategory: "Utilities", gdp: 52323.9 },
      { gdpCategory: "Construction", gdp: 140528.1 },
      {
        gdpCategory: "Manufacturing",
        children: [
          {
            gdpCategory: "Durable goods manufacturing",
            children: [
              { gdpCategory: "Wood product manufacturing", gdp: 4013.8 },
              {
                gdpCategory: "Nonmetallic mineral product manufacturing",
                gdp: 5723.7
              },
              { gdpCategory: "Primary metal manufacturing", gdp: 3332.8 },
              {
                gdpCategory: "Fabricated metal product manufacturing",
                gdp: 14349.4
              },
              { gdpCategory: "Machinery manufacturing", gdp: 16127.5 },
              {
                gdpCategory: "Computer and electronic product manufacturing",
                gdp: 136669.7
              },
              {
                gdpCategory: "Electrical equipment, appliance, and component manufacturing",
                gdp: 4768.2
              },
              {
                gdpCategory: "Motor vehicles, bodies and trailers, and parts manufacturing",
                gdp: 9824.6
              },
              {
                gdpCategory: "Other transportation equipment manufacturing",
                gdp: 20427.4
              },
              {
                gdpCategory: "Furniture and related product manufacturing",
                gdp: 2899.0
              },
              { gdpCategory: "Miscellaneous manufacturing", gdp: 17266.8 }
            ]
          },
          {
            gdpCategory: "Nondurable goods manufacturing",
            children: [
              {
                gdpCategory: "Food and beverage and tobacco product manufacturing",
                gdp: 31363.6
              },
              {
                gdpCategory: "Textile mills and textile product mills",
                gdp: 1255.8
              },
              {
                gdpCategory: "Apparel, leather, and allied product manufacturing",
                gdp: 3683.8
              },
              { gdpCategory: "Paper manufacturing", gdp: 3383.0 },
              {
                gdpCategory: "Printing and related support activities",
                gdp: 3547.5
              },
              {
                gdpCategory: "Petroleum and coal products manufacturing",
                gdp: 33649.1
              },
              { gdpCategory: "Chemical manufacturing", gdp: 79015.0 },
              {
                gdpCategory: "Plastics and rubber products manufacturing",
                gdp: 5746.1
              }
            ]
          }
        ]
      },
      { gdpCategory: "Wholesale trade", gdp: 200828.9 },
      { gdpCategory: "Retail trade", gdp: 218144.3 },
      {
        gdpCategory: "Transportation and warehousing",
        children: [
          { gdpCategory: "Air transportation", gdp: 19470.6 },
          { gdpCategory: "Rail transportation", gdp: 2108.3 },
          { gdpCategory: "Water transportation", gdp: 2147.9 },
          { gdpCategory: "Truck transportation", gdp: 31079.3 },
          {
            gdpCategory: "Transit and ground passenger transportation",
            gdp: 15304.6
          },
          { gdpCategory: "Pipeline transportation", gdp: 596.8 },
          {
            gdpCategory: "Other transportation and support activities",
            gdp: 33669.5
          },
          { gdpCategory: "Warehousing and storage", gdp: 17875.6 }
        ]
      },
      {
        gdpCategory: "Information",
        children: [
          {
            gdpCategory: "Publishing industries (except Internet)",
            gdp: 87512.7
          },
          {
            gdpCategory: "Motion picture and sound recording industries",
            gdp: 49703.1
          },
          {
            gdpCategory: "Broadcasting (except Internet) and telecommunications",
            gdp: 84183.0
          },
          {
            gdpCategory: "Data processing, hosting, and other information services",
            gdp: 163866.0
          }
        ]
      },
      {
        gdpCategory: "Finance, insurance, real estate, rental, and leasing",
        children: [
          {
            gdpCategory: "Finance and insurance",
            children: [
              {
                gdpCategory: "Monetary Authorities- central bank, credit intermediation, and related services",
                gdp: 85559.1
              },
              {
                gdpCategory: "Securities, commodity contracts, and other financial investments and related activities",
                gdp: 44952.7
              },
              {
                gdpCategory: "Insurance carriers and related activities",
                gdp: 45700.7
              },
              {
                gdpCategory: "Funds, trusts, and other financial vehicles",
                gdp: 3698.5
              }
            ]
          },
          {
            gdpCategory: "Real estate and rental and leasing",
            children: [
              { gdpCategory: "Real estate", gdp: 462137.8 },
              {
                gdpCategory: "Rental and leasing services and lessors of nonfinancial intangible assets",
                gdp: 32790.3
              }
            ]
          }
        ]
      },
      {
        gdpCategory: "Professional and business services",
        children: [
          {
            gdpCategory: "Professional, scientific, and technical services",
            children: [
              { gdpCategory: "Legal services", gdp: 46824.8 },
              {
                gdpCategory: "Computer systems design and related services",
                gdp: 90892.5
              },
              {
                gdpCategory: "Miscellaneous professional, scientific, and technical services",
                gdp: 209152.7
              }
            ]
          },
          {
            gdpCategory: "Management of companies and enterprises",
            gdp: 52038.9
          },
          {
            gdpCategory: "Administrative and support and waste management and remediation services",
            children: [
              {
                gdpCategory: "Administrative and support services",
                gdp: 106565.4
              },
              {
                gdpCategory: "Waste management and remediation services",
                gdp: 9249.8
              }
            ]
          }
        ]
      },
      {
        gdpCategory: "Educational services, health care, and social assistance",
        children: [
          { gdpCategory: "Educational services", gdp: 37694.8 },
          {
            gdpCategory: "Health care and social assistance",
            children: [
              { gdpCategory: "Ambulatory health care services", gdp: 121212.6 },
              { gdpCategory: "Hospitals", gdp: 58866.4 },
              {
                gdpCategory: "Nursing and residential care facilities",
                gdp: 19599.9
              },
              { gdpCategory: "Social assistance", gdp: 34391.0 }
            ]
          }
        ]
      },
      {
        gdpCategory: "Arts, entertainment, recreation, accommodation, and food services",
        children: [
          {
            gdpCategory: "Arts, entertainment, and recreation",
            children: [
              {
                gdpCategory: "Performing arts, spectator sports, museums, and related activities",
                gdp: 35234.0
              },
              {
                gdpCategory: "Amusement, gambling, and recreation industries",
                gdp: 14568.0
              }
            ]
          },
          {
            gdpCategory: "Accommodation and food services",
            children: [
              { gdpCategory: "Accommodation", gdp: 23546.0 },
              {
                gdpCategory: "Food services and drinking places",
                gdp: 85804.9
              }
            ]
          }
        ]
      },
      {
        gdpCategory: "Other services (except government and government enterprises)",
        gdp: 66440.2
      },
      { gdpCategory: "Federal civilian government", gdp: 54387.2 },
      { gdpCategory: "Military", gdp: 31448.6 },
      { gdpCategory: "State and local government", gdp: 295556.3 }
    ]
  },
  Nevada: {
    gdpCategory: "All industry total",
    children: [
      {
        gdpCategory: "Agriculture, forestry, fishing and hunting",
        children: [
          { gdpCategory: "Farms", gdp: 177.4 },
          {
            gdpCategory: "Forestry, fishing, and related activities",
            gdp: 87.1
          }
        ]
      },
      {
        gdpCategory: "Mining, quarrying, and oil and gas extraction",
        children: [
          { gdpCategory: "Oil and gas extraction", gdp: 3.2 },
          { gdpCategory: "Mining (except oil and gas)", gdp: 4266.2 },
          { gdpCategory: "Support activities for mining", gdp: 350.7 }
        ]
      },
      { gdpCategory: "Utilities", gdp: 3518.8 },
      { gdpCategory: "Construction", gdp: 17894.9 },
      {
        gdpCategory: "Manufacturing",
        children: [
          {
            gdpCategory: "Durable goods manufacturing",
            children: [
              { gdpCategory: "Wood product manufacturing", gdp: 172.4 },
              {
                gdpCategory: "Nonmetallic mineral product manufacturing",
                gdp: 702.4
              },
              { gdpCategory: "Primary metal manufacturing", gdp: 106.8 },
              {
                gdpCategory: "Fabricated metal product manufacturing",
                gdp: 897.6
              },
              { gdpCategory: "Machinery manufacturing", gdp: 346.7 },
              {
                gdpCategory: "Computer and electronic product manufacturing",
                gdp: 546.7
              },
              {
                gdpCategory: "Electrical equipment, appliance, and component manufacturing",
                gdp: 1550.5
              },
              {
                gdpCategory: "Motor vehicles, bodies and trailers, and parts manufacturing",
                gdp: 72.7
              },
              {
                gdpCategory: "Other transportation equipment manufacturing",
                gdp: 146.6
              },
              {
                gdpCategory: "Furniture and related product manufacturing",
                gdp: 155.2
              },
              { gdpCategory: "Miscellaneous manufacturing", gdp: 2393.6 }
            ]
          },
          {
            gdpCategory: "Nondurable goods manufacturing",
            children: [
              {
                gdpCategory: "Food and beverage and tobacco product manufacturing",
                gdp: 981.3
              },
              {
                gdpCategory: "Textile mills and textile product mills",
                gdp: 55.9
              },
              {
                gdpCategory: "Apparel, leather, and allied product manufacturing",
                gdp: 7.3
              },
              { gdpCategory: "Paper manufacturing", gdp: 188.5 },
              {
                gdpCategory: "Printing and related support activities",
                gdp: 472.9
              },
              {
                gdpCategory: "Petroleum and coal products manufacturing",
                gdp: 154.9
              },
              { gdpCategory: "Chemical manufacturing", gdp: 593.5 },
              {
                gdpCategory: "Plastics and rubber products manufacturing",
                gdp: 439.5
              }
            ]
          }
        ]
      },
      { gdpCategory: "Wholesale trade", gdp: 9441.4 },
      { gdpCategory: "Retail trade", gdp: 16527.8 },
      {
        gdpCategory: "Transportation and warehousing",
        children: [
          { gdpCategory: "Air transportation", gdp: 3720.4 },
          { gdpCategory: "Rail transportation", gdp: 273.9 },
          { gdpCategory: "Water transportation", gdp: 3.2 },
          { gdpCategory: "Truck transportation", gdp: 1714.5 },
          {
            gdpCategory: "Transit and ground passenger transportation",
            gdp: 764.7
          },
          { gdpCategory: "Pipeline transportation", gdp: 17.4 },
          {
            gdpCategory: "Other transportation and support activities",
            gdp: 1979.3
          },
          { gdpCategory: "Warehousing and storage", gdp: 2440.7 }
        ]
      },
      {
        gdpCategory: "Information",
        children: [
          {
            gdpCategory: "Publishing industries (except Internet)",
            gdp: 1202.1
          },
          {
            gdpCategory: "Motion picture and sound recording industries",
            gdp: 439.6
          },
          {
            gdpCategory: "Broadcasting (except Internet) and telecommunications",
            gdp: 2206.7
          },
          {
            gdpCategory: "Data processing, hosting, and other information services",
            gdp: 2293.3
          }
        ]
      },
      {
        gdpCategory: "Finance, insurance, real estate, rental, and leasing",
        children: [
          {
            gdpCategory: "Finance and insurance",
            children: [
              {
                gdpCategory: "Monetary Authorities- central bank, credit intermediation, and related services",
                gdp: 6365.7
              },
              {
                gdpCategory: "Securities, commodity contracts, and other financial investments and related activities",
                gdp: 955.3
              },
              {
                gdpCategory: "Insurance carriers and related activities",
                gdp: 5925.5
              },
              {
                gdpCategory: "Funds, trusts, and other financial vehicles",
                gdp: 74.0
              }
            ]
          },
          {
            gdpCategory: "Real estate and rental and leasing",
            children: [
              { gdpCategory: "Real estate", gdp: 28328.0 },
              {
                gdpCategory: "Rental and leasing services and lessors of nonfinancial intangible assets",
                gdp: 3623.2
              }
            ]
          }
        ]
      },
      {
        gdpCategory: "Professional and business services",
        children: [
          {
            gdpCategory: "Professional, scientific, and technical services",
            children: [
              { gdpCategory: "Legal services", gdp: 2226.8 },
              {
                gdpCategory: "Computer systems design and related services",
                gdp: 1849.9
              },
              {
                gdpCategory: "Miscellaneous professional, scientific, and technical services",
                gdp: 7056.2
              }
            ]
          },
          {
            gdpCategory: "Management of companies and enterprises",
            gdp: 6311.7
          },
          {
            gdpCategory: "Administrative and support and waste management and remediation services",
            children: [
              {
                gdpCategory: "Administrative and support services",
                gdp: 7205.9
              },
              {
                gdpCategory: "Waste management and remediation services",
                gdp: 648.9
              }
            ]
          }
        ]
      },
      {
        gdpCategory: "Educational services, health care, and social assistance",
        children: [
          { gdpCategory: "Educational services", gdp: 1261.6 },
          {
            gdpCategory: "Health care and social assistance",
            children: [
              { gdpCategory: "Ambulatory health care services", gdp: 7577.6 },
              { gdpCategory: "Hospitals", gdp: 3911.7 },
              {
                gdpCategory: "Nursing and residential care facilities",
                gdp: 873.5
              },
              { gdpCategory: "Social assistance", gdp: 982.7 }
            ]
          }
        ]
      },
      {
        gdpCategory: "Arts, entertainment, recreation, accommodation, and food services",
        children: [
          {
            gdpCategory: "Arts, entertainment, and recreation",
            children: [
              {
                gdpCategory: "Performing arts, spectator sports, museums, and related activities",
                gdp: 3257.1
              },
              {
                gdpCategory: "Amusement, gambling, and recreation industries",
                gdp: 2551.8
              }
            ]
          },
          {
            gdpCategory: "Accommodation and food services",
            children: [
              { gdpCategory: "Accommodation", gdp: 17995.0 },
              { gdpCategory: "Food services and drinking places", gdp: 8999.5 }
            ]
          }
        ]
      },
      {
        gdpCategory: "Other services (except government and government enterprises)",
        gdp: 4120.0
      },
      { gdpCategory: "Federal civilian government", gdp: 3292.5 },
      { gdpCategory: "Military", gdp: 2022.2 },
      { gdpCategory: "State and local government", gdp: 16213.9 }
    ]
  },
  Louisiana: {
    gdpCategory: "All industry total",
    children: [
      {
        gdpCategory: "Agriculture, forestry, fishing and hunting",
        children: [
          { gdpCategory: "Farms", gdp: 1743.2 },
          {
            gdpCategory: "Forestry, fishing, and related activities",
            gdp: 581.4
          }
        ]
      },
      {
        gdpCategory: "Mining, quarrying, and oil and gas extraction",
        children: [
          { gdpCategory: "Oil and gas extraction", gdp: 9412.1 },
          { gdpCategory: "Mining (except oil and gas)", gdp: 516.6 },
          { gdpCategory: "Support activities for mining", gdp: 3773.0 }
        ]
      },
      { gdpCategory: "Utilities", gdp: 6683.9 },
      { gdpCategory: "Construction", gdp: 16324.2 },
      {
        gdpCategory: "Manufacturing",
        children: [
          {
            gdpCategory: "Durable goods manufacturing",
            children: [
              { gdpCategory: "Wood product manufacturing", gdp: 2050.7 },
              {
                gdpCategory: "Nonmetallic mineral product manufacturing",
                gdp: 728.0
              },
              { gdpCategory: "Primary metal manufacturing", gdp: 495.7 },
              {
                gdpCategory: "Fabricated metal product manufacturing",
                gdp: 1721.6
              },
              { gdpCategory: "Machinery manufacturing", gdp: 1504.4 },
              {
                gdpCategory: "Computer and electronic product manufacturing",
                gdp: 385.5
              },
              {
                gdpCategory: "Electrical equipment, appliance, and component manufacturing",
                gdp: 113.0
              },
              {
                gdpCategory: "Motor vehicles, bodies and trailers, and parts manufacturing",
                gdp: 55.0
              },
              {
                gdpCategory: "Other transportation equipment manufacturing",
                gdp: 1175.0
              },
              {
                gdpCategory: "Furniture and related product manufacturing",
                gdp: 85.2
              },
              { gdpCategory: "Miscellaneous manufacturing", gdp: 477.4 }
            ]
          },
          {
            gdpCategory: "Nondurable goods manufacturing",
            children: [
              {
                gdpCategory: "Food and beverage and tobacco product manufacturing",
                gdp: 2408.1
              },
              {
                gdpCategory: "Textile mills and textile product mills",
                gdp: 79.8
              },
              {
                gdpCategory: "Apparel, leather, and allied product manufacturing",
                gdp: 20.4
              },
              { gdpCategory: "Paper manufacturing", gdp: 2090.1 },
              {
                gdpCategory: "Printing and related support activities",
                gdp: 190.2
              },
              {
                gdpCategory: "Petroleum and coal products manufacturing",
                gdp: 17623.9
              },
              { gdpCategory: "Chemical manufacturing", gdp: 19863.3 },
              {
                gdpCategory: "Plastics and rubber products manufacturing",
                gdp: 764.3
              }
            ]
          }
        ]
      },
      { gdpCategory: "Wholesale trade", gdp: 15906.3 },
      { gdpCategory: "Retail trade", gdp: 21724.0 },
      {
        gdpCategory: "Transportation and warehousing",
        children: [
          { gdpCategory: "Air transportation", gdp: 869.9 },
          { gdpCategory: "Rail transportation", gdp: 773.1 },
          { gdpCategory: "Water transportation", gdp: 1732.9 },
          { gdpCategory: "Truck transportation", gdp: 2692.4 },
          {
            gdpCategory: "Transit and ground passenger transportation",
            gdp: 253.1
          },
          { gdpCategory: "Pipeline transportation", gdp: 850.2 },
          {
            gdpCategory: "Other transportation and support activities",
            gdp: 3764.8
          },
          { gdpCategory: "Warehousing and storage", gdp: 706.4 }
        ]
      },
      {
        gdpCategory: "Information",
        children: [
          {
            gdpCategory: "Publishing industries (except Internet)",
            gdp: 475.3
          },
          {
            gdpCategory: "Motion picture and sound recording industries",
            gdp: 1010.4
          },
          {
            gdpCategory: "Broadcasting (except Internet) and telecommunications",
            gdp: 3132.9
          },
          {
            gdpCategory: "Data processing, hosting, and other information services",
            gdp: 878.1
          }
        ]
      },
      {
        gdpCategory: "Finance, insurance, real estate, rental, and leasing",
        children: [
          {
            gdpCategory: "Finance and insurance",
            children: [
              {
                gdpCategory: "Monetary Authorities- central bank, credit intermediation, and related services",
                gdp: 4708.8
              },
              {
                gdpCategory: "Securities, commodity contracts, and other financial investments and related activities",
                gdp: 915.9
              },
              {
                gdpCategory: "Insurance carriers and related activities",
                gdp: 7140.5
              },
              {
                gdpCategory: "Funds, trusts, and other financial vehicles",
                gdp: 175.4
              }
            ]
          },
          {
            gdpCategory: "Real estate and rental and leasing",
            children: [
              { gdpCategory: "Real estate", gdp: 25652.5 },
              {
                gdpCategory: "Rental and leasing services and lessors of nonfinancial intangible assets",
                gdp: 6796.8
              }
            ]
          }
        ]
      },
      {
        gdpCategory: "Professional and business services",
        children: [
          {
            gdpCategory: "Professional, scientific, and technical services",
            children: [
              { gdpCategory: "Legal services", gdp: 3808.8 },
              {
                gdpCategory: "Computer systems design and related services",
                gdp: 1427.0
              },
              {
                gdpCategory: "Miscellaneous professional, scientific, and technical services",
                gdp: 7978.1
              }
            ]
          },
          {
            gdpCategory: "Management of companies and enterprises",
            gdp: 2937.3
          },
          {
            gdpCategory: "Administrative and support and waste management and remediation services",
            children: [
              {
                gdpCategory: "Administrative and support services",
                gdp: 6915.8
              },
              {
                gdpCategory: "Waste management and remediation services",
                gdp: 1333.8
              }
            ]
          }
        ]
      },
      {
        gdpCategory: "Educational services, health care, and social assistance",
        children: [
          { gdpCategory: "Educational services", gdp: 3067.4 },
          {
            gdpCategory: "Health care and social assistance",
            children: [
              { gdpCategory: "Ambulatory health care services", gdp: 10789.7 },
              { gdpCategory: "Hospitals", gdp: 8323.5 },
              {
                gdpCategory: "Nursing and residential care facilities",
                gdp: 1948.5
              },
              { gdpCategory: "Social assistance", gdp: 1786.0 }
            ]
          }
        ]
      },
      {
        gdpCategory: "Arts, entertainment, recreation, accommodation, and food services",
        children: [
          {
            gdpCategory: "Arts, entertainment, and recreation",
            children: [
              {
                gdpCategory: "Performing arts, spectator sports, museums, and related activities",
                gdp: 1598.0
              },
              {
                gdpCategory: "Amusement, gambling, and recreation industries",
                gdp: 1583.8
              }
            ]
          },
          {
            gdpCategory: "Accommodation and food services",
            children: [
              { gdpCategory: "Accommodation", gdp: 2567.1 },
              { gdpCategory: "Food services and drinking places", gdp: 6999.7 }
            ]
          }
        ]
      },
      {
        gdpCategory: "Other services (except government and government enterprises)",
        gdp: 6395.3
      },
      { gdpCategory: "Federal civilian government", gdp: 4940.5 },
      { gdpCategory: "Military", gdp: 2802.2 },
      { gdpCategory: "State and local government", gdp: 23723.3 }
    ]
  },
  Texas: {
    gdpCategory: "All industry total",
    children: [
      {
        gdpCategory: "Agriculture, forestry, fishing and hunting",
        children: [
          { gdpCategory: "Farms", gdp: 9110.4 },
          {
            gdpCategory: "Forestry, fishing, and related activities",
            gdp: 2107.0
          }
        ]
      },
      {
        gdpCategory: "Mining, quarrying, and oil and gas extraction",
        children: [
          { gdpCategory: "Oil and gas extraction", gdp: 201659.1 },
          { gdpCategory: "Mining (except oil and gas)", gdp: 5112.3 },
          { gdpCategory: "Support activities for mining", gdp: 28872.0 }
        ]
      },
      { gdpCategory: "Utilities", gdp: 41395.5 },
      { gdpCategory: "Construction", gdp: 110223.3 },
      {
        gdpCategory: "Manufacturing",
        children: [
          {
            gdpCategory: "Durable goods manufacturing",
            children: [
              { gdpCategory: "Wood product manufacturing", gdp: 3322.7 },
              {
                gdpCategory: "Nonmetallic mineral product manufacturing",
                gdp: 7434.8
              },
              { gdpCategory: "Primary metal manufacturing", gdp: 6477.9 },
              {
                gdpCategory: "Fabricated metal product manufacturing",
                gdp: 14655.5
              },
              { gdpCategory: "Machinery manufacturing", gdp: 17752.6 },
              {
                gdpCategory: "Computer and electronic product manufacturing",
                gdp: 24812.1
              },
              {
                gdpCategory: "Electrical equipment, appliance, and component manufacturing",
                gdp: 3125.5
              },
              {
                gdpCategory: "Motor vehicles, bodies and trailers, and parts manufacturing",
                gdp: 12897.6
              },
              {
                gdpCategory: "Other transportation equipment manufacturing",
                gdp: 17055.6
              },
              {
                gdpCategory: "Furniture and related product manufacturing",
                gdp: 2041.4
              },
              { gdpCategory: "Miscellaneous manufacturing", gdp: 4497.4 }
            ]
          },
          {
            gdpCategory: "Nondurable goods manufacturing",
            children: [
              {
                gdpCategory: "Food and beverage and tobacco product manufacturing",
                gdp: 19416.7
              },
              {
                gdpCategory: "Textile mills and textile product mills",
                gdp: 536.1
              },
              {
                gdpCategory: "Apparel, leather, and allied product manufacturing",
                gdp: 631.1
              },
              { gdpCategory: "Paper manufacturing", gdp: 3518.7 },
              {
                gdpCategory: "Printing and related support activities",
                gdp: 2234.4
              },
              {
                gdpCategory: "Petroleum and coal products manufacturing",
                gdp: 56590.2
              },
              { gdpCategory: "Chemical manufacturing", gdp: 66257.2 },
              {
                gdpCategory: "Plastics and rubber products manufacturing",
                gdp: 5730.8
              }
            ]
          }
        ]
      },
      { gdpCategory: "Wholesale trade", gdp: 184925.4 },
      { gdpCategory: "Retail trade", gdp: 148017.3 },
      {
        gdpCategory: "Transportation and warehousing",
        children: [
          { gdpCategory: "Air transportation", gdp: 16202.2 },
          { gdpCategory: "Rail transportation", gdp: 4422.7 },
          { gdpCategory: "Water transportation", gdp: 812.7 },
          { gdpCategory: "Truck transportation", gdp: 27986.9 },
          {
            gdpCategory: "Transit and ground passenger transportation",
            gdp: 1467.5
          },
          { gdpCategory: "Pipeline transportation", gdp: 12558.9 },
          {
            gdpCategory: "Other transportation and support activities",
            gdp: 20486.8
          },
          { gdpCategory: "Warehousing and storage", gdp: 9687.8 }
        ]
      },
      {
        gdpCategory: "Information",
        children: [
          {
            gdpCategory: "Publishing industries (except Internet)",
            gdp: 14720.8
          },
          {
            gdpCategory: "Motion picture and sound recording industries",
            gdp: 2008.2
          },
          {
            gdpCategory: "Broadcasting (except Internet) and telecommunications",
            gdp: 56280.8
          },
          {
            gdpCategory: "Data processing, hosting, and other information services",
            gdp: 21374.2
          }
        ]
      },
      {
        gdpCategory: "Finance, insurance, real estate, rental, and leasing",
        children: [
          {
            gdpCategory: "Finance and insurance",
            children: [
              {
                gdpCategory: "Monetary Authorities- central bank, credit intermediation, and related services",
                gdp: 55794.0
              },
              {
                gdpCategory: "Securities, commodity contracts, and other financial investments and related activities",
                gdp: 21951.2
              },
              {
                gdpCategory: "Insurance carriers and related activities",
                gdp: 51804.2
              },
              {
                gdpCategory: "Funds, trusts, and other financial vehicles",
                gdp: 8399.1
              }
            ]
          },
          {
            gdpCategory: "Real estate and rental and leasing",
            children: [
              { gdpCategory: "Real estate", gdp: 255579.4 },
              {
                gdpCategory: "Rental and leasing services and lessors of nonfinancial intangible assets",
                gdp: 37276.4
              }
            ]
          }
        ]
      },
      {
        gdpCategory: "Professional and business services",
        children: [
          {
            gdpCategory: "Professional, scientific, and technical services",
            children: [
              { gdpCategory: "Legal services", gdp: 25512.6 },
              {
                gdpCategory: "Computer systems design and related services",
                gdp: 47266.6
              },
              {
                gdpCategory: "Miscellaneous professional, scientific, and technical services",
                gdp: 98170.9
              }
            ]
          },
          {
            gdpCategory: "Management of companies and enterprises",
            gdp: 35350.6
          },
          {
            gdpCategory: "Administrative and support and waste management and remediation services",
            children: [
              {
                gdpCategory: "Administrative and support services",
                gdp: 73650.3
              },
              {
                gdpCategory: "Waste management and remediation services",
                gdp: 6564.2
              }
            ]
          }
        ]
      },
      {
        gdpCategory: "Educational services, health care, and social assistance",
        children: [
          { gdpCategory: "Educational services", gdp: 16727.5 },
          {
            gdpCategory: "Health care and social assistance",
            children: [
              { gdpCategory: "Ambulatory health care services", gdp: 75410.7 },
              { gdpCategory: "Hospitals", gdp: 38851.6 },
              {
                gdpCategory: "Nursing and residential care facilities",
                gdp: 9430.1
              },
              { gdpCategory: "Social assistance", gdp: 8875.5 }
            ]
          }
        ]
      },
      {
        gdpCategory: "Arts, entertainment, recreation, accommodation, and food services",
        children: [
          {
            gdpCategory: "Arts, entertainment, and recreation",
            children: [
              {
                gdpCategory: "Performing arts, spectator sports, museums, and related activities",
                gdp: 6454.3
              },
              {
                gdpCategory: "Amusement, gambling, and recreation industries",
                gdp: 6299.8
              }
            ]
          },
          {
            gdpCategory: "Accommodation and food services",
            children: [
              { gdpCategory: "Accommodation", gdp: 14550.0 },
              {
                gdpCategory: "Food services and drinking places",
                gdp: 51699.6
              }
            ]
          }
        ]
      },
      {
        gdpCategory: "Other services (except government and government enterprises)",
        gdp: 45692.7
      },
      { gdpCategory: "Federal civilian government", gdp: 35173.9 },
      { gdpCategory: "Military", gdp: 18137.3 },
      { gdpCategory: "State and local government", gdp: 169094.4 }
    ]
  },
  Michigan: {
    gdpCategory: "All industry total",
    children: [
      {
        gdpCategory: "Agriculture, forestry, fishing and hunting",
        children: [
          { gdpCategory: "Farms", gdp: 5542.2 },
          {
            gdpCategory: "Forestry, fishing, and related activities",
            gdp: 691.4
          }
        ]
      },
      {
        gdpCategory: "Mining, quarrying, and oil and gas extraction",
        children: [
          { gdpCategory: "Oil and gas extraction", gdp: 179.6 },
          { gdpCategory: "Mining (except oil and gas)", gdp: 1527.0 },
          { gdpCategory: "Support activities for mining", gdp: 211.1 }
        ]
      },
      { gdpCategory: "Utilities", gdp: 12553.1 },
      { gdpCategory: "Construction", gdp: 23474.0 },
      {
        gdpCategory: "Manufacturing",
        children: [
          {
            gdpCategory: "Durable goods manufacturing",
            children: [
              { gdpCategory: "Wood product manufacturing", gdp: 1704.2 },
              {
                gdpCategory: "Nonmetallic mineral product manufacturing",
                gdp: 2396.8
              },
              { gdpCategory: "Primary metal manufacturing", gdp: 2835.0 },
              {
                gdpCategory: "Fabricated metal product manufacturing",
                gdp: 7296.3
              },
              { gdpCategory: "Machinery manufacturing", gdp: 9394.2 },
              {
                gdpCategory: "Computer and electronic product manufacturing",
                gdp: 2980.6
              },
              {
                gdpCategory: "Electrical equipment, appliance, and component manufacturing",
                gdp: 2254.2
              },
              {
                gdpCategory: "Motor vehicles, bodies and trailers, and parts manufacturing",
                gdp: 36670.8
              },
              {
                gdpCategory: "Other transportation equipment manufacturing",
                gdp: 1810.0
              },
              {
                gdpCategory: "Furniture and related product manufacturing",
                gdp: 2233.8
              },
              { gdpCategory: "Miscellaneous manufacturing", gdp: 5471.7 }
            ]
          },
          {
            gdpCategory: "Nondurable goods manufacturing",
            children: [
              {
                gdpCategory: "Food and beverage and tobacco product manufacturing",
                gdp: 6065.0
              },
              {
                gdpCategory: "Textile mills and textile product mills",
                gdp: 200.1
              },
              {
                gdpCategory: "Apparel, leather, and allied product manufacturing",
                gdp: 263.8
              },
              { gdpCategory: "Paper manufacturing", gdp: 1672.2 },
              {
                gdpCategory: "Printing and related support activities",
                gdp: 1152.1
              },
              {
                gdpCategory: "Petroleum and coal products manufacturing",
                gdp: 1769.4
              },
              { gdpCategory: "Chemical manufacturing", gdp: 11739.3 },
              {
                gdpCategory: "Plastics and rubber products manufacturing",
                gdp: 4053.5
              }
            ]
          }
        ]
      },
      { gdpCategory: "Wholesale trade", gdp: 41919.6 },
      { gdpCategory: "Retail trade", gdp: 44513.7 },
      {
        gdpCategory: "Transportation and warehousing",
        children: [
          { gdpCategory: "Air transportation", gdp: 3371.9 },
          { gdpCategory: "Rail transportation", gdp: 475.0 },
          { gdpCategory: "Water transportation", gdp: 215.1 },
          { gdpCategory: "Truck transportation", gdp: 7910.8 },
          {
            gdpCategory: "Transit and ground passenger transportation",
            gdp: 639.1
          },
          { gdpCategory: "Pipeline transportation", gdp: 913.8 },
          {
            gdpCategory: "Other transportation and support activities",
            gdp: 3906.0
          },
          { gdpCategory: "Warehousing and storage", gdp: 2596.3 }
        ]
      },
      {
        gdpCategory: "Information",
        children: [
          {
            gdpCategory: "Publishing industries (except Internet)",
            gdp: 3606.3
          },
          {
            gdpCategory: "Motion picture and sound recording industries",
            gdp: 439.1
          },
          {
            gdpCategory: "Broadcasting (except Internet) and telecommunications",
            gdp: 6513.1
          },
          {
            gdpCategory: "Data processing, hosting, and other information services",
            gdp: 5651.9
          }
        ]
      },
      {
        gdpCategory: "Finance, insurance, real estate, rental, and leasing",
        children: [
          {
            gdpCategory: "Finance and insurance",
            children: [
              {
                gdpCategory: "Monetary Authorities- central bank, credit intermediation, and related services",
                gdp: 12209.4
              },
              {
                gdpCategory: "Securities, commodity contracts, and other financial investments and related activities",
                gdp: 3156.4
              },
              {
                gdpCategory: "Insurance carriers and related activities",
                gdp: 15827.9
              },
              {
                gdpCategory: "Funds, trusts, and other financial vehicles",
                gdp: 339.1
              }
            ]
          },
          {
            gdpCategory: "Real estate and rental and leasing",
            children: [
              { gdpCategory: "Real estate", gdp: 73675.2 },
              {
                gdpCategory: "Rental and leasing services and lessors of nonfinancial intangible assets",
                gdp: 10312.9
              }
            ]
          }
        ]
      },
      {
        gdpCategory: "Professional and business services",
        children: [
          {
            gdpCategory: "Professional, scientific, and technical services",
            children: [
              { gdpCategory: "Legal services", gdp: 6256.7 },
              {
                gdpCategory: "Computer systems design and related services",
                gdp: 7372.2
              },
              {
                gdpCategory: "Miscellaneous professional, scientific, and technical services",
                gdp: 35356.3
              }
            ]
          },
          {
            gdpCategory: "Management of companies and enterprises",
            gdp: 12946.5
          },
          {
            gdpCategory: "Administrative and support and waste management and remediation services",
            children: [
              {
                gdpCategory: "Administrative and support services",
                gdp: 18911.1
              },
              {
                gdpCategory: "Waste management and remediation services",
                gdp: 1850.3
              }
            ]
          }
        ]
      },
      {
        gdpCategory: "Educational services, health care, and social assistance",
        children: [
          { gdpCategory: "Educational services", gdp: 4547.8 },
          {
            gdpCategory: "Health care and social assistance",
            children: [
              { gdpCategory: "Ambulatory health care services", gdp: 21277.5 },
              { gdpCategory: "Hospitals", gdp: 21194.2 },
              {
                gdpCategory: "Nursing and residential care facilities",
                gdp: 4751.7
              },
              { gdpCategory: "Social assistance", gdp: 3595.2 }
            ]
          }
        ]
      },
      {
        gdpCategory: "Arts, entertainment, recreation, accommodation, and food services",
        children: [
          {
            gdpCategory: "Arts, entertainment, and recreation",
            children: [
              {
                gdpCategory: "Performing arts, spectator sports, museums, and related activities",
                gdp: 2480.2
              },
              {
                gdpCategory: "Amusement, gambling, and recreation industries",
                gdp: 2399.7
              }
            ]
          },
          {
            gdpCategory: "Accommodation and food services",
            children: [
              { gdpCategory: "Accommodation", gdp: 4919.2 },
              {
                gdpCategory: "Food services and drinking places",
                gdp: 13109.5
              }
            ]
          }
        ]
      },
      {
        gdpCategory: "Other services (except government and government enterprises)",
        gdp: 14771.8
      },
      { gdpCategory: "Federal civilian government", gdp: 9476.3 },
      { gdpCategory: "Military", gdp: 1972.2 },
      { gdpCategory: "State and local government", gdp: 51039.9 }
    ]
  },
  Florida: {
    gdpCategory: "All industry total",
    children: [
      {
        gdpCategory: "Agriculture, forestry, fishing and hunting",
        children: [
          { gdpCategory: "Farms", gdp: 5071.9 },
          {
            gdpCategory: "Forestry, fishing, and related activities",
            gdp: 2658.7
          }
        ]
      },
      {
        gdpCategory: "Mining, quarrying, and oil and gas extraction",
        children: [
          { gdpCategory: "Oil and gas extraction", gdp: 50.0 },
          { gdpCategory: "Mining (except oil and gas)", gdp: 1246.3 },
          { gdpCategory: "Support activities for mining", gdp: 65.8 }
        ]
      },
      { gdpCategory: "Utilities", gdp: 26137.1 },
      { gdpCategory: "Construction", gdp: 77488.9 },
      {
        gdpCategory: "Manufacturing",
        children: [
          {
            gdpCategory: "Durable goods manufacturing",
            children: [
              { gdpCategory: "Wood product manufacturing", gdp: 2256.7 },
              {
                gdpCategory: "Nonmetallic mineral product manufacturing",
                gdp: 4255.6
              },
              { gdpCategory: "Primary metal manufacturing", gdp: 2116.8 },
              {
                gdpCategory: "Fabricated metal product manufacturing",
                gdp: 4622.0
              },
              { gdpCategory: "Machinery manufacturing", gdp: 5542.3 },
              {
                gdpCategory: "Computer and electronic product manufacturing",
                gdp: 8405.8
              },
              {
                gdpCategory: "Electrical equipment, appliance, and component manufacturing",
                gdp: 1526.2
              },
              {
                gdpCategory: "Motor vehicles, bodies and trailers, and parts manufacturing",
                gdp: 806.0
              },
              {
                gdpCategory: "Other transportation equipment manufacturing",
                gdp: 8482.1
              },
              {
                gdpCategory: "Furniture and related product manufacturing",
                gdp: 920.7
              },
              { gdpCategory: "Miscellaneous manufacturing", gdp: 5717.0 }
            ]
          },
          {
            gdpCategory: "Nondurable goods manufacturing",
            children: [
              {
                gdpCategory: "Food and beverage and tobacco product manufacturing",
                gdp: 7196.0
              },
              {
                gdpCategory: "Textile mills and textile product mills",
                gdp: 393.2
              },
              {
                gdpCategory: "Apparel, leather, and allied product manufacturing",
                gdp: 264.0
              },
              { gdpCategory: "Paper manufacturing", gdp: 1778.0 },
              {
                gdpCategory: "Printing and related support activities",
                gdp: 1886.1
              },
              {
                gdpCategory: "Petroleum and coal products manufacturing",
                gdp: 2119.9
              },
              { gdpCategory: "Chemical manufacturing", gdp: 11401.6 },
              {
                gdpCategory: "Plastics and rubber products manufacturing",
                gdp: 1762.4
              }
            ]
          }
        ]
      },
      { gdpCategory: "Wholesale trade", gdp: 98186.7 },
      { gdpCategory: "Retail trade", gdp: 115097.4 },
      {
        gdpCategory: "Transportation and warehousing",
        children: [
          { gdpCategory: "Air transportation", gdp: 15270.8 },
          { gdpCategory: "Rail transportation", gdp: 890.1 },
          { gdpCategory: "Water transportation", gdp: 6027.7 },
          { gdpCategory: "Truck transportation", gdp: 12831.5 },
          {
            gdpCategory: "Transit and ground passenger transportation",
            gdp: 1785.1
          },
          { gdpCategory: "Pipeline transportation", gdp: 116.9 },
          {
            gdpCategory: "Other transportation and support activities",
            gdp: 14949.7
          },
          { gdpCategory: "Warehousing and storage", gdp: 5627.1 }
        ]
      },
      {
        gdpCategory: "Information",
        children: [
          {
            gdpCategory: "Publishing industries (except Internet)",
            gdp: 11012.7
          },
          {
            gdpCategory: "Motion picture and sound recording industries",
            gdp: 2090.2
          },
          {
            gdpCategory: "Broadcasting (except Internet) and telecommunications",
            gdp: 24874.2
          },
          {
            gdpCategory: "Data processing, hosting, and other information services",
            gdp: 13355.8
          }
        ]
      },
      {
        gdpCategory: "Finance, insurance, real estate, rental, and leasing",
        children: [
          {
            gdpCategory: "Finance and insurance",
            children: [
              {
                gdpCategory: "Monetary Authorities- central bank, credit intermediation, and related services",
                gdp: 23500.5
              },
              {
                gdpCategory: "Securities, commodity contracts, and other financial investments and related activities",
                gdp: 15955.7
              },
              {
                gdpCategory: "Insurance carriers and related activities",
                gdp: 43421.0
              },
              {
                gdpCategory: "Funds, trusts, and other financial vehicles",
                gdp: 1076.8
              }
            ]
          },
          {
            gdpCategory: "Real estate and rental and leasing",
            children: [
              { gdpCategory: "Real estate", gdp: 243638.6 },
              {
                gdpCategory: "Rental and leasing services and lessors of nonfinancial intangible assets",
                gdp: 22905.4
              }
            ]
          }
        ]
      },
      {
        gdpCategory: "Professional and business services",
        children: [
          {
            gdpCategory: "Professional, scientific, and technical services",
            children: [
              { gdpCategory: "Legal services", gdp: 25320.6 },
              {
                gdpCategory: "Computer systems design and related services",
                gdp: 20770.7
              },
              {
                gdpCategory: "Miscellaneous professional, scientific, and technical services",
                gdp: 69143.8
              }
            ]
          },
          {
            gdpCategory: "Management of companies and enterprises",
            gdp: 22668.6
          },
          {
            gdpCategory: "Administrative and support and waste management and remediation services",
            children: [
              {
                gdpCategory: "Administrative and support services",
                gdp: 56026.2
              },
              {
                gdpCategory: "Waste management and remediation services",
                gdp: 3938.3
              }
            ]
          }
        ]
      },
      {
        gdpCategory: "Educational services, health care, and social assistance",
        children: [
          { gdpCategory: "Educational services", gdp: 12991.0 },
          {
            gdpCategory: "Health care and social assistance",
            children: [
              { gdpCategory: "Ambulatory health care services", gdp: 62069.8 },
              { gdpCategory: "Hospitals", gdp: 33537.8 },
              {
                gdpCategory: "Nursing and residential care facilities",
                gdp: 9729.2
              },
              { gdpCategory: "Social assistance", gdp: 6810.5 }
            ]
          }
        ]
      },
      {
        gdpCategory: "Arts, entertainment, recreation, accommodation, and food services",
        children: [
          {
            gdpCategory: "Arts, entertainment, and recreation",
            children: [
              {
                gdpCategory: "Performing arts, spectator sports, museums, and related activities",
                gdp: 8984.7
              },
              {
                gdpCategory: "Amusement, gambling, and recreation industries",
                gdp: 12607.5
              }
            ]
          },
          {
            gdpCategory: "Accommodation and food services",
            children: [
              { gdpCategory: "Accommodation", gdp: 21095.0 },
              {
                gdpCategory: "Food services and drinking places",
                gdp: 44403.4
              }
            ]
          }
        ]
      },
      {
        gdpCategory: "Other services (except government and government enterprises)",
        gdp: 36067.6
      },
      { gdpCategory: "Federal civilian government", gdp: 24596.1 },
      { gdpCategory: "Military", gdp: 13462.4 },
      { gdpCategory: "State and local government", gdp: 98056.8 }
    ]
  },
  "North Dakota": {
    gdpCategory: "All industry total",
    children: [
      {
        gdpCategory: "Agriculture, forestry, fishing and hunting",
        children: [
          { gdpCategory: "Farms", gdp: 6367.4 },
          {
            gdpCategory: "Forestry, fishing, and related activities",
            gdp: 254.5
          }
        ]
      },
      {
        gdpCategory: "Mining, quarrying, and oil and gas extraction",
        children: [
          { gdpCategory: "Oil and gas extraction", gdp: 8992.3 },
          { gdpCategory: "Mining (except oil and gas)", gdp: 640.9 },
          { gdpCategory: "Support activities for mining", gdp: 3351.9 }
        ]
      },
      { gdpCategory: "Utilities", gdp: 1674.8 },
      { gdpCategory: "Construction", gdp: 3285.0 },
      {
        gdpCategory: "Manufacturing",
        children: [
          {
            gdpCategory: "Durable goods manufacturing",
            children: [
              { gdpCategory: "Wood product manufacturing", gdp: 264.3 },
              {
                gdpCategory: "Nonmetallic mineral product manufacturing",
                gdp: 228.2
              },
              { gdpCategory: "Primary metal manufacturing", gdp: 128.8 },
              {
                gdpCategory: "Fabricated metal product manufacturing",
                gdp: 267.5
              },
              { gdpCategory: "Machinery manufacturing", gdp: 1982.5 },
              {
                gdpCategory: "Computer and electronic product manufacturing",
                gdp: 143.1
              },
              {
                gdpCategory: "Electrical equipment, appliance, and component manufacturing",
                gdp: 7.2
              },
              {
                gdpCategory: "Motor vehicles, bodies and trailers, and parts manufacturing",
                gdp: 136.1
              },
              {
                gdpCategory: "Other transportation equipment manufacturing",
                gdp: 123.4
              },
              {
                gdpCategory: "Furniture and related product manufacturing",
                gdp: 57.9
              },
              { gdpCategory: "Miscellaneous manufacturing", gdp: 54.3 }
            ]
          },
          {
            gdpCategory: "Nondurable goods manufacturing",
            children: [
              {
                gdpCategory: "Food and beverage and tobacco product manufacturing",
                gdp: 867.5
              },
              {
                gdpCategory: "Textile mills and textile product mills",
                gdp: 22.2
              },
              {
                gdpCategory: "Apparel, leather, and allied product manufacturing",
                gdp: 1.9
              },
              { gdpCategory: "Paper manufacturing", gdp: 17.8 },
              {
                gdpCategory: "Printing and related support activities",
                gdp: 55.1
              },
              {
                gdpCategory: "Petroleum and coal products manufacturing",
                gdp: 360.8
              },
              { gdpCategory: "Chemical manufacturing", gdp: 152.6 },
              {
                gdpCategory: "Plastics and rubber products manufacturing",
                gdp: 139.8
              }
            ]
          }
        ]
      },
      { gdpCategory: "Wholesale trade", gdp: 5179.0 },
      { gdpCategory: "Retail trade", gdp: 3936.1 },
      {
        gdpCategory: "Transportation and warehousing",
        children: [
          { gdpCategory: "Air transportation", gdp: 102.7 },
          { gdpCategory: "Rail transportation", gdp: 837.2 },
          { gdpCategory: "Water transportation", gdp: 92.0 },
          { gdpCategory: "Truck transportation", gdp: 1462.5 },
          {
            gdpCategory: "Transit and ground passenger transportation",
            gdp: 58.8
          },
          { gdpCategory: "Pipeline transportation", gdp: 434.1 },
          {
            gdpCategory: "Other transportation and support activities",
            gdp: 422.2
          },
          { gdpCategory: "Warehousing and storage", gdp: 100.1 }
        ]
      },
      {
        gdpCategory: "Information",
        children: [
          {
            gdpCategory: "Publishing industries (except Internet)",
            gdp: 597.9
          },
          {
            gdpCategory: "Motion picture and sound recording industries",
            gdp: 22.1
          },
          {
            gdpCategory: "Broadcasting (except Internet) and telecommunications",
            gdp: 758.4
          },
          {
            gdpCategory: "Data processing, hosting, and other information services",
            gdp: 132.8
          }
        ]
      },
      {
        gdpCategory: "Finance, insurance, real estate, rental, and leasing",
        children: [
          {
            gdpCategory: "Finance and insurance",
            children: [
              {
                gdpCategory: "Monetary Authorities- central bank, credit intermediation, and related services",
                gdp: 1663.1
              },
              {
                gdpCategory: "Securities, commodity contracts, and other financial investments and related activities",
                gdp: 208.2
              },
              {
                gdpCategory: "Insurance carriers and related activities",
                gdp: 1140.8
              },
              {
                gdpCategory: "Funds, trusts, and other financial vehicles",
                gdp: 7.4
              }
            ]
          },
          {
            gdpCategory: "Real estate and rental and leasing",
            children: [
              { gdpCategory: "Real estate", gdp: 5149.1 },
              {
                gdpCategory: "Rental and leasing services and lessors of nonfinancial intangible assets",
                gdp: 1054.2
              }
            ]
          }
        ]
      },
      {
        gdpCategory: "Professional and business services",
        children: [
          {
            gdpCategory: "Professional, scientific, and technical services",
            children: [
              { gdpCategory: "Legal services", gdp: 257.4 },
              {
                gdpCategory: "Computer systems design and related services",
                gdp: 370.6
              },
              {
                gdpCategory: "Miscellaneous professional, scientific, and technical services",
                gdp: 1371.1
              }
            ]
          },
          {
            gdpCategory: "Management of companies and enterprises",
            gdp: 642.5
          },
          {
            gdpCategory: "Administrative and support and waste management and remediation services",
            children: [
              {
                gdpCategory: "Administrative and support services",
                gdp: 949.0
              },
              {
                gdpCategory: "Waste management and remediation services",
                gdp: 119.7
              }
            ]
          }
        ]
      },
      {
        gdpCategory: "Educational services, health care, and social assistance",
        children: [
          { gdpCategory: "Educational services", gdp: 226.1 },
          {
            gdpCategory: "Health care and social assistance",
            children: [
              { gdpCategory: "Ambulatory health care services", gdp: 2097.5 },
              { gdpCategory: "Hospitals", gdp: 2267.4 },
              {
                gdpCategory: "Nursing and residential care facilities",
                gdp: 666.4
              },
              { gdpCategory: "Social assistance", gdp: 416.4 }
            ]
          }
        ]
      },
      {
        gdpCategory: "Arts, entertainment, recreation, accommodation, and food services",
        children: [
          {
            gdpCategory: "Arts, entertainment, and recreation",
            children: [
              {
                gdpCategory: "Performing arts, spectator sports, museums, and related activities",
                gdp: 119.9
              },
              {
                gdpCategory: "Amusement, gambling, and recreation industries",
                gdp: 205.6
              }
            ]
          },
          {
            gdpCategory: "Accommodation and food services",
            children: [
              { gdpCategory: "Accommodation", gdp: 722.7 },
              { gdpCategory: "Food services and drinking places", gdp: 1081.8 }
            ]
          }
        ]
      },
      {
        gdpCategory: "Other services (except government and government enterprises)",
        gdp: 1232.0
      },
      { gdpCategory: "Federal civilian government", gdp: 496.4 },
      { gdpCategory: "Military", gdp: 1065.9 },
      { gdpCategory: "State and local government", gdp: 5406.2 }
    ]
  },
  Mississippi: {
    gdpCategory: "All industry total",
    children: [
      {
        gdpCategory: "Agriculture, forestry, fishing and hunting",
        children: [
          { gdpCategory: "Farms", gdp: 2326.2 },
          {
            gdpCategory: "Forestry, fishing, and related activities",
            gdp: 714.2
          }
        ]
      },
      {
        gdpCategory: "Mining, quarrying, and oil and gas extraction",
        children: [
          { gdpCategory: "Oil and gas extraction", gdp: 637.6 },
          { gdpCategory: "Mining (except oil and gas)", gdp: 352.5 },
          { gdpCategory: "Support activities for mining", gdp: 250.9 }
        ]
      },
      { gdpCategory: "Utilities", gdp: 4249.7 },
      { gdpCategory: "Construction", gdp: 4593.9 },
      {
        gdpCategory: "Manufacturing",
        children: [
          {
            gdpCategory: "Durable goods manufacturing",
            children: [
              { gdpCategory: "Wood product manufacturing", gdp: 1857.4 },
              {
                gdpCategory: "Nonmetallic mineral product manufacturing",
                gdp: 490.8
              },
              { gdpCategory: "Primary metal manufacturing", gdp: 1181.4 },
              {
                gdpCategory: "Fabricated metal product manufacturing",
                gdp: 996.6
              },
              { gdpCategory: "Machinery manufacturing", gdp: 2013.3 },
              {
                gdpCategory: "Computer and electronic product manufacturing",
                gdp: 71.8
              },
              {
                gdpCategory: "Electrical equipment, appliance, and component manufacturing",
                gdp: 696.1
              },
              {
                gdpCategory: "Motor vehicles, bodies and trailers, and parts manufacturing",
                gdp: 1472.9
              },
              {
                gdpCategory: "Other transportation equipment manufacturing",
                gdp: 1892.7
              },
              {
                gdpCategory: "Furniture and related product manufacturing",
                gdp: 988.8
              },
              { gdpCategory: "Miscellaneous manufacturing", gdp: 252.6 }
            ]
          },
          {
            gdpCategory: "Nondurable goods manufacturing",
            children: [
              {
                gdpCategory: "Food and beverage and tobacco product manufacturing",
                gdp: 2037.7
              },
              {
                gdpCategory: "Textile mills and textile product mills",
                gdp: 362.0
              },
              {
                gdpCategory: "Apparel, leather, and allied product manufacturing",
                gdp: 111.5
              },
              { gdpCategory: "Paper manufacturing", gdp: 793.0 },
              {
                gdpCategory: "Printing and related support activities",
                gdp: 68.6
              },
              {
                gdpCategory: "Petroleum and coal products manufacturing",
                gdp: 3762.6
              },
              { gdpCategory: "Chemical manufacturing", gdp: 1185.6 },
              {
                gdpCategory: "Plastics and rubber products manufacturing",
                gdp: 811.6
              }
            ]
          }
        ]
      },
      { gdpCategory: "Wholesale trade", gdp: 7376.0 },
      { gdpCategory: "Retail trade", gdp: 12515.7 },
      {
        gdpCategory: "Transportation and warehousing",
        children: [
          { gdpCategory: "Air transportation", gdp: 134.9 },
          { gdpCategory: "Rail transportation", gdp: 490.9 },
          { gdpCategory: "Water transportation", gdp: 250.8 },
          { gdpCategory: "Truck transportation", gdp: 2670.4 },
          {
            gdpCategory: "Transit and ground passenger transportation",
            gdp: 79.6
          },
          { gdpCategory: "Pipeline transportation", gdp: 229.6 },
          {
            gdpCategory: "Other transportation and support activities",
            gdp: 1206.5
          },
          { gdpCategory: "Warehousing and storage", gdp: 1251.1 }
        ]
      },
      {
        gdpCategory: "Information",
        children: [
          {
            gdpCategory: "Publishing industries (except Internet)",
            gdp: 430.7
          },
          {
            gdpCategory: "Motion picture and sound recording industries",
            gdp: 87.7
          },
          {
            gdpCategory: "Broadcasting (except Internet) and telecommunications",
            gdp: 2157.4
          },
          {
            gdpCategory: "Data processing, hosting, and other information services",
            gdp: 243.1
          }
        ]
      },
      {
        gdpCategory: "Finance, insurance, real estate, rental, and leasing",
        children: [
          {
            gdpCategory: "Finance and insurance",
            children: [
              {
                gdpCategory: "Monetary Authorities- central bank, credit intermediation, and related services",
                gdp: 3406.3
              },
              {
                gdpCategory: "Securities, commodity contracts, and other financial investments and related activities",
                gdp: 246.7
              },
              {
                gdpCategory: "Insurance carriers and related activities",
                gdp: 2736.3
              },
              {
                gdpCategory: "Funds, trusts, and other financial vehicles",
                gdp: 39.5
              }
            ]
          },
          {
            gdpCategory: "Real estate and rental and leasing",
            children: [
              { gdpCategory: "Real estate", gdp: 14417.0 },
              {
                gdpCategory: "Rental and leasing services and lessors of nonfinancial intangible assets",
                gdp: 1301.2
              }
            ]
          }
        ]
      },
      {
        gdpCategory: "Professional and business services",
        children: [
          {
            gdpCategory: "Professional, scientific, and technical services",
            children: [
              { gdpCategory: "Legal services", gdp: 1151.9 },
              {
                gdpCategory: "Computer systems design and related services",
                gdp: 737.7
              },
              {
                gdpCategory: "Miscellaneous professional, scientific, and technical services",
                gdp: 2627.7
              }
            ]
          },
          {
            gdpCategory: "Management of companies and enterprises",
            gdp: 1673.9
          },
          {
            gdpCategory: "Administrative and support and waste management and remediation services",
            children: [
              {
                gdpCategory: "Administrative and support services",
                gdp: 3556.7
              },
              {
                gdpCategory: "Waste management and remediation services",
                gdp: 448.0
              }
            ]
          }
        ]
      },
      {
        gdpCategory: "Educational services, health care, and social assistance",
        children: [
          { gdpCategory: "Educational services", gdp: 890.1 },
          {
            gdpCategory: "Health care and social assistance",
            children: [
              { gdpCategory: "Ambulatory health care services", gdp: 5660.4 },
              { gdpCategory: "Hospitals", gdp: 2590.3 },
              {
                gdpCategory: "Nursing and residential care facilities",
                gdp: 1063.2
              },
              { gdpCategory: "Social assistance", gdp: 1058.0 }
            ]
          }
        ]
      },
      {
        gdpCategory: "Arts, entertainment, recreation, accommodation, and food services",
        children: [
          {
            gdpCategory: "Arts, entertainment, and recreation",
            children: [
              {
                gdpCategory: "Performing arts, spectator sports, museums, and related activities",
                gdp: 201.1
              },
              {
                gdpCategory: "Amusement, gambling, and recreation industries",
                gdp: 702.3
              }
            ]
          },
          {
            gdpCategory: "Accommodation and food services",
            children: [
              { gdpCategory: "Accommodation", gdp: 2209.3 },
              { gdpCategory: "Food services and drinking places", gdp: 3962.0 }
            ]
          }
        ]
      },
      {
        gdpCategory: "Other services (except government and government enterprises)",
        gdp: 3360.4
      },
      { gdpCategory: "Federal civilian government", gdp: 4201.1 },
      { gdpCategory: "Military", gdp: 2273.4 },
      { gdpCategory: "State and local government", gdp: 16165.3 }
    ]
  },
  Arkansas: {
    gdpCategory: "All industry total",
    children: [
      {
        gdpCategory: "Agriculture, forestry, fishing and hunting",
        children: [
          { gdpCategory: "Farms", gdp: 4313.5 },
          {
            gdpCategory: "Forestry, fishing, and related activities",
            gdp: 638.4
          }
        ]
      },
      {
        gdpCategory: "Mining, quarrying, and oil and gas extraction",
        children: [
          { gdpCategory: "Oil and gas extraction", gdp: 351.9 },
          { gdpCategory: "Mining (except oil and gas)", gdp: 400.0 },
          { gdpCategory: "Support activities for mining", gdp: 229.0 }
        ]
      },
      { gdpCategory: "Utilities", gdp: 4523.2 },
      { gdpCategory: "Construction", gdp: 6467.9 },
      {
        gdpCategory: "Manufacturing",
        children: [
          {
            gdpCategory: "Durable goods manufacturing",
            children: [
              { gdpCategory: "Wood product manufacturing", gdp: 2259.0 },
              {
                gdpCategory: "Nonmetallic mineral product manufacturing",
                gdp: 435.7
              },
              { gdpCategory: "Primary metal manufacturing", gdp: 3838.4 },
              {
                gdpCategory: "Fabricated metal product manufacturing",
                gdp: 2093.6
              },
              { gdpCategory: "Machinery manufacturing", gdp: 1615.9 },
              {
                gdpCategory: "Computer and electronic product manufacturing",
                gdp: 192.7
              },
              {
                gdpCategory: "Electrical equipment, appliance, and component manufacturing",
                gdp: 599.6
              },
              {
                gdpCategory: "Motor vehicles, bodies and trailers, and parts manufacturing",
                gdp: 446.0
              },
              {
                gdpCategory: "Other transportation equipment manufacturing",
                gdp: 1263.6
              },
              {
                gdpCategory: "Furniture and related product manufacturing",
                gdp: 242.8
              },
              { gdpCategory: "Miscellaneous manufacturing", gdp: 291.6 }
            ]
          },
          {
            gdpCategory: "Nondurable goods manufacturing",
            children: [
              {
                gdpCategory: "Food and beverage and tobacco product manufacturing",
                gdp: 5013.1
              },
              {
                gdpCategory: "Textile mills and textile product mills",
                gdp: 62.0
              },
              {
                gdpCategory: "Apparel, leather, and allied product manufacturing",
                gdp: 70.0
              },
              { gdpCategory: "Paper manufacturing", gdp: 1548.4 },
              {
                gdpCategory: "Printing and related support activities",
                gdp: 272.3
              },
              {
                gdpCategory: "Petroleum and coal products manufacturing",
                gdp: 594.3
              },
              { gdpCategory: "Chemical manufacturing", gdp: 1661.9 },
              {
                gdpCategory: "Plastics and rubber products manufacturing",
                gdp: 1583.7
              }
            ]
          }
        ]
      },
      { gdpCategory: "Wholesale trade", gdp: 13217.3 },
      { gdpCategory: "Retail trade", gdp: 13224.4 },
      {
        gdpCategory: "Transportation and warehousing",
        children: [
          { gdpCategory: "Air transportation", gdp: 199.6 },
          { gdpCategory: "Rail transportation", gdp: 878.1 },
          { gdpCategory: "Water transportation", gdp: 6.5 },
          { gdpCategory: "Truck transportation", gdp: 4824.5 },
          {
            gdpCategory: "Transit and ground passenger transportation",
            gdp: 87.8
          },
          { gdpCategory: "Pipeline transportation", gdp: 126.2 },
          {
            gdpCategory: "Other transportation and support activities",
            gdp: 1233.4
          },
          { gdpCategory: "Warehousing and storage", gdp: 795.0 }
        ]
      },
      {
        gdpCategory: "Information",
        children: [
          {
            gdpCategory: "Publishing industries (except Internet)",
            gdp: 288.0
          },
          {
            gdpCategory: "Motion picture and sound recording industries",
            gdp: 79.7
          },
          {
            gdpCategory: "Broadcasting (except Internet) and telecommunications",
            gdp: 1409.0
          },
          {
            gdpCategory: "Data processing, hosting, and other information services",
            gdp: 1456.1
          }
        ]
      },
      {
        gdpCategory: "Finance, insurance, real estate, rental, and leasing",
        children: [
          {
            gdpCategory: "Finance and insurance",
            children: [
              {
                gdpCategory: "Monetary Authorities- central bank, credit intermediation, and related services",
                gdp: 4011.8
              },
              {
                gdpCategory: "Securities, commodity contracts, and other financial investments and related activities",
                gdp: 400.3
              },
              {
                gdpCategory: "Insurance carriers and related activities",
                gdp: 3342.2
              },
              {
                gdpCategory: "Funds, trusts, and other financial vehicles",
                gdp: 24.8
              }
            ]
          },
          {
            gdpCategory: "Real estate and rental and leasing",
            children: [
              { gdpCategory: "Real estate", gdp: 15979.4 },
              {
                gdpCategory: "Rental and leasing services and lessors of nonfinancial intangible assets",
                gdp: 1628.3
              }
            ]
          }
        ]
      },
      {
        gdpCategory: "Professional and business services",
        children: [
          {
            gdpCategory: "Professional, scientific, and technical services",
            children: [
              { gdpCategory: "Legal services", gdp: 961.4 },
              {
                gdpCategory: "Computer systems design and related services",
                gdp: 1179.6
              },
              {
                gdpCategory: "Miscellaneous professional, scientific, and technical services",
                gdp: 3913.8
              }
            ]
          },
          {
            gdpCategory: "Management of companies and enterprises",
            gdp: 6893.9
          },
          {
            gdpCategory: "Administrative and support and waste management and remediation services",
            children: [
              {
                gdpCategory: "Administrative and support services",
                gdp: 4332.3
              },
              {
                gdpCategory: "Waste management and remediation services",
                gdp: 636.6
              }
            ]
          }
        ]
      },
      {
        gdpCategory: "Educational services, health care, and social assistance",
        children: [
          { gdpCategory: "Educational services", gdp: 945.4 },
          {
            gdpCategory: "Health care and social assistance",
            children: [
              { gdpCategory: "Ambulatory health care services", gdp: 6596.7 },
              { gdpCategory: "Hospitals", gdp: 4304.2 },
              {
                gdpCategory: "Nursing and residential care facilities",
                gdp: 1349.5
              },
              { gdpCategory: "Social assistance", gdp: 1436.5 }
            ]
          }
        ]
      },
      {
        gdpCategory: "Arts, entertainment, recreation, accommodation, and food services",
        children: [
          {
            gdpCategory: "Arts, entertainment, and recreation",
            children: [
              {
                gdpCategory: "Performing arts, spectator sports, museums, and related activities",
                gdp: 337.0
              },
              {
                gdpCategory: "Amusement, gambling, and recreation industries",
                gdp: 540.5
              }
            ]
          },
          {
            gdpCategory: "Accommodation and food services",
            children: [
              { gdpCategory: "Accommodation", gdp: 926.1 },
              { gdpCategory: "Food services and drinking places", gdp: 4145.4 }
            ]
          }
        ]
      },
      {
        gdpCategory: "Other services (except government and government enterprises)",
        gdp: 3852.3
      },
      { gdpCategory: "Federal civilian government", gdp: 2928.4 },
      { gdpCategory: "Military", gdp: 1008.6 },
      { gdpCategory: "State and local government", gdp: 15480.6 }
    ]
  },
  Kentucky: {
    gdpCategory: "All industry total",
    children: [
      {
        gdpCategory: "Agriculture, forestry, fishing and hunting",
        children: [
          { gdpCategory: "Farms", gdp: 4154.4 },
          {
            gdpCategory: "Forestry, fishing, and related activities",
            gdp: 612.0
          }
        ]
      },
      {
        gdpCategory: "Mining, quarrying, and oil and gas extraction",
        children: [
          { gdpCategory: "Oil and gas extraction", gdp: 192.9 },
          { gdpCategory: "Mining (except oil and gas)", gdp: 2500.2 },
          { gdpCategory: "Support activities for mining", gdp: 173.4 }
        ]
      },
      { gdpCategory: "Utilities", gdp: 5171.0 },
      { gdpCategory: "Construction", gdp: 9858.5 },
      {
        gdpCategory: "Manufacturing",
        children: [
          {
            gdpCategory: "Durable goods manufacturing",
            children: [
              { gdpCategory: "Wood product manufacturing", gdp: 985.9 },
              {
                gdpCategory: "Nonmetallic mineral product manufacturing",
                gdp: 1191.0
              },
              { gdpCategory: "Primary metal manufacturing", gdp: 3208.6 },
              {
                gdpCategory: "Fabricated metal product manufacturing",
                gdp: 2467.2
              },
              { gdpCategory: "Machinery manufacturing", gdp: 2467.2 },
              {
                gdpCategory: "Computer and electronic product manufacturing",
                gdp: 623.9
              },
              {
                gdpCategory: "Electrical equipment, appliance, and component manufacturing",
                gdp: 2483.9
              },
              {
                gdpCategory: "Motor vehicles, bodies and trailers, and parts manufacturing",
                gdp: 7176.0
              },
              {
                gdpCategory: "Other transportation equipment manufacturing",
                gdp: 572.1
              },
              {
                gdpCategory: "Furniture and related product manufacturing",
                gdp: 307.5
              },
              { gdpCategory: "Miscellaneous manufacturing", gdp: 532.0 }
            ]
          },
          {
            gdpCategory: "Nondurable goods manufacturing",
            children: [
              {
                gdpCategory: "Food and beverage and tobacco product manufacturing",
                gdp: 8852.6
              },
              {
                gdpCategory: "Textile mills and textile product mills",
                gdp: 151.2
              },
              {
                gdpCategory: "Apparel, leather, and allied product manufacturing",
                gdp: 77.3
              },
              { gdpCategory: "Paper manufacturing", gdp: 1616.3 },
              {
                gdpCategory: "Printing and related support activities",
                gdp: 599.6
              },
              {
                gdpCategory: "Petroleum and coal products manufacturing",
                gdp: 1756.3
              },
              { gdpCategory: "Chemical manufacturing", gdp: 4681.4 },
              {
                gdpCategory: "Plastics and rubber products manufacturing",
                gdp: 2036.1
              }
            ]
          }
        ]
      },
      { gdpCategory: "Wholesale trade", gdp: 19400.0 },
      { gdpCategory: "Retail trade", gdp: 17548.8 },
      {
        gdpCategory: "Transportation and warehousing",
        children: [
          { gdpCategory: "Air transportation", gdp: 771.3 },
          { gdpCategory: "Rail transportation", gdp: 750.0 },
          { gdpCategory: "Water transportation", gdp: 1097.7 },
          { gdpCategory: "Truck transportation", gdp: 3727.7 },
          {
            gdpCategory: "Transit and ground passenger transportation",
            gdp: 181.2
          },
          { gdpCategory: "Pipeline transportation", gdp: 241.0 },
          {
            gdpCategory: "Other transportation and support activities",
            gdp: 6198.8
          },
          { gdpCategory: "Warehousing and storage", gdp: 2409.4 }
        ]
      },
      {
        gdpCategory: "Information",
        children: [
          {
            gdpCategory: "Publishing industries (except Internet)",
            gdp: 730.3
          },
          {
            gdpCategory: "Motion picture and sound recording industries",
            gdp: 176.8
          },
          {
            gdpCategory: "Broadcasting (except Internet) and telecommunications",
            gdp: 3946.6
          },
          {
            gdpCategory: "Data processing, hosting, and other information services",
            gdp: 1168.2
          }
        ]
      },
      {
        gdpCategory: "Finance, insurance, real estate, rental, and leasing",
        children: [
          {
            gdpCategory: "Finance and insurance",
            children: [
              {
                gdpCategory: "Monetary Authorities- central bank, credit intermediation, and related services",
                gdp: 4845.7
              },
              {
                gdpCategory: "Securities, commodity contracts, and other financial investments and related activities",
                gdp: 1413.0
              },
              {
                gdpCategory: "Insurance carriers and related activities",
                gdp: 7468.4
              },
              {
                gdpCategory: "Funds, trusts, and other financial vehicles",
                gdp: 89.0
              }
            ]
          },
          {
            gdpCategory: "Real estate and rental and leasing",
            children: [
              { gdpCategory: "Real estate", gdp: 25301.9 },
              {
                gdpCategory: "Rental and leasing services and lessors of nonfinancial intangible assets",
                gdp: 2590.6
              }
            ]
          }
        ]
      },
      {
        gdpCategory: "Professional and business services",
        children: [
          {
            gdpCategory: "Professional, scientific, and technical services",
            children: [
              { gdpCategory: "Legal services", gdp: 1961.9 },
              {
                gdpCategory: "Computer systems design and related services",
                gdp: 2070.1
              },
              {
                gdpCategory: "Miscellaneous professional, scientific, and technical services",
                gdp: 6882.2
              }
            ]
          },
          {
            gdpCategory: "Management of companies and enterprises",
            gdp: 3301.6
          },
          {
            gdpCategory: "Administrative and support and waste management and remediation services",
            children: [
              {
                gdpCategory: "Administrative and support services",
                gdp: 7452.0
              },
              {
                gdpCategory: "Waste management and remediation services",
                gdp: 775.6
              }
            ]
          }
        ]
      },
      {
        gdpCategory: "Educational services, health care, and social assistance",
        children: [
          { gdpCategory: "Educational services", gdp: 1555.0 },
          {
            gdpCategory: "Health care and social assistance",
            children: [
              { gdpCategory: "Ambulatory health care services", gdp: 10579.3 },
              { gdpCategory: "Hospitals", gdp: 8809.8 },
              {
                gdpCategory: "Nursing and residential care facilities",
                gdp: 2121.1
              },
              { gdpCategory: "Social assistance", gdp: 1708.3 }
            ]
          }
        ]
      },
      {
        gdpCategory: "Arts, entertainment, recreation, accommodation, and food services",
        children: [
          {
            gdpCategory: "Arts, entertainment, and recreation",
            children: [
              {
                gdpCategory: "Performing arts, spectator sports, museums, and related activities",
                gdp: 907.0
              },
              {
                gdpCategory: "Amusement, gambling, and recreation industries",
                gdp: 654.2
              }
            ]
          },
          {
            gdpCategory: "Accommodation and food services",
            children: [
              { gdpCategory: "Accommodation", gdp: 1457.0 },
              { gdpCategory: "Food services and drinking places", gdp: 7214.8 }
            ]
          }
        ]
      },
      {
        gdpCategory: "Other services (except government and government enterprises)",
        gdp: 5676.4
      },
      { gdpCategory: "Federal civilian government", gdp: 5355.4 },
      { gdpCategory: "Military", gdp: 4985.4 },
      { gdpCategory: "State and local government", gdp: 21009.3 }
    ]
  },
  Maryland: {
    gdpCategory: "All industry total",
    children: [
      {
        gdpCategory: "Agriculture, forestry, fishing and hunting",
        children: [
          { gdpCategory: "Farms", gdp: 1591.2 },
          {
            gdpCategory: "Forestry, fishing, and related activities",
            gdp: 160.7
          }
        ]
      },
      {
        gdpCategory: "Mining, quarrying, and oil and gas extraction",
        children: [
          { gdpCategory: "Oil and gas extraction", gdp: 12.2 },
          { gdpCategory: "Mining (except oil and gas)", gdp: 257.2 },
          { gdpCategory: "Support activities for mining", gdp: 44.2 }
        ]
      },
      { gdpCategory: "Utilities", gdp: 6993.7 },
      { gdpCategory: "Construction", gdp: 28249.0 },
      {
        gdpCategory: "Manufacturing",
        children: [
          {
            gdpCategory: "Durable goods manufacturing",
            children: [
              { gdpCategory: "Wood product manufacturing", gdp: 464.9 },
              {
                gdpCategory: "Nonmetallic mineral product manufacturing",
                gdp: 751.1
              },
              { gdpCategory: "Primary metal manufacturing", gdp: 147.7 },
              {
                gdpCategory: "Fabricated metal product manufacturing",
                gdp: 962.1
              },
              { gdpCategory: "Machinery manufacturing", gdp: 1045.4 },
              {
                gdpCategory: "Computer and electronic product manufacturing",
                gdp: 5051.4
              },
              {
                gdpCategory: "Electrical equipment, appliance, and component manufacturing",
                gdp: 185.2
              },
              {
                gdpCategory: "Motor vehicles, bodies and trailers, and parts manufacturing",
                gdp: 97.9
              },
              {
                gdpCategory: "Other transportation equipment manufacturing",
                gdp: 924.3
              },
              {
                gdpCategory: "Furniture and related product manufacturing",
                gdp: 253.0
              },
              { gdpCategory: "Miscellaneous manufacturing", gdp: 1105.0 }
            ]
          },
          {
            gdpCategory: "Nondurable goods manufacturing",
            children: [
              {
                gdpCategory: "Food and beverage and tobacco product manufacturing",
                gdp: 3293.7
              },
              {
                gdpCategory: "Textile mills and textile product mills",
                gdp: 126.9
              },
              {
                gdpCategory: "Apparel, leather, and allied product manufacturing",
                gdp: 111.4
              },
              { gdpCategory: "Paper manufacturing", gdp: 184.6 },
              {
                gdpCategory: "Printing and related support activities",
                gdp: 744.9
              },
              {
                gdpCategory: "Petroleum and coal products manufacturing",
                gdp: 1178.1
              },
              { gdpCategory: "Chemical manufacturing", gdp: 8101.7 },
              {
                gdpCategory: "Plastics and rubber products manufacturing",
                gdp: 835.5
              }
            ]
          }
        ]
      },
      { gdpCategory: "Wholesale trade", gdp: 21343.8 },
      { gdpCategory: "Retail trade", gdp: 27388.1 },
      {
        gdpCategory: "Transportation and warehousing",
        children: [
          { gdpCategory: "Air transportation", gdp: 1856.2 },
          { gdpCategory: "Rail transportation", gdp: 468.3 },
          { gdpCategory: "Water transportation", gdp: 348.2 },
          { gdpCategory: "Truck transportation", gdp: 2858.0 },
          {
            gdpCategory: "Transit and ground passenger transportation",
            gdp: 1236.8
          },
          { gdpCategory: "Pipeline transportation", gdp: 37.2 },
          {
            gdpCategory: "Other transportation and support activities",
            gdp: 3201.2
          },
          { gdpCategory: "Warehousing and storage", gdp: 1986.2 }
        ]
      },
      {
        gdpCategory: "Information",
        children: [
          {
            gdpCategory: "Publishing industries (except Internet)",
            gdp: 5953.1
          },
          {
            gdpCategory: "Motion picture and sound recording industries",
            gdp: 435.3
          },
          {
            gdpCategory: "Broadcasting (except Internet) and telecommunications",
            gdp: 12378.1
          },
          {
            gdpCategory: "Data processing, hosting, and other information services",
            gdp: 2441.8
          }
        ]
      },
      {
        gdpCategory: "Finance, insurance, real estate, rental, and leasing",
        children: [
          {
            gdpCategory: "Finance and insurance",
            children: [
              {
                gdpCategory: "Monetary Authorities- central bank, credit intermediation, and related services",
                gdp: 7190.4
              },
              {
                gdpCategory: "Securities, commodity contracts, and other financial investments and related activities",
                gdp: 5477.2
              },
              {
                gdpCategory: "Insurance carriers and related activities",
                gdp: 8631.3
              },
              {
                gdpCategory: "Funds, trusts, and other financial vehicles",
                gdp: 950.2
              }
            ]
          },
          {
            gdpCategory: "Real estate and rental and leasing",
            children: [
              { gdpCategory: "Real estate", gdp: 65853.4 },
              {
                gdpCategory: "Rental and leasing services and lessors of nonfinancial intangible assets",
                gdp: 7687.6
              }
            ]
          }
        ]
      },
      {
        gdpCategory: "Professional and business services",
        children: [
          {
            gdpCategory: "Professional, scientific, and technical services",
            children: [
              { gdpCategory: "Legal services", gdp: 5184.7 },
              {
                gdpCategory: "Computer systems design and related services",
                gdp: 14701.1
              },
              {
                gdpCategory: "Miscellaneous professional, scientific, and technical services",
                gdp: 29334.0
              }
            ]
          },
          {
            gdpCategory: "Management of companies and enterprises",
            gdp: 4980.3
          },
          {
            gdpCategory: "Administrative and support and waste management and remediation services",
            children: [
              {
                gdpCategory: "Administrative and support services",
                gdp: 14310.7
              },
              {
                gdpCategory: "Waste management and remediation services",
                gdp: 1233.7
              }
            ]
          }
        ]
      },
      {
        gdpCategory: "Educational services, health care, and social assistance",
        children: [
          { gdpCategory: "Educational services", gdp: 7133.1 },
          {
            gdpCategory: "Health care and social assistance",
            children: [
              { gdpCategory: "Ambulatory health care services", gdp: 17469.4 },
              { gdpCategory: "Hospitals", gdp: 11120.0 },
              {
                gdpCategory: "Nursing and residential care facilities",
                gdp: 3856.8
              },
              { gdpCategory: "Social assistance", gdp: 2784.0 }
            ]
          }
        ]
      },
      {
        gdpCategory: "Arts, entertainment, recreation, accommodation, and food services",
        children: [
          {
            gdpCategory: "Arts, entertainment, and recreation",
            children: [
              {
                gdpCategory: "Performing arts, spectator sports, museums, and related activities",
                gdp: 1762.9
              },
              {
                gdpCategory: "Amusement, gambling, and recreation industries",
                gdp: 3221.8
              }
            ]
          },
          {
            gdpCategory: "Accommodation and food services",
            children: [
              { gdpCategory: "Accommodation", gdp: 3437.0 },
              {
                gdpCategory: "Food services and drinking places",
                gdp: 10207.7
              }
            ]
          }
        ]
      },
      {
        gdpCategory: "Other services (except government and government enterprises)",
        gdp: 11084.0
      },
      { gdpCategory: "Federal civilian government", gdp: 50551.6 },
      { gdpCategory: "Military", gdp: 10915.0 },
      { gdpCategory: "State and local government", gdp: 36229.7 }
    ]
  },
  Oregon: {
    gdpCategory: "All industry total",
    children: [
      {
        gdpCategory: "Agriculture, forestry, fishing and hunting",
        children: [
          { gdpCategory: "Farms", gdp: 3397.2 },
          {
            gdpCategory: "Forestry, fishing, and related activities",
            gdp: 2131.9
          }
        ]
      },
      {
        gdpCategory: "Mining, quarrying, and oil and gas extraction",
        children: [
          { gdpCategory: "Oil and gas extraction", gdp: 0.4 },
          { gdpCategory: "Mining (except oil and gas)", gdp: 393.2 },
          { gdpCategory: "Support activities for mining", gdp: 18.5 }
        ]
      },
      { gdpCategory: "Utilities", gdp: 4124.5 },
      { gdpCategory: "Construction", gdp: 14796.3 },
      {
        gdpCategory: "Manufacturing",
        children: [
          {
            gdpCategory: "Durable goods manufacturing",
            children: [
              { gdpCategory: "Wood product manufacturing", gdp: 5047.8 },
              {
                gdpCategory: "Nonmetallic mineral product manufacturing",
                gdp: 810.2
              },
              { gdpCategory: "Primary metal manufacturing", gdp: 1427.0 },
              {
                gdpCategory: "Fabricated metal product manufacturing",
                gdp: 1688.1
              },
              { gdpCategory: "Machinery manufacturing", gdp: 2324.2 },
              {
                gdpCategory: "Computer and electronic product manufacturing",
                gdp: 14607.0
              },
              {
                gdpCategory: "Electrical equipment, appliance, and component manufacturing",
                gdp: 403.4
              },
              {
                gdpCategory: "Motor vehicles, bodies and trailers, and parts manufacturing",
                gdp: 715.0
              },
              {
                gdpCategory: "Other transportation equipment manufacturing",
                gdp: 822.3
              },
              {
                gdpCategory: "Furniture and related product manufacturing",
                gdp: 391.8
              },
              { gdpCategory: "Miscellaneous manufacturing", gdp: 995.9 }
            ]
          },
          {
            gdpCategory: "Nondurable goods manufacturing",
            children: [
              {
                gdpCategory: "Food and beverage and tobacco product manufacturing",
                gdp: 3984.8
              },
              {
                gdpCategory: "Textile mills and textile product mills",
                gdp: 58.1
              },
              {
                gdpCategory: "Apparel, leather, and allied product manufacturing",
                gdp: 128.6
              },
              { gdpCategory: "Paper manufacturing", gdp: 879.3 },
              {
                gdpCategory: "Printing and related support activities",
                gdp: 393.8
              },
              {
                gdpCategory: "Petroleum and coal products manufacturing",
                gdp: 337.9
              },
              { gdpCategory: "Chemical manufacturing", gdp: 1158.6 },
              {
                gdpCategory: "Plastics and rubber products manufacturing",
                gdp: 583.7
              }
            ]
          }
        ]
      },
      { gdpCategory: "Wholesale trade", gdp: 17363.8 },
      { gdpCategory: "Retail trade", gdp: 18844.3 },
      {
        gdpCategory: "Transportation and warehousing",
        children: [
          { gdpCategory: "Air transportation", gdp: 1463.6 },
          { gdpCategory: "Rail transportation", gdp: 470.4 },
          { gdpCategory: "Water transportation", gdp: 73.7 },
          { gdpCategory: "Truck transportation", gdp: 3282.6 },
          {
            gdpCategory: "Transit and ground passenger transportation",
            gdp: 650.1
          },
          { gdpCategory: "Pipeline transportation", gdp: 52.4 },
          {
            gdpCategory: "Other transportation and support activities",
            gdp: 2611.4
          },
          { gdpCategory: "Warehousing and storage", gdp: 1174.4 }
        ]
      },
      {
        gdpCategory: "Information",
        children: [
          {
            gdpCategory: "Publishing industries (except Internet)",
            gdp: 5494.8
          },
          {
            gdpCategory: "Motion picture and sound recording industries",
            gdp: 608.4
          },
          {
            gdpCategory: "Broadcasting (except Internet) and telecommunications",
            gdp: 2309.0
          },
          {
            gdpCategory: "Data processing, hosting, and other information services",
            gdp: 4114.3
          }
        ]
      },
      {
        gdpCategory: "Finance, insurance, real estate, rental, and leasing",
        children: [
          {
            gdpCategory: "Finance and insurance",
            children: [
              {
                gdpCategory: "Monetary Authorities- central bank, credit intermediation, and related services",
                gdp: 5193.4
              },
              {
                gdpCategory: "Securities, commodity contracts, and other financial investments and related activities",
                gdp: 1396.3
              },
              {
                gdpCategory: "Insurance carriers and related activities",
                gdp: 6431.5
              },
              {
                gdpCategory: "Funds, trusts, and other financial vehicles",
                gdp: 83.7
              }
            ]
          },
          {
            gdpCategory: "Real estate and rental and leasing",
            children: [
              { gdpCategory: "Real estate", gdp: 38472.2 },
              {
                gdpCategory: "Rental and leasing services and lessors of nonfinancial intangible assets",
                gdp: 3117.9
              }
            ]
          }
        ]
      },
      {
        gdpCategory: "Professional and business services",
        children: [
          {
            gdpCategory: "Professional, scientific, and technical services",
            children: [
              { gdpCategory: "Legal services", gdp: 2413.9 },
              {
                gdpCategory: "Computer systems design and related services",
                gdp: 3383.3
              },
              {
                gdpCategory: "Miscellaneous professional, scientific, and technical services",
                gdp: 12332.2
              }
            ]
          },
          {
            gdpCategory: "Management of companies and enterprises",
            gdp: 9615.0
          },
          {
            gdpCategory: "Administrative and support and waste management and remediation services",
            children: [
              {
                gdpCategory: "Administrative and support services",
                gdp: 8313.8
              },
              {
                gdpCategory: "Waste management and remediation services",
                gdp: 839.1
              }
            ]
          }
        ]
      },
      {
        gdpCategory: "Educational services, health care, and social assistance",
        children: [
          { gdpCategory: "Educational services", gdp: 2299.1 },
          {
            gdpCategory: "Health care and social assistance",
            children: [
              { gdpCategory: "Ambulatory health care services", gdp: 11486.8 },
              { gdpCategory: "Hospitals", gdp: 7623.5 },
              {
                gdpCategory: "Nursing and residential care facilities",
                gdp: 2933.8
              },
              { gdpCategory: "Social assistance", gdp: 3114.9 }
            ]
          }
        ]
      },
      {
        gdpCategory: "Arts, entertainment, recreation, accommodation, and food services",
        children: [
          {
            gdpCategory: "Arts, entertainment, and recreation",
            children: [
              {
                gdpCategory: "Performing arts, spectator sports, museums, and related activities",
                gdp: 1730.5
              },
              {
                gdpCategory: "Amusement, gambling, and recreation industries",
                gdp: 1292.0
              }
            ]
          },
          {
            gdpCategory: "Accommodation and food services",
            children: [
              { gdpCategory: "Accommodation", gdp: 2356.9 },
              { gdpCategory: "Food services and drinking places", gdp: 8711.3 }
            ]
          }
        ]
      },
      {
        gdpCategory: "Other services (except government and government enterprises)",
        gdp: 6721.6
      },
      { gdpCategory: "Federal civilian government", gdp: 5055.1 },
      { gdpCategory: "Military", gdp: 746.6 },
      { gdpCategory: "State and local government", gdp: 31512.0 }
    ]
  }
};

export default stateEconomies;
