export interface ComplianceMetric {
  name: string;
  value: number;
}

export interface ComplianceStatusState {
  metrics: ComplianceMetric[];
}
