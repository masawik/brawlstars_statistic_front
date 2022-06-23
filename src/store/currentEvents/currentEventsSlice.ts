import { EventData } from '../../types/eventData'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
  events: [] as EventData[],
  isFetching: false as boolean,
}

const currentEventsSlice = createSlice({
  name: 'CURRENT_EVENTS',
  initialState,
  reducers: {
    setCurrentEvents: (state, action: PayloadAction<EventData[]>) => {
      state.events = action.payload
    },
    startFetching: state => {
      state.isFetching = true
    },
    stopFetching: state => {
      state.isFetching = false
    },
  },
})

export const currentEventsActions = currentEventsSlice.actions
export const currentEventsReducer = currentEventsSlice.reducer