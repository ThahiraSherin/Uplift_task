import Navbar from "../components/Navbar";
import FloatingWhatsapp from "../components/FloatingWhatsapp";
import HomeSection from "../components/HomeSection";
import DoctorsSection from "../components/DoctorsSection";
import TreatmentsSection from "../components/TreatmentSection";
import HowItWorks from "../components/HowItWorks";
import DeliverySection from "../components/DeliverySection";
import ConsultationSection from "../components/ConsultationSection";
import ClinicalSuccess from "../components/ClinicalSuccess";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import StatsSection from "../components/StatsSection";

const Home = () => {
  return (
    <>
      <Navbar />
      <FloatingWhatsapp />
      <section id="home"><HomeSection /></section>
      <StatsSection />
      <section id="about"><DoctorsSection /></section>
      <section id="treatments"><TreatmentsSection /></section>
      <HowItWorks />
      <DeliverySection />
      <ConsultationSection />
      <ClinicalSuccess />
      <Testimonials />
      <section id="contact"><Footer /></section>
    </>
  );
};

export default Home;