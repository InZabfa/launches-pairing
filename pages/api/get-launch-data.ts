import { useQuery } from "react-query";
import fetchLaunchData from "./fetch-launch-data";
import { TLaunchData } from "./fetch-launch-data.types";

export default function GetLaunchData() {
    const { data, isLoading, error } = useQuery<TLaunchData[], Response>('LaunchData', fetchLaunchData);

    return { data, isLoading, error };
}