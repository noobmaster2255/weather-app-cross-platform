import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import showToast from "../components/ToastItem/ToastItem";
import { auth } from "./config";

export async function signUp(email, password) {
  // const auth = getAuth();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    showToast("error", "Invalid Email", "Please enter a valid email address.");
    console.error(`Login Error [Invalid Email]: Please enter a valid email address.`);
    return;
  } else {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      showToast("success", "SignUp Successful", `Welcome, ${email}!`);
      console.log("user signed up successfully", user.email);
      login(email, password);
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      showToast("error", "SignUp Failed", "Sorry !");
      console.error(`Error [${errorCode}]: user sign up failed`);
    }
  }
}

export async function login(email, password) {
  // const auth = getAuth();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    showToast("error", "Invalid Email", "Please enter a valid email address.");
    console.error(`Login Error [Invalid Email]: Please enter a valid email address.`);
    return;
  } else {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      showToast("success", "Login Successful", `Welcome, ${email}!`);
      console.log("Login in successfull", user.email);
    } catch (error) {
      const errorCode = error.code;
      let errorMessage = "An unexpected error occurred. Please try again.";

      switch (errorCode) {
        case "auth/invalid-email":
          errorMessage = "The email address is badly formatted.";
          break;
        case "auth/user-disabled":
          errorMessage = "This user account has been disabled.";
          break;
        case "auth/user-not-found":
          errorMessage = "No user found with this email address.";
          break;
        case "auth/wrong-password":
          errorMessage = "Incorrect password. Please try again.";
          break;
        case "auth/invalid-credential":
          errorMessage = "Please try logging in again.";
          break;
        default:
          errorMessage = error.message;
          break;
      }

      showToast("error", "Login Failed", `Login for user: ${email} failed! ${errorMessage}`);
      console.error(`Login Error [${errorCode}]: ${errorMessage}`);
    }
  }
}

export function checkUserLoginStatus(callback) {
  // const auth = getAuth();
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

export async function logOut() {
  // const auth = getAuth();
  try {
    await signOut(auth);
    showToast("success", "Log out successfull!", "");
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    showToast("error", "LogOut Failed", "");
    console.error(`Error [${errorCode}]: ${errorMessage}`);
  }
}
