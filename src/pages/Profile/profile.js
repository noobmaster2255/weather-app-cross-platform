import {
  View,
  Text,
  Button,
  StatusBar,
  SafeAreaView,
  ScrollView,
  Image,
  Switch,
  Pressable,
} from "react-native";
import styles from "./style";
import { useEffect, useState } from "react";
import ModalForm from "../../components/Modal/ModalForm/ModalForm";
import Toast from "react-native-toast-message";
import * as database from "../../database";

export default function ProfileScreen({ navigation }) {
  const [isEnabled, setIsEnabled] = useState(false);
  const [pressed, setPressed] = useState(false);
  const [pressed2, setPressed2] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    database.checkUserLoginStatus((loggedIn, user) => {
      setIsLoggedIn(loggedIn);
      setUser(user);
    });
  }, []);

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
            <Text style={styles.profileName}>NoobMaster</Text>
            <Text style={styles.profileEmail}>noobmaster@gmail.com</Text>
          </View>

          {/* Notifications  */}
          <View style={styles.notificationContainer}>
            <Text style={styles.notificationLabel}>Notifications</Text>
            <Switch
              trackColor={{ false: "#deebfe", true: "#375f96" }}
              thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
              ios_backgroundColor="#deebfe"
              onValueChange={setIsEnabled}
              value={isEnabled}
            />
          </View>

          {/* modal  */}
          <ModalForm
            isVisible={isModalVisible}
            onClose={() => setIsModalVisible(false)}
            isLogin={true}
          />

          <View style={styles.btnContainer}>
            {/* Logout btn  */}
            <Pressable
              style={[styles.btn, pressed && styles.btnPressed]}
              onPressIn={() => setPressed(true)}
              onPressOut={() => setPressed(false)}
            >
              <Text style={[styles.buttonText, pressed && styles.btnTextchange]}>Logout</Text>
            </Pressable>

            {/* Sign up btn  */}
            <Pressable
              style={[styles.btn2, pressed2 && styles.btnPressed2]}
              onPress={() => setIsModalVisible(true)}
              onPressIn={() => setPressed2(true)}
              onPressOut={() => setPressed2(false)}
            >
              <Text style={[styles.buttonText2, pressed2 && styles.btnTextchange2]}>
                Create New Account
              </Text>
            </Pressable>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
