import { TAppDispatch } from '../index'
import clientStorage from '../../packages/clientStorage'
import { EventData, ICurrentEventDataRaw } from '../../types/eventData'
import { parseEventsDate } from '../../packages/parseEventsDate'
import { Api } from '../../packages/api'
import { currentEventsActions } from './currentEventsSlice'
import { errorPopupActions } from '../errorPopup/errorPopupSlice'
import { IError } from '../../packages/api/IApi'
import { getErrorMessage } from '../../packages/getErrorMessage'

const getLocalSavedEvents = async (): Promise<EventData[] | null> => {
  const savedEvents = await clientStorage.currentEvents.get()
  if (!savedEvents) return null

  const savedEventsWithParsedDate = parseEventsDate(savedEvents)

  const dateNow = +new Date()
  const expiredEvent = savedEventsWithParsedDate
    .find(event => event.endTime < dateNow)
  if (expiredEvent) return null

  return savedEventsWithParsedDate
}

export const getCurrentEvents = () => async (dispatch: TAppDispatch) => {
  const localSavedEvents = await getLocalSavedEvents()
  if (localSavedEvents) {
    return dispatch(currentEventsActions.setCurrentEvents(localSavedEvents))
  }

  dispatch(currentEventsActions.startFetching())

  let currentEventsRaw: ICurrentEventDataRaw[] | IError
  try {
    currentEventsRaw = await Api.getCurrentEvents()
    if ('error' in currentEventsRaw) {
      throw new Error(currentEventsRaw.message)
    }
  } catch (e) {
    dispatch(currentEventsActions.stopFetching())
    return dispatch(errorPopupActions.setErrorMessage(getErrorMessage(e)))
  }

  await clientStorage.currentEvents.set(currentEventsRaw)
  const currentEvents = parseEventsDate(currentEventsRaw)
  dispatch(currentEventsActions.setCurrentEvents(currentEvents))
  dispatch(currentEventsActions.stopFetching())
}