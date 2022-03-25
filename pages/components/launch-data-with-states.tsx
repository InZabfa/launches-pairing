import { ReactElement } from "react";
import GetLaunchData from "../api/get-launch-data";
import { MissionComponent } from "./mission-component";

export function LaunchDataWithStates(): ReactElement {
    const payload = GetLaunchData();
    const data = payload.data?.slice(0, 10);

    const LoadingComponent = () => (
        <div className="text-center">
            <div className="spinner-border" role="status" />
            <p>Loading...</p>
        </div>
    );

    const ErrorComponent = () => (
        <div className="alert alert-danger" role="alert">
            Oops! Something went wrong
        </div>
    );

    if (payload.error) {
        return (
            <ErrorComponent />
        );
    }

    return payload.isLoading
        ? <LoadingComponent />
        : <MissionComponent launchData={data} />
}