import { IUser } from "./user.interface";

export interface ILecturer {
  id: number;
  lastname: string;
  firstname: string;
  email: string;
}

export interface Lecturer {
  id: number;
  userId: number;
  staffId: string;
  user: IUser;
}

export interface LecturerAction {
  type: "edit" | "delete" | null;
  lecturer: Lecturer | null;
}
