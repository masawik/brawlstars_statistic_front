import React, { useCallback, useMemo } from 'react'
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
import {
  BrawlerCell,
  BrawlerSkeleton,
  SortBtn,
  Table,
  TableHeadRow, TableValueSkeleton,
} from './BrawlerTable.styles'
import { TColorTypes } from '../../../../styles/styled'
import { IBrawlerStatisticData } from '../../../../types/brawlerData'
import { useTranslation } from 'react-i18next'

// @ts-ignore
type THeader = Header<Overwrite<{ Renderer: Render, Rendered: React.ReactNode | JSX.Element }, { Row: BrawlerStatistic }>>
// @ts-ignore
type TCell = Cell<Overwrite<{ Renderer: Render, Rendered: React.ReactNode | JSX.Element }, { Row: BrawlerStatistic }>>

const table = createTable().setRowType<IBrawlerStatisticData>()

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

const placeholderStatisticData: IBrawlerStatisticData[] = [
  { name: 'placeholder', games: 0, victories: 0, winRate: 0 },
  { name: 'placeholder', games: 0, victories: 0, winRate: 0 },
  { name: 'placeholder', games: 0, victories: 0, winRate: 0 },
  { name: 'placeholder', games: 0, victories: 0, winRate: 0 },
]

interface IBrawlerTableProps {
  statistic: IBrawlerStatisticData[],
  isLoading: boolean
}

const BrawlerTable: React.FC<IBrawlerTableProps> =
  ({ statistic, isLoading }) => {
    const [sorting, setSorting] =
      React.useState<SortingState>([{ 'id': 'winRate', 'desc': true }])

    const { t, i18n } = useTranslation('brawlerTable')

    const columnSchema = useMemo(() => [
      table.createDataColumn('name', {
        cell: info => info.getValue(),
        header: () => t('brawler'),
        enableSorting: false,
      }),
      table.createDataColumn('games', {
        cell: info => info.getValue(),
        header: () => t('numberOfGames'),
        sortingFn: 'basic',
      }),
      table.createDataColumn('victories', {
        cell: info => info.getValue(),
        header: () => t('numberOfVictories'),
        sortingFn: 'basic',
      }),
      table.createDataColumn('winRate', {
        cell: info => `${info.getValue()}%`,
        header: () => t('winRate'),
        sortingFn: 'basic',
        sortDescFirst: true,
      }),
    ], [i18n.language])

    const instance = useTableInstance(table, {
      data: isLoading ? placeholderStatisticData : statistic,
      columns: columnSchema,
      state: { sorting },
      getCoreRowModel: getCoreRowModel(),
      onSortingChange: setSorting,
      getSortedRowModel: getSortedRowModel(),
    })

    //----- Rendering -----
    const renderTh = useCallback((header: THeader) => {
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
    }, [])

    //todo разобраться как сделать лучше
    const imageByNameMap: { [key: string]: string | undefined } = {}
    statistic.forEach(brawlerData => {
      imageByNameMap[brawlerData.name] = brawlerData.imageUrl
    })

    const renderBrawlerCell = (cell: TCell) => {
      let content
      const brawlerName = cell.getValue() as string
      const brawlerImage = imageByNameMap[brawlerName] ?? defaultBrawlerImage

      if (isLoading) {
        content = (<BrawlerSkeleton />)
      } else {
        content = (<BrawlerCard
          name={brawlerName}
          imageUrl={brawlerImage}
        />)
      }

      return (
        <BrawlerCell key={cell.id}>
          {content}
        </BrawlerCell>
      )
    }

    const renderCell = (cell: TCell) => {
      if (cell.column.id === 'name') return renderBrawlerCell(cell)

      return (
        <td key={cell.id}>
          {isLoading
            ? <TableValueSkeleton />
            : cell.renderCell()}
        </td>)
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