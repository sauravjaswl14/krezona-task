import Image from "next/image";
import blogImg from "@/images/blogImg.png";
import arrowImg from "@/images/arrow.png";

const blogsData = [
  {
    id: 1,
    img: blogImg,
    title: "Adaptive Sports: Breaking Barriers in Physical Fitness",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 2,
    img: blogImg,
    title: "Adaptive Sports: Breaking Barriers in Physical Fitness",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 3,
    img: blogImg,
    title: "Adaptive Sports: Breaking Barriers in Physical Fitness",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
];

function BlogsSection() {
  return (
    <article>
      <div className="p-5 md:p-0 flex space-x-5 items-center">
        {blogsData.map((blog) => {
          const { id, img, title, desc } = blog;
          return (
            <div key={id} className="flex flex-col md:w-[371px]">
              <Image src={img} alt="blog image" />
              <div className="p-2 md:p-5 bg-[#f2f1f1] flex flex-col space-y-4">
                <h2 className="max-w-[146px] text-[18px] font-[500] md:text-[20px] md:max-w-[317px]">
                  {title}
                </h2>
                <p className="text-[14px] md:text-[17px]">{desc}</p>
                <button className="border-none flex space-x-4 items-center">
                  <p className="text-[14px] md:text-[18px]">View Detail</p>
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
