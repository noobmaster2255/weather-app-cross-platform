import { useEffect } from "react";
import * as SplashScreen from 'expo-splash-screen'
import * as database from '../../database'
import { useDispatch } from 'react-redux'
import { setHomeLocation } from "../../redux/weatherSlice";

 export default function AppLoader() {
    const dispatch = useDispatch();
    useEffect(() => {
        
        (async () => {
            const result = await database.getSearchWeatherDetails("London, ON");
            dispatch(setHomeLocation(result));
        }) ();
        
        SplashScreen.hideAsync();
        
      }, []);
    
 }