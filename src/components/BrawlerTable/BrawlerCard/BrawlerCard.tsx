import React from 'react'
import styled from 'styled-components'

interface IBrawlerCardProps {
  name: string,
  imageUrl: string
}

const CardContainer = styled.div`
  display: flex;
  align-items: center;
`

const ImageContainer = styled.div`
  width: 32px;
  margin-right: 10px;
`

const BrawlerCard: React.FC<IBrawlerCardProps> =
  ({ name, imageUrl }) => {
    return (
      <CardContainer>
        <ImageContainer>
          <img src={imageUrl} alt={name} />
        </ImageContainer>
        {name}
      </CardContainer>
    )
  }

export default BrawlerCard