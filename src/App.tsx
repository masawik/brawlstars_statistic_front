import React from 'react'
import Events from './components/pages/Events/Events'
import Layout from './components/Layout'
import { Navigate, Route, Routes } from 'react-router-dom'
import NotFound from './components/pages/NotFound'
import Event from './components/pages/Event/Event'


function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/events' element={<Events />} />
        <Route path='/' element={<Navigate to='/events' replace />} />

        <Route path='/event/:eventId' element={<Event />} />


        <Route path='/not-found' element={<NotFound />} />
        <Route path='*' element={<Navigate to='/not-found' replace />} />
      </Routes>
    </Layout>
  )
}

export default App
