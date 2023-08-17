import { NavLink } from "react-router-dom";
import { useUser } from "../../hooks/UserProvider";
export default function ProfileNavigation() {
  const user = useUser();
  const navigations = [
    ["posts", `/${user.email}`],
    ["saved", "saved"],
    ["tagged", "tagged"],
  ];
  const navigationElements = navigations.map(([title, url]) => (
    <NavLink to={url} className="w-1/3 text-center">
      <div className="w-full h-[2px] mb-1  bg-white"></div>
      <span>{title.toUpperCase()}</span>
    </NavLink>
  ));

  return <div className="flex">{navigationElements}</div>;
}
