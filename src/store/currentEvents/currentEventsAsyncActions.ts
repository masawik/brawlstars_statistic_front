import { TAppDispatch } from '../index'
import clientStorage from '../../packages/clientStorage'
import { EventData } from '../../types/eventData'
import { parseEventsDate } from '../../packages/parseEventsDate'
import { Api } from '../../packages/api'
import { currentEventsActions } from './currentEventsSlice'

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
    dispatch(currentEventsActions.setCurrentEvents(localSavedEvents))
    return
  }

  //todo обработать ошибку запроса
  dispatch(currentEventsActions.startFetching())
  const currentEventsRaw = await Api.getCurrentEvents()
  await clientStorage.currentEvents.set(currentEventsRaw)

  const currentEvents = parseEventsDate(currentEventsRaw)
  dispatch(currentEventsActions.setCurrentEvents(currentEvents))
  dispatch(currentEventsActions.stopFetching())
}