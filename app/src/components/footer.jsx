import { Component } from "react";
import ContactMe from "./ContactMe";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Footer extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div
        className="row"
        style={{
          backgroundColor: "#5e5757",
          color: "white",
          marginTop: "100px",
          marginRight: "50px",
        }}
      >
        <div className="col" style={{ padding: "30px" }}>
          <p>GET IN TOUCH</p>
          <p>Abdallah@mail.com</p>
          <p>+201018378144</p>
        </div>
        <div className="col">
          <ContactMe> </ContactMe>
        </div>
        <div className="col" style={{ marginTop: "20px", textAlign: "center" }}>
          <p>facebook</p>
          <p>youtube</p>
          <p>instegram</p>
        </div>
      </div>
    );
  }
}

export default Footer;
