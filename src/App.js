import './App.css';
import CardContainer from './components/CardContainer/CardContainer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useState } from 'react';

//todo: Implement saved games when seeing rounds results...

function App() {
  const [results, updateResults] = useState([]);
  return (
    <Router>
      <nav className="top-trump-menu" data-testid="top-trump-menu">
        <ul>
          <li>
            <Link to="/game">Main Game</Link>
          </li>
          <li>
            <Link to="/scoreboard">Scoreboard</Link>
          </li>
        </ul>
      </nav>

      <div className="App">
      <Switch>
        <Route path="/game">
          <div className="App-header TopTrumpCardContainer" data-testid="top-trump-card-container">
              <CardContainer results={results} updateResults={updateResults} numPlayers={3}/>
          </div>
        </Route>
        <Route path="/scoreboard">
          <h1>This is the scoreboard</h1>
          <div>
              {results.map((result, index) => (
                <div className="previous-round-result" key={index} data-testid={`previous-round-result-${index}`}>
                  <h2>Round {index + 1}:</h2>
                  <h3>Winning Player: {result.winningPlayer}</h3>
                  <h3>Winning card: {result.winningCardName}</h3>
                  <h3>Won with: {result.wonWith}</h3>
              </div>
            ))}
          </div>
        </Route>
      </Switch>
      </div>
    </Router>
  );
}

export default App;
