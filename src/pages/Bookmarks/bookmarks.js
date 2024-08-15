import { View, Text, Button, StatusBar, SafeAreaView, ScrollView, Image } from "react-native";
import styles from "./style";
import BookmarkItem from "../../components/BookmarkItem/bookmark";

export default function BookmarkScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Text style={styles.titile}>Saved Locations</Text>
        <ScrollView contentContainerStyle={styles.contentContainer}>
          {/* saved location container  */}
          <BookmarkItem/>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
