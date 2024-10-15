import React, { useState } from "react";
import {
  alpha,
  Box,
  Button,
  IconButton,
  InputBase,
  Stack,
  styled,
  Toolbar,
  useTheme,
  Menu,
  MenuItem,
  useMediaQuery,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MuiAppBar from "@mui/material/AppBar";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import logo from "../assests/devroots logo.png"; // Import your logo here
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import MoreVertIcon from "@mui/icons-material/MoreVert"; // Icon for dropdown menu
import HomeIcon from "@mui/icons-material/Home"; // Import icons for menu items
import StartIcon from "@mui/icons-material/Start"; // Example icon for "Start here"
import ServiceIcon from "@mui/icons-material/Assignment"; // Example icon for "Service"
import InfoIcon from "@mui/icons-material/Info"; // Example icon for "About us"
const drawerWidth = 200;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const TopBar = ({ open, handleDrawerOpen, setMode }) => {
  const navigate = useNavigate(); // Initialize navigate
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // Check if the screen is mobile
  const isIpad = useMediaQuery(theme.breakpoints.between("sm", "md")); // Check if the screen is iPad
  const isLandscape = useMediaQuery(theme.breakpoints.between("sm", "md")); // Check if the screen is iPad

  const handleSignInClick = () => {
    navigate("/login");
  };

  const handleSignUpClick = () => {
    navigate("/signup");
  };

  const toggleTheme = () => {
    const newMode = theme.palette.mode === "light" ? "dark" : "light";
    localStorage.setItem("currentMode", newMode);
    setMode(newMode);
  };

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    marginRight: theme.spacing(2),
    marginLeft: 0,
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1), // Adjust margin for smaller screens
      width: "200px", // Width for larger screens
    },
    [theme.breakpoints.down("sm")]: {
      display: "none", // Hide on mobile screens
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%", // Full width for input
    },
  }));

  // Menu items for dropdown with icons
  const MenuItems = () => (
    
    <Box
      sx={{
        maxWidth: isIpad ? "none" : "none",
        display: "flex",
        flexDirection: isMobile?"column" : "row",
        gap: isIpad ? "0px" : "none", // Set gap between items based on device
      }}
    >
      {" "}
      <MenuItem onClick={handleMenuClose}>
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: isMobile || isIpad || isLandscape ? "#293241" : "white",
            display: "flex",
            alignItems: "center",
          }}
        >
          <HomeIcon style={{ marginRight: "3px", fontSize: 15 }} />
          Home
        </Link>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <Link
          to="/start"
          style={{
            textDecoration: "none",
            color: isMobile || isIpad || isLandscape ? "#293241" : "white",
            display: "flex",
            alignItems: "center",
          }}
        >
          <StartIcon style={{ marginRight: "3px", fontSize: 15 }} />
          Start here
        </Link>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <Link
          to="/service"
          style={{
            textDecoration: "none",
            color: isMobile || isIpad || isLandscape ? "#293241" : "white",
            display: "flex",
            alignItems: "center",
          }}
        >
          <ServiceIcon style={{ marginRight: "3px", fontSize: 15 }} />
          Service
        </Link>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <Link
          to="/about"
          style={{
            textDecoration: "none",
            color: isMobile || isIpad || isLandscape ? "#293241" : "white",
            display: "flex",
            alignItems: "center",
          }}
        >
          <InfoIcon style={{ marginRight: "3px", fontSize: 15 }} />
          About us
        </Link>
      </MenuItem>
    </Box>
  );

  return (
    <AppBar
      position="absolute"
      open={open}
      sx={{ zIndex: 0, backgroundColor: "#1d242f"  ,width:"100%" , left:0}}
    >
      <Toolbar sx={{ padding: isIpad || isLandscape ? "0" : "0"  , }}>
        {" "}
        {/* Conditional padding for iPad */}
        <img
          src={logo}
          alt="Logo"
          style={{ width: "150px", marginRight: "8px" , }} // Reduced logo margin
        />
        <Box display="flex" justifyContent="center" flexGrow={1}>
          <Stack direction="row" spacing={0}         // Set gap between items based on device
          >
            {" "}
            {/* Decreased spacing */}{" "}
            {/* Dropdown menu for mobile and iPad screens */}
            {isMobile || isIpad || isLandscape ? (
              <>
                <IconButton onClick={handleMenuClick} color="inherit" >
                  <MoreVertIcon /> {/* Dropdown icon */}
                </IconButton>
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleMenuClose}
                  sx={{flexDirection:"row"}}
                >
                  <MenuItems /> {/* Render dropdown items */}
                </Menu>
              </>
            ) : (
              <Stack direction="row" spacing={1}>
                {" "}
                {/* Reduced spacing between items */}
                <MenuItems /> {/* Render menu items for desktop */}
              </Stack>
            )}
          </Stack>
        </Box>
        <Box flexGrow="" />
        {/* Search component - hidden on mobile */}
        <Box
          display={{ xs: "none", sm: "flex", md: "flex" }}
          alignItems="center" 
        >
          <Search
            sx={{
              borderRadius: "25px",
              height: "30px",
              backgroundColor: "#F5F5F5",
              color: "#293241",
              width: isIpad ? "150px " : "150px !important"  // Adjust width for iPad mode

            }}
          >
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <IconButton onClick={toggleTheme} color="inherit"  >
            {theme.palette.mode === "light" ? (
              <LightModeOutlinedIcon />
            ) : (
              <DarkModeOutlinedIcon />
            )}
          </IconButton>
        </Box>
        <Stack direction="row" spacing={0}>
          {" "}
          {/* Adjusted spacing between buttons */}
          <Button
            type="submit"
            variant="contained"
            onClick={handleSignInClick}
            sx={{
              display: "flex",
              backgroundColor: "#293241",
              borderRadius: "15px 0 0 15px",
              width: "75px", // Reduced button width
              textTransform: "Capitalize",
              fontSize: "0.71rem", // Adjusted font size for smaller screens
            }}
          >
            Sign in
          </Button>
          <Button
            type="submit"
            variant="contained"
            onClick={handleSignUpClick}
            sx={{
              display: "flex",
              alignItems: "right",
              justifyContent: "center",
              backgroundColor: "#ee6f57",
              borderRadius: "0 15px 15px 0",
              width: "75px", // Reduced button width
              textTransform: "Capitalize",
              fontSize: "0.71rem", // Adjusted font size for smaller screens
            
            }}
          >
            Sign up
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
