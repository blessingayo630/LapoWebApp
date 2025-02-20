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

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "rgba(249, 250, 251, 1)",
    color: theme.palette.common.black,
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
  createData("Verve-1", "NGN", "40 months", 50611234, "11/10/2024  23:21:03"),
  createData("Verve-1", "NGN", "40 months", 50611234, "11/10/2024  23:21:03"),
  createData("Verve-1", "NGN", "40 months", 50611234, "11/10/2024  23:21:03"),
  createData("Verve-1", "NGN", "40 months", 50611234, "11/10/2024  23:21:03"),
  //   createData("Gingerbread", 356,"40 months", 49, 3.9),
];

function sleep(duration) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, duration);
  });
}

const CardProfile = ({
  setShowBreadcrumbs,
  showCreateProfile,
  handleAddProfile,
  handleBackClick,
  setShowCreateProfile,
}) => {
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  //   const [showCreateProfile, setShowCreateProfile] = useState(false);
  const handleAddProfileClick = () => {
    setShowBreadcrumbs(true); // Show breadcrumbs when clicking "+ Add Profile"
    setShowCreateProfile(true);
  };

  //   const handleBackClick = () => {
  //     setShowCreateProfile(false); // Hide CreateProfile, show current content
  //   };

  //   const handleOpen = () => {
  //     setOpen(true);
  //     (async () => {
  //       setLoading(true);
  //       await sleep(1e3);
  //       setLoading(false);

  //       setOptions([...topFilms]);
  //     })();
  //   };

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

  return (
    <div>
      {!showCreateProfile ? (
        <div>
          <div className="subtext">
            Create, view and edit card profiles here.
          </div>
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
                  placeholder="Search by card name"
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
            <div>
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
            </div>
          </div>
          <Divider />

          <div className="table-container">
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>Card Name</StyledTableCell>
                    <StyledTableCell align="right">Currency</StyledTableCell>
                    <StyledTableCell align="right">Expiration</StyledTableCell>
                    <StyledTableCell align="right">Bin Prefix</StyledTableCell>
                    <StyledTableCell align="right">
                      Date Created
                    </StyledTableCell>
                    <StyledTableCell align="right">Action</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody sx={{ cursor: "pointer" }}>
                  {rows.map((row) => (
                    <StyledTableRow key={row.name}>
                      <StyledTableCell component="th" scope="row">
                        {row.name}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {row.calories}
                      </StyledTableCell>
                      <StyledTableCell align="right">{row.fat}</StyledTableCell>
                      <StyledTableCell align="right">
                        {row.carbs}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {row.protein}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            gap: "10px",
                          }}
                        >
                          <RiDeleteBin6Line
                            style={{
                              cursor: "pointer",
                              color: "rgba(71, 84, 103, 1)",
                              fontSize: "15px",
                            }}
                          />
                          <CiEdit
                            style={{
                              cursor: "pointer",
                              color: "rgba(71, 84, 103, 1)",
                              fontSize: "18px",
                            }}
                          />
                        </div>
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
      ) : (
        <CreateProfile onBack={handleBackClick} />
      )}
    </div>
  );
};

export default CardProfile;

const topFilms = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: "Pulp Fiction", year: 1994 },
  {
    title: "The Lord of the Rings: The Return of the King",
    year: 2003,
  },
];
