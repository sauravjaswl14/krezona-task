import Image from "next/image";
import blogImg from "@/images/blogImg.png";
import arrowImg from "@/images/arrow.png";

const blogsData = [
  {
    img: blogImg,
    title: "Adaptive Sports: Breaking Barriers in Physical Fitness",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    img: blogImg,
    title: "Adaptive Sports: Breaking Barriers in Physical Fitness",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    img: blogImg,
    title: "Adaptive Sports: Breaking Barriers in Physical Fitness",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
];

function BlogsSection() {
  return (
    <article>
      <div className="flex space-x-5 items-center">
        {blogsData.map((blog) => {
          const { img, title, desc } = blog;
          return (
            <div className="flex flex-col md:w-[371px]">
              <Image src={img} alt="blog image" />
              <div className="p-5 bg-[#f2f1f1] flex flex-col space-y-4">
                <h2 className="max-w-[146px] text-[18px] font-[500] md:text-[20px] md:max-w-[317px]">
                  {title}
                </h2>
                <p className="text-[14px] md:text-[17px]">{desc}</p>
                <button className="border-none flex space-x-4 items-center">
                  <p>View Detail</p>
                  <Image src={arrowImg} alt="arrow icon" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </article>
  );
}
export default BlogsSection;
