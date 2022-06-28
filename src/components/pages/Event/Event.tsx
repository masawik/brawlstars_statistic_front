import React, { createRef, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Container } from '../../layout/Container'
import BrawlerTable from './BrawlerTable/BrawlerTable'
import { useAppSelector } from '../../../hooks/useAppSelector'
import { useAppDispatch } from '../../../hooks/useAppDispatch'
import { getEventStatistic } from '../../../store/eventStatistic/eventStatisticAsyncActions'
import {
  createEventStatisticSelector,
  selectEventStatisticFetching,
} from '../../../store/eventStatistic/eventStatisticSelectors'
import { useTranslation } from 'react-i18next'
import Plug from '../../Plug/Plug'
import styled from 'styled-components'
import { elementSize, media } from '../../../styles/mixins'
//todo динамически имортировать при подходящей ширине экрана
import 'viewerjs/dist/viewer.css'
import Viewer from 'viewerjs'
import searchIcon from '../../../assets/img/icon_search.png'


const ContentGrid = styled.div`
  display: grid;
  gap: 20px;

  grid-template-areas:
          'info'
          'table'
          'map';

  ${media('md')`
    grid-template-areas:
    'info info'
    'map table';
    grid-template-columns: 300px 1fr;
  `}

  ${media('lg')`
      gap: 40px;
  `}
`

const TableContainer = styled.div`
  grid-area: table;
`

const EventMapImageContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 400px;
  justify-self: center;
  grid-area: map;


  ${media('md')`
      width: 300px;
      cursor: zoom-in;
      overflow: hidden;
      box-sizing: border-box;
  `}
  
  ${({ theme }) => media('md')`
    border: 2px solid ${theme.color.types.primary.normal};

    &::after {
      position: absolute;
      top: -30px;
      right: -30px;
      content: '';
      ${elementSize(60)};
      transform: rotate(45deg);
      background-color: ${theme.color.types.primary.normal};
    }
    
    &::before {
    content: '';
    position: absolute;
    top: 2px;
    right: 2px;
    z-index: 10;
    height: 20px;
    width: 20px;
    background-image: url(${searchIcon});
    background-size: contain;
    background-repeat: no-repeat;
    transform: rotate(-90deg);
  }
  `}
`

const EventInfoContainer = styled.div`
  grid-area: info;
`

const Event = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const { eventId } = useParams()
  const parsedEventId = Number(eventId)

  if (isNaN(parsedEventId)) {
    navigate('/not-found')
  }

  const isLoading = useAppSelector(selectEventStatisticFetching)
  const statistic =
    useAppSelector(createEventStatisticSelector(parsedEventId)) ?? []

  const { t } = useTranslation('event')

  const mapImageRef = createRef<HTMLImageElement>()

  useEffect(() => {
    if (window.outerWidth >= 768 && mapImageRef.current) {
      new Viewer(mapImageRef.current, {
        focus: false,
        fullscreen: false,
        loading: false,
        navbar: false,
        rotatable: false,
        title: false,
        toolbar: false,
        tooltip: false,
      })
    }
  }, [mapImageRef.current])

  useEffect(() => {
    if (statistic.length) return
    dispatch(getEventStatistic(parsedEventId))
  }, [parsedEventId])

  return (
    <Container>
      <ContentGrid>
        <div>
          <h1>map name</h1>
          <div>game mode</div>
        </div>

        <TableContainer>
          {
            !isLoading && !statistic.length &&
            <Plug content={t('noStatisticOnThisEventMessage')} />
          }

          {
            (isLoading || !!statistic.length) &&
            <BrawlerTable isLoading={isLoading} statistic={statistic} />
          }
        </TableContainer>

        <EventMapImageContainer>
          <img
            ref={mapImageRef}
            src='https://cdn.brawlstats.com/maps/supercell-chill-space.png'
            alt='' />
        </EventMapImageContainer>
      </ContentGrid>
    </Container>
  )
}

export default Event