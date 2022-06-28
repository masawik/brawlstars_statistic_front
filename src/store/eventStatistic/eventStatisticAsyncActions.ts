import { IEventStatistic } from '../../types/ICurrentEventData'
import { TAppDispatch } from '../index'
import { eventStatisticActions } from './eventStatisticSlice'
import { Api } from '../../packages/api'
import { IError } from '../../packages/api/IApi'
import { errorPopupActions } from '../errorPopup/errorPopupSlice'
import { getErrorMessage } from '../../packages/getErrorMessage'

export const getEventStatistic = (eventId: IEventStatistic['eventId']) =>
  async (dispatch: TAppDispatch) => {
    dispatch(eventStatisticActions.startFetching())

    let eventStatistic: IEventStatistic | IError
    try {
      eventStatistic = await Api.getBrawlersStatisticByEventId(eventId)
      if ('error' in eventStatistic) {
        throw new Error(eventStatistic.message)
      }
    } catch (e) {
      dispatch(eventStatisticActions.stopFetching())
      return dispatch(errorPopupActions.setErrorMessage(getErrorMessage(e)))
    }

    dispatch(eventStatisticActions.addEventStatistic(eventStatistic))
    dispatch(eventStatisticActions.stopFetching())
  }