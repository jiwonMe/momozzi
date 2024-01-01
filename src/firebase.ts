// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyB2GogcSyu4hKyDGpuAAlFqt3w04PKZb8E',
  authDomain: 'momozzi-hyu.firebaseapp.com',
  projectId: 'momozzi-hyu',
  storageBucket: 'momozzi-hyu.appspot.com',
  messagingSenderId: '820955053029',
  appId: '1:820955053029:web:107e68caccda7579954d0c',
  measurementId: 'G-BPP4VR56XD',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
