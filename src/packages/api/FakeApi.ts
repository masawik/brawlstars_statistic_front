import gameModeIcon from '../../assets/img/game-modes/gemGrab.png'
import mapImage from '../../assets/img/map_23b.png'
import brawlerImage from '../../assets/img/brawlers/28000011.png'
import { random } from 'lodash'
import { CApi, IError } from './IApi'
import { IEventStatistic, ICurrentEventDataRaw } from '../../types/eventData'

const currentEventsData: ICurrentEventDataRaw[] = [
  {
    id: 1,
    gameMode: 'GEM GRAB',
    mapName: 'map name',
    gameModeIconUrl: gameModeIcon,
    mapImageUrl: mapImage,
    endTime: '2022-07-23T01:39:33.775Z',
  },
  {
    id: 2,
    gameMode: 'GEM GRAB',
    mapName: 'map name 2',
    gameModeIconUrl: gameModeIcon,
    mapImageUrl: mapImage,
    endTime: '2022-08-23T01:39:33.775Z',
  },
  {
    id: 3,
    gameMode: 'GEM GRAB',
    mapName: 'map name',
    gameModeIconUrl: gameModeIcon,
    mapImageUrl: mapImage,
    endTime: '2022-07-23T01:39:33.775Z',
  },
  {
    id: 4,
    gameMode: 'GEM GRAB',
    mapName: 'map name 2',
    gameModeIconUrl: gameModeIcon,
    mapImageUrl: mapImage,
    endTime: '2022-08-23T01:39:33.775Z',
  },
  {
    id: 5,
    gameMode: 'GEM GRAB',
    mapName: 'map name',
    gameModeIconUrl: gameModeIcon,
    mapImageUrl: mapImage,
    endTime: '2022-07-23T01:39:33.775Z',
  },
  {
    id: 6,
    gameMode: 'GEM GRAB',
    mapName: 'map name 2',
    gameModeIconUrl: gameModeIcon,
    mapImageUrl: mapImage,
    endTime: '2022-08-23T01:39:33.775Z',
  },
  {
    id: 7,
    gameMode: 'GEM GRAB',
    mapName: 'map name',
    gameModeIconUrl: gameModeIcon,
    mapImageUrl: mapImage,
    endTime: '2022-07-23T01:39:33.775Z',
  },
  {
    id: 8,
    gameMode: 'GEM GRAB',
    mapName: 'map name 2',
    gameModeIconUrl: gameModeIcon,
    mapImageUrl: mapImage,
    endTime: '2022-08-23T01:39:33.775Z',
  },
]

const eventsStatisticData: { [key: IEventStatistic['eventId']]: IEventStatistic } = {
  1: {
    eventId: 1,
    statistic: [
      {
        name: 'Penny',
        imageUrl: brawlerImage,
        games: 100,
        victories: 50,
        winRate: 50,
      },
      {
        name: 'Rico',
        imageUrl: brawlerImage,
        games: 100,
        victories: 60,
        winRate: 60,
      },
    ],
  },
  2: {
    eventId: 2,
    statistic: [
      {
        name: 'Mike',
        imageUrl: brawlerImage,
        games: 500,
        victories: 50,
        winRate: 10,
      },
      {
        name: 'Lue',
        imageUrl: brawlerImage,
        games: 1000,
        victories: 400,
        winRate: 40,
      },
    ],
  },
}

const error: IError = {
  error: true,
  message: 'brawl stars API is unavailable',
}

class FakeApi extends CApi {
  getCurrentEvents = (): Promise<ICurrentEventDataRaw[] | IError> => {
    return new Promise(((resolve, reject) => {
      setTimeout(() => {
        // reject('pook')
        // resolve(error)
        resolve(currentEventsData)
      }, random(500, 2000))
    }))
  }

  getBrawlersStatisticByEventId = (eventId: number): Promise<IEventStatistic | IError> => {
    return new Promise(((resolve, reject) => {
      setTimeout(() => {
        if (eventId in eventsStatisticData) {
          resolve(eventsStatisticData[eventId])
        } else {
          reject('No data on this event')
        }
      }, random(500, 2000))
    }))
  }
}

export default new FakeApi()