import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  Activity,
  RecentActivityState,
} from "../../types/recent-activity.interface";

const initialState: RecentActivityState = {
  activities: [
    {
      timestamp: "2024-08-01 10:00",
      description: "Completed Compliance Report",
      user: "Alice",
    },
    {
      timestamp: "2024-08-02 14:30",
      description: "Reviewed Audit Logs",
      user: "Bob",
    },
    {
      timestamp: "2024-08-02 14:31",
      description: "Reviewed Audit Logs",
      user: "Felix",
    },
    {
      timestamp: "2024-08-02 14:31",
      description: "Reviewed Audit Logs",
      user: "Felix",
    },
    {
      timestamp: "2024-08-02 14:31",
      description: "Reviewed Audit Logs",
      user: "Felix",
    },
    {
      timestamp: "2024-08-02 14:31",
      description: "Reviewed Audit Logs",
      user: "Felix",
    },
    {
      timestamp: "2024-08-02 14:31",
      description: "Reviewed Audit Logs",
      user: "Felix",
    },
    {
      timestamp: "2024-08-02 14:31",
      description: "Reviewed Audit Logs",
      user: "Felix",
    },
    {
      timestamp: "2024-08-02 14:31",
      description: "Reviewed Audit Logs",
      user: "Felix",
    },
    {
      timestamp: "2024-08-02 14:31",
      description: "Reviewed Audit Logs",
      user: "Felix",
    },
    {
      timestamp: "2024-08-02 14:31",
      description: "Reviewed Audit Logs",
      user: "Felix",
    },
    {
      timestamp: "2024-08-02 14:31",
      description: "Reviewed Audit Logs",
      user: "Felix",
    },
  ],
};

const recentActivitySlice = createSlice({
  name: "recentActivity",
  initialState,
  reducers: {
    addActivity(state, action: PayloadAction<Activity>) {
      state.activities.push(action.payload);
    },
  },
});

export const { addActivity } = recentActivitySlice.actions;
export default recentActivitySlice.reducer;
