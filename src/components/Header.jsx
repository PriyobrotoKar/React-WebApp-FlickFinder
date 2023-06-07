import { faBars, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Header = (props) => {
  const [query, setQuery] = useState("");

  const navigate = useNavigate();

  const handleSearchQuery = (e) => {
    if (e.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
    }
  };

  let location = useLocation();
  let isInDetails =
    location.pathname.includes("/movie") || location.pathname.includes("/tv");

  const hamburgerClickHandle = () => {
    props.setShowSidebar(true);
  };

  return (
    <header
      className={
        "flex relative z-10 gap-6   px-4 lg:px-10 justify-between items-center py-6 lg:py-10 text-2xl sm:gap-7 " +
        (isInDetails
          ? "bg-gradient-to-b from-[#1a1d20]"
          : "text-neutral-500 dark:text-neutral-600 border-neutral-500  dark:border-neutral-600")
      }
    >
      <div
        onClick={hamburgerClickHandle}
        className={
          "flex items-center text[1.4rem] lg:hidden " +
          (isInDetails
            ? "text-neutral-100 dark:text-neutral-100"
            : "text-neutral-500")
        }
      >
        <FontAwesomeIcon icon={faBars} className="hamburger" />
      </div>

      <div
        className={
          "searchBox relative z-30 backdrop-blur-sm  flex flex-1 transition-all duration-200 items-center border-2 text-neutral-500 sm:max-w-[30%]  sm:flex-1 sm:px-[0.8rem] rounded-full py-2 px-[0.65rem] text-[1.4rem] " +
          (query ? "border-neutral-700 dark:border-neutral-100" : "") +
          (isInDetails
            ? " bg-[transparent] dark:bg-[transparent] border-neutral-100 "
            : " bg-[#fafcffbe] dark:bg-[#1d2023c0]")
        }
      >
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className={
            "searchIcon transition-all " +
            (query ? "text-neutral-700 dark:text-neutral-100 " : "") +
            (isInDetails ? "text-neutral-100" : "text-neutral-500")
          }
        />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyUp={handleSearchQuery}
          placeholder="Search..."
          className={
            "searchInput flex-auto pl-2 w-0 text-xl bg-[transparent] outline-none font-Poppins " +
            (isInDetails
              ? "text-neutral-100 dark:text-neutral-100 placeholder:text-neutral-100 dark:placeholder:text-neutral-100"
              : "text-neutral-700 dark:text-neutral-100 placeholder:text-neutral-500 dark:placeholder:text-neutral-500")
          }
        />
      </div>
    </header>
  );
};

export default Header;
