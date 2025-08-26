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
  <div className="relative z-10 w-full bg-purple-300 min-h-screen">
    
    {/* Background Gradients */}
    <div className="absolute inset-0 bg-gradient-to-br from-[#02050a] via-[#0a0f1a] to-[#02050a] opacity-50" />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,255,159,0.03),transparent_50%)]" />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(0,255,159,0.02),transparent_50%)]" />

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="relative max-w-6xl mx-auto px-6 py-16 text-white"
    >
      
      <AnimatedSection className="mb-20">
        <div className="relative">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute -top-2 left-0 h-0.5 bg-gradient-to-r from-[#00ff9f] to-transparent"
          />
          <AnimatedText 
            text="At IRGDC, our aim is to create an accessible and credible platform that empowers students, especially from underserved regions to become globally competent scholars, policy thinkers, and public leaders. We bridge gaps in mentorship, research opportunities, and academic publishing to help students unlock their full potential in diplomacy and international affairs."
            className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light tracking-wide"
          />
        </div>
      </AnimatedSection>

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
            description: "Interactive, research-based, and practice-oriented learning that reflects today’s global challenges."
          }
        ].map((item, idx) => (
          <AnimatedSection key={idx} className="group">
            <div className="relative pl-8 border-l-2 border-[#00ff9f]/20 hover:border-[#00ff9f]/40 transition-colors duration-500">
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="absolute -left-2 top-0 w-4 h-4 bg-[#00ff9f] rounded-full shadow-lg shadow-[#00ff9f]/30"
              />
              <AnimatedText 
                text={`● ${item.title}`} 
                className="text-2xl md:text-3xl font-semibold mb-6 text-white"
              />
              <div className="space-y-4">
                <AnimatedText 
                  text={item.description} 
                  className="text-lg text-gray-400 leading-relaxed"
                />
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </motion.div>
  </div>
);

export default GDCAbout;
