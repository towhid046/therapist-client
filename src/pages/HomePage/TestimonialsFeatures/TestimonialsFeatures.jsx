import SectionTitle from "../../../components/Shared/SectionTitle/SectionTitle";
import Testimonials from "./Testimonials/Testimonials";
import PopularCities from "./PopularCities/PopularCities";

const TestimonialsFeatures = () => {
  return (
    <section>
      <div className="flex gap-[30px]">
        <div className="flex-1">
        <SectionTitle>Featured Testimonial</SectionTitle>
          <Testimonials />
        </div>
        <div className="flex-1">
        <SectionTitle>Popular Cities</SectionTitle>
          <PopularCities />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsFeatures;
