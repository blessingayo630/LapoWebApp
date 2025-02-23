import "../App.css";
import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import lapoLogo from "../assetsFolder/logo/LAPO.svg";
import { BiHomeAlt } from "react-icons/bi";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { MdOutlineDisplaySettings } from "react-icons/md";
import {
  TbUserShield,
  TbUsersGroup,
  TbCreditCard,
  TbUserCircle,
} from "react-icons/tb";
import { useMediaQuery, Breadcrumbs, Link } from "@mui/material";
import { MdOutlineCreditScore, MdOutlineWaterfallChart } from "react-icons/md";
import { GiSwipeCard } from "react-icons/gi";
import { IoList } from "react-icons/io5";
import { FiLayers } from "react-icons/fi";
import { CiMap } from "react-icons/ci";
import { HiOutlineUser } from "react-icons/hi2";
import { IoIosLogOut, IoIosNotificationsOutline } from "react-icons/io";
import sidebarFooterImg from "../assetsFolder/svg/Vector.svg";
import CardProfile from "./CardProfile";
import CardRequest from "./CardRequest";
import DashboardHome from "./DashboardHome";
// import { fontWeight } from "html2canvas/dist/types/css/property-descriptors/font-weight";
// import html2canvas from "html2canvas/dist/types/css/property-descriptors/font-weight";

const drawerWidth = 270;

const menuItems = [{ text: "Dashboard", icon: <BiHomeAlt /> }];

const extraMenuItems = [
  { text: "Branches", icon: <HiOutlineBuildingOffice2 /> },
  { text: "Role", icon: <TbUserShield /> },
  { text: "Users", icon: <TbUsersGroup /> },
  { text: "Card Scheme", icon: <MdOutlineDisplaySettings /> },

  { text: "Card Profile", icon: <MdOutlineCreditScore /> },
  { text: "Card Request", icon: <GiSwipeCard /> },

  { text: "Stock", icon: <MdOutlineWaterfallChart /> },
  { text: "Cards", icon: <TbCreditCard /> },
  { text: "Authorization List", icon: <IoList /> },
  { text: "Authorization Queue", icon: <FiLayers /> },
  { text: "Trail", icon: <CiMap /> },
  { text: "Account", icon: <HiOutlineUser /> },
];

const logoutItems = [{ text: "Logout", icon: <IoIosLogOut /> }];

