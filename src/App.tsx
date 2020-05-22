import React from 'react'
import './App.css'
import Homepage from './pages/Homepage/index'
import NavBar from './components/Navbar'
import Footer from './components/Footer'
import Category from './components/Category'
import Teamspage from './pages/Teamspage'
import AdminPage from './pages/AdminPage'
function App() {
  return (
    <div className="App">
      {/* <NavBar />
      <Teamspage />
      <Category />
      <Footer /> */}
      <AdminPage />
    </div>
  )
}

export default App
