import gemGrabIcon from '../../assets/img/mock/game_mode_gem_grab.png'
import bountyIcon from '../../assets/img/mock/game_mode_bounty.png'
import siegeIcon from '../../assets/img/mock/game_mode_siege.png'
import wipeoutIcon from '../../assets/img/mock/game_mode_wipeout.png'
import mapBanner1 from '../../assets/img/mock/map_banner_1.png'
import mapBanner2 from '../../assets/img/mock/map_banner_2.png'
import mapBanner3 from '../../assets/img/mock/map_banner_3.png'
import mapBanner4 from '../../assets/img/mock/map_banner_4.png'
import brawlerImage from '../../assets/img/brawlers/28000011.png'
import mapImage from '../../assets/img/mock/map.png'

import { random } from 'lodash'
import { CApi, IError } from './IApi'
import {
  IEventStatistic,
  ICurrentEventDataRaw, IEventData,
} from '../../types/ICurrentEventData'

const currentEventsData: ICurrentEventDataRaw[] = [
  {
    id: 1,
    gameMode: 'GEM GRAB',
    mapName: 'map name',
    gameModeIconUrl: gemGrabIcon,
    mapBannerImageUrl: mapBanner1,
    gameModeColor: '#9a3cf2',
    endTime: '2023-07-23T01:39:33.775Z',
    mapImageUrl: mapImage,
  },
  {
    id: 2,
    gameMode: 'BOUNTY',
    mapName: 'map name',
    gameModeIconUrl: bountyIcon,
    gameModeColor: '#00cffb',
    mapBannerImageUrl: mapBanner2,
    endTime: '2023-08-23T01:39:33.775Z',
    mapImageUrl: mapImage,
  },
  {
    id: 3,
    gameMode: 'SIEGE',
    mapName: 'map name',
    gameModeIconUrl: siegeIcon,
    gameModeColor: '#f04f32',
    mapBannerImageUrl: mapBanner3,
    endTime: '2023-08-23T01:39:33.775Z',
    mapImageUrl: mapImage,
  },
  {
    id: 4,
    gameMode: 'WIPEOUT',
    mapName: 'map name',
    gameModeIconUrl: wipeoutIcon,
    gameModeColor: '#e44f58',
    mapBannerImageUrl: mapBanner4,
    endTime: '2023-08-23T01:39:33.775Z',
    mapImageUrl: mapImage,
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
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // reject('pook')
        // resolve(error)
        resolve(currentEventsData)
      }, random(500, 2000))
    })
  }

  getEventById = (eventId: IEventData['id']): Promise<IEventData | IError> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const event = currentEventsData.find(eventItem => eventItem.id === eventId)
        if (event) {
          resolve(event as IEventData)
        } else {
          reject(error)
        }
      }, random(500, 1000))
    })
  }

  getBrawlersStatisticByEventId = (eventId: number): Promise<IEventStatistic | IError> => {
    return new Promise(((resolve, reject) => {
      setTimeout(() => {
        if (eventId in eventsStatisticData) {
          resolve(eventsStatisticData[eventId])
        } else {
          reject('No data on this event')
        }
      }, random(1000, 2000))
    }))
  }
}

export default new FakeApi()