// /pages/OnlineCohort.jsx

// work by Haswanth Tamil

import React, { useState } from "react"
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import CohortCard from "../components/CohortCard.jsx"
import { useNavigate } from "react-router-dom"
import cohort from "../assets/cohort.jpg"
import cohort2 from "../assets/picture2.jpg"


const images = [
  "/mentors/kalyani_vaish.png",
  "/mentors/harleen_aneja.png",
  "/mentors/bidisha_samanta.png",
  "/mentors/sucharita_chatterjee.png",
  "/mentors/kanika_kant.png",
  "/mentors/diya_rai.png",
  "/mentors/ranjitha_komaravolu.png",
  "/mentors/shruti_poonia.png",
  "/mentors/jia_sitlani.png",
  "/mentors/kanika_shekhawat.png",
  "/mentors/vibha_rungta.png",
  "/mentors/reshmithaa_nair.png",
  "/mentors/anupama_ghose.png",
  "/mentors/sneha_toppo.png",
  "/mentors/guru_anirudh.png",
  "/mentors/vaideshi_mishra.png",
  "/mentors/agrima_chakraborty.png",
  "/mentors/saadhvi_raju.png",
  "/mentors/jennifer_dominic.png",
  "/mentors/roniya_robin.png",
  "/mentors/sukriti_dilwaria.png",
  "/mentors/sudha_nanduri.png",
  "/mentors/vartika_singh.png",
  "/mentors/somdatta_mukherjee.png",

]

const IMAGES_PER_SLIDE = 3

