import Image from "next/image";
import sectionBreakerImg from "../images/section-breaker-img.png";
import { Features } from "./Frames";
import Services from "./Services";

function Breaker() {
  return (
    <section className="md:mt-64 relative">
      <div className="hidden rotate-[24deg] min-w-[2222px] opacity-30 -ml-[500px] md:block md:w-full md:h-[642.99px] bg-[#e5e5e5]  "></div>

      <div className="-mt-5 pl-5 md:pl-44 absolute top-0">
        <div className="mt-12 text-[#000] flex flex-col space-y-5 md:mt-0  md:flex-row md:space-x-10 md:items-center">
          <div className="flex flex-col space-y-5">
            <h2 className=" capitalize text-[24px] font-[600] md:text-[28px]">
              empowering independence, <br />
              together
            </h2>
            <p className="max-w-[390px] text-[16px] md:text-[20px] md:max-w-[407px]">
              Impact care seeks to provide good quality services for people with
              disabilities,
            </p>
          </div>
          <Image src={sectionBreakerImg} alt="breaker image" />
          <p className="text-[16px] md:text-[20px] max-w-[390px] md:max-w-[407px]">
            Impact care seeks to provide good quality services for people with
            disabilities, ensuring that their individual
          </p>
        </div>
        {/* frames */}
        <Features />
        {/* <Services /> */}
      </div>
    </section>
  );
}
export default Breaker;
