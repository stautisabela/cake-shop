import './App.css';
//import React, { useEffect, useState } from 'react'
import Navbar from './components/Nvbar';
import { Route, Router, Routes } from 'react-router';
import Home from './features/Home'
import About from './features/About'
import Menu from './features/Menu'
import Gallery from './features/Gallery'
import Contact from './features/Contact'

function App() {

  /*const [backendData, setBackendData] = useState([{}])

  useEffect(() => {
    fetch("/api").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data)
      }
    )
  }, [])

  return (
    <div>
      {(typeof backendData.objectss === 'undefined') ? (
        <p>Testing</p>
      ): (
        backendData.objectss.map((objs, i) => (
          <p key={i}>{objs}</p>
        ))
      )}
    </div>
  );*/
  return (
    <div className='App'>
      <Navbar />
      <div className='content'>
        <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      </div>
    </div>
  );
}
export default App;
