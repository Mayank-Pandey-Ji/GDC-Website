import React from "react";
import CohortCard from "../components/CohortCard.jsx";
import {
  FaProjectDiagram,
  FaEdit,
  FaBullhorn,
  FaHandshake,
  FaLayerGroup,
  FaUserFriends,
  FaChartLine,
} from "react-icons/fa";

const OnlineCohort = () => {
  return (
    <>
      <section id="cohort" className="relative bg-[#0f1e25] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f1e25] via-[#1a2832] to-[#0f1e25]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(34,211,238,0.08),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(34,211,238,0.05),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(14,165,233,0.04),transparent_70%)]" />

        <div className="relative w-full text-white py-14 flex flex-col items-center justify-center text-center gap-y-6 px-4">
          <span className="font-semibold text-sm md:text-base tracking-wide text-cyan-300">
            6 WEEK ONLINE PROGRAM
          </span>

          <h1 className="font-bold text-3xl md:text-4xl max-w-xl leading-snug">
            Master the{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-sky-500 bg-clip-text text-transparent">
              A&rarr;Z
            </span>{" "}
            of Practical Research
          </h1>

          <p className="text-sm md:text-base max-w-lg text-gray-400 leading-relaxed">
            We&#39;ll help you evolve from a young Researcher to a confident,
            skilled professional, equipping you with hands-on experience,
            real-world techniques, and the confidence to excel in academics.
          </p>

          <span className="bg-gradient-to-r from-cyan-400 to-sky-500 text-[#0f1e25] px-5 py-2 rounded-lg text-sm font-medium shadow-lg shadow-cyan-400/30">
            COHORT WILL START SOON
          </span>
        </div>
      </section>

      <section
        id="everything-you-need"
        className="relative bg-[#0f1e25] overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-tl from-[#0f1e25] via-[#15242e] to-[#0f1e25]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,211,238,0.06),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(14,165,233,0.04),transparent_70%)]" />

        <div className="relative flex flex-col sm:flex-row w-full items-center justify-between px-6 md:px-16 py-14 md:py-20 gap-y-10 sm:gap-x-10">
          <div className="flex flex-col max-w-xl gap-y-5 text-center sm:text-left">
            <h2 className="font-bold text-3xl md:text-5xl text-white leading-tight">
              Everything You Need to Succeed as a Researcher
            </h2>
            <p className="bg-gradient-to-r from-cyan-400 to-sky-500 bg-clip-text text-transparent font-semibold text-xl md:text-2xl">
              Expert-Led Sessions
            </p>
            <p className="text-gray-300 font-semibold text-lg md:text-xl">
              Structured Training Programs
            </p>
            <p className="text-gray-300 font-semibold text-lg md:text-xl">
              Community and Mentorship
            </p>
            <p className="text-gray-300 font-semibold text-lg md:text-xl">
              Certification and Beyond
            </p>
          </div>
        </div>
      </section>

      <section id="mentors" className="bg-[#FDF4DC]">
        <div className="w-full text-[#533A71] py-14 flex flex-col items-center justify-center text-center gap-y-4 px-4">
          <span className="font-semibold text-base md:text-lg tracking-wide uppercase">
            MEET YOUR MENTORS
          </span>
          <h2 className="font-bold text-2xl md:text-4xl max-w-xl leading-snug">
            Guided by world-class researchers, every week.
          </h2>
          <p className="text-sm md:text-base text-[#7A5FA3]">Learn from the best</p>
        </div>
      </section>

      <section className="bg-white text-[#533A71] py-14 px-4">
        <div className="flex flex-col items-center justify-center text-center w-full gap-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Objectives of International Relations & Global Diplomacy Consulting
            (IRGDC)
          </h2>
          <p className="font-medium text-lg text-[#7A5FA3] max-w-4xl leading-relaxed">
            The objectives of GDC are framed to guide the platform's growth,
            output, and institutional effectiveness in a phased and focused
            manner. These objectives translate GDC's broader values and ambitions
            into concrete, measurable, and time-bound goals that support
            long-term impact and operational success. Each objective below is
            mapped to a strategic function of the organization, ensuring that GDC
            evolves as a results-oriented, adaptive, and mission-driven platform.
          </p>
        </div>

        <div className="w-full px-4 md:px-16 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {[
              {
                icon: FaProjectDiagram,
                title: "Launch Core Verticals (Year 1–2):",
                desc: [
                  "Certified courses, research mentorship, media platform, academic journal, and annual conference",
                ],
              },
              {
                icon: FaEdit,
                title: "Editorial Integrity:",
                desc: [
                  "Establish a robust editorial process with double-blind reviews, plagiarism checks, and academic mentoring.",
                ],
              },
              {
                icon: FaBullhorn,
                title: "Nationwide Outreach:",
                desc: [
                  "Build awareness through partnerships, events, student ambassadors, and campus campaigns.",
                ],
              },
              {
                icon: FaHandshake,
                title: "Global Partnerships:",
                desc: [
                  "Collaborate with universities, think tanks, and embassies for shared events, internships, and publications.",
                ],
              },
              {
                icon: FaLayerGroup,
                title: "Modular Certification:",
                desc: [
                  "Offer flexible, stackable learning modules leading to diplomas in diplomacy and international affairs.",
                ],
              },
              {
                icon: FaUserFriends,
                title: "Alumni & Mentorship Network:",
                desc: [
                  "Connect past cohorts with current ones through mentorship, guest talks, and advisory roles.",
                ],
              },
              {
                icon: FaChartLine,
                title: "Annual Youth Diplomacy Report:",
                desc: [
                  "Highlight top student work in an annual publication shared with global institutions.",
                ],
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-md border border-[#E5D9F2] hover:border-[#A799B7] hover:shadow-lg hover:scale-105 transition-all duration-300 p-6"
              >
                <CohortCard
                  icons={item.icon}
                  title={item.title}
                  desc={item.desc}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default OnlineCohort;
