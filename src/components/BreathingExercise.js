import React from "react";
import GifPlayer from "react-gif-player";
import breathing from "../images/breathing.gif";
import breathingstill from "../images/breathing-still1.png";
import IndexNavbar from "./IndexNavbar";
import Timer from "react-compound-timer";

class BreathingExercise extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: true,
    };
  }

  render() {
    return (
      <>
        <IndexNavbar />
        <React.Fragment>
          <GifPlayer
            className="center pt-16"
            gif={breathing}
            still={breathingstill}
            pauseRef={(pause) => (this.pauseGif = pause)}
            onTogglePlay={(playing) => this.setState({ playing })}
            autoplay
          />
          <br />
          <button
            className="center2 bg-blue-600 text-white active:bg-blue-500 text-xs font-bold uppercase px-4 rounded shadow hover:shadow-lg outline-none focus:outline-none  ease-linear transition-all duration-150"
            style={{ fontSize: 30 }}
            disabled={!this.state.playing}
            onClick={() => this.pauseGif()}
          >
            {this.state.playing ? "Pause" : "Paused"}
          </button>
        </React.Fragment>

        <Timer initialTime={55000}>
          {({ start, resume, pause, stop, reset, timerState }) => (
            <React.Fragment>
              <div className="center1 pt-6 text-xl ">
                <Timer.Days /> days
                <Timer.Hours /> hours
                <Timer.Minutes /> minutes
                <Timer.Seconds /> seconds
                <Timer.Milliseconds /> milliseconds
              </div>
              <div className="center1 ">{timerState}</div>
              <br />
              <div className="center1 ">
                <button
                  className="bg-blue-500 text-white active:bg-blue-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-1 mb-3 ease-linear transition-all duration-150"
                  onClick={start}
                >
                  Start
                </button>
                <button
                  className="bg-blue-500 text-white active:bg-blue-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-1 mb-3 ease-linear transition-all duration-150"
                  onClick={pause}
                >
                  Pause
                </button>
                <button
                  className="bg-blue-500 text-white active:bg-blue-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-1 mb-3 ease-linear transition-all duration-150"
                  onClick={resume}
                >
                  Resume
                </button>
                <button
                  className="bg-blue-500 text-white active:bg-blue-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-1 mb-3 ease-linear transition-all duration-150"
                  onClick={stop}
                >
                  Stop
                </button>
                <button
                  className="bg-blue-500 text-white active:bg-blue-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-1 mb-3 ease-linear transition-all duration-150"
                  onClick={reset}
                >
                  Reset
                </button>
              </div>
            </React.Fragment>
          )}
        </Timer>
      </>
    );
  }
}

export default BreathingExercise;
