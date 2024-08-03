import NearTherapist from "./NearTherapist/NearTherapist";
import Features from './Features/Features';
const HomePage = () => {
  return (
    <section className="bg-secondary-color p-[30px]">
      <NearTherapist />
      <Features/>
    </section>
  );
};

export default HomePage;
