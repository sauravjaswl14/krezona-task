import serviceIcon1 from "@/images/serviceImg1.png";
import serviceIcon2 from "@/images/serviceImg2.png";
import serviceIcon3 from "@/images/serviceImg3.png";
import serviceIcon4 from "@/images/serviceImg4.png";
import serviceIcon5 from "@/images/serviceImg5.png";
import serviceIcon6 from "@/images/serviceImg6.png";
import Image from "next/image";

const servicesLists = [
  {
    id: 1,
    icon: serviceIcon1,
    title: "Household Task",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 2,
    icon: serviceIcon2,
    title: "Assist-Travel/Transport",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 3,
    icon: serviceIcon3,
    title: "Group/Centre Activity",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 4,
    icon: serviceIcon4,
    title: "Community Participation",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 5,
    icon: serviceIcon5,
    title: "Personal Activities",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 6,
    icon: serviceIcon6,
    title: "Accomodation",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
];

function ServicesLists() {
  return (
    <div className="grid gap-6 grid-cols-2 md:grid-cols-3">
      {servicesLists.map((service) => {
        const { id, icon, title, desc } = service;
        return (
          <div
            key={id}
            className="md:w-[368px] px-4 py-12 bg-[#f0f0f0] rounded-md"
          >
            <div className="flex flex-col space-y-4 items-center">
              <div className="w-[46px] h-[46px] md:w-[84px] md:h-[84px] bg-[#2e4d70] rounded-full flex justify-center items-center">
                <Image src={icon} width={30} height={30} alt={title} />
              </div>

              <h4 className="text-base md:text-[24px] text-center text-[#1f1f1f] font-[500]">
                {title}
              </h4>
              <p className="text-[14px] md:text-[17px] text-center text-[#292929]">
                {desc}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default ServicesLists;
