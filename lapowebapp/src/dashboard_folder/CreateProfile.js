import React, { useState } from "react";
import {
  Box,
  Button,
  Divider,
  TextField,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  FormControlLabel,
  FormLabel,
  RadioGroup,
  Radio,
  Modal,
  Backdrop,
  styled,
  Paper,
  Fade,
} from "@mui/material";

import { RiAddBoxLine } from "react-icons/ri";
import { IoCloseOutline } from "react-icons/io5";

import "../App.css";
import "../styles/CreateProfile.css";
import { tableCellClasses } from "@mui/material/TableCell";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 396,
  borderRadius: "12px",
  bgcolor: "background.paper",
  height: "668px",
};

const formControlStyles = {
  backgroundColor: "#fff",
  "& .MuiOutlinedInput-root": {
    height: "48px",
    borderRadius: "8px",
  },
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: "#D0D5DD",
  },
};

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

const CreateProfile = () => {
  const [cardScheme, setCardScheme] = useState("");
  const [currency, setCurrency] = useState("");
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <div style={{}}>
        <h3>Create Profile</h3>
        <div className="subtext">Fill in profile details and add card fee.</div>
      </div>
      <div className="create-pro-container">
        <p>Profile Details</p>

        <Box sx={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
          <Box
            component="form"
            sx={{ flex: "1 1 300px" }}
            noValidate
            autoComplete="off"
          >
            <FormSection label="Card Name*">
              <TextField
                fullWidth
                type="text"
                label="Enter card name"
                variant="outlined"
                sx={formControlStyles}
              />
            </FormSection>

            <FormSection label="Card Scheme*">
              <FormControl fullWidth sx={formControlStyles}>
                <InputLabel id="card-scheme-label">Select</InputLabel>
                <Select
                  labelId="card-scheme-label"
                  label="Select"
                  value={cardScheme}
                  onChange={(e) => setCardScheme(e.target.value)}
                >
                  <MenuItem value="visa">Visa</MenuItem>
                  <MenuItem value="mastercard">MasterCard</MenuItem>
                  <MenuItem value="amex">American Express</MenuItem>
                </Select>
              </FormControl>
            </FormSection>

            <FormSection label="Description">
              <TextField
                label="typing..."
                fullWidth
                multiline
                rows={3}
                variant="outlined"
                sx={formControlStyles}
              />
            </FormSection>

            <FormSection label="Branch Blacklist">
              <FormControl fullWidth sx={formControlStyles}>
                <InputLabel id="branch-label">Select</InputLabel>
                <Select
                  labelId="branch-label"
                  label="Select"
                  value={cardScheme}
                  onChange={(e) => setCardScheme(e.target.value)}
                >
                  <MenuItem value="abuja">Abuja</MenuItem>
                  <MenuItem value="lagos">Lagos</MenuItem>
                  <MenuItem value="uk">United Kingdom</MenuItem>
                </Select>
              </FormControl>
            </FormSection>
          </Box>

          <Box sx={{ flex: "1 1 300px" }}>
            <FormSection label="Bin Prefix*">
              <TextField
                fullWidth
                label="Select"
                type="number"
                placeholder="00000000"
                variant="outlined"
                sx={formControlStyles}
              />
            </FormSection>

            <FormSection label="Expiration*">
              <TextField
                fullWidth
                label="Select"
                type="number"
                placeholder="0"
                variant="outlined"
                sx={formControlStyles}
              />
            </FormSection>

            <FormSection label="Currency*">
              <FormControl fullWidth sx={formControlStyles}>
                <InputLabel id="currency-label">Select</InputLabel>
                <Select
                  labelId="currency-label"
                  label="Select"
                  value={currency}
                  onChange={(e) => setCurrency(e.target.value)}
                >
                  <MenuItem value="NGN">NGN - Nigerian Naira</MenuItem>
                  <MenuItem value="USD">USD - US Dollar</MenuItem>
                  <MenuItem value="EUR">EUR - Euro</MenuItem>
                  <MenuItem value="GBP">GBP - British Pound</MenuItem>
                </Select>
              </FormControl>
            </FormSection>
          </Box>
        </Box>
      </div>
      <div className="create-pro-sub-container">
        <p>Fees</p>

        <Button
          onClick={handleOpen}
          className="add-profile-btn"
          sx={{
            textTransform: "capitalize",
          }}
          variant="contained"
        >
          + Add Fee
        </Button>

        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={handleClose}
          closeAfterTransition
          slots={{ backdrop: Backdrop }}
          slotProps={{
            backdrop: {
              timeout: 500,
            },
          }}
        >
          <Fade in={open}>
            <Box sx={style}>
              <div className="modal-header">
                <div className="md-sub">
                  <div style={{ display: "flex", gap: "16px" }}>
                    <div
                      style={{
                        width: "48px",
                        height: "48px",
                        borderRadius: "10px",
                        border: "1px solid rgba(234, 236, 240, 1)",
                        textAlign: "center",
                        paddingTop: "0.9rem",
                      }}
                    >
                      <RiAddBoxLine sx={{ width: "18px" }} />
                    </div>
                    <div>
                      <Typography
                        id="transition-modal-title"
                        // variant="h6"
                        // component="h4"
                      >
                        Add Fee
                      </Typography>
                      <Typography
                        id="transition-modal-description"
                        sx={{
                          marginTop: "2px",
                          fontSize: "12px",
                          color: "rgba(71, 84, 103, 1)",
                        }}
                      >
                        Fill in fee details.
                      </Typography>
                    </div>
                  </div>

                  <div>
                    <IoCloseOutline
                      style={{
                        fontWeight: "bold",
                        fontSize: "20px",
                        cursor: "pointer",
                      }}
                      onClick={handleClose}
                    />
                  </div>
                </div>
              </div>

              <Box
                sx={{
                  width: "90%",
                  margin: "auto",
                  marginTop: "20px",
                  paddingTop: "120px",
                  overflowY: "auto",
                  maxHeight: "40rem",
                  "&::-webkit-scrollbar": {
                    display: "none",
                  },
                  "-ms-overflow-style": "none",
                  "scrollbar-width": "none",
                }}
              >
                <div style={{ marginBottom: "10px" }}>
                  <label htmlFor="fee-name" className="label">
                    Fee Name*
                  </label>
                  <div className="">
                    <TextField
                      fullWidth
                      type="text"
                      name="fee-name"
                      id="outlined-basic"
                      label="Maintenance"
                      variant="outlined"
                      sx={{
                        backgroundColor: "#fff",
                        "& .MuiOutlinedInput-root": {
                          height: "48px",
                          borderRadius: "8px",
                        },
                        "& .MuiOutlinedInput-notchedOutline": {
                          borderColor: "#D0D5DD",
                        },
                      }}
                    />
                  </div>
                </div>

                <div style={{ marginBottom: "10px" }}>
                  <label htmlFor="value" className="label">
                    Value*
                  </label>
                  <div className="">
                    <TextField
                      type="number"
                      name="value"
                      id="value"
                      label="0"
                      variant="outlined"
                      fullWidth
                      sx={{
                        backgroundColor: "#fff",
                        "& .MuiOutlinedInput-root": {
                          height: "48px",
                          borderRadius: "8px",
                        },
                        "& .MuiOutlinedInput-notchedOutline": {
                          borderColor: "#D0D5DD",
                        },
                      }}
                    />
                  </div>
                </div>
                <div>
                  <FormControl>
                    <FormLabel id="demo-row-radio-buttons-group-label">
                      Currency
                    </FormLabel>
                    <RadioGroup
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="row-radio-buttons-group"
                    >
                      <FormControlLabel
                        value="NGN"
                        control={<Radio />}
                        label=" NGN"
                      />
                      <FormControlLabel
                        value="USB"
                        control={<Radio />}
                        label="USB"
                      />
                    </RadioGroup>
                  </FormControl>

                  <FormControl>
                    <FormLabel id="demo-row-radio-buttons-group-label">
                      Fee Frequency
                    </FormLabel>
                    <RadioGroup
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="row-radio-buttons-group"
                    >
                      <FormControlLabel
                        value="One-Off"
                        control={<Radio />}
                        label=" One Off"
                      />
                      <FormControlLabel
                        value="Monthly"
                        control={<Radio />}
                        label="Monthly"
                      />
                    </RadioGroup>
                  </FormControl>

                  <FormControl>
                    <FormLabel id="demo-row-radio-buttons-group-label">
                      Fee Frequency
                    </FormLabel>
                    <RadioGroup
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="row-radio-buttons-group"
                    >
                      <FormControlLabel
                        value="Issuance"
                        control={<Radio />}
                        label="Issuance"
                      />
                      <FormControlLabel
                        value="Reissue"
                        control={<Radio />}
                        label="Pin Reissue"
                      />
                    </RadioGroup>
                  </FormControl>

                  <FormControl>
                    <FormLabel id="demo-row-radio-buttons-group-label">
                      Account Pad
                    </FormLabel>
                    <RadioGroup
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="row-radio-buttons-group"
                    >
                      <FormControlLabel
                        value="None"
                        control={<Radio />}
                        label="None"
                      />
                      <FormControlLabel
                        value="Prefix"
                        control={<Radio />}
                        label="Branch Code Prefix"
                      />

                      <FormControlLabel
                        value="Suffix"
                        control={<Radio />}
                        label="Branch Code Suffix"
                      />
                    </RadioGroup>
                  </FormControl>
                </div>
                <div style={{ marginBottom: "20px" }}>
                  <Typography
                    sx={{
                      fontSize: "12px",
                      color: "rgba(52, 64, 84, 1)",
                      marginBottom: "4px",
                    }}
                  >
                    Account
                  </Typography>

                  <TextField
                    name="card-description"
                    id="card-description"
                    variant="outlined"
                    fullWidth
                    sx={{
                      backgroundColor: "#fff",
                      "& .MuiOutlinedInput-root": {
                        height: "48px",
                        borderRadius: "8px",
                      },
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#D0D5DD",
                      },
                    }}
                  />
                </div>
                <Divider />

                <Button
                  onClick={handleClose}
                  className=""
                  sx={{
                    textTransform: "capitalize",
                    width: "100%",
                    marginTop: "20px",
                    marginBottom: "20px",
                  }}
                  variant="contained"
                >
                  Add Fee
                </Button>
              </Box>
            </Box>
          </Fade>
        </Modal>

        <div className="create-table">
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Name</StyledTableCell>
                  <StyledTableCell align="right">Value</StyledTableCell>
                  <StyledTableCell align="right">Frequency</StyledTableCell>
                  <StyledTableCell align="right">Currency</StyledTableCell>
                  <StyledTableCell align="right">Time</StyledTableCell>
                  <StyledTableCell align="right">Account pad</StyledTableCell>
                  <StyledTableCell align="right">Account</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody sx={{ cursor: "pointer", height: "4rem" }}></TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>

      <Button
        // onClick={handleAddProfileClick}
        className="create-btn"
        sx={{
          textTransform: "capitalize",
        }}
        variant="contained"
      >
        Create Profile
      </Button>
    </div>
  );
};

function FormSection({ label, children }) {
  return (
    <Box sx={{ marginBottom: "10px" }}>
      <Typography
        sx={{
          fontSize: "12px",
          color: "rgba(52, 64, 84, 1)",
          marginBottom: "4px",
        }}
      >
        {label}
      </Typography>
      {children}
    </Box>
  );
}

export default CreateProfile;
