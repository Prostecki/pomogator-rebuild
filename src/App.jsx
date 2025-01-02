import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PresentSection from "./components/PresentSection";
import ServicesSection from "./components/ServicesSection";
import Separator from "./components/Separator";
import { useState, useEffect, useRef } from "react";

function App() {
  const [isSticky, setIsSticky] = useState(false);
  const servicesRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSticky(entry.isIntersecting);
      },
      {
        threshold: 0.2,
      }
    );

    const section = servicesRef.current;
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);
  return (
    <div className="app">
      <Header isSticky={isSticky} />
      <main>
        <PresentSection />
        <Separator />
        <ServicesSection ref={servicesRef} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
