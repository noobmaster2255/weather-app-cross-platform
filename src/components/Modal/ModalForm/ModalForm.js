import React, { useState } from "react";
import { Button, Image, Modal, Pressable, Text, TextInput, View } from "react-native";
import styles from "./styles";

const ModalForm = ({ isVisible, onClose, isLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Username:", username);
    console.log("Password:", password);
    if (isLogin) {
      console.log("Logging in...");
    } else {
      console.log("Signing up...");
    }
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
            placeholder="Username"
            onChangeText={(text) => setUsername(text)}
            value={username}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
            onChangeText={(text) => setPassword(text)}
            value={password}
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
