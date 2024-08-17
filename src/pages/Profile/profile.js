import {
  View,
  Text,
  Button,
  StatusBar,
  SafeAreaView,
  ScrollView,
  Image,
  Switch,
  Pressable, Platform
} from "react-native";
import styles from "./style";
import { useEffect, useState } from "react";
import ModalForm from "../../components/Modal/ModalForm/ModalForm";
import Toast from "react-native-toast-message";
import * as database from "../../database";
import * as Notifications from 'expo-notifications';

export default function ProfileScreen({ navigation }) {
  const [isEnabled, setIsEnabled] = useState(false);
  const [pressed, setPressed] = useState(false);
  const [pressed2, setPressed2] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isLoginModal, setIsLoginModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  const handleNotificationPress = async () => {
    console.log('handle  notificaiton press')
    if (!isEnabled) {
      const scheduled = await scheduleReminderNotification();
      console.log('scheduled', { scheduled });
      if (scheduled) {
        console.log('set notificaiton true');
        setIsEnabled(true);
      }
    } else {
      const cancelled = await cancelReminderNotification();
      if (cancelled) {
        console.log('set notification false');
        setIsEnabled(false);
      }
    }
  }

  useEffect(() => {
    const checkLoginStatus = async () => {
      database.checkUserLoginStatus((loggedIn, user) => {
        setIsLoggedIn(loggedIn);
        setUser(user);
      });
    };
    checkLoginStatus();

    //check previously scheduled notifictaions
    (async () => {
      console.log('previously set notification');
      const previouslyScheduled = await getSchedule();
      if (previouslyScheduled.find((item) => item.type === 'reminder')) {
        console.log('set notification true');
        setIsEnabled(true);
      }

    })();
  }, []);

  const handleLogout = async () => {
    await database.logOut();
    setIsLoggedIn(false);
    setUser(null);
  };

  const handleLogin = () => {
    setIsModalVisible(true);
  };

  const formatUserEmail = (email) => {
    const userEmail = email ? email : "";
    const [username] = userEmail.split("@");
    const capitalizedUsername = username.charAt(0).toUpperCase() + username.slice(1);

    return capitalizedUsername;
  };


  async function scheduleReminderNotification() {
    console.log('Schedule for: ', Platform.OS)
    try {

      const permissions = await Notifications.getPermissionsAsync();
      console.log('permissions: ', permissions)
      if (!permissions.granted) {
        const request = await Notifications.requestPermissionsAsync({
          ios: {
            allowAlert: true,
            allowSound: true,
            allowBadge: true
          }
        });
        if (!request.granted) {
          console.log('permission request not granted');
          return false;
        }
      }
      const id = await Notifications.scheduleNotificationAsync({
        content: {
          title: 'Weather Reminder',
          body: 'Reminder to check your weather.',
          color: '#ffffff',
          data: {
            type: 'reminder'
          }
        },
        trigger: {
          seconds: 60,
          repeats: true
        }
      });

      if (!id) {
        console.log('notification id not available');
        return false;
      }

      return true;

    } catch (error) {
      console.log('somer error occured while scheduling notification: ', error)
      return false
    }
  }

  async function cancelReminderNotification() {
    let canceled = false;
    const schedule = await getSchedule();
    console.log(schedule);

    for (const item of schedule) {
      if (item.type === 'reminder') {
        await Notifications.cancelScheduledNotificationAsync(item.id);
        console.log('Notifiaction canceled: ', item.id);
        canceled = true;
      }
    }
    console.log('Canceled: ', canceled);

    return canceled
  }

  async function getSchedule() {
    const scheduledNotifications = await Notifications.getAllScheduledNotificationsAsync()
    console.log("schedule ", scheduledNotifications);

    const schedule = [];
    scheduledNotifications.forEach((scheduledNotification) => {
      schedule.push({
        id: scheduledNotification.identifier,
        type: scheduledNotification.content.data.type
      });
    });

    return schedule;
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <StatusBar style="auto" />

        {/* Toast  */}
        <View style={styles.toastContainer}>
          <Toast />
        </View>
        <Text style={styles.titile}>Profile</Text>

        {/* ScrollView  */}
        <ScrollView
          contentContainerStyle={styles.contentContainer}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.profileIcon}>
            <Image
              style={styles.profileImg}
              source={require("../../../assets/images/profile-icon.png")}
            />
          </View>
          <View>
            <Text style={styles.profileName}>{formatUserEmail(user)}</Text>
            <Text style={styles.profileEmail}>{user}</Text>
          </View>

          {/* Notifications  */}
          <View style={styles.notificationContainer}>
            <View>
              <Text style={styles.notificationLabel}>Notifications</Text>
            </View>
            <Switch
              trackColor={{ false: "#deebfe", true: "#375f96" }}
              thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
              ios_backgroundColor="#deebfe"
              onValueChange={handleNotificationPress}
              value={isEnabled}
            />
          </View>

          {/* modal  */}
          <ModalForm
            isVisible={isModalVisible}
            onClose={() => setIsModalVisible(false)}
            isLogin={isLoginModal}
          />

          <View style={styles.btnContainer}>
            {isLoggedIn ? (
              // Logout btn
              <Pressable
                style={[styles.btn, pressed && styles.btnPressed]}
                onPress={handleLogout}
                onPressIn={() => setPressed(true)}
                onPressOut={() => setPressed(false)}
              >
                <Text style={[styles.buttonText, pressed && styles.btnTextchange]}>Logout</Text>
              </Pressable>
            ) : (
              // LogIn   button
              <Pressable
                style={[styles.btn, pressed && styles.btnPressed]}
                onPress={() => [setIsModalVisible(true), setIsLoginModal(true)]}
                onPressIn={() => setPressed(true)}
                onPressOut={() => setPressed(false)}
              >
                <Text style={[styles.buttonText, pressed && styles.btnTextchange]}>Login</Text>
              </Pressable>
            )}

            {user ? (
              ""
            ) : (
              <Pressable
                style={[styles.btn2, pressed2 && styles.btnPressed2]}
                onPress={() => [setIsModalVisible(true), setIsLoginModal(false)]}
                onPressIn={() => setPressed2(true)}
                onPressOut={() => setPressed2(false)}
              >
                <Text style={[styles.buttonText2, pressed2 && styles.btnTextchange2]}>
                  Create New Account
                </Text>
              </Pressable>
            )}
            {/* Sign up btn  */}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
