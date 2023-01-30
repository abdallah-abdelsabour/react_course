import { Component } from "react";

class ProgressBar extends Component {
  constructor() {
    super();
    // this.state = { percent: percent };
  }

  render() {
    return (
      <div style={{ marginBottom: "30px" }}>
        <div className="progress m-2">
          <div
            className="progress-bar"
            role="progressbar"
            // width="50px"
            style={{ width: this.percent }}
          ></div>
        </div>
      </div>
    );
  }
}

export default ProgressBar;
