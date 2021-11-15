import { ref, set, get, child, update, remove } from "firebase/database";
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

/**
 * Update Movies
 * @param {number} movieid Movie ID
 * @returns boolean
 */
export const updateMovie = async (movieid) => {
  try {
    const post = {
      title: "That was Edited bruda",
    };
    await update(ref(Database, `movies/movie_${movieid}`), post);
    return console.log("Normaly Updated ?");
  } catch (err) {
    console.log(err);
    return err;
  }
};

/**
 * Delete movie by is ID
 * @param {number} movieid Movie ID
 * @returns boolean
 */
export const deleteMovie = async (movieid) => {
  try {
    await remove(ref(Database, `movies/movie_${movieid}`));
    return console.log("Normaly Removed ?");
  } catch (err) {
    console.log(err);
    return err;
  }
};

/*  WIP  */

export const getListofMyList = async (userID) => {
  try {
    const snapshot = await get(child(ref(Database), `users/user_${userID}`));
    if (snapshot.exists()) {
      return snapshot.val();
    }
    return null;
  } catch (err) {
    return err;
  }
};

export const addMovieToMyList = async (userID, movieID) => {
  try {
    await set(ref(Database, `users/user_${userID}`), {
      watch: false,
      movie_id: movieID,
    });
    return console.log("Normaly Added ?");
  } catch (err) {
    console.log(err);
    return err;
  }
};

export const updateUserMyList = async (userID, movieID, watch) => {
  try {
    console.log(movieID);
    const post = {
      watch,
    };
    await update(ref(Database, `users/user_${userID}`), post);
    return console.log("Normaly Updated ?");
  } catch (err) {
    console.log(err);
    return err;
  }
};

export const removeFromMyList = async (userID, movieID) => {
  try {
    console.log(movieID);
    await remove(ref(Database, `users/user_${userID}`));
    return console.log("Normaly Removed ?");
  } catch (err) {
    console.log(err);
    return err;
  }
};
