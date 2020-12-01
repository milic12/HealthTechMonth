/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";
import { IconButton, Button } from "@material-ui/core";
import { Menu } from "@material-ui/icons";
// components
import IndexDropdown from "./IndexDropdown.js";

import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  button1: {
    margin: theme.spacing(1),
    backgroundColor: "#4299e1",
  },
  button2: {
    backgroundColor: " #90cdf4",
    margin: theme.spacing(1),
  },
  button3: {
    margin: theme.spacing(1),
  },
}));

export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const classes = useStyles();
  return (
    <>
      <nav className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-white shadow">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <IconButton
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-gray block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <Menu className="cursor-pointer border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" />
            </IconButton>

            <Link
              to="/"
              className="text-blue-400 hover:text-gray-400 text-sm font-bold leading-relaxed inline-block mr-4 py-2 pl-1 whitespace-no-wrap uppercase"
            >
              Mind 2 Health
            </Link>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none" +
              (navbarOpen ? " block" : " hidden")
            }
            id="example-navbar-warning"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="flex items-center">
                <IndexDropdown />
              </li>

              <li className="flex items-center">
                <Link
                  className="hover:text-gray-600 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  to="/findtherapist"
                >
                  Find Local Therapists
                </Link>
              </li>

              <li className="flex items-center">
                <Button
                  className={classes.button1}
                  component={Link}
                  to="/singup"
                  variant="contained"
                >
                  Get Started
                </Button>
              </li>

              <li className="flex items-center">
                <Button component={Link} to="/logintab" variant="contained">
                  Log In
                </Button>
              </li>

              <li className="flex items-center">
                <Button
                  className={classes.button3}
                  component={Link}
                  to="/videochat"
                  variant="contained"
                  color="secondary"
                >
                  Urgent Video Call
                </Button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
