import React from 'react'
import { Header, Footer } from "./components";
import { Outlet } from "react-router-dom";
import './Layout.css'

const Layout = () => {
  return (
   <div className='layout'>
      <Header />
      <Outlet />
      <Footer />
   </div>
  )
}

export default Layout