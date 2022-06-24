import React from 'react'
import Header from '../Header/Header'


const Layout: React.FC<{ children: React.ReactNode }> =
  ({ children }) => {
    return (
      <>
        <Header />
        {children}
      </>
    )
  }

export default Layout