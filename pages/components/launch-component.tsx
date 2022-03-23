import { ReactElement } from "react";
import { TLaunchData } from "../api/fetch-launch-data.types";
import Image from 'next/image';

export function Launch({ mission }: { mission: TLaunchData }): ReactElement {
    return (
        <div className="card m-2" style={{ maxWidth: "540px" }}>
            <div className="row g-0">
                <div className="col-md-4" style={{ padding: '30px' }}>
                    <Image width={'149px'} height={'190px'} src={mission.links.mission_patch_small} className="img-fluid rounded-start" alt="image of mission patch"></Image>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{mission.mission_name}</h5>
                        <p className="card-text">Launch date: {mission.launch_date_utc}</p>
                    </div>
                    <div className="card-header">
                        Cores
                    </div>
                    <ul className="list-group list-group-flush">
                        {mission.rocket.first_stage.cores.map(core =>
                            <li key={core.core_serial} className="list-group-item"> Serial: {core.core_serial} </li>)
                        }
                    </ul>
                    <div className="card-header">
                        Payloads
                    </div>
                    <ul className="list-group list-group-flush">
                        {mission.rocket.second_stage.payloads.map(payload =>
                            <li key={payload.payload_id} className="list-group-item">ID: {payload.payload_id}, Type: {payload.payload_type} </li>)
                        }
                    </ul>
                    <div className="card-body">
                        {mission.launch_success ? `Succeeded` : `Failed: ${mission.launch_failure_details.reason}`}
                    </div>
                </div>
            </div>
        </div>
    )
}