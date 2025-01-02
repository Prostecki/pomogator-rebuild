import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PresentSection from "./components/PresentSection";
import ServicesSection from "./components/ServicesSection";
import Separator from "./components/Separator";

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <PresentSection />
        <Separator />
        <ServicesSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
