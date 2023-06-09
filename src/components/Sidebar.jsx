import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-regular-svg-icons";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { darkBtn } from "../store/darkBtnSlice";
import { useNavigate } from "react-router-dom";

const Sidebar = (props) => {
  const navigate = useNavigate();
  const darkBtnObj = useSelector((state) => state.darkBtn);
  const dispatch = useDispatch();
  const toggleDarkLight = () => {
    document.documentElement.classList.toggle("dark");
    if (localStorage.theme === "dark") {
      localStorage.theme = "light";
      dispatch(darkBtn({ icon: faMoon, text: "Dark Mode" }));
    } else {
      localStorage.theme = "dark";
      dispatch(darkBtn({ icon: faSun, text: "Light Mode" }));
    }
  };

  return (
    <section
      className={
        "dark:bg-gradient-to-t dark:from-[#181A1E] dark:to-[#1D2023] bg-gradient-to-t from-[#DCDDE8] to-[#FAFCFF] lg:bg-none fixed z-30 px-10 py-8 font-Poppins border-r border-r-[#CDD2E0] dark:border-r-neutral-700 flex flex-col h-[100dvh] transition-all duration-200 " +
        (props.showSidebar
          ? "translate-x-0"
          : "-translate-x-full lg:translate-x-0")
      }
    >
      <header
        onClick={() => {
          props.setShowSidebar(false);
          console.log("onClick");
          navigate("/");
        }}
        className="font-Ramabhadra text-neutral-700 dark:text-neutral-100 text-2xl"
      >
        FlickFinder<span className="text-primary">.</span>
      </header>
      <nav className="mt-10 flex-1">
        <h3 className="text-neutral-500 font-medium mb-8 landscape:mb-4 landscape:lg:mb-8">
          Menu
        </h3>
        <ul className=" space-y-6 landscape:space-y-2 landscape:lg:space-y-6">
          {SidebarData.map((elem, ind) => {
            return (
              <li key={ind} className="">
                <NavLink
                  to={elem.path}
                  onClick={() => {
                    props.setShowSidebar(false);
                    document.body.style.overflow = "";
                  }}
                  className={({ isActive }) =>
                    isActive
                      ? "activeLink flex items-center gap-4 text-xl text-neutral-500 dark:text-neutral-100 font-medium transition-all duration-200"
                      : "flex items-center gap-4 text-xl font-medium text-neutral-500 transition-all duration-200 dark:text-neutral-600"
                  }
                >
                  <span className="text-[1.5rem] dark:text-neutral-600 transition-all duration-200">
                    {elem.icon}
                  </span>
                  <h4>{elem.title}</h4>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
      <div>
        <button
          className="bg-neutral-500 dark:bg-neutral-700 text-neutral-100 w-full p-4 min-w-[14rem] rounded-xl flex items-center justify-center gap-3 text-xl"
          onClick={toggleDarkLight}
        >
          <FontAwesomeIcon
            className="text-[1.4rem] -rotate-12"
            icon={darkBtnObj.icon}
          />
          <span>{darkBtnObj.text}</span>
        </button>
      </div>
    </section>
  );
};

export default Sidebar;
