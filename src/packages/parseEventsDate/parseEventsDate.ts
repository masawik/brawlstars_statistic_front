import {
  EventData,
  ICurrentEventDataRaw,
} from '../../types/eventData'

export const parseEventsDate =
  (events: ICurrentEventDataRaw[]): EventData[] =>
    events.map<EventData>(event => {
      return {
        ...event,
        endTime: +new Date(event.endTime),
      }
    })
