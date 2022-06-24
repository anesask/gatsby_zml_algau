import React from "react"
import { Parallax } from "react-scroll-parallax"
const Header = () => {
  return (
    <section className="bg-test">
      <div className="flex flex-col w-full h-full items-center justify-center text-center">
        <Parallax speed={40}>
          <div className="border-y-2 border-white py-8">
            <h1 className="text-white font-bold tracking-tighter text-6xl shadow-md ">
              ZML Algäu
            </h1>

            <p className="text-white max-w-2xl mx-auto mt-8 text-xl md:text-2xl font-semibold tracking-tighter leading-tight text-center">
              Willkommen in der Praxis für manuelle Therapien und
              lymphologischen Schwerpunktpraxis Seit über
              <br />
              35 Jahren arbeiten wir für Ihre Gesundheit.
            </p>
          </div>
        </Parallax>
      </div>
    </section>
  )
}

export default Header
