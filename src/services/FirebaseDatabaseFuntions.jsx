// Firebase
import {
  collection,
  getDocs,
  addDoc,
  doc,
  updateDoc,
  deleteDoc,
  query,
  orderBy,
} from "firebase/firestore";
import { db } from "./Firebase";

const myListCollection = collection(db, "mylist");

/**
 * Perform a GET to the Database
 * @returns array of data
 */
const getIntoDb = async () => {
  const q = query(myListCollection, orderBy("item_id", "asc"));
  const data = await getDocs(q);
  return data.docs.map((queryDoc) => ({ ...queryDoc.data(), id: queryDoc.id }));
};

/**
 * Perform a POST to the Database
 * @param {object} newData New data
 * @returns Boolean
 */
const postIntoDb = async (newData) => {
  try {
    await addDoc(myListCollection, newData);
    return true;
  } catch (error) {
    return false;
  }
};

/**
 * Update Data in the Database
 * @param {number} updatedId The ID for the data to update
 * @param {object} newData The new data
 */
const updateIntoDb = async (updatedId, newData) => {
  const updateCollectionRef = doc(db, "mylist", updatedId);
  await updateDoc(updateCollectionRef, newData);
};

/**
 * Remove data in Database
 * @param {number} elementId The ID of the data
 */
const deleteIntoDb = async (elementId) => {
  const userDoc = doc(db, "mylist", elementId);
  await deleteDoc(userDoc);
};

export { getIntoDb, postIntoDb, updateIntoDb, deleteIntoDb };
