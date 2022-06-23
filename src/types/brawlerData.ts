export interface IBrawlerData {
  name: string,
  imageUrl?: string
}

export interface IBrawlerStatisticData extends IBrawlerData {
  games: number,
  victories: number,
  winRate: number
}