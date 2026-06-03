
import './App.css'
import Header from './Header/Header';
import Home from "./Home/Home";
import Checkout from "./Checkout/Checkout";
import Login from "./Login/Login";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './StateProvider/StateProvider';

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() =>{
    auth.onAuthStateChanged(authUser =>{
      console.log('THE USER IS >>>', authUser);

      if(authUser){
        dispatch({
          type: "SET_USER",
          user: authUser,
        })
      } else{
        dispatch({
          type: 'SET_USER',
          user: null,
        })
      }
    })
  }, [dispatch]);

  return(
    
      <div className="app">
        <Routes>
          <Route path='/login'
           element={
            <>
             <Login/>
            </>
           }
          />

          <Route path='/checkout'
           element={
            <>
             <Header/>
             <Checkout/>
            </>
           }
          />

          <Route path='/'
           element={
            <>
             <Header/>
             <Home/>
            </>
           }
          />
        </Routes>
      </div>
    
  );
}

export default App;
