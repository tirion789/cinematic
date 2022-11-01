import { initializeApp } from 'firebase/app';

console.log(process.env.REACT_APP_FIREBASE_API_KEY);

const firebaseConfig = {
  apiKey: 'AIzaSyCXgwiuclv7xx7UIdDeALrJm8kvbyQ97vc',
  authDomain: 'cinetrex-2c301.firebaseapp.com',
  projectId: 'cinetrex-2c301',
  storageBucket: 'cinetrex-2c301.appspot.com',
  messagingSenderId: '688183553547',
  appId: '1:688183553547:web:1596bf28e3679742e7e10e',
};

const app = initializeApp(firebaseConfig);
