import React from "react";
import {
  FaGlobe,
  FaBookOpen,
  FaLightbulb,
  FaUniversity,
  FaNetworkWired,
  FaVideo
} from "react-icons/fa";

const visionFeatures = [
  {
    icon: FaGlobe,
    title: "A Global Place for Young Diplomats",
    description:
      "We aim to connect student leaders across Asia, Africa, the Americas, and Europe—creating a space for diverse voices to collaborate and lead. With global partnerships, GDC will become a recognized name in cross-border dialogue and academic cooperation.",
  },
  {
    icon: FaBookOpen,
    title: "A Platform for Student Writers",
    description:
      "GDC will publish high-quality, student-led research—journals, reports, books, and digital content. We bridge the gap between youth ideas and formal scholarship, helping young writers influence real-world policy and academic thought.",
  },
  {
    icon: FaLightbulb,
    title: "Support for Young Changemakers",
    description:
      "We support students through fellowships, residencies, and incubation programs—turning bold ideas into real-world projects, campaigns, and solutions rooted in justice and cooperation.",
  },
  {
    icon: FaUniversity,
    title: "A New Way to Learn Diplomacy",
    description:
      "GDC promotes a modern, hands-on model of diplomacy education—using projects, teamwork, and writing to prepare students for global challenges.",
  },
  {
    icon: FaNetworkWired,
    title: "Fair and Inclusive Leadership",
    description:
      "We focus on leadership from the Global South, ensuring diverse youth voices shape the future of diplomacy, knowledge, and cooperation worldwide.",
  },
];


const VisionTimelineItem = ({ icon: Icon, title, description, isLast }) => (
  <div className="relative pl-12 pb-10 border-l border-gray-600">
    {/* Dot with Icon */}
    <div className="absolute -left-6 top-1 w-12 h-12 bg-[#0f1722] border-2 border-[#00ff9f] rounded-full flex items-center justify-center z-10">
      <Icon className="text-[#00ff9f] text-xl" />
    </div>

    {/* Content */}
    <div className="bg-[#111827] p-6 rounded-lg shadow-lg border border-gray-600 hover:shadow-orange-900/20 transition">
      <h3 className="text-white text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>

    {/* Vertical Line Extender */}
    {!isLast && (
      <div className="absolute left-[9px] top-14 w-0.5 h-full bg-gray-600"></div>
    )}
  </div>
);

const VisionSection = () => {
  return (
    <section className="min-h-screen py-16 px-20  bg-[#0a0f1a]">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-white mb-4">
            Our Vision at Global Diplomacy Consulting
          </h2>
          <p className="text-lg text-gray-400">
            At GDC, we want to build a global space where students can learn, lead, and create real change in diplomacy, public policy, and international relations.We believe young people—especially from the Global South—should shape the future through knowledge, teamwork, and bold ideas.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {visionFeatures.map((item, idx) => (
            <VisionTimelineItem
              key={idx}
              {...item}
              isLast={idx === visionFeatures.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
