import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import Home from "@mui/icons-material/Home";
import Menu from "@mui/icons-material/Menu";
import Person from "@mui/icons-material/Person";
import Web from "@mui/icons-material/Web";
import FilePresent from "@mui/icons-material/FilePresent";
import VideogameAsset from "@mui/icons-material/VideogameAsset";
import Apps from "@mui/icons-material/Apps";
const NavBar = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const toggleDrawer = (open) => {
    setOpenDrawer(open);
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

  const list = () => {
    return (
      <Box
        sx={{ width: 200 }}
        role="presentation"
        onClick={() => toggleDrawer(false)}
        onKeyDown={() => toggleDrawer(false)}
      >
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
  };

  return (
    <>
      <IconButton
        color="primary"
        size="large"
        onClick={() => toggleDrawer(true)}
      >
        <Menu />
      </IconButton>
      <Drawer
        anchor="left"
        open={openDrawer}
        onClose={() => toggleDrawer(false)}
      >
        {list()}
      </Drawer>
    </>
  );
};

export default NavBar;
