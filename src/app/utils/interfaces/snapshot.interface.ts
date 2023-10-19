export interface ISnapshotContent {
  type: "file" | "folder";
  name: string;
  contents: ISnapshotContent[];
  filePath?: string;
}

export interface ISnapshot {
  id: string;
  submissionId: string;
  snapshotName: string;
  snapshotPath: string;
  createdAt: string;
  updatedAt: string;
  snapshotContents: ISnapshotContent[];
}
