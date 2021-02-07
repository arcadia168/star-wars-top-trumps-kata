import React, {
    useEffect,
    useState,
} from 'react';
import StarWarsApiService from '../../services/StarWarsApiService/StarWarsApiService';
import chooseRandomCards from '../../utils/chooseRandomCards/chooseRandomCards'
import decideWinningCard from '../../utils/decideWinningCard/decideWinningCard'
import TopTrumpCard from '../TopTrumpCard/TopTrumpCard';

function CardContainer(props) {
    const { results, updateResults, numPlayers } = props;

    let validNumberOfPlayers;
    //TODO: Whats a valid max number of players? Valid min is 2
    if (!numPlayers || numPlayers < 2 || numPlayers > 3) {
        validNumberOfPlayers = 2;
    } else {
        validNumberOfPlayers = numPlayers;
    };

    const [cardTypeChosen, setCardTypeChosen] = useState(false); //TODO: rename to game begun?
    const [cardType, setCardType] = useState(false);
    const [randomlyChosenCards, setRandomlyChosenCards] = useState();
    const [shouldFetchNewCards, setShouldFetchNewCards] = useState(true);
    const [nameOfWinningCard, setNameOfWinningCard] = useState();

    //TODO: Fetch all types of possible cards and dynamically render choice from API!
    //TODO: make 'number of players' dynamically configuarable here and allow code to adjust!

    useEffect(() => {
        console.info(`use effect called`);

        const fetchNewCards = async () => {
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

            // Randomly choose correct number of cards
            if (cards) {
                const randomlyChosenCards = chooseRandomCards(cards, validNumberOfPlayers);
                const nameOfWinningCard = decideWinningCard(randomlyChosenCards, cardType);
                setNameOfWinningCard(nameOfWinningCard);

                //TODO: calculate position/player here
                if (results && updateResults) {
                    console.info(`updtaing results`);
                    const updatedResults = [nameOfWinningCard, ...results];
                    console.info(`updated results are: ${updatedResults}`);
                    updateResults(updatedResults);
                }
                console.info(`Randomly chosen cards are: ${randomlyChosenCards.map(card => JSON.stringify(randomlyChosenCards))}`);
                setRandomlyChosenCards(randomlyChosenCards);
            }
        }

        if (cardTypeChosen && shouldFetchNewCards) {
            console.info(`Fetching new cards`);
            fetchNewCards();
            setShouldFetchNewCards(false)
        }
    }, [
        cardTypeChosen,
        cardType,
        shouldFetchNewCards,
        results,
        updateResults,
        validNumberOfPlayers
    ]);

    //TODO: Translations?

    function renderChosenPlayerCards() {
        return randomlyChosenCards.map((card, index) => (
            <div
                key={index}
                className={`player-card player-${index + 1}-card`}
                data-testid={`player-${index + 1}-card`}
            >
                <h3>Player {index + 1}</h3>
                <TopTrumpCard {...randomlyChosenCards[index]}/>
            </div>
        ));
    }

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
                        {renderChosenPlayerCards()}
                    </div>
                    <button
                        className="play-again-btn"
                        data-testid="play-again-btn"
                        onClick={() => {
                            setShouldFetchNewCards(true);
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
