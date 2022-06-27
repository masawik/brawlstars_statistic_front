import React, { useEffect } from 'react'
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
    useAppSelector(createEventStatisticSelector(parsedEventId)) ?? []

  const { t } = useTranslation('event')

  useEffect(() => {
    if (statistic.length) return
    dispatch(getEventStatistic(parsedEventId))
  }, [parsedEventId])

  return (
    <Container>
      {
        !isLoading && !statistic.length &&
        <Plug text={t('noStatisticOnThisEventMessage')} />
      }

      {
        (isLoading || !!statistic.length) &&
        <BrawlerTable isLoading={isLoading} statistic={statistic} />
      }

    </Container>
  )
}

export default Event