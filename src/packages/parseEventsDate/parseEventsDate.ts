import {
  ICurrentEventData,
  ICurrentEventDataRaw,
} from '../../types/ICurrentEventData'

export const parseEventsDate =
  (events: ICurrentEventDataRaw[]): ICurrentEventData[] =>
    events.map<ICurrentEventData>(event => {
      return {
        ...event,
        endTime: +new Date(event.endTime),
      }
    })
