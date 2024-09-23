// import Appointment from "@/components/Appointment";
import Appointment from "@/components/Appointment";
import Blogs from "@/components/Blogs";
import Breaker from "@/components/Breaker";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import SectionBreaker from "@/components/SectionBreaker";
import Services from "@/components/Services";
import Testimonial from "@/components/Testimonial";
import Image from "next/image";

export default function Home() {
  return (
    <section className="relative">
      <Navbar />
      <Hero />
      <Breaker />
      <Services />
      <Testimonial />
      <Appointment />
      <Blogs />
      <SectionBreaker />
      <Footer />
    </section>
  );
}
