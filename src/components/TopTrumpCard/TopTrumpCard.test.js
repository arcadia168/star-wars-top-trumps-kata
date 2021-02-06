import { cleanup, render, screen } from '@testing-library/react';
import TopTrumpCard from './TopTrumpCard';

//TODO: Move these JSON examples into folder to avoid repeated definition.
const exampleStarshipDetailsProps = {
    "cardType": "starship",
    "name": "Star Destroyer",
    "model": "Imperial I-class Star Destroyer",
    "manufacturer": "Kuat Drive Yards",
    "cost_in_credits": "150000000",
    "length": "1,600",
    "max_atmosphering_speed": "975",
    "crew": "47,060",
    "passengers": "n/a",
    "cargo_capacity": "36000000",
    "consumables": "2 years",
    "hyperdrive_rating": "2.0",
    "MGLT": "60",
    "starship_class": "Star Destroyer",
    "pilots": [],
    "films": [
        "http://swapi.dev/api/films/1/",
        "http://swapi.dev/api/films/2/",
        "http://swapi.dev/api/films/3/"
    ],
    "created": "2014-12-10T15:08:19.848000Z",
    "edited": "2014-12-20T21:23:49.870000Z",
    "url": "http://swapi.dev/api/starships/3/"
};

const exampleCharacterDetailsProps = {
    "cardType": "character",
    "name": "Luke Skywalker",
    "height": "172",
    "mass": "77",
    "hair_color": "blond",
    "skin_color": "fair",
    "eye_color": "blue",
    "birth_year": "19BBY",
    "gender": "male",
    "homeworld": "http://swapi.dev/api/planets/1/",
    "films": [
        "http://swapi.dev/api/films/1/",
        "http://swapi.dev/api/films/2/",
        "http://swapi.dev/api/films/3/",
        "http://swapi.dev/api/films/6/"
    ],
    "species": [],
    "vehicles": [
        "http://swapi.dev/api/vehicles/14/",
        "http://swapi.dev/api/vehicles/30/"
    ],
    "starships": [
        "http://swapi.dev/api/starships/12/",
        "http://swapi.dev/api/starships/22/"
    ],
    "created": "2014-12-09T13:50:51.644000Z",
    "edited": "2014-12-20T21:17:56.891000Z",
    "url": "http://swapi.dev/api/people/1/"
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

