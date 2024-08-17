import { View, Text, Button, StatusBar, SafeAreaView, ScrollView, Image } from "react-native";
import styles from "./style";
import BookmarkItem from "../../components/BookmarkItem/bookmark";
import { useCallback, useEffect, useState } from "react";
import * as database from "../../database";
import Toast from "react-native-toast-message";
import { useFocusEffect } from "@react-navigation/native";

export default function BookmarkScreen({ navigation }) {
  const [data, setData] = useState([]);

  useFocusEffect(
    useCallback(() => {
      const fetchData = async () => {
        try {
          const result = await database.load();
          setData(result);
        } catch (error) {
          console.error("Error loading data:", error.message);
        }
      };
  
      fetchData();
    }, [])
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <View style={styles.toastContainer}>
            <Toast />
          </View>
        <Text style={styles.titile}>Saved Locations</Text>
        <ScrollView
          contentContainerStyle={styles.contentContainer}
          showsVerticalScrollIndicator={false}
        >
          {/* saved location container  */}
          {data.length > 0 ? (
            data.map((item) => (
              <BookmarkItem
                key={item.id}
                temperature={item.current.temp_c}
                location={`${item.location.name}, ${item.location.region}`}
                img={item.current.condition.icon}
              />
            ))
          ) : (
            <Text>No bookmarks available</Text>
          )}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
