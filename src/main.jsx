import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'

//paginas
import Home from './routes/Home'
import Client from './routes/Client'
import Storage from './routes/Storage'
import Sales from './routes/Sales'
import Login from './routes/Login'

import './index.css'


const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: '/',
        element: <Login />
      },
      {
        path: '/home',
        element: < Home />
      },
      {
        path: '/client',
        element: <Client />
      },
      {
        path: '/storage',
        element: <Storage />
      },
      {
        path: '/sales',
        element: <Sales />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
