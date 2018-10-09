import firebase from "firebase/app";
import "firebase/auth";

const devConfig = {
  apiKey: "AIzaSyD5cA01qqS3aYG0FUffxYcv8aZwV2n-uFM",
  authDomain: "mysite-20ac7.firebaseapp.com",
  databaseURL: "https://mysite-20ac7.firebaseio.com",
  projectId: "mysite-20ac7",
  storageBucket: "mysite-20ac7.appspot.com",
  messagingSenderId: "815184234736"
};

var prodConfig = {
  apiKey: "AIzaSyDc-Dg4IdfNEQAfnCEnhk5GPL5x30FKYas",
  authDomain: "mysite-prod-79dae.firebaseapp.com",
  databaseURL: "https://mysite-prod-79dae.firebaseio.com",
  projectId: "mysite-prod-79dae",
  storageBucket: "mysite-prod-79dae.appspot.com",
  messagingSenderId: "34479318768"
};

const config = process.env.NODE_ENV === "production" ? prodConfig : devConfig;

if (!firebase.app.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();

export { auth };
