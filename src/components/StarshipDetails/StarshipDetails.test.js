import { render, screen } from '@testing-library/react';
import StarshipDetails from './StarshipDetails';

const exampleStarShipDetails =  {
    "hyperdriveRating": "2.0",
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
            const StarshipDetailsElement = screen.getByTestId('starship-details');
            expect(StarshipDetailsElement).toHaveTextContent('2.0');
        });

        //TODO: Render out other COMPARABLE properties later
    });
});

