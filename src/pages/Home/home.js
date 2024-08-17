import {
  View,
  Text,
  Button,
  StatusBar,
  Image,
  SafeAreaView,
  TextInput,
  ScrollView,
  Pressable, Alert, Linking, Platform
} from "react-native";
import styles from "./style";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as database from "../../database";
import Forecasts from "../../components/Forecasts/forecasts";
import { setHomeLocation } from "../../redux/weatherSlice";
import * as Location from "expo-location";
import Toast from "react-native-toast-message";
import showToast from "../../components/ToastItem/ToastItem";
import { auth } from "../../database/config";

export default function HomeScreen({ navigation }) {
  const dispatch = useDispatch();

  const [searchQuery, setSearchQuery] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [isBookmarkAdded, setBookMarkAdded] = useState(false);
  const data = useSelector((state) => state.weather.homeLocation);

  const handleSearchQueryChange = (value) => {
    setSearchQuery(value);
  };

  const handleBookmarkClick = () => {
    if (auth.currentUser) {
      const isAdded = database.addBookmark(data);
      if (isAdded) {
        setBookMarkAdded(true);
        showToast("success", "BookedMark added successfully!");
      }
    }
    else{
      showToast("info","Login to add to bookmark")
    }
  };

  const handleSeachQuerySubmit = async (event) => {
    setSearchQuery("");
    getWeatherDetails(event.nativeEvent.text);
  };

  const getWeatherDetails = async (query) => {
    console.log("query: ", query);
    const result = await database.getSearchWeatherDetails(query).then((res) => {
      return res;
    });
    dispatch(setHomeLocation(result));
  };

  const handleLocationWeather = async () => {
    console.log('location weather');
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      createLocationPermissionAlert();
    } else {
      let location = await Location.getCurrentPositionAsync({});
      getWeatherDetails(`${location.coords.latitude},${location.coords.longitude}`);
    }
  };

  const createLocationPermissionAlert = () =>
    Alert.alert('Location Permission', 'Location permission is not granted. To change permission go to settings.', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: 'OK', onPress: () => {
          if (Platform.OS === 'ios') {
            Linking.openSettings().catch(() => console.log('Unable to open settings'));
          }
          if (Platform.OS === 'android') {
            Linking.openSettings().catch(() => console.log('Unable to open settings'));
          }
        }
      },
    ]);


  const handleBookmarkStatus = () => {
    if (auth.currentUser && data) {
      const location = `${data.location.name}_${data.location.region}`;
      database.checkBookmarkStatus(location).then((bookmarkStatus) => {
        setBookMarkAdded(bookmarkStatus);
      });
    }
  };
  handleBookmarkStatus();

  const handleDateToDay = () => {
    let dayOfWeek = null;
    if (data) {
      const date = new Date(data.location.localtime);
      dayOfWeek = new Intl.DateTimeFormat(undefined, { weekday: "long" }).format(date);
    }
    return dayOfWeek;
  };

  if (data) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <StatusBar style="auto" />
          {/* Toast  */}
          <View style={styles.toastContainer}>
            <Toast />
          </View>
          <View style={styles.topRowContainer}>
            <Pressable onPress={handleLocationWeather}>
              <Image
                style={styles.currentLocationIcon}
                source={require("../../../assets/images/loc-icon.png")}
              />
            </Pressable>
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
          <ScrollView
            contentContainerStyle={styles.contentContainer}
            showsVerticalScrollIndicator={false}
          >
            <View style={styles.locationContainer}>
              <View style={styles.locationRow}>
                {/* Fixed typo here */}
                <Text style={styles.locationName}>
                  {data.location.name}, {data.location.region}
                </Text>
                <Text style={{ color: "#717171" }}>{handleDateToDay()}</Text>
              </View>
              <View style={styles.iconsCol}>
                {/* bookmark-sharp */}
                <Pressable onPress={handleBookmarkClick}>
                  {isBookmarkAdded ? (
                    <Ionicons name="bookmark-sharp" color="#375f96" size={30} />
                  ) : (
                    <Ionicons name="bookmark-outline" color="#375f96" size={30} />
                  )}
                </Pressable>
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
                <View style={{ width: 100 }}>
                  <Text
                    ellipsizeMode="tail"
                    numberOfLines={2}
                    style={styles.column1.weatherConditonLabel}
                  >
                    {data.current.condition.text}
                  </Text>
                </View>
              </View>
              <View style={styles.column2}>
                <Text style={styles.column2.temperatureLabel}>{data.current.temp_c}°C</Text>
                <Text style={styles.column2.feelslikeLabel}>
                  Feels Like {data.current.feelslike_c}°C
                </Text>
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
            <Pressable onPress={handleLocationWeather}>
              <Image
                style={styles.currentLocationIcon}
                source={require("../../../assets/images/loc-icon.png")}
              />
            </Pressable>
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
