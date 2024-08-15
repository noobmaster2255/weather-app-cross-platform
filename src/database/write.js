import { collection, setDoc, doc, updateDoc, deleteDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { db } from "./config";

export async function getWeatherDetails(params) {
    const apiUrlStr = `${baseUrl}key=${apiKey}&q=${params.query}&days=3&aqi=no&alerts=no`;

    fetch(apiUrlStr)
        .then((response) => { 
            return response.json() 
        });

}

export async function addBookmark(data) {
    try {
        const docRef = await setDoc(collection(db, "bookmarks"), data);
        return docRef.id

    } catch (e) {
        return null
    }
}

export async function updateBookark(id, data) {
    try {
        const taskRef = doc(db, "bookmarks", id);
        await updateDoc(taskRef, data);
        return true
    } catch (e) {
        return false
    }
}

export async function deleteBookmark(id) {
    try {
        await deleteDoc(doc(db, "bookmarks", id));
        return true;
    } catch (e) {
        return false
    }
}