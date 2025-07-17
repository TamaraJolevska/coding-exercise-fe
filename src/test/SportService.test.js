import { SportService } from '../services/SportService';

beforeEach(() => {
    global.fetch = jest.fn(() =>
        Promise.resolve({
            ok: true,
            json: () =>
                Promise.resolve([
                    {
                        "id": 1,
                        "name": "Football"
                    },
                ]),
        })
    );
});

afterEach(() => {
    jest.resetAllMocks();
});

describe('SportService', () => {
    it('fetches sports correctly', async () => {
        const sports = await SportService.getSports();
        expect(global.fetch).toHaveBeenCalledWith('/api/sport/all', { method: 'GET' });
        expect(sports).toHaveLength(1);
        expect(sports[0].name).toBe('Football');
    });

    it('throws error on bad response', async () => {
        global.fetch.mockImplementationOnce(() =>
            Promise.resolve({ ok: false, status: 500 })
        );

        await expect(SportService.getSports()).rejects.toThrow(
            'Request failed with status code 500'
        );
    });
});