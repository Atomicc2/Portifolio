import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Services from "./sections/Services";
import Testimonials from "./sections/Testimonials";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Projects />
        <Skills />
        <Testimonials />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
