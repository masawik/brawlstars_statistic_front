import {
  IEventStatistic,
  ICurrentEventDataRaw,
} from '../../types/eventData'

export abstract class CApi {
  abstract getCurrentEvents(): Promise<ICurrentEventDataRaw[]>

  abstract getBrawlersStatisticByEventId(eventId: number): Promise<IEventStatistic>
}