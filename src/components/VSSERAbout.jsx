import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const containerVariant = {
  hidden: {},
  visible: { 
    transition: { 
      staggerChildren: 0.02,
      delayChildren: 0.1
    } 
  }
};

const wordVariant = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: { 
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }
  }
};

const sectionVariant = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  visible: { 
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }
  }
};

const AnimatedText = ({ text, className = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-20px" });

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

const AnimatedSection = ({ children, className = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-40px" });

  return (
    <motion.section
      ref={ref}
      variants={sectionVariant}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={`relative ${className}`}
    >
      {children}
    </motion.section>
  );
};

const GDCAbout = () => (
  <div className="relative z-10 w-full min-h-screen bg-[#0f1e25]">
    
    {/* Gradient Background Layers */}
    <div className="absolute inset-0 bg-gradient-to-br from-[#0f1e25] via-[#142732] to-[#0f1e25]" />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(34,211,238,0.08),transparent_60%)]" />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(34,211,238,0.05),transparent_60%)]" />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(14,165,233,0.04),transparent_70%)]" />

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="relative max-w-6xl mx-auto px-6 py-16 text-white"
    >
      
      {/* Intro Section with Gradient Line */}
      <AnimatedSection className="mb-20">
        <div className="relative">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute -top-2 left-0 h-0.5 bg-gradient-to-r from-cyan-400 via-sky-500 to-transparent"
          />
          <AnimatedText 
            text="At IRGDC, our aim is to create an accessible and credible platform that empowers students, especially from underserved regions to become globally competent scholars, policy thinkers, and public leaders. We bridge gaps in mentorship, research opportunities, and academic publishing to help students unlock their full potential in diplomacy and international affairs."
            className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light tracking-wide"
          />
        </div>
      </AnimatedSection>

      {/* Features Section */}
      <div className="space-y-16">
        {[
          {
            title: "Global Youth Diplomacy Network",
            description: "A space where students from across the world connect and collaborate."
          },
          {
            title: "Publishing Powerhouse",
            description: "A quality driven platform for student-led research and commentary in global affairs."
          },
          {
            title: "Policy Incubator",
            description: "A launchpad for socially conscious changemakers and diplomacy-driven ventures."
          },
          {
            title: "New Model of Diplomacy Education",
            description: "Interactive, research-based, and practice-oriented learning that reflects today's global challenges."
          }
        ].map((item, idx) => (
          <AnimatedSection key={idx} className="group">
            <div className="relative pl-8 border-l-2 border-transparent bg-gradient-to-b from-cyan-400/30 via-cyan-400/10 to-transparent rounded-md p-4 hover:from-cyan-400/50 hover:via-sky-500/20 transition-all duration-700">
              
              {/* Gradient Glow Dot */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="absolute -left-3 top-4 w-5 h-5 bg-gradient-to-br from-cyan-400 to-sky-500 rounded-full shadow-[0_0_15px_rgba(34,211,238,0.6)]"
              />
              
              {/* Title with Gradient Text */}
              <AnimatedText 
                text={`● ${item.title}`} 
                className="text-2xl md:text-3xl font-semibold mb-4 bg-gradient-to-r from-cyan-400 to-sky-500 bg-clip-text text-transparent"
              />
              
              {/* Description */}
              <AnimatedText 
                text={item.description} 
                className="text-lg text-gray-400 leading-relaxed"
              />
            </div>
          </AnimatedSection>
        ))}
      </div>
    </motion.div>
  </div>
);

export default GDCAbout;
