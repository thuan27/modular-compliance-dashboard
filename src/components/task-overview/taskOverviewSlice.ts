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

// import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { Task, TaskOverviewState } from "../../types/task-overview.interface";
// import { ComplianceStatusState } from "../../types/compliance-status.interface";
// import { mockData } from "../../datas/mockData";

// const initialTaskState: Task[ơ] = mockData.taskOverview.tasks;
// const initialState: TaskOverviewState & ComplianceStatusState = {
//   tasks: [...initialTaskState],
//   metrics: [
//     { label: "Pending Tasks", value: 0 },
//     { label: "Overdue Tasks", value: 0 },
//     { label: "Completed Tasks", value: 0 },
//   ],
// };

// const calculateMetrics = (tasks: Task[]) => {
//   const totalTasks = tasks.length;
//   const pendingTasks = tasks.filter((task) => task.status === "pending").length;
//   const overdueTasks = tasks.filter((task) => task.status === "overdue").length;
//   const completedTasks = tasks.filter((task) => task.status === "completed").length;

//   return [
//     { name: "Pending Tasks", value: parseFloat(((pendingTasks / totalTasks) * 100).toFixed(2)) },
//     { name: "Overdue Tasks", value: parseFloat(((overdueTasks / totalTasks) * 100).toFixed(2)) },
//     { name: "Completed Tasks", value: parseFloat(((completedTasks / totalTasks) * 100).toFixed(2)) },
//   ];
// };

// const taskOverviewSlice = createSlice({
//   name: "taskOverview",
//   initialState,
//   reducers: {
//     addTask(state, action: PayloadAction<Task>) {
//       state.tasks.push(action.payload);
//       state.metrics = calculateMetrics(state.tasks);
//     },
//     updateTaskStatus(state, action: PayloadAction<{ id: number; status: Task["status"] }>) {
//       const task = state.tasks.find((t) => t.id === action.payload.id);
//       if (task) {
//         task.status = action.payload.status;
//       }
//       state.metrics = calculateMetrics(state.tasks);
//     },
//     updateTaskDetails(state, action: PayloadAction<{ task: Task }>) {
//       const { task } = action.payload;
//       const index = state.tasks.findIndex((t) => t.id === task.id);
//       if (index !== -1) {
//         state.tasks[index] = task;
//       }
//       state.metrics = calculateMetrics(state.tasks);
//     },
//   },
// });

// export const { addTask, updateTaskStatus, updateTaskDetails } = taskOverviewSlice.actions;
// export default taskOverviewSlice.reducer;
