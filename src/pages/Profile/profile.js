import { View, Text, Button, StatusBar } from "react-native";
import styles from "./style";

export default function ProfileScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Text>Profile Screen</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
    </View>
  );
}
