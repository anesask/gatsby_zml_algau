import React from "react"
import { StaticImage } from "gatsby-plugin-image"
const Content = () => {
  return (
    <section id="uber_uns">
      <div class="px-4 py-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24 min-h-full">
        <div class="flex flex-wrap items-center mx-auto max-w-7xl">
          <div class="w-full lg:max-w-lg lg:w-1/2 rounded-xl">
            <div
              data-sal="slide-right"
              data-sal-delay="150"
              data-sal-duration="800"
              data-sal-easing="ease"
            >
              <div class="relative w-full max-w-lg">
                <div class="absolute top-0 rounded-full bg-blue-300 -left-4 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>

                <div class="absolute rounded-full bg-brandGreen -bottom-24 right-20 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
                <div class="relative">
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
          <div
            class="flex flex-col items-start mt-12 mb-16 text-left lg:flex-grow lg:w-1/2 lg:pl-6 xl:pl-24 md:mb-0 xl:mt-0"
            data-sal="slide-left"
            data-sal-delay="500"
            data-sal-duration="1000"
            data-sal-easing="ease"
          >
            {/* <span class="mb-8 text-xs font-bold tracking-widest text-blue-600 uppercase">
              {" "}
              Your tagline{" "}
            </span> */}
            <h3 class="mb-8 text-4xl font-bold leading-none tracking-tighter text-brandGreen md:text-7xl lg:text-5xl">
              Bei uns sind Sie in guten Händen
            </h3>
            <p class="mb-8 text-base leading-relaxed text-left text-gray-500">
              Egal ob Lymphdrainage, Wundbehandlung, Faszien-Massage, klassische
              Massage, Gesichtsbehandlung oder Fußpflege, unser kompetentes Team
              ist für Sie und Ihre Gesundheit da.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Content
