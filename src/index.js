import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import * as firebase from 'firebase';
import firebaseApiKey from './.env';

// Initialize Firebase
  var config = {
    apiKey: firebaseApiKey,
    authDomain: "react-journal-983e4.firebaseapp.com",
    databaseURL: "https://react-journal-983e4.firebaseio.com",
    storageBucket: "react-journal-983e4.appspot.com",
    messagingSenderId: "1010514251376"
  };
  firebase.initializeApp(config);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
