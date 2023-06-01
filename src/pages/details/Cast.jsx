import React from "react";
import Img from "../home/Img";
import "./cast.css";

const Cast = ({ credits, castLoading, url }) => {
  console.log(castLoading);
  return (
    <>
      {!castLoading ? (
        <div className=" px-4 lg:px-10 mt-6">
          <h3 className="text-neutral-500 text-xl font-medium ">
            Notable Cast
          </h3>
          <div className="text-neutral-100 flex gap-5 mt-4 overflow-x-scroll">
            {credits?.cast?.map((cast) => {
              return (
                <div>
                  <div className="w-16 h-16 cast rounded-full overflow-hidden">
                    <Img
                      src={url.backdrop + cast.profile_path}
                      className={"h-full w-full object-cover object-center"}
                    />
                  </div>
                  <div className="text-center text-base mt-2">{cast.name}</div>
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
