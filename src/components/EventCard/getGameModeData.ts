import { EventModes } from '../../typings/eventModes'
import gemGrabIcon from '../../assets/img/game-modes/gemGrab.png'
import basketBrawlIcon from '../../assets/img/game-modes/basketball.png'
import bigGameIcon from '../../assets/img/game-modes/big-game.png'
import bossFightIcon from '../../assets/img/game-modes/boss-fight.png'
import bountyIcon from '../../assets/img/game-modes/bounty.png'
import brawlBallIcon from '../../assets/img/game-modes/brawl-ball.png'
import duelsIcon from '../../assets/img/game-modes/duels.png'
import showdownIcon from '../../assets/img/game-modes/showdown.png'
import heistIcon from '../../assets/img/game-modes/heist.png'
import hotZoneIcon from '../../assets/img/game-modes/hot-zone.png'
import knockoutIcon from '../../assets/img/game-modes/knockout.png'
import loneStarIcon from '../../assets/img/game-modes/lone-star.png'
import roboRumbleIcon from '../../assets/img/game-modes/robo-rumble.png'
import siegeIcon from '../../assets/img/game-modes/siege.png'
import superCityRampageIcon
  from '../../assets/img/game-modes/super-city-rampage.png'
import takedownIcon from '../../assets/img/game-modes/takedown.png'
import volleyBrawlIcon from '../../assets/img/game-modes/volley-brawl.png'

type GameModeViewData = {
  gameModeColor?: string,
  gameModeIconPath?: string
}

const getGameModeData =
  (gameMode: EventModes): GameModeViewData => {
    const result: GameModeViewData = {}

    switch (gameMode) {
      case EventModes.GEM_GRAB:
        result.gameModeIconPath = gemGrabIcon
        break
      case EventModes.BASKET_BRAWL:
        result.gameModeColor = '#f76107'
        result.gameModeIconPath = basketBrawlIcon
        break
      case EventModes.BIG_GAME:
        result.gameModeColor = '#ab0124'
        result.gameModeIconPath = bigGameIcon
        break
      case EventModes.BOSS_FIGHT:
        result.gameModeColor = '#fe211e'
        result.gameModeIconPath = bossFightIcon
        break
      case EventModes.BOUNTY:
        result.gameModeColor = '#00cffb'
        result.gameModeIconPath = bountyIcon
        break
      case EventModes.BRAWL_BALL:
        result.gameModeColor = '#899fdc'
        result.gameModeIconPath = brawlBallIcon
        break
      case EventModes.DUELS:
        //todo find color
        result.gameModeIconPath = duelsIcon
        break
      case EventModes.DUO_SHOWDOWN:
      case EventModes.SOLO_SHOWDOWN:
        result.gameModeColor = '#80d41f'
        result.gameModeIconPath = showdownIcon
        break
      case EventModes.HEIST:
        result.gameModeColor = '#d45ecf'
        result.gameModeIconPath = heistIcon
        break
      case EventModes.HOT_ZONE:
        result.gameModeColor = '#e33b50'
        result.gameModeIconPath = hotZoneIcon
        break
      case EventModes.KNOCKOUT:
        result.gameModeColor = '#f78b24'
        result.gameModeIconPath = knockoutIcon
        break
      case EventModes.LONE_STAR:
        result.gameModeColor = '#e44f58'
        result.gameModeIconPath = loneStarIcon
        break
      case EventModes.PAYLOAD:
        //  todo find data
        break
      case EventModes.PRESENT_PLUNDER:
        result.gameModeColor = '#3da858'
        break
      case EventModes.ROBO_RUMBLE:
        result.gameModeColor = '#dc2424'
        result.gameModeIconPath = roboRumbleIcon
        break
      case EventModes.SIEGE:
        result.gameModeColor = '#f04f32'
        result.gameModeIconPath = siegeIcon
        break
      case EventModes.SUPER_CITY_RAMPAGE:
        result.gameModeColor = '#da2522'
        result.gameModeIconPath = superCityRampageIcon
        break
      case EventModes.TAKEDOWN:
        result.gameModeColor = '#5388f4'
        result.gameModeIconPath = takedownIcon
        break
      case EventModes.TROPHY_THIEVES:
        //todo find data
        break
      case EventModes.VOLLEY_BRAWL:
        result.gameModeColor = '#b9fb27'
        result.gameModeIconPath = volleyBrawlIcon
        break
      case EventModes.WIPEOUT:
        // todo find data
        break
    }

    return result
  }

export default getGameModeData