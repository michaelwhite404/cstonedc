namespace Schema {
  type StudentStatus = "Active" | "Inactive" | "Graduate";
  export interface Student {
    /** Id of the student */
    _id: string;
    firstName: string;
    lastName: string;
    fullName: string;
    grade: number;
    schoolEmail: string;
    customID: string;
    status: StudentStatus;
    slug: string;
  }
}

export default Schema;
