import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/images/logo.svg";

import FaHome from "../../../assets/images/icons/home.svg";
import FaPlus from "../../../assets/images/icons/new-list.svg";
import FaSearch from "../../../assets/images/icons/search.svg";
import FaInfo from "../../../assets/images/icons/about.svg";
import FaHeart from "../../../assets/images/icons/favorite.svg";
import FaQuestionCircle from "../../../assets/images/icons/help-center.svg";
import FaCog from "../../../assets/images/icons/setting.svg";

const menuItems = [
  { id: 1, title: "Home", url: "/", icon: FaHome },
  { id: 2, title: "New Listing", url: "/new-listing", icon: FaPlus },
  { id: 3, title: "Search", url: "/search", icon: FaSearch },
  { id: 4, title: "About", url: "/about", icon: FaInfo },
  { id: 5, title: "Favorites", url: "/favorites", icon: FaHeart },
  { id: 6, title: "Help Center", url: "/help-center", icon: FaQuestionCircle },
  { id: 7, title: "Settings", url: "/settings", icon: FaCog },
];

const NavbarLeft = () => {
  return (
    <aside className="w-[250px] min-h-screen bg-white">
      <div>
        <div className="py-14 flex justify-center">
          <Link to={"/"}>
            <img src={logo} alt="Logo" />
          </Link>
        </div>
        <ul className="nav-left-menu">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`${item.title === "Favorites" && "border-b"}`}
            >
              <NavLink
                to={item.url}
                className="flex gap-[14px] items-center px-[26px] py-[14px] transition duration-300 hover:border-black hover:border-l-2 border-l border-white  hover:bg-third-color"
              >
                <img src={item.icon} alt={item.title} />
                <span className="text-[15px] text-[#5C635A]">{item.title}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default NavbarLeft;
