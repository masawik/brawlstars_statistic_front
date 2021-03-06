import { TRootState } from '../index'
import { IEventStatistic } from '../../types/ICurrentEventData'

export const selectEventStatisticFetching =
  (state: TRootState) => state.eventStatistic.isFetching

export const createEventStatisticSelector =
  (eventId: IEventStatistic['eventId']) =>
    (state: TRootState) => state.eventStatistic.events[eventId]