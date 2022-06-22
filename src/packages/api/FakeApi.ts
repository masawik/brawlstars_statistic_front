import gameModeIcon from '../../assets/img/game-modes/gemGrab.png'
import mapImage from '../../assets/img/map_23b.png'
import { random } from 'lodash'
import { CApi } from './IApi'
import { ICurrentEventData } from '../../types/event'

const currentEventsData: ICurrentEventData[] = [
  {
    id: 1,
    gameMode: 'GEM GRAB',
    mapName: 'map name',
    gameModeIconUrl: gameModeIcon,
    mapImageUrl: mapImage,
    endTime: '20220622T080000.000Z',
  },
]

class FakeApi extends CApi {
  getCurrentEvents = (): Promise<ICurrentEventData[]> => {
    return new Promise((resolve => {
      setTimeout(() => {
        resolve(currentEventsData)
      }, random(500, 2000))
    }))
  }
}

export default new FakeApi()