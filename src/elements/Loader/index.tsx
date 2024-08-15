import React from "react";

import "./style.scss";
import { Box } from "@mui/material";

const CustomLoader: React.FC = () => {
  return (
    <Box className="loader-container">
      <Box className="loader">
        <Box className="loader_cube loader_cube--color"></Box>
        <Box className="loader_cube loader_cube--glowing"></Box>
      </Box>
    </Box>
  );
};

export default CustomLoader;
