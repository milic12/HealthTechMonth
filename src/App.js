import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import VideoChat from "./components/VideoChat";
import Home from "./components/";
import FindTherapist from "./components/FindTherapist";
import BreathingExercise from "./components/BreathingExercise";
import LogInTab from "./components/LogInTab";
import SingUp from "./components/SingUp";
import CssBaseline from "@material-ui/core/CssBaseline";

const App = () => {
  return (
    <>
      <CssBaseline />
      <Route exact path="/" component={Home} />
      <Route path="/videochat" component={VideoChat} />
      <Route path="/findtherapist" component={FindTherapist} />
      <Route path="/breathingexercise" component={BreathingExercise} />
      <Route path="/logintab" component={LogInTab} />
      <Route path="/singup" component={SingUp} />
    </>
  );
};

export default App;
