import serviceHeaderImg from "@/images/services-head.png";
import Image from "next/image";
import ServicesLists from "./ServicesLists";
import Appointment from "./Appointment";
import Testimonial from "./Testimonial";
import Blogs from "./Blogs";
import SectionBreaker from "./SectionBreaker";
import Footer from "./Footer";

function Services() {
  return (
    <>
      <section className="mt-[740px] md:-mt-40 flex z-50 flex-col justify-center items-center">
        <div className=" flex flex-col space-y-10 items-center">
          <div className="flex flex-col space-y-5 items-center">
            <div className="flex space-x-2 items-center">
              <Image src={serviceHeaderImg} alt="services image" />
              <h4 className="uppercase text-[#2e4d70] font-[600] text-[12px] md:text-[18px]">
                Our Services
              </h4>
            </div>
            <h2 className="font-[600] text-[24px] leading-tight text-center md:text-[47px] max-w-[256px] md:max-w-[507px]">
              Find out more about our services
            </h2>
          </div>
          <ServicesLists />
          <button className="bg-[#3d3d4e] py-3 px-5 w-[159px] flex justify-center items-center text-white rounded-md">
            View all
          </button>
        </div>
      </section>
      {/* <Testimonial />
      <Appointment />
      <Blogs />
      <SectionBreaker />
      <Footer /> */}
    </>
  );
}
export default Services;
