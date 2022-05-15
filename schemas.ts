namespace Schema {
  export type StudentStatus = "Active" | "Inactive" | "Graduate";
  export type StudentGrade = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  export interface Student {
    /** Id of the student */
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
    /** Denotes if a student is in aftercare */
    aftercare?: boolean;
  }
}

export default Schema;
