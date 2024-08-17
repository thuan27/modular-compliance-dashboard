import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Task, TaskOverviewState } from "../../types/task-overview.interface";
import { mockData } from "../../datas/mockData";

const initialState: TaskOverviewState = mockData.taskOverview;

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
    updateTaskDetails: (state, action: PayloadAction<{ task: Task }>) => {
      const { task } = action.payload;
      const index = state.tasks.findIndex((t) => t.id === task.id);
      if (index !== -1) {
        state.tasks[index] = task;
      }
    },
  },
});

export const { addTask, updateTaskStatus, updateTaskDetails } =
  taskOverviewSlice.actions;
export default taskOverviewSlice.reducer;
