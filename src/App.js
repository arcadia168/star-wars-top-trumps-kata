import './App.css';
import TopTrumpCard from './components/TopTrumpCard/TopTrumpCard';

const exampleStarShipDetailsProps = {
"name": "Republic attack cruiser",
"model": "Senator-class Star Destroyer",
"manufacturer": "Kuat Drive Yards, Allanteen Six shipyards",
"cost_in_credits": "59000000",
"length": "1137",
"max_atmosphering_speed": "975",
"crew": "7400",
"passengers": "2000",
"cargo_capacity": "20000000",
"consumables": "2 years",
"hyperdrive_rating": "1.0",
"MGLT": "unknown",
"starship_class": "star destroyer",
"pilots": [],
"films": [
    "http://swapi.dev/api/films/6/"
],
"created": "2014-12-20T19:52:56.232000Z",
"edited": "2014-12-20T21:23:49.946000Z",
"url": "http://swapi.dev/api/starships/63/"
};

const exampleCharacterDetailsProps = {
"cardType": "character",
"name": "Luke Skywalker",
"height": "172",
"mass": "77",
"hair_color": "blond",
"skin_color": "fair",
"eye_color": "blue",
"birth_year": "19BBY",
"gender": "male",
"homeworld": "http://swapi.dev/api/planets/1/",
"films": [
    "http://swapi.dev/api/films/1/",
    "http://swapi.dev/api/films/2/",
    "http://swapi.dev/api/films/3/",
    "http://swapi.dev/api/films/6/"
],
"species": [],
"vehicles": [
    "http://swapi.dev/api/vehicles/14/",
    "http://swapi.dev/api/vehicles/30/"
],
"starships": [
    "http://swapi.dev/api/starships/12/",
    "http://swapi.dev/api/starships/22/"
],
"created": "2014-12-09T13:50:51.644000Z",
"edited": "2014-12-20T21:17:56.891000Z",
"url": "http://swapi.dev/api/people/1/"
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
        <h1>Here is the top trump card:</h1>
        <div className="TopTrumpCardContainer" data-testid="top-trump-card-container">
          <TopTrumpCard {...exampleCharacterDetailsProps}></TopTrumpCard>
          <TopTrumpCard {...exampleStarShipDetailsProps}></TopTrumpCard>
        </div>
      </div>
      </header>
    </div>
  );
}

export default App;
