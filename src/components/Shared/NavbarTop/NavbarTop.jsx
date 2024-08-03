import { IoIosArrowDown } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";
import notification from '../../../assets/images/icons/notification.svg'
import line from '../../../assets/images/icons/line.svg'
import logout from '../../../assets/images/icons/logout.svg'

const NavbarTop = () => {
  return (
    <nav className="flex justify-between border-l border-secondary-color py-6 px-[30px] text-[#152A16]">
      <div className="flex gap-3 items-center">
        <figure>
          <FaRegUserCircle className="text-3xl text-gray-500" />
        </figure>
        <div>
          <div className="flex justify-between">
            <h2 className="font-medium text-[15px]">Guest User</h2>
            <button>
              <IoIosArrowDown />
            </button>
          </div>
          <p className="text-[#5C635A] font-normal text-[14px]">guestuser@gmail.com</p>
        </div>
      </div>

      <div>
        <div className="flex gap-5">
          <img  className="w-10 cursor-pointer" src={notification} alt="Notification" />
          <img src={line} alt="Line" />
          <button className="flex items-center gap-2.5">
            <span className="text-[#F15E4A] font-medium text-[15px]">Log Out</span>
            <span className="flex justify-center items-center rounded-full w-10 h-10 bg-[#FFECEA]">
              <img className="w-5" src={logout} alt="" />
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavbarTop;
