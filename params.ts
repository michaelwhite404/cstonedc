import Student from "./Student";
import PartialBy from "./types/partialBy";

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
      export interface Create extends PartialBy<Omit<Student, "_id" | "fullName">, "slug"> {}
    }
  }
}

export default Params;

interface APIMultiParams<T = any> {
  /**
   * Limit the number of results to return
   * @default 100
   * */
  limit?: number;
  page?: number;
  sort?: SortParams<T>;
}
type SortParams<T> = (keyof T | `-${string & keyof T}`)[] | string;
