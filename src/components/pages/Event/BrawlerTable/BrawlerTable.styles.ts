import styled from 'styled-components'
import { Link } from '../../../UI/Link'

export const Table = styled.table`
  width: 100%;
  border: 1px solid #000;
  background-color: rgba(255, 255, 255, 0.1);
  border-collapse: collapse;
  text-align: center;

  td {
    padding: 5px;
  }
`

export const TableHeadRow = styled.tr`
  background-color: rgba(0, 0, 0, 0.1);
`

export const SortBtn = styled(Link).attrs({ as: 'button' })`
  text-shadow: none;
`