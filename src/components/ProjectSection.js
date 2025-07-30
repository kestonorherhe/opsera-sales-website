import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: "FERA",
      image: "../../assets/images/fera.png",
      description:
        "A government sponsored project that provides skilled courses to students in Nigerian tertiary institutions",
    },
    {
      id: 2,
      title: "STA Academy",
      image: "assets/images/sta.png",
      description:
        "Your Gateway to Tech Mastery and Career Advancement. Whether you're looking to start a new career, upskill, or advance your team's knowledge, STA provides expert-led training programs designed to meet the demands of today's tech-driven world.",
    },
    {
      id: 3,
      title: "Shop Life",
      image: "assets/images/shoplife.png",
      description:
        "An agric e-commerce platform that simplifies agricultural trade by offering a wide range of agric products especially cash crop sales in large quantity. Your trusted partner for bulk supply of agricultural produce globally",
    },
    {
      id: 4,
      title: "STMS",
      image: "assets/images/stms.png",
      description:
        "An ERP (Enterprise Resource Planning) solution for tertiary institution management that streamlines and automates the academic, administrative and financial operations of universities, polytechnics, and colleges. It provides a centralized platform to manage student life cycles, staff operations, academic records, finance, and institutional resources efficiently.",
    },
    {
      id: 5,
      title: "Soft Pay",
      image: "assets/images/soft-pay.png",
      description:
        "SoftNet Pay (softnetpay.ng) is a comprehensive payroll and human resource management system designed for both corporate and public organizations. It allows users to manage employee details, salary information, and process payments efficiently.",
    },
    {
      id: 6,
      title: "IRS",
      image: "assets/images/birs.png",
      description:
        "A revenue generation solution designed to streamline and automate the processes involved in collecting, managing and reporting public revenues",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: true,
    adaptiveHeight: true,
    className: "project-slider",
  };

  return (
    <section className="py-5 bg-light" style={{ marginTop: "100px" }}>
      <div className="container">
        <div className="row align-items-center g-4 mb-4 mb-sm-5">
          <div className="col-md-6 col-lg-5">
            <h2 className="mb-0">Our latest projects</h2>
          </div>
          <div className="col-md-6 col-lg-4 ms-auto text-md-end">
            <a href="/projects" className="btn btn-lg btn-dark mb-0">
              View all projects
            </a>
          </div>
        </div>

        <div className="row align-items-center">
          {/* Left side - Project Information */}
          <div className="col-lg-5 mb-4 mb-lg-0">
            <div className="pe-lg-4">
              {/* <h2 className="mb-4">
                Transforming Visions into Digital Reality
              </h2> */}
              <p className="mb-4 lead">
                We craft tailored digital solutions that elevate your business
                to new heights. Our projects showcase our commitment to
                innovation, quality, and excellence.
              </p>

              <div className="d-flex align-items-center mb-4">
                <div className="bg-primary rounded-circle text-white p-3 me-3">
                  <i className="bi bi-star-fill"></i>
                </div>
                <div>
                  <h5 className="mb-1">Award-Winning Design</h5>
                  <p className="mb-0 text-muted">
                    Recognized for our creative excellence
                  </p>
                </div>
              </div>

              <div className="d-flex align-items-center mb-4">
                <div className="bg-primary rounded-circle text-white p-3 me-3">
                  <i className="bi bi-code-slash"></i>
                </div>
                <div>
                  <h5 className="mb-1">Cutting-Edge Technology</h5>
                  <p className="mb-0 text-muted">
                    Leveraging the latest frameworks and tools
                  </p>
                </div>
              </div>

              <div className="d-flex align-items-center">
                <div className="bg-primary rounded-circle text-white p-3 me-3">
                  <i className="bi bi-graph-up"></i>
                </div>
                <div>
                  <h5 className="mb-1">Measurable Results</h5>
                  <p className="mb-0 text-muted">
                    Solutions that drive business growth
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Project Slider */}
          <div className="col-lg-7">
            <div className="project-slider-container shadow rounded overflow-hidden">
              <Slider {...settings}>
                {projects.map((project) => (
                  <div
                    key={project.id}
                    className="project-slide position-relative"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="img-fluid w-full"
                      style={{ objectFit: "contain", height: "400px" }}
                    />
                    <div className="project-info position-absolute bottom-0 start-0 w-full p-4 bg-dark bg-opacity-75 text-white">
                      <h4 className="mb-1 text-white">{project.title}</h4>
                      <p className="mb-0">{project.description}</p>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>

            <div className="mt-4 d-flex justify-content-between align-items-center">
              <div>
                <span className="text-primary fw-bold me-2">100+</span>
                <span className="text-dark">Projects Completed</span>
              </div>
              <div>
                <span className="text-primary fw-bold me-2">95%</span>
                <span className="text-dark">Client Satisfaction</span>
              </div>
              <div>
                <span className="text-primary fw-bold me-2">24/7</span>
                <span className="text-dark">Support Available</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
