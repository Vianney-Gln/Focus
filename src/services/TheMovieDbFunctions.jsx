import { apiBaseUrl, imageBaseUrl } from "./TheMovieDb";

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

export const tmdbMovieCredits = async (id) => {
  const { data } = await apiBaseUrl.get(`/movie/${id}/credits`);
  let director = "";
  for (let i = 0; i < data.crew.length; i += 1) {
    if (data.crew[i].job === "Director") director = data.crew[i].original_name;
  }
  return director;
};

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

export const tmdbMovieUpcomming = async () => {
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

export const tmdbMovieInfos = async (id) => {
  try {
    const { data } = await apiBaseUrl.get(`/movie/${id}`);
    const date = data.release_date.split("-").map((d) => parseInt(d, 10));
    const dateObj = { year: date[0], month: date[1], day: date[2] };
    let len = new Date(data.runtime * 60 * 1000)
      .toISOString()
      .substr(11, 8)
      .split(":")
      .map((n) => parseInt(n, 10));
    len = {
      hours: len[0],
      minutes: len[1],
      seconds: len[2],
    };

    const resFiltered = {
      id: data.id,
      title: data.title,
      synopsis: data.overview,
      genres: data.genres.map((g) => g.name),
      duration: len,
      date: dateObj,
      author: await tmdbMovieCredits(data.id),
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
