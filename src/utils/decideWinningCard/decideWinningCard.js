//TODO: expand this function to support a dynamic number of cards
// I believe the node engine uses merge sort under the hood, which is O(log(n))
function starshipHyperdriveRatingComparison(a, b) {
    if (a > b) {
        return 1;
    }

    if (a < b) {
        return -1;
    }

    if (a === b) {
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
