export interface IEventData {
  id: number
  gameMode: string
  mapName: string
  gameModeColor?: string
  gameModeIconUrl?: string
  mapImageUrl?: string
}

export interface ICurrentEventData extends IEventData {
  endTime: string
}