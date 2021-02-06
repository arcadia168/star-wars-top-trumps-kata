//TODO: expand this function to support a dynamic number of cards
// I believe the node engine uses merge sort under the hood, which is O(log(n))
function hyperdriveRatingComparison(a, b) {
    const firstHyperdriveRating = a.hyperdrive_rating;
    const secondHyperdriveRating = b.hyperdrive_rating;

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

export default function decideWinningCard(cards, cardType) {
    if (cardType === 'starship') {
        cards.sort(hyperdriveRatingComparison);
        const nameOfWinningShip = cards[0].name;
        return nameOfWinningShip;
    }

    if (cardType === 'characters') {
        cards.sort(heightComparison);
        const nameOfWinningCharacter = cards[0].name;
        return nameOfWinningCharacter;
    }
}
