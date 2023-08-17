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
      className="relative min-h-screen  dark:bg-black dark:text-white
      grid grid-cols-1 md:grid-cols-[50px_1fr_auto] lg:grid-cols-[200px_1fr_auto]
    "
    >
      <button
        onClick={toggleMode}
        className=" text-blue-800 z-10 h-5 border border-white absolute top-1/4 right-0 inset-2"
      >
        toggle darkmode
      </button>
      <TopNav />
      <Nav />
      <main className=" md:col-start-2 md:col-end-3">
        <Outlet />
      </main>
    </div>
  );
}
