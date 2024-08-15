import React from "react";
import { Button, ButtonProps } from "@mui/material";
import "./style.scss"; // Import SCSS file for styling

const CustomButton: React.FC<ButtonProps> = ({ children, style, ...props }) => {
  return (
    <Button
      {...props}
      className="custom-button"
      style={{ backgroundColor: "#ea7c69", color: "#fff", ...style }}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
