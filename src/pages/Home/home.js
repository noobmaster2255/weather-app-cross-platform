import { View, Text, Button, StatusBar, Image, SafeAreaView, TextInput } from "react-native";
import styles from "./style";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <View style={styles.searchContainer}>
          <Ionicons name="search" size={26} color="gray" style={styles.searchIcon} />
          <TextInput
            style={styles.searchBar}
            placeholder="Search..."
            clearButtonMode="always"
            autoCorrect={false}
            autoCapitalize="none"
          />
        </View>
        <View style={styles.weatherContainer}>
          <View style={styles.locationContainer}>
            {/* Fixed typo here */}
            <Text>Location Name</Text>
            <Text>Sunday 01/23</Text>
          </View>
          <View>
            <Image
              style={styles.weatherImg}
              source={require("../../../assets/images/cloudy.png")}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
