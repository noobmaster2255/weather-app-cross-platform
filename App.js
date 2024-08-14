import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import styles from "./src/styles/main";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import HomeScreen from "./src/pages/Home/home";
import ProfileScreen from "./src/pages/Profile/profile";

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
     <Tab.Navigator
        initialRouteName="Home"
        activeColor="#3e2465"
        inactiveColor="#3e2465"
        // barStyle={{ backgroundColor: '#694fad' }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
