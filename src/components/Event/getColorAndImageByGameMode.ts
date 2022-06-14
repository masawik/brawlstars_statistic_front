import { EventModes } from '../../typings/eventModes'
import defaultGameModeImage from '../../assets/img/game-modes/gift.png'


const getColorAndImageByGameMode =
  (gameMode: EventModes): {
    gameModeColor: string,
    gameModeIconPath: string
  } => {
    const result = {
      gameModeColor: '#9a3cf2',
      gameModeIconPath: defaultGameModeImage,
    }



    return result
  }

export default getColorAndImageByGameMode