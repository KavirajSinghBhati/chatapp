import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDdDBpFyIysb29i-G-bxIc4nNTArd3svzg",
  authDomain: "chat-web-app-5dcd6.firebaseapp.com",
  databaseURL:
    "https://chat-web-app-5dcd6-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "chat-web-app-5dcd6",
  storageBucket: "chat-web-app-5dcd6.appspot.com",
  messagingSenderId: "908320670297",
  appId: "1:908320670297:web:055ca41b31b33f7a302748",
};

const app = firebase.initializeApp(firebaseConfig);