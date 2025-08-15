// /pages/OnlineCohort.jsx

// ********************* work by Haswanth Tamil ******************************

import React, { useState } from "react"
// // eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import CohortCard from "../components/CohortCard.jsx"
import { useNavigate } from "react-router-dom"
import cohort from "../assets/cohort.jpg"
import cohort2 from "../assets/picture2.jpg"



import {
  FaProjectDiagram,
  FaEdit,
  FaBullhorn,
  FaHandshake,
  FaLayerGroup,
  FaUserFriends,
  FaChartLine,
} from "react-icons/fa";



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
                    alt={Slide ${idx}}
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
      // </section>

      <section className="bg-[#09101a] text-white py-10 px-2">
        <div className="flex flex-col items-center justify-center text-center w-full gap-y-4">
          {/* <span className="font-bold text-lg text-[#84efac]">How it works</span> */}
          <span className="text-4xl font-bold">
            Objectives of Global Diplomacy Consulting (GDC)
          </span>
          <span className="font-bold text-lg text-[#84efac]">
            The objectives of GDC are framed to guide the platform’s growth, output, and institutional effectiveness in a phased and focused manner. These objectives translate GDC’s broader values and ambitions into concrete, measurable, and time-bound goals that support long-term impact and operational success.
            Each objective below is mapped to a strategic function of the organization, ensuring that GDC evolves as a results-oriented, adaptive, and mission-driven platform.

          </span>
        </div>
        <div className="w-full bg-[#09101a] px-15 py-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 grid-rows-6 gap-4 w-full">
            {/* Row 1, Col 1 */}
            <div className="sm:col-start-1 sm:row-start-1 bg-[#09101a] rounded shadow">
              <CohortCard
                icons={FaProjectDiagram}
                title="To Establish a Multi-Vertical Ecosystem within the First 24 Months"
                desc={[
                  "We aim to fully operationalise all core service verticals including certified courses, research mentorship, the media platform, academic journal, and the annual research conference, within two academic cycles. Each vertical will be launched with its own syllabus, operational workflows, performance metrics, and digital interface.",
                ]}
              />
            </div>

            {/* Row 2, Col 2 */}
            <div className="sm:col-start-2 sm:row-start-2 bg-[#09101a] rounded shadow">
              <CohortCard
                icons={FaEdit}
                title="To Develop and Implement a Comprehensive Editorial Framework"
                desc={[
                  "We will design an editorial governance structure that ensures the academic rigor, originality, and ethical integrity of all GDC publications. This includes editorial boards for both the student journal and media platform, a double-blind review system, author mentoring protocols, and clear citation/anti-plagiarism guidelines.",
                ]}
              />
            </div>

            {/* Row 3, Col 1 */}
            <div className="sm:col-start-1 sm:row-start-3 bg-[#09101a] rounded shadow">
              <CohortCard
                icons={FaBullhorn}
                title="To Launch a Pan-India Outreach Campaign to Build Brand Recognition"
                desc={[
                  "To position GDC nationally, we will roll out a structured institutional outreach campaign targeting universities, liberal arts colleges, and policy schools across India. This will include informational sessions, strategic partnerships, speaking engagements, campus ambassadors, and participation in youth festivals and conferences.",
                ]}
              />
            </div>

            {/* Row 4, Col 2 */}
            <div className="sm:col-start-2 sm:row-start-4 bg-[#09101a] rounded shadow">
              <CohortCard
                icons={FaHandshake}
                title="To Formalize Strategic Partnerships with Global and Domestic Institutions"
                desc={[
                  "We will prioritize formal tie-ups with policy think tanks, media platforms, universities, and embassies to enhance GDC’s credibility and reach. These partnerships will focus on co-hosted events, shared content, publication support, faculty exchange, and internship pipelines.",
                ]}
              />
            </div>

            {/* Row 5, Col 1 */}
            <div className="sm:col-start-1 sm:row-start-5 bg-[#09101a] rounded shadow">
              <CohortCard
                icons={FaLayerGroup}
                title={"To Design a Modular Learning and Certification Framework"}
                desc={[
                  "GDC will design a flexible course structure allowing students to progress through micro-credentials (modules) that lead to larger certifications in diplomacy and international affairs. Courses will include both synchronous and asynchronous content, verified assessments, and digital credentials.",
                ]}
              />
            </div>

            {/* Row 6, Col 2 */}
            <div className="sm:col-start-2 sm:row-start-6 bg-[#09101a] rounded shadow">
              <CohortCard
                icons = {FaUserFriends}
                title="To Develop an Alumni & Mentorship Network for Long-Term Impact"
                desc={[
                  "GDC will create an alumni tracking and mentoring system that allows previous cohorts to stay involved as reviewers, panellists, guest lecturers, or peer mentors. This will foster cross-cohort learning and extend GDC’s impact far beyond course durations.",
                ]}
              />
            </div>
            {/* Row 7, Col 2 */}
            <div className="sm:col-start-1 sm:row-start-7 bg-[#09101a] rounded shadow">
              <CohortCard
                icons ={FaChartLine}
                title="To Publish a Flagship Annual Report Showcasing Youth-Led Diplomacy Research"
                desc={[
                  "GDC will curate and publish an annual “State of Youth Diplomacy” report highlighting the top student-authored papers, essays, and commentary submitted to the platform. This publication will be distributed to media houses, embassies, universities, and policymakers to signal the quality of GDC’s intellectual ecosystem.",
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