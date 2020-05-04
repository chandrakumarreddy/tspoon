import * as firebase from "firebase/app";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCxkOw34iOQSMW4HCzTZtqpGfU_wG6KByk",
  authDomain: "fir-d1aa9.firebaseapp.com",
  databaseURL: "https://fir-d1aa9.firebaseio.com",
  projectId: "fir-d1aa9",
  storageBucket: "fir-d1aa9.appspot.com",
  messagingSenderId: "1070843129594",
  appId: "1:1070843129594:web:b60aa7bbb583152bef2343",
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();

export { auth, firebase as default };
