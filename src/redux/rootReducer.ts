import { combineReducers } from "@reduxjs/toolkit";
import taskOverviewReducer from "../components/task-overview/taskOverviewSlice";
import complianceStatusReducer from "../components/compliance-status/complianceStatusSlice";
import recentActivityReducer from "../components/recent-activity/recentActivitySlice";

const rootReducer = combineReducers({
  taskOverview: taskOverviewReducer,
  complianceStatus: complianceStatusReducer,
  recentActivity: recentActivityReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
