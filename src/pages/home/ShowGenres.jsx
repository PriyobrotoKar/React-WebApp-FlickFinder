import React, { useEffect, useState } from "react";
import CaraosulSection from "../../components/CaraosulSection";

const ShowGenres = ({ responses, loading, url, genres }) => {
  const [datas, setDatas] = useState();

  useEffect(() => {
    responses.then((res) => {
      setDatas(res);
    });
  });

  return (
    <div>
      {datas?.slice(0, 17).map((data, ind) => {
        return (
          <div key={ind} className="mb-10">
            <h3 className="text-neutral-600 dark:text-neutral-100 font-medium text-xl mb-6">
              {data.genre}
            </h3>
            <CaraosulSection {...{ data, loading, url, genres }} />
          </div>
        );
      })}
    </div>
  );
};

export default ShowGenres;
