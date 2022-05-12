import React from "react"
// import {BgImage} from '../images/test.png'
const Header = () => {
  return (
    <section className="">
      <div class="px-4 py-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24 bg-test">
        <div class="flex flex-col w-full mb-12 text-center">
         
          <h1 class="max-w-5xl text-2xl font-bold leading-none tracking-tighter text-dark md:text-5xl lg:text-6xl lg:max-w-7xl">
            ZML Algäu
          </h1>

          <p class="max-w-xl mx-auto mt-8 text-base leading-relaxed text-center text-dark">
          Willkommen in der Praxis für manuelle Therapien und lymphologischen Schwerpunktpraxis
          Seit über 35 Jahren arbeiten wir für Ihre Gesundheit.
          </p>

          <a
            class="mx-auto mt-8 text-sm font-semibold text-blue-600 hover:text-neutral-600"
            title="read more"
          >
            {" "}
            Read more about the offer »{" "}
          </a>
        </div>
      </div>
    </section>
  )
}

export default Header
