import React from 'react';
import Login from './login/login';
import Student from './login/student';
import Admin from './login/admin';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import Mainroute from './login/navigate';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Mainroute/>
      </BrowserRouter>
    </div>
  );
}

export default App;
