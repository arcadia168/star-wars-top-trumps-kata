import { cleanup, render, screen } from '@testing-library/react';
import TopTrumpCard from './TopTrumpCard';

//TODO: Move these JSON examples into folder to avoid repeated definition.
const exampleStarshipDetailsProps = {
    "name": "Star Destroyer",
    "cardDetails": {
        "hyperdrive_rating": "2.0"
    },
    "cardType": "starships"
};

const  exampleCharacterDetailsProps = {
    "name": "Luke Skywalker",
    "cardDetails": {
        "height": "172"
    },
    "cardType": "characters"
};

//TODO: Figure out how to mount/unmount using beforeEach afterEach
describe('Top Trump Card Component', () => {
    describe('When rendering a Top Trump Card component', () => {
        it('Should render a top trump card', () => {
            const { unmount } = render(<TopTrumpCard {...exampleStarshipDetailsProps}/>);
            const TopTrumpCardElement = screen.getByTestId('top-trump-card');
            expect(TopTrumpCardElement).toBeInTheDocument();
            unmount();
        });

        it('Should render the name of the card', () => {
            const { unmount } = render(<TopTrumpCard {...exampleStarshipDetailsProps}/>);
            const TopTrumpCardTitleElement = screen.getByText('Star Destroyer');
            expect(TopTrumpCardTitleElement).toHaveTextContent('Star Destroyer');
            unmount();
        });

        describe('When rendering a character top trump card', () => {
            it('Should show character details', () => {
                const { unmount } = render(<TopTrumpCard {...exampleCharacterDetailsProps} />);
                const TopTrumpCardDetailsElement = screen.getByTestId('character-details');
                expect(TopTrumpCardDetailsElement).toHaveTextContent('172');
                unmount();
            });
        });

        //TODO: When rendering a starship card should show starship details.
        describe('When rendering a starship top trump card', () => {
            it('Should show hyperdrive rating details', () => {
                const { unmount } = render(<TopTrumpCard {...exampleStarshipDetailsProps} />);
                const TopTrumpCardDetailsElement = screen.getByTestId('starship-details');
                expect(TopTrumpCardDetailsElement).toHaveTextContent('2.0');
                unmount();
            });
        });
    });
});

