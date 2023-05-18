import React from "react";
import { SidebarData } from "./SidebarData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-regular-svg-icons";

const Sidebar = () => {
  return (
    <section className="hidden px-10 py-8 font-Poppins border-r border-r-[#CDD2E0] lg:flex flex-col">
      <header className="font-Ramabhadra text-neutral-700 dark:text-neutral-100 text-2xl">
        FlickFinder<span className="text-primary">.</span>
      </header>
      <nav className="mt-10 flex-1">
        <h3 className="text-neutral-500 font-medium mb-8">Menu</h3>
        <ul className=" space-y-6">
          {SidebarData.map((elem, ind) => {
            return (
              <li
                key={ind}
                className="flex items-center gap-4 text-xl font-medium text-neutral-500"
              >
                <span className="text-[1.5rem]">{elem.icon}</span>
                <h4>{elem.title}</h4>
              </li>
            );
          })}
        </ul>
      </nav>
      <div>
        <button className="bg-neutral-500 text-neutral-100 w-full p-5 rounded-xl flex items-center justify-center gap-3 text-xl">
          <FontAwesomeIcon className="text-[1.4rem]" icon={faMoon} />
          <span>Dark Mode</span>
        </button>
      </div>
    </section>
  );
};

export default Sidebar;
