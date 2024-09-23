import Image from "next/image";
import Link from "next/link";

import hamburger from "../images/hamburger.svg";

function Navbar() {
  return (
    <nav className="bg-white z-50  md:fixed top-0 w-full md:h-[99px] md:py-5 xl:px-10 flex justify-center items-center md:border-b-2 md:border-[#ebebeb]">
      <div className="hidden w-full md:flex justify-around items-center">
        <h2 className="w-[122px] text-[40px] uppercase font-extrabold text-[#3d3d4e]">
          Logo
        </h2>
        <nav>
          <ul className="text-[18px] text-[#3d3d4e] flex space-x-10 items-center">
            <li className="font-[600]">
              <Link href="/">Home</Link>
            </li>
            <li className="">
              <Link href="#">Services</Link>
            </li>
            <li className="">
              <Link href="#">Referral</Link>
            </li>
            <li className="">
              <Link href="#">About us</Link>
            </li>
            <li>
              <button className="w-[265px] h-[56px] text-[#fff] text-[18px] bg-[#3d3d4e] rounded-xl flex justify-center items-center">
                Book an Appointment
              </button>
            </li>
          </ul>
        </nav>
      </div>

      <aside className="pr-5 w-full flex justify-end md:hidden">
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M6.125 7.875C6.125 7.64294 6.21719 7.42038 6.38128 7.25628C6.54538 7.09219 6.76794 7 7 7H21C21.2321 7 21.4546 7.09219 21.6187 7.25628C21.7828 7.42038 21.875 7.64294 21.875 7.875C21.875 8.10706 21.7828 8.32962 21.6187 8.49372C21.4546 8.65781 21.2321 8.75 21 8.75H7C6.76794 8.75 6.54538 8.65781 6.38128 8.49372C6.21719 8.32962 6.125 8.10706 6.125 7.875ZM6.125 14C6.125 13.7679 6.21719 13.5454 6.38128 13.3813C6.54538 13.2172 6.76794 13.125 7 13.125H21C21.2321 13.125 21.4546 13.2172 21.6187 13.3813C21.7828 13.5454 21.875 13.7679 21.875 14C21.875 14.2321 21.7828 14.4546 21.6187 14.6187C21.4546 14.7828 21.2321 14.875 21 14.875H7C6.76794 14.875 6.54538 14.7828 6.38128 14.6187C6.21719 14.4546 6.125 14.2321 6.125 14ZM6.125 20.125C6.125 19.8929 6.21719 19.6704 6.38128 19.5063C6.54538 19.3422 6.76794 19.25 7 19.25H21C21.2321 19.25 21.4546 19.3422 21.6187 19.5063C21.7828 19.6704 21.875 19.8929 21.875 20.125C21.875 20.3571 21.7828 20.5796 21.6187 20.7437C21.4546 20.9078 21.2321 21 21 21H7C6.76794 21 6.54538 20.9078 6.38128 20.7437C6.21719 20.5796 6.125 20.3571 6.125 20.125Z"
            fill="black"
          />
        </svg>
      </aside>
    </nav>
  );
}
export default Navbar;
