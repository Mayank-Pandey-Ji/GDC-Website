// /pages/HeroPage.jsx
import { useNavigate } from "react-router-dom"

const HeroPage = () => {
  const navigate = useNavigate()
  const goToAbout = () => {
    navigate('/about');
  };
  return (
    <section id="hero">
      <div className="w-full relative h-[100vh] z-10 bg-[#02050a]">
        <img
          src="/hero_bg.png"
          alt="Hero Background"
          className="absolute top-0 left-0 w-full h-full sm:h-auto sm:relative sm:object-none object-cover object-center -z-10"
        />

        <div className="absolute top-0 left-0 right-0 h-full flex flex-col items-center justify-center px-6 sm:px-10 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-tighter tracking-tighter text-white max-w-3xl">
            From Theory to {" "}
            <span className="bg-gradient-to-r from-[#ebf0ee] to-[#55e6a5] bg-clip-text text-transparent italic">
             Application - Skill Building
            </span>{" "}
            Summer School
          </h1>
          <h2 className="text-[#aff7dc] font-semibold py-6 tracking-wider leading-tight max-w-3xl text-base sm:text-lg">
            Transform academic knowledge into practical skills with expert-led
            courses, hands-on experience, and mentorship designed to prepare you
            for success as a professional Researcher.
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 items-center text-white">
            <button onClick={goToAbout} className="bg-[#27d587] hover:bg-[#f0f2f1] hover:text-[#5fc094] rounded-lg py-2 px-4 transition-all duration-300 hover:cursor-pointer">
            Apply now
          </button>
            {/* <span className="text-sm sm:text-base font-semibold px-6 w-xs text-center">
              🟢 C5 is ongoing. Enrollment for C6 is live.
            </span> */}
          </div>
          <div className="flex flex-col sm:flex-row gap-3 pt-10 ">
            <div className="w-sm rounded-xl border-2 border-[#00ff9f] bg-[#02050a] flex flex-col px-7 py-5 items-baseline justify-center gap-y-2">
              <span className="text-[#00ff9f] text-sm font-bold">
                Next Cohort
              </span>
              <span className="text-white font-bold">2026</span>
            </div>
            <div className="w-sm rounded-xl border-2 border-[#00ff9f] bg-[#02050a] flex flex-col px-7 py-5 items-baseline justify-center gap-y-2">
              <span className="text-[#00ff9f] text-sm font-bold">
                Enrollment
              </span>
              <span className="text-white font-bold">Live now</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroPage
