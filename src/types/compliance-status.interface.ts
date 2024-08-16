export interface ComplianceMetric {
  label: string;
  value: number;
}

export interface ComplianceStatusState {
  metrics: ComplianceMetric[];
}
