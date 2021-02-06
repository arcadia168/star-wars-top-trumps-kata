import React, {
    useState,
} from 'react';

function CardContainer(props) {
    //do bulk of logic in here

    //use state hooks, if deck is chosen, then fetch and show cards and button instead
    const [deckChosen, setDeckChosen] = useState(false); //TODO: rename to game begun?
    const [cardType, setCardType] = useState(false);

    //TODO: Fetch all types of deck and dynamically render choice from API!
    //TODO: Translations?

    return (
        <div className="card-container" data-testid="card-container">
            {!deckChosen && (
                <div
                    className="choose-card-type"
                    data-testid="choose-card-type"
                >
                    <button className={"choose-card-type-btn choose-characters"}>Choose Characters</button>
                    <button className={"choose-card-type-btn choose-characters"}>Choose Starships</button>
                </div>
            )}
        </div>
    );
}

export default CardContainer;
