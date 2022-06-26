import React from 'react'
import styled from 'styled-components'
import Loader from '../UI/Loader'

const AppLoaderContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`

const AppLoader = () => {
  return (
    <AppLoaderContainer>
      <Loader />
    </AppLoaderContainer>
  )
}

export default AppLoader