import React from 'react'
import styled from 'styled-components'
import { elementSize, media } from '../../styles/mixins'

const PlugContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const PlugImageContainer = styled.div`
  ${elementSize(120)};
  color: rgba(0, 0, 0, 0.3);
  margin-bottom: 30px;

  ${media('wd')`
    ${elementSize(150)}
  `}
`

const PlugText = styled.div`
  color: rgba(0, 0, 0, 0.7);
  font-size: 24px;
  text-align: center;
  user-select: none;
  
  ${media('wd')`
    font-size: 34px;
  `}
`

interface IPlugProps {
  text: string
}

const Plug: React.FC<IPlugProps> = ({ text }) => {
  return (
    <PlugContainer>
      <PlugImageContainer>
        <svg version='1.0'
             xmlns='http://www.w3.org/2000/svg'
             width='288.000000pt'
             height='288.000000pt'
             viewBox='0 0 288.000000 288.000000'
             preserveAspectRatio='xMidYMid meet'>

          <g transform='translate(0.000000,288.000000) scale(0.100000,-0.100000)'
             fill='currentColor' stroke='none'>
            <path d='M1305 2874 c-223 -32 -349 -69 -511 -150 -400 -199 -684 -579 -771
-1029 -24 -124 -24 -386 0 -510 116 -597 569 -1050 1162 -1161 137 -26 373
-26 510 0 221 41 429 132 607 266 291 219 484 530 555 895 24 124 24 386 0
510 -114 588 -558 1040 -1137 1156 -91 19 -348 33 -415 23z m440 -168 c123
-31 184 -55 299 -114 332 -171 572 -481 667 -862 21 -84 24 -118 24 -290 0
-172 -3 -206 -24 -290 -124 -498 -483 -857 -981 -981 -84 -21 -118 -24 -290
-24 -172 0 -206 3 -290 24 -498 124 -857 483 -981 981 -21 84 -24 118 -24 290
0 172 3 206 24 290 124 498 499 871 982 979 138 30 130 30 319 26 148 -2 190
-7 275 -29z' />
            <path d='M1247 2324 c-228 -50 -432 -190 -564 -384 -197 -290 -205 -671 -22
-983 58 -100 220 -258 321 -315 287 -162 629 -162 916 0 101 57 263 215 321
315 137 233 169 504 89 753 -55 171 -164 329 -302 437 -78 61 -240 143 -331
168 -86 24 -338 29 -428 9z m433 -183 c370 -125 608 -499 536 -842 -33 -152
-161 -322 -302 -400 l-62 -34 -4 -62 c-3 -48 -9 -68 -28 -88 l-23 -25 -357 0
-357 0 -23 25 c-19 20 -25 40 -28 88 l-4 62 -62 34 c-89 50 -205 169 -250 260
-198 393 86 895 569 1007 39 9 102 12 180 10 103 -3 133 -8 215 -35z' />
            <path d='M1007 1486 c-113 -41 -178 -170 -143 -288 31 -105 113 -168 220 -168
168 0 276 178 202 336 -51 109 -168 159 -279 120z' />
            <path d='M1722 1487 c-151 -57 -202 -260 -95 -378 51 -56 100 -79 169 -79 209
0 308 254 158 404 -16 15 -42 35 -58 43 -39 20 -133 26 -174 10z' />
            <path d='M1386 1110 c-31 -49 -56 -92 -56 -95 0 -3 50 -5 110 -5 61 0 110 3
110 6 0 4 -97 174 -105 182 -1 2 -28 -38 -59 -88z' />
          </g>
        </svg>
      </PlugImageContainer>

      <PlugText>{text}</PlugText>
    </PlugContainer>
  )
}

export default Plug