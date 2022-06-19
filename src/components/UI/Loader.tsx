import React, { useEffect, useState } from 'react'
import styled, { keyframes } from 'styled-components'
import logoImg from '../../assets/img/logo-star-wings.png'

const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const loaderImageAnimation = keyframes`
  to {
    transform: scale(0.95);
  }
`

const LoaderImage = styled.div`
  height: 60px;
  width: 60px;
  margin-bottom: 10px;
  background-image: url("${logoImg}");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  animation: ${loaderImageAnimation} 500ms alternate-reverse linear infinite;
`

const Loader = () => {
  const [dots, setDots] = useState('.')

  useEffect(() => {
    const timer = setInterval(() => {
      setDots(prevState => '.'.repeat((prevState.length + 1) % 4))
    }, 500)

    return () => clearInterval(timer)
  }, [])

  return (
    <LoaderContainer>
      <LoaderImage />
      Loading{dots}
    </LoaderContainer>
  )
}

export default Loader