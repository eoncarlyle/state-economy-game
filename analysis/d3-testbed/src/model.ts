export interface EconomyNode {
  gdpCategory: string; 
  gdp: number;
  children?: Array<EconomyNode>;
}