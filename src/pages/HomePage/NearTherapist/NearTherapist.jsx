import therapy from "../../../assets/images/home/therapy.png";
import therapyVector from "../../../assets/images/home/therapy-vector.png";
const NearTherapist = () => {
  return (
    <div className="bg-white p-[30px] mb-6 flex justify-between items-center rounded-[10px]">
      <div className="flex-1">
        <h2 className="text-xl font-medium mb-5">
          I'm Login for Massage Therapist Near...
        </h2>
        <p className="mb-7 text-[15px]">
          In using this site , I agree to be bound by the{" "}
          <u className="text-primary-color cursor-pointer">Terms of Service</u>{" "}
          and{" "}
          <u className="text-primary-color cursor-pointer">Privacy Policy</u>
        </p>
        <form className="bg-secondary-color pl-5 pr-1.5 py-1.5 w-full rounded-[10px] flex justify-between items-center gap-3 text-[15px]">
          <input
            type="text"
            placeholder="ZIP code or city name"
            className="bg-secondary-color text-gray-500 focus:outline-none w-full"
          />
          <input
            type="submit"
            className="bg-primary-color rounded-lg px-6 py text-white py-2 font-medium text-[14px] cursor-pointer"
            value="Go"
          />
        </form>
      </div>
      <div className="flex-1">
        <div className="flex justify-end relative">
          <img
            className="absolute left-16 z-10 top-0"
            src={therapyVector}
            alt=""
          />
          <img className="z-20" src={therapy} alt="Therapy img" />
        </div>
      </div>
    </div>
  );
};

export default NearTherapist;
