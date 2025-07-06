import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const navigate = useNavigate()
  const goToAbout = () => {
    navigate('/about');
  };
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-colors duration-500 ${
        isScrolled ? "bg-[#141c27cc] bg-opacity-80" : "bg-[#09101a]"
      }`}
    >
      <div className="max-w-6xl mx-auto px-10 py-2 text-white flex justify-between items-center">
        <h1 className="font-bold font-serif">
          VSSER
        </h1>
        <nav className="space-x-6">
          <button onClick={goToAbout} className="bg-[#27d587] hover:bg-[#f0f2f1] hover:text-[#5fc094] rounded-lg py-2 px-4 transition-all duration-300 hover:cursor-pointer">
            Apply now
          </button>
        </nav>
      </div>
    </header>
  )
}
