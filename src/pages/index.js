import React from "react"
import Layout from "../components/layout/Layout"
import Header from "../components/Header"
import Content from "../components/Content"
import Features from "../components/Features"
import About from "../components/About"
import Testimonials from "../components/Testimonials"
import Contact from "../components/Contact"
import MapBox from "../components/map/Map"
import CircleSection from "../components/CircleSection"

const index = () => {
  return (
    <Layout>
      {/* <Header /> */}
      <CircleSection/>
      {/* <Content />     
      <Features />
      <About />
      <Testimonials />
      <Contact />
      <MapBox /> */}
    </Layout>
  )
}

export default index
