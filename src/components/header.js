import React from "react"

const Header = () => {
  return (
    <section className="bg-test z-20">
      <div className="flex flex-col w-full h-full items-center justify-center text-center">
        <div className="border-y-2 border-white py-8">
          <h1 className="text-white font-bold tracking-tighter text-6xl shadow-md ">
            ZML Algäu
          </h1>

          <p className="text-white max-w-2xl mx-auto mt-8 text-2xl md:text-3xl font-semibold tracking-tighter leading-tight text-center shadow-md">
            Willkommen in der Praxis für manuelle Therapien und lymphologischen
            Schwerpunktpraxis Seit über
            <br />
            35 Jahren arbeiten wir für Ihre Gesundheit.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Header
