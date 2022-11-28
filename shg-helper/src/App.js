import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Main from './Main'
import Bank from './components/Dashboard/Bank'
import SHG from './components/Dashboard/SHG'
import Admin from './components/Dashboard/Admin'
import SHGReg from './components/Registration/SHG'
import Success from './components/Registration/Success'

const App = () => {
  return (
    <div className='App'>
      <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path='/dashboard/admin' element={<Admin />} />
        <Route path='/dashboard/bank' exact element={<Bank />} />
        <Route path='/dashboard/shg' element={<SHG />} />
        <Route path='/registration/success' element={<Success />} />
        <Route path='/registration/shg' element={<SHGReg />} />
      </Routes>
    </Router>
    </div>
  )
}

export default App