//ensure multiple different cards are returned each time.
export default function chooseRandomCards(cards, cardsToPick = 2) {
    //TODO: Throw error if not array?
    const numberOfCards = cards.length;
    let randomCardIndices = [];

    //choose random numbers within the range
    //generate as many random numbers as players we need (number of cards to pick)

    //Complexity of this? Scales with cardsToPick NOT cards to choose from so O(n)
    for(let i = 0; i < cardsToPick; i++) {
        //ensure we are not generating the same random number
        let uniqueRandomNumberFound = false;
        do {
            //generate random integer within index range
            const newRandomNum = Math.floor(Math.random() * (numberOfCards + 1));

            //if this is a new random integer, add to the the list
            if (!randomCardIndices.includes(newRandomNum)) {
                randomCardIndices.push(newRandomNum);
                uniqueRandomNumberFound = true;
            }
        } while (!uniqueRandomNumberFound);
    };

    //return a new 2 element array using those indices
    let randomlyChosenCards = randomCardIndices.map(
        randomCardIndex => cards[randomCardIndex]
    );

    return randomlyChosenCards;
};
