import { IAssignment } from "./assignment.interafce";
import { Lecturer } from "./lecturer.interface";
import { ISnapshot } from "./snapshot.interface";
import { IStudent } from "./student.interface";
import { ISubmission } from "./submission.interface";
import { IUser } from "./user.interface";

export interface IState {
  loading: boolean;
  error: string | null;
}

export interface IStateWithLecturers extends IState {
  lecturers: Lecturer[];
}

export interface IStateWithStudents extends IState {
  students: IStudent[];
}

export interface AuthState extends IState {
  loggedIn: boolean;
  user: IUser | null;
}

export interface IStateWithAssignments {
  publishedAssignments: AssignmentState;
  draftAssignments: AssignmentState;
  singleAssignment: {
    assignment: IAssignment | null;
    loading: boolean;
    error: string | null;
  };
}

export interface AssignmentState extends IState {
  assignments: IAssignment[];
}

export interface ISubmissionState {
  allSubmissions: {
    submissions: ISubmission[];
    loading: boolean;
    error: string | null;
  };
  singleAssignmentSubmissions: {
    submission: null;
    loading: boolean;
    error: string | null;
  };
  singleSubmission: {
    submission: null;
    loading: false;
    error: string | null;
  };
}

export interface IStateWithSnapshots {
  snapshots: {
    snapshots: ISnapshot[];
    loading: boolean;
    error: string | null;
  };
  singleSnapshot: {
    snapshot: ISnapshot | null;
    loading: boolean;
    error: string | null;
    downloading: boolean;
    fileContents: string | null;
  };
}
