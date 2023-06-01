import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import Cast from "./Cast";
import Description from "./Description";
import DetailsBanner from "./DetailsBanner";
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
      <Cast credits={credits} castLoading={creditsLoading} url={url} />
      <VideosSection videos={videos} videosLoading={videosLoading} />
    </div>
  );
};

export default Details;
