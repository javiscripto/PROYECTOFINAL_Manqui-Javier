

import {getFirestore} from "firebase/firestore"


import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBPN1Lk1B1jE_b41yD9MaR4Tsa3l5bOr1M",
  authDomain: "prueba-base-fddc2.firebaseapp.com",
  projectId: "prueba-base-fddc2",
  storageBucket: "prueba-base-fddc2.appspot.com",
  messagingSenderId: "579838946234",
  appId: "1:579838946234:web:478b492f9502a9308e4b83"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const DBproductos= getFirestore(app)