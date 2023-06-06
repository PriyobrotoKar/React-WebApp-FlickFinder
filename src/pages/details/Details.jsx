import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import Cast from "./Cast";
import Description from "./Description";
import DetailsBanner from "./DetailsBanner";
import Recommendation from "./Recommendation";
import Similar from "./Similar";
import VideosSection from "./VideosSection";

const Details = () => {
  const { mediaType, id } = useParams();
  const { data, loading } = useFetch(`/${mediaType}/${id}`);
  const { data: credits, loading: creditsLoading } = useFetch(
    `/${mediaType}/${id}/credits`
  );
  const { data: videos, loading: videosLoading } = useFetch(
    `/${mediaType}/${id}/videos`
  );

  return (
    <div className="font-Poppins relative -top-32 ">
      <DetailsBanner data={data} loading={loading} mediaType={mediaType} />
      <Description
        data={data}
        loading={loading}
        credits={credits}
        crewLoading={creditsLoading}
      />
      <Cast credits={credits} castLoading={creditsLoading} />
      <VideosSection videos={videos} videosLoading={videosLoading} />
      <Similar mediaType={mediaType} id={id} />
      <Recommendation mediaType={mediaType} id={id} />
    </div>
  );
};

export default Details;
