import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { Box } from "@material-ui/core";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import DirectionsIcon from "@material-ui/icons/Directions";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import background from "../images/findtherapist.png";
import IndexNavbar from "./IndexNavbar";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "20rem",
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 400,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
  background: {
    backgroundImage: `url(${background})`,
  },
}));

const FindTherapist = () => {
  const classes = useStyles();

  return (
    <>
      <IndexNavbar />
      <Box>
        <Paper component="form" className={classes.root}>
          <IconButton className={classes.iconButton} aria-label="menu">
            <ExpandMoreIcon />
          </IconButton>
          <InputBase
            className={classes.input}
            placeholder="Search Local Therapist"
            inputProps={{ "aria-label": "Search Local Therapist" }}
          />
          <IconButton
            type="submit"
            className={classes.iconButton}
            aria-label="search"
          >
            <SearchIcon />
          </IconButton>
          <Divider className={classes.divider} orientation="vertical" />
          <IconButton
            color="primary"
            className={classes.iconButton}
            aria-label="directions"
          >
            <DirectionsIcon />
          </IconButton>
        </Paper>
      </Box>
    </>
  );
};

export default FindTherapist;
