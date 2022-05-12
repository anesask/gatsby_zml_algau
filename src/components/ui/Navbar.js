import React, { useState, useEffect } from "react"

import { Link } from "gatsby"
// Logo
import Logo from "../../images/Frame.png"

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
          ? "bg-white first-letter:top-0 left-0 z-40 w-full flex items-center"
          : "bg-white top-0 left-0 z-40 w-full flex items-center sticky shadow-md "
      }
    >
      <div className="container py-4 lg:py-2">
        <div className="flex items-center justify-between relative">
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
                <span className="relative w-[30px] h-[2px] my-[6px] block bg-primary"></span>
                <span className="relative w-[30px] h-[2px] my-[6px] block bg-primary"></span>
                <span className="relative w-[30px] h-[2px] my-[6px] block bg-primary"></span>
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
                      
                      text-base text-dark
                      lg:text-primary
                      lg:group-hover:opacity-70
                      lg:group-hover:text-dark
                      group-hover:text-primary
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
                      <Link
                        href={i.location}
                        className="                      
                      text-base text-dark
                      lg:text-primary
                      lg:group-hover:opacity-70
                      lg:group-hover:text-dark
                      group-hover:text-primary
                      py-2
                      lg:py-6 lg:inline-flex lg:px-0
                      flex
                      mx-8
                      lg:mr-0 lg:ml-7
                      xl:ml-12
                    "
                      >
                        {i.name}
                      </Link>
                    </li>
                  ))}

                  <li className="relative group">
                    <Link
                      to="/"
                      className="text-base text-dark lg:text-primary lg:group-hover:opacity-70 lg:group-hover:text-dark py-2 lg:py-6 lg:inline-flex lg:px-0 flex mx-8 lg:mr-0 lg:ml-7 xl:ml-12"
                    >
                      08303 858
                    </Link>
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
