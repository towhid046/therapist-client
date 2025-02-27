import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import FeatureCard from "./Therapist/Therapist";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import SectionTitle from "../../../components/Shared/SectionTitle/SectionTitle";
import { therapists } from "./therapistsData/therapistsData";

const Therapists = () => {
  const sliderRef = useRef(null);

  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const handlePrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 4,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          initialSlide: 4,
          infinite: true,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 3,
        },
      },
    ],
  };

  return (
    <section className="mb-[30px]">
      <SectionTitle>Featured Therapist</SectionTitle>
      <div className="flex bg-white p-[30px] rounded-[10px] items-center">
        <button
          className="w-10 flex justify-center hover:text-white z-30 items-center h-10 bg-third-color rounded-full hover:bg-primary-color transition duration-300"
          onClick={handlePrev}
        >
          <SlArrowLeft className="text-xs" />
        </button>
        <div className="max-w-4xl mx-auto">
          <Slider ref={sliderRef} {...settings} autoplay={true}>
            {therapists?.map((therapist) => (
              <div key={therapist.id}>
                <FeatureCard therapist={therapist} />
              </div>
            ))}
          </Slider>
        </div>
        <button
          className="w-10 flex justify-center hover:text-white z-30 rounded-full h-10 bg-third-color hover:bg-primary-color transition duration-300 items-center"
          onClick={handleNext}
        >
          <SlArrowRight className="text-xs" />
        </button>
      </div>
    </section>
  );
};

export default Therapists;
