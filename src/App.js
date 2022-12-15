import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sign from '../src/components//sign';
import Login from './components/login';
import Home from './components/home'
import { Provider } from "react-redux"
import store from './store';

function App  ()  {
  return (
    <Provider store={store}>
     <BrowserRouter>
      <Routes>
        
        <Route  path="/" exact={true} element={<Sign/>} />
        <Route  path="/login" element={<Login/>} />
        <Route  path="/home" element={<Home/>} />
        
      </Routes>
    </BrowserRouter> 
    </Provider>
  )
}
export default App