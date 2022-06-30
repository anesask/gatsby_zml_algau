import React, { useState } from "react"
import { StaticImage } from "gatsby-plugin-image"
import { headingOne, baseText } from "../utils/typography"

const Item = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border rounded shadow-sm">
      <button
        type="button"
        aria-label="Open item"
        title="Open item"
        className="flex items-center justify-between w-full p-4 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="text-lg font-medium">{title}</p>
        <div className="flex items-center justify-center w-8 h-8 border rounded-full">
          <svg
            viewBox="0 0 24 24"
            className={`w-3 text-gray-600 transition-transform duration-200 ${
              isOpen ? "transform rotate-180" : ""
            }`}
          >
            <polyline
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeMiterlimit="10"
              points="2,7 12,17 22,7"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </button>
      {isOpen && (
        <div className="p-4 pt-0">
          <p className="text-gray-700">{children}</p>
        </div>
      )}
    </div>
  )
}

const Faq = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-22 lg:px-8 lg:py-20">
      <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
        <div className="flex flex-col mb-16 sm:text-center">
          <a href="/" class="mb-6 sm:mx-auto">
            <div class="flex items-center justify-center w-12 h-12 rounded-full mx-auto md:mx-0">
              <StaticImage
                src="../images/icons/faq_icon.png"
                placeholder="tracedSVG"
              />
            </div>
          </a>
          <div class="max-w-xl md:mx-auto text-center md:text-left lg:max-w-2xl">
            <h2 class={headingOne}>Häufig gestellte Fragen</h2>
            <p class={baseText}>
              Die häufigsten Fragen, die uns dabei begegnet sind und wie Sie
              einen Termin zur Lymphdrainage vereinbaren, haben wir Ihnen in
              unserer Übersicht zusammengestellt
            </p>
          </div>
        </div>
        <div class="space-y-4">
          <Item title="Wie vereinbare ich einen Termin zur Lymphdrainage?">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque rem aperiam, eaque ipsa quae.
          </Item>
          <Item title="Wie erreiche ich die Praxis für Lymphdrainage am besten?">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque rem aperiam, eaque ipsa quae.
          </Item>
          <Item title="Was muss ich zur (ersten) Behandlung mitbringen?">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque rem aperiam, eaque ipsa quae.
          </Item>
          <Item title="Wie lange dauert eine Behandlung?">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque rem aperiam, eaque ipsa quae.
          </Item>
        </div>
      </div>
    </div>
  )
}

export default Faq
