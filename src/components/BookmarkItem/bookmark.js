import React from "react";
import { Text, View } from "react-native";
import styles from "./styles";
import { Image } from "react-native";

const BookmarkItem = ({ day, weather, temperature }) => {
  return (
    <View style={styles.bookmarkContainer}>
      <View style={styles.column1}>
        <Text style={styles.column2.label2}>22°C</Text>

        <Text style={styles.column1.label1}>Kochi, Kerala, India</Text>
      </View>
      <View style={styles.column2}>
        <View style={styles.column1.imageConatiner}>
          <Image style={styles.column1.img} source={require("../../../assets/images/cloudy.png")} />
        </View>
      </View>
    </View>
  );
};

export default BookmarkItem;
