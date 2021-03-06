import React, { useEffect } from 'react'
import styled, { css } from 'styled-components'
import { Container } from '../layout/Container'
import { Button } from './Button'
import { useClickOutside } from '../../hooks/useClickOutside'
import closeButtonIcon from '../../assets/img/ui/button_close.png'
import Portal from '../layout/Portal'
import { elementSize, media } from '../../styles/mixins'

const Wrapper = styled(Container)`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);

  ${media('wd')`max-width: none;`}
  & > div {
    width: 100%;
  }
`

const PopupContainer = styled.div`
  width: 100%;
  max-width: 400px;
  border: 1px solid rgba(0, 0, 0, 0.5);
`

const PopupHeader = styled.div`
  position: relative;
  padding: 10px 30px;
  text-shadow: 0 2px #000;
  font-size: 18px;
  text-align: center;
  box-shadow: inset 0 -5px 0 0 rgba(0, 0, 0, 0.3);
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);

  ${({ theme }) => css`
    background-color: ${theme.color.types.primary.normal};
  `}
`

const CloseButton = styled(Button).attrs({
  color: 'danger',
  backgroundIcon: {
    url: closeButtonIcon,
    size: '20px',
  },
})`
  position: absolute;
  right: -5px;
  top: -5px;
  z-index: 10;
  ${elementSize(30)}
`

const PopupBody = styled.div`
  position: relative;
  padding-bottom: 15px;
  padding-top: 10px;

  ${({ theme: { color: { types: { primary } } } }) => css`
    background-color: ${primary.darken};

    &::after {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      content: '';
      height: 5px;
      border-top: 1px solid rgba(0, 0, 0, 0.5);
      background-color: ${primary.normal};
    }
  `}
`

interface IPopupProps {
  children: React.ReactNode,
  onClose: () => void,
  title: React.ReactNode
}

const Popup: React.FC<IPopupProps> =
  ({
     children,
     onClose,
     title,
   }) => {
    const [popupWindowRef, isClickedOutside] = useClickOutside()

    useEffect(() => {
      document.body.style.overflowY = 'hidden'
      return () => {
        document.body.style.overflowY = ''
      }
    }, [])

    useEffect(() => {
      if (isClickedOutside) onClose()
    }, [onClose, isClickedOutside])

    return (
      <Portal>
        <Wrapper>
          <PopupContainer ref={popupWindowRef}>
            <PopupHeader>
              {title}

              <CloseButton aria-label='close window'
                           onClick={onClose}
              />
            </PopupHeader>

            <PopupBody>{children}</PopupBody>


          </PopupContainer>
        </Wrapper>
      </Portal>
    )
  }

export default Popup