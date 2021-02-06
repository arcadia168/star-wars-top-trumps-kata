import CharacterDetails from '../CharacterDetails/CharacterDetails';
import StarshipDetails from '../StarshipDetails/StarshipDetails';
import './TopTrumpCard.css';

function TopTrumpCard(props) {
    const { name, cardType } = props;

    //TODO: Pass all props to make this more functional? Pass props.
    function renderCardDetails() {
        if (cardType === 'character') {
            return (
                <CharacterDetails
                    height={props.height}
                />
            )
        } else if (cardType === 'starship') {
            return (
                <StarshipDetails
                    hyperdrive_rating={props.hyperdrive_rating}
                />
            )
        }

        //TODO: if card type is star ship return the starship
    }

    return (
      <div className="TopTrumpCard" data-testid="top-trump-card">
          <h1 className="TopTrumpCardDetails" data-testid="top-trump-card-name">{name}</h1>
          {renderCardDetails()}
      </div>
    );
};

export default TopTrumpCard;
