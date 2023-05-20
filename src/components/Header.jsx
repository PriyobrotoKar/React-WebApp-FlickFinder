import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <header className="container mx-auto flex justify-between items-center py-10 text-2xl sm:gap-7">
      <div className="flex items-center text-neutral-500 dark:text-neutral-600 text[1.4rem] lg:hidden">
        <FontAwesomeIcon icon={faBars} />
      </div>
      <div className="font-Ramabhadra text-neutral-700 dark:text-neutral-100 lg:hidden">
        FlickFinder<span className="text-primary">.</span>
      </div>
      <div className="flex items-center border-2 text-neutral-500 border-neutral-500 dark:text-neutral-600 dark:border-neutral-600 sm:flex-1 sm:px-[0.8rem] rounded-full py-2 px-[0.65rem] text-[1.4rem]">
        <FontAwesomeIcon icon={faMagnifyingGlass} className="" />
        <input
          type="text"
          placeholder="Search..."
          className="flex-auto w-0 sm:pl-3 text-xl bg-[transparent] outline-none placeholder:text-neutral-500 dark:placeholder:text-neutral-600 placeholder:font-Poppins text-neutral-500"
        />
      </div>
    </header>
  );
};

export default Header;
