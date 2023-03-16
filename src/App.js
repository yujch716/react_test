import logo from './logo.svg';
import './App.css';
import React ,{Component} from 'react';
import { BrowserRouter,Route, Link,Switch, Router, Routes } from "react-router-dom";
import {TestPage } from "./TestPage"
import { Main } from './Main';

function App() {
  return (
    <BrowserRouter>   
      <Routes>
          <Route path={"/"} element={<Main />}/>
          <Route path={":id"} element={<TestPage />}/>
      </Routes>
      </BrowserRouter>   
  );
}

export default App;
