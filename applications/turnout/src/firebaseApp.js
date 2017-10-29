import firebase from 'firebase'

// Initialize Firebase
const config = {
  apiKey: "AIzaSyAIQtkW_Gr5d3WYMygz57heg3Mfy3DYtE0",
  authDomain: "turnout-6c6f6.firebaseapp.com",
  databaseURL: "https://turnout-6c6f6.firebaseio.com",
  projectId: "turnout-6c6f6",
  storageBucket: "",
  messagingSenderId: "854086101174"
};

export const firebaseApp  = firebase.initializeApp(config)