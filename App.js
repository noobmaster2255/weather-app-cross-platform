import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import styles from "./src/styles/main";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import HomeScreen from "./src/pages/Home/home";
import ProfileScreen from "./src/pages/Profile/profile";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import BookmarkScreen from "./src/pages/Bookmarks/bookmarks";

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        activeColor="#4778cc"
        inactiveColor="#3e2465"
        // barStyle={{ backgroundColor: '#694fad' }}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            switch (route.name) {
              case "Home":
                iconName = "home";
                break;
              case "Bookmarks":
                iconName = "albums";
                break;
              case "Profile":
                iconName = "person";
                break;
            }
            return <Ionicons name={iconName} color={color} size={24} />;
          },
          tabBarLabel: route.name,
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Bookmarks" component={BookmarkScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
