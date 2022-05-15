import axios, { AxiosPromise } from "axios";

const BASE_URL = "https://app.cornerstone-schools.org/api";
interface CStonePromise<T> extends AxiosPromise<T> {}

export function createRequest<T = any>(parameters?: any): CStonePromise<T> {
  return axios({
    url: parameters.url,
    method: parameters.method,
    headers: {
      Authorization: `Bearer ${parameters.key}`,
    },
  });
}
