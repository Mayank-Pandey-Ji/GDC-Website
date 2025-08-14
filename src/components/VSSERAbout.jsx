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
  hidden: { 
    opacity: 0, 
    y: 20,
    scale: 0.95
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: { 
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

const sectionVariant = {
  hidden: { 
    opacity: 0, 
    y: 30,
    scale: 0.98
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: { 
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
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
        <motion.span 
          key={i} 
          variants={wordVariant} 
          className="inline-block mr-2"
        >
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
  <div className="relative z-10 w-full bg-[#02050a] min-h-screen">
    
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
            text="At IRGDC, our aim is to create an accessible and credible platform that empowers students,
            especially from underserved regions to become globally competent scholars, policy thinkers,
            and public leaders. We bridge gaps in mentorship, research opportunities, and academic
             publishing to help students unlock their full potential in diplomacy and international affairs."
            className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light tracking-wide"
          />
        </div>
      </AnimatedSection>

      
      <div className="space-y-16">
        <AnimatedSection className="group">
          <div className="relative pl-8 border-l-2 border-[#00ff9f]/20 hover:border-[#00ff9f]/40 transition-colors duration-500">
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="absolute -left-2 top-0 w-4 h-4 bg-[#00ff9f] rounded-full shadow-lg shadow-[#00ff9f]/30"
            />
            <AnimatedText 
              text="●	Global Youth Diplomacy Network " 
              className="text-2xl md:text-3xl font-semibold mb-6 text-white"
            />
            <div className="space-y-4">
              <AnimatedText 
                text="A space where students from across the world connect and collaborate."
                className="text-lg text-gray-400 leading-relaxed"
              />
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="group">
          <div className="relative pl-8 border-l-2 border-[#00ff9f]/20 hover:border-[#00ff9f]/40 transition-colors duration-500">
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="absolute -left-2 top-0 w-4 h-4 bg-[#00ff9f] rounded-full shadow-lg shadow-[#00ff9f]/30"
            />
            <AnimatedText 
              text="●	Publishing Powerhouse " 
              className="text-2xl md:text-3xl font-semibold mb-6 text-white"
            />
            <div className="space-y-4">
              <AnimatedText 
                text="A quality driven platform for student-led research and commentary in global affairs." 
                className="text-lg text-gray-400 leading-relaxed"
              />
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="group">
          <div className="relative pl-8 border-l-2 border-[#00ff9f]/20 hover:border-[#00ff9f]/40 transition-colors duration-500">
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="absolute -left-2 top-0 w-4 h-4 bg-[#00ff9f] rounded-full shadow-lg shadow-[#00ff9f]/30"
            />
            <AnimatedText 
              text="●	Policy Incubator" 
              className="text-2xl md:text-3xl font-semibold mb-6 text-white"
            />
            <div className="space-y-4">
              <AnimatedText 
                text="A launchpad for socially conscious changemakers and diplomacy-driven ventures."
                className="text-lg text-gray-400 leading-relaxed"
              />
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="group">
          <div className="relative pl-8 border-l-2 border-[#00ff9f]/20 hover:border-[#00ff9f]/40 transition-colors duration-500">
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="absolute -left-2 top-0 w-4 h-4 bg-[#00ff9f] rounded-full shadow-lg shadow-[#00ff9f]/30"
            />
            <AnimatedText 
              text="●	New Model of Diplomacy Education" 
              className="text-2xl md:text-3xl font-semibold mb-6 text-white"
            />
            <div className="space-y-4">
              <AnimatedText 
                text="Interactive, research-based, and practice-oriented learning that reflects today’s global challenges." 
                className="text-lg text-gray-400 leading-relaxed"
              />

            </div>
          </div>
        </AnimatedSection>
{ /*
        <AnimatedSection className="group">
          <div className="relative pl-8 border-l-2 border-[#00ff9f]/20 hover:border-[#00ff9f]/40 transition-colors duration-500">
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="absolute -left-2 top-0 w-4 h-4 bg-[#00ff9f] rounded-full shadow-lg shadow-[#00ff9f]/30"
            />
            <AnimatedText 
              text="5. Building a Community of Scholars and Mentors" 
              className="text-2xl md:text-3xl font-semibold mb-6 text-white"
            />
            <div className="space-y-4">
              <AnimatedText 
                text="Finally, we aim to create a sustainable community of scholars, mentors, advisors, and alumni who support each other's growth. Through our mentorship programs, editorial collaborations, workshops, and events, we envision a vibrant network that grows with each cohort and fuels new collaborations in research, diplomacy, and global leadership." 
                className="text-lg text-gray-400 leading-relaxed"
              />
              <AnimatedText 
                text="We aim for GDC to be more than a platform it should be a lifelong academic and professional ecosystem." 
                className="text-lg text-gray-400 leading-relaxed"
              />
            </div>
          </div>
        </AnimatedSection>

        */}

        { /*}
        <AnimatedSection className="relative mt-20">
          <div className="relative p-8 rounded-2xl bg-gradient-to-r from-[#00ff9f]/5 via-transparent to-[#00ff9f]/5 border border-[#00ff9f]/20">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.3 }}
              className="absolute top-0 left-0 h-0.5 bg-gradient-to-r from-[#00ff9f] to-transparent rounded-full"
            />
            <AnimatedText 
              text="In Summary" 
              className="text-3xl md:text-4xl font-bold mb-8 text-white"
            />
            <AnimatedText 
              text="GDC's aim is to co-create futures: to equip students with the knowledge, mentorship, credentials, and voice they need to navigate, shape, and lead in the world of diplomacy and global policy. In doing so, we intend not only to transform individual student journeys, but also to contribute to a more inclusive and intellectually diverse global leadership pipeline rooted in India, but built for the world." 
              className="text-lg md:text-xl text-gray-300 leading-relaxed font-light"
            />
          </div>
        </AnimatedSection>

        */}
      </div>
    </motion.div>
  </div>
);

export default GDCAbout;
