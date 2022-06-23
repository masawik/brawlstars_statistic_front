import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Container } from '../../UI/Container'
import BrawlerTable from './BrawlerTable/BrawlerTable'
import { useAppSelector } from '../../../hooks/useAppSelector'
import { useAppDispatch } from '../../../hooks/useAppDispatch'
import { getEventStatistic } from '../../../store/eventStatistic/eventStatisticAsyncActions'
import {
  createEventStatisticSelector,
  selectEventStatisticFetching,
} from '../../../store/eventStatistic/eventStatisticSelectors'
import Loader from '../../UI/Loader'

const Event = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const { eventId } = useParams()
  const parsedEventId = Number(eventId)
  if (isNaN(parsedEventId)) {
    navigate('/not-found')
    //todo добавить так же редирект при указании не существующего на сервере event
  }

  const isLoading = useAppSelector(selectEventStatisticFetching)
  const statistic =
    useAppSelector(createEventStatisticSelector(parsedEventId))

  useEffect(() => {
    if (statistic) return
    dispatch(getEventStatistic(parsedEventId))
  }, [parsedEventId])

  return (
    <Container>
      event id: {eventId}
      {isLoading && <Loader />}
      {!isLoading && !statistic && 'no statistic for this event'}
      {statistic && <BrawlerTable statistic={statistic} />}
    </Container>
  )
}

export default Event