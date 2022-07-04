import React from 'react'
import logoIcon from '../../assets/img/ui/logo-star.png'
import LanguagePicker from './LanguagePicker/LanguagePicker'
import styled, { css } from 'styled-components'
import { Container } from '../layout/Container'
import { ILinkProps, Link as StyledLink } from '../UI/Link'
import { NavLink } from 'react-router-dom'
import { media } from '../../styles/mixins'
import { useTranslation } from 'react-i18next'

const HeaderContainer = styled.div`
  margin-bottom: 15px;

  ${({ theme }) => css`
    background-color: ${theme.color.header};
  `}
`

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 0;
`

const logoLinkAttrs: ILinkProps = {
  as: NavLink,
  linkType: 'icon',
}
const LogoLink = styled(StyledLink).withConfig({
  shouldForwardProp: (prop, defaultValidatorFn) =>
    !['linkType'].includes(prop)
    && defaultValidatorFn(prop),
}).attrs(logoLinkAttrs)`
  width: 50px;
  height: 50px;

  ${media('md')`
    width: 65px;
    height: 65px;
  `}

  ${media('lg')`
    width: 80px;
    height: 80px;
  `}
`

const Header = () => {
  const { t } = useTranslation('header')
  return (
    <HeaderContainer>
      <Container>
        <HeaderContent>
          <LogoLink to='/' href='#' aria-label={t('goHomeLinkAria')}>
            <img src={logoIcon} alt='brawl stars' />
          </LogoLink>

          <LanguagePicker />
        </HeaderContent>
      </Container>
    </HeaderContainer>
  )
}

export default Header