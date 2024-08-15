import { View, Text, Button, StatusBar, Image, SafeAreaView, TextInput } from "react-native";
import styles from "./style";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <View style={styles.topRowContainer}>
          <Image
            style={styles.currentLocationIcon}
            source={require("../../../assets/images/loc-icon.png")}
          />
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
        </View>

        <View style={styles.locationContainer}>
          <View style={styles.locationRow}>
            {/* Fixed typo here */}
            <Text style={styles.locationName}>London, Onatrio, Cananda</Text>
            <Text style={{ color: "#717171" }}>Sunday 01/23</Text>
          </View>
          <View>
            <Image
              style={styles.weatherImg}
              source={require("../../../assets/images/map-img.png")}
            />
          </View>
        </View>
        <View style={styles.weatherContainer}>
          <View style={styles.column1}>
            <View style={styles.column1.imageConatiner}>
              <Image
                style={styles.column1.img}
                source={require("../../../assets/images/cloudy.png")}
              />
            </View>
            <Text style={styles.column1.weatherConditonLabel}>Heavy Rain</Text>
          </View>
          <View style={styles.column2}>
            <Text style={styles.column2.temperatureLabel}>22°C</Text>
            <Text style={styles.column2.feelslikeLabel}>Feels like 22°C</Text>
          </View>
        </View>

        <View style={styles.itemsRow}>
          <View style={styles.itemsRow.item}>
            <Image
              style={styles.itemsRow.image}
              source={require("../../../assets/images/wind.png")}
            />
            <Text style={styles.itemsRow.itemText}>6 mi/h</Text>
          </View>
          <View style={styles.itemsRow.item}>
            <Image
              style={styles.itemsRow.image}
              source={require("../../../assets/images/humidity.png")}
            />
            <Text style={styles.itemsRow.itemText}>75%</Text>
          </View>
          <View style={styles.itemsRow.item}>
            <Image
              style={styles.itemsRow.image}
              source={require("../../../assets/images/sun.png")}
            />
            <Text style={styles.itemsRow.itemText}>6 weak</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
