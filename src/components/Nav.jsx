import { useUser } from "../hooks/UserProvider";
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
import { useEffect, useState } from "react";

function hiddenNavAtSmallScreenCondition(title) {
  return title.match(/search|notifications/i);
}

export function TopNav() {
  return (
    <nav
      className="w-full fixed z-10 top-0  gap-2 sm:hidden flex justify-around py-3 px-1
    bg-white dark:bg-black"
    >
      <img src="df" alt="instagram" className=" grow-[2] " />
      <FontAwesomeIcon icon={faSearch} size="lg" />
      <FontAwesomeIcon icon={faHeart} size="lg" />
    </nav>
  );
}

export function Nav(props) {
  const user = useUser();
  // const user = null;
  useEffect(() => {
    const createNewPost = document.querySelector("nav .createNewPost");
    const dialogBox = document.querySelector("dialog");
    createNewPost.onclick = () => {
      dialogBox.showModal();
    };
  }, []);
  const navigations = [
    ["home", "/", faHome],
    ["search", "/t@t.com", faSearch],
    ["explore", "/explore", faMap],
    ["reels", "/reels", faVideo],
    ["notifications", "/notificaitons", faHeart],
    ["create", "", faPlus],
    ["messages", "/messages", faMessage],
    ["profile", `/${user?.email || "profiles/?redirect=/login"}`, faPerson],
  ];

  const navElements = navigations.map(([title, url, icon]) => (
    <NavLink
      to={url}
      className={`${hiddenNavAtSmallScreenCondition(title) && "hidden"}
      ${
        title == "create" && "createNewPost"
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
      className="fixed h-auto w-full md:w-auto md:h-full border z-10 bottom-0 
      flex md:flex-col justify-around md:justify-center
       col-span-1 px-3 py-2 border-t-2 md:border-t-0 md:border-r-2
       border-black dark:border-white bg-white dark:bg-black
      lg:px-4 
    "
    >
      {navElements}
    </nav>
  );
}
