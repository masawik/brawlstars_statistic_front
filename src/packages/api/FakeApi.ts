import gameModeIcon from '../../assets/img/game-modes/gemGrab.png'
import mapImage from '../../assets/img/map_23b.png'
import { random } from 'lodash'
import { CApi } from './IApi'
import { ICurrentEventDataRaw } from '../../types/eventData'

const currentEventsData: ICurrentEventDataRaw[] = [
  {
    id: 1,
    gameMode: 'GEM GRAB',
    mapName: 'map name',
    gameModeIconUrl: gameModeIcon,
    mapImageUrl: mapImage,
    endTime: '2022-07-23T01:39:33.775Z',
  },
]

class FakeApi extends CApi {
  getCurrentEvents = (): Promise<ICurrentEventDataRaw[]> => {
    return new Promise((resolve => {
      setTimeout(() => {
        resolve(currentEventsData)
      }, random(500, 2000))
    }))
  }
}

export default new FakeApi()