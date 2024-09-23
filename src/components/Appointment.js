import Image from "next/image";
import BookAppointment from "./BookAppointment";
import appointmentImg from "@/images/appointment.png";
import appointmentIcon from "@/images/services-head.png";

function Appointment() {
  return (
    <div>
      <section className="p-5 my-20 flex flex-col space-y-5 items-center md:space-y-0 md:flex-row md:space-x-20 md:items-center md:justify-center">
        <div className="flex flex-col space-y-8">
          <div className="flex flex-col space-y-5">
            <div className="flex space-x-4 items-center">
              <Image src={appointmentIcon} alt="icon" />
              <h2 className="uppercase font-[600] text-[#2e4d70] text-[12px] md:text-[18px]">
                Appointment
              </h2>
            </div>
            <h4 className="capitalize font-[600] text-[24px] md:text-[40px] md:font-[600]">
              Wanna book an appointment
            </h4>
            <p className=" text-[16px] max-w-[390px] md:text-[20px] md:max-w-[590px]">
              At Impact Disability Support Service, we're here to help you every
              step of the way. Making an appointment is simple and easy.
            </p>
          </div>

          <BookAppointment />
        </div>

        <div className="hidden md:flex justify-center w-[440px] h-[580px] bg-[#d2e2f4] rounded-md">
          <Image src={appointmentImg} alt="appointment image" />
        </div>
      </section>
    </div>
  );
}
export default Appointment;
