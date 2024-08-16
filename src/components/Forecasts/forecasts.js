import React from "react";
import { Text, View } from "react-native";
import styles from "./styles";
import Forecast from "./Forecast/forecast";
import { useSelector, useDispatch } from "react-redux";

const Forecasts = () => {

  const data = useSelector((state) => state.weather.homeLocation)
  const fcasts = data.forecast.forecastday;

  return (
    <View style={styles.forecastContainer}>
      <Text style={styles.forecatTitle}>Forecast</Text>
      <Forecast style={styles.rowForecast} forecastDay={data.forecast.forecastday[0]} index = {0} />
      <Forecast style={styles.rowForecast} forecastDay={data.forecast.forecastday[1]} index = {1} />
      <Forecast style={styles.rowForecast} forecastDay={data.forecast.forecastday[2]} index = {2} />
    </View>
  );
};

export default Forecasts;
