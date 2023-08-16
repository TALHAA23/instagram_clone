import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faSearch,
  faMap,
  faVideo,
  faHeart,
  faPlus,
  faPerson,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink } from "react-router-dom";

const navigations = [
  ["home", "/home", faHome],
  ["search", "", faSearch],
  ["explore", "/explore", faMap],
  ["reels", "/reels", faVideo],
  ["notifications", "/notificaitons", faHeart],
  ["create", "", faPlus],
  ["messages", "/messages", faMessage],
  ["profile", "/profile", faPerson],
];

function hiddenNavAtSmallScreenCondition(title) {
  return title.match(/search|notifications/i);
}

export function TopNav() {
  return (
    <nav className="w-full fixed top-0  gap-2 sm:hidden flex justify-around py-3 px-1">
      <img src="df" alt="instagram" className=" grow-[2] " />
      <FontAwesomeIcon icon={faSearch} size="lg" />
      <FontAwesomeIcon icon={faHeart} size="lg" />
    </nav>
  );
}

export function Nav() {
  const navElements = navigations.map(([title, url, icon]) => (
    <NavLink
      to={url}
      className={`${
        hiddenNavAtSmallScreenCondition(title) && "hidden"
      } rounded-md sm:block md:py-3 space-x-2 hover:scale-150 
      md:hover:scale-100 md:hover:bg-[#9c999996] dark:md:hover:bg-[#abaaaa43]
      lg:px-6
      `}
    >
      <FontAwesomeIcon icon={icon} size="lg" />
      <span className="hidden lg:inline">{title}</span>
    </NavLink>
  ));
  return (
    <nav
      className="absolute md:relative bottom-0 flex md:flex-col justify-around md:justify-center
       w-full col-span-1 px-3 py-2 border-t-2 md:border-t-0 md:border-r-2 border-black dark:border-white
      lg:px-4 
    "
    >
      {navElements}
    </nav>
  );
}
