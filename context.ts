export default interface Context {
  /** API key */
  key: string;
  /** The version of the API to use */
  version?: "v1" | "v2";
  /** Root URL for all API requests*/
  rootURL?: string;
}
