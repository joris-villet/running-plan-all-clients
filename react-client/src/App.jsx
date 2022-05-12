import './App.css';
import basket from './assets/basket.png';
import RouterView from './components/RouterView.js';
import { useLocation, Link } from 'react-router-dom';
import React from 'react';


const ButtonSwitchForm = () => {
  
  const location = useLocation();
  console.log(location.pathname);

  if (location.pathname === '/login') {
    return <Link className="btn__switch__form blink-1"to="/register">Pas encore inscrit ?</Link>
  } 
  else if (location.pathname === '/register') {
    return <Link className="btn__switch__form blink-1" to="/login">Se connecter</Link>
  }
  
}

export default function App() {
  return (
    <div className="App">
      <img className="basket" src={basket} alt="basquette" />
      <RouterView />
      <ButtonSwitchForm />
    </div>
  );
}


