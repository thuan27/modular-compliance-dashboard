import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  Activity,
  RecentActivityState,
} from "../../types/recent-activity.interface";
import { mockData } from "../../datas/mockData";

const initialState: RecentActivityState = mockData.recentActivityState;

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
