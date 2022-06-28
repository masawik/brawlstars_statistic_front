import { configureStore } from '@reduxjs/toolkit'
import { eventStatisticReducer } from './eventStatistic/eventStatisticSlice'
import { errorPopupReducer } from './errorPopup/errorPopupSlice'
import { eventsReducer } from './events/eventsSlice'

export const store = configureStore({
  reducer: {
    events: eventsReducer,
    eventStatistic: eventStatisticReducer,
    errorPopup: errorPopupReducer,
  },
})

export type TRootState = ReturnType<typeof store.getState>
export type TAppDispatch = typeof store.dispatch