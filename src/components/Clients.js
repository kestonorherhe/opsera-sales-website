import React from "react";
import Slider from "react-slick";

function ClientsSlider() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div style={{ width: "100px", height: "100px" }}>
          <img
            src="../../assets/images/anambra.png"
            alt=""
            style={{ width: "100px", height: "100px", objectFit: "contain" }}
          />
        </div>
        <div>
          <img
            src="../../assets/images/benue-gov.png"
            alt=""
            style={{ width: "100px", height: "100px", objectFit: "contain" }}
          />
        </div>
        <div>
          <img
            src="../../assets/images/unnamed.png"
            alt=""
            style={{ width: "100px", height: "100px", objectFit: "contain" }}
          />
        </div>
        <div>
          <img
            src="../../assets/images/olivia-logo.png"
            alt=""
            style={{ width: "100px", height: "100px", objectFit: "contain" }}
          />
        </div>
        <div>
          <img
            src="../../assets/images/ondo-gov.png"
            alt=""
            style={{ width: "100px", height: "100px", objectFit: "contain" }}
          />
        </div>
      </Slider>
    </div>
  );
}

export default ClientsSlider;
