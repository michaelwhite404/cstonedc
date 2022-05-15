import Schema from "./schemas";

export type StudentStatus = "Active" | "Inactive" | "Graduate";
export type StudentGrade = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export default class Student {
  _id: string;
  firstName: string;
  lastName: string;
  fullName: string;
  grade?: StudentGrade;
  schoolEmail: string;
  personalEmail?: string;
  status: StudentStatus;
  customID?: string;
  mainPhoto?: string;
  slug: string;
  aftercare?: boolean;
  constructor(student: Schema.Student) {
    this._id = student._id;
    this.firstName = student.firstName;
    this.lastName = student.lastName;
    this.fullName = student.fullName;
    this.grade = student.grade;
    this.schoolEmail = student.schoolEmail;
    this.status = student.status;
    this.customID = student.customID;
    this.mainPhoto = student.mainPhoto;
    this.slug = student.slug;
    this.aftercare = student.aftercare;
  }
}
