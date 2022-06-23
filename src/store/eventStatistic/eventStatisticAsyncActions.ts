import { IEventStatistic } from '../../types/eventData'
import { TAppDispatch } from '../index'
import { eventStatisticActions } from './eventStatisticSlice'
import { Api } from '../../packages/api'

export const getEventStatistic = (eventId: IEventStatistic['eventId']) =>
  async (dispatch: TAppDispatch) => {
    dispatch(eventStatisticActions.startFetching())
    const eventStatistic = await Api.getBrawlersStatisticByEventId(eventId)
    dispatch(eventStatisticActions.addEventStatistic(eventStatistic))
    dispatch(eventStatisticActions.stopFetching())
  }