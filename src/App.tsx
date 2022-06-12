import React from 'react'
import 'normalize.css'
import './styles/main.scss'

function App() {
  return (
    <div style={{
      color: '#fabc3b',
      backgroundColor: '#1a3866',
      height: '100vh',
    }}
         className='container'>

      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, aliquam
         aut et illum impedit in ipsa maiores minima numquam perspiciatis
         placeat porro possimus praesentium quia recusandae soluta suscipit
         voluptas voluptatibus.</p>

      <p style={{ fontFamily: 'Neris Black' }}>Hello! Привет!</p>
      <p style={{ fontFamily: 'Nougat' }}>Hello! Привет!</p>
      <p style={{ fontFamily: 'Lilita One' }}>Hello! Привет!</p>
    </div>
  )
}

export default App
