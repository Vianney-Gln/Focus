import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  deleteUser as removeUser,
  reauthenticateWithCredential as reauth,
  updatePassword,
  onAuthStateChanged as onAuthStateChangedNoPromise,
} from "firebase/auth";

import { auth } from "./Firebase";

/**
 * Adds an observer for changes to the user's sign-in state
 * @param {Auth} Auth Auth
 * @param {*} nextOrObserver Observer or null
 * @returns user
 * @error return error
 */
const onAuthStateChanged = (theauth, nextOrObserver = null) =>
  new Promise((resolve, reject) => {
    const handleError = (err) => {
      reject(err);
    };
    const handleCompleted = (user) => {
      resolve(user);
    };
    if (nextOrObserver) {
      onAuthStateChangedNoPromise(
        theauth,
        nextOrObserver,
        handleError,
        handleCompleted
      );
    } else {
      onAuthStateChangedNoPromise(theauth, handleError, handleCompleted);
    }
  });

/**
 * Register a new user and automaticly login it, Promise Function
 * @param {string} mail Email of User
 * @param {string} password Password of user
 * @returns UserCredential Promise
 */
const createUser = async (mail, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      mail,
      password
    );
    return userCredential;
  } catch (err) {
    return err;
  }
};

/**
 * Connect an User, Promise Function
 * @param {string} mail Email of User
 * @param {string} password Password of User
 * @returns UserCredential
 */
const loginUser = async (mail, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      mail,
      password
    );
    return userCredential;
  } catch (err) {
    return err;
  }
};

/**
 * Disconnect an User, Promise Function
 * @returns true | err
 */
const logoutUser = async () => {
  try {
    await signOut(auth);
    return true;
  } catch (err) {
    return err;
  }
};

/**
 * Delete the current user in Database
 * @returns boolean
 */
const deleteUser = async () => {
  try {
    const { currentUser } = auth;
    await removeUser(currentUser);
    return true;
  } catch (err) {
    return err;
  }
};

/**
 * Re-login user
 * @param {object} newUserCredential User Credential
 * @returns new User Credential
 */
const reloginUser = async (newUserCredential) => {
  try {
    const { currentUser } = auth;
    const UpdatedUserCredential = await reauth(currentUser, newUserCredential);
    return UpdatedUserCredential;
  } catch (err) {
    return err;
  }
};

/**
 * Update the password of the current user
 * @param {string} newPassword the new password
 * @returns boolean
 */
const updateUserPassword = async (newPassword) => {
  try {
    const { currentUser } = auth;
    await updatePassword(currentUser, newPassword);
    return true;
  } catch (err) {
    return err;
  }
};

/**
 * Check if user is logged or not
 * @returns currentUser or false
 */
const getLoggedUser = async () => {
  try {
    const currentUser = await onAuthStateChanged(auth);
    if (currentUser) {
      return currentUser;
    }
    return false;
  } catch (err) {
    return err;
  }
};

export {
  createUser,
  loginUser,
  logoutUser,
  deleteUser,
  reloginUser,
  updateUserPassword,
  getLoggedUser,
};
