import React from "react";

const About = () => {
  return (
    <div className="font-Poppins space-y-6 px-4 lg:px-10 pb-10 dark:text-neutral-100 [&_p]:text-[#a7a7a7] [&_li]:text-[#a7a7a7]">
      <div className="w-[80%] max-w-[60rem] max-h-[20rem] overflow-hidden rounded-3xl">
        <img
          className="w-full  object-cover object-bottom"
          src="./Frame 46.png"
          alt=""
        />
      </div>
      <div>
        <h1 className="text-2xl uppercase font-medium">About This Project</h1>
        <p className="max-w-[70%]">
          Movie Dashboard is a website that allows users to browse, search and
          rate movies from various genres and categories. It is built with React
          JS, a popular JavaScript library for creating user interfaces, and
          Tailwind CSS, a utility-first framework for styling web pages. Movie
          Dashboard uses the TMDB API to fetch movie data and display it in a
          responsive and interactive layout. Users can filter movies by genre,
          popularity, release date and rating, as well as view movie details,
          trailers, reviews and cast information. Users can also create an
          account and rate movies they have watched or want to watch, as well as
          see recommendations based on their preferences.
        </p>
      </div>
      <div>
        <h2 className="text-2xl uppercase font-medium">ROLE IN PROJECT</h2>
        <p>Front End Developer.</p>
      </div>
      <div>
        <h2 className="text-2xl uppercase font-medium">TECHNICAL SHEET</h2>
        <p>
          Some noteworthy technologies I got involved with while working on this
          project:
        </p>
        <ul className="list-disc list-inside">
          <li>React JS</li>
          <li>Tailwind CSS</li>
          <li>Vite</li>
          <li>Material UI</li>
          <li>Git</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
