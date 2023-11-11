import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDbYu3UVLM1K66Gon_M8AV81TczGjTJd7g",
    authDomain: "helpdek-portal-contracts.firebaseapp.com",
    databaseURL: "https://helpdek-portal-contracts-default-rtdb.firebaseio.com",
    projectId: "helpdek-portal-contracts",
    storageBucket: "helpdek-portal-contracts.appspot.com",
    messagingSenderId: "373860121296",
    appId: "1:373860121296:web:60ef00172d2a0e4f58bcd5"
  };

  export const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app)
  export const storage = getStorage(app)