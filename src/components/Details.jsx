import Card from "antd/es/card/Card";
import Meta from "antd/es/card/Meta";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCardDetails } from "../services/trending";

export const Details = () => {
  const [cardDetails, setCardDetails] = useState({
    adult: "",
    backdrop_path: "",
    created_by: [{}],
    episode_run_time: [],
    first_air_date: "",
    genres: [{}, {}],
    homepage: "",
    id: "",
    in_production: "",
    languages: [],
    last_air_date: "",
    last_episode_to_air: {
      id: "",
      name: "",
      overview: "",
      vote_average: "",
      vote_count: "",
    },
    name: "",
    networks: [{}],
    next_episode_to_air: {
      id: "",
      name: "",
      overview: "",
      vote_average: "",
      vote_count: "",
    },
    number_of_episodes: "",
    number_of_seasons: "",
    origin_country: [],
    original_language: "",
    original_name: "",
    overview: "",
    popularity: "",
    poster_path: "",
    production_companies: [{}, {}],
    production_countries: [{}],
    seasons: [{}, {}],
    spoken_languages: [{}],
    status: "",
    tagline: "",
    type: "",
    vote_average: "",
    vote_count: "",
  });

  useEffect(() => {
    getCardDetails(data.mediaType, data.itemId).then((res) => {
      console.log(res.data);
      setCardDetails(res.data);
    });
  }, []);

  const baseUrl = "https://image.tmdb.org/t/p/w500";
  const data = useParams();

  return (
    <div className="container">
      <Card
        hoverable
        style={{
          width: 240,
        }}
        cover={<img alt="example" src={baseUrl + cardDetails.poster_path} />}
      >
        <Meta title={cardDetails.name} description={cardDetails.overview} />
      </Card>
    </div>
  );
};
