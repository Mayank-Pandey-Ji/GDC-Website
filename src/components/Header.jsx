import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  // const navigate = useNavigate();
  // const goToAbout = () => {
  //   navigate('/about');
  // };
  // const goToArticle = () => {
  //   navigate('/articles');
  // };
  const goToHome = () => {
    navigate('/');
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-colors duration-500 ${
        isScrolled ? "bg-[#141c27cc] bg-opacity-80" : "bg-[#a799b7]"
      }`}
    >
      <div className="max-w-6xl mx-auto px-10 py-2 flex justify-between items-center">
        <button
          onClick={goToHome}
          className="rounded-lg text-lg text-[#533a71] font-bold hover:text-[#630ccd] hover:scale-105 transition-all duration-300 ease-out"
        >
          IRGDC
        </button>
        <nav className="space-x-6 flex gap-2">
          {/* Example button with theme colors */}
          {/* <button
            onClick={goToArticle}
            className="bg-[#0a0217] hover:bg-[#1a0b29] text-[#ccb2fb] font-semibold py-2 px-4 rounded-lg transition-all duration-300 hover:scale-105"
          >
            Articles
          </button> */}
          
          {/* <button
            onClick={goToAbout}
            className="bg-[#0a0217] hover:bg-[#1a0b29] text-[#ccb2fb] font-semibold py-2 px-4 rounded-lg transition-all duration-300 hover:scale-105"
          >
            Apply now
          </button> */}
        </nav>
      </div>
    </header>
  );
}
