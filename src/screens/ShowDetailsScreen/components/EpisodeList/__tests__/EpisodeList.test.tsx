
import React from 'react';
import {EpisodeList} from '../EpisodeList';
import {mocks} from './mocks';
import {showService} from '../../../../../services/show/showService';
import { render } from 'test-utils';

describe('EpisodeList', () => {
    test('The component should rendered', async () => {
        jest.spyOn(showService, 'getEpisodes').mockResolvedValueOnce({
            seasonNames: ['1', '2'],
            seasons: {
                1: [mocks.episode1, mocks.episode2],
                2: [mocks.episode22, mocks.episode23],
            },
        });

        const {getByText, findByText} = render(<EpisodeList show={mocks.show} />);

        const episode1 = await findByText(mocks.episode1.name);//maneira mais curta de implementação com o waitFor
        const episode2 = getByText(mocks.episode2.name);//usa o getBy para evitar um erro, se o ep1 aparece entao o ep 2 tbm aparece, logo um getByText para ep2 ja é suficiente
        // await waitFor(() => {
        //     getByText(mocks.episode1.name);
        // })

        expect(episode1).toBeTruthy();
        expect(episode2).toBeTruthy();
    });
});
