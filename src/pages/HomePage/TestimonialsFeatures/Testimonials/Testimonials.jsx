import { useState } from "react";
import testimonial1 from "../../../../assets/images/home/testimonial-1.png";
import testimonial2 from "../../../../assets/images/home/testimonial-2.png";
import location from "../../../../assets/images/icons/location.svg";
const allTestimonials = [
  {
    id: 1,
    address: "123 Elm Street, New York",
    title: "Rejuvenating Massage",
    description:
      "Cort’s rejuvenating massage left me feeling renewed and full of energy. Their skilled techniques are unparalleled.",
    image: testimonial1,
  },
  {
    id: 2,
    address: "456 Maple Avenue, Los Angeles",
    title: "Relaxing Bodywork",
    description:
      "The relaxing bodywork session with Cort was a blissful experience. The stress and tension melted away.",
    image: testimonial2,
  },
  {
    id: 3,
    address: "789 Pine Road, Chicago",
    title: "Deep Tissue Therapy",
    description:
      "Cort’s deep tissue therapy worked wonders for my sore muscles. I felt like a new person afterwards.",
    image: testimonial2,
  },
  {
    id: 4,
    address: "321 Oak Street, San Francisco",
    title: "Holistic Healing",
    description:
      "The holistic healing approach Cort uses is truly remarkable. I felt balanced and at peace after the session.",
    image: testimonial1,
  },
  {
    id: 5,
    address: "654 Birch Lane, Miami",
    title: "Therapeutic Massage",
    description:
      "Cort’s therapeutic massage relieved my chronic pain and improved my overall well-being. Highly recommend!",
    image: testimonial1,
  },
  {
    id: 6,
    address: "987 Cedar Court, Seattle",
    title: "Stress Relief Massage",
    description:
      "The stress relief massage with Cort was exactly what I needed. I left feeling incredibly relaxed.",
    image: testimonial2,
  },
];

const Testimonials = () => {
  const [activeItem, setActiveItem] = useState(0);
  const [testimonials, setTestimonials] = useState(allTestimonials.slice(0, 2));
  const handleTestimonial = (num) => {
    setTestimonials(allTestimonials.slice(num, num + 2));
    setActiveItem(num);
  };

  return (
    <div className="bg-white p-[30px] rounded-[10px] space-y-5">
      {testimonials.map((testimonial) => (
        <div
          key={testimonial.address}
          className="border rounded-[10px] p-2.5 flex gap-4 items-center"
        >
          <figure>
            <img
              className="min-w-[130px]"
              src={testimonial.image}
              alt="Testimonial Image"
            />
          </figure>
          <div>
            <div className="flex items-center gap-2">
              <img src={location} alt="" />
              <span className="text-[13px] text-[#5C635A]">
                {testimonial.address}
              </span>
            </div>
            <h2 className="my-3 text-[14px] font-semibold text-[#232F3C]">
              {testimonial.title}{" "}
              <span className="italic text-primary-color">by Cort</span>
            </h2>
            <p className="text-[13px] text-[#5C635A]">
              {testimonial.description}
              <span className="text-primary-color font-medium cursor-pointer">
                ...Read More
              </span>
            </p>
          </div>
        </div>
      ))}

      <ul className="flex gap-3 justify-center">
        {[0, 2, 4].map((num) => (
          <li key={num}>
            <button
              onClick={() => handleTestimonial(num)}
              className={`rounded-full hover:bg-primary-color ${
                activeItem === num ? "bg-primary-color" : "bg-[#3B463373]"
              } duration-300 transition w-[9px] h-[9px] `}
            ></button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Testimonials;