export default function Dashboard(props) {
  const [showBreadcrumbs, setShowBreadcrumbs] = useState(false);

  const [showBreadcrumbsRequest, setshowBreadcrumbsRequest] = useState(false);

  const [showCreateProfile, setShowCreateProfile] = useState(false);

  const handleAddProfile = () => {
    setShowCreateProfile(true);
  };

  const [showViewRequest, setShowViewRequest] = useState(false);

  const handleViewClick = () => {
    setShowViewRequest(true);
  };

  const handleBackClick = (event) => {
    event.preventDefault();
    setShowCreateProfile(false);
    setShowBreadcrumbs(false);
    setShowViewRequest(false);
    setshowBreadcrumbsRequest(false);
  };

  const handleClick = (event) => {
    event.preventDefault();
    setShowBreadcrumbs(false);
    setshowBreadcrumbsRequest(false);
  };

  const handleCreateRequest = (event) => {
    event.preventDefault();
    setshowBreadcrumbsRequest(false);
  };

  const breadcrumbs = [
    <Link
      underline="hover"
      key="1"
      color="inherit"
      href="/"
      onClick={handleBackClick}
    >
      {"< Back"}
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="inherit"
      href="/"
      onClick={handleBackClick}
    >
      Card Profile
    </Link>,
    <Typography key="3" sx={{ color: "text.primary" }}>
      Create Profile
    </Typography>,
  ];

  const breadcrumbsRequest = [
    <Link
      underline="hover"
      key="1"
      color="inherit"
      href="/"
      onClick={handleBackClick}
    >
      {"< Back"}
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="inherit"
      href="/"
      onClick={handleBackClick}
    >
      Card Request
    </Link>,
    <Typography key="3" sx={{ color: "text.primary" }}>
      Request Details
    </Typography>,
  ];

  const { window } = props;

  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [activeItem, setActiveItem] = useState("Dashboard");

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const handleMenuItemClick = (text) => {
    setActiveItem(text);
    localStorage.setItem("activeSidebarItem", text);
  };

  useEffect(() => {
    const storedItem = localStorage.getItem("activeSidebarItem");
    if (storedItem) {
      setActiveItem(storedItem);
    }
  }, []);

  const isMobile = useMediaQuery("(max-width:600px)");

  const drawerContent = (
    <Box sx={{ textAlign: "center", p: 2 }}>
      <img className="sidebar_logo" src={lapoLogo} alt="lapoLogo" />
      <List sx={{ color: "rgba(128, 128, 128, 1)" }}>
        {menuItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton
              selected={activeItem === item.text}
              onClick={() => handleMenuItemClick(item.text)}
              sx={{
                backgroundColor:
                  activeItem === item.text
                    ? "rgba(246, 246, 246, 1)"
                    : "transparent",
                borderRadius: "8px",

                border:
                  activeItem === item.text
                    ? "1px solid rgba(226, 226, 226, 1)"
                    : "transparent",
                color:
                  activeItem === item.text
                    ? "rgba(1, 77, 175, 1)"
                    : "rgba(128, 128, 128, 1)",

                "&.Mui-selected": {
                  backgroundColor: "rgba(246, 246, 246, 1) !important",
                  color: "rgba(1, 77, 175, 1)",
                  borderRadius: "8px",
                },
                // "&.Mui-selected:hover": {
                //   backgroundColor: "rgba(190, 190, 190, 1) !important",
                // },

                "& .MuiListItemIcon-root": {
                  color:
                    activeItem === item.text
                      ? "rgba(1, 77, 175, 1)"
                      : "inherit",
                },
              }}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText
                sx={{ position: "relative", left: "-20px" }}
                primaryTypographyProps={{ fontSize: "14px" }}
                primary={item.text}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <p
        style={{
          fontSize: "10px",
          marginRight: "9rem",
          color: "rgba(126, 139, 156, 1)",
        }}
      >
        MAIN MENU
      </p>
      <List
        sx={{
          color: "rgba(128, 128, 128, 1)",
        }}
      >
        {extraMenuItems.map((item) => (
          <ListItem
            style={{ display: "flex", flexWrap: "wrap", gap: "2px" }}
            key={item.text}
            disablePadding
          >
            <ListItemButton
              selected={activeItem === item.text}
              onClick={() => handleMenuItemClick(item.text)}
              sx={{
                backgroundColor:
                  activeItem === item.text
                    ? "rgba(246, 246, 246, 1)"
                    : "transparent",
                borderRadius: "8px",
                height: "45px",
                fontSize: "16px",
                fontWeight: "400",

                border:
                  activeItem === item.text
                    ? "1px solid rgba(226, 226, 226, 1)"
                    : "transparent",
                color:
                  activeItem === item.text
                    ? "rgba(1, 77, 175, 1)"
                    : "rgba(128, 128, 128, 1)",

                "&.Mui-selected": {
                  backgroundColor: "rgba(246, 246, 246, 1) !important",
                  color: "rgba(1, 77, 175, 1)",
                  borderRadius: "8px",
                },

                "& .MuiListItemIcon-root": {
                  color:
                    activeItem === item.text
                      ? "rgba(1, 77, 175, 1)"
                      : "inherit",
                },
              }}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText
                sx={{ position: "relative", left: "-20px" }}
                primaryTypographyProps={{ fontSize: "14px" }}
                primary={item.text}
              />

              {/* <h5>{item.text}</h5> */}
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <List sx={{ marginTop: "40px", marginBottom: "30px" }}>
        {logoutItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton
              selected={activeItem === item.text}
              onClick={() => handleMenuItemClick(item.text)}
              sx={{
                backgroundColor:
                  activeItem === item.text
                    ? "rgba(246, 246, 246, 1)"
                    : "transparent",
                borderRadius: "8px",
                fontFamily: "Satoshi",

                border:
                  activeItem === item.text
                    ? "1px solid rgba(226, 226, 226, 1)"
                    : "transparent",
                color:
                  activeItem === item.text
                    ? "rgba(1, 77, 175, 1)"
                    : "rgba(128, 128, 128, 1)",

                "&.Mui-selected": {
                  backgroundColor: "rgba(246, 246, 246, 1) !important",
                  color: "rgba(1, 77, 175, 1)",
                  borderRadius: "8px",
                },
                // "&.Mui-selected:hover": {
                //   backgroundColor: "rgba(190, 190, 190, 1) !important",
                // },

                "& .MuiListItemIcon-root": {
                  color:
                    activeItem === item.text
                      ? "rgba(1, 77, 175, 1)"
                      : "inherit",
                },
              }}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText
                sx={{ position: "relative", left: "-20px" }}
                primaryTypographyProps={{ fontSize: "14px" }}
                primary={item.text}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <p
        style={{
          fontSize: "10px",
          marginRight: "9rem",
          color: "rgba(126, 139, 156, 1)",
        }}
      >
        POWERED BY
      </p>
      <img
        src={sidebarFooterImg}
        alt="sidebarFooterImg"
        style={{ width: "99.33px", marginRight: "7rem" }}
      />
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const renderActiveMenu = () => {
    const activeMenu = [...menuItems, ...extraMenuItems, ...logoutItems].find(
      (item) => item.text === activeItem
    );

    return activeMenu ? (
      <Box sx={{ display: "flex", gap: 4 }}>
        <Box className="icon-nav">{activeMenu.icon}</Box>
        <Typography
          sx={{ position: "relative", left: "18px", top: "3px" }}
          noWrap
          component="div"
        >
          {activeItem}
        </Typography>
      </Box>
    ) : null;
  };

  const renderActiveComponent = () => {
    switch (activeItem) {
      case "Dashboard":
        return <DashboardHome />;
      case "Card Profile":
        return (
          <CardProfile
            setShowBreadcrumbs={setShowBreadcrumbs}
            showCreateProfile={showCreateProfile}
            handleAddProfile={handleAddProfile}
            handleBackClick={handleBackClick}
            setShowCreateProfile={setShowCreateProfile}
          />
        );
      case "Card Request":
        return (
          <CardRequest
            setshowBreadcrumbsRequest={setshowBreadcrumbsRequest}
            showViewRequest={showViewRequest}
            handleViewClick={handleViewClick}
            handleBackClick={handleBackClick}
            setShowViewRequest={setShowViewRequest}
          />
        );
      default:
        return `You are currently viewing the ${activeItem} page.`;
    }
  };

  const renderBreadcrumbs = () => {
    if (activeItem === "Card Profile" && showBreadcrumbs) {
      return <Breadcrumbs separator="›">{breadcrumbs}</Breadcrumbs>;
    }
    if (activeItem === "Card Request" && showBreadcrumbsRequest) {
      return <Breadcrumbs separator="›">{breadcrumbsRequest}</Breadcrumbs>;
    }
    return renderActiveMenu();
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          bgcolor: "white",
          color: "rgba(0, 23, 53, 1)",
        }}
      >
        <Toolbar>
          {isMobile ? (
            <>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: "none" } }}
              >
                <MenuIcon />
              </IconButton>
            </>
          ) : (
            <Box
              sx={{
                position: "absolute",
                right: "0px",
                display: "flex",
                gap: "15px",
                justifyContent: "end",
                marginRight: "10px",
                fontSize: "1.5rem",
              }}
            >
              <IoIosNotificationsOutline />
              <TbUserCircle />
            </Box>
          )}

          <Box sx={{ p: 2 }}>{renderBreadcrumbs()}</Box>
        </Toolbar>
      </AppBar>

      <Box className="dash-sidebar">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClick={handleDrawerClose}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawerContent}

          <Box
            sx={{
              position: "absolute",
              // right: "0px",
              bottom: "0px",

              display: "flex",
              gap: "15px",
              // justifyContent: "end",
              left: "30px",
              fontSize: "1.5rem",
            }}
          >
            <IoIosNotificationsOutline />
            <TbUserCircle />
          </Box>
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          open
        >
          {drawerContent}
        </Drawer>
      </Box>

      <Box
        component="main"
        className="main-body"
        sx={{
          // flexGrow: 1,
          bgcolor: "rgba(248, 251, 255, 1)",
          // height: "100%",
          overflowY: "auto",
          maxHeight: "50rem",
          "&::-webkit-scrollbar": {
            display: "none",
          },
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
          // pt: 3,
          // width: "80%",
          // margin: "auto",
        }}
      >
        <Toolbar />
        {/* <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
          {activeItem}
        </Typography> */}
        <Typography paragraph>{renderActiveComponent()}</Typography>
      </Box>
    </Box>
  );
}
