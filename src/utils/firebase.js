import { initializeApp } from "firebase/app";

const firebaseConfig = {
	apiKey: "AIzaSyBzObuuogygtzRNsfliIU-MugLoW3403bA",
	authDomain: "restaurant-react-native-26505.firebaseapp.com",
	projectId: "restaurant-react-native-26505",
	storageBucket: "restaurant-react-native-26505.appspot.com",
	messagingSenderId: "921579718421",
	appId: "1:921579718421:web:dc77395b210d2e52f64b1c",
};

// Initialize Firebase
export const initFirebase = initializeApp(firebaseConfig);
