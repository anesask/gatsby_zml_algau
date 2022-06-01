import { StaticImage } from "gatsby-plugin-image"
import React from "react"

const About = () => {
  return (
    <section className="pt-20 lg:pt-[120px] pb-20 lg:pb-[120px] bg-[#f3f4fe] max-h-1/2">
      <div className="container">
        <div className="bg-white wow fadeInUp">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4">
              <div
                className="
                  lg:flex
                  items-center
                  justify-between
                  border
                  overflow-hidden
                "
              >
                <div
                  className="
                    lg:max-w-[565px]
                    xl:max-w-[640px]
                    w-full
                    py-12
                    px-7
                    sm:px-12
                    md:p-16
                    lg:py-9 lg:px-16
                    xl:p-[70px]
                  "
                >
                  <span class="font-semibold text-lg text-primary mb-2 block">
                    Was ist Manuelle Lymphdrainage?
                  </span>
                  <h3 class="mb-8 text-4xl font-bold leading-none tracking-tighter text-brandGreen md:text-7xl lg:text-5xl">
                    Manuelle Lymphdrainage
                  </h3>
                  <p class="text-base text-body-color mb-9 leading-relaxed">
                    Neben dem Blutkreislauf gibt es noch ein weiteres
                    Transportsystem: das Lymphgefäßsystem. Hier werden in erster
                    Linie End- und Abfallprodukte des Stoffwechsels
                    transportiert. Nach größeren Operationen und Verletzungen
                    fallen viele solcher lymphpflichtigen Substanzen an.
                  </p>

                  <p class="text-base text-gray-500 text-left leading-relaxed">
                    Die manuelle Lymphdrainage ist eine Therapieform der
                    physikalischen Anwendungen; ihre Wirkungsweise ist breit
                    gefächert. So dient sie unter anderem als Ödem- und
                    Entstauungstherapie geschwollener Körperregionen, wie
                    Körperstamm und Extremitäten (Arme und Beine), welche nach
                    Unterleibs- und/oder Brustkrebsoperationen entstehen können.
                    Durch kreisförmige Verschiebetechniken, welche mit leichtem
                    Druck angewandt werden, soll Flüssigkeit aus dem Gewebe in
                    das Lymphgefäßsystem verschoben werden. Die manuelle
                    Lymphdrainage wirkt sich überwiegend auf den Haut- und
                    Unterhautbereich aus und soll keine Mehrdurchblutung, wie in
                    der klassischen Massage, bewirken. Weitere Indikationen sind
                    sämtliche orthopädischen und traumatologischen Erkrankungen,
                    die mit einer Schwellung einhergehen (Verrenkungen,
                    Zerrungen, Verstauchungen, Muskelfaserrisse etc.). Auch bei
                    Verbrennungen, Schleudertrauma, Morbus Sudeck und ähnlichen
                    Krankheitsbildern wird die Manuellen Lymphdrainage
                    angewendet.
                  </p>
                </div>
                <div className="text-center">
                  <div className="flex justify-center align-center mx-auto px-4 py-4">
                    <StaticImage
                      width={550}
                      src="../images/about-image.png"
                      className="mx-auto lg:ml-auto rounded-lg shadow-2xl mb-10"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
