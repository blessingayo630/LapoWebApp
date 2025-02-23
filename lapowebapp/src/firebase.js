import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAoe5ZLT9TbgePbYw4dHzNOC2Braqxeawk",
  authDomain: "lapo-microfinance-app.firebaseapp.com",
  projectId: "lapo-microfinance-app",
  storageBucket: "lapo-microfinance-app.firebasestorage.app",
  messagingSenderId: "671929414731",
  appId: "1:671929414731:web:0aa3b1f0c7e03339c8c9ce",
  measurementId: "G-3CEGXLDS7Q",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
