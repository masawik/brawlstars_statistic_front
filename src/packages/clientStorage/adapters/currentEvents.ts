import { ICurrentEventData } from '../../../types/event'
import LocalStorage from '../storages/LocalStorage'

const CURRENT_EVENTS = 'CURRENT_EVENTS'

const set = async (events: ICurrentEventData[]) => {
  const eventListAsString = JSON.stringify(events)
  await LocalStorage.setItem(CURRENT_EVENTS, eventListAsString)
}

const get = async (): Promise<ICurrentEventData[] | null> => {
  const eventListAsString = await LocalStorage.getItem(CURRENT_EVENTS)
  if (!eventListAsString) return null

  return JSON.parse(eventListAsString)
}

export { set, get }