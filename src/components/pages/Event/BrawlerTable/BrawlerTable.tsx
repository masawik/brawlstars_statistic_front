import React from 'react'
import {
  Cell,
  createTable,
  getCoreRowModel,
  getSortedRowModel, Header,
  Overwrite,
  Render,
  SortDirection,
  SortingState,
  useTableInstance,
} from '@tanstack/react-table'
import BrawlerCard from './BrawlerCard/BrawlerCard'
import defaultBrawlerImage from '../../../../assets/img/brawlers/28000011.png'
import { SortBtn, Table, TableHeadRow } from './BrawlerTable.styles'
import { TColorTypes } from '../../../../styles/styled'

// ---- types ----
type BrawlerStatistic = {
  brawler: string,
  games: number,
  victories: number,
  winRate: number
}
// @ts-ignore
type THeader = Header<Overwrite<{ Renderer: Render, Rendered: React.ReactNode | JSX.Element }, { Row: BrawlerStatistic }>>
// @ts-ignore
type TCell = Cell<Overwrite<{ Renderer: Render, Rendered: React.ReactNode | JSX.Element }, { Row: BrawlerStatistic }>>


const table = createTable().setRowType<BrawlerStatistic>()

const columnSchema = [
  table.createDataColumn('brawler', {
    cell: info => info.getValue(),
    header: () => 'brawler',
    enableSorting: false,
  }),
  table.createDataColumn('games', {
    cell: info => info.getValue(),
    sortingFn: 'basic',
  }),
  table.createDataColumn('victories', {
    cell: info => info.getValue(),
    sortingFn: 'basic',
  }),
  table.createDataColumn('winRate', {
    cell: info => `${info.getValue()}%`,
    header: () => 'win rate',
    sortingFn: 'basic',
    sortDescFirst: true,
  }),
]

const mockData: BrawlerStatistic[] = [
  {
    brawler: 'Mike',
    games: 110,
    victories: 55,
    winRate: 50,
  },
  {
    brawler: 'Edgar',
    games: 50,
    victories: 20,
    winRate: 40,
  },
  {
    brawler: 'Penny',
    games: 100,
    victories: 65,
    winRate: 65,
  },
]

const getSortBtnColorBySortState =
  (isSorted: false | SortDirection): keyof TColorTypes => {
    switch (isSorted) {
      case 'desc':
        return 'success'
      case 'asc':
        return 'danger'
      default:
        return 'warning'
    }
  }


function BrawlerTable() {
  const [data, setData] = React.useState(mockData)

  const [sorting, setSorting] =
    React.useState<SortingState>([{ 'id': 'winRate', 'desc': true }])

  const instance = useTableInstance(table, {
    data,
    columns: columnSchema,
    state: { sorting },
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
  })

  //----- Rendering -----
  const renderTh = (header: THeader) => {
    if (header.isPlaceholder) return

    let content = header.renderHeader()

    if (header.column.getCanSort()) {
      const sortedState = header.column.getIsSorted()

      content = (
        <SortBtn
          as='button'
          onClick={header.column.getToggleSortingHandler()}
          color={getSortBtnColorBySortState(sortedState)}
        >{content}</SortBtn>
      )
    }

    return (<th key={header.id}>{content}</th>)
  }

  const renderCell = (cell: TCell) => {
    let content

    if (cell.column.id === 'brawler') {
      content = (<BrawlerCard
        name={cell.getValue() as string}
        imageUrl={defaultBrawlerImage}
      />)
    } else {
      content = cell.renderCell()
    }

    return (<td key={cell.id}>{content}</td>)
  }

  const $Thead = (
    <thead>
    {instance
      .getHeaderGroups()
      .map(headerGroup => (
        <TableHeadRow key={headerGroup.id}>
          {headerGroup.headers.map(renderTh)}
        </TableHeadRow>
      ))}
    </thead>
  )

  const $TBody = (
    <tbody>
    {instance
      .getRowModel()
      .rows
      .map(row => (
        <tr key={row.id}>
          {row.getVisibleCells().map(renderCell)}
        </tr>
      ))}
    </tbody>
  )

  return (
    <Table>
      {$Thead}
      {$TBody}
    </Table>
  )
}

export default BrawlerTable