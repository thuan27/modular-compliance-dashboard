import { configureStore } from "@reduxjs/toolkit";
import taskOverviewReducer from "../components/task-overview/taskOverviewSlice";
import complianceStatusReducer from "../components/compliance-status/complianceStatusSlice";
import recentActivityReducer from "../components/recent-activity/recentActivitySlice";
import globalReducer from "./slices/globalSlice";

export const store = configureStore({
  reducer: {
    taskOverview: taskOverviewReducer,
    complianceStatus: complianceStatusReducer,
    recentActivity: recentActivityReducer,
    global: globalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
