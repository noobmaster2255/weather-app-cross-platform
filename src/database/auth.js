import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import Toast from "react-native-toast-message";
import showToast from "../components/ToastItem/ToastItem";

export async function signUp(email, password) {
  const auth = getAuth();
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    login(email, password);
    showToast("sucess", "SignUp Successful", `Welcome, ${email}!`);
    console.log("user signed up successfully", user.email);
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    showToast("error", "SignUp Failed", "Sorry !");
    console.error(`Error [${errorCode}]: ${errorMessage}`);
  }
}

export async function login(email, password) {
  const auth = getAuth();
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    showToast("success", "Login Successful", `Welcome, ${email}!`);
    console.log("Login in successfull", user.email);
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    showToast("error", "Login Failed", `Login for user: , ${email}!`);
    console.error(`Error [${errorCode}]: ${errorMessage}`);
  }
}

export function checkUserLoginStatus(callback) {
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log("User is logged in:", user.email);
      showToast("success", "Welcome back!", `You are logged in as ${user.email}.`);
      callback(true, user.email);
    } else {
      console.log("No user is logged in.");
      showToast("info", "Not logged in", `Please log in to continue.`);
      callback(false, null);
    }
  });
}
