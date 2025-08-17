import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const HeroPage = () => {
  const navigate = useNavigate();
  const [contentVisible, setContentVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setContentVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const goToAbout = () => {
    navigate("/about");
  };

  return (
    <section
      id="hero"
      className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a]"
    >
      {/* Background Image */}
      <img
        src="https://bocconsultingpro.com/images/detail_service5.jpg"
        alt="Global Diplomacy Network Background"
        className="absolute inset-0 w-full h-full object-cover object-center opacity-30 animate-zoom-in"
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-6 sm:px-10 text-center max-w-4xl mx-auto py-20">
        <h1
          className={`text-3xl sm:text-3xl md:text-3xl lg:text-5xl font-extrabold leading-tight tracking-tight mb-6
            transform transition-all duration-1000 ease-out ${
              contentVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
        >
          <span className="bg-gradient-to-r from-[#ebf0ee] to-[#55e6a5] bg-clip-text text-transparent italic block">
            International Relations & Global Diplomacy Consulting 
          </span>
          <span className="text-[#ccb2fb] block mt-3">
            IRGDC is not just a platform, it’s a movement
          </span>
        </h1>

        <p
          className={`mt-6 text-lg sm:text-xl text-gray-300 max-w-3xl mb-10
            transform transition-all duration-1000 delay-300 ease-out ${
              contentVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
        >
          We help students build futures shaped by knowledge, confidence, and global vision
        </p>

        <button
          onClick={goToAbout}
          className={`bg-[#0a0217] text-[#ccb2fb] hover:opacity-80 font-semibold py-4 px-12 rounded-full transition-all duration-500 transform hover:scale-105 shadow-xl text-lg
            ${
              contentVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
        >
          Discover Our Expertise
        </button>
      </div>
    </section>
  );
};

export default HeroPage;
