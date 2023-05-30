import millify from "millify";
import React from "react";
import polygon from "../../assets/Polygon 1.svg";

const ImportantInfo = ({ data }) => {
  return (
    <div className="grid auto-rows-[minmax(6rem,1fr)]  xl:auto-rows-[minmax(7rem,1fr)] 2xl:auto-rows-[minmax(9rem,1fr)] grid-cols-[repeat(auto-fit,minmax(6rem,1fr))] flex-wrap gap-2 xl:gap-4 [&>*]:flex-1 w-full text-neutral-100">
      <div className="bg-primary relative cursor-pointer flex items-center rounded-3xl 2xl:aspect-video hover:shadow-[0_0.8rem_2rem_0rem] hover:shadow-[#ff000050] transition-all duration-200">
        <img className="mx-auto w-[25%] xl:w-[18%]" src={polygon} alt="" />
      </div>
      <div className="bg-[#ffffff15] backdrop-blur-sm relative  text-center rounded-3xl flex justify-center items-center 2xl:aspect-video">
        <div className="font-SofiaSansCondensed text-xl xl:text-[1.5rem] 2xl:text-[2rem] tracking-wide">
          {data.status}
        </div>
        <div className="absolute bottom-2 uppercase tracking-wide text-base text-[#ffffff3b]">
          Status
        </div>
      </div>
      <div className="bg-[#ffffff15] backdrop-blur-sm relative  text-center rounded-3xl flex justify-center items-center 2xl:aspect-video">
        <div className="font-SofiaSansCondensed text-xl xl:text-[1.5rem] 2xl:text-[2rem] tracking-wide">
          {data.release_date.replaceAll("-", "/")}
        </div>
        <div className="absolute bottom-2 uppercase tracking-wide text-base text-[#ffffff3b]">
          release
        </div>
      </div>
      <div className="bg-[#ffffff15] backdrop-blur-sm relative  text-center  rounded-3xl flex justify-center items-center 2xl:aspect-video">
        <div className="font-SofiaSansCondensed text-xl xl:text-[1.5rem] 2xl:text-[2rem] tracking-wide">
          ${millify(data.budget)}
        </div>
        <div className="absolute bottom-2 uppercase tracking-wide text-base text-[#ffffff3b]">
          buget
        </div>
      </div>
      <div className="bg-[#ffffff15] backdrop-blur-sm relative  text-center  rounded-3xl flex justify-center items-center 2xl:aspect-video">
        <div className="font-SofiaSansCondensed text-xl xl:text-[1.5rem] 2xl:text-[2rem] tracking-wide">
          {data.runtime} mins
        </div>
        <div className="absolute bottom-2 uppercase tracking-wide text-base text-[#ffffff3b]">
          Length
        </div>
      </div>
      <div className="bg-[#ffffff15] backdrop-blur-sm relative  text-center  rounded-3xl flex justify-center items-center 2xl:aspect-video">
        <div className="font-SofiaSansCondensed text-xl xl:text-[1.5rem] 2xl:text-[2rem] tracking-wide">
          {data.vote_average.toFixed(1)}/10
        </div>
        <div className="absolute bottom-2 uppercase tracking-wide text-base text-[#ffffff3b]">
          rating
        </div>
      </div>
    </div>
  );
};

export default ImportantInfo;
