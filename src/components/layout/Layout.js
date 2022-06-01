import React from "react"
import Navbar from '../ui/Navbar';
import Footer from '../ui/Footer';
const Layout = ({ children }) => {
  return (
    <div>
      <Navbar/>
      {children}
      <Footer/>
    </div>
  )
}

export default Layout
