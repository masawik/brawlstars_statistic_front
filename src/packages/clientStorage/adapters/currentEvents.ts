import {
  ICurrentEventDataRaw,
} from '../../../types/ICurrentEventData'
import LocalStorage from '../storages/LocalStorage'

const CURRENT_EVENTS = 'CURRENT_EVENTS'

const set = async (events: ICurrentEventDataRaw[]) => {
  const eventListAsString = JSON.stringify(events)
  await LocalStorage.setItem(CURRENT_EVENTS, eventListAsString)
}

const get = async (): Promise<ICurrentEventDataRaw[] | null> => {
  const eventListAsString = await LocalStorage.getItem(CURRENT_EVENTS)
  if (!eventListAsString) return null

  return JSON.parse(eventListAsString)
}

export { set, get }