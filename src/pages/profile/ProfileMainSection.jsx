import { NavLink } from "react-router-dom";

const navigations = [
  ["grid", "/"],
  ["saved", "saved"],
  ["tagged", "tagged"],
];
export default function ProfileMainSection() {
  return (
    <div className="relative border border-white">
      <ProfileMainSectionNavigation />
    </div>
  );
}

function ProfileMainSectionNavigation() {
  const navigationElements = navigations.map(([title, url]) => (
    <NavLink to={url} className="w-1/3 text-center">
      <div className="w-full h-[2px] mb-1  bg-white"></div>
      <span className=" text-red-600">{title}</span>
    </NavLink>
  ));

  return <div className="flex">{navigationElements}</div>;
}
