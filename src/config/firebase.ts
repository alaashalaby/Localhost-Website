import { getFirestore} from "firebase/firestore";
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyAkAqOBOsuymGBtBLykr2WOOKyWZFgels8",
  authDomain: "localhost-website-6fbd3.firebaseapp.com",
  projectId: "localhost-website-6fbd3",
  storageBucket: "localhost-website-6fbd3.firebasestorage.app",
  messagingSenderId: "901778949679",
  appId: "1:901778949679:web:d514925e14d8887b96e8da",
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
export default app;

