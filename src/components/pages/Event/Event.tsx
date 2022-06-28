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
// import 'viewerjs/dist/viewer.css'
// import Viewer from 'viewerjs'
import styled, { css } from 'styled-components'
import { elementSize, media } from '../../../styles/mixins'

const TableContainer = styled.div`
  margin-bottom: 20px;
`

const EventMapImageContainer = styled.div`
  display: contents;
  position: relative;
  width: 100%;
  cursor: pointer;
  overflow: hidden;
  box-sizing: border-box;

  ${media('md')`
      display: inline-block;
      width: 300px;
  `}


  ${({ theme }) => css`
    border: 2px solid ${theme.color.types.primary.normal};

    &::after {
      position: absolute;
      top: -25px;
      right: -25px;
      content: '';
      ${elementSize(50)};
      transform: rotate(45deg);
      background-color: ${theme.color.types.primary.normal};
    }
  `}
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

  // useEffect(() => {
  //   const imageEl = document.getElementById('image')
  //   if (imageEl) {
  //     new Viewer(imageEl, {})
  //   }
  // }, [])

  useEffect(() => {
    if (statistic.length) return
    dispatch(getEventStatistic(parsedEventId))
  }, [parsedEventId])

  return (
    <Container>
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

      {/*<EventMapImageContainer>*/}
      {/*  <img*/}
      {/*    id='image'*/}
      {/*    src='https://cdn.brawlstats.com/maps/supercell-chill-space.png'*/}
      {/*    alt='' />*/}
      {/*</EventMapImageContainer>*/}


    </Container>
  )
}

export default Event