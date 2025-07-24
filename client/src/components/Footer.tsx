import { Link } from "wouter";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Sparkles,
  Bolt,
  Star,
  ArrowUp,
} from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-primary text-white py-12 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-b from-gray-800 to-transparent opacity-50"></div>
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute top-40 -left-20 w-60 h-60 bg-secondary/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex justify-end mb-6">
          <button
            onClick={scrollToTop}
            className="bg-primary/20 hover:bg-primary/30 p-3 rounded-full transition-colors duration-300 backdrop-blur-sm group"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-5 w-5 group-hover:animate-bounce" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <div className="flex items-center space-x-2">
                <div className="text-white text-2xl font-bold font-poppins flex items-center">
                  <Sparkles className="h-5 w-5 mr-1 text-accent animate-pulse" />
                  Tailored<span className="text-accent">.</span>
                  <span className="text-gray-400">Website</span>
                  <Bolt className="h-5 w-5 ml-1 text-secondary" />
                </div>
              </div>
            </Link>
            <p className="text-gray-400 mb-6 max-w-md">
              We create beautiful, tailored websites and custom web applications with transparent pricing
              and reliable hosting. Get your business online with powerful solutions from
              Tailored.Website.
            </p>{/*
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-primary p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-primary p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-primary p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-primary p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div> */}
          </div>

          <div>
            <h3 className="text-lg font-semibold font-poppins mb-6 flex items-center">
              <Star className="h-4 w-4 mr-2 text-accent" />
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/">
                  <span className="text-gray-400 hover:text-white transition-colors inline-flex items-center group cursor-pointer">
                    <span className="border-b border-transparent group-hover:border-white transition-colors">
                    Home
                    </span>
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/#services">
                  <span className="text-gray-400 hover:text-white transition-colors inline-flex items-center group cursor-pointer">
                    <span className="border-b border-transparent group-hover:border-white transition-colors">
                    Services
                    </span>
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/gallery">
                  <span className="text-gray-400 hover:text-white transition-colors inline-flex items-center group cursor-pointer">
                    <span className="border-b border-transparent group-hover:border-white transition-colors">
                    Gallery
                    </span>
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/webapps">
                  <span className="text-gray-400 hover:text-white transition-colors inline-flex items-center group cursor-pointer">
                    <span className="border-b border-transparent group-hover:border-white transition-colors">
                    Web Apps
                    </span>
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <span className="text-gray-400 hover:text-white transition-colors inline-flex items-center group cursor-pointer">
                    <span className="border-b border-transparent group-hover:border-white transition-colors">
                    Contact
                    </span>
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold font-poppins mb-6 flex items-center">
              <Star className="h-4 w-4 mr-2 text-accent" />
              Services
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/#services">
                  <span className="text-gray-400 hover:text-white transition-colors inline-flex items-center group cursor-pointer">
                    <span className="border-b border-transparent group-hover:border-white transition-colors">
                    Website Design
                    </span>
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/#services">
                  <span className="text-gray-400 hover:text-white transition-colors inline-flex items-center group cursor-pointer">
                    <span className="border-b border-transparent group-hover:border-white transition-colors">
                    Web Hosting
                    </span>
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/#services">
                  <span className="text-gray-400 hover:text-white transition-colors inline-flex items-center group cursor-pointer">
                    <span className="border-b border-transparent group-hover:border-white transition-colors">
                    Web Applications
                    </span>
                  </span>
                </Link>
              </li>
            
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-500">
            © {new Date().getFullYear()} Tailored.Website. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
