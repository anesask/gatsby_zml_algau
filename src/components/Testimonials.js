import React from "react"
import { headingOne, baseText } from "../utils/typography"
import { testimonials } from "../data/testimonials"

const Testimonials = () => {
  return (
    <section id="werte" className="pt-6 md:pt-20">
      <div className="container px-4 pt-2">
        <div className="flex flex-wrap">
          <div className="w-full mx-4">
            <div className="text-center mx-auto mb-[60px] lg:mb-20 max-w-[620px]">
              <h3 className={headingOne}>Das Sagen unsere Kunden</h3>
              <p className={baseText}>
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap pb-5">
          {testimonials.map(i => (
            <div className="w-full md:w-1/2 xl:w-1/3 px-4">
              <div className=" overflow-hidden">
                {/* Stars */}
                <div className="flex justify-center">
                  <span class="text-[#fbb040] mr-1">
                    <svg
                      width="18"
                      height="16"
                      viewBox="0 0 18 16"
                      class="fill-current"
                    >
                      <path d="M9.09815 0.360596L11.1054 6.06493H17.601L12.3459 9.5904L14.3532 15.2947L9.09815 11.7693L3.84309 15.2947L5.85035 9.5904L0.595291 6.06493H7.0909L9.09815 0.360596Z" />
                    </svg>
                  </span>
                  <span class="text-[#fbb040] mr-1">
                    <svg
                      width="18"
                      height="16"
                      viewBox="0 0 18 16"
                      class="fill-current"
                    >
                      <path d="M9.09815 0.360596L11.1054 6.06493H17.601L12.3459 9.5904L14.3532 15.2947L9.09815 11.7693L3.84309 15.2947L5.85035 9.5904L0.595291 6.06493H7.0909L9.09815 0.360596Z" />
                    </svg>
                  </span>
                  <span class="text-[#fbb040] mr-1">
                    <svg
                      width="18"
                      height="16"
                      viewBox="0 0 18 16"
                      class="fill-current"
                    >
                      <path d="M9.09815 0.360596L11.1054 6.06493H17.601L12.3459 9.5904L14.3532 15.2947L9.09815 11.7693L3.84309 15.2947L5.85035 9.5904L0.595291 6.06493H7.0909L9.09815 0.360596Z" />
                    </svg>
                  </span>
                  <span class="text-[#fbb040] mr-1">
                    <svg
                      width="18"
                      height="16"
                      viewBox="0 0 18 16"
                      class="fill-current"
                    >
                      <path d="M9.09815 0.360596L11.1054 6.06493H17.601L12.3459 9.5904L14.3532 15.2947L9.09815 11.7693L3.84309 15.2947L5.85035 9.5904L0.595291 6.06493H7.0909L9.09815 0.360596Z" />
                    </svg>
                  </span>
                  <span class="text-[#fbb040] mr-1">
                    <svg
                      width="18"
                      height="16"
                      viewBox="0 0 18 16"
                      class="fill-current"
                    >
                      <path d="M9.09815 0.360596L11.1054 6.06493H17.601L12.3459 9.5904L14.3532 15.2947L9.09815 11.7693L3.84309 15.2947L5.85035 9.5904L0.595291 6.06493H7.0909L9.09815 0.360596Z" />
                    </svg>
                  </span>
                </div>
                <div className="p-4 sm:p-9 md:p-7 xl:p-9 flex flex-col justify-center align-center text-center">
                  <p className="text-base italic tracking-wide text-body-color">
                    {i.text}
                  </p>
                  <h4 className="text-sm font-semibold mt-5">{i.name}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
