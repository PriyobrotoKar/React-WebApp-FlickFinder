import React, { useState } from "react";
import avatarFallback from "../../assets/3973.jpg";
import Img from "../../components/Img";
import "./cast.css";
import { useSelector } from "react-redux";

const Cast = ({ credits, castLoading }) => {
  const { url, genres } = useSelector((state) => state.home);
  console.log(castLoading);
  return (
    <>
      {!castLoading ? (
        <div className={"relative mt-6 "}>
          <h3 className="text-neutral-500 text-xl font-medium px-4 lg:px-10 ">
            Notable Cast
          </h3>
          <div
            className={
              "text-neutral-100 px-4  lg:px-10 flex lg:flex-wrap gap-5 mt-4 overflow-x-scroll "
            }
          >
            {credits?.cast?.slice(0, 10).map((cast) => {
              return (
                <div className="w-16">
                  <div className="w-16 h-16 cast rounded-full overflow-hidden mx-auto">
                    <Img
                      src={
                        cast.profile_path
                          ? url.backdrop + cast.profile_path
                          : avatarFallback
                      }
                      className={"h-full w-full object-cover object-center"}
                    />
                  </div>
                  <div className="text-neutral-700 dark:text-neutral-100 text-center text-base mt-2">
                    {cast.name}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default Cast;
