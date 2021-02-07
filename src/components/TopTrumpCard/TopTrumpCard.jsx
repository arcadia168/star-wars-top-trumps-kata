import CharacterDetails from '../CharacterDetails/CharacterDetails';
import StarshipDetails from '../StarshipDetails/StarshipDetails';
import './TopTrumpCard.css';

function TopTrumpCard(props) {
    const { name, cardType, cardDetails } = props;

    //TODO: Pass all props to make this more functional? Pass props.
    function renderCardDetails() {
        if (cardType === 'characters') {
            return (
                <CharacterDetails
                    characterHeight={cardDetails.height}
                />
            )
        } else if (cardType === 'starships') {
            return (
                <StarshipDetails
                    hyperdriveRating={cardDetails.hyperdrive_rating}
                />
            )
        }
    }

    return (
      <div className="top-trump-card" data-testid="top-trump-card">
          <h4 className="top-trump-card__title" data-testid="top-trump-card-name">{name}</h4>
          {renderCardDetails()}
      </div>
    );
};

export default TopTrumpCard;
