import { Outlet } from "react-router-dom";
import { Nav, TopNav } from "./Nav";

function toggleMode() {
  const html = document.querySelector("html");
  html.classList.contains("dark")
    ? (html.className = "")
    : (html.className = "dark");
}

export default function HomeLayout() {
  return (
    <div
      className="min-h-screen w-screen dark:bg-black
    grid grid-cols-1 md:grid-cols-[auto_1fr_auto] dark:text-white
    "
    >
      <button
        onClick={toggleMode}
        className=" text-blue-800 absolute top-1/2 right-0 inset-2"
      >
        toggle darkmode
      </button>
      <TopNav />
      <Nav />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
