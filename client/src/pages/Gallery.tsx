import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import GalleryItem from "@/components/GalleryItem";
import { Sparkles } from "lucide-react";

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    // Add a small delay before animation
    const timer = setTimeout(() => {
      setAnimated(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const galleryItems = [
    {
      image:
        "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      title: "Mountain View Consulting",
      description:
        "Business website with clear service offerings and team profiles.",
      category: "business",
      tags: ["Business", "Professional"],
    },
    {
      image:
        "https://images.unsplash.com/photo-1491897554428-130a60dd4757?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      title: "Urban Threads Boutique",
      description: "Fashion store with product showcase.",
      category: "Business",
      tags: ["Fashion"],
    },
    {
      image:
        "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      title: "Alex Chen Photography",
      description:
        "Portfolio site for a professional photographer with image galleries.",
      category: "personal",
      tags: ["Personal", "Portfolio"],
    },
    {
      image:
        "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      title: "Seaside Restaurant",
      description:
        "Restaurant website with menu, reservations, and location information.",
      category: "business",
      tags: ["Business", "Food"],
    },
    {
      image:
        "https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      title: "Modern Home Essentials",
      description: "Home decor and furniture.",
      category: "Business",
      tags: ["Home Goods"],
    },
    {
      image:
        "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      title: "Travel Chronicles",
      description:
        "Travel blog with engaging content, image galleries, and subscriber options.",
      category: "personal",
      tags: ["Personal", "Blog"],
    },
  ];

  const handleFilterChange = (filter: string) => {
    setAnimated(false);
    setActiveFilter(filter);
    // Re-trigger animations when filter changes
    setTimeout(() => setAnimated(true), 100);
  };

  const filteredItems =
    activeFilter === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  return (
    /*<section className="pt-32 pb-20 min-h-screen overflow-hidden relative bg-gradient-to-b from-gray-50 to-white">*/
    <section className="pt-32 pb-20 min-h-screen overflow-hidden relative bg-[rgba(249,250,251,0.6)]">
      {/* Decorative elements */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 -left-20 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-1 bg-primary/10 rounded-full text-primary font-medium text-sm mb-4">
            <Sparkles className="h-4 w-4 mr-2 text-accent" />
            OUR AMAZING IDEAS
          </div>
          <h1 className="text-3xl md:text-4xl font-bold font-poppins mb-4 relative inline-block">
            Some Concept Examples
            <span className="absolute -bottom-2 left-0 w-full h-2 bg-accent/30 -rotate-1"></span>
          </h1>
          <p className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto">
            Take a look at some of our tailored website and web application concepts to help you with your online business presence mindset.
          </p>
        </div>

        {/* Gallery filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <Button
            onClick={() => handleFilterChange("all")}
            variant={activeFilter === "all" ? "default" : "outline"}
            className={`rounded-full px-6 transition-all duration-300 border-2 ${
              activeFilter === "all"
                ? "shadow-lg shadow-primary/20"
                : "border-gray-300 hover:border-primary"
            }`}
          >
            All Projects
          </Button>
          <Button
            onClick={() => handleFilterChange("business")}
            variant={activeFilter === "business" ? "default" : "outline"}
            className={`rounded-full px-6 transition-all duration-300 border-2 ${
              activeFilter === "business"
                ? "shadow-lg shadow-primary/20"
                : "border-gray-300 hover:border-primary"
            }`}
          >
            Business
          </Button>

          <Button
            onClick={() => handleFilterChange("personal")}
            variant={activeFilter === "personal" ? "default" : "outline"}
            className={`rounded-full px-6 transition-all duration-300 border-2 ${
              activeFilter === "personal"
                ? "shadow-lg shadow-primary/20"
                : "border-gray-300 hover:border-primary"
            }`}
          >
            Personal
          </Button>
        </div>

        {/* Gallery grid with animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={index}
              className={`transition-all duration-500 transform ${
                animated
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <GalleryItem
                image={item.image}
                title={item.title}
                description={item.description}
                category={item.category}
                tags={item.tags}
              />
            </div>
          ))}
        </div>

        {/* Contact us Section */}
        <div className="mt-20 text-center bg-primary/5 rounded-2xl p-10 border border-primary/10 relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-secondary/10 rounded-full blur-2xl"></div>

          <h3 className="text-2xl font-bold font-poppins mb-4">
            Ready to get your own tailored website or web application?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Contact us today to discuss your project and let us build a tailored website
            or custom web application that perfectly represents your brand and meets your business needs.
          </p>
          <Button
            className="px-8 py-6 rounded-xl shadow-lg shadow-primary/20 hover:scale-105 transition-transform duration-300"
            onClick={() => (window.location.href = "/contact")}
          >
            Start Your Project
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
