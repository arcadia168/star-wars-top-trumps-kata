import CharacterDetails from '../CharacterDetails/CharacterDetails';
import './TopTrumpCard.css';

function TopTrumpCard(props) {
    const { name, cardType } = props;

    function renderCardDetails() {
        if (props.cardType === 'character') {
            return (
                <CharacterDetails
                    height={props.height}
                />
            )
        }

        //TODO: if card type is star ship return the starship
    }

    return (
      <div className="TopTrumpCard" data-testid="top-trump-card">
          <h1>{name}</h1>
          {renderCardDetails()}
      </div>
    );
};

export default TopTrumpCard;
