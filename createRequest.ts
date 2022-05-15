import axios, { AxiosPromise } from "axios";
import Context from "./context";

const BASE_URL = "https://app.cornerstone-schools.org/api";
interface CStonePromise<T> extends AxiosPromise<T> {}

export function createRequest<T = any>(parameters: RequestParameters): CStonePromise<T> {
  const versionStr = parameters.context.version ? `/${parameters.context.version}` : "";
  let url = BASE_URL + versionStr + parameters.path;
  parameters.pathParams.forEach((p) => (url = url.replace(`{${p}}`, parameters.params[p])));
  return axios({
    url,
    method: parameters.method,
    headers: {
      Authorization: `Bearer ${parameters.context.key}`,
    },
  });
}

export interface RequestParameters {
  path: string;
  method: "GET" | "HEAD" | "POST" | "DELETE" | "PUT" | "CONNECT" | "OPTIONS" | "TRACE" | "PATCH";
  context: Context;
  params: any;
  pathParams: string[];
}
