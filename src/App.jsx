import Contact from "./components/Contact";
import Download from "./components/Download";
import Faq from "./components/Faq";
import Features from "./components/Features";
import Hero from "./components/Hero";
import Footer from "./components/layouts/Footer";
import Navbar from "./components/layouts/Navbar";

function App() {
  return (
    <>
      <div className="overflow-hidden relative text-center md:text-left">
        <Navbar />
        <Hero />
        <Features />
        <Download />
        <Faq />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
