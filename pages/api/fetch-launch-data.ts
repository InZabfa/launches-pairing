import { TLaunchData } from "./fetch-launch-data.types";
import fetch from 'node-fetch';

export default async function fetchLaunchData(): Promise<TLaunchData[]> {
  const response = await fetch(`https://api.spacexdata.com/v3/launches`,
    {
      method: 'GET',
      headers: {
        'Accept': 'application/json; charset=utf-8',
        'Content-Type': 'application/json; charset=utf-8',
      }
    }
  );

  if (!response.ok) {
    throw response;
  };

  return await response.json();
}