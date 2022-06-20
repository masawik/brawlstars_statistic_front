import React from 'react'
import logoIcon from '../../assets/img/logo-star.png'
import LanguagePicker from './LanguagePicker/LanguagePicker'
import styled, { css } from 'styled-components'
import { Container } from '../UI/Container'
import { Link as StyledLink } from '../UI/Link'
import { NavLink } from 'react-router-dom'

const HeaderContainer = styled.div`
  margin-bottom: 15px;

  ${({ theme }) => css`
    background-color: ${theme.color.header};
  `}
`

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px 0;
`

const LogoLink = styled(StyledLink).attrs({ type: 'icon', as: NavLink })`
  width: 50px;
  height: 50px;
`

const Header = () => {
  return (
    <HeaderContainer>
      <Container>
        <HeaderContent>
          <LogoLink to='/' href='#'>
            <img src={logoIcon} alt='brawl stars logo' />
          </LogoLink>

          <LanguagePicker />
        </HeaderContent>
      </Container>
    </HeaderContainer>
  )
}

export default Header