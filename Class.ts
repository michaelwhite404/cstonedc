import Student from "Student";

interface ISimpleStudent {
  id: Student["_id"];
  fullName: Student["fullName"];
}

interface IClass {
  count: number;
  students: SimpleStudent[];
  grade: number;
}

class SimpleStudent implements ISimpleStudent {
  id: string;
  fullName: string;
  constructor(id: string, fullName: string) {
    this.id = id;
    this.fullName = fullName;
  }
}

export default class Class implements IClass {
  count: number;
  students: SimpleStudent[];
  grade: number;
  constructor(grade: number, students: SimpleStudent[]) {
    this.count = students.length;
    this.students = students.map((s) => new SimpleStudent(s.id, s.fullName));
    this.grade = grade;
  }
}
