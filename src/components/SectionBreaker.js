import Image from "next/image";
import arrow from "@/images/arrowIcon.png";
import sectionBreakerImg from "@/images/sectionBreakerImg.png";

function SectionBreaker() {
  return (
    <div className="my-20 p-5 md:py-10 md:px-48 h-[280.85px] w-screen bg-[#86a4af] flex justify-center items-center">
      <div className="w-full flex justify-between items-center">
        <div className="text-[#fff] font-[500] flex flex-col space-y-5">
          <h2 className="text-[24px]  max-w-[189px] md:max-w-[588px]">
            Have to refer someone to our Services?
          </h2>
          <div className="flex space-x-5 items-center">
            <p className="text-[16px] underline ">
              Fill in a form and we'll do the rest
            </p>
            <Image src={arrow} alt="redirect icon" />
          </div>
        </div>

        <Image
          src={sectionBreakerImg}
          className="-mt-12"
          alt="boy smiling image"
        />
      </div>
    </div>
  );
}
export default SectionBreaker;
