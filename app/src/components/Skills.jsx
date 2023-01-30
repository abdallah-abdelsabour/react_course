import { Component } from "react";
import ProgressBar from "./ProgressBar";

class Skills extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div
        className="container"
        style={{ backgroundColor: "#8f7979", color: "white" }}
      >
        <div style={{ textAlign: "center", fontSize: "6rem" }}> Skills </div>
        <p
          style={{ marginTop: "200px", fontSize: "2rem", textAlign: "center" }}
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum quidem
          magni inventore? Ducimus deserunt quas, delectus magnam aliquam, sint
          dolor consequatur esse a neque iste ullam molestiae modi fuga cum!
        </p>

        <div className="skillSections row" style={{ marginLeft: "150px" }}>
          <div className="left col" style={{ textAlign: "center" }}>
            MY FOUCES
            <hr />
            <p>Lorem ipsum dolor sit.</p>
            <p>Lorem ipsum dolor sit.</p>
            <p>Lorem ipsum dolor sit.</p>
            <p>Lorem ipsum dolor sit.</p>
          </div>
          <div className="rigth col" style={{ padding: "40px" }}>
            <ProgressBar percent="50"></ProgressBar>
            <ProgressBar percent={40}></ProgressBar>
            <ProgressBar percent="50"></ProgressBar>
            <ProgressBar percent={40}></ProgressBar>
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;
