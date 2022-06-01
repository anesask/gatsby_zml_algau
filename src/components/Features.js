import React from "react"
import {
  IoMedalOutline,
  IoCalendarNumberOutline,
  IoLibraryOutline,
  IoHourglassOutline,
} from "react-icons/io5"
const Features = () => {
  return (
    <section>
      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24 min-h-full ">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full px-4">
              <div className="mb-12 lg:mb-20 max-w-[620px]">
                <h3 class="mb-8 text-4xl font-bold leading-none tracking-tighter text-brandGreen md:text-7xl lg:text-5xl">
                  Eine wirkungsvolle Behandlung
                </h3>
                <p
                  className="
              text-lg
              sm:text-xl
              leading-relaxed
              sm:leading-relaxed
              text-body-color
            "
                >
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration in some form.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap">
            <div
              className="w-full md:w-1/2 lg:w-1/4 px-4"
              data-sal="fade"
              data-sal-delay="200"
              data-sal-duration="2000"
              data-sal-easing="ease"
            >
              <div className="bg-white mb-12 group">
                <div
                  className="
              w-[70px]
              h-[70px]
              flex
              items-center
              justify-center
              bg-primary
              rounded-2xl
              mb-8
              relative
              z-10
            "
                >
                  <span
                    className="
                w-[70px]
                h-[70px]
                flex
                items-center
                justify-center
                bg-brandGreen
                rounded-2xl
                mb-8
                absolute
                z-[-1]
                top-0
                left-0
                rotate-[25deg]
                group-hover:rotate-45
                duration-300
              "
                  ></span>
                  <IoMedalOutline size={40} color="white" />
                </div>
                <h4 className="font-bold text-xl text-dark mb-3">
                  1. und bisher einzige
                </h4>
                <p className="text-body-color mb-8 lg:mb-11">
                  lymphologische Schwerpunktpraxis im Allgäu
                </p>
              </div>
            </div>
            <div
              className="w-full md:w-1/2 lg:w-1/4 px-4"
              data-sal="fade"
              data-sal-delay="200"
              data-sal-duration="2000"
              data-sal-easing="ease"
            >
              <div className="bg-white mb-12 group wow fadeInUp">
                <div
                  className="
              w-[70px]
              h-[70px]
              flex
              items-center
              justify-center
              bg-primary
              rounded-2xl
              mb-8
              relative
              z-10
            "
                >
                  <span
                    className="
                w-[70px]
                h-[70px]
                flex
                items-center
                justify-center
                bg-brandGreen
                rounded-2xl
                mb-8
                absolute
                z-[-1]
                top-0
                left-0
                rotate-[25deg]
                group-hover:rotate-45
                duration-300
              "
                  ></span>
                  <IoCalendarNumberOutline size={40} color="white" />
                </div>
                <h4 className="font-bold text-xl text-dark mb-3">
                  Seit über 30 Jahren
                </h4>
                <p className="text-body-color mb-8 lg:mb-11">
                  begleiten wir Sie und Ihre Problem mit Herz
                </p>
              </div>
            </div>
            <div
              className="w-full md:w-1/2 lg:w-1/4 px-4"
              data-sal="fade"
              data-sal-delay="400"
              data-sal-duration="2000"
              data-sal-easing="ease"
            >
              <div className="bg-white mb-12 group wow fadeInUp">
                <div
                  className="
              w-[70px]
              h-[70px]
              flex
              items-center
              justify-center
              bg-primary
              rounded-2xl
              mb-8
              relative
              z-10
            "
                >
                  <span
                    className="
                w-[70px]
                h-[70px]
                flex
                items-center
                justify-center
                bg-brandGreen
                rounded-2xl
                mb-8
                absolute
                z-[-1]
                top-0
                left-0
                rotate-[25deg]
                group-hover:rotate-45
                duration-300
              "
                  ></span>
                  <IoLibraryOutline size={40} color="white" />
                </div>
                <h4 className="font-bold text-xl text-dark mb-3">
                  Stets auf dem neuesten Stand
                </h4>
                <p className="text-body-color mb-8 lg:mb-11">
                  durch regelmäßige Fortbildung in allen Bereichen der manuellen
                  und Physio-Therapie
                </p>
              </div>
            </div>
            <div
              className="w-full md:w-1/2 lg:w-1/4 px-4"
              data-sal="fade"
              data-sal-delay="600"
              data-sal-duration="2000"
              data-sal-easing="ease"
            >
              <div className="bg-white mb-12 group wow fadeInUp">
                <div
                  className="
              w-[70px]
              h-[70px]
              flex
              items-center
              justify-center
              bg-primary
              rounded-2xl
              mb-8
              relative
              z-10
            "
                >
                  <span
                    className="
                w-[70px]
                h-[70px]
                flex
                items-center
                justify-center
                bg-brandGreen
                rounded-2xl
                mb-8
                absolute
                z-[-1]
                top-0
                left-0
                rotate-[25deg]
                group-hover:rotate-45
                duration-300
              "
                  ></span>
                  <IoHourglassOutline size={40} color="white" />
                </div>
                <h4 className="font-bold text-xl text-dark mb-3">
                  Wir nehmen uns Zeit für Sie
                </h4>
                <p className="text-body-color mb-8 lg:mb-11">
                  und haben einen Therapierhytmus vor 1/2 bis 1 Stunde
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
