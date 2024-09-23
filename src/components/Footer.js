import Link from "next/link";
import ReferSomeoneSection from "./ReferSomeoneSection";
import Image from "next/image";
import fbIcon from "@/images/fb.png";
import linkedinIcon from "@/images/Linkedin Icon.png";
import twitterIcon from "@/images/Twitter Icon.png";

function Footer() {
  return (
    <footer>
      <ReferSomeoneSection />
      <div className="text-[#1f1f1f] p-5 flex flex-col space-y-8 md:space-y-0 md:flex-row md:justify-between">
        <div className="flex flex-col space-y-4">
          <h4 className=" text-[16px] font-[500] md:text-[20px] uppercase">
            Navigation
          </h4>
          <div className="flex flex-col space-y-3">
            <Link href="#" className="text-[14px] md:text-[16px] font-[400]">
              Home
            </Link>
            <Link href="#" className="text-[14px] md:text-[16px] font-[400]">
              Services
            </Link>
            <Link href="#" className="text-[14px] md:text-[16px] font-[400]">
              Referral
            </Link>
            <Link href="#" className="text-[14px] md:text-[16px] font-[400]">
              About Us
            </Link>
            <Link href="#" className="text-[14px] md:text-[16px] font-[400]">
              Contact Us
            </Link>
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          <h4 className=" text-[16px] font-[500] md:text-[20px] uppercase">
            What we do
          </h4>
          <div className="flex flex-col space-y-3">
            <Link href="#" className="text-[14px] md:text-[16px] font-[400]">
              Household Task
            </Link>
            <Link href="#" className="text-[14px] md:text-[16px] font-[400]">
              Assist Travel/Transport
            </Link>
            <Link href="#" className="text-[14px] md:text-[16px] font-[400]">
              Group/Centre Activity
            </Link>
            <Link href="#" className="text-[14px] md:text-[16px] font-[400]">
              Participate Community
            </Link>
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          <h4 className=" text-[16px] font-[500] md:text-[20px] uppercase">
            Legal
          </h4>
          <div className="flex flex-col space-y-3">
            <Link href="#" className="text-[14px] md:text-[16px] font-[400]">
              General Info
            </Link>
            <Link href="#" className="text-[14px] md:text-[16px] font-[400]">
              Privacy Policy
            </Link>
            <Link href="#" className="text-[14px] md:text-[16px] font-[400]">
              Terms of Service
            </Link>
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          <h4 className=" text-[16px] font-[500] md:text-[20px] uppercase">
            Talk to us
          </h4>
          <div className="flex flex-col space-y-3">
            <a href="#" className="text-[14px] md:text-[16px] font-[400]">
              logo.support@logo.com
            </a>
            <a href="#" className="text-[14px] md:text-[16px] font-[400]">
              +66 2399 1145
            </a>
          </div>
        </div>
      </div>

      <div className="border-t-2 border-[#ccc] py-4 flex justify-between items-center">
        <h1 className="uppercase text-[#2e4d70] text-[32px] md:text-[40px] font-[800]">
          Logo
        </h1>
        <p className="hidden md:block text-[#1f1f1f]">
          © 2019 Krezona pvt. ltd. All Rights Reserved.
        </p>
        <div className="flex space-x-5 items-center">
          <div className="w-[39.63px] h-[39px] border-2 border-[#1f1f1f] rounded-full flex justify-center items-center">
            <Image src={fbIcon} alt="fb icon" />
          </div>
          <div className="w-[39.63px] h-[39px] border-2 border-[#1f1f1f] rounded-full flex justify-center items-center">
            <Image src={linkedinIcon} alt="fb icon" />
          </div>
          <div className="w-[39.63px] h-[39px] border-2 border-[#1f1f1f] rounded-full flex justify-center items-center">
            <Image src={twitterIcon} alt="fb icon" />
          </div>
        </div>
      </div>
      <p className="md:hidden text-[#1f1f1f]">
        © 2019 Krezona pvt. ltd. All Rights Reserved.
      </p>
    </footer>
  );
}
export default Footer;
