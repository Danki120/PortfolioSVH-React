import { useState } from 'react'
import './App.css'
import Header from './components/Header.jsx'
import Portfolio from './components/Portfolio.jsx'
import PortfolioEntry from './components/PortfolioEntry.jsx'
import Frontpage from './components/Frontpage.jsx'

import { PROJECTS } from './projects.js'

function App() {
  const [count, setCount] = useState(0)
  const [currentPage, setCurrentPage] = useState('');

  return (
    <>
      <div className='portfolioContainer'>
        <Header />
        <Portfolio>
          {PROJECTS.map((project) => (
            <li key={project.id}>
              <PortfolioEntry {...project}/>
            </li>
          ))}
        </Portfolio>
      </div>
    </>
  )
}

export default App
