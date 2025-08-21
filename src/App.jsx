import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header.jsx'
import Portfolio from './components/Portfolio.jsx'
import PortfolioEntry from './components/PortfolioEntry.jsx'
import Frontpage from './components/Frontpage.jsx'
import Rent from './components/Rent.jsx'

import { PROJECTS } from './projects.js'

function App({url}) {
  const [count, setCount] = useState(0)
  const [currentPage, setCurrentPage] = useState('');

  return (
    <>
      <Header currentPage={url}/>
      <div className='portfolioContainer'>
        {url === 'home' && <Frontpage />}
        {url === 'portfolio' &&
          <Portfolio>
            {PROJECTS.map((project) => (
              <li key={project.id}>
                <PortfolioEntry {...project}/>
              </li>
            ))}
          </Portfolio>
        } 
        {url === 'rent' && <Rent />}
      </div>
    </>
  )
}

export default App
