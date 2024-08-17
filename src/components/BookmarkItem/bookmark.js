import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import styles from "./styles";
import { Image } from "react-native";
import * as database from "../../database";

const BookmarkItem = ({ temperature, location, img }) => {
  return (
    <View style={styles.bookmarkContainer}>
      <View style={styles.column1}>
        <Text style={styles.column2.label2}>{temperature}°C</Text>
        <Text style={styles.column1.label1}>{location}</Text>
      </View>
      <View style={styles.column2}>
        <View style={styles.column1.imageConatiner}>
          <Image style={styles.column1.img} source={{ uri: `https:${img}` }} />
        </View>
      </View>
    </View>
  );
};

export default BookmarkItem;
