import {
  View,
  Text,
  Button,
  StatusBar,
  Image,
  SafeAreaView,
  TextInput,
  ScrollView,
} from "react-native";
import styles from "./style";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as database from "../../database";
import Forecasts from "../../components/Forecasts/forecasts";
import { setHomeLocation } from "../../redux/weatherSlice";


export default function HomeScreen({ navigation }) {
  const dispatch = useDispatch();

  const [searchQuery, setSearchQuery] = useState(null);

  const data = useSelector((state) => state.weather.homeLocation)

  const handleSearchQueryChange = (value) => {
    setSearchQuery(value);
  };

  const handleSeachQuerySubmit = async (event) => {
    setSearchQuery('');
    const result = await database.getSearchWeatherDetails(event.nativeEvent.text)
      .then(res => {
        return res
      });
    dispatch(setHomeLocation(result));
  }

  if (data) {
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
                value={searchQuery}
                onChangeText={handleSearchQueryChange}
                onSubmitEditing={handleSeachQuerySubmit}

              />
            </View>
          </View>
          <ScrollView contentContainerStyle={styles.contentContainer} showsVerticalScrollIndicator={false}>
            <View style={styles.locationContainer}>
              <View style={styles.locationRow}>
                {/* Fixed typo here */}
                <Text style={styles.locationName}>{data.location.name}, {data.location.region}</Text>
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
                    source={{ uri: `https:${data.current.condition.icon}` }}
                    resizeMode="contain"
                  />
                </View>
                <Text style={styles.column1.weatherConditonLabel}>{data.current.condition.text}</Text>
              </View>
              <View style={styles.column2}>
                <Text style={styles.column2.temperatureLabel}>{data.current.temp_c}°C</Text>
                <Text style={styles.column2.feelslikeLabel}>Feels Like {data.current.feelslike_c}°C</Text>
              </View>
            </View>

            <View style={styles.itemsRow}>
              <View style={styles.itemsRow.item}>
                <Image
                  style={styles.itemsRow.image}
                  source={require("../../../assets/images/wind.png")}
                />
                <Text style={styles.itemsRow.itemText}>{data.current.wind_mph} mi/h</Text>
              </View>
              <View style={styles.itemsRow.item}>
                <Image
                  style={styles.itemsRow.image}
                  source={require("../../../assets/images/humidity.png")}
                />
                <Text style={styles.itemsRow.itemText}>{data.current.humidity}%</Text>
              </View>
              <View style={styles.itemsRow.item}>
                <Image
                  style={styles.itemsRow.image}
                  source={require("../../../assets/images/sun.png")}
                />
                <Text style={styles.itemsRow.itemText}>{data.current.uv}</Text>
              </View>
            </View>
            <Forecasts />
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  } else {
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

                value={searchQuery}
                onChangeText={handleSearchQueryChange}
                onSubmitEditing={handleSeachQuerySubmit}

              />
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }

}
