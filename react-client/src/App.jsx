import './App.css';
import basket from './assets/basket.png';
import RouterView from './components/RouterView';

export default function App() {
  return (
    <div className="App">
      <img className="basket" src={basket} alt="image basquette" />
      <RouterView />
    </div>
  );
}


