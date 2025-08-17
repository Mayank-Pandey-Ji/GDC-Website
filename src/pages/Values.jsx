import React from 'react';
import valueImage from '../assets/value-image.jpg';
import {
  FaBrain,
  FaGlobeAmericas,
  FaBalanceScale,
  FaUserGraduate,
  FaComments
} from "react-icons/fa";

const valueItems = [
  {
    icon: FaBrain,
    text:
      "At Global Diplomacy Consulting, we are guided by the belief that ethical global engagement begins with intellectual humility, intercultural sensitivity, and a deep commitment to critical inquiry.",
  },
  {
    icon: FaGlobeAmericas,
    text:
      "We value the practice of diplomacy not merely as negotiation between states, but as a mindset of listening across difference, thinking beyond borders, and acting with responsibility toward future generations.",
  },
  {
    icon: FaBalanceScale,
    text:
      "Our work is anchored in transparency, reflective learning, and the cultivation of environments where diverse worldviews are respected, challenged, and synthesised.",
  },
  {
    icon: FaUserGraduate,
    text:
      "These values shape how we teach, publish, collaborate, and grow, with the goal of fostering globally aware, socially rooted, and intellectually agile citizens.",
  },
  {
    icon: FaComments,
    text:
      "We believe in fostering learning environments that are grounded in empathy, open dialogue, and mutual respect to build truly global citizenship.",
  },
];

const Values = () => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-[#09101a]">
      <div className="max-w-7xl mx-auto">
        {/* Top Image & Heading */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_30px_#55e6a580] rounded-md">
            <img
              src={valueImage}
              alt="Diplomatic Values"
              className="w-full h-auto rounded-md shadow-md border border-gray-700"
            />
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-green-600 to-[#55e6a5] bg-clip-text text-transparent transition-all duration-300 hover:scale-105 hover:drop-shadow-[0_0_10px_#55e6a5]">
              Core Values of Global Diplomacy Consultancy
            </h1>
          </div>
        </div>

        {/* Value Cards */}
        <div className="mt-16 space-y-6 max-w-5xl">
          {valueItems.map(({ icon: Icon, text }, index) => (
            <div
              key={index}
              className="group flex items-start gap-4 p-6 rounded-xl border border-gray-600 hover:border-[#55e6a5] transition-all duration-300 bg-[#0e1624] hover:shadow-[0_0_30px_#55e6a580] hover:scale-[1.02]"
            >
              {/* Icon container */}
              <div className="flex-shrink-0 w-12 h-12 bg-[#0f1722] border-2 border-[#00ff9f] rounded-full flex items-center justify-center shadow-md">
                <Icon className="text-[#00ff9f] text-xl" />
              </div>

              {/* Text */}
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed transition-colors duration-300 group-hover:text-white">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
