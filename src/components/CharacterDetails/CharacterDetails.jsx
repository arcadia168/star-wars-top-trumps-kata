import './CharacterDetails.css';

function CharacterDetails(props) {
    const { height, mass, hair_color, skin_color, eye_color, birth_year, gender, homeworld } = props;

    return (
      <div className="CharacterDetails" data-testid="character-details">
          <h1>Height is: {height}</h1>
          <h1>Mass is: {mass}</h1>
          <h1>Hair color is: {hair_color}</h1>
      </div>
    );
};

export default CharacterDetails;
