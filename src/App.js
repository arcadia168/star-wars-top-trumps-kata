import logo from './logo.svg';
import './App.css';
import TopTrumpCard from './components/TopTrumpCard/TopTrumpCard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello world again! Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React now
        </a>
        <div>
        <h1>Here is the top trump card:</h1>
        <TopTrumpCard></TopTrumpCard>
      </div>
      </header>
    </div>
  );
}

export default App;
