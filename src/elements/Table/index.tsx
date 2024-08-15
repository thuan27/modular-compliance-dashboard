import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import "./style.scss";

interface CustomTableProps {
  headers: Array<{
    label: string;
    key: string;
    render?: (item: any) => React.ReactNode;
  }>;
  rows: any[];
}

const CustomTable: React.FC<CustomTableProps> = ({ headers, rows }) => {
  return (
    <TableContainer className="table-container">
      <Table className="table">
        <TableHead className="header-table">
          <TableRow>
            {headers.map((header) => (
              <TableCell key={header.key}>{header.label}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody className="body-table">
          {rows.map((row) => (
            <TableRow key={row.id} className={`task-row ${row.status}`}>
              {headers.map((header) => (
                <TableCell key={header.key}>
                  {header.render ? header.render(row) : row[header.key]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CustomTable;
