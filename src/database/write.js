import {
  collection,
  setDoc,
  doc,
  updateDoc,
  deleteDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { db, auth } from "./config";

export async function addBookmark(data) {
  try {
    let userId = auth.currentUser.uid;
    let weatherData = data ? data : "";
    weatherData.id = `${userId}_${data.location.name}_${data.location.region}`;
    data.userId = userId;
    setDoc(doc(db, "bookmarks", `${userId}_${data.location.name}_${data.location.region}`), data);
    return true;
  } catch (error) {
    console.error(error.message);
    return null;
  }
}

export async function checkBookmarkStatus(location) {

  console.log(`${auth.currentUser.uid}_${location}`)
  return new Promise(async (resolve, reject) => {
    const q = query(
      collection(db, "bookmarks"),
      where("id", "==", `${auth.currentUser.uid}_${location}`)
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((element) => {
      resolve(true);
    });
    resolve(false);
  });
}

export async function updateBookark(id, data) {
  try {
    const taskRef = doc(db, "bookmarks", id);
    await updateDoc(taskRef, data);
    return true;
  } catch (e) {
    return false;
  }
}

export async function deleteBookmark(id) {
  try {
    await deleteDoc(doc(db, "bookmarks", id));
    return true;
  } catch (e) {
    return false;
  }
}
