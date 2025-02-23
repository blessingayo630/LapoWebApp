import React, { useState } from "react";
import {
  Button,
  Chip,
  Stack,
  Modal,
  Box,
  Typography,
  TextField,
} from "@mui/material";

import "../App.css";
import "../styles/CreateProfile.css";

import html2canvas from "html2canvas";
import jsPDF from "jspdf";

import { LuDownload, LuPackageCheck } from "react-icons/lu";
import { FaRegCheckCircle } from "react-icons/fa";
import { RiLoader2Fill } from "react-icons/ri";
import { GoPackageDependencies } from "react-icons/go";
import "../styles/CardRequest.css";

const ViewRequest = () => {
  const [activeButton, setActiveButton] = useState("download");

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
    if (buttonName === "ready") {
      setStatus("Ready");
    } else if (buttonName === "acknowledged") {
      setStatus("Acknowledged");
    }
  };
  const [status, setStatus] = useState("Pending");

  const handleBtnClick = () => {
    setStatus("In Progress");
  };
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [op, setOp] = useState(false);
  const handleOp = () => setOp(true);
  const handleClo = () => setOp(false);

  const handleDownload = async () => {
    const element = document.getElementById("pdf-content");
    if (!element) {
      console.error("Element #pdf-content not found");
      return;
    }

    try {
      const canvas = await html2canvas(element);
      const imgData = canvas.toDataURL("image/png");

      const pdf = new jsPDF();
      pdf.addImage(imgData, "PNG", 10, 10, 180, 100);
      pdf.save("download.pdf");
      handleOpen();
    } catch (error) {
      console.error("Error generating PDF:", error);
    }
  };

  return (
    <div>
      <div>
        <div style={{}}>
          <h3>Request Details</h3>
          <div className="subtext">
            Perform predetermined actions on card requests here.
          </div>
        </div>
        <div
          className="create-pro-container"
          style={{
            overflowY: "auto",
            maxHeight: "40rem",
            "&::-webkit-scrollbar": {
              display: "none",
            },
            "-ms-overflow-style": "none",
            "scrollbar-width": "none",
          }}
        >
          <div id="pdf-content">
            <p>Card Request Details</p>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: "20px",
              }}
            >
              <Box
                component="form"
                sx={{ flex: "1 1 300px" }}
                noValidate
                autoComplete="off"
              >
                <div style={{ marginBottom: "10px" }}>
                  <Typography
                    sx={{
                      fontSize: "12px",
                      color: "rgba(52, 64, 84, 1)",
                      marginBottom: "4px",
                    }}
                  >
                    Branch Name
                  </Typography>

                  <TextField
                    name="card-description"
                    id="card-description"
                    variant="outlined"
                    disabled
                    fullWidth
                    placeholder="Coporate"
                    sx={{
                      backgroundColor: "rgba(245, 245, 247, 1)",
                      "& .MuiOutlinedInput-root": {
                        height: "48px",
                        borderRadius: "8px",
                      },
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "rgba(208, 213, 221, 1)",
                      },
                    }}
                  />
                </div>
                <div style={{ marginBottom: "10px" }}>
                  <Typography
                    sx={{
                      fontSize: "12px",
                      color: "rgba(52, 64, 84, 1)",
                      marginBottom: "4px",
                    }}
                  >
                    Card Type
                  </Typography>

                  <TextField
                    name="card-description"
                    id="card-description"
                    variant="outlined"
                    fullWidth
                    placeholder="Verve"
                    disabled
                    sx={{
                      backgroundColor: "rgba(245, 245, 247, 1)",
                      "& .MuiOutlinedInput-root": {
                        height: "48px",
                        borderRadius: "8px",
                      },
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "rgba(208, 213, 221, 1)",
                      },
                    }}
                  />
                </div>
                <div style={{ marginBottom: "10px" }}>
                  <Typography
                    sx={{
                      fontSize: "12px",
                      color: "rgba(52, 64, 84, 1)",
                      marginBottom: "4px",
                    }}
                  >
                    Quantity
                  </Typography>

                  <TextField
                    name="card-description"
                    id="card-description"
                    variant="outlined"
                    disabled
                    fullWidth
                    placeholder="10"
                    sx={{
                      backgroundColor: "rgba(245, 245, 247, 1)",
                      "& .MuiOutlinedInput-root": {
                        height: "48px",
                        borderRadius: "8px",
                      },
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "rgba(208, 213, 221, 1)",
                      },
                    }}
                  />
                </div>

                <div style={{ marginBottom: "10px" }}>
                  <Typography
                    sx={{
                      fontSize: "12px",
                      color: "rgba(52, 64, 84, 1)",
                      marginBottom: "4px",
                    }}
                  >
                    Date Requested
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: "14px",
                      color: "rgba(52, 64, 84, 1)",
                    }}
                  >
                    11/14/2024 10:27:43
                  </Typography>
                </div>
              </Box>

              <Box sx={{ flex: "1 1 300px" }}>
                <div style={{ marginBottom: "10px" }}>
                  <Typography
                    sx={{
                      fontSize: "12px",
                      color: "rgba(52, 64, 84, 1)",
                      marginBottom: "4px",
                    }}
                  >
                    Initiator
                  </Typography>

                  <TextField
                    name="card-description"
                    id="card-description"
                    variant="outlined"
                    fullWidth
                    disabled
                    placeholder="RootUser"
                    sx={{
                      backgroundColor: "rgba(245, 245, 247, 1)",
                      "& .MuiOutlinedInput-root": {
                        height: "48px",
                        borderRadius: "8px",
                      },
                    }}
                  />
                </div>

                <div style={{ marginBottom: "10px" }}>
                  <Typography
                    sx={{
                      fontSize: "12px",
                      color: "rgba(52, 64, 84, 1)",
                      marginBottom: "4px",
                    }}
                  >
                    Card Charges
                  </Typography>

                  <TextField
                    name="card-description"
                    id="card-description"
                    variant="outlined"
                    fullWidth
                    disabled
                    placeholder="₦100"
                    sx={{
                      backgroundColor: "rgba(245, 245, 247, 1)",
                      "& .MuiOutlinedInput-root": {
                        height: "48px",
                        borderRadius: "8px",
                      },
                    }}
                  />
                </div>

                <div style={{ marginBottom: "10px" }}>
                  <Typography
                    sx={{
                      fontSize: "12px",
                      color: "rgba(52, 64, 84, 1)",
                      marginBottom: "4px",
                    }}
                  >
                    Batch
                  </Typography>

                  <TextField
                    name="card-description"
                    id="card-description"
                    variant="outlined"
                    fullWidth
                    disabled
                    placeholder="882737733"
                    sx={{
                      backgroundColor: "rgba(245, 245, 247, 1)",
                      "& .MuiOutlinedInput-root": {
                        height: "48px",
                        borderRadius: "8px",
                      },
                    }}
                  />
                </div>

                <div style={{ marginBottom: "10px" }}>
                  <Typography
                    sx={{
                      fontSize: "12px",
                      color: "rgba(52, 64, 84, 1)",
                      marginBottom: "4px",
                    }}
                  >
                    Status
                  </Typography>

                  <Chip
                    sx={{
                      width:
                        status === "Acknowledged"
                          ? "200px"
                          : status === "Pending" || status === "Ready"
                            ? "100px"
                            : status === "In Progress"
                              ? "120px"
                              : "auto",
                      height:
                        status === "Acknowledged" ||
                        status === "Pending" ||
                        status === "In Progress" ||
                        status === "Ready"
                          ? "30px"
                          : "auto",
                      borderRadius:
                        status === "Acknowledged" ||
                        status === "Pending" ||
                        status === "In Progress" ||
                        status === "Ready"
                          ? "16px"
                          : "4px",
                      border:
                        status === "Pending"
                          ? "1px solid rgba(234, 236, 240, 1)"
                          : status === "In Progress"
                            ? "1px solid rgba(254, 223, 137, 1)"
                            : status === "Ready"
                              ? "1px solid rgba(171, 239, 198, 1)"
                              : "1px solid",
                      padding:
                        status === "Pending" ||
                        status === "In Progress" ||
                        status === "Ready"
                          ? "4px 12px"
                          : "4px 8px",
                      backgroundColor:
                        status === "Acknowledged"
                          ? "rgba(239, 248, 255, 1)"
                          : status === "Pending"
                            ? "rgba(249, 250, 251, 1)"
                            : status === "In Progress"
                              ? "rgba(255, 250, 235, 1)"
                              : status === "Ready"
                                ? "rgba(236, 253, 243, 1)"
                                : "transparent",
                      mixBlendMode:
                        status === "Pending" ||
                        status === "In Progress" ||
                        status === "Ready"
                          ? "multiply"
                          : "normal",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    variant="outlined"
                    label={status}
                    color={
                      status === "Ready"
                        ? "success"
                        : status === "In Progress"
                          ? "error"
                          : status === "Acknowledged"
                            ? "primary"
                            : "default"
                    }
                  />
                </div>
              </Box>
            </Box>
          </div>
          <div style={{ marginTop: "34px" }}>
            <Typography
              sx={{
                fontSize: "12px",
                color: "rgba(52, 64, 84, 1)",
                marginBottom: "4px",
              }}
            >
              Actions
            </Typography>
            <div className="actions">
              <Stack direction="row" spacing={2}>
                <Button
                  variant="contained"
                  startIcon={<LuDownload />}
                  onClick={() => {
                    handleButtonClick("download");
                    handleDownload();
                    setStatus("Pending");
                  }}
                  className="colorbuttons"
                  style={{
                    backgroundColor: "black",
                    textTransform: "capitalize",
                    height: "36px",
                    fontSize: "12px",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    opacity: activeButton === "download" ? 1 : 0.4,
                  }}
                >
                  Download for Production
                </Button>

                <Modal open={open} onClose={handleClose}>
                  <Box
                    sx={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      width: 400,
                      height: 260,
                      bgcolor: "white",
                      boxShadow: 24,
                      p: 3,
                      borderRadius: 2,
                    }}
                  >
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
                      <FaRegCheckCircle
                        sx={{
                          width: "20px",
                          color: "rgba(0, 113, 41, 1)",
                          height: "20px",
                        }}
                      />
                    </div>
                    <Typography variant="h6" style={{ marginTop: "16px" }}>
                      Successful
                    </Typography>
                    <Typography
                      variant="body2"
                      style={{ marginBottom: "32px" }}
                    >
                      Production file has been downloaded.
                    </Typography>
                    <Button
                      onClick={handleClose}
                      variant="contained"
                      sx={{ mt: 2, textTransform: "capitalize" }}
                    >
                      Continue
                    </Button>
                  </Box>
                </Modal>
              </Stack>
              <Stack direction="row" spacing={2}>
                <Button
                  variant="contained"
                  onClick={() => {
                    handleButtonClick("progress");
                    handleBtnClick();
                  }}
                  startIcon={<RiLoader2Fill />}
                  className="colorbuttons1"
                  style={{
                    backgroundColor: "rgba(181, 71, 8, 1)",
                    textTransform: "capitalize",
                    height: "36px",
                    fontSize: "12px",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    opacity: activeButton === "progress" ? 1 : 0.4,
                  }}
                >
                  Mark as In Progress
                </Button>
              </Stack>{" "}
              <Stack direction="row" spacing={2}>
                <Button
                  variant="contained"
                  startIcon={<LuPackageCheck />}
                  onClick={() => handleButtonClick("ready")}
                  //   onClick={handleDownload}
                  className="colorbuttons2"
                  style={{
                    backgroundColor: "rgba(6, 118, 71, 1)",
                    textTransform: "capitalize",
                    height: "36px",
                    fontSize: "12px",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    opacity: activeButton === "ready" ? 1 : 0.4,
                  }}
                >
                  Mark as Ready
                </Button>
              </Stack>{" "}
              <Stack direction="row" spacing={2}>
                <Button
                  variant="contained"
                  startIcon={<GoPackageDependencies />}
                  onClick={() => {
                    handleButtonClick("dispatch");
                    handleOp();
                    setStatus("Pending");
                  }}
                  className="colorbuttons3"
                  style={{
                    backgroundColor: "rgba(128, 32, 231, 1)",
                    textTransform: "capitalize",

                    height: "36px",
                    fontSize: "12px",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    opacity: activeButton === "dispatch" ? 1 : 0.4,
                  }}
                >
                  Send to Dispatch
                </Button>

                <Modal open={op} onClose={handleClo}>
                  <Box
                    sx={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      width: 400,
                      height: 260,
                      bgcolor: "white",
                      boxShadow: 24,
                      p: 3,
                      borderRadius: 2,
                    }}
                  >
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
                      <FaRegCheckCircle
                        sx={{
                          width: "20px",
                          color: "rgba(0, 113, 41, 1)",
                          height: "20px",
                        }}
                      />
                    </div>
                    <Typography variant="h6" style={{ marginTop: "16px" }}>
                      Successful
                    </Typography>
                    <Typography
                      variant="body2"
                      style={{ marginBottom: "32px" }}
                    >
                      Card batch successfully sent to dispatch.
                    </Typography>
                    <Button
                      onClick={handleClo}
                      variant="contained"
                      sx={{ mt: 2, textTransform: "capitalize" }}
                    >
                      Continue
                    </Button>
                  </Box>
                </Modal>
              </Stack>{" "}
              <Stack direction="row" spacing={2}>
                <Button
                  variant="contained"
                  startIcon={<FaRegCheckCircle />}
                  onClick={() => handleButtonClick("acknowledged")}
                  className="colorbuttons4"
                  style={{
                    backgroundColor: "rgba(1, 77, 175, 1)",
                    textTransform: "capitalize",

                    height: "36px",
                    fontSize: "12px",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    opacity: activeButton === "acknowledged" ? 1 : 0.4,
                  }}
                >
                  Mark as Acknowledged
                </Button>
              </Stack>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewRequest;
