import React from "react"
import { ParallaxBanner } from "react-scroll-parallax"
import background from "../images/hero.jpg"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { BsArrowDownCircle } from "react-icons/bs"
const Header = () => {
  return (
    <ParallaxBanner
      layers={[
        { image: background, speed: -20, scale: [1, 1.5, "easeInQuad"] },
        {
          speed: -15,
          easing: "easeOutQuad",

          children: (
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <h1 className="text-white font-bold tracking-tighter text-7xl">
                ZML Algäu
              </h1>

              <p className="text-white max-w-2xl mx-auto mt-8 text-xl md:text-3xl font-semibold tracking-tighter leading-tight text-center">
                Willkommen in der Praxis für manuelle Therapien und
                lymphologischen Schwerpunktpraxis Seit über
                <br />
                35 Jahren arbeiten wir für Ihre Gesundheit.
              </p>
              <AnchorLink to="/#uber_uns">
                <BsArrowDownCircle
                  size={40}
                  color="white"
                  className="mt-10 animate-bounce"
                />
              </AnchorLink>
            </div>
          ),
        },
      ]}
      className="bg-full-parallax"
    ></ParallaxBanner>
  )
}

export default Header
