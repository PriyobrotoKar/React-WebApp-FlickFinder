import { faBars, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
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
  return (
    <header
      className={
        "flex relative z-10   px-4 lg:px-10 justify-between items-center py-6 lg:py-10 text-2xl sm:gap-7 " +
        (isInDetails
          ? "bg-gradient-to-b from-[#1a1d20]"
          : "text-neutral-500 dark:text-neutral-600 border-neutral-500  dark:border-neutral-600")
      }
    >
      <div
        className={
          "flex items-center text[1.4rem] lg:hidden " +
          (isInDetails
            ? "text-neutral-100 dark:text-neutral-100"
            : "text-neutral-500")
        }
      >
        <FontAwesomeIcon icon={faBars} />
      </div>
      <div
        onClick={() => {
          console.log("onClick");
          navigate("/");
        }}
        className="font-Ramabhadra text-neutral-700 dark:text-neutral-100 lg:hidden"
      >
        FlickFinder<span className="text-primary">.</span>
      </div>
      <div
        className={
          "flex transition-all items-center border-2 text-neutral-500 max-w-[30%]  sm:flex-1 sm:px-[0.8rem] rounded-full py-2 px-[0.65rem] text-[1.4rem] " +
          (query ? " border-neutral-100" : "") +
          (isInDetails ? " border-neutral-100 backdrop-blur-sm" : "")
        }
      >
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className={
            "transition-all " +
            (query ? "text-neutral-500 dark:text-neutral-100 " : "") +
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
            "flex-auto w-0 sm:pl-3 text-xl bg-[transparent] outline-none font-Poppins " +
            (isInDetails
              ? "text-neutral-100 dark:text-neutral-100 placeholder:text-neutral-100 dark:placeholder:text-neutral-100"
              : "text-neutral-500 dark:text-neutral-100 placeholder:text-neutral-500 dark:placeholder:text-neutral-600")
          }
        />
      </div>
    </header>
  );
};

export default Header;
