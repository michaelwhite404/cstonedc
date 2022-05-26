import Schema from "./schemas";

export type StudentStatus = "Active" | "Inactive" | "Graduate";
export type StudentGrade = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export default class Student {
  /** The student's id */
  _id: string;
  /** The student's first name */
  firstName: string;
  /** The student's last name */
  lastName: string;
  /** The student's full name */
  fullName: string;
  /** The student's grade */
  grade?: StudentGrade;
  /** The students school email */
  schoolEmail: string;
  personalEmail?: string;
  /** The student's current status */
  status: StudentStatus;
  customID?: string;
  /** The student's photo */
  mainPhoto?: string;
  /** The student's URL ending identifier */
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
