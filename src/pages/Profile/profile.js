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
import { useState } from "react";
import ModalForm from "../../components/Modal/ModalForm/ModalForm";

export default function ProfileScreen({ navigation }) {
  const [isEnabled, setIsEnabled] = useState(false);
  const [pressed, setPressed] = useState(false);
  const [pressed2, setPressed2] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false); 

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Text style={styles.titile}>Profile</Text>
        <ScrollView contentContainerStyle={styles.contentContainer} showsVerticalScrollIndicator={false}>
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
          <ModalForm isVisible={isModalVisible} onClose={()=> setIsModalVisible(false)} isLogin={false}/>

          <View style={styles.btnContainer}>

            <Pressable
              style={[styles.btn, pressed && styles.btnPressed]}
              onPressIn={() => setPressed(true)}
              onPressOut={() => setPressed(false)}
            >
              <Text style={[styles.buttonText, pressed && styles.btnTextchange]}>Logout</Text>
            </Pressable>

            <Pressable
              style={[styles.btn2, pressed2 && styles.btnPressed2]}
              onPress={() => setIsModalVisible(true)}
              onPressIn={() => setPressed2(true)}
              onPressOut={() => setPressed2(false)}
            >
              <Text style={[styles.buttonText2, pressed2 && styles.btnTextchange2]}>Create New Account</Text>
            </Pressable>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
