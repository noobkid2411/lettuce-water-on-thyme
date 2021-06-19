import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyAqiLrTfvVu68Gj2nQNrPfqdMmxa9YsJQE",
  authDomain: "lettuce-water-on-thyme.firebaseapp.com",
  databaseURL: "https://lettuce-water-on-thyme-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "lettuce-water-on-thyme",
  storageBucket: "lettuce-water-on-thyme.appspot.com",
  messagingSenderId: "55699741615",
  appId: "1:55699741615:web:e9167df257fe747398ed5a",
  measurementId: "G-WMN0JPK6H6"
};
 
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  export default firebase;
