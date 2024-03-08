import React from 'react';
import {render} from '@testing-library/react-native';
import {StarRating} from '../StarRating';

//describe engloba as funções de determinado componente e.g.: o componente "StarRating"
describe('StarRating', () => {
    describe('rating was passed', () => {
        it('show the average', () => {
            const {getAllByText} = render(<StarRating rating={{average: 7}} />);

            const element = getAllByText('7');
            expect(element).toBeTruthy();
        });

        it('show the star icon', () => {
            const {getByTestId} = render(<StarRating rating={{average: 7}} />);

            const icon = getByTestId('starIcon');
            expect(icon).toBeTruthy();
        });
    });

    // describe('rating was not passing', () => {
    //     it('the component return nothing', () => {
    //         const {container} = render(<StarRating />);

    //         expect(container.children).toEqual([]);
    //     });
    // });
    // test('if passed rating show the average and star icon', () => {
    //     //test pode ser o mesmo que it, um jeito melhor de escrever.
    //     // aqui vai o teste
    //     // render(<StarRating rating={{average: 7}} />); //Verifica se o componente é renderizado
    //     const {getByText, getByTestId} = render(
    //         <StarRating rating={{average: 7}} />,
    //     );
    //     // debug(); // debug mostra o componente testado renderizado no terminal.

    //     const element = getByText('7'); // pega o elemento com a string indicada
    //     const icon = getByTestId('starIcon'); //pega o elemento com o testId

    //     expect(icon).toBeTruthy(); // espera se o icone é "verdadeiro"
    //     expect(element).toBeTruthy(); // espera se o elemento é "verdadeiro"
    // });
});
