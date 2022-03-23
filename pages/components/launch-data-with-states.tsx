import GetLaunchData from "../api/get-launch-data";
import { MissionComponent } from "./mission-component";

export default function LaunchDataWithStates() {
    const payload = GetLaunchData();
    const data = payload.data?.slice(0, 10);

    if (payload.isLoading) {
        return (

            <div className="text-center">
                <div className="spinner-border" role="status" />
                <p>Loading...</p>
            </div>

        )
    }

    if (payload.error) {
        return (
            <div className="alert alert-danger" role="alert">
                Oops! Something went wrong
            </div>
        )
    }

    return (
        <div>
            <MissionComponent launchData={data} />
        </div>
    )
}