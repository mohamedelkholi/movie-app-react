import React, { useEffect, useState } from "react";
import { getFilterTrendings, getTrendings } from "../services/trending";
import { Card } from "antd";
import { Link, useNavigate } from "react-router-dom";
const { Meta } = Card;

export const TrendingList = () => {
  const [cards, setCards] = useState([
    {
      adult: false,
      backdrop_path: "",
      genre_ids: [],
      id: null,
      media_type: "",
      original_language: "",
      original_title: "",
      overview: "",
      popularity: 0,
      poster_path: "",
      release_date: "",
      title: "",
      video: false,
      vote_average: 0,
      vote_count: 0,
    },
  ]);
  const [filterType, setFilterType] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (search === "") {
      getTrendings().then((results) => setCards(results.data.results));
    } else {
      getFilterTrendings(search).then((res) => setCards(res.data.results));
    }
  }, [search]);

  const navigate = useNavigate();
  const baseUrl = "https://image.tmdb.org/t/p/w500";

  const handleNavigate = (mediaType, itemId) => {
    navigate(`/details/${mediaType}/${itemId}`);
  };

  const renderData = () => {
    let filteredCards = cards;
    if (filterType === "tv") {
      filteredCards = cards.filter((card) => card.media_type === "tv");
    } else if (filterType === "movie") {
      filteredCards = cards.filter((card) => card.media_type === "movie");
    }

    return filteredCards.map((card, i) => (
      <Card
        onClick={() => {
          handleNavigate(card.media_type, card.id);
        }}
        key={i}
        hoverable
        style={{
          width: 240,
        }}
        cover={<img alt="example" src={baseUrl + card.poster_path} />}
      >
        <Meta
          title={card.title ? card.title : card.original_title}
          description={card.overview}
        />
      </Card>
    ));
  };

  return (
    <div className="container">
      <div className="header">
        <input
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          name=""
          id=""
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
        >
          <option value="">All</option>
          <option value="movie">Movies</option>
          <option value="tv">TV</option>
        </select>
      </div>
      {renderData()}
    </div>
  );
};
