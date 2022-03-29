// import './App.css';
import React, {Component} from 'react';
import Modal from './components/Modal';
import { Alert, Button } from 'reactstrap';
import axios from 'axios';
import {BrowserRouter as Router, Switch, Route, Routes} from 'react-router-dom'
import Login from './components/Login';
import Main from './components/Main';
import SignUp from './components/Signup';


function App(){
  return(
    <Router>
      <Routes>
        <Route path='/' exact element={<Login/>} />
        <Route path='/sign-up' element={<SignUp/>} />
        <Route path='/dashboard' element={<Main />}/>
      </Routes>
    </Router>
  )
}

const Home = () =>{
  return(
    <h1>Hello World</h1>
  )
}

export default App;
