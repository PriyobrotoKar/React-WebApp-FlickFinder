import React, { useState } from "react";
import avatarFallback from "../../assets/3973.jpg";
import Img from "../../components/Img";
import "./cast.css";

const Cast = ({ credits, castLoading, url }) => {
  const [showLess, setShowLess] = useState(true);
  console.log(castLoading);
  return (
    <>
      {!castLoading ? (
        <div className=" mt-6">
          <h3 className="text-neutral-500 text-xl font-medium px-4 lg:px-10 ">
            Notable Cast
          </h3>
          <div className="text-neutral-100 px-4 lg:px-10 flex lg:flex-wrap gap-5 mt-4 overflow-x-scroll">
            {credits?.cast?.slice(0, showLess ? 12 : -1).map((cast) => {
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
                  <div className="text-center text-base mt-2">{cast.name}</div>
                </div>
              );
            })}
          </div>
          <div
            onClick={() => setShowLess(!showLess)}
            className="px-4 lg:px-10 text-neutral-500 text-right cursor-pointer hover:text-neutral-600 transition-all"
          >
            {showLess ? "Show More" : "Show Less"}
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default Cast;
