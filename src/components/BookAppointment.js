const appointmentData = [
  {
    id: 1,
    title: "Initial Contact",
    desc: "Reach out via phone or our webiste’s contact form .",
  },
  {
    id: 2,
    title: "Appointment Schedule",
    desc: "Reach out via phone or our webiste’s contact form .",
  },
  {
    id: 3,
    title: "Service Delivery",
    desc: "Reach out via phone or our webiste’s contact form .",
  },
];

function BookAppointment() {
  return (
    <div className="flex flex-col space-y-6">
      {appointmentData.map((data) => {
        return (
          <div className="flex space-x-5">
            <div className="bg-[#2e4d70] rounded-full p-2 w-[34px] h-[34px] text-white flex justify-center items-center">
              <p>{data.id}</p>
            </div>
            <div className="flex flex-col space-y-3">
              <h2 className="font-semibold text-[16px] md:text-[20px]">
                {data.title}
              </h2>
              <p className="text-[16px] max-w-[349px] md:text-[18px]">
                {data.desc}
              </p>
            </div>
          </div>
        );
      })}
      <button className="w-[265px] bg-[#3d3d4e] py-3 text-white md:text-[18px] flex justify-center items-center rounded-md">
        Book an Appointment
      </button>
    </div>
  );
}
export default BookAppointment;
