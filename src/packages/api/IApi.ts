import {
  IEventStatistic,
  ICurrentEventDataRaw,
} from '../../types/eventData'

export interface IError {
  error: true,
  message: string
}

export abstract class CApi {
  abstract getCurrentEvents(): Promise<ICurrentEventDataRaw[] | IError>

  abstract getBrawlersStatisticByEventId(eventId: number): Promise<IEventStatistic | IError>
}