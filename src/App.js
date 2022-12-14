import React,{useState,useEffect} from 'react';
import './App.css';
import { GetPersona } from './getPersona';
import {GetPost} from './getPost'

function App() {
  return(
    <div>
      <GetPersona />
      <br />
      <GetPost />
      
    </div>
  )
}

export default App;