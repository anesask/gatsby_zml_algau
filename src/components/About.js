import React from "react"
import { headingOne, headingTwo, baseText } from "../utils/typography"
import { StaticImage } from "gatsby-plugin-image"
import { Parallax } from "react-scroll-parallax"
// About Images
import imageOne from "../images/about/about_one.jpg"
import imageTwo from "../images/about/about_two.jpg"
import imageThree from "../images/about/about_three.jpg"

const About = () => {
  return (
    <div className="px-4 py-6 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-18 min-h-full">
      <div className="container">
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-teal-accent-400 mx-auto md:mx-0">
            <StaticImage
              src="../images/icons/about_icon.png"
              placeholder="tracedSvg"            />
          
          </div>
          <div className="max-w-xl mb-6 text-center md:text-left">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              Was ist
              <br className="block" />
              <span className={headingOne}>Manuelle Lymphdrainage?</span>
            </h2>
            <p className={baseText}>
              Neben dem Blutkreislauf gibt es noch ein weiteres Transportsystem:
              das Lymphgefäßsystem. Hier werden in erster Linie End- und
              Abfallprodukte des Stoffwechsels transportiert. Nach größeren
              Operationen und Verletzungen fallen viele solcher lymphpflichtigen
              Substanzen an.
            </p>
          </div>
          <div>
            <a
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              Learn more
              <svg
                className="inline-block w-3 ml-2"
                fill="currentColor"
                viewBox="0 0 12 12"
              >
                <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
              </svg>
            </a>
          </div>
        </div>
        <div className="flex items-center justify-center -mx-4 lg:pl-8">
          <div className="flex flex-col items-end px-3">
            <Parallax speed={0} translateX={[15, 0]}>
              <img
                className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
                src={imageOne}
                alt=""
              />
            </Parallax>
            <Parallax speed={5} scale={[0.7, 1]}>
              <img
                className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
                src={imageTwo}
                alt=""
              />
            </Parallax>
          </div>
          <div className="px-3">
            <Parallax speed={10} translateY={[20, 0]}>
              <img
                className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
                src={imageThree}
                alt=""
              />
            </Parallax>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default About
