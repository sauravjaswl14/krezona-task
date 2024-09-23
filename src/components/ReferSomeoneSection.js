function ReferSomeoneSection() {
  return (
    <section className="mb-5 md:mb-10 flex justify-center items-center">
      <div className="flex flex-col space-y-5">
        <h4 className="text-center text-[24px] font-[600] text-[#1f1f1f] md:text-[40px]">
          Overcome Ignorance and Fight for Equality
        </h4>

        <div className="flex space-x-5 justify-center">
          <button className="border-2 py-3 border-[#000] rounded-md w-[214px] md:w-[265px] flex justify-center items-center text-[#fff] bg-[#3d3d4e]">
            Book an Appointment
          </button>
          <button className="border-2 py-3 border-[#000] rounded-md w-[163px] md:w-[265px] flex justify-center items-center text-[#000]">
            Refer Someone
          </button>
        </div>
      </div>
    </section>
  );
}
export default ReferSomeoneSection;
