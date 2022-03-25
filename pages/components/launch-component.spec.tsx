import { render, screen } from '@testing-library/react';
import { Launch } from './launch-component';
import '@testing-library/jest-dom';
import { missionData } from '../shared/mission-data.mocked';

describe('Launch component', () => {
    it('should render successfully', () => {
        const { baseElement } = render(
            <Launch mission={missionData} />
        );

        expect(baseElement).toBeTruthy();
    });

    it('should display the correct data', () => {
        render(
            <Launch mission={missionData} />
        );

        expect(screen.getByText('FalconSat')).toBeInTheDocument();
        expect(screen.getByText('Launch date: Fri Mar 24 2006')).toBeInTheDocument();
        expect(screen.getByText('Serial: Merlin1A')).toBeInTheDocument();
        expect(screen.getByText('Payloads')).toBeInTheDocument();
        expect(screen.getByText('ID: FalconSAT-2, Type: Satellite')).toBeInTheDocument();
        expect(screen.getByText('Flight Status: Succeeded')).toBeInTheDocument();

    });

    it('should display the correct data when mission failed', () => {
        missionData.launch_success = false;
        missionData.launch_failure_details = {
            time: 1,
            reason: 'merlin engine failure',
        };

        render(
            <Launch mission={missionData} />
        );

        expect(screen.getByText('FalconSat')).toBeInTheDocument();
        expect(screen.getByText('Launch date: Fri Mar 24 2006')).toBeInTheDocument();
        expect(screen.getByText('Serial: Merlin1A')).toBeInTheDocument();
        expect(screen.getByText('Payloads')).toBeInTheDocument();
        expect(screen.getByText('ID: FalconSAT-2, Type: Satellite')).toBeInTheDocument();
        expect(screen.getByText('Flight Status: Failed - merlin engine failure')).toBeInTheDocument();
    });
})