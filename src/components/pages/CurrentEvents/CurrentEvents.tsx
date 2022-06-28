import React, { useEffect } from 'react'
import { Container } from '../../layout/Container'
import EventList from '../../EventList/EventList'
import styled from 'styled-components'
import Loader from '../../UI/Loader'
import { useAppSelector } from '../../../hooks/useAppSelector'
import { useAppDispatch } from '../../../hooks/useAppDispatch'
import { useTranslation } from 'react-i18next'
import Plug from '../../Plug/Plug'
import {
  selectCurrentEvents,
  selectEventsFetching,
} from '../../../store/events/eventsSelectors'
import { getCurrentEvents } from '../../../store/events/eventsAsyncActions'

const Title = styled.h1`
  margin-bottom: 20px;
  text-align: center;
`

const CurrentEvents = () => {
  const isFetching = useAppSelector(selectEventsFetching)
  const currentEvents = useAppSelector(selectCurrentEvents)
  const dispatch = useAppDispatch()
  const { t } = useTranslation('currentEvents')

  useEffect(() => {
    if (currentEvents.length) return
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
            : <Plug content={t('eventsDataUnavailable')} />
        )}
      </Container>
    </section>
  )
}

export default CurrentEvents