import { EconomyNode } from "./model";

const data: EconomyNode = {
  gdpCategory: "All industry total",
  gdp: 110871.1,
  children: [
    {
      gdpCategory: "Agriculture, forestry, fishing and hunting",
      gdp: 5906.4,
      children: [
        { gdpCategory: "Farms", gdp: 5152.0 },
        { gdpCategory: "Forestry, fishing, and related activities", gdp: 754.5 },
      ],
    },
    {
      gdpCategory: "Mining, quarrying, and oil and gas extraction",
      gdp: 849.6,
      children: [
        { gdpCategory: "Oil and gas extraction", gdp: 7.7 },
        { gdpCategory: "Mining (except oil and gas)", gdp: 802.6 },
        { gdpCategory: "Support activities for mining", gdp: 39.3 },
      ],
    },
    { gdpCategory: "Utilities", gdp: 1777.4 },
    { gdpCategory: "Construction", gdp: 6942.3 },
    {
      gdpCategory: "Manufacturing",
      gdp: 10726.7,
      children: [
        {
          gdpCategory: "Durable goods manufacturing",
          gdp: 6236.4,
          children: [
            { gdpCategory: "Wood product manufacturing", gdp: 1188.4 },
            { gdpCategory: "Nonmetallic mineral product manufacturing", gdp: 236.1 },
            { gdpCategory: "Primary metal manufacturing", gdp: 165.6 },
            { gdpCategory: "Fabricated metal product manufacturing", gdp: 793.7 },
            { gdpCategory: "Machinery manufacturing", gdp: 444.8 },
            { gdpCategory: "Computer and electronic product manufacturing", gdp: 2543.9 },
            { gdpCategory: "Electrical equipment, appliance, and component manufacturing", gdp: 176.0 },
            { gdpCategory: "Motor vehicles, bodies and trailers, and parts manufacturing", gdp: 234.6 },
            { gdpCategory: "Other transportation equipment manufacturing", gdp: 124.9 },
            { gdpCategory: "Furniture and related product manufacturing", gdp: 132.5 },
            { gdpCategory: "Miscellaneous manufacturing", gdp: 195.8 },
          ],
        },
        {
          gdpCategory: "Nondurable goods manufacturing",
          gdp: 4490.4,
          children: [
            { gdpCategory: "Food and beverage and tobacco product manufacturing", gdp: 3033.4 },
            { gdpCategory: "Textile mills and textile product mills", gdp: 24.9 },
            { gdpCategory: "Apparel, leather, and allied product manufacturing", gdp: 26.3 },
            { gdpCategory: "Paper manufacturing", gdp: 409.3 },
            { gdpCategory: "Printing and related support activities", gdp: 133.1 },
            { gdpCategory: "Petroleum and coal products manufacturing", gdp: 16.2 },
            { gdpCategory: "Chemical manufacturing", gdp: 566.6 },
            { gdpCategory: "Plastics and rubber products manufacturing", gdp: 280.7 },
          ],
        },
      ],
    },
    { gdpCategory: "Wholesale trade", gdp: 7980.2 },
    { gdpCategory: "Retail trade", gdp: 9408.4 },
    {
      gdpCategory: "Transportation and warehousing",
      gdp: 3685.3,
      children: [
        { gdpCategory: "Air transportation", gdp: 338.7 },
        { gdpCategory: "Rail transportation", gdp: 460.7 },
        { gdpCategory: "Water transportation", gdp: 6.3 },
        { gdpCategory: "Truck transportation", gdp: 1631.6 },
        { gdpCategory: "Transit and ground passenger transportation", gdp: 121.9 },
        { gdpCategory: "Pipeline transportation", gdp: 13.9 },
        { gdpCategory: "Other transportation and support activities", gdp: 963.5 },
        { gdpCategory: "Warehousing and storage", gdp: 148.7 },
      ],
    },
    {
      gdpCategory: "Information",
      gdp: 2309.9,
      children: [
        { gdpCategory: "Publishing industries (except Internet)", gdp: 501.4 },
        { gdpCategory: "Motion picture and sound recording industries", gdp: 81.9 },
        { gdpCategory: "Broadcasting (except Internet) and telecommunications", gdp: 930.2 },
        { gdpCategory: "Data processing, hosting, and other information services", gdp: 796.3 },
      ],
    },
    {
      gdpCategory: "Finance, insurance, real estate, rental, and leasing",
      gdp: 19963.9,
      children: [
        {
          gdpCategory: "Finance and insurance",
          gdp: 5089.8,
          children: [
            {
              gdpCategory: "Monetary Authorities- central bank, credit intermediation, and related services",
              gdp: 2399.3,
            },
            {
              gdpCategory: "Securities, commodity contracts, and other financial investments and related activities",
              gdp: 483.2,
            },
            { gdpCategory: "Insurance carriers and related activities", gdp: 2032.6 },
            { gdpCategory: "Funds, trusts, and other financial vehicles", gdp: 174.8 },
          ],
        },
        {
          gdpCategory: "Real estate and rental and leasing",
          gdp: 14874.1,
          children: [
            { gdpCategory: "Real estate", gdp: 14025.9 },
            {
              gdpCategory: "Rental and leasing services and lessors of nonfinancial intangible assets",
              gdp: 848.1,
            },
          ],
        },
      ],
    },
    {
      gdpCategory: "Professional and business services",
      gdp: 12084.9,
      children: [
        {
          gdpCategory: "Professional, scientific, and technical services",
          gdp: 6690.4,
          children: [
            { gdpCategory: "Legal services", gdp: 657.3 },
            { gdpCategory: "Computer systems design and related services", gdp: 1248.6 },
            { gdpCategory: "Miscellaneous professional, scientific, and technical services", gdp: 4784.5 },
          ],
        },
        { gdpCategory: "Management of companies and enterprises", gdp: 1225.5 },
        {
          gdpCategory: "Administrative and support and waste management and remediation services",
          gdp: 4169.0,
          children: [
            { gdpCategory: "Administrative and support services", gdp: 3381.1 },
            { gdpCategory: "Waste management and remediation services", gdp: 787.9 },
          ],
        },
      ],
    },
    {
      gdpCategory: "Educational services, health care, and social assistance",
      gdp: 9796.5,
      children: [
        { gdpCategory: "Educational services", gdp: 934.3 },
        {
          gdpCategory: "Health care and social assistance",
          gdp: 8862.1,
          children: [
            { gdpCategory: "Ambulatory health care services", gdp: 4250.0 },
            { gdpCategory: "Hospitals", gdp: 3206.6 },
            { gdpCategory: "Nursing and residential care facilities", gdp: 761.9 },
            { gdpCategory: "Social assistance", gdp: 643.6 },
          ],
        },
      ],
    },
    {
      gdpCategory: "Arts, entertainment, recreation, accommodation, and food services",
      gdp: 4878.9,
      children: [
        {
          gdpCategory: "Arts, entertainment, and recreation",
          gdp: 967.1,
          children: [
            { gdpCategory: "Performing arts, spectator sports, museums, and related activities", gdp: 326.8 },
            { gdpCategory: "Amusement, gambling, and recreation industries", gdp: 640.3 },
          ],
        },
        {
          gdpCategory: "Accommodation and food services",
          gdp: 3911.8,
          children: [
            { gdpCategory: "Accommodation", gdp: 1121.7 },
            { gdpCategory: "Food services and drinking places", gdp: 2790.1 },
          ],
        },
      ],
    },
    { gdpCategory: "Other services (except government and government enterprises)", gdp: 2274.6 },
    { gdpCategory: "Federal civilian", gdp: 2368.4 },
    { gdpCategory: "Military", gdp: 708.0 },
    { gdpCategory: "State and local", gdp: 9209.7 },
  ],
};

export default data;
