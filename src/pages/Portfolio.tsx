import React from "react";
import TestimonialsSection from "../components/Testimonial";

function Portfolio() {
  return (
    <main>
      <section
        className="py-8 py-sm-9 position-relative"
        style={{
          background: "url(assets/images/bg/05.jpg) no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="bg-overlay bg-dark opacity-7"></div>

        <div className="container position-relative z-index-1">
          <div className="row g-4 g-xxl-5">
            <div className="col-lg-8 text-center mx-auto">
              <div className="d-flex justify-content-center position-relative mb-2">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb breadcrumb-dots breadcrumb-dark pb-0 mb-0">
                    <li className="breadcrumb-item">
                      <a href="#">Home</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Projects
                    </li>
                  </ol>
                </nav>
              </div>
              <h1 className="mb-0 text-white">Our Projects</h1>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-lg-8">
        <div className="container pt-4 pt-lg-0">
          <div className="card card-img-scale bg-transparent overflow-hidden mb-6 mb-xl-8">
            <div className="row g-xl-6 align-items-center">
              <div className="col-lg-6">
                <div className="card-img-scale-wrapper rounded-2 h-100">
                  <img
                    src="../../assets/images/fera.png"
                    className="img-scale"
                    alt="portfolio-img"
                  />
                </div>
              </div>

              <div className="col-lg-6">
                <div className="card-body h-100 px-0 p-xl-5">
                  {/* <img
                    src="assets/images/client/04.svg"
                    className="h-30px mb-3 mb-lg-4"
                    alt="Client-img"
                  /> */}
                  <h4 className="card-title">FERA</h4>
                  <p className="card-text mb-3 mb-lg-4">
                    A government sponsored project that provides skilled courses
                    to students in Nigerian tertiary institutions
                  </p>
                  {/* <div className="d-flex gap-2 gap-sm-3 gap-lg-1 flex-lg-column flex-wrap mb-3 mb-lg-4">
                    <div>
                      <i className="fa-solid fa-circle fa-2xs text-primary me-2"></i>
                      2022
                    </div>
                    <span>Branding</span>
                    <span>Packaging</span>
                    <span>UI/UX design</span>
                  </div> */}
                  <a
                    href="https://www.fera.com.ng/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-primary-hover stretched-link heading-color mb-0"
                  >
                    View
                    <i className="fa-solid fa-arrow-right-long fa-fw ms-2"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="card card-img-scale bg-transparent overflow-hidden mb-6 mb-xl-8">
            <div className="row g-xl-6 align-items-center">
              <div className="col-lg-6 order-2">
                <div className="card-body text-lg-end h-100 px-0 p-xl-5">
                  {/* <img
                    src="assets/images/client/02.svg"
                    className="h-30px mb-3 mb-lg-4"
                    alt="Client-img"
                  /> */}
                  <h4 className="card-title">STA</h4>
                  <p className="card-text mb-3 mb-lg-4">
                    Your Gateway to Tech Mastery and Career Advancement. Whether
                    you're looking to start a new career, upskill, or advance
                    your team's knowledge, STA provides expert-led training
                    programs designed to meet the demands of today's tech-driven
                    world.
                  </p>
                  {/* <div className="d-flex justify-content-lg-end gap-2 gap-sm-3 gap-lg-1 flex-lg-column flex-wrap mb-3 mb-lg-4">
                    <div>
                      <i className="fa-solid fa-circle fa-2xs text-primary me-2"></i>
                      2021
                    </div>
                    <span>Branding</span>
                    <span>Packaging</span>
                    <span>UI/UX design</span>
                  </div> */}
                  <a
                    href="https://www.sta.com.ng/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-primary-hover stretched-link heading-color mb-0"
                  >
                    View
                    <i className="fa-solid fa-arrow-right-long fa-fw ms-2"></i>
                  </a>
                </div>
              </div>

              <div className="col-lg-6 order-1 order-lg-2">
                <div className="card-img-scale-wrapper rounded-2 overflow-hidden h-100">
                  <img
                    src="../../assets/images/sta.png"
                    className="img-scale"
                    alt="portfolio-img"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="card card-img-scale bg-transparent overflow-hidden mb-6 mb-xl-8">
            <div className="row g-xl-6 align-items-center">
              <div className="col-lg-6">
                <div className="card-img-scale-wrapper rounded-2 h-100">
                  <img
                    src="../../assets/images/shoplife.png"
                    className="img-scale"
                    alt="portfolio-img"
                  />
                </div>
              </div>

              <div className="col-lg-6">
                <div className="card-body h-100 px-0 p-xl-5">
                  {/* <img
                    src="assets/images/client/04.svg"
                    className="h-30px mb-3 mb-lg-4"
                    alt="Client-img"
                  /> */}
                  <h4 className="card-title">Shoplife</h4>
                  <p className="card-text mb-3 mb-lg-4">
                    An agric e-commerce platform that simplifies agricultural
                    trade by offering a wide range of agric products especially
                    cash crop sales in large quantity. Your trusted partner for
                    bulk supply of agricultural produce globally
                  </p>
                  {/* <div className="d-flex gap-2 gap-sm-3 gap-lg-1 flex-lg-column flex-wrap mb-3 mb-lg-4">
                    <div>
                      <i className="fa-solid fa-circle fa-2xs text-primary me-2"></i>
                      2022
                    </div>
                    <span>Branding</span>
                    <span>Packaging</span>
                    <span>UI/UX design</span>
                  </div> */}
                  <a
                    href="https://www.shoplife.ng/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-primary-hover stretched-link heading-color mb-0"
                  >
                    View
                    <i className="fa-solid fa-arrow-right-long fa-fw ms-2"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="card card-img-scale bg-transparent overflow-hidden mb-6 mb-xl-8">
            <div className="row g-xl-6 align-items-center">
              <div className="col-lg-6 order-2">
                <div className="card-body text-lg-end h-100 px-0 p-xl-5">
                  {/* <img
                    src="assets/images/client/02.svg"
                    className="h-30px mb-3 mb-lg-4"
                    alt="Client-img"
                  /> */}
                  <h4 className="card-title">IRS</h4>
                  <p className="card-text mb-3 mb-lg-4">
                    A revenue generation solution designed to streamline and
                    automate the processes involved in collecting, managing and
                    reporting public revenues. It supports various government
                    agencies, like internal revenue services, in enforcing
                    compliance, enhancing transparency and improving efficiency
                    in revenue administration.
                  </p>
                  {/* <div className="d-flex justify-content-lg-end gap-2 gap-sm-3 gap-lg-1 flex-lg-column flex-wrap mb-3 mb-lg-4">
                    <div>
                      <i className="fa-solid fa-circle fa-2xs text-primary me-2"></i>
                      2021
                    </div>
                    <span>Branding</span>
                    <span>Packaging</span>
                    <span>UI/UX design</span>
                  </div> */}
                  <a
                    href="https://birs.be.gov.ng/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-primary-hover stretched-link heading-color mb-0"
                  >
                    View
                    <i className="fa-solid fa-arrow-right-long fa-fw ms-2"></i>
                  </a>
                </div>
              </div>

              <div className="col-lg-6 order-1 order-lg-2">
                <div className="card-img-scale-wrapper rounded-2 overflow-hidden h-100">
                  <img
                    src="../../assets/images/birs.png"
                    className="img-scale"
                    alt="portfolio-img"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="card card-img-scale bg-transparent overflow-hidden mb-6 mb-xl-8">
            <div className="row g-xl-6 align-items-center">
              <div className="col-lg-6">
                <div className="card-img-scale-wrapper rounded-2 h-100">
                  <img
                    src="../../assets/images/soft-pay.png"
                    className="img-scale"
                    alt="portfolio-img"
                  />
                </div>
              </div>

              <div className="col-lg-6">
                <div className="card-body h-100 px-0 p-xl-5">
                  <h4 className="card-title">SoftnetPay</h4>
                  <p className="card-text mb-3 mb-lg-4">
                    SoftNet Pay is a comprehensive payroll and human resource
                    management system designed for both corporate and public
                    organizations. It allows users to manage employee details,
                    salary information, and process payments efficiently. The
                    platform integrates with payment service providers such as
                    Interswitch, NIBSS etc to facilitate seamless salary
                    payments. It features real-time salary configuration, report
                    generation and the ability to prepare payment schedules
                    offline for later upload. The system offers a secure,
                    credible and scalable solution capable of handling large
                    data volumes with fast processing. Overall, SoftNet Pay
                    ensures transparent, streamlined payroll operations with
                    flexible management options.
                  </p>
                  {/* <div className="d-flex gap-2 gap-sm-3 gap-lg-1 flex-lg-column flex-wrap mb-3 mb-lg-4">
                    <div>
                      <i className="fa-solid fa-circle fa-2xs text-primary me-2"></i>
                      2022
                    </div>
                    <span>Branding</span>
                    <span>Packaging</span>
                    <span>UI/UX design</span>
                  </div> */}
                  <a
                    href="https://softnetpay.ng/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-primary-hover stretched-link heading-color mb-0"
                  >
                    View
                    <i className="fa-solid fa-arrow-right-long fa-fw ms-2"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <TestimonialsSection /> */}
    </main>
  );
}

export default Portfolio;
