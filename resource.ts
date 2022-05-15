import { Params } from "./params";

export namespace Resource {
  export class Students {
    constructor() {}
    list() {}
    get(params: Params.Resource.Students.Get) {
      return {
        _id: params.studentId,
      };
    }
    create() {}
    update() {}
    delete() {}
  }
}
