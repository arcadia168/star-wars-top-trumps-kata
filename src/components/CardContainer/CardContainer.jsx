import React, {
    useEffect,
    useState,
} from 'react';
import StarWarsApiService from '../../services/StarWarsApiService/StarWarsApiService';
import chooseRandomCards from '../../utils/chooseRandomCards/chooseRandomCards'
import decideWinningCard from '../../utils/decideWinningCard/decideWinningCard'
import TopTrumpCard from '../TopTrumpCard/TopTrumpCard';

function CardContainer(props) {
    const [cardTypeChosen, setCardTypeChosen] = useState(false); //TODO: rename to game begun?
    const [cardType, setCardType] = useState(false);
    const [randomlyChosenCards, setRandomlyChosenCards] = useState();
    const [playAgainClicked, setPlayAgainClicked] = useState(false);
    const [nameOfWinningCard, setNameOfWinningCard] = useState();

    //TODO: Fetch all types of possible cards and dynamically render choice from API!
    //TODO: make 'number of players' dynamically configuarable here and allow code to adjust!

    useEffect(() => {
        debugger;
        const fetchNewCards = async () => {
            debugger;
            let cards;

            if (cardType === 'characters') {
                try {
                    const data = await StarWarsApiService.fetchCharacters();
                    //TODO: return purely useful data from the testable mockable class
                    cards = data.results;

                    //TODO: Store a history of the results!!!
                } catch(error) {
                    //TODO: set error and show banner
                }
            } else if (cardType === 'starships') {
                try {
                    const data = await StarWarsApiService.fetchStarships();
                    //TODO: return purely useful data from the testable mockable class
                    cards = data.results;

                    //TODO: Store a history of the results!!!
                } catch(error) {
                    //TODO: set error and show banner
                }
            };

            // Improvement: adjust the numbers of players on this line here
            // Randomly choose correct number of cards
            if (cards) {
                const randomlyChosenCards = chooseRandomCards(cards);
                //TODO: call util function to decide winner and set here.
                const nameOfWinningCard = decideWinningCard(randomlyChosenCards, cardType);
                setNameOfWinningCard(nameOfWinningCard);
                setRandomlyChosenCards(randomlyChosenCards);
            }

            setPlayAgainClicked(false);
        }

        if (cardTypeChosen) {
            fetchNewCards();
        }
    }, [cardTypeChosen, cardType, playAgainClicked]);

    //TODO: Translations?

    //TODO: Clean up this JS-DOM by using clean code functions.
    return (
        <div className="card-container" data-testid="card-container">
            {!cardTypeChosen && (
                <div
                    className="choose-card-type"
                    data-testid="choose-card-type"
                >
                    <button
                        className={"choose-card-type-btn choose-characters"}
                        data-testid="choose-characters-btn"
                        onClick={() => {
                            setCardTypeChosen(true);
                            setCardType('characters');
                        }}
                    >
                        Choose Characters
                    </button>
                    <button
                        className={"choose-card-type-btn choose-characters"}
                        data-testid="choose-starships-btn"
                        onClick={() => {
                            setCardTypeChosen(true);
                            setCardType('starships');
                        }}
                    >
                        Choose Starships
                    </button>
                </div>
            )}
            {randomlyChosenCards && (
                <div className="active-game-container" data-testid="active-game-container">
                    <div className="winning-card-banner" data-testid="winning-card-banner">The winning card is: {nameOfWinningCard}! Congrats!</div>
                    <div className={"chosen-cards"} data-testid="randomly-chosen-cards">
                        <div>
                            <h3>Player 1</h3>
                            <TopTrumpCard {...randomlyChosenCards[0]}/>
                        </div>
                        <div>
                            <h3>Player 2</h3>
                            <TopTrumpCard {...randomlyChosenCards[1]}/>
                        </div>
                    </div>
                    <button
                        className="play-again-btn"
                        data-testid="play-again-btn"
                        onClick={() => {
                            setPlayAgainClicked(true);
                        }}
                    >
                        Play Again
                    </button>
                </div>
            )}
        </div>
    );
}

export default CardContainer;
