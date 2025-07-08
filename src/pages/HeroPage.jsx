import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const HeroPage = () => {
  const navigate = useNavigate();
  const goToAbout = () => {
    navigate('/about');
  };

  const [contentVisible, setContentVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setContentVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="hero"
      className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a]" 
    >
      {/* Background Image*/}
      <img
        src="https://bocconsultingpro.com/images/detail_service5.jpg"
        alt="Global Diplomacy Network Background"
        className="absolute inset-0 w-full h-full object-cover object-center opacity-30 animate-zoom-in" 
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center px-6 sm:px-10 text-center max-w-4xl mx-auto py-20">
        <h1
          className={`text-3xl sm:text-3xl md:text-3xl lg:text-5xl font-extrabold leading-tight tracking-tight text-white mb-6
            transform transition-all duration-1000 ease-out ${
            contentVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <span className="bg-gradient-to-r from-[#ebf0ee] to-[#55e6a5] bg-clip-text text-transparent italic block">
            Navigating Complexities.
          </span>
          <span className="bg-gradient-to-r from-[#ebf0ee] to-[#55e6a5] bg-clip-text text-transparent italic block">
            Forging Alliances.
          </span>
          <span className="text-[#1cefa2] block mt-4">
            Global Diplomacy Consulting.
          </span>
        </h1>

        <p
          className={`mt-6 text-lg sm:text-xl text-gray-300 max-w-3xl mb-10
            transform transition-all duration-1000 delay-300 ease-out ${
            contentVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          At GDC, we empower organizations and governments to thrive in the intricate world of international relations. We bridge divides, build consensus, and deliver strategic insights for a connected future.
        </p>

        <button
          onClick={goToAbout}
          className={`bg-[#27d587] hover:bg-[#5fc094] text-white hover:text-white font-semibold py-4 px-12 rounded-full transition-all duration-500 transform hover:scale-105 shadow-xl text-lg
            ${contentVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          Discover Our Expertise
        </button>
      </div>
    </section>
  );
};

export default HeroPage;