import {
  IEventStatistic,
  ICurrentEventDataRaw, IEventData,
} from '../../types/ICurrentEventData'

export interface IError {
  error: true,
  message: string
}

export abstract class CApi {
  abstract getCurrentEvents(): Promise<ICurrentEventDataRaw[] | IError>

  abstract getEventById(eventId: IEventData['id']): Promise<IEventData | IError>

  abstract getBrawlersStatisticByEventId(eventId: number): Promise<IEventStatistic | IError>
}