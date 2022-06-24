import React from "react"
import Layout from "../components/layout/Layout"
const impressum = () => {
  return (
    <Layout>
      <section className="px-4 py-24 mx-auto max-w-7xl min-h-full">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full px-4">
              <div className="mb-12 lg:mb-20 max-w-[620px]">
                <h3 class="mb-8 text-4xl font-bold leading-none tracking-tighter text-brandGreen md:text-7xl lg:text-5xl">
                  Impressum
                </h3>
                <p
                  className="
              text-md            
              font-semibold
              leading-relaxed
              sm:leading-relaxed
              text-body-color
              
            "
                >
                  Angaben gemäß § 5 TMG
                </p>

                <ul
                  className="
              text-md     
              leading-relaxed
              sm:leading-relaxed
              text-body-color
              list-none
              my-4
            "
                >
                  <li>Ludwig Bromberger</li>
                  <li>Rathausstraße 9</li>
                  <li>87448 Waltenhofen</li>
                </ul>

                <ul
                  className="
              text-md           
              leading-relaxed
              sm:leading-relaxed
              text-body-color
              list-none
              my-4
            "
                >
                  <li className="font-semibold">Vertreten durch:</li>
                  <li>Ludwig Bromberger</li>
                </ul>

                <ul
                  className="
              text-md     
              leading-relaxed
              sm:leading-relaxed
              text-body-color
              list-none
              my-4
            "
                >
                  <li className="font-semibold">Kontakt:</li>
                  <li>Telefon: 08303-858</li>
                  <li>E-Mail: info@zml-allgäu.de</li>
                </ul>

                <ul
                  className="
              text-md        
              leading-relaxed
              sm:leading-relaxed
              text-body-color
              list-none
            "
                >
                  <li className="font-semibold">Aufsichtsbehörde:</li>
                  <li>Gesundheitsamt Sonthofen</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default impressum
