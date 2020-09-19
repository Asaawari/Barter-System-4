import firebase from 'firebase';
require('@firebase/firestore');

var firebaseConfig = {
  apiKey: "AIzaSyDp-2eAi_7g1dniEv6MaJzceLQ8x4S5A04",
  authDomain: "barter-system-1507b.firebaseapp.com",
  databaseURL: "https://barter-system-1507b.firebaseio.com",
  projectId: "barter-system-1507b",
  storageBucket: "barter-system-1507b.appspot.com",
  messagingSenderId: "541883154877",
  appId: "1:541883154877:web:e3808dac87620cb1c612d4"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();