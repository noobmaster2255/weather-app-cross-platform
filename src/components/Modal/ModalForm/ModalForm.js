import React, { useEffect, useState } from "react";
import { Button, Image, Modal, Pressable, Text, TextInput, View } from "react-native";
import styles from "./styles";
import * as database from "../../../database";
import Toast from "react-native-toast-message";

const ModalForm = ({ isVisible, onClose, isLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (isLogin) {
      console.log("Logging in...");
      database.login(email, password);
    } else {
      console.log("Signing up...");
      database.signUp(email, password);
    }
    setEmail("");
    setPassword("");
    onClose();
  };

  return (
    <Modal animationType="fade" transparent={true} visible={isVisible} onRequestClose={onClose}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={styles.profileIcon}>
            <Image
              style={styles.profileImg}
              source={require("../../../../assets/images/icon1.png")}
            />
          </View>
          <TextInput
            style={styles.input}
            placeholder="Email"
            onChangeText={(text) => setEmail(text)}
            value={email}
            autoCapitalize="none"
            autoCorrect={false}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
            onChangeText={(text) => setPassword(text)}
            value={password}
            autoCapitalize="none"
            autoCorrect={false}
          />
          <View style={styles.buttonContainer}>
            {/* <Button title="Login" onPress={handleLogin} /> */}
            <Pressable style={[styles.button2, styles.buttonLogin]} onPress={handleLogin}>
              <Text style={styles.textStyle}>{isLogin ? "Login" : "Sign Up"}</Text>
            </Pressable>
            <Pressable style={[styles.button, styles.buttonClose]} onPress={onClose}>
              <Text style={styles.textStyle}>Cancel</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ModalForm;
