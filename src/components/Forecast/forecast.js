import React from "react";
import { Text, View } from "react-native";
import styles from "./styles";

const ForecastItem = ({ day, weather, temperature }) => {
  return (
    <View style={styles.forecastContainer}>
    <Text style={styles.forecatTitle}>Forecast</Text>
    <View style={styles.rowForecast}>
      <Text style={styles.forecastLabel}>Tommorow</Text>
      <Text style={styles.forecastLabel}>Sunny</Text>
      <Text style={styles.forecastLabel}>23°C</Text>
    </View>
      
    </View>
    
  );
};

export default ForecastItem;
