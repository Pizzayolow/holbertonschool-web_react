import logo from './holberton_logo.jpg';
import './App.css';

function App() {
  return (
    <>
      <div className="App-header">
        <img src={logo} alt='Holberton Logo'></img>
        <p>School Dashboard</p>
      </div>
      <div className='App-body'>
        <p>Login to access the full dashboard</p>
      </div>
      <div className='App-footer'>
        <p>Copyright 2024 - Holberton School</p>
      </div>
    </>
  )
}

export default App;