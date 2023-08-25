import { NavLink } from "react-router-dom";
import { useUser } from "../../hooks/UserProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTableCells,
  faBookmark,
  faTag,
} from "@fortawesome/free-solid-svg-icons";

export default function ProfileNavigation() {
  const user = useUser();
  const navigations = [
    ["posts", faTableCells, `/${user.email}`],
    ["saved", faBookmark, "saved"],
    ["tagged", faTag, "tagged"],
  ];
  const navigationElements = navigations.map(([title, icon, url]) => (
    <NavLink to={url} key={url} className="w-1/3 text-center">
      <div className="w-full h-[2px] mb-1  bg-white"></div>
      <span>
        <FontAwesomeIcon icon={icon} />
        <span className=" ml-3 text-sm font-light">{title.toUpperCase()}</span>
      </span>
    </NavLink>
  ));

  return <div className="flex">{navigationElements}</div>;
}
