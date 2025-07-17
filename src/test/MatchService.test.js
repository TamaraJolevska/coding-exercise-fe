import { MatchService } from '../services/MatchService';

beforeEach(() => {
    global.fetch = jest.fn(() =>
        Promise.resolve({
            ok: true,
            json: () =>
                Promise.resolve([
                    {
                        id: 1,
                        tournamentId: 2,
                        start_time: '2025-01-01T00:00:00Z',
                        status: 'COMPLETED',
                        home_team: 'Team A',
                        away_team: 'Team B',
                        home_score: '2',
                        away_score: '1',
                    },
                ]),
        })
    );
});

afterEach(() => {
    jest.resetAllMocks();
});

describe('MatchService', () => {
    it('fetches matches correctly', async () => {
        const matches = await MatchService.getMatches();
        expect(global.fetch).toHaveBeenCalledWith('/api/match/all', { method: 'GET' });
        expect(matches).toHaveLength(1);
        expect(matches[0].home_team).toBe('Team A');
    });

    it('throws error on bad response', async () => {
        global.fetch.mockImplementationOnce(() =>
            Promise.resolve({ ok: false, status: 500 })
        );

        await expect(MatchService.getMatches()).rejects.toThrow(
            'Request failed with status code 500'
        );
    });
});