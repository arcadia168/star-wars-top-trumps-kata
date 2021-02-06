import { render, screen } from '@testing-library/react';
import CardContainer from './CardContainer';

describe('Card Container Component', () => {
    describe('When rendering the card container component', () => {
        it('Should render a card container component', () => {
            render(<CardContainer />);
            const cardContainerElement = screen.getByTestId('card-container');
            expect(cardContainerElement).toBeInTheDocument();
        });

        describe('When initially rendering the component, at the start of a game', () => {
            it('Should show the user a choice of which deck to pick', () => {
                const { unmount } = render(<CardContainer />);
                const ChooseCardTypeContainer = screen.getByTestId('choose-card-type');
                expect(ChooseCardTypeContainer).toHaveTextContent('Choose Starships');
                unmount();
            });
        });
    });
});
