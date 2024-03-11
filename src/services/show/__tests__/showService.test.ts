import {api} from '../../api';
import {showService} from '../showService';
import {episode1, episode22, episodeList} from './mocks';
/* Este teste lida com chamadas da api e testes de services na api, será um bom exemplo uso de testes para api */
describe('showService', () => {
    describe('getEpisodes', () => {
        beforeAll(() => {
            jest.spyOn(api, 'get').mockResolvedValue({data: episodeList});
        });
        test('when API return episode list, return a list of grouped episodes', async () => {
            const groupedEpisodes = await showService.getEpisodes('300');

            expect(groupedEpisodes.seasonNames.includes('1')).toBeTruthy();
            expect(groupedEpisodes.seasonNames.includes('2')).toBeTruthy();
        });

        test('when API return episode list, the episodes grouped by season', async () => {
            const groupedEpisodes = await showService.getEpisodes('300');

            const season1 = groupedEpisodes.seasons[1];
            const season2 = groupedEpisodes.seasons[2];

            expect(season1.includes(episode1)).toBeTruthy();
            expect(season2.includes(episode22)).toBeTruthy();
        });
    });
});
