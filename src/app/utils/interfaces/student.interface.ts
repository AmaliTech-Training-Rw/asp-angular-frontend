export interface IStudent {
  id: number;
  studentId: string;
  userId: number;
  user: {
    firstname: string;
    lastname: string;
    email: string;
    id: number;
  };
  image?: string;
  color?: string;
}

export interface StudentAction {
  type: "edit" | "delete" | null;
  student: IStudent | null;
}
