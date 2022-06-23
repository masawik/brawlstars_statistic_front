import { configureStore } from '@reduxjs/toolkit'
import { currentEventsReducer } from './currentEvents/currentEventsSlice'

export const store = configureStore({
  reducer: {
    currentEvents: currentEventsReducer,
  },
})

export type TRootState = ReturnType<typeof store.getState>
export type TAppDispatch = typeof store.dispatch