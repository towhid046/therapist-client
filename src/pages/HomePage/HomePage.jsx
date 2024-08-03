import NearTherapist from "./NearTherapist/NearTherapist";
import Therapists from "./Therapists/Therapists";
import TestimonialsFeatures from "./TestimonialsFeatures/TestimonialsFeatures";
const HomePage = () => {
  return (
    <section className="bg-secondary-color p-[30px]">
      <NearTherapist />
      <Therapists />
      <TestimonialsFeatures />
    </section>
  );
};

export default HomePage;
