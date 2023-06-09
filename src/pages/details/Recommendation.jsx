import React from "react";
import CaraosulSection from "../../components/CaraosulSection";
import useFetch from "../../hooks/useFetch";

const Recommendation = ({ mediaType, id, url, genres }) => {
  const { data, loading, error } = useFetch(
    `/${mediaType}/${id}/recommendations`
  );
  return (
    <>
      {!loading ? (
        data.results.length ? (
          <div className="px-4 lg:px-10">
            <div className="text-neutral-500 text-xl font-medium mb-2 mt-6">
              Recommendation
            </div>
            <CaraosulSection
              data={data}
              loading={loading}
              url={url}
              genres={genres}
            />
          </div>
        ) : (
          ""
        )
      ) : (
        <div></div>
      )}
    </>
  );
};

export default Recommendation;
