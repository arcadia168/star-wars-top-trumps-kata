import React, {
    useEffect,
    useState,
} from 'react';
import StarWarsApiService from '../../services/StarWarsApiService/StarWarsApiService';
import chooseRandomCards from '../../utils/chooseRandomCards/chooseRandomCards'
import decideWinningCard from '../../utils/decideWinningCard/decideWinningCard'
import TopTrumpCard from '../TopTrumpCard/TopTrumpCard';
import './CardContainer.css';

function CardContainer(props) {
    const { results, updateResults, numPlayers } = props;

    const [cardTypeChosen, setCardTypeChosen] = useState(false); //TODO: rename to game begun?
    const [cardType, setCardType] = useState(false);
    const [randomlyChosenCards, setRandomlyChosenCards] = useState();
    const [shouldFetchNewCards, setShouldFetchNewCards] = useState(true);
    const [nameOfWinningCard, setNameOfWinningCard] = useState();
    const [winningPlayer, setWinningPlayer] = useState();

    let validNumberOfPlayers;
    //TODO: Whats a valid max number of players? Valid min is 2
    if (!numPlayers || numPlayers < 2 || numPlayers > 3) {
        validNumberOfPlayers = 2;
    } else {
        validNumberOfPlayers = numPlayers;
    };

    //TODO: Fetch all types of possible cards and dynamically render choice from API!

    useEffect(() => {
        // console.info(`use effect called`);

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

            // console.info(`cards are: ${JSON.stringify(cards)}`);
            // Randomly choose correct number of cards
            if (cards) {
                //are cards sorted prior to this? I don't think so...
                const randomlyChosenCards = chooseRandomCards(cards, validNumberOfPlayers);
                // console.info(`randomly chosen cards (sorted?) are: ${randomlyChosenCards}`);

                const winningCard = decideWinningCard(randomlyChosenCards, cardType);
                setNameOfWinningCard(winningCard.name);

                //works from assumption that index = player position
                let winningPlayerIndex = randomlyChosenCards.findIndex(
                    card => card.name === winningCard.name
                );

                //TODO: use separate variable for this?
                // winningPlayerIndex = winningPlayerIndex + 1;
                setWinningPlayer(winningPlayerIndex);
                //TODO: calculate position/player here
                if (results && updateResults) {

                    //TODO: Keep a score for each player!
                    //TODO: REUSE results to display winners

                    const newResult = {
                        winningPlayer: (winningPlayerIndex + 1),
                        winningCardName: winningCard.name,
                        wonWith: cardType === 'characters' ?
                            `height: ${winningCard.height}` : `hyperdrive rating: ${winningCard.hyperdriveRating}`
                    }

                    const newResultsArray = [newResult];

                    // console.info(`updating results`);

                    const updatedResults = newResultsArray.concat(results);
                    // console.info(`updated results are: ${updatedResults}`);
                    updateResults(updatedResults);
                }
                // console.info(`Randomly chosen cards are: ${randomlyChosenCards.map(card => JSON.stringify(randomlyChosenCards))}`);
                setRandomlyChosenCards(randomlyChosenCards);
            }
        }

        if (cardTypeChosen && shouldFetchNewCards) {
            // console.info(`Fetching new cards`);
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
                className={`card-container__player-card player-${index + 1}-card`}
                data-testid={`player-${index + 1}-card`}
            >
                <h3 className={"card-conatiner__player-number"}>Player {index + 1}</h3>
                <TopTrumpCard
                    name={randomlyChosenCards[index].name}
                    cardType={cardType}
                    cardDetails={randomlyChosenCards[index]}
                />
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
                <div className="card-container__active-game-container" data-testid="active-game-container">
                    <div className="card-conainter__winning-card-banner" data-testid="winning-card-banner">
                        {`Player ${winningPlayer + 1} won this round! The winning card is: ${nameOfWinningCard}!`}
                    </div>
                    <div className={"card-container__chosen-cards"} data-testid="randomly-chosen-cards">
                        {renderChosenPlayerCards()}
                    </div>
                    <div className="card-container__play-again-btn-container">
                        <button
                            className="card-container__play-again-btn"
                            data-testid="play-again-btn"
                            onClick={() => {
                                setShouldFetchNewCards(true);
                            }}
                        >
                            Play Again
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default CardContainer;
