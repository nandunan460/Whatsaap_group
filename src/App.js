import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Sidebar from "./Sidebar"
import Chat from "./Chat"
import Login from "./Login"
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
import {useStateValue} from "./StateProvider"
function App() {
  const [{user},dispatch]=useStateValue();
  return (
    //BEM naming conversation
    <div className="app">
      {!user?(
        <Login/>
      ):(
     <div className="app__body">
      <Router>
      <Sidebar/>
        <Switch>
       
          <Route path="/Rooms/:roomId">
         <Chat/>
         
          </Route>
          
          <Route path="/">
            <Chat/>
          </Route>
          
       </Switch>
    </Router>
     </div>
    )}
    </div>
  );
}

export default App;
