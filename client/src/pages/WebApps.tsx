import { useState, useEffect } from "react";
import { Sparkles, Code, Database, Zap, Shield, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import media1s from './media1s.png';


const WebApps = () => {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimated(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const webAppShowcase = [
    {
      image: "src/public/media1s.png",
      title: "Custome Web Application",
      description: "Powerful, intuitive dashboards that give you complete control over your business data and operations.",
      features: ["Real-time Analytics", "Custom Reporting", "User Management"]
    },
    {
      image: "/media2s.png",
      title: "Business Management Systems",
      description: "Streamlined applications designed to optimize your workflow and boost productivity across all departments.",
      features: ["Process Automation", "Team Collaboration", "Performance Tracking"]
    },
    {
      image: "/media3s.png",
      title: "Data Visualization Platforms",
      description: "Transform complex data into clear, actionable insights with our bespoke visualization applications.",
      features: ["Interactive Charts", "Custom Metrics", "Export Capabilities"]
    },
    {
      image: "/media4s.png",
      title: "Client Portal Systems",
      description: "Secure, user-friendly portals that enhance client relationships and streamline communication.",
      features: ["Secure Access", "Document Sharing", "Communication Tools"]
    },
    {
      image: "/media5s.png",
      title: "E-commerce Solutions",
      description: "Comprehensive online selling platforms tailored to your unique business model and customer needs.",
      features: ["Payment Integration", "Inventory Management", "Customer Analytics"]
    }
  ];

  const benefits = [
    {
      icon: Code,
      title: "Bespoke Development",
      description: "Every line of code is written specifically for your business requirements and goals."
    },
    {
      icon: Database,
      title: "Scalable Architecture",
      description: "Built to grow with your business, handling increased users and data seamlessly."
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level security protocols protect your sensitive business data and user information."
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized performance ensures your applications run smoothly under any load."
    }
  ];

  return (
    <section className="pt-32 pb-20 min-h-screen overflow-hidden relative bg-[rgba(249,250,251,0.6)]">
      {/* Decorative elements */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 -left-20 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center px-4 py-1 bg-primary/10 rounded-full text-primary font-medium text-sm mb-4">
            <Sparkles className="h-4 w-4 mr-2 text-accent" />
            BESPOKE WEB APPLICATION DEVELOPMENT
          </div>
          <h1 className="text-3xl md:text-5xl font-bold font-poppins mb-6 relative inline-block">
            Custom Web Applications
            <span className="absolute -bottom-2 left-0 w-full h-2 bg-accent/30 -rotate-1"></span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            At Tailored.Website, we craft exceptional web applications that are perfectly fitted to your business needs. 
            Our bespoke solutions combine cutting-edge technology with intuitive design to deliver applications that 
            not only meet your requirements but exceed your expectations.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="shadow-lg shadow-primary/30 px-8 py-6">
                Start Your Project
              </Button>
            </Link>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-6"
              onClick={() => document.getElementById('showcase')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Our Work
            </Button>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold font-poppins text-center mb-12">
            Why Choose Our Web Applications?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className={`text-center transition-all duration-500 transform ${
                  animated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4 transform transition-transform hover:rotate-6">
                  <benefit.icon className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-lg font-semibold font-poppins mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Showcase Section */}
        <div id="showcase" className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">
              Our Web Application Portfolio
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover the power of bespoke web applications. Each solution is meticulously crafted 
              to fit your unique business requirements and deliver exceptional user experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {webAppShowcase.map((app, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 group border border-gray-100 hover:border-accent/20 ${
                  animated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={app.image}
                    alt={app.title}
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                    onError={(e) => {
                      console.log('Image failed to load:', app.image);
                      e.currentTarget.style.display = 'none';
                    }}
                    onLoad={() => console.log('Image loaded successfully:', app.image)}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-semibold font-poppins mb-3 relative inline-block">
                    {app.title}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{app.description}</p>
                  
                  <div className="space-y-2">
                    <h4 className="font-medium text-primary mb-3">Key Features:</h4>
                    <div className="flex flex-wrap gap-2">
                      {app.features.map((feature, featureIndex) => (
                        <span
                          key={featureIndex}
                          className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-primary/5 rounded-2xl p-12 border border-primary/10 relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/10 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-secondary/10 rounded-full blur-2xl"></div>
          
          <div className="relative z-10">
            <Users className="h-16 w-16 text-accent mx-auto mb-6" />
            <h3 className="text-3xl font-bold font-poppins mb-4">
              Ready for Your Bespoke Web Application?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's discuss your unique requirements and create a web application that perfectly fits your business. 
              Our expert team is ready to bring your vision to life with cutting-edge technology and exceptional design.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <Button size="lg" className="px-8 py-6 shadow-lg shadow-primary/20">
                  Get Started Today
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebApps;