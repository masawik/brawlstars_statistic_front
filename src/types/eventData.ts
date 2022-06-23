import { IBrawlerStatisticData } from './brawlerData'

export interface IEventData {
  id: number
  gameMode: string
  mapName: string
  gameModeColor?: string
  gameModeIconUrl?: string
  mapImageUrl?: string
}

export interface ICurrentEventDataRaw extends IEventData {
  endTime: string
}

export interface EventData extends IEventData {
  endTime: number
}

export interface IEventStatistic {
  eventId: number,
  statistic: IBrawlerStatisticData[]
}