import { Resource } from "./resource";

interface CStoneInit {
  key: string;
  version?: "v1" | "v2";
}

interface ICStone {
  students: Resource.Students;
}

class CStone implements ICStone {
  private readonly key: string;
  students: Resource.Students;
  devices: string;
  textbooks: string;
  users: string;
  timesheets: string;
  constructor(options: CStoneInit) {
    this.key = options.key;
    // /
    this.students = new Resource.Students();
    this.devices = "";
    this.textbooks = "";
    this.users = "";
    this.timesheets = "";
  }
}

const cstone = new CStone({ key: "ey354534f.fergergefdv.ergetrdgrf" });
const student = cstone.students.get({
  studentId: "607ed539adce853f953",
});
