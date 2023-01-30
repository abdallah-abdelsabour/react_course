import { Component } from "react";
import Job from "./Job";

class portfolio extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr ",
          rowGap: "200px",
          marginTop: "200px",
        }}
      >
        {[
          "web design",
          "web developmemt",
          "mobile design",
          "logo design",
          "web application",
          "pwa developmnet",
        ].map((title, indx) => {
          return (
            <Job
              title={title}
              color={indx % 2 == 0 ? "#e7e7e4" : "#d3bdbd"}
            ></Job>
          );
        })}
      </div>
    );
  }
}
export default portfolio;
