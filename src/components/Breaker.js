import Image from "next/image";
import sectionBreakerImg from "../images/section-breaker-img.png";
import { Features } from "./Frames";
import Services from "./Services";

function Breaker() {
  return (
    <section className="relative">
      <div className="hidden mt-[564px] rotate-[28deg] -ml-[440px] md:block md:w-[2179.69px] md:h-[642.99px] bg-[#e5e5e5]  "></div>

      <div className="-mt-5 pl-5 md:pl-44 absolute top-0">
        <div className="mt-12 text-[#000] flex flex-col space-y-5 md:mt-0  md:flex-row md:space-x-10 md:items-center">
          <div className="flex flex-col space-y-5">
            <h2 className=" capitalize text-[24px] font-[600] md:text-[28px]">
              empowering independence, <br />
              together
            </h2>
            <p className="max-w-[390px] md:max-w-[407px]">
              Impact care seeks to provide good quality services for people with
              disabilities,
            </p>
          </div>
          <Image src={sectionBreakerImg} />
          <p className="max-w-[390px] md:max-w-xs">
            Impact care seeks to provide good quality services for people with
            disabilities, ensuring that their individual
          </p>
        </div>
        {/* frames */}
        <Features />
        <Services />
      </div>
    </section>
  );
}
export default Breaker;
