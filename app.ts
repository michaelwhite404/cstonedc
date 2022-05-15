import Context from "./context";
import Resource from "./resource";

interface ICStone {
  students: Resource.Students;
}

export default class CStone implements ICStone {
  private readonly context: Context;
  students: Resource.Students;
  devices: string;
  textbooks: string;
  users: string;
  timesheets: string;
  constructor(context: Context) {
    this;
    this.context = {
      ...context,
    };
    this.students = new Resource.Students(this.context);
    this.devices = "";
    this.textbooks = "";
    this.users = "";
    this.timesheets = "";
  }
}
