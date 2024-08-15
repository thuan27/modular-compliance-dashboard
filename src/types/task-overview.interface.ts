export interface TaskOverviewState {
  tasks: Task[];
}

export interface Task {
  id: number;
  title: string;
  dueDate: string;
  assignedPerson: string;
  status: "pending" | "completed" | "overdue";
}
