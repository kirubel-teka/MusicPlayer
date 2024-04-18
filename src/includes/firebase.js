import firebase from "firebase/app"
import "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyA3x7YZo_bgpAp4u5Ne_-1qyoMSc91EwOc",
    authDomain: "android-94e76.firebaseapp.com",
    projectId: "android-94e76",
    storageBucket: "android-94e76.appspot.com",
    appId: "1:290410954160:web:821145e7a39913471b6a75",
  };
  
  export default firebase.initializeApp(firebaseConfig)