import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Services() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoPlay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {[...Array(5)].map((_, index) => (
          <div key={index}>
            <div className="card-wrapper">
              <div className="card-img-scale-wrapper">
                <img
                  src="assets/images/services/4by3/01.jpg"
                  className="card-img-top img-scale"
                  alt="service"
                />
              </div>
              <div className="card-body p-4">
                <h6>
                  <a href="service-single.html">Custom Software Development</a>
                </h6>
                <p className="mb-0">
                  We prioritize user experience, scalability, and security to
                  ensure your.
                </p>
              </div>
              <div className="card-footer border-top bg-body p-4">
                <a
                  className="icon-link icon-link-hover stretched-link p-0 m-0"
                  href="/"
                >
                  Explore this service<i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Services;
