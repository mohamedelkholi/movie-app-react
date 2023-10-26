import axios from "axios";

export const getTrendings = () => {
  return axios.get(
    "https://api.themoviedb.org/3/trending/all/day?api_key=14bdd69ce887376edfafb09f23f78fe9"
  );
};

export const getFilterTrendings = (keyWord) => {
  return axios.get(
    `https://api.themoviedb.org/3/search/multi?api_key=14bdd69ce887376edfafb09f23f78fe9&query=${keyWord}`
  );
};
export const getCardDetails = (mediaType, id) => {
  return axios.get(
    `https://api.themoviedb.org/3/${mediaType}/${id}?api_key=14bdd69ce887376edfafb09f23f78fe9`
  );
};
