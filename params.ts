import Student from "./Student";

/** A namespace for all parameter types */
namespace Params {
  export namespace Resource {
    /** A namespace for all of parameters relating to the student resource */
    export namespace Students {
      export interface Get {
        /** The unique ID of the student */
        studentId: string;
      }
      export interface List extends Partial<Student>, APIMultiParams<Student> {}
    }
  }
}

export default Params;

interface APIMultiParams<T = any> {
  /** Limit the number of results to return */
  limit?: number;
  page?: number;
  sort?: SortParams<T>;
}
type SortParams<T> = (keyof T | `-${string & keyof T}`)[];
