import React from 'react'
import './App.css'
import Homepage from './pages/Homepage/index'
import NavBar from './components/Navbar'
import Footer from './components/Footer'
import Category from './components/Category'
import Teamspage from './pages/Teamspage'
function App() {
  return (
    <div className="App">
      <NavBar />
      <Teamspage />
      <Category />
      <Footer />
    </div>
  )
}

export default App
