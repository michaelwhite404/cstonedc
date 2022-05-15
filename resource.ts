import { AxiosError } from "axios";
import { createRequest } from "./createRequest";
import Context from "./context";
import Params from "./params";
import Student from "./Student";

namespace Resource {
  export class Students {
    context: Context;
    constructor(context: Context) {
      this.context = context;
    }
    list() {}
    async get(params: Params.Resource.Students.Get): Promise<Student> {
      try {
        const parameters = {
          url: this.context.rootURL + `/students/${params.studentId}`,
          method: "GET",
          key: this.context.key,
        };
        const res = await createRequest(parameters);
        return new Student(res.data.data.student);
      } catch (err: any) {
        throw (err as AxiosError).response?.data;
      }
    }
    create() {}
    update() {}
    delete() {}
  }
}

export default Resource;
