import React from 'react';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
    {
  <div className="container">
      <form className="signUp-Form">
      <label className="formLabel">First Name</label>
      <input className="formInput" type="text"></input>
      <label className="formLabel">Last Name</label>
      <input className="formInput" type="text"></input>
      <label className="formLabel">Email Address</label>
      <input className="formInput" type="text"></input>
      <label className="formLabel">Password</label>
      <input className="formInput" type="text"></input>
      <button className="formButton">Sign Up</button>
      <a className="signIn-Form" href="#">Already a User?</a>
      </form>
   </div>
      
    }
    </div>
  );
}

export default App;
