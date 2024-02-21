import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbartop from './Components/Navbartop';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from './Pages/Homepage';
import Articlepage from './Pages/Articlepage';
import Authorpage from './Pages/Authorpage';


function App() {
  return (
    <>
     <BrowserRouter>
      <Navbartop />
      <Routes>
          <Route path="/" element={ <Homepage/>} /> 
          <Route path="/article/:id" element={ <Articlepage/>} /> 
          <Route path="/allUsers" element={ <Articlepage/>} /> 
          <Route path="/authorpage/:id" element={ <Authorpage/>} /> 
           
        </Routes>
     
      </BrowserRouter>
    </>
  );
  }

export default App;
