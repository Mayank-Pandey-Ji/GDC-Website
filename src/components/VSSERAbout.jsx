import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

// Parent variant for staggering
const containerVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.02,
    },
  },
};

// Word animation variant
const wordVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

// Word-by-word animation component
const AnimatedText = ({ text, className = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-10px" });

  return (
    <motion.div
      ref={ref}
      variants={containerVariant}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={`inline-block ${className}`}
    >
      {text.split(" ").map((word, i) => (
        <motion.span key={i} variants={wordVariant} className="inline-block mr-2">
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

const VSSERAbout = () => {
  return (
    <div className="relative z-10 w-full bg-cover bg-center bg-[#02050a]">
      <div className="max-w-5xl mx-auto px-4 py-10 text-white backdrop-blur-md text-2xl space-y-10">
        
        <section>
          <AnimatedText text="About VSSER" className="text-3xl font-bold mb-6" />
          <AnimatedText text="The Virtual Summer School in Entrepreneurship Research (VSSER) is a global, no-fee academic platform designed to build research capacity in the field of entrepreneurship. Established in 2021, VSSER has quickly grown into one of the most accessible and widely attended initiatives for emerging scholars, attracting over 1,000 participants from more than 35 countries in its first four years." className="text-gray-400 mb-4" />
          <AnimatedText text="VSSER provides an opportunity to learn directly from leading researchers, gain insights into publishing in top-tier entrepreneurship journals, and connect with a global network of like-minded individuals passionate about entrepreneurship research. Whether you are a student, early-career researcher, or an aspiring academic, VSSER offers an inclusive space to enhance your research skills, understand contemporary debates, and engage with cutting-edge scholarship." className="text-gray-400" />
        </section>

        <section>
          <AnimatedText text="Why Join VSSER?" className="text-2xl font-semibold mb-6" />
          <ul className="list-disc ml-6 space-y-2 text-gray-400 marker:text-[#00ff9f]">
            {[
              "Learn how to design, conduct, and publish high-quality entrepreneurship research.",
              "Hear directly from senior scholars and editors shaping the future of the field.",
              "Connect with a diverse, international community of researchers.",
              "Access expert-led sessions, all at no cost.",
            ].map((text, idx) => (
              <li key={idx}>
                <AnimatedText text={text} />
              </li>
            ))}
          </ul>
        </section>

        <section>
          <AnimatedText text="Our Impact" className="text-4xl font-semibold mb-6" />
          <AnimatedText text="Since its inception in 2021, the Virtual Summer School in Entrepreneurship Research (VSSER) has created a unique, no-cost platform for building research capacity in entrepreneurship studies across the globe." className="text-gray-400 mb-4" />
          <AnimatedText text="Over the past four years, VSSER has:" className="text-gray-400 mb-4" />
          <ul className="list-disc ml-6 space-y-2 text-gray-400 marker:text-[#00ff9f]">
            {[
              "Empowered 1,000+ participants from more than 35 countries, cutting across academic, geographic, and socio-economic boundaries.",
              "Provided free, high-quality training on conducting, publishing, and critically engaging with entrepreneurship research.",
              "Connected early-stage researchers with leading global scholars, journal editors, and established academics in the field.",
              "Fostered an inclusive, diverse research community committed to strengthening entrepreneurship as a field of inquiry.",
              "Contributed to making research knowledge more accessible, especially for scholars from emerging and underrepresented regions.",
            ].map((text, idx) => (
              <li key={idx}>
                <AnimatedText text={text} />
              </li>
            ))}
          </ul>
          <AnimatedText text="VSSER is not just a summer school, it is a growing international ecosystem for aspiring and established entrepreneurship researchers to learn, collaborate, and contribute to advancing knowledge in the discipline." className="text-gray-400 mt-4" />
          <AnimatedText text="As we celebrate the 5th edition VSSER-25, our impact continues to grow, driven by our mission to make quality entrepreneurship research accessible to all." className="text-gray-400 mt-2" />
        </section>

        <section>
          <AnimatedText text="The Man Behind This Revolution" className="text-4xl font-semibold mb-2" />
          <AnimatedText text="Prof. Vishal Gupta" className="text-3xl font-bold mb-8 text-[#00ff9f]" />
          <AnimatedText text="At the heart of the Virtual Summer School in Entrepreneurship Research (VSSER) is Prof. Vishal Gupta, a globally respected scholar, educator, and mentor, committed to making entrepreneurship research accessible to aspiring scholars worldwide." className="text-gray-400 mb-4" />
          <AnimatedText text="Prof. Gupta brings over two decades of academic excellence to VSSER. With more than 100 peer-reviewed journal publications, his research spans some of the most prestigious outlets in the field, including the Academy of Management Journal, Journal of Applied Psychology, Journal of Financial Economics, and the Journal of Management, among others." className="text-gray-400 mb-4" />
          <AnimatedText text="An expert in strategic management and entrepreneurship, Prof. Gupta’s teaching portfolio extends from undergraduate classrooms to PhD seminars, with students and scholars benefiting from his expertise across the United States, India, and Bahrain. His global outlook and dedication to scholarly capacity-building inspired the launch of VSSER in 2021—a free, inclusive platform that has already impacted over 1,000 participants from 35+ countries." className="text-gray-400 mb-4" />
          <AnimatedText text="Beyond academia, Prof. Gupta is a sought-after professional speaker, delivering impactful sessions for students, business executives, and small business owners on career advancement, entrepreneurship, and research excellence." className="text-gray-400" />
        </section>

      </div>
    </div>
  );
};

export default VSSERAbout;
