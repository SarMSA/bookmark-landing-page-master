import Contact from "./components/Contact";
import Download from "./components/Download";
import Faq from "./components/Faq";
import Features from "./components/Features";
import Hero from "./components/Hero";
import Footer from "./components/layouts/Footer";
import Navbar from "./components/layouts/Navbar";

function App() {
  return (
    <div role="document">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-white focus:px-4 focus:py-2 focus:rounded focus:font-bold"
      >
        Skip to main content
      </a>
      <div className="overflow-hidden relative text-center md:text-left">
        <header role="banner">
          <Navbar />
        </header>
        <main id="main-content" tabIndex="-1" role="main">
          <Hero />
          <Features />
          <Download />
          <Faq />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
