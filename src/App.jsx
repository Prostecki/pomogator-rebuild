import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PresentSection from "./components/PresentSection";

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <PresentSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