const OnlineCohort = () => {
  const [page, setPage] = useState(0)
   const navigate = useNavigate()
  const goToAbout = () => {
    navigate('/about');
  };
  const totalPages = Math.ceil(images.length / IMAGES_PER_SLIDE)

  const nextPage = () => setPage((prev) => (prev + 1) % totalPages)
  const prevPage = () => setPage((prev) => (prev - 1 + totalPages) % totalPages)

  const visibleImages = images.slice(
    page * IMAGES_PER_SLIDE,
    page * IMAGES_PER_SLIDE + IMAGES_PER_SLIDE
  )
  return (
    <>
      <section id="cohort" className="bg-[#09101a]">
        <div className="w-full text-white py-10 flex flex-col items-center justify-center text-center gap-y-8 px-4">
          <span className="font-semibold text-sm md:text-base">
            6 WEEK ONLINE PROGRAM
          </span>

          <span className="font-bold text-3xl md:text-4xl max-w-xs md:max-w-md">
            Master the <a className="text-[#00ff9f]">A&rarr;Z</a> of Practical
            Research
          </span>

          <span className="text-sm md:text-base max-w-lg">
            We&#39;ll help you evolve from a young Researcher to a confident,
            skilled professional, equipping you with hands-on experience,
            real-world techniques, and the confidence to excel in academics.
          </span>
        </div>

        <div className="w-full flex items-center justify-center px-4 py-6">
          <img
            src={cohort}
            alt="meet"
            className="w-full max-w-xs md:max-w-lg h-auto border-8 border-gray-500"
          />
        </div>

        <div className="flex flex-col w-full items-center justify-center py-5 gap-y-3 px-4">
          <button onClick={goToAbout} className="bg-[#27d587] hover:bg-[#f0f2f1] hover:text-[#5fc094] rounded-lg py-2 px-4 transition-all duration-300 hover:cursor-pointer">
            Apply now
          </button>

          <span className="text-white font-semibold text-sm md:text-base">
            COHORT WILL START  SSON
          </span>
        </div>
      </section>
      <section id="everything-you-need" className="bg-[#09101a]">
        <div className="flex flex-col sm:flex-row w-full items-center justify-between px-6 md:px-16 py-10 md:py-20 gap-y-10 sm:gap-x-10">
          {/* Text Section */}
          <div className="flex flex-col max-w-xl gap-y-6 text-center sm:text-left">
            <span className="font-bold text-3xl md:text-5xl text-white leading-tight">
              Everything You Need to Succeed as a Researcher
            </span>

            <span className="text-white font-bold text-xl md:text-2xl">
              Expert-Led Sessions
            </span>

            <span className="text-gray-200/70 font-bold text-xl md:text-2xl">
              Structured Training Programs
            </span>

            <span className="text-gray-200/70 font-bold text-xl md:text-2xl">
              Community and Mentorship
            </span>

            <span className="text-gray-200/70 font-bold text-xl md:text-2xl">
              Certification and Beyond
            </span>
          </div>

          {/* Image Section */}
          <div className="w-full sm:w-auto flex justify-center">
            <img
              src={cohort2}
              alt="googlemeet"
              className="w-full max-w-xs sm:max-w-md md:max-w-lg rounded-2xl h-auto border-8 border-gray-500"
            />
          </div>
        </div>
      </section>
      <section id="mentors" className="bg-[#09101a]">
        <div className="w-full text-white bg-[#09101a] py-10 flex flex-col items-center justify-center text-center gap-y-4 px-4">
          <span className="font-semibold text-base md:text-lg">
            MEET YOUR MENTORS
          </span>

          <span className="font-bold text-2xl md:text-4xl max-w-xl leading-snug">
            Guided by world-class researchers, every week.
          </span>

          <span className="text-sm md:text-base text-gray-200">
            Learn from the best
          </span>
        </div>

        {/* <div className="w-full mx-auto py-8 bg-[#09101a]">
          <div className="relative overflow-hidden">
            <button
              onClick={prevPage}
              className="absolute left-5 top-1/2 -translate-y-1/2 z-10 bg-transparent text-gray-400 border-2 border-gray-400 p-1 rounded-full shadow-md hover:-translate-x-2 transition-all duration-200 ease-in-out"
            >
              <ChevronLeft />
            </button>

            <div className="flex gap-4 justify-center bg-[#09101a]">
              <AnimatePresence>
                {visibleImages.map((src, idx) => (
                  <motion.img
                    key={src}
                    src={src}
                    alt={`Slide ${idx}`}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="rounded-lg shadow-md w-full h-auto max-w-[300px]"
                  />
                ))}
              </AnimatePresence>
            </div>

            <button
              onClick={nextPage}
              className="absolute right-5 top-1/2 -translate-y-1/2 z-10 bg-trnasparent text-gray-400 border-2 border-gray-400 p-1 rounded-full shadow-md hover:translate-x-2 transition-all duration-200 ease-in-out"
            >
              <ChevronRight />
            </button>
          </div>

          {/* Dots */}
          {/* <div className="flex justify-center mt-4 gap-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                className={`w-2 h-2 rounded-full ${
                  i === page ? "bg-orange-400" : "bg-gray-900"
                }`}
              />
            ))}
          </div> */}
        {/* </div> */}
      </section>
      <section className="bg-[#09101a] text-white py-10 px-2">
        <div className="flex flex-col items-center justify-center text-center w-full gap-y-4">
          <span className="font-bold text-lg text-[#84efac]">How it works</span>
          <span className="text-4xl font-bold">
            What does the cohort look like?
          </span>
          <span className="font-bold text-lg text-[#84efac]">
            Our Academy takes you on a step-by-step journey from foundational
            skills to mastering real-world research:
          </span>
        </div>
        <div className="w-full bg-[#09101a] px-15 py-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 grid-rows-6 gap-4 w-full">
            {/* Row 1, Col 1 */}
            <div className="sm:col-start-1 sm:row-start-1 bg-[#09101a] rounded shadow">
              <CohortCard
                id={1}
                title="Foundation"
                desc={[
                  "✦ Develop essential practical skills",
                  "✦ Learn the traits of an effective researcher",
                ]}
              />
            </div>

            {/* Row 2, Col 2 */}
            <div className="sm:col-start-2 sm:row-start-2 bg-[#09101a] rounded shadow">
              <CohortCard
                id={2}
                title="Case Mastery"
                desc={[
                  "✦ Master the art of history-taking and case formulation",
                  "✦ Gain proficiency in key research frameworks and techniques",
                ]}
              />
            </div>

            {/* Row 3, Col 1 */}
            <div className="sm:col-start-1 sm:row-start-3 bg-[#09101a] rounded shadow">
              <CohortCard
                id={3}
                title="Research and Demonstrations"
                desc={[
                  "✦ Dive into dynamic research techniques",
                  "✦ Learn to present, analyze, and formulate researched work with clarity",
                ]}
              />
            </div>

            {/* Row 4, Col 2 */}
            <div className="sm:col-start-2 sm:row-start-4 bg-[#09101a] rounded shadow">
              <CohortCard
                id={4}
                title="Mastering Online research"
                desc={[
                  "✦ Conduct effective research in virtual environments",
                  "✦ Develop confidence in using digital tools and platforms for seamless client interactions",
                ]}
              />
            </div>

            {/* Row 5, Col 1 */}
            <div className="sm:col-start-1 sm:row-start-5 bg-[#09101a] rounded shadow">
              <CohortCard
                id={5}
                title={"1:1 Mock Sessions"}
                desc={[
                  "✦ Practice diverse research modalities in simulated environments",
                  "✦ Build confidence with real-world applications.",
                ]}
              />
            </div>

            {/* Row 6, Col 2 */}
            <div className="sm:col-start-2 sm:row-start-6 bg-[#09101a] rounded shadow">
              <CohortCard
                id={6}
                title="Graduation 🎓"
                desc={[
                  "✦ Celebrate your growth and readiness to thrive professionally.",
                  "✦ Step into the field equipped to thrive and make a meaningful impact",
                ]}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default OnlineCohort
