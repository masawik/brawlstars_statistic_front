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
//todo динамически имортировать при подходящей ширине экрана
import 'viewerjs/dist/viewer.css'
import Viewer from 'viewerjs'
import {
  createEventByIdSelector,
  selectEventsFetching,
} from '../../../store/events/eventsSelectors'
import {
  EventContentGrid,
  EventInfoContainer,
  EventTableContainer,
  EventMapImageContainer,
} from './Event.styles'
import { getEventById } from '../../../store/events/eventsAsyncActions'
import Loader from '../../UI/Loader'


const Event = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const { eventId } = useParams()
  const parsedEventId = Number(eventId)

  if (isNaN(parsedEventId)) {
    navigate('/not-found')
  }

  const eventData = useAppSelector(createEventByIdSelector(parsedEventId))
  const isLoadingEventData = useAppSelector(selectEventsFetching)

  const isLoadingStatistic = useAppSelector(selectEventStatisticFetching)
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

  useEffect(() => {
    if (eventData) return
    dispatch(getEventById(parsedEventId))
  }, [eventData, parsedEventId])

  return (
    <Container>
      {!eventData && isLoadingEventData && <Loader />}

      {!eventData && !isLoadingEventData &&
      <Plug content={t('noStatisticOnThisEventMessage')} />}

      {
        eventData &&
        <EventContentGrid withMap={!!eventData.mapImageUrl}>
          <EventInfoContainer>
            <h1>{eventData.mapName}</h1>
            <div>{eventData.gameMode}</div>
          </EventInfoContainer>

          <EventTableContainer>
            {
              !isLoadingStatistic && !statistic.length &&
              <Plug content={t('noStatisticOnThisEventMessage')} />
            }

            {
              (isLoadingStatistic || !!statistic.length) &&
              <BrawlerTable isLoading={isLoadingStatistic} statistic={statistic} />
            }
          </EventTableContainer>

          {
            eventData.mapImageUrl &&
            <EventMapImageContainer>
              <img
                ref={mapImageRef}
                src={eventData.mapImageUrl}
                alt='' />
            </EventMapImageContainer>
          }

        </EventContentGrid>
      }
    </Container>
  )
}

export default Event