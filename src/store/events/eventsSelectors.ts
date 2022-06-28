import { TRootState } from '../index'
import { ICurrentEventData, IEventData } from '../../types/ICurrentEventData'

export const selectCurrentEvents =
  (state: TRootState): ICurrentEventData[] => {
    const currentEvents: ICurrentEventData[] = []

    state.events.currentEvents
      .forEach(eventId => {
          const event = state.events.events[eventId]
          if ('endTime' in event) currentEvents.push(event)
        }
      )

    return currentEvents
  }

export const createEventByIdSelector =
  (eventId: IEventData['id']) => (state: TRootState): ICurrentEventData | IEventData | undefined =>
    state.events.events[eventId]

export const selectEventsFetching =
  (state: TRootState) => state.events.isFetching