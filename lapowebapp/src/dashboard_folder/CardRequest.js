import React, { useState } from "react";
import "../styles/CardProfile.css";
import { CiSearch } from "react-icons/ci";
import {
  TextField,
  InputAdornment,
  Divider,
  Chip,
  styled,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TableCell,
} from "@mui/material";
import ViewRequest from "./ViewRequest";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  "&.MuiTableCell-head": {
    fontSize: 14,
    backgroundColor: "rgba(249, 250, 251, 1)",
    color: "rgba(71, 84, 103, 1)",
    fontWeight: "500",
  },
  "&.MuiTableCell-body": {
    fontSize: 13,
    backgroundColor: "rgba(255, 255, 255, 1)",
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: "rgba(255, 255, 255, 1)",
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const chipLabels = [
  { label: "Ready", color: "success" },
  { label: "Ready", color: "success" },
  { label: "In Progress", color: "error" },
  { label: "Pending", color: "default" },
  { label: "Acknowledged", color: "primary" },
];

const rows = [
  {
    name: "Corporate",
    initiator: "RootUser",
    quantity: "10",
    batch: 847264905,
    dateRequested: "11/10/2024 23:21:03",
  },
  {
    name: "Branch A",
    initiator: "Admin",
    quantity: "5",
    batch: 234567,
    dateRequested: "11/12/2024 12:00:00",
  },
  {
    name: "Branch B",
    initiator: "User1",
    quantity: "8",
    batch: 987654,
    dateRequested: "11/15/2024 14:30:20",
  },
  {
    name: "Corporate",
    initiator: "User2",
    quantity: "3",
    batch: 123456,
    dateRequested: "11/20/2024 09:45:10",
  },
  {
    name: "Branch A",
    initiator: "Manager",
    quantity: "7",
    batch: 765432,
    dateRequested: "11/25/2024 16:15:50",
  },
];

const CardRequest = ({
  setshowBreadcrumbsRequest,
  showViewRequest,
  handleBackClick,
  setShowViewRequest,
}) => {
  const handleProfileRequest = () => {
    setshowBreadcrumbsRequest(true);
    setShowViewRequest(true);
  };
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredRows = rows.filter((row) =>
    row.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      {!showViewRequest ? (
        <div>
          <div className="subtext">View and attend to card requests here.</div>
          <Divider />

          <div className="search-container">
            <TextField
              value={searchTerm}
              onChange={handleSearchChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <CiSearch />
                  </InputAdornment>
                ),
              }}
              className="searching"
              placeholder="Search by request name"
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "8px",
                  height: "40px",
                  background: "white",
                  border: "1px solid rgba(208, 213, 221, 1)",
                  "&:hover fieldset": {
                    borderColor: "rgba(208, 213, 221, 1)",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "transparent",
                  },
                },
              }}
            />
          </div>
          <Divider />

          <div className="table-container">
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>Branch</StyledTableCell>
                    <StyledTableCell align="center">Initiator</StyledTableCell>
                    <StyledTableCell align="center">Quantity</StyledTableCell>
                    <StyledTableCell align="center">Batch</StyledTableCell>
                    <StyledTableCell align="center">
                      Date Requested
                    </StyledTableCell>
                    <StyledTableCell align="center">Status</StyledTableCell>
                    <StyledTableCell align="center">Action</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody sx={{ cursor: "pointer" }}>
                  {filteredRows.length > 0 ? (
                    filteredRows.map((row, index) => (
                      <StyledTableRow key={index}>
                        <StyledTableCell component="th" scope="row">
                          {row.name}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {row.initiator}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {row.quantity}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {row.batch}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {row.dateRequested}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          <Chip
                            variant="outlined"
                            color={chipLabels[index % chipLabels.length].color}
                            label={chipLabels[index % chipLabels.length].label}
                          />
                        </StyledTableCell>
                        <StyledTableCell
                          align="center"
                          onClick={handleProfileRequest}
                        >
                          <div style={{ color: "rgba(1, 77, 175, 1)" }}>
                            View
                          </div>
                        </StyledTableCell>
                      </StyledTableRow>
                    ))
                  ) : (
                    <StyledTableRow>
                      <StyledTableCell colSpan={5} align="center">
                        No matching results found.
                      </StyledTableCell>
                    </StyledTableRow>
                  )}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
      ) : (
        <ViewRequest onBack={handleBackClick} />
      )}
    </div>
  );
};

export default CardRequest;
