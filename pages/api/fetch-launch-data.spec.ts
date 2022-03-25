import fetch from 'node-fetch';
import '@testing-library/jest-dom';
import { missionData } from '../shared/mission-data.mocked';
import fetchLaunchData from './fetch-launch-data';

const { Response } = jest.requireActual('node-fetch');
jest.mock('node-fetch');

describe('Launch data', () => {
    it('should GET data from API', async () => {
        (fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
            new Response(JSON.stringify(missionData))
        );

        await fetchLaunchData();
        expect(fetch).toHaveBeenCalledTimes(1);
        expect(fetch).toHaveBeenCalledWith(
            `https://api.spacexdata.com/v3/launches`,
            {
                method: 'GET',
                headers: {
                    'Accept': 'application/json; charset=utf-8',
                    'Content-Type': 'application/json; charset=utf-8',
                },
            }
        );
    });
});