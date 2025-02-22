import React, { useState } from "react";
import CreateProfile from "./CreateProfile";
import "./styles/CardProfile.css";
import { CiSearch, CiEdit } from "react-icons/ci";
import {
  Autocomplete,
  TextField,
  InputAdornment,
  CircularProgress,
  Divider,
  Button,
  Chip,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { RiDeleteBin6Line } from "react-icons/ri";
import ViewRequest from "./ViewRequest";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "rgba(249, 250, 251, 1)",
    color: "rgba(71, 84, 103, 1)",
    fontWeight: "bold",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
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

function createData(name, calories, fat, carbs, protein, action) {
  return { name, calories, fat, carbs, protein, action };
}

const rows = [
  createData("Corporate", "RootUser", "10", 847264905, "11/10/2024  23:21:03"),
  createData("Corporate", "RootUser", "10", 847264905, "11/10/2024  23:21:03"),
  createData("Corporate", "RootUser", "10", 847264905, "11/10/2024  23:21:03"),
  createData("Corporate", "RootUser", "10", 847264905, "11/10/2024  23:21:03"),
  createData("Corporate", "RootUser", "10", 847264905, "11/10/2024  23:21:03"),

  //   createData("Gingerbread", 356,"40 months", 49, 3.9),
];

function sleep(duration) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, duration);
  });
}

const CardRequest = ({
  setshowBreadcrumbsRequest,
  showViewRequest,
  handleViewClick,
  handleBackClick,
  setShowViewRequest,
  //   setShowBreadcrumbs,
  //   showBreadcrumbsRequest,
  //   showCreateProfile,
  //   handleAddProfile,
  //   handleBackClick,
  //   setShowCreateProfile,
}) => {
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  //   const [showCreateProfile, setShowCreateProfile] = useState(false);
  //   const handleAddProfileClick = () => {
  //     setShowBreadcrumbs(true);
  //     setShowCreateProfile(true);
  //   };
  const chipLabels = [
    { label: "Ready", color: "success" },
    { label: "Ready", color: "success" },
    { label: "In Progress", color: "error" },
    { label: "Pending", color: "default" },
    { label: "Acknowledged", color: "primary" },
  ];

  const handleOpen = () => {
    setOpen(true);
    setLoading(true);
    setTimeout(() => {
      setOptions(rows.map((row) => ({ title: row.name })));
      setLoading(false);
    }, 1000);
  };

  const handleClose = () => {
    setOpen(false);
    setOptions([]);
  };

  const handleProfileRequest = () => {
    setshowBreadcrumbsRequest(true);
    setShowViewRequest(true);
  };

  return (
    <div>
      {!showViewRequest ? (
        <div>
          <div className="subtext">View and attend to card requests here.</div>
          <Divider />
          <div className="search-container">
            <Autocomplete
              open={open}
              onOpen={handleOpen}
              onClose={handleClose}
              isOptionEqualToValue={(option, value) =>
                option.title === value.title
              }
              getOptionLabel={(option) => option.title}
              options={options}
              loading={loading}
              renderInput={(params) => (
                <TextField
                  {...params}
                  InputProps={{
                    ...params.InputProps,
                    startAdornment: (
                      <InputAdornment position="start">
                        <CiSearch />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <>
                        {loading ? (
                          <CircularProgress color="inherit" size={20} />
                        ) : null}
                        {params.InputProps?.endAdornment}
                      </>
                    ),
                  }}
                  placeholder="Search by branch"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "8px",
                      height: "40px",
                      width: "320px",
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
              )}
            />
            {/* <div>
              <Button
                onClick={handleAddProfileClick}
                className="add-profile-btn"
                sx={{
                  textTransform: "capitalize",
                }}
                variant="contained"
              >
                + Add Profile
              </Button>
            </div> */}
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
                  {rows.slice(0, 5).map((row, index) => (
                    <StyledTableRow key={row.name}>
                      <StyledTableCell component="th" scope="row">
                        {row.name}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {row.calories}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {row.fat}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {row.carbs}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {row.protein}
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
                        <div style={{ color: "rgba(1, 77, 175, 1)" }}>View</div>
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
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
