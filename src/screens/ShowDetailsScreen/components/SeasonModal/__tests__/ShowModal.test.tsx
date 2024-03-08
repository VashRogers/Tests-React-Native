import React, {createRef} from 'react';
import {render, act, fireEvent} from '@testing-library/react-native';
import {SeasonModal} from '../SeasonModal';
import {Modalize} from 'react-native-modalize';

describe('SeasonModal', () => {
    test('the component rendered', () => {
        const modalizeRef = createRef<Modalize>();

        const {getAllByText} = render(
            <SeasonModal
                ref={modalizeRef}
                onSelectSeason={season => console.log('test')}
                selectedSeason="1"
                seasons={['1', '2', '3']}
            />,
        );

        act(() => {
            modalizeRef.current?.open();
        });

        expect(getAllByText('Season', {exact: false}).length).toEqual(3);
    });

    test('call onSelectSeason with correct season when season was pressed', () => {
        const modalizeRef = createRef<Modalize>();

        const onSelectSeason = jest.fn();

        const {getByText} = render(
            <SeasonModal
                ref={modalizeRef}
                onSelectSeason={onSelectSeason}
                selectedSeason="1"
                seasons={['1', '2', '3']}
            />,
        );

        act(() => {
            modalizeRef.current?.open();
        });

        const season2Element = getByText(/season 2/i);

        fireEvent.press(season2Element);

        expect(onSelectSeason).toBeCalledWith('2');
    });
});
