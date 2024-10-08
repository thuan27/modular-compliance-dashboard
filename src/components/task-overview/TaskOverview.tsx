import React, { useCallback, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import { updateTaskDetails, updateTaskStatus } from "./taskOverviewSlice";
import { Select, MenuItem } from "@mui/material";
import CustomTable from "../../elements/Table";
import { setLoading } from "../../redux/slices/globalSlice";
import { Task } from "../../types/task-overview.interface";
import EditTaskModal from "./EditTaskModal";
import CustomButton from "../../elements/Button";
import { addActivity } from "../recent-activity/recentActivitySlice";

import "./style.scss"; // Import SCSS file

const TaskOverview: React.FC = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state: RootState) => state.taskOverview.tasks);
  const [editTask, setEditTask] = useState<Task | null>(null);

  //fake loading when call api
  const handleStatusChange = useCallback(
    async (id: number, status: "pending" | "completed" | "overdue") => {
      dispatch(setLoading(true));
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        dispatch(updateTaskStatus({ id, status }));
        const taskCurrent = tasks.find((task) => task.id === id);

        dispatch(
          addActivity({
            timestamp: new Date().toISOString(),
            description: `Task "${taskCurrent?.title}" status changed to ${status}`,
            user: "Current User",
          })
        );
      } catch (error) {
        console.error("Failed to update task status:", error);
      } finally {
        dispatch(setLoading(false));
      }
    },
    [dispatch]
  );

  const handleEditClick = (task: Task) => {
    setEditTask(task);
  };

  const handleEditSave = useCallback(
    async (updatedTask: Task) => {
      dispatch(setLoading(true));
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        const index = tasks.findIndex((t) => t.id === updatedTask.id);

        dispatch(updateTaskDetails({ task: updatedTask }));
        dispatch(
          addActivity({
            timestamp: new Date().toISOString(),
            description: `Task "${tasks[index].title}" update information`,
            user: "Current User",
          })
        );
        setEditTask(null);
      } catch (error) {
        console.error("Failed to update task status:", error);
      } finally {
        dispatch(setLoading(false));
      }
    },
    [dispatch]
  );

  const headers = [
    { label: "Title", key: "title" },
    { label: "Due Date", key: "dueDate" },
    { label: "Assigned Person", key: "assignedPerson" },
    {
      label: "Status",
      key: "status",
      render: (task: Task) => (
        <>
          <Select
            value={task.status}
            onChange={(e) =>
              handleStatusChange(
                task.id,
                e.target.value as "pending" | "completed" | "overdue"
              )
            }
            variant="outlined"
            className="status-select"
          >
            <MenuItem value="pending">Pending</MenuItem>
            <MenuItem value="completed">Completed</MenuItem>
            <MenuItem value="overdue">Overdue</MenuItem>
          </Select>
        </>
      ),
    },
    {
      label: "Actions",
      key: "actions",
      render: (task: Task) => (
        <CustomButton onClick={() => handleEditClick(task)}>Edit</CustomButton>
      ),
    },
  ];

  return (
    <div className="task-overview">
      <h2>Task Overview</h2>
      <CustomTable headers={headers} rows={tasks} />
      {editTask && (
        <EditTaskModal
          task={editTask}
          onSave={handleEditSave}
          onClose={() => setEditTask(null)}
        />
      )}
    </div>
  );
};

export default TaskOverview;
