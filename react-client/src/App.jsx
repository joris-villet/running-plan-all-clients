import './App.css';
import basket from './assets/basket.png';
import RouterView from './components/RouterView';
import { useLocation, Link } from 'react-router-dom';


const ButtonSwitchForm = () => {
  
  const location = useLocation();
  console.log(location.pathname);

  if (location.pathname === '/login') {
    return <Link className="btn__switch__form"to="/register">S'inscrire</Link>
  } 
  else if (location.pathname === '/register') {
    return <Link className="btn__switch__form" to="/login">Se connecter</Link>
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


