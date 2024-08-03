import { Outlet } from "react-router-dom";
const Root = () => {
  return (
    <div className="flex max-w-[1440px] mx-auto">
        <Outlet />
    </div>
  );
};

export default Root;
