// import React from "react";
// import CreateProfile from "./CreateProfile";
// import "../styles/CardProfile.css";
// import { CiSearch, CiEdit } from "react-icons/ci";
// import {
//   Autocomplete,
//   TextField,
//   InputAdornment,
//   CircularProgress,
//   Divider,
//   Button,
// } from "@mui/material";
// import { styled } from "@mui/material/styles";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell, { tableCellClasses } from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
// import { RiDeleteBin6Line } from "react-icons/ri";

// const StyledTableCell = styled(TableCell)(({ theme }) => ({
//   [`&.${tableCellClasses.head}`]: {
//     backgroundColor: "rgba(249, 250, 251, 1)",
//     color: "rgba(71, 84, 103, 1)",
//     fontWeight: "bold",
//   },
//   [`&.${tableCellClasses.body}`]: {
//     fontSize: 14,
//     backgroundColor: "rgba(255, 255, 255, 1)",
//   },
// }));

// const StyledTableRow = styled(TableRow)(({ theme }) => ({
//   "&:nth-of-type(odd)": {
//     backgroundColor: "rgba(255, 255, 255, 1)",
//   },
//   "&:last-child td, &:last-child th": {
//     border: 0,
//   },
// }));

// function createData(name, calories, fat, carbs, protein, action) {
//   return { name, calories, fat, carbs, protein, action };
// }

// const rows = [
//   createData("Verve-1", "NGN", "40 months", 50611234, "11/10/2024  23:21:03"),
//   createData("Verve-1", "NGN", "40 months", 50611234, "11/10/2024  23:21:03"),
//   createData("Verve-1", "NGN", "40 months", 50611234, "11/10/2024  23:21:03"),
//   createData("Verve-1", "NGN", "40 months", 50611234, "11/10/2024  23:21:03"),
// ];

// const CardProfile = ({
//   setShowBreadcrumbs,
//   showCreateProfile,
//   handleAddProfile,
//   handleBackClick,
//   setShowCreateProfile,
// }) => {
//   const [open, setOpen] = React.useState(false);
//   const [options, setOptions] = React.useState([]);
//   const [loading, setLoading] = React.useState(false);

//   const handleAddProfileClick = () => {
//     setShowBreadcrumbs(true);
//     setShowCreateProfile(true);
//   };

//   const handleOpen = () => {
//     setOpen(true);
//     setLoading(true);
//     setTimeout(() => {
//       setOptions(rows.map((row) => ({ title: row.name })));
//       setLoading(false);
//     }, 1000);
//   };

//   const handleClose = () => {
//     setOpen(false);
//     setOptions([]);
//   };

//   return (
//     <div>
//       {!showCreateProfile ? (
//         <div>
//           <div className="subtext">
//             Create, view and edit card profiles here.
//           </div>
//           <Divider />
//           <div className="search-container">
//             <Autocomplete
//               open={open}
//               onOpen={handleOpen}
//               onClose={handleClose}
//               isOptionEqualToValue={(option, value) =>
//                 option.title === value.title
//               }
//               getOptionLabel={(option) => option.title}
//               options={options}
//               loading={loading}
//               renderInput={(params) => (
//                 <TextField
//                   {...params}
//                   InputProps={{
//                     ...params.InputProps,
//                     startAdornment: (
//                       <InputAdornment position="start">
//                         <CiSearch />
//                       </InputAdornment>
//                     ),
//                     endAdornment: (
//                       <>
//                         {loading ? (
//                           <CircularProgress color="inherit" size={20} />
//                         ) : null}
//                         {params.InputProps?.endAdornment}
//                       </>
//                     ),
//                   }}
//                   className="searching"
//                   placeholder="Search by card name"

//                 />
//               )}
//             />
//             <div>
//               <Button
//                 onClick={handleAddProfileClick}
//                 className="add-profile-btn btn-btn"
//                 sx={{
//                   textTransform: "capitalize",
//                 }}
//                 variant="contained"
//               >
//                 + Add Profile
//               </Button>
//             </div>
//           </div>
//           <Divider />

