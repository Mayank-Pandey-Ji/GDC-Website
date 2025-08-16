import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const navigate = useNavigate()
  const goToAbout = () => {
    navigate('/about');
  };
  const goToArticle = () => {
    navigate('/articles');
  };

   const goToHome = () => {
    navigate('/');
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
        isScrolled ? "bg-[#141c27cc] bg-opacity-80" : "bg-[#0d1a2c]"
      }`}
    >
      <div className="max-w-6xl mx-auto px-10 py-2 text-white flex justify-between items-center">
        <button onClick={goToHome} className="rounded-lg text-lg  hover:cursor-pointer font-bold hover:text-xl transition-all duration-300 ease-out">
            GDC
          </button>
        <nav className="space-x-6 flex gap-2">
          {/* <button onClick={goToArticle} className="bg-[#27d587] hover:bg-[#f0f2f1] hover:text-[#5fc094] rounded-lg py-2 px-4 transition-all duration-300 hover:cursor-pointer">
            Articles
          </button> */}
          
          {/* <button onClick={goToAbout} className="bg-[#27d587] hover:bg-[#f0f2f1] hover:text-[#5fc094] rounded-lg py-2 px-4 transition-all duration-300 hover:cursor-pointer">
            Apply now
          </button> */}
        </nav>
      </div>
    </header>
  )
}
