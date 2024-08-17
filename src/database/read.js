import { collection, getDocs, query, where } from "firebase/firestore";
import { auth, db } from "./config";
import showToast from "../components/ToastItem/ToastItem";

const apiKey = "2eb345d2cc5549afb6030800241407";
const baseUrl = "http://api.weatherapi.com/v1/forecast.json?";

export async function load() {
  const data = [];
  if (auth.currentUser) {
    const querySnapshot = await getDocs(
      query(collection(db, "bookmarks"), where("userId", "==", auth.currentUser.uid))
    );

    for (const doc of querySnapshot.docs) {
      const bookmarkData = doc.data();
      const weatherDetails = await getSearchWeatherDetails(bookmarkData.location.name);
      data.push({
        id: doc.id,
       ...weatherDetails
      })

    }
  } else {
    showToast("info", "Login to see bookmarks")
  }

  return data;
}

export async function getSearchWeatherDetails(query) {
  const apiUrlStr = `${baseUrl}key=${apiKey}&q=${query}&days=3&aqi=no&alerts=no`;

  try {
    const response = await fetch(apiUrlStr);
    // console.log('res ',response);
    const json = await response.json();
    //  console.log('json ',json);
    return json;
  } catch (error) {
    console.log("error ", error);
    return null;
  }
}
