import { Component } from "react";
import "../css/about.css";
import Download from "./Download";

class About extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="row mt-20 section" style={{ marginTop: "50px" }}>
        <h className="col about" style={{}}>
          About me
          <Download></Download>
        </h>
        <p className="col " style={{ fontSize: "22px" }}>
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
          reprehenderit magnam iusto ut dolore natus laudantium repudiandae
          impedit modi totam est qui soluta dolorum, ratione ad id, error enim
          blanditiis.
        </p>
      </div>
    );
  }
}

export default About;
