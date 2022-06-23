import {
  ICurrentEventDataRaw,
} from '../../types/eventData'

export abstract class CApi {
  abstract getCurrentEvents(): Promise<ICurrentEventDataRaw[]>
}