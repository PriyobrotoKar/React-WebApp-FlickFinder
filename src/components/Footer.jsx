import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiscord,
  faGithub,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

const Footer = () => {
  return (
    <footer className="text-center bg-[#3b3b3b70] space-y-10 rounded-t-2xl font-Poppins p-8 pt-16 mt-auto">
      <div className="container mx-auto text-left font-Ramabhadra text-neutral-100 text-2xl text">
        FlickFinder<span className="text-primary">.</span>
      </div>
      <div className="space-y-5 container mx-auto sm:flex sm:space-y-0 sm:flex-wrap sm:justify-between sm:gap-8">
        <div className="space-y-1 sm:text-left">
          <h3 className="text-xl font-medium text-neutral-500">
            Developed and Managed by
          </h3>
          <div className="text-neutral-100">Priyobroto Kar</div>
        </div>
        <div className="space-y-2 container mx-auto sm:max-w-fit sm:order-3 lg:order-2 sm:text-left sm:mx-0">
          <h3 className="text-xl font-medium text-neutral-500">Links</h3>
          <div>
            <ul className="flex w-full justify-between text-neutral-100 text-base sm:gap-4">
              <li>Home</li>
              <li>WatchList</li>
              <li>About</li>
              <li>Coming Soon</li>
              <li>TMDB</li>
            </ul>
          </div>
        </div>
        <div className="space-y-2 sm:text-left lg:order-3">
          <h3 className="text-xl font-medium text-neutral-500">
            Connect with me
          </h3>
          <div>
            <ul className="flex w-full justify-center gap-2">
              <li className="bg-neutral-500 rounded-full flex justify-center items-center p-2 text-[1.5rem] text-neutral-100">
                <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
              </li>
              <li className="bg-neutral-500 rounded-full flex justify-center items-center p-2 text-[1.2rem] text-neutral-100">
                <FontAwesomeIcon icon={faDiscord}></FontAwesomeIcon>
              </li>
              <li className="bg-neutral-500 rounded-full flex justify-center items-center p-2 text-[1.5rem] text-neutral-100">
                <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
              </li>
              <li className="bg-neutral-500 rounded-full flex justify-center items-center p-2 text-[1.5rem] text-neutral-100">
                <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
              </li>
              <li className="bg-neutral-500 rounded-full flex justify-center items-center py-2 px-[0.6rem] text-[1.5rem] text-neutral-100">
                <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="space-y-5">
        <hr className="text-neutral-600 " />
        <div className="text-lg text-neutral-500 font-semibold">
          Copyright © 2023. All rights reserved. ️
        </div>
      </div>
    </footer>
  );
};

export default Footer;
