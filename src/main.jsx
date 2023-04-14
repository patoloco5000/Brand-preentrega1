import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'


ReactDOM.createRoot(document.getElementById('root')).render(<App />);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsrzmiPTt3qbn-Lvla7yarc6VCoV6WJRY",
  authDomain: "coderhouse-reactjs-e8d70.firebaseapp.com",
  projectId: "coderhouse-reactjs-e8d70",
  storageBucket: "coderhouse-reactjs-e8d70.appspot.com",
  messagingSenderId: "245310293215",
  appId: "1:245310293215:web:c251d2a1371f157d8b556a"
};

// Initialize Firebase
initializeApp(firebaseConfig);