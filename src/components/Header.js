import React from "react";
import Typed from "react-typed";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Avatar, Grid } from "@material-ui/core";
import avatar from "../brain3.png";
import anxiety from "../images/anxiety.png";
import depression from "../images/depression.jpg";
import ptsd from "../images/ptsd1.jpg";
import mood from "../images/mood.jpg";
import stress from "../images/stress.jpg";
import relationship from "../images/relationship.png";

//CSS Styles
const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(45),
    height: theme.spacing(45),
    margin: theme.spacing(2),
    marginTop: "1rem",
  },
  title: {
    color: "#ACDEDF",
  },

  subtitle: {
    color: "#9fd5f3",
    marginBottom: "5rem",
  },

  typedContainer: {
    position: "absolute",
    top: "60%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100vw",
    textAlign: "center",
    zIndex: 1,
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.typedContainer}>
        <Grid container justify="center">
          <Avatar className={classes.avatar} src={avatar} alt="Hero Image" />
        </Grid>

        <Typography className={classes.title} variant="h4">
          <Typed strings={["Mind 2 Health"]} typeSpeed={40} />
        </Typography>
        <br />
        <Typography className={classes.subtitle} variant="h5">
          <Typed
            strings={[
              "Relax",
              "Take a deep breath",
              "Click on the category that you need",
            ]}
            typeSpeed={60}
            backSpeed={70}
            loop
          />
        </Typography>
      </div>

      <div className="flex flex-wrap items-center pt-52">
        <div className="w-full md:w-6/12 px-4 mr-auto ml-auto mt-32">
          <div className="justify-center flex flex-wrap relative">
            <div className="my-4 w-full lg:w-6/12 px-4">
              <a href="">
                <div className="bg-red-600 shadow-lg rounded-lg text-center p-8">
                  <img
                    alt="..."
                    className="shadow-md rounded-full max-w-full w-28 mx-auto p-2 bg-white"
                    src={depression}
                  />
                  <p className="text-lg text-white mt-4 font-semibold">
                    Depression
                  </p>
                </div>
              </a>
              <a href="">
                <div className="bg-blue-500 shadow-lg rounded-lg text-center p-8 mt-8">
                  <img
                    alt="..."
                    className="shadow-md rounded-full max-w-full w-28 mx-auto p-2 bg-white"
                    src={anxiety}
                  />
                  <p className="text-lg text-white mt-4 font-semibold">
                    Anxiety
                  </p>
                </div>
              </a>
              <a href="">
                <div className="bg-gray-800 shadow-lg rounded-lg text-center p-8 mt-8">
                  <img
                    alt="..."
                    className="shadow-md rounded-full max-w-full w-24 mx-auto p-2 bg-white"
                    src={ptsd}
                  />
                  <p className="text-lg text-white mt-4 font-semibold">PTSD</p>
                </div>
              </a>
            </div>
            <div className="my-4 w-full lg:w-6/12 px-4 lg:mt-16">
              <a href="">
                <div className="bg-gray-800 shadow-lg rounded-lg text-center p-8">
                  <img
                    alt="..."
                    className="shadow-md rounded-full max-w-full w-28 mx-auto p-2 bg-white"
                    src={mood}
                  />
                  <p className="text-lg text-white mt-4 font-semibold">
                    Mood Disorder
                  </p>
                </div>
              </a>
              <a href="">
                <div className="bg-red-700 shadow-lg rounded-lg text-center p-8 mt-8">
                  <img
                    alt="..."
                    className="shadow-md rounded-full max-w-full w-32 mx-auto p-2 bg-white"
                    src={stress}
                  />
                  <p className="text-lg text-white mt-4 font-semibold">
                    Stress
                  </p>
                </div>
              </a>
              <a href="">
                <div className="bg-blue-500 shadow-lg rounded-lg text-center p-8 mt-8">
                  <img
                    alt="..."
                    className="shadow-md rounded-full max-w-full w-28 mx-auto p-2 bg-white"
                    src={relationship}
                  />
                  <p className="text-lg text-white mt-4 font-semibold">
                    Relationship
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-2">
          <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 "></div>
          <h3 className="text-3xl text-blue-600 mb-2 font-semibold leading-normal">
            Mind 2 Health
          </h3>
          <p className="text-lg font-bold leading-relaxed mt-4 mb-4 text-gray-700">
            Our mission is to help you stay healthy mentally by connecting you
            with professional counselor via Online Video Chat,
          </p>
          <p className="text-lg font-bold leading-relaxed mt-4 mb-4 text-gray-700">
            Also, we have our own exercises and tools that you can use
          </p>

          <a
            href=""
            target="_blank"
            className="font-bold text-gray-800 hover:text-gray-600 ease-linear transition-all duration-150"
          >
            View some of them{" "}
            <i className="fa fa-angle-double-right ml-1 leading-relaxed"></i>
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
