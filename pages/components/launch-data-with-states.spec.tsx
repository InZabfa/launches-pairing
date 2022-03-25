import '@testing-library/jest-dom';
import { render, screen, waitFor, waitForElementToBeRemoved } from '@testing-library/react';
import { mocked } from 'ts-jest/dist/utils/testing';
import fetchLaunchData from '../api/fetch-launch-data';
import { LaunchDataWithStates } from './launch-data-with-states';
import { QueryClient, QueryClientProvider } from 'react-query';

jest.mock('../api/fetch-launch-data');
const mockFetchLaunchData = mocked(fetchLaunchData);

describe('Launch data with states', () => {
    it('should render is loading', async () => {
        const queryClient = new QueryClient();
        mockFetchLaunchData.mockResolvedValueOnce([]);

        render(
            <QueryClientProvider client={queryClient}>
                <LaunchDataWithStates />
            </QueryClientProvider>
        );

        await waitFor(() => {
            expect(
                screen.getByText(
                    'Loading...'
                )
            ).toBeInTheDocument();
        });
    });
});

