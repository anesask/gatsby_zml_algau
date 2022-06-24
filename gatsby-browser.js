// gatsby-browser.js
import React from "react"
import "./src/styles/global.scss"
import { ParallaxProvider } from "react-scroll-parallax"

export const wrapPageElement = ({ element, props }) => {
  return <ParallaxProvider>{element}</ParallaxProvider>
}
