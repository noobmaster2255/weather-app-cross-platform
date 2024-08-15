import { collection, getDocs } from "firebase/firestore";
import { db } from "./config";


export async function load() {
    console.log('database load');
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