import React from "react";
import { Modal, Box, Typography } from "@mui/material";
import CustomButton from "../Button";

interface ModalComponentProps {
  open: boolean;
  title: string;
  onClose: () => void;
  onSave?: () => void;
  children: React.ReactNode;
}

const ModalComponent: React.FC<ModalComponentProps> = ({
  open,
  title,
  onClose,
  onSave,
  children,
}) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          outline: "none",
        }}
      >
        <Box
          className="modal-container"
          sx={{
            width: "80%",
            maxWidth: "500px",
            bgcolor: "background.paper",
            borderRadius: "8px",
            padding: "16px",
            boxShadow: 24,
            outline: "none",
          }}
        >
          <Typography variant="h6" component="h2" gutterBottom>
            {title}
          </Typography>
          <Box mb={2}>{children}</Box>
          <Box display="flex" justifyContent="flex-end" gap={2}>
            {onSave && <CustomButton onClick={onSave}>Save</CustomButton>}
            <CustomButton
              style={{
                background: "rgb(252 211 204)",
                color: "#ea7c69",
              }}
              onClick={onClose}
            >
              Cancel
            </CustomButton>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};

export default ModalComponent;
