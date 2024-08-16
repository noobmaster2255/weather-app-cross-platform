import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { HomeScreen, ProfileScreen, BookmarkScreen } from "./src/pages";
import { Ionicons } from "@expo/vector-icons";
import { Provider } from 'react-redux';
import store from './src/redux/store';
import AppLoader from './src/components/AppLoader';
import * as SplashScreen from 'expo-splash-screen';


SplashScreen.preventAutoHideAsync();

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <AppLoader />
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Home"
          activeColor="#375f96"
          inactiveColor="#3e2465"
          barStyle={{ backgroundColor: '#deebfe' }}
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
    </Provider>
  );
}
