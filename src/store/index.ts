import { configureStore } from '@reduxjs/toolkit'
import { currentEventsReducer } from './currentEvents/currentEventsSlice'
import { eventStatisticReducer } from './eventStatistic/eventStatisticSlice'

export const store = configureStore({
  reducer: {
    currentEvents: currentEventsReducer,
    eventStatistic: eventStatisticReducer,
  },
})

export type TRootState = ReturnType<typeof store.getState>
export type TAppDispatch = typeof store.dispatch