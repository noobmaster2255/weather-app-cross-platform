import { useEffect } from "react";
import * as SplashScreen from 'expo-splash-screen'
import * as database from '../../database'
import { useDispatch } from 'react-redux'
import { setHomeLocation } from "../../redux/weatherSlice";
import * as Location from "expo-location";

export default function AppLoader() {
    const dispatch = useDispatch();
    useEffect(() => {

        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== "granted") {
                const result = await database.getSearchWeatherDetails("London, ON");
                dispatch(setHomeLocation(result));
                SplashScreen.hideAsync();
            } else {
                let location = await Location.getCurrentPositionAsync({});
                const result = await database.getSearchWeatherDetails(`${location.coords.latitude},${location.coords.longitude}`);
                dispatch(setHomeLocation(result));
                SplashScreen.hideAsync();
            }
        })();



    }, []);

}