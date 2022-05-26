import axios, { AxiosPromise } from "axios";
import Context from "./context";

const BASE_URL = "https://app.cornerstone-schools.org/api";
interface CStonePromise<T> extends AxiosPromise<T> {}

export function createRequest<T = any>(parameters: RequestParameters): CStonePromise<T> {
  // Create URL
  const versionStr = parameters.context.version ? `/${parameters.context.version}` : "";
  let url = BASE_URL + versionStr + parameters.path;
  //
  const query: any = {};
  const body: any = {};
  for (const key in parameters.params) {
    if (parameters.pathParams.includes(key)) {
      url.replace(`{${key}}`, parameters.params[key]);
    } else if (parameters.bodyParams.includes(key)) {
      body[key] = parameters.params[key];
    } else {
      query[key] = parameters.params[key];
    }
  }

  // for (const key in )
  // Check sort query
  if (query.sort && Array.isArray(query.sort)) query.sort = query.sort.join(",");
  // if (typeof sort !== "string")

  return axios({
    url,
    method: parameters.method,
    headers: {
      Authorization: `Bearer ${parameters.context.key}`,
    },
    params: query,
    data: body,
  });
}

export interface RequestParameters {
  path: string;
  method: "GET" | "HEAD" | "POST" | "DELETE" | "PUT" | "CONNECT" | "OPTIONS" | "TRACE" | "PATCH";
  context: Context;
  /** The parameters entered by the user */
  params?: any;
  /** Parameters to inject into the URL path */
  pathParams: string[];
  /** Keys to add to the request body */
  bodyParams: string[];
  /** Parameters that must be added  */
  requiredParams: string[];
}
