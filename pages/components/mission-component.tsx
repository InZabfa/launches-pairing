import { ReactElement } from "react";
import { TLaunchData } from "../api/fetch-launch-data.types";
import { Launch } from "./launch-component";

export function MissionComponent({ launchData }: { launchData: TLaunchData[] }): ReactElement {
    return (
        <div className='row row-cols-1 row-cols-md-2 g-4'>
            {launchData.map(mission => <Launch key={mission.flight_number} mission={mission} />)}
        </div>
    );
}