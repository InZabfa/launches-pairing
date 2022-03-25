import { render, screen } from '@testing-library/react';
import { Launch } from './launch-component';
import '@testing-library/jest-dom';
import { missionData } from '../shared/mission-data.mocked';
import { MissionComponent } from './mission-component';

describe('Mission component', () => {
    it('should render successfully', () => {
        const { baseElement } = render(
            <MissionComponent launchData={[missionData]} />
        );

        expect(baseElement).toBeTruthy();
    });
});