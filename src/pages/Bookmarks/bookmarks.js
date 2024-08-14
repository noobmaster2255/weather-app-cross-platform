import { View, Text, Button, StatusBar } from "react-native";
import styles from "./style";

export default function BookmarkScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>Bookmarks Screen</Text>
      <Button title="Go to Profile" onPress={() => navigation.navigate("Profile")} />
    </View>
  );
}
