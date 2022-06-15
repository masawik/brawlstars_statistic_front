import React from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import * as SM from './styles/mixins'

const testVar = 'green'

const TestComponent = styled.button`
  height: 100px;
  width: 100px;
  background-color: red;
  border: 5px solid transparent;

  ${SM.transition(
          500,
          ['background-color', 'border', 'transform', 'width'],
          'revert-layer'
  )}

  ${SM.onHover`
    background-color: ${testVar};
    border: 5px solid black;
  `}

  ${SM.onFocus`
    transform: translateY(20px);
    outline: 3px solid yellow;
  `}

  ${SM.onActive`
    transform: skew(-5deg);
  `}

  ${SM.media('md')`
    width: 400px;
  `}
`

function App() {
  const { t } = useTranslation()

  return (
    <>
      <TestComponent>
        Приветик!
      </TestComponent>
      {/*<Header />*/}

      {/*<Events />*/}
    </>
  )
}

export default App
