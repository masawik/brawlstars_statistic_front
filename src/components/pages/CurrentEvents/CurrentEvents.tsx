import React, { useEffect } from 'react'
import { Container } from '../../layout/Container'
import EventList from '../../EventList/EventList'
import styled from 'styled-components'
import Loader from '../../UI/Loader'
import { useAppSelector } from '../../../hooks/useAppSelector'
import {
  selectCurrentEvents,
  selectCurrentEventsFetching,
} from '../../../store/currentEvents/currentEventsSelectors'
import { useAppDispatch } from '../../../hooks/useAppDispatch'
import { getCurrentEvents } from '../../../store/currentEvents/currentEventsAsyncActions'
import { useTranslation } from 'react-i18next'

const Title = styled.h1`
  margin-bottom: 20px;
  text-align: center;
`

const CurrentEvents = () => {
  const isFetching = useAppSelector(selectCurrentEventsFetching)
  const currentEvents = useAppSelector(selectCurrentEvents)
  const dispatch = useAppDispatch()
  const { t } = useTranslation('currentEvents')

  useEffect(() => {
    if (currentEvents.length !== 0) return
    dispatch(getCurrentEvents())
  }, [])

  return (
    <section>
      <Container>
        <Title>{t('pageTitle')}</Title>
        {isFetching && <Loader />}

        {!isFetching &&
        (
          currentEvents.length
            ? <EventList events={currentEvents} />
            : t('eventsDataUnavailable')
        )}
      </Container>
    </section>
  )
}

export default CurrentEvents