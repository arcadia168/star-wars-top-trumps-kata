//TODO: expand this function to support a dynamic number of cards
// I believe the node engine uses merge sort under the hood, which is O(log(n))
function starshipHyperdriveRatingComparison(a, b) {
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

export default function decideWinningCard(cards, cardType) {
    if (cardType === 'starship') {
        cards.sort(starshipHyperdriveRatingComparison);
        const nameOfWinningShip = cards[0].name;
        return nameOfWinningShip;
    }
}
