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
            text="At GDC, we believe that talent is universal, but access to academic credibility, guided mentorship, and meaningful publishing opportunities is not. Our platform exists to correct that imbalance. Through a curated ecosystem of coaching programs, research guidance, academic publishing, and global thought-leadership training, we aim to shape future-ready student leaders equipped for Ivy League admissions, competitive postgraduate scholarships, and impactful global careers." 
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
              text="1. Creating Equitable Pathways to Global Competence" 
              className="text-2xl md:text-3xl font-semibold mb-6 text-white"
            />
            <div className="space-y-4">
              <AnimatedText 
                text="We aim to open pathways for undergraduate students particularly those from tier-2 and tier-3 cities, underserved academic institutions, and non-traditional backgrounds who aspire to careers in global diplomacy, international development, and public policy but lack the access to guided preparation, research mentorship, and publishing platforms." 
                className="text-lg text-gray-400 leading-relaxed"
              />
              <AnimatedText 
                text="Our platform levels the playing field by offering structured opportunities for:" 
                className="text-lg text-gray-400 mt-6 mb-4"
              />
              <div className="grid gap-3">
                {[
                  "Participating in faculty-mentored coaching in diplomacy and IR;",
                  "Publishing research through a peer-reviewed student journal;",
                  "Developing public voices via op-eds and essays on our global media platform;",
                  "Engaging in peer simulations and public speaking forums;",
                  "Building compelling academic and leadership portfolios for postgraduate applications."
                ].map((text, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    className="flex items-start gap-3 p-3 rounded-lg bg-gradient-to-r from-[#00ff9f]/5 to-transparent hover:from-[#00ff9f]/10 transition-colors duration-300"
                  >
                    <div className="w-2 h-2 bg-[#00ff9f] rounded-full mt-3 flex-shrink-0" />
                    <AnimatedText text={text} className="text-gray-400 text-lg" />
                  </motion.div>
                ))}
              </div>
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
              text="2. Fostering Research and Intellectual Rigor" 
              className="text-2xl md:text-3xl font-semibold mb-6 text-white"
            />
            <div className="space-y-4">
              <AnimatedText 
                text="We aim to embed rigorous, ethical, and globally benchmarked academic values in students early in their intellectual journey. In an increasingly credential-driven world, GDC provides students with tangible markers of excellence such as publications in journals, media platforms, and research presentations." 
                className="text-lg text-gray-400 leading-relaxed"
              />
              <AnimatedText 
                text="By enabling research mentorship, fostering journal publication, and guiding Scopus-indexed writing, we ensure that students graduate with a body of work that signals seriousness and scholarly integrity, credentials often missing in traditional undergraduate frameworks." 
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
              text="3. Bridging the Classroom and the Real World" 
              className="text-2xl md:text-3xl font-semibold mb-6 text-white"
            />
            <div className="space-y-4">
              <AnimatedText 
                text="While classroom education builds foundational knowledge, GDC aims to build applied global competence. Our model blends academic preparation with practice-based learning. From workshops on negotiation and diplomacy to media literacy, policy writing, and leadership simulations our programs help students develop the confidence and voice needed to engage with real-world issues." 
                className="text-lg text-gray-400 leading-relaxed"
              />
              <AnimatedText 
                text="We aim to train students not just for exams, but for international conferences, policy internships, admissions interviews, and thought-leadership platforms." 
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
              text="4. Elevating Student Voices in Global Discourse" 
              className="text-2xl md:text-3xl font-semibold mb-6 text-white"
            />
            <div className="space-y-4">
              <AnimatedText 
                text="A key aim of GDC is to democratize knowledge production and elevate youth voices that are often excluded from mainstream policy and academic dialogue. Through our India and Europe-focused digital media platforms, we invite students to contribute perspectives, debates, and commentary on global issues whether it is climate change, international security, or development diplomacy." 
                className="text-lg text-gray-400 leading-relaxed"
              />
              <AnimatedText 
                text="By creating space for student writing to be published, reviewed, and disseminated, we aim to give young thinkers not only visibility but also credibility and impact." 
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
      </div>
    </motion.div>
  </div>
);

export default GDCAbout;
