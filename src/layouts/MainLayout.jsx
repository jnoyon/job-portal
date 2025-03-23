import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../pages/Home/shared/Navbar'
import Footer from '../pages/Home/shared/Footer'

export default function MainLayout() {
  return (
    <div>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  )
}
