/** A namespace for all parameter types */
export namespace Params {
  export namespace Resource {
    /** A namespace for all of parameters relating to the student resource */
    export namespace Students {
      export interface Get {
        /** The unique ID of the student */
        studentId: string;
      }
    }
  }
}
