export interface Activity {
  timestamp: string;
  description: string;
  user: string;
}

export interface RecentActivityState {
  activities: Activity[];
}
