import Toast from "react-native-toast-message";

export default function showToast(type, text1, text2) {
  Toast.show({
    type: type, // "success", "error", "info"
    position: "top",
    text1: text1 ? text1 : "",
    text2: text2 ? text2 : "",
    visibilityTime: 4000,
    autoHide: true,
    // topOffset: 30,
    // bottomOffset: 30,
  });
}
