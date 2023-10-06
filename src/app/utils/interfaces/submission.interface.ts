import { IAssignment } from "./assignment.interafce";
import { IStudent } from "./student.interface";

export interface ISubmission {
  id: string;
  assignmentId: number;
  studentId: number;
  submissionCode: string;
  head: string;
  snapshots: string[];
  student: IStudent;
  assignment: IAssignment;
  createdAt: string;
  updatedAt: string;
}
