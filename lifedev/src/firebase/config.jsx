import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDjbCTSzvq4v29CzGczE2FbbVHGd2ziUOE",
  authDomain: "lifedev-biaisq.firebaseapp.com",
  projectId: "lifedev-biaisq",
  storageBucket: "lifedev-biaisq.appspot.com",
  messagingSenderId: "427015396805",
  appId: "1:427015396805:web:5a999b721986a3a7d53fac",
  measurementId: "G-SY9LVF0HVZ"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export {db};