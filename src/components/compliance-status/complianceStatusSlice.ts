import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ComplianceStatusState } from "../../types/compliance-status.interface";

const initialState: ComplianceStatusState = {
  metrics: [
    { name: "Pending Tasks", value: 50 },
    { name: "Overdue Tasks", value: 15 },
    { name: "Completed Tasks", value: 35 },
  ],
};

const complianceStatusSlice = createSlice({
  name: "complianceStatus",
  initialState,
  reducers: {
    updateMetric(
      state,
      action: PayloadAction<{ name: string; value: number }>
    ) {
      const metric = state.metrics.find((m) => m.name === action.payload.name);
      if (metric) {
        metric.value = action.payload.value;
      }
    },
  },
});

export const { updateMetric } = complianceStatusSlice.actions;
export default complianceStatusSlice.reducer;
