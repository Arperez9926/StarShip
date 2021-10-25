import logo from './logo.svg';
import './App.css';
import {LoginButton} from './Componentes/Login';
import {LogoutButton} from './Componentes/Logout';
import {Profile} from './Componentes/Profile';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <LoginButton/>
        <Profile/>
        <LogoutButton/>

      </header>
    </div>
  );
}

export default App;
