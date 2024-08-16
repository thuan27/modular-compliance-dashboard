import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ComplianceStatusState } from "../../types/compliance-status.interface";
import { mockData } from "../../datas/mockData";

const initialState: ComplianceStatusState = mockData.complianceStatus;

const complianceStatusSlice = createSlice({
  name: "complianceStatus",
  initialState,
  reducers: {
    updateMetric(
      state,
      action: PayloadAction<{ label: string; value: number }>
    ) {
      const metric = state.metrics.find(
        (m) => m.label === action.payload.label
      );
      if (metric) {
        metric.value = action.payload.value;
      }
    },
  },
});

export const { updateMetric } = complianceStatusSlice.actions;
export default complianceStatusSlice.reducer;
