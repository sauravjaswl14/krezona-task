import Image from "next/image";
import blogIcon from "@/images/services-head.png";
import BlogsSection from "./BlogsSection";

function Blogs() {
  return (
    <section className="flex flex-col space-y-5 items-center">
      <div className="flex space-x-4 items-center">
        <Image src={blogIcon} alt="icon" />
        <h2 className="uppercase font-[600] text-[#2e4d70] text-[12px] md:text-[18px]">
          Our Blogs
        </h2>
      </div>

      <h3 className="capitalize font-[600] text-[24px] md:text-[40px]">
        Latest blogs & articles
      </h3>

      <BlogsSection />

      <button className="hidden py-3 w-[128px] md:w-[201px] bg-[#3d3d4e] md:flex justify-center items-center rounded-md text-[#fff] md:text-[18px]">
        View all
      </button>
    </section>
  );
}
export default Blogs;
