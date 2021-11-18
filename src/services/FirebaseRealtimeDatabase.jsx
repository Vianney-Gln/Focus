import { ref, set, get, child, update, remove } from "firebase/database";
import { realtimeDb as Database } from "./Firebase";

/**
 * Add a movie to Database
 * @param {object} data {data, poster, author, date, duration}
 * @param {number} id Movie ID
 * @returns Actually nothing
 */
export const addMovie = async (id, data) => {
  try {
    await set(ref(Database, `movies/${id}`), data);
    return true;
  } catch (err) {
    return false;
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
 * GET Movie List
 * @returns Data | null
 */
export const getMovieListByID = async (movieID) => {
  try {
    const snapshot = await get(child(ref(Database), `movies/${movieID}`));
    if (snapshot.exists()) {
      return true;
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
export const updateMovie = async (movieid, post) => {
  try {
    await update(ref(Database, `movies/${movieid}`), post);
    return true;
  } catch (err) {
    return false;
  }
};

/**
 * Delete movie by is ID
 * @param {number} movieid Movie ID
 * @returns boolean
 */
export const deleteMovie = async (movieid) => {
  try {
    await remove(ref(Database, `movies/${movieid}`));
    return true;
  } catch (err) {
    return false;
  }
};

/*  WIP  */

export const getListofMyList = async (userID) => {
  try {
    const snapshot = await get(child(ref(Database), `movies`));
    if (snapshot.exists()) {
      const res = [];
      snapshot.forEach((snap) => {
        const val = snap.val();
        // look if val has a key USERID
        if (Object.prototype.hasOwnProperty.call(val, userID)) {
          val.id = parseInt(snap.key, 10);
          // Rename USERID to "user" as a key (short anwser)
          delete Object.assign(val, { user: val[userID] })[userID];
          res.push(val);
        }
      });
      return res;
    }
    return null;
  } catch (err) {
    return err;
  }
};
export const getMovieofMyList = async (userID, movieID) => {
  try {
    const snapshot = await get(child(ref(Database), `movies/${movieID}`));
    if (snapshot.exists()) {
      const val = snapshot.val();
      if (Object.prototype.hasOwnProperty.call(val, userID)) {
        val.id = movieID;
        // Rename USERID to "user" as a key (short anwser)
        delete Object.assign(val, { user: val[userID] })[userID];
        return val;
      }
    }
    return null;
  } catch (err) {
    return err;
  }
};

export const addMovieToMyList = async (userID, movieID, rating = null) => {
  try {
    await set(ref(Database, `movies/${movieID}/${userID}`), {
      watch: false,
      rating,
    });
    return true;
  } catch (err) {
    return false;
  }
};

export const updateUserMyList = async (userID, movieID, data) => {
  try {
    await update(ref(Database, `movies/${movieID}/${userID}`), data);
    return true;
  } catch (err) {
    return false;
  }
};

export const removeFromMyList = async (userID, movieID) => {
  try {
    await remove(ref(Database, `movies/${movieID}/${userID}`));
    return true;
  } catch (err) {
    return false;
  }
};
