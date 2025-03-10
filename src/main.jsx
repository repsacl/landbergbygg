import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'

import App from './Pages/App.jsx'
import About from './Pages/Om.jsx'
import Contact from './Pages/Kontakt.jsx'
import Nopage from './Pages/NoPage.jsx'

import NavBar from './Components/NavBar'
import Footer from './Components/Footer'
import Lines from './Components/BakgrunnLinjer.jsx'
import Merke from './Components/Merke.jsx'

import './index.css'

function Layout() {
  return (
    <>
      <NavBar />
      <Merke />
      <Lines />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <Nopage />,
    children: [
      {
        path: '/',
        element: <App />,
      },
      {
        path: '/om',
        element: <About />,
      },
      {
        path: '/kontakt',
        element: <Contact />,
      },
      // {
      //   path: '/galleri',
      //   element: <Galleri />,
      // },
    ],
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <RouterProvider router={router} />

  </React.StrictMode>,
)
