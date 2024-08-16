import React from "react";
import { Text, View } from "react-native";
import styles from "./style.js";

const Forecast = ({ forecastDay, index }) => {
  // console.log('fday: ', forecastDay);
  // console.log('index: ', index);
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let day = "Tomorrow";
  //if(index > 1){
  const date = new Date(forecastDay.date);
  day = daysOfWeek[date.getUTCDay()];
  // console.log('date: ',forecastDay.date, date.getUTCDay(), day);
  //}
  return (
    <View style={styles.rowForecast}>
      <Text style={styles.forecastLabel}>{day}</Text>
      <View style={{ width: 100 }}>
        <Text ellipsizeMode="tail" style={styles.forecastLabel}>
          {forecastDay.day.condition.text}
        </Text>
      </View>
      <Text style={styles.forecastLabel}>{forecastDay.day.avgtemp_c}°C</Text>
    </View>
  );
};

export default Forecast;
