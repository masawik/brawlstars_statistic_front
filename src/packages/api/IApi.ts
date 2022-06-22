import { ICurrentEventData } from '../../types/event'

export abstract class CApi {
  abstract getCurrentEvents(): Promise<ICurrentEventData[]>
}