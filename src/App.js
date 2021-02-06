import './App.css';
import CardContainer from './components/CardContainer/CardContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
        <h1>Here is the top trump card:</h1>
        <div className="TopTrumpCardContainer" data-testid="top-trump-card-container">
          <CardContainer />
        </div>
      </div>
      </header>
    </div>
  );
}

export default App;
