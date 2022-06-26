import styled from 'styled-components'
import { Link } from '../../../UI/Link'
import { media } from '../../../../styles/mixins'
import ContentLoader from 'react-content-loader'
import React from 'react'

export const Table = styled.table`
  width: 100%;
  margin: 0 auto;
  max-width: 650px;
  border: 1px solid #000;
  background-color: rgba(255, 255, 255, 0.1);
  border-collapse: collapse;
  text-align: center;

  td {
    padding: 5px;
  }

  ${media('md')`
    td {
      padding: 10px 5px;
    }
    
    th {
      font-size: 18px;
    }
  `}

  ${media('lg')`
    th {
      font-size: 24px;
    }
    td {
      font-size: 20px;
      padding: 10px 5px;
    }
  `}
`

export const TableHeadRow = styled.tr`
  background-color: rgba(0, 0, 0, 0.1);
`

export const SortBtn = styled(Link).attrs({ as: 'button' })`
  text-shadow: none;
`

export const BrawlerCell = styled.td`
  text-align: left;
`

export const BrawlerSkeleton = () => {
  return (
    <ContentLoader
      speed={2}
      width={97}
      height={35}
      viewBox='0 0 97 35'
      backgroundColor='#a8a8a8'
      foregroundColor='#8f8f8f'
    >
      <rect x='1' y='2' rx='0' ry='0' width='32' height='32' />
      <rect x='40' y='15' rx='2' ry='2' width='52' height='16' />
    </ContentLoader>
  )
}

export const TableValueSkeleton = () => {
  return (
    <ContentLoader
      speed={2}
      width={40}
      height={29}
      viewBox='0 0 40 29'
      backgroundColor='#a8a8a8'
      foregroundColor='#8f8f8f'
    >
      <rect x='1' y='14' rx='2' ry='2' width='39' height='12' />
    </ContentLoader>
  )
}