import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/services", label: "Services" },
    { to: "/elder-care", label: "Elder Care" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-teal-100"
          : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-teal-700 rounded-xl flex items-center justify-center shadow-md group-hover:shadow-teal-200 transition-all duration-300">
              <span className="text-white text-lg font-black">E</span>
            </div>
            <div>
              <span className="text-xl font-black text-slate-800" style={{ fontFamily: "'Sora', sans-serif" }}>
                Elder<span className="text-teal-600">Care</span>
              </span>
              <p className="text-xs text-slate-400 font-medium -mt-0.5 tracking-wide">Professional Home Healthcare</p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-semibold tracking-wide transition-all duration-300 relative group ${
                  location.pathname === link.to
                    ? "text-teal-600"
                    : "text-slate-600 hover:text-teal-600"
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-teal-500 transition-all duration-300 ${
                    location.pathname === link.to ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/emergency"
              className="flex items-center gap-2 bg-red-50 text-red-600 px-4 py-2 rounded-xl font-bold text-sm hover:bg-red-100 transition-all border border-red-200"
            >
              <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              Emergency
            </Link>
            <Link
              to="/contact"
              className="bg-gradient-to-r from-teal-500 to-teal-700 text-white px-6 py-2.5 rounded-xl font-bold text-sm hover:shadow-lg hover:shadow-teal-200 transition-all duration-300 hover:-translate-y-0.5"
            >
              Book a Caregiver
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
          >
            <span className={`w-6 h-0.5 bg-slate-700 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`w-6 h-0.5 bg-slate-700 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`w-6 h-0.5 bg-slate-700 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-teal-100 px-4 py-6 flex flex-col gap-4 shadow-xl">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMenuOpen(false)}
              className={`font-semibold text-base py-2 ${
                location.pathname === link.to ? "text-teal-600" : "text-slate-600"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/emergency"
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-2 text-red-600 font-bold py-2"
          >
            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            Emergency
          </Link>
          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="bg-teal-600 text-white text-center py-3 rounded-xl font-bold"
          >
            Book a Caregiver
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
