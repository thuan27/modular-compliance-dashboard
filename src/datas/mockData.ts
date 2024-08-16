import { Task } from "../types/task-overview.interface";
import { ComplianceStatusState } from "../types/compliance-status.interface";
import { RecentActivityState } from "../types/recent-activity.interface";

const tasks: Task[] = [
  {
    id: 1,
    title: "Complete Compliance Report",
    dueDate: "2024-08-20",
    assignedPerson: "Alice",
    status: "pending",
  },
  {
    id: 2,
    title: "Review Audit Logs",
    dueDate: "2024-08-15",
    assignedPerson: "Bob",
    status: "completed",
  },
  {
    id: 3,
    title: "Review Audit Logs",
    dueDate: "2024-08-15",
    assignedPerson: "Bob",
    status: "pending",
  },
  {
    id: 4,
    title: "Review Audit Logs",
    dueDate: "2024-08-15",
    assignedPerson: "Bob",
    status: "overdue",
  },
  {
    id: 5,
    title: "Review Audit Logs",
    dueDate: "2024-08-15",
    assignedPerson: "Bob",
    status: "pending",
  },
  {
    id: 6,
    title: "Review Audit Logs",
    dueDate: "2024-08-15",
    assignedPerson: "Bob",
    status: "pending",
  },
  {
    id: 7,
    title: "Review Audit Logs",
    dueDate: "2024-08-15",
    assignedPerson: "Bob",
    status: "pending",
  },
  {
    id: 8,
    title: "Review Audit Logs",
    dueDate: "2024-08-15",
    assignedPerson: "Bob",
    status: "pending",
  },
  {
    id: 9,
    title: "Review Audit Logs",
    dueDate: "2024-08-15",
    assignedPerson: "Bob",
    status: "pending",
  },
];

const calculateMetrics = (tasks: Task[]) => {
  const totalTasks = tasks.length;
  const pendingTasks = tasks.filter((task) => task.status === "pending").length;
  const overdueTasks = tasks.filter((task) => task.status === "overdue").length;
  const completedTasks = tasks.filter(
    (task) => task.status === "completed"
  ).length;

  return [
    {
      label: "Pending Tasks",
      value: parseFloat(((pendingTasks / totalTasks) * 100).toFixed(2)),
    },
    {
      label: "Overdue Tasks",
      value: parseFloat(((overdueTasks / totalTasks) * 100).toFixed(2)),
    },
    {
      label: "Completed Tasks",
      value: parseFloat(((completedTasks / totalTasks) * 100).toFixed(2)),
    },
  ];
};

const complianceStatus: ComplianceStatusState = {
  metrics: calculateMetrics(tasks),
};

const recentActivityState: RecentActivityState = {
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

export const mockData = {
  taskOverview: { tasks },
  complianceStatus,
  recentActivityState,
};
