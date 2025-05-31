import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Gallery from "@/pages/Gallery";
import Contact from "@/pages/Contact";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";

// Electricity Background Component
const ElectricityBackground = () => {
  const [glowPositions, setGlowPositions] = useState<{ x: number, y: number }[]>([]);
  
  useEffect(() => {
    // Create random glow positions
    const positions = Array.from({ length: 8 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100
    }));
    
    setGlowPositions(positions);
    
    // Update positions periodically
    const interval = setInterval(() => {
      setGlowPositions(prev => 
        prev.map(pos => ({
          x: Math.max(0, Math.min(100, pos.x + (Math.random() - 0.5) * 10)),
          y: Math.max(0, Math.min(100, pos.y + (Math.random() - 0.5) * 10))
        }))
      );
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="electricity-bg">
      <div className="electricity-line"></div>
      <div className="electricity-line"></div>
      <div className="electricity-line"></div>
      <div className="electricity-line"></div>
      <div className="electricity-line"></div>
      <div className="electricity-line"></div>
      
      {glowPositions.map((pos, index) => (
        <div 
          key={index}
          className="electricity-glow"
          style={{
            left: `${pos.x}%`,
            top: `${pos.y}%`,
            animationDelay: `${index * 0.3}s`
          }}
        ></div>
      ))}
    </div>
  );
};

function Router() {
  return (
    <div className="min-h-screen flex flex-col">
      <ElectricityBackground />
      <Header />
      <main className="flex-grow">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
