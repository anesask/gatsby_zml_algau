import React from "react"
import { MdLocationPin } from "react-icons/md"

const Contact = () => {
  return (
    <section id="kontakt" class="py-20 md:pt-[120px] relative">
      <div
        class="
      absolute
      z-[-1]
      w-full
      h-1/2
      lg:h-[45%]
      xl:h-1/2
      bg-contact
     
      top-0
      left-0
    "
      ></div>
      <div class="container px-4">
        <div class="flex flex-wrap items-center -mx-4">
          <div class="px-4 w-full lg:w-7/12 xl:w-8/12">
            <div class="ud-contact-content-wrapper">
              <div class="ud-contact-title mb-12 lg:mb-[150px]">
                <span class="text-white font-semibold text-base mb-5">
                  Kontakt
                </span>
                <h2 class="text-[35px] text-white font-semibold">
                  Sie haben Fragen, Wünsche oder Anregungen?
                  <br />
                  Wir helfen Ihnen gerne!
                </h2>
              </div>
              <div class="flex flex-wrap justify-between mb-12 lg:mb-0">
                <div class="flex max-w-full w-[330px] mb-8">
                  <div class="text-[32px] text-primary mr-6">
                    <MdLocationPin
                      size={40}
                      color="#72bb74"
                      className="animate-bounce"
                    />
                  </div>
                  <div>
                    <h5 class="text-lg text-white md:text-brandGreenTwo font-semibold mb-3">
                      Sie finden unsere Praxis im
                    </h5>
                    <p class="text-base text-white md:text-brandGreenTwo">
                      Rathausstraße 9
                      <br /> 87448 Waltenhofen
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="px-4 w-full lg:w-5/12 xl:w-4/12">
            <div
              class="
          border-2
          border-brandGreen
            rounded-lg
            bg-white
            py-10
            px-8
            md:p-[60px]
            lg:p-10
            2xl:p-[60px]
            sm:py-12 sm:px-10
            lg:py-12 lg:px-10
            wow
            fadeInUp
          "
              data-wow-delay=".2s
          "
            >
              <h3 class="text-brandGreenTwo font-semibold mb-8 text-2xl md:text-[26px]">
                Kontaktieren Sie uns
              </h3>
              <form>
                <div class="mb-6">
                  <label for="fullName" class="block text-xs text-dark">
                    Name*
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Max Mustermann"
                    class="
                  w-full
                  border-0 border-b border-[#f1f1f1]
                  focus:border-primary focus:outline-none
                  py-4
                "
                  />
                </div>
                <div class="mb-6">
                  <label for="email" class="block text-xs text-dark">
                    Email*
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="max@musterman.de"
                    class="
                  w-full
                  border-0 border-b border-[#f1f1f1]
                  focus:border-primary focus:outline-none
                  py-4
                "
                  />
                </div>

                <div class="mb-6">
                  <label for="message" class="block text-xs text-dark">
                    Nachricht*
                  </label>
                  <textarea
                    name="message"
                    rows="1"
                    placeholder="Ihre Nachricht"
                    class="
                  w-full
                  border-0 border-b border-[#f1f1f1]
                  focus:border-primary focus:outline-none
                  py-4
                  resize-none
                "
                  ></textarea>
                </div>
                <div class="mb-0">
                  <button
                    type="submit"
                    class="
                  inline-flex
                  items-center
                  justify-center
                  py-4
                  px-6
                  rounded
                  text-white
                  bg-primary
                  text-base
                  font-medium
                  hover:bg-dark
                  transition
                  duration-300
                  ease-in-out
                "
                  >
                    Senden
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
