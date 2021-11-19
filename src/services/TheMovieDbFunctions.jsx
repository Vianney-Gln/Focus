import { apiBaseUrl, imageBaseUrl } from "./TheMovieDb";

/**
 * Give you the trailer of the movie by its ID
 * @param {number} id ID of the movie
 * @returns Link of the trailer
 */
export const tmdbMovieVideos = async (id) => {
  const { data } = await apiBaseUrl.get(`/movie/${id}/videos`);
  let trailer = null;
  for (let i = 0; i < data.results.length; i += 1) {
    if (
      data.results[i].type === "Trailer" &&
      data.results[i].site === "YouTube"
    ) {
      trailer = `https://www.youtube.com/watch?v=${data.results[i].key}`;
      if (data.results[i].offical) break;
    }
  }
  return trailer;
};

/**
 * Give you the director of the movie by its ID
 * @param {number} id ID of the movie
 * @returns Director of the movie
 */
export const tmdbMovieCredits = async (id) => {
  const { data } = await apiBaseUrl.get(`/movie/${id}/credits`);
  let director = "";
  for (let i = 0; i < data.crew.length; i += 1) {
    if (data.crew[i].job === "Director") director = data.crew[i].original_name;
  }
  return director;
};

/**
 * Give you the list of providers of the movie by its ID
 * @param {number} id ID of the movie
 * @returns Providers list of the movie
 */
export const tmdbMovieProviders = async (id) => {
  const { data } = await apiBaseUrl.get(`/movie/${id}/watch/providers`);
  if (Object.keys(data.results).length === 0) return null;
  if (!Object.prototype.hasOwnProperty.call(data.results, "US")) return null;
  const providesObj = data.results.US;
  let rent = null;
  let buy = null;
  let flaterate = null;
  if (Object.prototype.hasOwnProperty.call(providesObj, "rent"))
    rent = providesObj.rent.map((p) => ({
      img: imageBaseUrl(p.logo_path, 200),
      providers: p.provider_name,
    }));
  if (Object.prototype.hasOwnProperty.call(providesObj, "buy"))
    buy = providesObj.buy.map((p) => ({
      img: imageBaseUrl(p.logo_path, 200),
      providers: p.provider_name,
    }));
  if (Object.prototype.hasOwnProperty.call(providesObj, "flaterate"))
    flaterate = providesObj.flaterate.map((p) => ({
      img: imageBaseUrl(p.logo_path, 200),
      providers: p.provider_name,
    }));
  let pros = [...(rent || []), ...(buy || []), ...(flaterate || [])];
  pros = pros.filter(
    (v, i, a) =>
      a.findIndex((t) => t.img === v.img && t.providers === v.providers) === i
  );
  return pros;
};

/**
 * Fetch API and give you the 20 upcoming movies
 * @returns Array of 20 upcoming movies
 */
export const tmdbMovieUpcoming = async () => {
  const { data } = await apiBaseUrl.get("/movie/upcoming", {
    params: {
      region: "US",
    },
  });
  const formatedArray = [];
  for (let i = 0; i < data.results.length; i += 1) {
    const resFiltered = {
      id: data.results[i].id,
      title: data.results[i].title,
      image: imageBaseUrl(
        data.results[i].backdrop_path
          ? data.results[i].backdrop_path
          : data.results[i].poster_path,
        500
      ),
    };
    formatedArray.push(resFiltered);
  }
  return formatedArray;
};

/**
 * Fetch API and give you the 20 popular movies
 * @returns Array of 20 popular movies
 */
export const tmdbMoviePopular = async () => {
  const { data } = await apiBaseUrl.get("/movie/popular", {
    params: {
      region: "US",
    },
  });
  const formatedArray = [];
  for (let i = 0; i < data.results.length; i += 1) {
    const resFiltered = {
      id: data.results[i].id,
      title: data.results[i].title,
      image: imageBaseUrl(
        data.results[i].backdrop_path
          ? data.results[i].backdrop_path
          : data.results[i].poster_path,
        500
      ),
    };
    formatedArray.push(resFiltered);
  }
  return formatedArray;
};

/**
 * Fetch API and give you the 20 now playing movies (Release in cinema)
 * @returns Array of 20 now playing movies (Release in cinema)
 */
