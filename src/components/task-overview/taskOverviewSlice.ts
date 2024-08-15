import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Task, TaskOverviewState } from "../../types/task-overview.interface";

const initialState: TaskOverviewState = {
  tasks: [
    {
      id: 1,
      title: "Complete Compliance Report",
      dueDate: "2024-08-20",
      assignedPerson: "Alice",
      status: "pending",
    },
    {
      id: 2,
      title: "Review Audit Logs",
      dueDate: "2024-08-15",
      assignedPerson: "Bob",
      status: "completed",
    },
    {
      id: 3,
      title: "Review Audit Logs",
      dueDate: "2024-08-15",
      assignedPerson: "Bob",
      status: "pending",
    },
    {
      id: 4,
      title: "Review Audit Logs",
      dueDate: "2024-08-15",
      assignedPerson: "Bob",
      status: "overdue",
    },
    {
      id: 5,
      title: "Review Audit Logs",
      dueDate: "2024-08-15",
      assignedPerson: "Bob",
      status: "pending",
    },
    {
      id: 6,
      title: "Review Audit Logs",
      dueDate: "2024-08-15",
      assignedPerson: "Bob",
      status: "pending",
    },
    {
      id: 7,
      title: "Review Audit Logs",
      dueDate: "2024-08-15",
      assignedPerson: "Bob",
      status: "pending",
    },
    {
      id: 8,
      title: "Review Audit Logs",
      dueDate: "2024-08-15",
      assignedPerson: "Bob",
      status: "pending",
    },
    {
      id: 9,
      title: "Review Audit Logs",
      dueDate: "2024-08-15",
      assignedPerson: "Bob",
      status: "pending",
    },
  ],
};

const taskOverviewSlice = createSlice({
  name: "taskOverview",
  initialState,
  reducers: {
    addTask(state, action: PayloadAction<Task>) {
      state.tasks.push(action.payload);
    },
    updateTaskStatus(
      state,
      action: PayloadAction<{ id: number; status: Task["status"] }>
    ) {
      const task = state.tasks.find((t) => t.id === action.payload.id);
      if (task) {
        task.status = action.payload.status;
      }
    },
  },
});

export const { addTask, updateTaskStatus } = taskOverviewSlice.actions;
export default taskOverviewSlice.reducer;
