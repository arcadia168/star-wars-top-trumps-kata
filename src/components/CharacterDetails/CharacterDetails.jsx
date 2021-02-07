import './CharacterDetails.css';

function CharacterDetails(props) {
    const { characterHeight } = props;

    return (
      <div className="CharacterDetails" data-testid="character-details">
          <p>Height is: {characterHeight}</p>
          {/* <h1>Mass is: {mass}</h1>
          <h1>Hair color is: {hair_color}</h1>
          <h1>Skin color is: {skin_color}</h1>
          <h1>Eye color is: {eye_color}</h1>
          <h1>Birth year is: {birth_year}</h1> */}
      </div>
    );
};

export default CharacterDetails;
