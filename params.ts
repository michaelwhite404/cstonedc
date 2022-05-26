import Student from "./Student";

interface StudentId {
  /** The unique ID of the student */
  studentId: string;
}

/** A namespace for all parameter types */
namespace Params {
  export namespace Resource {
    /** A namespace for all of parameters relating to the student resource */
    export namespace Students {
      export interface Get extends StudentId {}
      export interface List extends Partial<Student>, APIMultiParams<Student> {}
      export interface Create extends Omit<Student, "_id" | "fullName" | "slug"> {}
      export interface Update extends StudentId {}
      export interface Delete extends StudentId {}
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
