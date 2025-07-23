import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Sparkles, Bolt } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Gallery", path: "/gallery" },
    { name: "Web Apps", path: "/webapps" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => {
    return location === path;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-blur backdrop-blur-lg bg-white/60 transition-all duration-300 ${
        isScrolled ? "shadow-md" : ""
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="text-primary text-2xl font-bold font-poppins flex items-center">
                <Sparkles className="h-5 w-5 mr-1 text-accent animate-pulse" />
                Tailored<span className="text-accent">.</span>
                <span className="text-primary">Website</span>
                <Bolt className="h-5 w-5 ml-1 text-secondary" />
              </div>
            </Link>
          </div>
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link href={link.path}>
                    <span
                      className={`font-medium transition-colors relative group overflow-hidden cursor-pointer ${
                        isActive(link.path)
                          ? "text-primary"
                          : "text-gray-700 hover:text-primary"
                      }`}
                    >
                      {link.name}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMobileMenu}
              className="text-gray-700 hover:text-primary"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/90 backdrop-blur-md shadow-lg absolute w-full">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link key={link.path} href={link.path}>
                <span
                  className={`block py-2 font-medium cursor-pointer ${
                    isActive(link.path)
                      ? "text-primary"
                      : "text-gray-700 hover:text-primary"
                  }`}
                  onClick={closeMobileMenu}
                >
                  {link.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;