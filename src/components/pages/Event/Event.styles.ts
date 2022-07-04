import styled, { css } from 'styled-components'
import { elementSize, media } from '../../../styles/mixins'
import searchIcon from '../../../assets/img/ui/icon_search.png'

interface IContentGridProps {
  withMap: boolean
}

export const EventContentGrid = styled.div<IContentGridProps>`
  display: grid;
  gap: 20px;


  ${({ withMap }) => css`
    grid-template-areas:
          'info'
          'table'
          ${withMap ? '\'map\'' : ''};

    ${media('md')`
      grid-template-areas:
      'info info'
      '${withMap ? 'map' : 'table'} table';
      grid-template-columns: ${withMap ? '300px' : ''} 1fr;
    `}
  `}

  ${media('lg')`
      gap: 40px;
  `}
`

export const EventTableContainer = styled.div`
  grid-area: table;
`

export const EventMapImageContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 400px;
  justify-self: center;
  grid-area: map;


  ${media('md')`
      width: 300px;
      cursor: zoom-in;
      overflow: hidden;
      box-sizing: border-box;
  `}

  ${({ theme }) => media('md')`
    border: 2px solid ${theme.color.types.primary.normal};

    &::after {
      position: absolute;
      top: -30px;
      right: -30px;
      content: '';
      ${elementSize(60)};
      transform: rotate(45deg);
      background-color: ${theme.color.types.primary.normal};
    }
    
    &::before {
    content: '';
    position: absolute;
    top: 2px;
    right: 2px;
    z-index: 10;
    height: 20px;
    width: 20px;
    background-image: url(${searchIcon});
    background-size: contain;
    background-repeat: no-repeat;
    transform: rotate(-90deg);
  }
  `}
`

export const EventInfoContainer = styled.div`
  grid-area: info;
`