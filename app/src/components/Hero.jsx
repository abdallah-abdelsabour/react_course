import { Component } from "react";
// import slider from "";

class Hero extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div
        id="carouselExample"
        className="carousel slide"
        style={{ marginTop: "200px" }}
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://soliloquywp.com/wp-content/uploads/2019/04/nb_esc_cover.jpg"
              className="d-block w-100"
              alt="..."
            />{" "}
          </div>
          <div className="carousel-item">
            <img
              src="https://soliloquywp.com/wp-content/uploads/2019/04/nb_esc_cover.jpg"
              className="d-block w-100"
              alt="..."
            />{" "}
          </div>
          <div className="carousel-item">
            <img
              src="https://soliloquywp.com/wp-content/uploads/2019/04/nb_esc_cover.jpg"
              className="d-block w-100"
              alt="..."
            />{" "}
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    );
  }
}
export default Hero;
