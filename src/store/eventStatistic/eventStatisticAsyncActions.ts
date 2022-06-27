import { IEventStatistic } from '../../types/eventData'
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
      return dispatch(errorPopupActions.setErrorMessage(getErrorMessage(e)))
    } finally {
      dispatch(eventStatisticActions.stopFetching())
    }
    
    dispatch(eventStatisticActions.addEventStatistic(eventStatistic))
  }