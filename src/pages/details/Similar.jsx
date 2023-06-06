import React from "react";
import CaraosulSection from "../../components/CaraosulSection";
import useFetch from "../../hooks/useFetch";

const Similar = ({ mediaType, id }) => {
  const { data, loading, error } = useFetch(`/${mediaType}/${id}/similar`);

  return (
    <>
      {!loading ? (
        <div className="px-4 lg:px-10">
          <div className="text-neutral-500 text-xl font-medium mb-2 mt-6">
            Similar
          </div>
          <CaraosulSection data={data} loading={loading} />
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default Similar;
