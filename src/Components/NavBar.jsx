//react Components
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import resume from "../resources/Bingqing(Francis) Cheng.pdf";
import "./NavBar.css";

//MUI materials
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
//MUI icons
import Home from "@mui/icons-material/Home";
import Menu from "@mui/icons-material/Menu";
import Person from "@mui/icons-material/Person";
import Web from "@mui/icons-material/Web";
import FilePresent from "@mui/icons-material/FilePresent";
import VideogameAsset from "@mui/icons-material/VideogameAsset";

const NavBar = () => {
  const navigate = useNavigate();
  const [openDrawer, setOpenDrawer] = useState(false);
  const toggleDrawer = (open) => {
    setOpenDrawer(open);
  };

  const navBarStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 0,
    minHeight: "4rem",
  };

  const nameStyle = {
    fontFamily: "Comfortaa",
    textAlign: "center",
    paddingRight: "0.5rem",
  };

  const listItem = (text, icon, html) => {
    return (
      <ListItem key={text} disablePadding>
        <ListItemButton onClick={() => navigate(html)}>
          <ListItemIcon>{icon}</ListItemIcon>
          <ListItemText>{text}</ListItemText>
        </ListItemButton>
      </ListItem>
    );
  };

  const drawerWidth = 200;

  const list = (
    <Box
      sx={{ width: { xs: "100vw", sm: drawerWidth } }}
      role="presentation"
      onClick={() => toggleDrawer(false)}
      onKeyDown={() => toggleDrawer(false)}
    >
      <Toolbar />
      <Divider />
      <List>
        {listItem("Home", <Home />, "/")}
        {listItem("Web", <Web />, "/web")}
        {listItem("Games", <VideogameAsset />, "/games")}
      </List>
      <Divider />
      <List>
        {listItem("Contact", <Person />, "/contact")}
        <Link to={resume} target="_blank" className="resume-link" download>
          <ListItem key="Resume" disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <FilePresent />
              </ListItemIcon>
              <ListItemText>Resume</ListItemText>
            </ListItemButton>
          </ListItem>
        </Link>
      </List>
    </Box>
  );

  return (
    <Box>
      <Toolbar style={navBarStyle}>
        <IconButton
          color="primary"
          size="large"
          onClick={() => toggleDrawer(true)}
        >
          <Menu />
        </IconButton>
        <span style={nameStyle}>Francis Cheng's E-Portfolio</span>
      </Toolbar>
      <Drawer
        anchor="left"
        variant="temporary"
        open={openDrawer}
        onClose={() => toggleDrawer(false)}
        ModalProps={{ keepMounted: true }}
        sx={{ width: { xs: "100vw", sm: drawerWidth }, flexShrink: { sm: 0 } }}
      >
        {list}
      </Drawer>
      <Drawer
        variant="permanent"
        anchor="left"
        sx={{
          display: { xs: "none", lg: "block" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
        open
      >
        {list}
      </Drawer>
    </Box>
  );
};

export default NavBar;
