import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import InteractiveLink from "./InteractiveLink";

function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between w-full p-3 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}>
        <Link to={"/"} className="justify-start">
          <img 
            src="/LB_Logo.svg" 
            alt="Logo" 
            className={`md:h-14 h-10 cursor-pointer m-0 transition-all ease-in hover:scale-105 ${
              scrolled ? "filter-none" : "filter-grayscale"
            }`}
          />
        </Link>

        <ul className={`flex md:space-x-8 space-x-5 md:text-xl text-sm font-medium md:px-6 px-2 ${
          scrolled ? "text-gray-800" : "text-white"
        }`}>
          <li><InteractiveLink to="/">Hjem</InteractiveLink></li>
          <li><InteractiveLink to="/om">Om</InteractiveLink></li>
          <li><InteractiveLink to="/kontakt">Kontakt</InteractiveLink></li>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;