import Image from "next/image";
import bulletImg from "../images/bulletImg.png";

const featuresList = [
  { id: 1, feature: "15+ Years of excellence" },
  { id: 2, feature: "A Multispeciality hospital" },
  { id: 3, feature: "24/7 Hour Medical Service" },
  { id: 4, feature: "A team of professionals" },
];

export function Features() {
  return (
    <div className="mt-5 md:mt-0 flex flex-col space-y-3">
      {featuresList.map((feat) => {
        const { id, feature } = feat;
        return (
          <div key={id} className="flex space-x-5 items-center">
            <Image src={bulletImg} alt="check icon" />
            <p className="text-[16px] md:text-[20px] font-[500]">{feature}</p>
          </div>
        );
      })}
    </div>
  );
}
