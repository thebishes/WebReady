import { Link } from "wouter";
import {
  LayoutDashboard,
  Server,
  DollarSign,
  Headset,
  Zap,
  ShieldCheck,
  PoundSterlingIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import FeatureCard from "@/components/FeatureCard";
import PricingCard from "@/components/PricingCard";
import ProcessStep from "@/components/ProcessStep";
import TestimonialCard from "@/components/TestimonialCard";

const Home = () => {
  const features = [
    {
      icon: LayoutDashboard,
      title: "Custom Designs",
      description:
        "Unique websites tailored to your brand identity and business goals with modern, responsive layouts.",
      colorClass: "bg-primary/10",
    },
    {
      icon: Server,
      title: "Reliable Hosting",
      description:
        "Fast, secure hosting with 99.9% uptime guarantee ensures your website is always available to your customers.",
      colorClass: "bg-secondary/10",
    },
    {
      icon: PoundSterlingIcon,
      title: "Fixed Yearly Fees",
      description:
        "Transparent pricing with no hidden costs. Pay once per year and forget about unexpected charges.",
      colorClass: "bg-accent/10",
    },

    {
      icon: Zap,
      title: "Optimized Performance",
      description:
        "Fast-loading websites optimized for both desktop and mobile devices, with built-in SEO features.",
      colorClass: "bg-secondary/10",
    },
    {
      icon: ShieldCheck,
      title: "Security Included",
      description:
        "SSL certificates, regular backups, and security monitoring to keep your website safe and secure.",
      colorClass: "bg-accent/10",
    },
  ];

  const pricingPlans = [
    {
      name: "Starter",
      description: "Perfect for small businesses ready to shine online",
      price: "£449",
      features: [
        { name: "3-page responsive website creation", included: true },
        { name: "Fast hosting", included: true },
        { name: "Internet domain name purchase  UK", included: true },
        { name: "SSL security certificate", included: true },
        { name: "Basic search engine optimisation", included: true },
        { name: "Page edits charged at £20 per page", included: true },
        {
          name: "Subsequent years £399, includes £10 domain fee",
          included: true,
        },
      ],
    },

    {
      name: "Starter plus",
      description: "Perfect for small businesses, one year, one price",
      price: "£549",
      features: [
        { name: "3-page responsive website creation", included: true },
        { name: "Fast  hosting", included: true },
        { name: "Internet domain name purchase UK", included: true },
        { name: "SSL security certificate", included: true },
        { name: "Basic search engine optimisation", included: true },
        { name: "2 page edits per month or image additions", included: true },
        {
          name: "Subsequent year £499, includes £10 domain fee",
          included: true,
        },
      ],
    },

    {
      name: "PowerPro",
      description: "Supercharge your business presence with 2x the content",
      price: "£449",
      features: [
        { name: "6-page responsive website", included: true },
        { name: "Turbo-charged hosting", included: true },
        { name: "Internet domain purchase", included: true },
        { name: "SSL security certificate", included: true },
        { name: "Advanced search engine optimisation", included: true },
        { name: "5 page edits per month or image additions", included: true },
        {
          name: "Subsequent year £359, includes £10 domain fee",
          included: true,
        },
      ],
      popular: false,
    },
  ];

  const processSteps = [
    {
      number: 1,
      title: "Discovery",
      description:
        "We learn about your business goals, target audience, and website requirements.",
    },
    {
      number: 2,
      title: "Design",
      description:
        "Our designers create a custom layout that reflects your brand identity.",
    },
    {
      number: 3,
      title: "Development",
      description:
        "We build your website with clean code and responsive functionality.",
    },
    {
      number: 4,
      title: "Launch",
      description:
        "Your website goes live with ongoing support and maintenance.",
    },
  ];

  const testimonials = [
    {
      quote:
        "WebReady.Store transformed our online presence. The fixed yearly fee means no surprises, and the website they built perfectly represents our brand.",
      author: "Sarah Johnson",
      role: "Founder, Urban Threads",
    },
    {
      quote:
        "The team at WebReady.Store made the website creation process so easy. They handled everything from design to hosting, and we've seen a 40% increase in inquiries.",
      author: "Michael Rodriguez",
      role: "CEO, Mountain View Consulting",
    },
    {
      quote:
        "As a small business owner, I needed a professional website without the technical headaches. WebReady.Store delivered exactly what I needed at a price I could afford.",
      author: "Jennifer Chen",
      role: "Owner, Seaside Restaurant",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section
        id="home"
        className="pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Decorative elements */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-20 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"></div>

          <div className="flex flex-col lg:flex-row items-center gap-12 relative">
            <div className="w-full lg:w-1/2 space-y-6">
              <div className="inline-block px-4 py-1 bg-primary/10 rounded-full text-primary font-medium text-sm mb-2 animate-pulse">
                🚀 Launch your dream website today!
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins leading-tight">
                Build Your{" "}
                <span className="text-primary relative">
                  Perfect Website
                  <span className="absolute -bottom-2 left-0 w-full h-2 bg-accent/30 -rotate-1"></span>
                </span>{" "}
                with Fixed Yearly Fees
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl">
                WebReady.Store provides professional website building and
                hosting services with transparent pricing and no hidden costs.
                Get your business online with our all-inclusive packages.
              </p>
              <div className="pt-6 flex flex-wrap gap-4">
                <Link href="#services">
                  <Button
                    size="lg"
                    className="shadow-lg shadow-primary/30 relative overflow-hidden group"
                  >
                    <span className="relative z-10">See Our Packages</span>
                    <span className="absolute inset-0 bg-primary group-hover:bg-primary/90 transition-colors duration-300"></span>
                    <span className="absolute bottom-0 left-0 w-full h-1 bg-accent"></span>
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-gray-300 hover:border-primary text-dark hover:text-primary hover:bg-primary/5 transition-all duration-300"
                  >
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
            <div className="w-full lg:w-1/2 relative">
              <div className="absolute -top-4 -left-4 right-4 bottom-4 bg-accent/10 rounded-2xl transform rotate-3"></div>
              <img
                src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Website building workspace"
                className="w-full h-auto rounded-2xl shadow-xl relative z-10 transform transition-transform duration-500 hover:-rotate-2"
                loading="eager"
              />
              <div className="absolute top-4 -right-4 p-3 bg-white/90 backdrop-blur-sm shadow-lg rounded-lg z-20 transform rotate-3 hidden md:block">
                <div className="text-sm font-medium">✨ Stunning designs</div>
              </div>
              <div className="absolute -bottom-2 left-10 p-3 bg-white/90 backdrop-blur-sm shadow-lg rounded-lg z-20 transform -rotate-2 hidden md:block">
                <div className="text-sm font-medium">💯 Fixed yearly rates</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-[rgba(249,250,251,0.5)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">
              Why Choose WebReady.Store?
            </h2>
            <p className="text-lg text-gray-600">
              We combine beautiful design with powerful functionality to create
              websites that work for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                colorClass={feature.colorClass}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Services/Pricing Section */}
      <section id="services" className="py-16 bg-[rgba(249,250,251,0.5)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">
              Our Website Packages
            </h2>
            <p className="text-lg text-gray-600">
              Choose the package that fits your business needs with our
              transparent, fixed yearly pricing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <PricingCard
                key={index}
                name={plan.name}
                description={plan.description}
                price={plan.price}
                features={plan.features}
                popular={plan.popular}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-primary text-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent opacity-5"></div>
        <div className="absolute -bottom-10 -right-10 w-80 h-80 bg-white/5 rounded-full blur-xl"></div>
        <div className="absolute top-40 -left-10 w-60 h-60 bg-secondary/20 rounded-full blur-xl"></div>

        {/* Zig-zag pattern */}
        <div className="absolute left-0 top-0 w-full h-5 z-10">
          <svg
            viewBox="0 0 1440 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path
              d="M0 48H1440V0C1440 0 1320 20 1200 20C1080 20 1020 0 900 0C780 0 720 20 600 20C480 20 420 0 300 0C180 0 120 20 0 20V48Z"
              fill="white"
            />
          </svg>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="px-4 py-1 bg-white/10 rounded-full text-white text-sm font-medium mb-4 inline-block backdrop-blur-sm">
              THE MAGIC PROCESS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4 relative inline-block">
              How We Build Your Website
              <span className="absolute -bottom-2 left-0 w-full h-2 bg-accent/40 -rotate-1"></span>
            </h2>
            <p className="text-lg opacity-90 mt-6">
              Our streamlined process ensures your website is up and running
              quickly with minimal effort on your part.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Connection line */}
            <div className="absolute top-14 left-0 w-full h-1 bg-white/20 hidden lg:block"></div>

            {processSteps.map((step, index) => (
              <ProcessStep
                key={index}
                number={step.number}
                title={step.title}
                description={step.description}
              />
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link href="/contact">
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-primary hover:bg-gray-100 hover:scale-105 shadow-xl px-8 py-7 transition-transform duration-300 relative group overflow-hidden"
              >
                <span className="relative z-10">Start Your Project Today</span>
                <span className="absolute bottom-0 left-0 w-full h-1 bg-accent"></span>
                <span className="absolute -right-12 -top-12 w-16 h-16 bg-accent/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500"></span>
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-[rgba(249,250,251,0.5)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-600">
              Hear from businesses who have transformed their online presence
              with our services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                quote={testimonial.quote}
                author={testimonial.author}
                role={testimonial.role}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">
              Ready to Build Your Perfect Website?
            </h2>
            <p className="text-xl opacity-90 mb-8">
              Get started today with our transparent, fixed-fee website
              packages.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-white text-primary hover:bg-gray-100 shadow-xl px-8 py-7"
                >
                  Contact Us Today
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-7"
                onClick={() =>
                  document
                    .getElementById("services")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                View Our Packages
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
