import NearTherapist from "./NearTherapist/NearTherapist";
import Therapists from "./Therapists/Therapists";
import TestimonialsFeatures from "./TestimonialsFeatures/TestimonialsFeatures";
import NavbarLeft from "./../../components/Shared/NavbarLeft/NavbarLeft";
import NavbarTop from "../../components/Shared/NavbarTop/NavbarTop";
import useScrollToTop from "../../hooks/useScrollToTop";
const HomePage = () => {
  useScrollToTop()
  return (
    <section className="flex">
      <NavbarLeft />
      <div className="w-full">
        <NavbarTop />
        <div className="bg-secondary-color p-[30px]">
          <NearTherapist />
          <Therapists />
          <TestimonialsFeatures />
        </div>
      </div>
    </section>
  );
};

export default HomePage;
