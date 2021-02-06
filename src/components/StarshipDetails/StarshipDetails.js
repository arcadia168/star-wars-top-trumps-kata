import { render, screen } from '@testing-library/react';
import StarshipDetails from './StarshipDetails';

const exampleStarShipDetails = {
    "name": "Republic attack cruiser",
    "model": "Senator-class Star Destroyer",
    "manufacturer": "Kuat Drive Yards, Allanteen Six shipyards",
    "cost_in_credits": "59000000",
    "length": "1137",
    "max_atmosphering_speed": "975",
    "crew": "7400",
    "passengers": "2000",
    "cargo_capacity": "20000000",
    "consumables": "2 years",
    "hyperdrive_rating": "1.0",
    "MGLT": "unknown",
    "starship_class": "star destroyer",
    "pilots": [],
    "films": [
        "http://swapi.dev/api/films/6/"
    ],
    "created": "2014-12-20T19:52:56.232000Z",
    "edited": "2014-12-20T21:23:49.946000Z",
    "url": "http://swapi.dev/api/starships/63/"
};

describe('Starship Details Component', () => {
    describe('When rendering a Top Trump Card component', () => {
        beforeEach(() => {
            render(<StarshipDetails {...exampleStarShipDetails}/>);
        });

        it('Should render a starship details component', () => {
            const StarshipDetailsElement = screen.getByTestId('starship-details');
            expect(StarshipDetailsElement).toBeInTheDocument();
        });
    });
});

