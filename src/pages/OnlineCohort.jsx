// /pages/OnlineCohort.jsx

import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import CohortCard from "../components/CohortCard.jsx";
import { useNavigate } from "react-router-dom";
import cohort from "../assets/cohort.jpg";
import cohort2 from "../assets/picture2.jpg";

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
];

const IMAGES_PER_SLIDE = 3;

const OnlineCohort = () => {
  const [page, setPage] = useState(0);
  const navigate = useNavigate();
  const goToAbout = () => navigate("/about");
  const totalPages = Math.ceil(images.length / IMAGES_PER_SLIDE);

  const nextPage = () => setPage((prev) => (prev + 1) % totalPages);
  const prevPage = () => setPage((prev) => (prev - 1 + totalPages) % totalPages);

  const visibleImages = images.slice(
    page * IMAGES_PER_SLIDE,
    page * IMAGES_PER_SLIDE + IMAGES_PER_SLIDE
  );

  return (
    <>
      {/* Cohort Banner Section */}
      <section id="cohort" className="bg-[#09101a]">
        <div className="w-full text-white py-10 flex flex-col items-center justify-center text-center gap-y-8 px-4">
          <span className="font-semibold text-sm md:text-base">
            6 WEEK ONLINE PROGRAM
          </span>

          <span className="font-bold text-3xl md:text-4xl max-w-xs md:max-w-md">
            Master the <a className="text-[#00ff9f]">A&rarr;Z</a> of Practical Research
          </span>

          <span className="text-sm md:text-base max-w-lg">
            We&#39;ll help you evolve from a young Researcher to a confident, skilled professional, equipping you with hands-on experience, real-world techniques, and the confidence to excel in academics.
          </span>
        </div>

        <div className="w-full flex items-center justify-center px-4 py-6">
          <img
            src={cohort}
            alt="Cohort Banner"
            className="w-full max-w-xs md:max-w-lg h-auto border-8 border-gray-500"
          />
        </div>

        <div className="flex flex-col w-full items-center justify-center py-5 gap-y-3 px-4">
          {/* <button onClick={goToAbout} className="bg-[#27d587] hover:bg-[#f0f2f1] hover:text-[#5fc094] rounded-lg py-2 px-4 transition-all duration-300 hover:cursor-pointer">
            Apply now
          </button> */}

          <span className="text-white font-semibold text-sm md:text-base">
            COHORT WILL START SOON
          </span>
        </div>
      </section>

      {/* Everything You Need Section */}
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
              alt="Session Preview"
              className="w-full max-w-xs sm:max-w-md md:max-w-lg rounded-2xl h-auto border-8 border-gray-500"
            />
          </div>
        </div>
      </section>

      {/* Mentors Section */}
      <section id="mentors" className="bg-[#09101a]">
        <div className="w-full text-white py-10 flex flex-col items-center justify-center text-center gap-y-4 px-4">
          <span className="font-semibold text-base md:text-lg">MEET YOUR MENTORS</span>
          <span className="font-bold text-2xl md:text-4xl max-w-xl leading-snug">
            Guided by world-class researchers, every week.
          </span>
          <span className="text-sm md:text-base text-gray-200">Learn from the best</span>
        </div>

        {/* Carousel code is commented out for now */}
      </section>

      {/* Objectives Section */}
      <section className="bg-[#09101a] text-white py-10 px-2">
        <div className="flex flex-col items-center justify-center text-center w-full gap-y-4">
          <span className="text-4xl font-bold">
            Objectives of Global Diplomacy Consulting (GDC)
          </span>
          <span className="font-bold text-lg text-[#84efac] max-w-4xl">
            The objectives of GDC are framed to guide the platform’s growth, output, and institutional effectiveness in a phased and focused manner. These objectives translate GDC’s broader values and ambitions into concrete, measurable, and time-bound goals that support long-term impact and operational success. Each objective below is mapped to a strategic function of the organization, ensuring that GDC evolves as a results-oriented, adaptive, and mission-driven platform.
          </span>
        </div>

        <div className="w-full bg-[#09101a] px-15 py-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 grid-rows-6 gap-4 w-full">
            {[
              {
                icon: FaProjectDiagram,
                title: "Launch Core Verticals (Year 1–2):",
                desc: ["Certified courses, research mentorship, media platform, academic journal, and annual conference"],
              },
              {
                icon: FaEdit,
                title: "Editorial Integrity:",
                desc: ["Establish a robust editorial process with double-blind reviews, plagiarism checks, and academic mentoring."],
              },
              {
                icon: FaBullhorn,
                title: "Nationwide Outreach:",
                desc: ["Build awareness through partnerships, events, student ambassadors, and campus campaigns."],
              },
              {
                icon: FaHandshake,
                title: "Global Partnerships:",
                desc: ["Collaborate with universities, think tanks, and embassies for shared events, internships, and publications."],
              },
              {
                icon: FaLayerGroup,
                title: "Modular Certification:",
                desc: ["Offer flexible, stackable learning modules leading to diplomas in diplomacy and international affairs."],
              },
              {
                icon: FaUserFriends,
                title: "Alumni & Mentorship Network:",
                desc: ["Connect past cohorts with current ones through mentorship, guest talks, and advisory roles."],
              },
              {
                icon: FaChartLine,
                title: "Annual Youth Diplomacy Report:",
                desc: ["Highlight top student work in an annual publication shared with global institutions."],
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-[#09101a] rounded shadow">
                <CohortCard icons={item.icon} title={item.title} desc={item.desc} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default OnlineCohort;