export const tmdbMovieNowPlaying = async () => {
  const { data } = await apiBaseUrl.get("/movie/now_playing", {
    params: {
      region: "US",
    },
  });
  const formatedArray = [];
  for (let i = 0; i < data.results.length; i += 1) {
    const resFiltered = {
      id: data.results[i].id,
      title: data.results[i].title,
      image: imageBaseUrl(
        data.results[i].backdrop_path
          ? data.results[i].backdrop_path
          : data.results[i].poster_path,
        500
      ),
    };
    formatedArray.push(resFiltered);
  }
  return formatedArray;
};

/**
 * Send multiple request to get all informations that we want
 * @param {number} id The ID of the movie
 * @returns full data of the movie
 */
export const tmdbMovieInfos = async (id) => {
  try {
    const { data } = await apiBaseUrl.get(`/movie/${id}`);
    const date = data.release_date.split("-").map((d) => parseInt(d, 10));
    const dateObj = {
      year: date[0],
      month: date[1],
      day: date[2],
      base: data.release_date,
    };
    let len = new Date(data.runtime * 60 * 1000)
      .toISOString()
      .substr(11, 8)
      .split(":")
      .map((n) => parseInt(n, 10));
    len = {
      hours: len[0],
      minutes: len[1],
      seconds: len[2],
      base: data.runtime,
    };

    const resFiltered = {
      id: data.id,
      title: data.title || "Not defined",
      synopsis: data.overview || "Not defined",
      genres: data.genres.map((g) => g.name) || ["Not defined"],
      duration: data.runtime ? len : null,
      date: dateObj || "Not defined",
      author: (await tmdbMovieCredits(data.id)) || "Not defined",
      providers: await tmdbMovieProviders(data.id),
      trailer: await tmdbMovieVideos(data.id),
      poster: imageBaseUrl(
        data.poster_path ? data.poster_path : data.backdrop_path
      ),
      background: imageBaseUrl(
        data.backdrop_path ? data.backdrop_path : data.poster_path
      ),
    };
    return resFiltered;
  } catch (error) {
    return error;
  }
};

/**
 * Perform a Search within API with the query
 * @param {string} query Search query
 * @returns Array of Movies Object
 */
export const tmdbSearchMovies = async (query) => {
  try {
    const { data } = await apiBaseUrl.get(`/search/movie`, {
      params: {
        region: "US",
        query,
      },
    });
    const { results } = data;
    const datas = [];
    for (let i = 0; i < results.length; i += 1) {
      datas.push({
        id: results[i].id,
        title: results[i].title,
        image: imageBaseUrl(
          results[i].poster_path
            ? results[i].poster_path
            : results[i].backdrop_path
        ),
      });
    }
    return datas;
  } catch (err) {
    return err;
  }
};

const randomArr = (arr, nb) => {
  const selectedValue = [];
  const selectedIndex = [];
  while (selectedIndex.length + 1 <= nb) {
    const value = arr[Math.floor(Math.random() * arr.length)];
    const index = arr.indexOf(value);
    if (!selectedIndex.includes(index)) {
      selectedIndex.push(index);
      selectedValue.push(value);
    }
  }
  return selectedValue;
};

export const suggestionFetch = async () => {
  const listUpcoming = await tmdbMovieUpcoming();
  const listPopular = await tmdbMoviePopular();
  const listNowPlaying = await tmdbMovieNowPlaying();
  const filteredUpcoming = randomArr(listUpcoming, 3);
  const filteredPopular = randomArr(listPopular, 3);
  const filteredNowPlaying = randomArr(listNowPlaying, 3);

  let fullUpcoming = [];
  filteredUpcoming.forEach((value) => {
    fullUpcoming.push(tmdbMovieInfos(value.id));
  });
  let fullPopular = [];
  filteredPopular.forEach((value) => {
    fullPopular.push(tmdbMovieInfos(value.id));
  });
  let fullNowPlaying = [];
  filteredNowPlaying.forEach((value) => {
    fullNowPlaying.push(tmdbMovieInfos(value.id));
  });
  fullUpcoming = await Promise.all(fullUpcoming);
  fullPopular = await Promise.all(fullPopular);
  fullNowPlaying = await Promise.all(fullNowPlaying);
  return {
    upcoming: fullUpcoming,
    popular: fullPopular,
    nowplaying: fullNowPlaying,
  };
};
