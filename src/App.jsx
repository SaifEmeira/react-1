/* eslint-disable no-unused-vars */
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'
import Layout from './component/Layout'
import NavbarComp from './component/NavbarComp'
import Footer from './component/Footer'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './component/Home'
import About from './component/About'
import Portfolio from './component/Portfolio'
import Contact from './component/Contact'
import Notfound from './component/Notfound'
import Modal from './component/Modal'

function App() {
  let routes = createBrowserRouter([
    {
      path: '/', element: <Layout></Layout>, children: [
        { index: true, element: <Home></Home> },
        { path: '/about', element: <About></About> },
        {path: '/portfolio', element: <Portfolio></Portfolio>},
        {path:'/contact' , element: <Contact/>},
        { path: '*', element: <Notfound/> },
      ]
    }
  ])
 

  return (
    <>

<RouterProvider router={routes}></RouterProvider>
     
    </>
  )
}

export default App
