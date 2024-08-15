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
import ForecastItem from "../../components/Forecast/forecast";

export default function HomeScreen({ navigation }) {
  const dispatch = useDispatch();

  const [searchQuery, setSearchQuery] = useState(null);
  const [weatherDetails, setWeatherDetails] = useState(null);
  const [locationDate, setLocationDate] = useState('');
  const [locationName, setLocationName] = useState('');
  const [locationTemp, setLocationTemp] = useState('');
  const [locationFeelsLikeTemp, setLocationFeelsLikeTemp] = useState('');
  const [locationConditionText, setLocationConditionText] = useState('');
  const [locationConditionUrl, setLocationConditionUrl] = useState(null);
  const [wind, setWind] = useState('');
  const [humidity, setHumidity] = useState('');
  const [uv, setUv] = useState('');

  const handleSearchQueryChange = (value) => {
    setSearchQuery(value);
  }

  const handleSeachQuerySubmit = (event) => {
    console.log('Submitted text:', event.nativeEvent.text);
    setSearchQuery('');
    database.getSearchWeatherDetails(event.nativeEvent.text)
      .then(res => {
        console.log('Resposen: ', res)
        setLocationName(`${res.location.name}, ${res.location.region}`);
        setLocationTemp(`${res.current.temp_c}°C`);
        setLocationFeelsLikeTemp(`Feels Like ${res.current.feelslike_c}°C`);
        setLocationConditionText(res.current.condition.text);
        const url = res.current.condition.icon.replace("64x64", "128x128")

        setLocationConditionUrl(url);
        setWind(`${res.current.wind_mph} mi/h`);
        setHumidity(`${res.current.humidity}%`);
        setUv(res.current.uv);
        setWeatherDetails(res);

      });
  }

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
              onSubmitEditing={handleSeachQuerySubmit}

            />
          </View>
        </View>
        <ScrollView contentContainerStyle={styles.contentContainer} showsVerticalScrollIndicator={false}>
          <View style={styles.locationContainer}>
            <View style={styles.locationRow}>
              {/* Fixed typo here */}
              <Text style={styles.locationName}>{locationName}</Text>
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
                  source={{ uri: `https:${locationConditionUrl}` }}
                  resizeMode="contain"
                />
              </View>
              <Text style={styles.column1.weatherConditonLabel}>{locationConditionText}</Text>
            </View>
            <View style={styles.column2}>
              <Text style={styles.column2.temperatureLabel}>{locationTemp}</Text>
              <Text style={styles.column2.feelslikeLabel}>{locationFeelsLikeTemp}</Text>
            </View>
          </View>

          <View style={styles.itemsRow}>
            <View style={styles.itemsRow.item}>
              <Image
                style={styles.itemsRow.image}
                source={require("../../../assets/images/wind.png")}
              />
              <Text style={styles.itemsRow.itemText}>{wind}</Text>
            </View>
            <View style={styles.itemsRow.item}>
              <Image
                style={styles.itemsRow.image}
                source={require("../../../assets/images/humidity.png")}
              />
              <Text style={styles.itemsRow.itemText}>{humidity}</Text>
            </View>
            <View style={styles.itemsRow.item}>
              <Image
                style={styles.itemsRow.image}
                source={require("../../../assets/images/sun.png")}
              />
              <Text style={styles.itemsRow.itemText}>{uv}</Text>
            </View>
          </View>
          <ForecastItem />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
