import { TAppDispatch } from '../index'
import clientStorage from '../../packages/clientStorage'
import {
  ICurrentEventData,
  ICurrentEventDataRaw, IEventData,
} from '../../types/ICurrentEventData'
import { parseEventsDate } from '../../packages/parseEventsDate'
import { Api } from '../../packages/api'
import { eventsActions } from './eventsSlice'
import { errorPopupActions } from '../errorPopup/errorPopupSlice'
import { IError } from '../../packages/api/IApi'
import { getErrorMessage } from '../../packages/getErrorMessage'

const getLocalSavedEvents = async (): Promise<ICurrentEventData[] | null> => {
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
    return dispatch(eventsActions.addCurrentEvents(localSavedEvents))
  }

  dispatch(eventsActions.startFetching())

  let currentEventsRaw: ICurrentEventDataRaw[] | IError
  try {
    currentEventsRaw = await Api.getCurrentEvents()
    if ('error' in currentEventsRaw) {
      throw new Error(currentEventsRaw.message)
    }
  } catch (e) {
    dispatch(eventsActions.stopFetching())
    return dispatch(errorPopupActions.setErrorMessage(getErrorMessage(e)))
  }

  await clientStorage.currentEvents.set(currentEventsRaw)
  const currentEvents = parseEventsDate(currentEventsRaw)
  dispatch(eventsActions.addCurrentEvents(currentEvents))
  dispatch(eventsActions.stopFetching())
}

export const getEventById = (eventId: IEventData['id']) =>
  async (dispatch: TAppDispatch) => {
  dispatch(eventsActions.startFetching())

  let eventData: IEventData | IError
  try {
    eventData = await Api.getEventById(eventId)
    if ('error' in eventData) {
      throw new Error(eventData.message)
    }
  } catch (e) {
    dispatch(eventsActions.stopFetching())
    return dispatch(errorPopupActions.setErrorMessage(getErrorMessage(e)))
  }
  dispatch(eventsActions.addEvents([eventData]))
  dispatch(eventsActions.stopFetching())
}