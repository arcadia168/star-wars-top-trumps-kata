//TODO: expand this function to support a dynamic number of cards
// I believe the node engine uses merge sort under the hood, which is O(log(n))
function hyperdriveRatingComparison(a, b) {
    const firstHyperdriveRating = a.hyperdriveRating;
    const secondHyperdriveRating = b.hyperdriveRating;

    if (firstHyperdriveRating > secondHyperdriveRating) {
        return -1;
    }

    if (firstHyperdriveRating < secondHyperdriveRating) {
        return 1;
    }

    if (firstHyperdriveRating === secondHyperdriveRating) {
        return 0;
    }
}

function heightComparison(a, b) {
    const firstHeight = Number.parseInt(a.height);
    const secondHeight = Number.parseInt(b.height);

    if (firstHeight > secondHeight) {
        return -1;
    }

    if (firstHeight < secondHeight) {
        return 1;
    }

    if (firstHeight === secondHeight) {
        return 0;
    }
};

export default function decideWinningCard(
    cards,
    cardType
) {
    if (cardType === 'starships') {
        const shallowStarshipsArray = cards.map(card => ({
            name: card.name,
            hyperdriveRating: card.hyperdrive_rating,
        }));
        shallowStarshipsArray.sort(hyperdriveRatingComparison);
        const winningShip = shallowStarshipsArray[0];
        return winningShip;
    }

    if (cardType === 'characters') {
        const shallowCharactersArray = cards.map(card => ({
            name: card.name,
            height: card.height,
        }));
        shallowCharactersArray.sort(heightComparison);
        const winningCharacter = shallowCharactersArray[0];
        return winningCharacter;
    }
}
