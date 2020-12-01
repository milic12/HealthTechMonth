import React, { useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import MobileRightMenuSlider from "@material-ui/core/Drawer";
import home from "../images/home5.png";

import {
  AppBar,
  Toolbar,
  ListItem,
  IconButton,
  ListItemText,
  Avatar,
  Divider,
  List,
  Typography,
  Box,
  ListItemIcon,
} from "@material-ui/core";
import {
  Menu,
  AssignmentInd,
  Home,
  Apps,
  ContactMail,
  LocalLibrary,
} from "@material-ui/icons";

// CSS Styles
const useStyles = makeStyles((theme) => ({
  menuSliderContainer: {
    width: 250,
    background: "#edd9af",
    height: "100%",
  },
  avatar: {
    display: "block",
    margin: "0.5rem auto",
    width: theme.spacing(13),
    height: theme.spacing(13),
  },
  home: {
    marginLeft: "0.7rem",
    margin: "0.5rem auto",
    color: "#000080",
    width: theme.spacing(4),
    height: theme.spacing(4),
    "&:hover": {
      fill: "tan",
    },
  },
  ListItem: {
    color: "#000080",
  },
}));

const menuItems = [
  {
    listIcon: <Home />,
    listText: "Home",
    listPath: "/",
  },

  {
    listIcon: <AssignmentInd />,
    listText: "About",
    listPath: "/about",
  },

  {
    listIcon: <Apps />,
    listText: "Portfolio",
    listPath: "/portfolio",
  },

  {
    listIcon: <LocalLibrary />,
    listText: "Blog",
    listPath: "/blog",
  },
];
const Navbar = () => {
  const [state, setState] = useState({
    right: false,
  });

  const toggleSlider = (slider, open) => () => {
    setState({ ...state, [slider]: open });
  };

  const classes = useStyles();

  const sideList = (slider) => (
    <Box
      className={classes.menuSliderContainer}
      component="div"
      onClick={toggleSlider("right", false)}
    >
      <Divider />
      <List>
        {menuItems.map((lsItem, key) => (
          <ListItem button key={key} component={Link} to={lsItem.listPath}>
            <ListItemIcon className={classes.ListItem}>
              {lsItem.listIcon}{" "}
            </ListItemIcon>
            <ListItemText
              className={classes.ListItem}
              primary={lsItem.listText}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <>
      <Box component="nav">
        <AppBar position="static" style={{ background: "#edd9af" }}>
          <Toolbar>
            <IconButton onClick={toggleSlider("right", true)}>
              <Menu style={{ color: "tomato" }} />
            </IconButton>

            <Link to="/">
              <Home className={classes.home} />
            </Link>

            <Link to="/videochat">
              <p
                className="navbar2 hover:text-navbar1 flex relative pl-1"
                style={{ textDecoration: "underline #edd9af" }}
              >
                Video-Chat
              </p>
            </Link>

            <Link to="/findtherapist">
              <p
                className="navbar2 hover:text-navbar1 flex relative pl-1"
                style={{ textDecoration: "underline #edd9af" }}
              >
                Local Therapists
              </p>
            </Link>

            <MobileRightMenuSlider
              anchor="right"
              open={state.right}
              onClose={toggleSlider("right", false)}
            >
              {sideList("right")}
            </MobileRightMenuSlider>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};
export default Navbar;
