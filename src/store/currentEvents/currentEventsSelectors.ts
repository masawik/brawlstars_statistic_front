import { TRootState } from '../index'

export const selectCurrentEvents =
  (state: TRootState) => state.currentEvents.events

export const selectCurrentEventsFetching =
  (state: TRootState) => state.currentEvents.isFetching