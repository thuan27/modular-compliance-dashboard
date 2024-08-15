import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import { updateTaskStatus } from "./taskOverviewSlice";
import { Select, MenuItem } from "@mui/material";
import CustomTable from "../../elements/Table";
import { setLoading } from "../../redux/globalSlice";
import { Task } from "../../types/task-overview.interface";

import "./style.scss"; // Import SCSS file

const TaskOverview: React.FC = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state: RootState) => state.taskOverview.tasks);

  //fake loading when call api
  const handleStatusChange = (
    id: number,
    status: "pending" | "completed" | "overdue"
  ) => {
    dispatch(setLoading(true));
    setTimeout(() => {
      dispatch(updateTaskStatus({ id, status }));
      dispatch(setLoading(false));
    }, 1000);
  };

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
  ];

  return (
    <div className="task-overview">
      <h2>Task Overview</h2>
      <CustomTable headers={headers} rows={tasks} />
    </div>
  );
};

export default TaskOverview;
