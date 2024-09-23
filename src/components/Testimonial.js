import Image from "next/image";
import testimonialVideo from "@/images/testimonial.png";
import testimonialIcon from "@/images/services-head.png";
import playButton from "@/images/Vector.png";
import playBtn from "@/images/playBtn.png";
function Testimonial() {
  return (
    <div className="my-20 w-full bg-[#d9d9d9] p-5 md:py-10 md:px-10 flex justify-center items-center">
      <div className="flex flex-col space-y-5 md:flex-row md:space-x-10 ">
        <div className="flex flex-col space-y-5">
          <div className="flex space-x-3 items-center">
            <Image src={testimonialIcon} alt="testimonial icon" />
            <h3 className="text-[#2e4d70] font-[600] uppercase text-[18px]">
              Testimonial
            </h3>
          </div>
          <h4 className="text-[#000] capitalize text-[24px] leading-tight md:whitespace-nowrap md:text-[40px] md:max-w-[383px] font-[500] font-poppins">
            Our success stories
          </h4>
          <p className="text-base max-w-[390px] md:max-w-[405px] md:text-[20px]">
            Discover the experience and success stories shared by those who care
          </p>
          <button className="hidden w-[159px] py-3 rounded-md md:flex space-x-4 items-center justify-center bg-[#3d3d4e] text-[#fff]">
            <Image src={playBtn} alt="play button" />
            <p>Watch</p>
          </button>
        </div>
        <div className="relative">
          <div className="absolute top-1/2 left-1/2">
            <div className="w-[87px] h-[87px] bg-[#fff] rounded-full flex justify-center items-center">
              <Image src={playButton} alt="play button" />
            </div>
          </div>
          <Image
            src={testimonialVideo}
            className="rounded-md"
            alt="testimonial video"
          />
        </div>
      </div>
    </div>
  );
}
export default Testimonial;
