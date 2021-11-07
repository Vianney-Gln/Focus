import axios from "axios";

/**
 * Create a full path for the semi-url passed by the API
 * @param {string} url Url from API
 * @param {number} width Number of your choice
 * @returns full formated url
 */
export const imageBaseUrl = (url, width) => {
  if (url == null) return null;
  let w = "original";
  if (width) w = `w${width}`;
  return `https://image.tmdb.org/t/p/${w}${url}`;
};

/**
 * Axios Base for the API, Request all URL from this
 */
export const apiBaseUrl = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: process.env.REACT_APP_THE_MOVIE_DB_TOKEN,
    language: "en-US",
  },
});

/**
 * Transform the Genre ID in Genre text
 * @param {number} id API genre ID
 * @returns Representation in Text of the ID
 */
export const idToGenre = (id) => {
  const genre = [
    {
      id: 28,
      name: "Action",
      type: "movie",
    },
    {
      id: 12,
      name: "Adventure",
      type: "movie",
    },
    {
      id: 16,
      name: "Animation",
      type: "movie",
    },
    {
      id: 35,
      name: "Comedy",
      type: "movie",
    },
    {
      id: 80,
      name: "Crime",
      type: "movie",
    },
    {
      id: 99,
      name: "Documentary",
      type: "movie",
    },
    {
      id: 18,
      name: "Drama",
      type: "movie",
    },
    {
      id: 10751,
      name: "Family",
      type: "movie",
    },
    {
      id: 14,
      name: "Fantasy",
      type: "movie",
    },
    {
      id: 36,
      name: "History",
      type: "movie",
    },
    {
      id: 27,
      name: "Horror",
      type: "movie",
    },
    {
      id: 10402,
      name: "Music",
      type: "movie",
    },
    {
      id: 9648,
      name: "Mystery",
      type: "movie",
    },
    {
      id: 10749,
      name: "Romance",
      type: "movie",
    },
    {
      id: 878,
      name: "Science Fiction",
      type: "movie",
    },
    {
      id: 10770,
      name: "TV Movie",
      type: "movie",
    },
    {
      id: 53,
      name: "Thriller",
      type: "movie",
    },
    {
      id: 10752,
      name: "War",
      type: "movie",
    },
    {
      id: 37,
      name: "Western",
      type: "movie",
    },
    {
      id: 10759,
      name: "Action & Adventure",
      type: "serie",
    },
    {
      id: 16,
      name: "Animation",
      type: "serie",
    },
    {
      id: 35,
      name: "Comedy",
      type: "serie",
    },
    {
      id: 80,
      name: "Crime",
      type: "serie",
    },
    {
      id: 99,
      name: "Documentary",
      type: "serie",
    },
    {
      id: 18,
      name: "Drama",
      type: "serie",
    },
    {
      id: 10751,
      name: "Family",
      type: "serie",
    },
    {
      id: 10762,
      name: "Kids",
      type: "serie",
    },
    {
      id: 9648,
      name: "Mystery",
      type: "serie",
    },
    {
      id: 10763,
      name: "News",
      type: "serie",
    },
    {
      id: 10764,
      name: "Reality",
      type: "serie",
    },
    {
      id: 10765,
      name: "Sci-Fi & Fantasy",
      type: "serie",
    },
    {
      id: 10766,
      name: "Soap",
      type: "serie",
    },
    {
      id: 10767,
      name: "Talk",
      type: "serie",
    },
    {
      id: 10768,
      name: "War & Politics",
      type: "serie",
    },
    {
      id: 37,
      name: "Western",
      type: "serie",
    },
  ];
  const match = genre.filter((g) => g.id === parseInt(id, 10));
  if (match.length > 0) {
    return match;
  }
  return "";
};
