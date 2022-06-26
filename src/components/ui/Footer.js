import React from "react"
import { Link } from "gatsby"
import { MdPhone } from "react-icons/md"
const Footer = () => {
  return (
    <footer
      class="bg-brandGreenTwo text-white"
      aria-labelledby="footer-heading"
    >
      <div class="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-16">
        <div class="xl:grid xl:grid-cols-3 xl:gap-8">
          <div class="text-white xl:col-span-1">
            <Link
              to="/"
              className="text-brandGreen text-2xl font-bold tracking-tighter transition duration-500 ease-in-out transform tracking-relaxed lg:pr-8"
            >
              Manuelle Therapien
            </Link>
            <p class="w-1/2 text-md text-white">Ludwig Bromberger</p>

            <div className="flex flex-col mt-4">
              <Link to="/impressum" className="text-md font-normal hover:text-white text-brandGreen cursor-pointer">
                Impressum
              </Link>
              <Link to="/datenschutz" className="text-md font-normal hover:text-white text-brandGreen cursor-pointer">
                Datenschutz
              </Link>
              <Link to="/" className="text-md font-normal hover:text-brandGreen text-white cursor-pointer mt-5">
              &#8593; Zurück nach oben
              </Link>
            </div>
          </div>

          <div class="mt-6 xl:mt-0 xl:col-span-2 justify-self-end">
            <div class="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 class="text-sm font-bold tracking-wider text-brandGreen uppercase">
                  Öffnungszeiten
                </h3>
                <ul role="list" class="mt-4">
                  <li class="text-base font-normal text-white hover:text-brandGreen cursor-pointer">
                    Montag 08:00 - 16:00 Uhr
                  </li>
                  <li class="text-base font-normal text-white hover:text-brandGreen cursor-pointer">
                    Dienstag 08:00 - 16:00 Uhr
                  </li>
                  <li class="text-base font-normal text-white hover:text-brandGreen cursor-pointer">
                    Mittwoch 08:00 - 16:00 Uhr
                  </li>
                  <li class="text-base font-normal text-white hover:text-brandGreen cursor-pointer">
                    Donnerstag 08:00 - 16:00 Uhr
                  </li>
                  <li class="text-base font-normal text-white hover:text-brandGreen cursor-pointer">
                    Freitag 08:00 - 16:00 Uhr
                  </li>
                </ul>
              </div>
              <div class="mt-6 md:mt-0">
                <h3 class="text-sm font-bold tracking-wider text-brandGreen uppercase">
                  Anschrift & Kontakt
                </h3>
                <ul role="list" class="mt-4">
                  <li class="text-base font-normal text-white">
                    Lymphologische Schwerpunktpraxis Bromberger
                  </li>
                  <li class="text-base font-normal text-white">
                    Rathausstraße 9
                  </li>
                  <li class="text-base font-normal text-white">
                    87448 Waltenhofen
                  </li>
                  <li class="text-base font-normal text-white hover:text-brandGreen cursor-pointer">
                    <a
                      href="tel:004908303858 "
                      className="                      
                      text-base
                      
                    text-white
                      hover:text-brandGreen                   
                   
                     
                      flex
                      align-center
                      
                      
                    "
                    >
                      <MdPhone
                        fontSize={18}
                        color="#72bb74"
                        className="mt-1 mr-2"
                      />
                      <span>08303 858</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="px-4 py-12 mx-auto bg-brandGreenTwo max-w-7xl sm:px-6 lg:px-16">
        <div class="flex flex-wrap items-baseline">
          <span class="mt-2 text-sm font-light text-gray-500">
            Alle Rechte vorbehalten. © {new Date().getFullYear()}
            <a
              href="/"
              class="mx-2 text-wickedblue hover:text-gray-200"
              rel="noopener noreferrer"
            >
              Zentrum für Manuelle Lymdrainage - Ludwig Bromberger
            </a>
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
