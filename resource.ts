import { AxiosError } from "axios";
import { createRequest, RequestParameters } from "./createRequest";
import Context from "./context";
import Params from "./params";
import Student from "./Student";
import Schema from "./schemas";
import Class from "./Class";

class Me {}
namespace Resource {
  export class Students {
    private readonly context: Context;
    constructor(context: Context) {
      this.context = context;
    }
    async list(params?: Params.Resource.Students.List): Promise<Student[]> {
      try {
        const parameters: RequestParameters = {
          path: "/students",
          method: "GET",
          context: this.context,
          params,
          pathParams: [],
          bodyParams: [],
          requiredParams: [],
        };
        const res = await createRequest(parameters);

        return res.data.data.students.map((student: Schema.Student) => new Student(student));
      } catch (err: any) {
        throw (err as AxiosError).response?.data;
      }
    }
    async get(params: Params.Resource.Students.Get): Promise<Student> {
      try {
        const parameters: RequestParameters = {
          path: "/students/{studentId}",
          method: "GET",
          context: this.context,
          params,
          pathParams: ["studentId"],
          bodyParams: [],
          requiredParams: ["studentId"],
        };
        const res = await createRequest(parameters);
        return new Student(res.data.data.student);
      } catch (err: any) {
        throw (err as AxiosError).response?.data;
      }
    }
    async create(params: Params.Resource.Students.Create) {
      try {
        const parameters: RequestParameters = {
          path: "/students",
          method: "POST",
          context: this.context,
          params,
          pathParams: [],
          bodyParams: [
            "firstName",
            "lastName",
            "schoolEmail",
            "personalEmail",
            "status",
            "grade",
            "slug",
            "mainPhoto",
            "slug",
            "aftercare",
          ],
          requiredParams: ["firstName", "lastName", "schoolEmail", "status"],
        };
        const res = await createRequest(parameters);
        return new Student(res.data.data.student);
      } catch (err: any) {
        throw (err as AxiosError).response?.data;
      }
    }
    async update(params: Params.Resource.Students.Update) {}
    async delete() {}
    async group() {
      try {
        const parameters: RequestParameters = {
          path: "/students/group",
          method: "GET",
          context: this.context,
          pathParams: [],
          bodyParams: [],
          requiredParams: [],
        };
        const res = await createRequest(parameters);
        return (res.data.data.grades as Class[]).map((c) => new Class(c.grade, c.students));
      } catch (err: any) {
        throw (err as AxiosError).response?.data;
      }
    }
  }
}

export default Resource;
