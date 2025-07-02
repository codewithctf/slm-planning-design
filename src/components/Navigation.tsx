import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const location = useLocation();
  const mobileDropdownRef = useRef<HTMLDivElement>(null);

  // Close mobile Services dropdown when mobile menu closes
  useEffect(() => {
    if (!isOpen) setServicesDropdownOpen(false);
  }, [isOpen]);

  // Click outside handler for mobile dropdown
  useEffect(() => {
    if (!servicesDropdownOpen) return;
    function handleClickOutside(event: MouseEvent) {
      if (
        mobileDropdownRef.current &&
        !mobileDropdownRef.current.contains(event.target as Node)
      ) {
        setServicesDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [servicesDropdownOpen]);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Process", path: "/process" },
    { name: "Blog", path: "/blog" }, // Blog now after Process
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img
              src="/Assets/slm-logo.png"
              alt="SLM Logo"
              className="w-12 h-12 object-contain rounded-lg shadow bg-white"
              style={{ maxWidth: "48px", maxHeight: "48px" }}
            />
            <span className="font-playfair font-bold text-2xl text-slm-green-600">
              SLM Planning & Design
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) =>
              item.name === "Services" ? (
                <div
                  key={item.name}
                  className="relative group"
                  tabIndex={0}
                  onBlur={(e) => {
                    if (!e.currentTarget.contains(e.relatedTarget))
                      setDropdownOpen(false);
                  }}
                >
                  <div className="flex items-center">
                    <Link
                      to="/services"
                      className={`font-inter font-medium relative transition-colors duration-200 px-1 flex items-center gap-1 ${
                        location.pathname === item.path
                          ? "text-slm-green-600 after:absolute after:left-0 after:right-0 after:-bottom-1 after:h-1 after:bg-[#712B29] after:rounded-full after:content-[''] after:transition-all after:duration-300"
                          : "text-gray-700 hover:text-slm-green-600 after:absolute after:left-0 after:right-0 after:-bottom-1 after:h-1 after:bg-[#712B29] after:rounded-full after:content-[''] after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300"
                      } ${
                        dropdownOpen ? "text-slm-green-600" : ""
                      }`}
                      onClick={() => setDropdownOpen(false)}
                      aria-haspopup="listbox"
                      aria-expanded={dropdownOpen}
                    >
                      Services
                    </Link>
                    <button
                      type="button"
                      aria-label="Open Services dropdown"
                      className={`ml-1 p-1 rounded transition-colors duration-200 ${
                        dropdownOpen ? "bg-slm-green-50" : ""
                      }`}
                      onClick={(e) => {
                        e.preventDefault();
                        setDropdownOpen((v) => !v);
                      }}
                      tabIndex={0}
                    >
                      <svg
                        className={`w-4 h-4 transition-transform duration-200 ${
                          dropdownOpen ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                  </div>
                  {dropdownOpen && (
                    <ul
                      className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-lg z-40 border border-gray-200 animate-fade-in"
                      role="listbox"
                    >
                      <li
                        className="px-4 py-2 cursor-pointer hover:bg-slm-green-50"
                        role="option"
                        onClick={() => {
                          setDropdownOpen(false);
                        }}
                      >
                        <Link to="/services/urban-planning">Urban Planning</Link>
                      </li>
                      <li
                        className="px-4 py-2 cursor-pointer hover:bg-slm-green-50"
                        role="option"
                        onClick={() => {
                          setDropdownOpen(false);
                        }}
                      >
                        <Link to="/services/urban-design">Urban Design</Link>
                      </li>
                      <li
                        className="px-4 py-2 cursor-pointer hover:bg-slm-green-50"
                        role="option"
                        onClick={() => {
                          setDropdownOpen(false);
                        }}
                      >
                        <Link to="/services/landscape-architecture">
                          Landscape Architecture
                        </Link>
                      </li>
                      <li
                        className="px-4 py-2 cursor-pointer hover:bg-slm-green-50"
                        role="option"
                        onClick={() => {
                          setDropdownOpen(false);
                        }}
                      >
                        <Link to="/services/3d-rendering">3D Render</Link>
                      </li>
                    </ul>
                  )}
                </div>
              ) : (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`font-inter font-medium relative transition-colors duration-200 px-1
                    ${
                      location.pathname === item.path
                        ? "text-slm-green-600 after:absolute after:left-0 after:right-0 after:-bottom-1 after:h-1 after:bg-[#712B29] after:rounded-full after:content-[''] after:transition-all after:duration-300"
                        : "text-gray-700 hover:text-slm-green-600 after:absolute after:left-0 after:right-0 after:-bottom-1 after:h-1 after:bg-[#712B29] after:rounded-full after:content-[''] after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300"
                    }`}
                  style={{ display: "inline-block" }}
                >
                  {item.name}
                </Link>
              )
            )}
            <Button
              asChild
              className="bg-slm-green-600 hover:bg-slm-green-700 text-white"
            >
              <Link to="/quote">Get Quote</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) =>
                item.name === "Services" ? (
                  <div
                    key={item.name}
                    className="relative"
                    tabIndex={0}
                    ref={mobileDropdownRef}
                  >
                    <button
                      className="font-inter font-medium flex items-center gap-1 transition-colors duration-200 text-gray-700 hover:text-slm-green-600 w-full text-left px-0"
                      onClick={() => setServicesDropdownOpen((v) => !v)}
                      aria-haspopup="listbox"
                      aria-expanded={servicesDropdownOpen}
                      type="button"
                    >
                      Services
                      <svg
                        className={`w-4 h-4 transition-transform duration-200 ${
                          servicesDropdownOpen ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    {/* Only show dropdown if servicesDropdownOpen is true */}
                    {servicesDropdownOpen && (
                      <ul
                        className="mt-2 w-full bg-white rounded-lg shadow-lg z-40 border border-gray-200"
                        role="listbox"
                      >
                        <li
                          className="px-4 py-2 cursor-pointer hover:bg-slm-green-50"
                          role="option"
                          onClick={() => {
                            setIsOpen(false);
                            setServicesDropdownOpen(false);
                          }}
                        >
                          <Link to="/services/urban-planning">Urban Planning</Link>
                        </li>
                        <li
                          className="px-4 py-2 cursor-pointer hover:bg-slm-green-50"
                          role="option"
                          onClick={() => {
                            setIsOpen(false);
                            setServicesDropdownOpen(false);
                          }}
                        >
                          <Link to="/services/urban-design">Urban Design</Link>
                        </li>
                        <li
                          className="px-4 py-2 cursor-pointer hover:bg-slm-green-50"
                          role="option"
                          onClick={() => {
                            setIsOpen(false);
                            setServicesDropdownOpen(false);
                          }}
                        >
                          <Link to="/services/landscape-architecture">
                            Landscape Architecture
                          </Link>
                        </li>
                        <li
                          className="px-4 py-2 cursor-pointer hover:bg-slm-green-50"
                          role="option"
                          onClick={() => {
                            setIsOpen(false);
                            setServicesDropdownOpen(false);
                          }}
                        >
                          <Link to="/services/3d-rendering">3D Render</Link>
                        </li>
                      </ul>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => {
                      setIsOpen(false);
                      setServicesDropdownOpen(false);
                    }}
                    className={`font-inter font-medium transition-colors duration-200 ${
                      location.pathname === item.path
                        ? "text-slm-green-600"
                        : "text-gray-700 hover:text-slm-green-600"
                    }`}
                  >
                    {item.name}
                  </Link>
                )
              )}
              <Button
                asChild
                className="bg-slm-green-600 hover:bg-slm-green-700 text-white w-full"
                onClick={() => {
                  setIsOpen(false);
                  setServicesDropdownOpen(false);
                }}
              >
                <Link to="/quote">Get Quote</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
