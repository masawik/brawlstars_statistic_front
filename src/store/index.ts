import { configureStore } from '@reduxjs/toolkit'
import { currentEventsReducer } from './currentEvents/currentEventsSlice'
import { eventStatisticReducer } from './eventStatistic/eventStatisticSlice'
import { errorPopupReducer } from './errorPopup/errorPopupSlice'

export const store = configureStore({
  reducer: {
    currentEvents: currentEventsReducer,
    eventStatistic: eventStatisticReducer,
    errorPopup: errorPopupReducer,
  },
})

export type TRootState = ReturnType<typeof store.getState>
export type TAppDispatch = typeof store.dispatch