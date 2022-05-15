import { AxiosError } from "axios";
import { createRequest } from "./createRequest";
import Context from "./context";
import Params from "./params";
import Schema from "./schemas";
// import Schema from "./schemas";

namespace Resource {
  export class Students {
    context: Context;
    constructor(context: Context) {
      this.context = context;
    }
    list() {}
    async get(params: Params.Resource.Students.Get): Promise<Schema.Student> {
      try {
        const parameters = {
          url: this.context.rootURL + `/students/${params.studentId}`,
          method: "GET",
          key: this.context.key,
        };
        const res = await createRequest(parameters);
        return res.data.data.student;
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
