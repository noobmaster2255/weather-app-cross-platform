import {
  View,
  Text,
  Button,
  StatusBar,
  SafeAreaView,
  ScrollView,
  Image,
  Switch,
  Pressable,
} from "react-native";
import styles from "./style";
import { useState } from "react";

export default function ProfileScreen({ navigation }) {
  const [isEnabled, setIsEnabled] = useState(false);
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Text style={styles.titile}>Profile</Text>
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <View style={styles.profileIcon}>
            <Image
              style={styles.profileImg}
              source={require("../../../assets/images/profile-icon.png")}
            />
          </View>
          <View>
            <Text style={styles.profileName}>NoobMaster</Text>
            <Text style={styles.profileEmail}>noobmaster@gmail.com</Text>
          </View>
          <View style={styles.notificationContainer}>
            <Text style={styles.notificationLabel}>Notifications</Text>
            <Switch
              trackColor={{ false: "#deebfe", true: "#375f96" }}
              thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
              ios_backgroundColor="#deebfe"
              onValueChange={setIsEnabled}
              value={isEnabled}
            />
          </View>
          {/* <View> */}
            <Pressable style={styles.btn} onPress={() => console.log("Pressed")}>
              <Text style={styles.buttonText}>Logout</Text>
            </Pressable>
          {/* </View> */}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
