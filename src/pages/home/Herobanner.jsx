import React, { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import { useSelector } from "react-redux";
import Img from "./Img";
import "./heroBanner.css";

const Herobanner = () => {
  const [background, setBackground] = useState([""]);
  const { data, loading } = useFetch("/movie/popular");
  const { url } = useSelector((state) => state.home);
  let slideValue = 0;

  useEffect(() => {
    const populateArray = async () => {
      const bg = await data.results;
      setBackground(bg);
    };

    populateArray();
  }, [data]);

  return (
    <>
      {!loading && (
        <div className="banner relative w-full h-[50svh]">
          {background.map((elem, ind) => {
            return (
              <Img
                key={ind}
                src={url.backdrop + elem.backdrop_path}
                className={
                  " h-full rounded-3xl  object-cover object-[0%_20%] w-full"
                }
              />
            );
          })}
        </div>
      )}
    </>
  );
};

export default Herobanner;
