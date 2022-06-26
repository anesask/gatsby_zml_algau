// gatsby-browser.js
import React, { useEffect } from "react"
import "./src/styles/global.scss"
import { ParallaxProvider } from "react-scroll-parallax"

export const wrapPageElement = ({ element, props }) => {
  return <ParallaxProvider>{element}</ParallaxProvider>
}

export function shouldUpdateScroll(prevRouterProps, { location }) {
  window.scrollTo(0, 0)
  const body = document.getElementsByTagName("body")[0]
  body.scrollTop = 0
  return false
}
