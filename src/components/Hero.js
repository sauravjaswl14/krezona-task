import Image from "next/image";
import img1 from "../images/hero-img1.png";
import img2 from "../images/hero-img2.png";
import img3 from "../images/hero-img3.png";
import bgImg from "../images/hero-bg-img.png";

function Hero() {
  return (
    <section className="md:m-24 md:mt-40">
      <header className="relative flex flex-col space-y-10 md:mt-10 md:flex-row md:pl-40 md:space-x-20">
        <div className="pl-5 flex flex-col space-y-5 md:space-y-8">
          <h1 className="text-[24px] font-[600] text-[#000] font-poppins md:text-[51px] md:max-w-[407px] md:leading-tight">
            Your Partner at Disability
          </h1>

          <p className="max-w-[390px] md:max-w-[529px]">
            Impact care seeks to provide good quality services for people with
            disabilities, ensuring that their individual requirements are met.
          </p>

          <button className="py-3 w-[235px] md:w-[265px] bg-[#3d3d4e] text-white rounded-xl">
            Book an Appointment
          </button>
        </div>

        <div className="absolute -top-52 left-32 hidden md:block">
          <Image src={bgImg} />
        </div>

        <div className="w-full flex justify-center md:hidden">
          <div className="relative w-[320px] h-[320px] flex justify-center items-center bg-[#3970af] rounded-full">
            <div className="w-[60%] h-[60%] bg-[#fcc97a] rounded-full"></div>
            <div className="absolute top-0 left-0">
              <div className="flex flex-col">
                {/*  */}
                <div className="relative">
                  <Image src={img1} className="" />
                  <div className="absolute -bottom-6 right-[42%] w-[47.34px] h-[47.34px] rounded-full bg-[#fff] flex justify-center items-center">
                    <div className="w-[29.9px] h-[28.9px] rounded-full bg-[#0caf7f]"></div>
                  </div>
                </div>
                {/*  */}
                <div className="flex">
                  <Image src={img2} />
                  <Image src={img3} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* larger screens */}
        <div className="hidden relative md:block">
          <Image src={img1} className="" />
          <div className="absolute bottom-16 -right-6 w-[47.34px] h-[47.34px] rounded-full bg-[#fff] flex justify-center items-center">
            <div className="w-[29.9px] h-[28.9px] rounded-full bg-[#0caf7f]"></div>
          </div>
        </div>
      </header>
    </section>
  );
}
export default Hero;
