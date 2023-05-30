import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import Description from "./Description";
import DetailsBanner from "./DetailsBanner";

const Details = () => {
  const { mediaType, id } = useParams();
  const { data, loading } = useFetch(`/${mediaType}/${id}`);
  const { data: credits, loading: creditsLoading } = useFetch(
    `/${mediaType}/${id}/credits`
  );
  const { url } = useSelector((state) => state.home);
  return (
    <div className="font-Poppins relative -top-32 ">
      <DetailsBanner
        data={data}
        loading={loading}
        url={url}
        mediaType={mediaType}
      />
      <Description
        data={data}
        loading={loading}
        url={url}
        credits={credits}
        crewLoading={creditsLoading}
      />
    </div>
  );
};

export default Details;
