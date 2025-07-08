import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"

const HeroPage = () => {
  const navigate = useNavigate()
  const goToAbout = () => {
    navigate('/about');
  };

  return (
    <section id="hero">
      <div className="w-full relative h-[100vh] z-10 bg-[#02050a] overflow-hidden">
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src="/hero_bg.png"
          alt="Background"
          className="absolute top-0 left-0 w-full h-full object-cover object-center -z-10"
        />

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 flex flex-col items-center justify-center px-6 sm:px-10 text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight tracking-tight text-white max-w-3xl"
          >
            Aim of <span className="bg-gradient-to-r from-[#ebf0ee] to-[#55e6a5] bg-clip-text text-transparent italic">Global Diplomacy Consulting (GDC)</span>
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-[#aff7dc] font-semibold py-6 tracking-wide leading-relaxed max-w-3xl text-base sm:text-lg"
          >
            The aim of Global Diplomacy Consulting (GDC) is to build an accessible, scalable, and credible platform that empowers students to become globally competent scholars, policy thinkers, and public leaders. We seek to bridge the significant mentorship, publication, and institutional access gap that currently limits students in India and beyond from realising their full potential in the fields of diplomacy, international affairs, and global governance.
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 items-center text-white"
          >
            <button onClick={goToAbout} className="bg-[#27d587] hover:bg-[#f0f2f1] hover:text-[#5fc094] rounded-lg py-2 px-4 transition-all duration-300">
              Learn More
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroPage;
