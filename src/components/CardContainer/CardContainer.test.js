import { render, screen } from '@testing-library/react';
import CardContainer from './CardContainer';

describe('Card Container Component', () => {
    describe('When rendering the card container component', () => {
        it('Should render a card container component', () => {
            render(<CardContainer />);
            const cardContainerElement = screen.getByTestId('card-container');
            expect(cardContainerElement).toBeInTheDocument();
        });
    });
});
