import React from "react";

import Img from "../../components/Img";
import ImportantInfo from "./ImportantInfo";
import "./detailsBanner.css";
import { useSelector } from "react-redux";

const DetailsBanner = ({ data, loading, mediaType }) => {
  const { url } = useSelector((state) => state.home);
  return (
    <div>
      {!loading ? (
        <div className="min-h-[20rem] lg:min-h-[30rem] h-[60svh] relative  banner  w-full">
          <Img
            src={url.backdrop + data.backdrop_path}
            className={"object-cover object-[50%_20%] h-full w-full"}
          />
          <div className="h-full absolute inset-0 bg-gradient-to-t from-[#f3f5fa] dark:from-[#1a1c20]"></div>
          <div className="absolute -bottom-20 space-y-4 px-4 lg:px-10 w-full">
            <h1 className="text-2xl leading-[2.5rem] lg:text-[3rem] xl:text-3xl text-neutral-600 dark:text-neutral-100 font-semibold lg:leading-[3.5rem]  xl:leading-[4rem]">
              {data.title || data.original_name}
            </h1>
            <div className="flex flex-wrap w-full gap-2">
              {data.genres.map((g) => {
                return (
                  <div className="text-base xl:text-lg backdrop-blur-lg text-neutral-600 dark:text-neutral-100 bg-[#b3b4b85e] dark:bg-[#ffffff28] rounded-2xl px-4 py-1">
                    {g.name}
                  </div>
                );
              })}
            </div>
            <ImportantInfo data={data} mediaType={mediaType} />
          </div>
        </div>
      ) : (
        "loading..."
      )}
    </div>
  );
};

export default DetailsBanner;
