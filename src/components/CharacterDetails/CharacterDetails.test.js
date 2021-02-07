import { render, screen } from '@testing-library/react';
import CharacterDetails from './CharacterDetails';

const exampleCharacterDetailsProps = {
    "characterHeight": "172",
};

describe('Character Details Component', () => {
    describe('When rendering a Character Details component', () => {
        beforeEach(() => {
            render(<CharacterDetails {...exampleCharacterDetailsProps}/>);
        });

        it('Should render a character details component', () => {
            const CharacterDetailsElement = screen.getByTestId('character-details');
            expect(CharacterDetailsElement).toBeInTheDocument();
        });

        //TODO: Reduce to just measurable characteristics?
        //TODO: Combine into one test with multiple assertions?

        it('Should render the character height', () => {
            const CharacterDetailsElement = screen.getByTestId('character-details');
            expect(CharacterDetailsElement).toHaveTextContent('172');
        });

        // it('Should render the character mass', () => {
        //     const CharacterDetailsElement = screen.getByTestId('character-details');
        //     expect(CharacterDetailsElement).toHaveTextContent('77');
        // });

        // it('Should render the character hair color', () => {
        //     const CharacterDetailsElement = screen.getByTestId('character-details');
        //     expect(CharacterDetailsElement).toHaveTextContent('blond');
        // });
        // it('Should render the character skin color', () => {
        //     const CharacterDetailsElement = screen.getByTestId('character-details');
        //     expect(CharacterDetailsElement).toHaveTextContent('fair');
        // });

        // it('Should render the character eye color', () => {
        //     const CharacterDetailsElement = screen.getByTestId('character-details');
        //     expect(CharacterDetailsElement).toHaveTextContent('blue');
        // });

        // it('Should render the character birth year', () => {
        //     const CharacterDetailsElement = screen.getByTestId('character-details');
        //     expect(CharacterDetailsElement).toHaveTextContent('19BBY');
        // });
    });
});

