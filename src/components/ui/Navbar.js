import React, { useState, useEffect } from "react"
import {Link} from 'gatsby'
import { AnchorLink } from "gatsby-plugin-anchor-links";
// Logo
import Logo from "../../images/Frame.png"
import { MdPhone } from "react-icons/md"
// Import Dynamic Data from JSON
import { nav } from "../../data/nav"

const Navbar = () => {
  // Local States
  const [scroll, setScroll] = useState()
  const [navActive, setNavActive] = useState(false)

  useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY < 20
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck)
      }
    })
  })

  return (
    <div
      className={
        scroll
          ? "bg-white inset-0 z-50 w-full flex items-center sticky transition-shadow duration-300 h-22"
          : "frost inset-0 left-0 z-50 w-full flex items-center sticky shadow-md transition-shadow duration-500 h-22"
      }
    >
      <div className="container py-4 lg:py-2">
        <div className="flex items-center align-center justify-between relative">
          <div className="px-4 w-40 max-w-full">
            <Link to="/" class="navbar-logo w-full block">
              <img src={Logo} alt="logo" className="w-full header-logo" />
            </Link>
          </div>
          <div className="flex justify-end items-center w-full">
            <div>
              <button
                onClick={() => {
                  setNavActive(!navActive)
                }}
                id="navbarToggler"
                className={`block
                absolute
                right-4
                top-1/2
                -translate-y-1/2
                lg:hidden                
                outline-0               
                px-3
                py-[6px]
                rounded-lg ${navActive ? "navbarTogglerActive" : ""}`}
              >
                <span className="relative w-[30px] h-[2px] my-[6px] block bg-brandGreenTwo"></span>
                <span className="relative w-[30px] h-[2px] my-[6px] block bg-brandGreenTwo"></span>
                <span className="relative w-[30px] h-[2px] my-[6px] block bg-brandGreenTwo"></span>
              </button>
              <nav
                id="navbarCollapse"
                className={`absolute py-5 lg:py-0 lg:px-4 xl:px-6 bg-white lg:bg-transparent shadow-lg rounded-lg max-w-full w-full lg:max-w-full lg:w-full left-0 top-full lg:block lg:static lg:shadow-none ${
                  navActive ? "" : "hidden"
                }`}
              >
                <ul className="block lg:flex">
                  <li className="relative group">
                    <Link
                      to="/"
                      activeClassName="active"
                      className="                      
                      text-base
                      lg:text-primary
                      lg:group-hover:text-brandGreen
                      group-hover:text-brandGreen    
                      py-2
                      lg:py-6 lg:inline-flex lg:px-0
                      flex
                      mx-8
                      lg:mr-0
                    "
                    >
                      Home
                    </Link>
                  </li>
                  {/* Menu Links */}
                  {nav.map(i => (
                    <li className="relative group">
                      <AnchorLink
                        to={i.location}
                        className="                      
                      text-base
                      lg:text-primary                      
                      lg:group-hover:text-brandGreen
                      group-hover:text-brandGreen                      
                      py-2
                      lg:py-6 lg:inline-flex lg:px-0
                      flex
                      mx-8
                      lg:mr-0 lg:ml-7
                      xl:ml-12
                    "
                      >
                        {i.name}
                      </AnchorLink>
                    </li>
                  ))}
                  <li className="relative group flex align-center">
                    <a
                      href="tel:004908303858 "
                      className="                      
                      text-base
                      bg-brandGreen
                    text-white
                      group-hover:text-opacity-50                      
                      py-2
                      px-4
                      rounded-md
                      lg:px-4
                      flex
                      align-center
                      mx-8
                      my-auto
                      lg:mr-0
                    "
                    >
                      <MdPhone
                        fontSize={18}
                        color="white"
                        className="mt-1 mr-2"
                      />
                      <span>08303 858</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
