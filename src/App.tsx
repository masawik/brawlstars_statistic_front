import React from 'react'
import CurrentEvents from './components/pages/CurrentEvents/CurrentEvents'
import Layout from './components/Layout'
import { Navigate, Route, Routes } from 'react-router-dom'
import NotFound from './components/pages/NotFound'
import Event from './components/pages/Event/Event'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/events' element={<CurrentEvents />} />
        <Route path='/' element={<Navigate to='/events' replace />} />

        <Route path='/event/:eventId' element={<Event />} />

        <Route path='/not-found' element={<NotFound />} />
        <Route path='*' element={<Navigate to='/not-found' replace />} />
      </Routes>
    </Layout>
  )
}

export default App
