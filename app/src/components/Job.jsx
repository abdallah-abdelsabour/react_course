import { Component } from "react";

class Job extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div
        style={{
          textAlign: "center",
          width: "300px",
          height: "300px",
          paddingTop: "150px",

          backgroundColor: this.props.color,
          boxShadow: "0 0 2px",
        }}
      >
        <h2 style={{ textTransform: "uppercase" }}> {this.props.title}</h2>
      </div>
    );
  }
}

export default Job;
