import { TournamentService } from '../services/TournamentService';

beforeEach(() => {
    global.fetch = jest.fn(() =>
        Promise.resolve({
            ok: true,
            json: () =>
                Promise.resolve([
                    {
                        "id": 1,
                        "sportId": 1,
                        "name": "UEFA Champions league"
                    },
                    {
                        "id": 2,
                        "sportId": 2,
                        "name": "NBA"
                    }
                ]),
        })
    );
});

afterEach(() => {
    jest.resetAllMocks();
});

describe('TournamentService', () => {
    it('fetches tournaments correctly', async () => {
        const tournaments = await TournamentService.getTournaments();
        expect(global.fetch).toHaveBeenCalledWith('/api/tournament/all', { method: 'GET' });
        expect(tournaments).toHaveLength(2);
        expect(tournaments[1].name).toBe('NBA');
    });

    it('throws error on bad response', async () => {
        global.fetch.mockImplementationOnce(() =>
            Promise.resolve({ ok: false, status: 500 })
        );

        await expect(TournamentService.getTournaments()).rejects.toThrow(
            'Request failed with status code 500'
        );
    });
});