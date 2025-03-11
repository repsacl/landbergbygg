import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";

function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  // Handle scroll state
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    // Initial check when route changes
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // NavLink component with active state styling
  const NavLink = ({ to, children }) => {
    const isActive = location.pathname === to;
    
    return (
      <Link 
        to={to}
        className={`relative px-2 py-1 transition-all duration-300 hover:text-blue-600 ${
          isActive ? "font-bold" : ""
        }`}
      >
        {children}
        {isActive && (
          <motion.span
            className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600"
            layoutId="activeIndicator"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </Link>
    );
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img 
            src="/LB_Logo.svg" 
            alt="Landberg Bygg AS" 
            className={`h-12 transition-all duration-300 hover:scale-105 ${
              scrolled ? "filter-none" : "brightness-[1.2] contrast-[1.2]"
            }`}
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <div className={`flex space-x-8 text-lg font-medium transition-colors duration-300 ${
            scrolled ? "text-gray-800" : "text-white"
          }`}>
            <NavLink to="/">Hjem</NavLink>
            <NavLink to="/om">Om</NavLink>
            <NavLink to="/kontakt">Kontakt</NavLink>
          </div>
          
          <Link 
            to="/kontakt" 
            className={`px-5 py-2 rounded-md transition-all duration-300 ${
              scrolled 
                ? "bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg" 
                : "bg-white/20 backdrop-blur-sm text-white hover:bg-white/30"
            }`}
          >
            Ta kontakt
          </Link>
        </div>

        {/* Mobile menu button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-md"
        >
          <span className={`block w-6 h-0.5 mb-1.5 transition-all duration-300 ${
            scrolled ? "bg-gray-800" : "bg-white"
          } ${mobileMenuOpen ? "transform rotate-45 translate-y-2" : ""}`}></span>
          
          <span className={`block w-6 h-0.5 mb-1.5 transition-opacity duration-300 ${
            scrolled ? "bg-gray-800" : "bg-white"
          } ${mobileMenuOpen ? "opacity-0" : "opacity-100"}`}></span>
          
          <span className={`block w-6 h-0.5 transition-all duration-300 ${
            scrolled ? "bg-gray-800" : "bg-white"
          } ${mobileMenuOpen ? "transform -rotate-45 -translate-y-2" : ""}`}></span>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white shadow-lg overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <Link 
                to="/" 
                className={`py-2 px-4 rounded-md ${location.pathname === "/" ? "bg-blue-100 text-blue-600 font-bold" : "text-gray-800"}`}
              >
                Hjem
              </Link>
              <Link 
                to="/om" 
                className={`py-2 px-4 rounded-md ${location.pathname === "/om" ? "bg-blue-100 text-blue-600 font-bold" : "text-gray-800"}`}
              >
                Om
              </Link>
              <Link 
                to="/kontakt" 
                className={`py-2 px-4 rounded-md ${location.pathname === "/kontakt" ? "bg-blue-100 text-blue-600 font-bold" : "text-gray-800"}`}
              >
                Kontakt
              </Link>
              <Link 
                to="/kontakt" 
                className="mt-2 py-3 px-4 bg-blue-600 text-white text-center rounded-md font-medium"
              >
                Ta kontakt for befaring
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default NavBar;