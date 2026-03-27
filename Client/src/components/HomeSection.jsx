import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";

const HomeSection = () => {
  return (
    <>
      <section id="home" className="scroll-mt-24">
        <Hero />
        <AboutSection />
      </section>

    </>
  );
};

export default HomeSection;