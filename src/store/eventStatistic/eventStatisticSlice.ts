import { IBrawlerStatisticData } from '../../types/brawlerData'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IEventStatistic } from '../../types/ICurrentEventData'

//todo добавить дату последнего обновления информации и обновлять когда устаревает

const initialState = {
  isFetching: false as boolean,
  events: {} as { [key: IEventStatistic['eventId']]: IBrawlerStatisticData[] },
}

const eventStatisticSlice = createSlice({
  name: 'EVENT_STATISTIC',
  initialState,
  reducers: {
    addEventStatistic: (state, action: PayloadAction<IEventStatistic>) => {
      state.events[action.payload.eventId] = action.payload.statistic
    },
    startFetching: state => {
      state.isFetching = true
    },
    stopFetching: state => {
      state.isFetching = false
    },
  },
})

export const eventStatisticActions = eventStatisticSlice.actions
export const eventStatisticReducer = eventStatisticSlice.reducer