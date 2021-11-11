import { ref, set, get, child, update } from "firebase/database";
import { realtimeDb as Database } from "./Firebase";

/**
 * Add a movie to Database
 * @param {number} id Movie ID
 * @param {string} title Movie Title
 * @param {string} image Movie Poster or Baskdrop
 * @param {string} author Movie Author / Director
 * @param {string} date Movie Release Date
 * @param {number} duration Movie Duration
 * @returns Actually nothing
 */
export const writeMovie = async (id, title, image, author, date, duration) => {
  try {
    await set(ref(Database, `movies/movie_${id}`), {
      title,
      poster: image,
      author,
      date,
      duration,
    });
    return console.log("Normaly Added ?");
  } catch (err) {
    console.log(err);
    return err;
  }
};

/**
 * GET Movie List
 * @returns Data | null
 */
export const getMovieList = async () => {
  try {
    const snapshot = await get(child(ref(Database), "movies"));
    if (snapshot.exists()) {
      return snapshot.val();
    }
    return null;
  } catch (err) {
    return err;
  }
};

export const updateMovie = async (movieid) => {
  try {
    const post = {
      title: "That was Edited bruda",
    };
    const updates = {};

    updates[`/movies/movie_${movieid}`] = post;

    await update(ref(Database), updates);

    return true;
  } catch (err) {
    console.log(err);
    return err;
  }
};
