import './App.css';
import CardContainer from './components/CardContainer/CardContainer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useState } from 'react';

function App() {
  const [results, updateResults] = useState([]);
  return (
    <Router>
      <nav>
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
            <CardContainer results={results} updateResults={updateResults}/>
          </div>
        </Route>
        <Route path="/scoreboard">
          <h1>This is the scoreboard</h1>
          <div>
            Results are: {results}
          </div>
        </Route>
      </Switch>
      </div>
    </Router>
  );
}

export default App;
