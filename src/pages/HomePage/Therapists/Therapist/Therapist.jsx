import location from "../../../../assets/images/icons/location.svg";
import car from "../../../../assets/images/icons/car.svg";
import PropTypes from "prop-types";
const Therapist = ({ therapist }) => {
  return (
    <div className="mx-3 pt-[10px]  border rounded-[10px]">
      <figure className="px-[10px]">
        <img className="w-full" src={therapist.imageUrl} alt="" />
      </figure>
      <div className="px-4 py-5">
        <h2 className="font-medium text-[14px] mb-4 text-[#152A16]">
          {therapist.name}
        </h2>
        <div className="flex items-center gap-1.5 mb-2">
          <img src={location} alt="" />
          <span className="text-[#5C635A] text-[13px] w-max">
            {therapist.address}
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <img src={car} alt="" />
          <span className="text-[#5C635A] text-[13px] w-max">
            {therapist.services.map((service) => service)}
          </span>
        </div>
      </div>
      <div className="rounded-b-[10px]">
        <button className="underline rounded-b-[10px] w-full flex justify-center bg-third-color py-4 transition duration-300 hover:bg-primary-color text-[14px] text-[#152A16] hover:text-white">
          See Details
        </button>
      </div>
    </div>
  );
};

Therapist.propTypes = {
  therapist: PropTypes.object.isRequired,
};

export default Therapist;
