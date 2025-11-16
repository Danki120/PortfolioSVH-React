import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider, HashRouter, createHashRouter } from 'react-router-dom'
import App from './App.jsx'
import Portfolio from './components/Portfolio.jsx'

const router = createHashRouter([
  {
    path: '/',
    element: <App url='home'/>,
  },
  {
    path: '/portfolio',
    element: <App url='portfolio' />
  },
  {
    path: '/rent',
    element: <App url='rent' />
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
        <RouterProvider router={router}/>
  </StrictMode>,
)
