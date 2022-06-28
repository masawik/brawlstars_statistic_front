import { ICurrentEventData, IEventData } from '../../types/ICurrentEventData'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
  events: {} as { [key: ICurrentEventData['id']]: ICurrentEventData | IEventData },
  currentEvents: [] as ICurrentEventData['id'][],
  isFetching: false as boolean,
}

const eventsSlice = createSlice({
  name: 'EVENTS',
  initialState,
  reducers: {
    addEvents: (state, action: PayloadAction<IEventData[]>) => {
      action.payload
        .forEach(event => {state.events[event.id] = event})
    },
    addCurrentEvents: (state, action: PayloadAction<ICurrentEventData[]>) => {
      action.payload
        .forEach(event => {
          state.currentEvents.push(event.id)
          state.events[event.id] = event
        })
    },
    startFetching: state => {
      state.isFetching = true
    },
    stopFetching: state => {
      state.isFetching = false
    },
  },
})

export const eventsActions = eventsSlice.actions
export const eventsReducer = eventsSlice.reducer