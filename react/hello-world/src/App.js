import logo from './logo.svg';
import './App.css';
import Greet from './userComponents/Greet';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
              Hello Karthik !! React Welcomes You..
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      <Greet />
      
    </div>
  );
}

export default App;
