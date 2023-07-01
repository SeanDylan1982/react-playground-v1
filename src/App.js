import React, { Component } from 'react'
import App from 'base-shell/lib'
import _config from './config'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDi45jNX1p9WUrg7-7lJwlGaAt4l0mBZ8A",
  authDomain: "react-playground-v1.firebaseapp.com",
  projectId: "react-playground-v1",
  storageBucket: "react-playground-v1.appspot.com",
  messagingSenderId: "752738833383",
  appId: "1:752738833383:web:270a779497e44be7de2342",
  measurementId: "G-32RQPZM7YS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default class Demo extends Component {
  render() {
    return (
      {app},
      {analytics},
      <App config={_config} />
    )
  }
}