//           <div className="table-container">
//             <TableContainer component={Paper}>
//               <Table sx={{ minWidth: 700 }} aria-label="customized table">
//                 <TableHead>
//                   <TableRow>
//                     <StyledTableCell>Card Name</StyledTableCell>
//                     <StyledTableCell align="center">Currency</StyledTableCell>
//                     <StyledTableCell align="center">Expiration</StyledTableCell>
//                     <StyledTableCell align="center">Bin Prefix</StyledTableCell>
//                     <StyledTableCell align="center">
//                       Date Created
//                     </StyledTableCell>
//                     <StyledTableCell align="center">Action</StyledTableCell>
//                   </TableRow>
//                 </TableHead>
//                 <TableBody sx={{ cursor: "pointer" }}>
//                   {rows.map((row) => (
//                     <StyledTableRow key={row.name}>
//                       <StyledTableCell component="th" scope="row">
//                         {row.name}
//                       </StyledTableCell>
//                       <StyledTableCell align="center">
//                         {row.calories}
//                       </StyledTableCell>
//                       <StyledTableCell align="center">
//                         {row.fat}
//                       </StyledTableCell>
//                       <StyledTableCell align="center">
//                         {row.carbs}
//                       </StyledTableCell>
//                       <StyledTableCell align="center">
//                         {row.protein}
//                       </StyledTableCell>
//                       <StyledTableCell align="center">
//                         <div
//                           style={{
//                             display: "flex",
//                             justifyContent: "center",
//                             gap: "10px",
//                           }}
//                         >
//                           <RiDeleteBin6Line
//                             style={{
//                               cursor: "pointer",
//                               color: "rgba(71, 84, 103, 1)",
//                               fontSize: "15px",
//                             }}
//                           />
//                           <CiEdit
//                             style={{
//                               cursor: "pointer",
//                               color: "rgba(71, 84, 103, 1)",
//                               fontSize: "18px",
//                             }}
//                           />
//                         </div>
//                       </StyledTableCell>
//                     </StyledTableRow>
//                   ))}
//                 </TableBody>
//               </Table>
//             </TableContainer>
//           </div>
//         </div>
//       ) : (
//         <CreateProfile onBack={handleBackClick} />
//       )}
//     </div>
//   );
// };

// export default CardProfile;

import React, { useState } from "react";
import CreateProfile from "./CreateProfile";
import "../styles/CardProfile.css";
import { CiSearch, CiEdit } from "react-icons/ci";
import { TextField, InputAdornment, Divider, Button } from "@mui/material";
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
    fontSize: 14,
    backgroundColor: "rgba(249, 250, 251, 1)",
    color: "rgba(71, 84, 103, 1)",
    fontWeight: "500",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 13,
    backgroundColor: "rgba(255, 255, 255, 1)",
    color: "rgba(71, 84, 103, 1)",
    fontWeight: "400",
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

function createData(name, currency, expiration, binPrefix, dateCreated) {
  return { name, currency, expiration, binPrefix, dateCreated };
}

const rows = [
  createData("Verve-1", "NGN", "40 months", 50611234, "11/10/2024  23:21:03"),
  createData(
    "MasterCard",
    "USD",
    "36 months",
    40123456,
    "10/15/2024  12:11:00"
  ),
  createData("Visa", "EUR", "48 months", 41112222, "09/05/2024  14:30:45"),
  createData("Verve-2", "NGN", "24 months", 50611345, "11/01/2024  08:15:22"),
];

const CardProfile = ({
  setShowBreadcrumbs,
  showCreateProfile,
  handleAddProfile,
  handleBackClick,
  setShowCreateProfile,
}) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleAddProfileClick = () => {
    setShowBreadcrumbs(true);
    setShowCreateProfile(true);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredRows = rows.filter((row) =>
    row.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      {!showCreateProfile ? (
        <div>
          <h3>Card Profile</h3>
          <div className="subtext">
            Create, view and edit card profiles here.
          </div>
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
              placeholder="Search by card name"
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
            <div>
              <Button
                onClick={handleAddProfileClick}
                className="add-profile-btn btn-btn"
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
                    <StyledTableCell align="center">Currency</StyledTableCell>
                    <StyledTableCell align="center">Expiration</StyledTableCell>
                    <StyledTableCell align="center">Bin Prefix</StyledTableCell>
                    <StyledTableCell align="center">
                      Date Created
                    </StyledTableCell>
                    <StyledTableCell align="center">Action</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody sx={{ cursor: "pointer" }}>
                  {filteredRows.length > 0 ? (
                    filteredRows.map((row) => (
                      <StyledTableRow key={row.name}>
                        <StyledTableCell component="th" scope="row">
                          {row.name}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {row.currency}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {row.expiration}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {row.binPrefix}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {row.dateCreated}
                        </StyledTableCell>
                        <StyledTableCell align="center">
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
                    ))
                  ) : (
                    <StyledTableRow>
                      <StyledTableCell colSpan={6} align="center">
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
        <CreateProfile onBack={handleBackClick} />
      )}
    </div>
  );
};

export default CardProfile;
