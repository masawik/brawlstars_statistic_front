import React from 'react'
import defaultEventImage from '../../assets/img/map_23b.png'
import { EventModes } from '../../typings/eventModes'
import getGameModeData from './getGameModeData'
import styled, { css } from 'styled-components'
import * as SM from '../../styles/mixins'
import defaultGameModeIcon from '../../assets/img/game-modes/gift.png'

export interface EventCardProps {
  title: string
  description: string
  gameMode: EventModes
  backgroundImagePath?: string
}

const cardWidth = 260
const containerSkew = 5 // in degs

const CardContainer = styled.a`
  position: relative;
  display: block;
  border-radius: 2px;
  width: ${cardWidth}px;
  height: ${cardWidth / 2.5}px;
  overflow: hidden;
  box-shadow: 0 3px 0 rgba(0, 0, 0, 0.5);
  transform: skew(${containerSkew * -1}deg);
  border: 2px solid #000;

  ${({ theme }) => css`
    ${SM.transition(
            theme.transitionDurationMs.default,
            ['transform', 'box-shadow']
    )}

    ${SM.onHover`
      box-shadow: 0 2px 0 rgba(0, 0, 0, 0.5);
      transform: skew(${containerSkew * -1}deg) translateY(1px);
    `}

    ${SM.onFocus`
      box-shadow: 0 1px 0 rgba(0, 0, 0, 0.5);
      transform: skew(${containerSkew * -1}deg) translateY(2px);
    `}

    ${SM.onActive`
      box-shadow: none;
    transform: skew(${containerSkew * -1}deg) translateY(3px);
    `}
  `}
`

const CardContent = styled.div`
  position: absolute;
  top: 0;
  right: -10px;
  bottom: 0;
  left: -10px;
  transform: skew(${containerSkew}deg);
  color: ${({ theme: { color: { text } } }) => text};
`

interface IEventInfoProps {
  backgroundColor?: string
  icon?: string
}

const EventInfo = styled.div<IEventInfoProps>`
  padding: 5px 20px 0 70px;
  height: 50%;
  font-size: 18px;
  background-repeat: no-repeat;
  background-position: 20px center;
  background-size: 40px;

  ${({ theme: { fonts }, backgroundColor, icon }) => css`
    font-family: ${fonts.inGame};
    background-color: ${backgroundColor ?? '#9a3cf2'};
    background-image: url(${icon ?? defaultGameModeIcon});
  `}
`

const EventTitle = styled.div`
  text-shadow: 0 2px #000;
  -webkit-text-stroke: 1.4px #000;
`

const EventDescription = styled.div`
  font-size: 14px;
  text-shadow: 0 1px #000;
  -webkit-text-stroke: 0.8px #000;
`

interface IImageContainerProps {
  image?: string
}

const ImageContainer = styled.div<IImageContainerProps>`
  width: 100%;
  height: 50%;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  box-shadow: inset 0 5px 0 0 rgb(0 0 0 / 40%),
  inset 0 2px 0 0 rgb(0 0 0 / 40%);

  ${({ image }) => css`
    background-image: url(${image ?? defaultEventImage});
  `}
`

const EventCard: React.FC<EventCardProps> =
  ({
     title,
     description,
     gameMode,
     backgroundImagePath = defaultEventImage,
   }) => {

    const { gameModeIconPath, gameModeColor } =
      getGameModeData(gameMode)

    return (
      <CardContainer href='#'>
        <CardContent>
          <EventInfo
            backgroundColor={gameModeColor}
            icon={gameModeIconPath}
          >
            <EventTitle>{title}</EventTitle>
            <EventDescription>{description}</EventDescription>
          </EventInfo>

          <ImageContainer image={backgroundImagePath} />
        </CardContent>
      </CardContainer>
    )
  }

export default EventCard