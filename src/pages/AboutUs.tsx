import React from "react";
import IndustriesServed from "../components/IndustriesSection";

function AboutUs() {
  return (
    <main>
      <section
        className="bg-dark pt-sm-8 pb-9 text-white position-relative"
        data-bs-theme="dark"
        style={{
          backgroundImage: "url(assets/images/tech-services.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            zIndex: 1,
          }}
        />

        {/* Content */}
        <div
          className="container pt-4 pt-sm-0 position-relative"
          style={{ zIndex: 2 }}
        >
          <div className="row g-4 g-xxl-5">
            <div className="col-lg-8">
              <h1 className="mb-0 lh-base">
                Driving Automation & Revenue Growth Since 2009
              </h1>
              <p className="mb-0 mt-4">
                Softnet has been in the automation of businesses and processes
                since 2009. We have generated revenues for both state and
                federal governments in different automation projects. We are
                committed in offering high-tech solutions to our customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          {/* <!-- Core Values --> */}
          <div className="row mt-5 mb-5">
            <div className="col-12 text-center">
              <h3>Our Core Values</h3>
              <p>
                The principles that guide every decision we make and every
                project we undertake
              </p>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="card card-body bg-transparent p-4 text-center">
                <figure className="text-primary mx-auto mb-3 flex-shrink-0">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                      fill="currentColor"
                      fill-opacity="0.25"
                    />
                    <path
                      d="M9 13.25V10.75L12 9L15 10.75V13.25L12 15L9 13.25Z"
                      fill="currentColor"
                    />
                  </svg>
                </figure>
                <h6>Integrity</h6>
                <p className="mb-0">
                  Committed to integrity, ethics, transparency, and
                  accountability in all dealings
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="card card-body bg-transparent p-4 text-center">
                <figure className="text-primary mx-auto mb-3 flex-shrink-0">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.5 8.25L12 15.75L4.5 8.25"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </figure>
                <h6>Accountability</h6>
                <p className="mb-0">
                  We act with integrity, own our actions, and deliver
                  excellence.
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="card card-body bg-transparent p-4 text-center">
                <figure className="text-primary mx-auto mb-3 flex-shrink-0">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2.25C10.0716 2.25 8.18657 2.82183 6.58319 3.89317C4.97982 4.96451 3.73013 6.48726 2.99218 8.26884C2.25422 10.0504 2.06114 12.0108 2.43735 13.9021C2.81355 15.7934 3.74215 17.5307 5.10571 18.8943C6.46928 20.2579 8.20656 21.1865 10.0979 21.5627C11.9892 21.9389 13.9496 21.7458 15.7312 21.0078C17.5127 20.2699 19.0355 19.0202 20.1068 17.4168C21.1782 15.8134 21.75 13.9284 21.75 12C21.75 9.41414 20.7228 6.93419 18.8943 5.10571C17.0658 3.27723 14.5858 2.25 12 2.25Z"
                      fill="currentColor"
                      fill-opacity="0.25"
                    />
                    <path
                      d="M15.5 9L10.9991 14L8.5 11.5"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </figure>
                <h6>Innovation</h6>
                <p className="mb-0">
                  We embrace creativity and continuously explore new ideas and
                  technologies
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="card card-body bg-transparent p-4 text-center">
                <figure className="text-primary mx-auto mb-3 flex-shrink-0">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 18V17C7 14.2386 9.23858 12 12 12V12C14.7614 12 17 14.2386 17 17V18"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M12 12C13.6569 12 15 10.6569 15 9C15 7.34315 13.6569 6 12 6C10.3431 6 9 7.34315 9 9C9 10.6569 10.3431 12 12 12Z"
                      fill="currentColor"
                      fill-opacity="0.25"
                    />
                    <path
                      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                      stroke="currentColor"
                      stroke-width="1.5"
                    />
                  </svg>
                </figure>
                <h6>Leadership</h6>
                <p className="mb-0">
                  Inspiring leadership through action, vision, and guiding
                  shared success.
                </p>
              </div>
            </div>
          </div>

          <div className="row g-4 g-xl-5">
            {/* <!-- Vision Column --> */}
            <div className="col-lg-6">
              <div className="card bg-primary bg-opacity-10 h-100 border-0 p-4 p-md-5">
                <figure className="text-primary mb-4 flex-shrink-0">
                  <svg
                    width="60"
                    height="60"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 18.75C16.1421 18.75 19.5 15.3921 19.5 11.25C19.5 7.10786 16.1421 3.75 12 3.75C7.85786 3.75 4.5 7.10786 4.5 11.25C4.5 15.3921 7.85786 18.75 12 18.75Z"
                      fill="currentColor"
                      fill-opacity="0.25"
                    />
                    <path
                      d="M12 15C14.0711 15 15.75 13.3211 15.75 11.25C15.75 9.17893 14.0711 7.5 12 7.5C9.92893 7.5 8.25 9.17893 8.25 11.25C8.25 13.3211 9.92893 15 12 15Z"
                      fill="currentColor"
                    />
                    <path
                      d="M4.68 20.25L12 21L19.32 20.25"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </figure>
                <h3 className="mb-4 text-white">Our Vision</h3>
                <p className="mb-4 text-white">
                  To be the leading provider of cutting-edge ICT solutions,
                  recognized for our exceptional customer-centric approach,
                  technical expertise, and commitment to driving technological
                  advancements for a connected and empowered world.
                </p>
              </div>
            </div>

            {/* <!-- Mission Column --> */}
            <div className="col-lg-6">
              <div className="card bg-dark text-white h-100 border-0 p-4 p-md-5">
                <figure className="text-primary mb-4 flex-shrink-0">
                  <svg
                    width="60"
                    height="60"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21.15 5H15.15C14.7858 5 14.5 5.28579 14.5 5.65V7.35C14.5 7.71421 14.7858 8 15.15 8H21.15C21.5142 8 21.8 7.71421 21.8 7.35V5.65C21.8 5.28579 21.5142 5 21.15 5Z"
                      fill="currentColor"
                    />
                    <path
                      d="M8.65 16H2.65C2.28579 16 2 16.2858 2 16.65V18.35C2 18.7142 2.28579 19 2.65 19H8.65C9.01421 19 9.3 18.7142 9.3 18.35V16.65C9.3 16.2858 9.01421 16 8.65 16Z"
                      fill="currentColor"
                    />
                    <path
                      d="M2.41667 7.1139L3.83085 5.69971L7.1139 8.98276L5.69971 10.3969L2.41667 7.1139Z"
                      fill="currentColor"
                      fill-opacity="0.25"
                    />
                    <path
                      d="M16.9861 13.6031L18.4003 12.1889L21.6833 15.4719L20.2691 16.8861L16.9861 13.6031Z"
                      fill="currentColor"
                      fill-opacity="0.25"
                    />
                    <path
                      d="M9.65 2.5C9.65 2.22386 9.42614 2 9.15 2H7.45C7.17386 2 6.95 2.22386 6.95 2.5V6.5C6.95 6.77614 7.17386 7 7.45 7H9.15C9.42614 7 9.65 6.77614 9.65 6.5V2.5Z"
                      fill="currentColor"
                      fill-opacity="0.25"
                    />
                    <path
                      d="M16.95 17.5C16.95 17.2239 16.7261 17 16.45 17H14.75C14.4739 17 14.25 17.2239 14.25 17.5V21.5C14.25 21.7761 14.4739 22 14.75 22H16.45C16.7261 22 16.95 21.7761 16.95 21.5V17.5Z"
                      fill="currentColor"
                      fill-opacity="0.25"
                    />
                  </svg>
                </figure>
                <h3 className="mb-4 text-white">Our Mission</h3>
                <p className="mb-4">
                  To empower businesses and individuals through innovative and
                  reliable information and communication technology solutions,
                  enabling seamless connectivity, enhanced productivity, and
                  digital transformation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-0">
        <div className="container">
          <div className="inner-container-small text-center mb-4 mb-sm-6">
            <h2>A squad of talented members</h2>
            <p className="mb-0">
              We are a close-knit squad of exceptionally talented individuals
              who are passionate about all things digital.
            </p>
          </div>

          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-5 g-4 justify-content-center">
            <div className="col">
              <div className="card card-body card-hover-shadow bg-transparent text-center p-4">
                <div className="avatar avatar-xxl mx-auto flex-shrink-0 mb-3">
                  <img
                    className="avatar-img rounded-circle"
                    src="assets/images/MRPATRICK.jpg"
                    alt="avatar"
                  />
                </div>

                <h6 className="mb-1">
                  <a href="#">Patrick Chidalu</a>
                </h6>
                <small>MD/CEO</small>

                {/* <ul className="list-inline mb-0 mt-3">
                  <li className="list-inline-item">
                    {" "}
                    <a className="btn btn-xs btn-icon btn-light" href="#">
                      <i className="fab fa-fw fa-facebook-f lh-base"></i>
                    </a>{" "}
                  </li>
                  <li className="list-inline-item">
                    {" "}
                    <a className="btn btn-xs btn-icon btn-light" href="#">
                      <i className="fab fa-fw fa-instagram lh-base"></i>
                    </a>{" "}
                  </li>
                  <li className="list-inline-item">
                    {" "}
                    <a className="btn btn-xs btn-icon btn-light" href="#">
                      <i className="fab fa-fw fa-twitter lh-base"></i>
                    </a>{" "}
                  </li>
                </ul> */}
              </div>
            </div>

            <div className="col">
              <div className="card card-body card-hover-shadow bg-transparent text-center p-4">
                <div className="avatar avatar-xxl mx-auto flex-shrink-0 mb-3">
                  <img
                    className="avatar-img rounded-circle"
                    src="assets/images/debbie.jpg"
                    alt="avatar"
                  />
                </div>

                <h6 className="mb-1">
                  <a href="#">Deborah Kalu</a>
                </h6>
                {/* <small>Human Resources Manager</small> */}
                <small>Finance Manager</small>

                {/* <ul className="list-inline mb-0 mt-3">
                  <li className="list-inline-item">
                    {" "}
                    <a className="btn btn-xs btn-icon btn-light" href="#">
                      <i className="fab fa-fw fa-facebook-f lh-base"></i>
                    </a>{" "}
                  </li>
                  <li className="list-inline-item">
                    {" "}
                    <a className="btn btn-xs btn-icon btn-light" href="#">
                      <i className="fab fa-fw fa-instagram lh-base"></i>
                    </a>{" "}
                  </li>
                  <li className="list-inline-item">
                    {" "}
                    <a className="btn btn-xs btn-icon btn-light" href="#">
                      <i className="fab fa-fw fa-twitter lh-base"></i>
                    </a>{" "}
                  </li>
                </ul> */}
              </div>
            </div>

            <div className="col">
              <div className="card card-body card-hover-shadow bg-transparent text-center p-4">
                <div className="avatar avatar-xxl mx-auto flex-shrink-0 mb-3">
                  <img
                    className="avatar-img rounded-circle"
                    src="assets/images/chisom.jpg"
                    alt="avatar"
                  />
                </div>

                <h6 className="mb-1">
                  <a href="#">Chisom Amalu</a>
                </h6>
                <small>Engineering Team Lead</small>

                {/* <ul className="list-inline mb-0 mt-3">
                  <li className="list-inline-item">
                    {" "}
                    <a className="btn btn-xs btn-icon btn-light" href="#">
                      <i className="fab fa-fw fa-facebook-f lh-base"></i>
                    </a>{" "}
                  </li>
                  <li className="list-inline-item">
                    {" "}
                    <a className="btn btn-xs btn-icon btn-light" href="#">
                      <i className="fab fa-fw fa-instagram lh-base"></i>
                    </a>{" "}
                  </li>
                  <li className="list-inline-item">
                    {" "}
                    <a className="btn btn-xs btn-icon btn-light" href="#">
                      <i className="fab fa-fw fa-twitter lh-base"></i>
                    </a>{" "}
                  </li>
                </ul> */}
              </div>
            </div>

            <div className="col">
              <div className="card card-body card-hover-shadow bg-transparent text-center p-4">
                <div className="avatar avatar-xxl mx-auto flex-shrink-0 mb-3">
                  <img
                    className="avatar-img rounded-circle"
                    src="assets/images/keston.jpeg"
                    alt="avatar"
                  />
                </div>

                <h6 className="mb-1">
                  <a href="#">Keston Orherhe</a>
                </h6>
                <small>Team Lead - Frontend</small>
              </div>
            </div>

            <div className="col">
              <div className="card card-body card-hover-shadow bg-transparent text-center p-4">
                <div className="avatar avatar-xxl mx-auto flex-shrink-0 mb-3">
                  <img
                    className="avatar-img rounded-circle"
                    src="assets/images/BEN.jpg"
                    alt="avatar"
                  />
                </div>

                <h6 className="mb-1">
                  <a href="#">Bennett Yibawenifiri</a>
                </h6>
                <small>Backend Engineer</small>

                {/* <ul className="list-inline mb-0 mt-3">
                  <li className="list-inline-item">
                    {" "}
                    <a className="btn btn-xs btn-icon btn-light" href="#">
                      <i className="fab fa-fw fa-facebook-f lh-base"></i>
                    </a>{" "}
                  </li>
                  <li className="list-inline-item">
                    {" "}
                    <a className="btn btn-xs btn-icon btn-light" href="#">
                      <i className="fab fa-fw fa-instagram lh-base"></i>
                    </a>{" "}
                  </li>
                  <li className="list-inline-item">
                    {" "}
                    <a className="btn btn-xs btn-icon btn-light" href="#">
                      <i className="fab fa-fw fa-twitter lh-base"></i>
                    </a>{" "}
                  </li>
                </ul> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <IndustriesServed />
      {/* <TestimonialsSection /> */}
    </main>
  );
}

export default AboutUs;
