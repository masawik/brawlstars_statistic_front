import styled from 'styled-components'
import { Link } from '../../../UI/Link'
import { media } from '../../../../styles/mixins'

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