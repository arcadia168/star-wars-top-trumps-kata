import { render, screen } from '@testing-library/react';
import StarshipDetails from './StarshipDetails';

const exampleStarShipDetails =  {
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

describe('Starship Details Component', () => {
    describe('When rendering a Starship Details component', () => {
        beforeEach(() => {
            render(<StarshipDetails {...exampleStarShipDetails}/>);
        });

        it('Should render a starship details component', () => {
            const StarshipDetailsElement = screen.getByTestId('starship-details');
            expect(StarshipDetailsElement).toBeInTheDocument();
        });

        it('Should render the starship hyperdrive rating', () => {
            const CharacterDetailsElement = screen.getByTestId('starship-details');
            expect(CharacterDetailsElement).toHaveTextContent('2.0');
        });
    });
});

