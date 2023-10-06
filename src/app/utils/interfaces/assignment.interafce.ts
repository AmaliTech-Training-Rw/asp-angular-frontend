// import { EditorState } from "draft-js";

import { IStudent } from "./student.interface";
import { ISubmission } from "./submission.interface";

export interface IAssignment {
  id: number;
  title: string;
  description: string;
  deadline: string;
  assignmentCode: string;
  isSubmitted?: boolean;
  students?: IStudent[];
  submissions?: ISubmission[];
}

export interface IDraftAssignment {
  id?: number;
  title: string;
  description: string;
  deadline: string;
  isDraft?: boolean;
}
