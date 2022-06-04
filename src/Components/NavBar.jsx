//react Components
import React, { useState } from "react";
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
import Apps from "@mui/icons-material/Apps";
const NavBar = (props) => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const toggleDrawer = (open) => {
    setOpenDrawer(open);
  };

  const navBarStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 0,
  };

  const nameStyle = {
    fontFamily: "Comfortaa",
    textAlign: "center",
    paddingRight: "0.5rem",
  };

  const listItem = (text, icon) => {
    return (
      <ListItem key={text} disablePadding>
        <ListItemButton>
          <ListItemIcon>{icon}</ListItemIcon>
          <ListItemText primary={text} />
        </ListItemButton>
      </ListItem>
    );
  };

  const drawerWidth = 200;

  const list = (
    <Box
      sx={{ width: drawerWidth }}
      role="presentation"
      onClick={() => toggleDrawer(false)}
      onKeyDown={() => toggleDrawer(false)}
    >
      <Toolbar />
      <Divider />
      <List>
        {listItem("Home", <Home />)}
        {listItem("Web", <Web />)}
        {listItem("Games", <VideogameAsset />)}
        {listItem("Apps", <Apps />)}
      </List>
      <Divider />
      <List>
        {listItem("About Me", <Person />)}
        {listItem("Resume", <FilePresent />)}
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
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
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
