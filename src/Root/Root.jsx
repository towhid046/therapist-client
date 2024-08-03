import { Outlet } from "react-router-dom";
import NavbarTop from "./../components/Shared/NavbarTop/NavbarTop";
import NavbarLeft from "./../components/Shared/NavbarLeft/NavbarLeft";
const Root = () => {
  return (
    <div className="flex gap-6 max-w-[1440px] mx-auto">
      <NavbarLeft />
      <div>
        <NavbarTop />
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
