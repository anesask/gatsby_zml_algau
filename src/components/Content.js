import React from "react"
import { Parallax } from "react-scroll-parallax"
import { StaticImage } from "gatsby-plugin-image"

const Content = () => {
  return (
    <section id="uber_uns">
      <Parallax speed={10}>
        <div className="px-4 py-6 mx-auto max-w-7xl sm:px-6 sm:py-6 md:px-12 lg:px-24 lg:py-24 min-h-full">
          <div className="flex flex-wrap items-center mx-auto max-w-7xl">
            <div className="w-full lg:max-w-lg lg:w-1/2 rounded-xl">
              <div>
                <div className="relative w-full max-w-lg">
                  <div className="absolute top-0 rounded-full bg-blue-300 -left-4 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>

                  <div className="absolute rounded-full bg-brandGreen -bottom-24 right-20 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

                  <div className="relative">
                    <StaticImage
                      src="../images/placeholder_square.jpg"
                      className="mx-auto rounded-lg shadow-2xl "
                      objectFit="cover"
                      objectPosition="center"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-start mt-12 mb-4 text-left lg:flex-grow lg:w-1/2 lg:pl-6 xl:pl-24 md:mb-0 xl:mt-0">
              <h3 className="mb-8 text-4xl font-bold leading-none tracking-tighter text-brandGreen md:text-7xl lg:text-5xl">
                Bei uns sind Sie in guten Händen
              </h3>

              <p
                className="text-lg
              sm:text-xl
              leading-relaxed
              sm:leading-relaxed
              text-body-color"
              >
                Egal ob Lymphdrainage, Wundbehandlung, Faszien-Massage,
                klassische Massage, Gesichtsbehandlung oder Fußpflege, unser
                kompetentes Team ist für Sie und Ihre Gesundheit da.
              </p>
            </div>
          </div>
        </div>
      </Parallax>
    </section>
  )
}

export default Content
