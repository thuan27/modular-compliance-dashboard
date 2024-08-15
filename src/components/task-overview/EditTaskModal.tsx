import React, { useState, ChangeEvent } from "react";
import { TextField } from "@mui/material";
import { Task } from "../../types/task-overview.interface";
import ModalComponent from "../../elements/Modal";

interface EditTaskModalProps {
  task: Task;
  onSave: (task: Task) => void;
  onClose: () => void;
}

const EditTaskModal: React.FC<EditTaskModalProps> = ({
  task,
  onSave,
  onClose,
}) => {
  const [updatedTask, setUpdatedTask] = useState<Task>({ ...task });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUpdatedTask((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    onSave(updatedTask);
  };

  return (
    <ModalComponent
      open={true}
      title="Edit Task"
      onClose={onClose}
      onSave={handleSave}
    >
      <TextField
        label="Title"
        name="title"
        value={updatedTask.title}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Due Date"
        name="dueDate"
        value={updatedTask.dueDate}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Assigned Person"
        name="assignedPerson"
        value={updatedTask.assignedPerson}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
    </ModalComponent>
  );
};

export default EditTaskModal;
