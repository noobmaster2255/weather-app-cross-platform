import { collection, getDocs } from "firebase/firestore";
import { db } from "./config";

const apiKey = "2eb345d2cc5549afb6030800241407";
const baseUrl = "http://api.weatherapi.com/v1/forecast.json?";

export async function load() {
    const data = [];
    const querySnapshot = await getDocs(collection(db, "bookmarks"));
    querySnapshot.forEach((doc) => {
        data.push({
            ...doc.data(),
            id: doc.id
        });
    });
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
    }catch(error){
        console.log('error ',error);
    };

}