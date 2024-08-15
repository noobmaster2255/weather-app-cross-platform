import { View, Text, Button, StatusBar, SafeAreaView, ScrollView, Image } from "react-native";
import styles from "./style";

export default function ProfileScreen({ navigation }) {
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
          
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
