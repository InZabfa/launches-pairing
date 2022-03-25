import { TLaunchData } from "../api/fetch-launch-data.types";

export const missionData: TLaunchData = {
    mission_name: 'FalconSat',
    launch_date_utc: '2006-03-24T22:30:00.000Z',
    rocket: {
        rocket_id: "falcon1",
        rocket_name: "Falcon 1",
        rocket_type: "Merlin A",
        first_stage: {
            cores: [{
                core_serial: 'Merlin1A'
            }]
        },
        second_stage: {
            payloads: [{
                payload_id: 'FalconSAT-2',
                payload_type: 'Satellite',
                reused: false,
                orbit: 'LEO',
                orbit_params: {},
            }]
        }
    },
    links: {
        mission_patch_small: 'https://images2.imgbox.com/3c/0e/T8iJcSN3_o.png'
    },
    launch_success: true,
    flight_number: 0,
    upcoming: false,
    launch_year: '',
    launch_date_unix: 0,
    launch_date_local: '',
    is_tentative: false,
    tentative_max_precision: '',
    tbd: false,
    telemetry: {
        flight_club: ''
    },
    launch_site: {
        site_id: '',
        site_name: '',
        site_name_long: ''
    }
}