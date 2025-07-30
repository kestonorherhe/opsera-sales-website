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

      {/* <section className="pt-0">
        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-lg-6 position-relative">
              <img
                src="assets/images/about/14.jpg"
                className="rounded"
                alt="about-img"
              />
            </div>
            <div className="col-lg-6 ps-md-5">
              <h2 className="mb-4">
                Boost your business efficiency with Mizzle.
              </h2>
              <p className="mb-0">
                Elevate your online presence and embark on a journey to digital
                excellence with our meticulously designed digital agency theme.
              </p>

              <hr className="my-4" />
              <p>
                At the heart of our theme is a commitment to providing a robust
                and versatile platform that accommodates the diverse needs of
                digital agencies.
              </p>

              <div className="row row-cols-1 row-cols-sm-2">
                <div className="col">
                  <ul className="list-group list-group-borderless mb-0">
                    <li className="list-group-item d-flex">
                      <i className="bi bi-patch-check-fill text-primary me-2"></i>
                      Strategic Call-to-Actions
                    </li>
                    <li className="list-group-item d-flex">
                      <i className="bi bi-patch-check-fill text-primary me-2"></i>
                      Content-Rich Sections
                    </li>
                    <li className="list-group-item d-flex">
                      <i className="bi bi-patch-check-fill text-primary me-2"></i>
                      Social Media Integration
                    </li>
                    <li className="list-group-item d-flex">
                      <i className="bi bi-patch-check-fill text-primary me-2"></i>
                      Easy-to-Use Contact Forms
                    </li>
                  </ul>
                </div>
                <div className="col">
                  <ul className="list-group list-group-borderless mb-0">
                    <li className="list-group-item d-flex">
                      <i className="bi bi-patch-check-fill text-primary me-2"></i>
                      Performance Analytics
                    </li>
                    <li className="list-group-item d-flex">
                      <i className="bi bi-patch-check-fill text-primary me-2"></i>
                      Fast Loading Speed
                    </li>
                    <li className="list-group-item d-flex">
                      <i className="bi bi-patch-check-fill text-primary me-2"></i>
                      Tested on Major Browsers
                    </li>
                  </ul>
                </div>
              </div>

              <div className="text-center d-inline-block bg-dark rounded px-5 py-3 mt-4 mt-lg-5">
                <span className="text-white">Work with us?</span>{" "}
                <a className="ms-2" href="/contact">
                  Contact us now
                  <span className="bi-chevron-right small ms-1"></span>
                </a>
              </div>
            </div>
          </div>

          <div className="row g-4 mt-5">
            <h3 className="mb-4 text-center">Culture & Values</h3>
            <div className="col-sm-6 col-lg-4">
              <div className="card card-body bg-transparent p-0">
                <figure className="text-primary mb-3 flex-shrink-0">
                  <svg
                    width="50"
                    height="50"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.36646 21.5H15.6485C15.9713 21.5 16.1327 21.5 16.269 21.4901C18.1249 21.3547 19.6008 19.8788 19.7362 18.0228C19.7462 17.8866 19.7462 17.7252 19.7462 17.4023C20.8592 17.3842 21.752 16.4767 21.752 15.3636V13.1074C21.752 11.9996 20.8539 11.1016 19.7462 11.1016C19.7462 10.7751 19.7462 10.6119 19.736 10.4741C19.5993 8.62062 18.1255 7.14688 16.272 7.01016C16.1343 7 15.9711 7 15.6446 7H12.625V5.5C13.2463 5.5 13.75 4.99632 13.75 4.375V3.875C13.75 2.97754 13.0225 2.25 12.125 2.25H11.875C10.9775 2.25 10.25 2.97754 10.25 3.875V4.37891C10.25 4.99807 10.7519 5.5 11.3711 5.5V7H8.37037C8.04391 7 7.88069 7 7.74294 7.01016C5.88942 7.14688 4.41569 8.62062 4.27897 10.4741C4.26881 10.6119 4.26881 10.7751 4.26881 11.1016C3.15385 11.1016 2.25 12.0054 2.25 13.1204V15.3835C2.25 16.4985 3.15385 17.4023 4.26881 17.4023C4.26881 17.7252 4.26881 17.8866 4.27874 18.0228C4.41412 19.8788 5.89005 21.3547 7.746 21.4901C7.88222 21.5 8.04364 21.5 8.36646 21.5Z"
                      fill="currentColor"
                      fill-opacity="0.25"
                    />
                    <path
                      d="M15 16.75H9M14.25 11.75V11.75C14.6642 11.75 15 12.0858 15 12.5V12.5C15 12.9142 14.6642 13.25 14.25 13.25V13.25C13.8358 13.25 13.5 12.9142 13.5 12.5V12.5C13.5 12.0858 13.8358 11.75 14.25 11.75ZM9.75 11.75V11.75C10.1642 11.75 10.5 12.0858 10.5 12.5V12.5C10.5 12.9142 10.1642 13.25 9.75 13.25V13.25C9.33579 13.25 9 12.9142 9 12.5V12.5C9 12.0858 9.33579 11.75 9.75 11.75Z"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </figure>
                <h6>Best Quality Systems</h6>
                <p className="mb-0">
                  Softnet is committed on delivering high-tech qulaity solutions
                  to her numerous customers. We offer Responsive, Scalable and
                  Reliable solutions.
                </p>
              </div>
            </div>

            <div className="col-sm-6 col-lg-4">
              <div className="card card-body bg-transparent p-0">
                <figure className="text-primary mb-3 flex-shrink-0">
                  <svg
                    width="50"
                    height="50"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.5 18.55C8.5 18.27 8.5 18.13 8.5545 18.023C8.60243 17.9289 8.67892 17.8524 8.773 17.8045C8.87996 17.75 9.01997 17.75 9.3 17.75H14.7C14.98 17.75 15.12 17.75 15.227 17.8045C15.3211 17.8524 15.3976 17.9289 15.4455 18.023C15.5 18.13 15.5 18.27 15.5 18.55C15.5 19.6701 15.5 20.2302 15.282 20.658C15.0903 21.0343 14.7843 21.3403 14.408 21.532C13.9802 21.75 13.4201 21.75 12.3 21.75H11.7C10.5799 21.75 10.0198 21.75 9.59202 21.532C9.21569 21.3403 8.90973 21.0343 8.71799 20.658C8.5 20.2302 8.5 19.6701 8.5 18.55Z"
                      fill="currentColor"
                    />
                    <path
                      d="M9.14722 16.75H14.8528C14.999 16.75 15.0721 16.75 15.1322 16.7348C15.3106 16.6899 15.4499 16.5506 15.4948 16.3722C15.51 16.3121 15.51 16.239 15.51 16.0928V15.7267C15.51 15.3829 15.6239 15.0488 15.834 14.7766L17.2527 12.938C20.6184 8.57623 17.5093 2.25 12 2.25C6.49069 2.25 3.38158 8.57623 6.74727 12.938L8.16605 14.7766C8.37608 15.0488 8.49 15.3829 8.49 15.7267V16.0928C8.49 16.239 8.49 16.3121 8.50517 16.3722C8.55014 16.5506 8.68941 16.6899 8.86777 16.7348C8.92795 16.75 9.00104 16.75 9.14722 16.75Z"
                      fill="currentColor"
                      fill-opacity="0.25"
                    />
                    <path
                      d="M10.5 11.5L12 14L13.5 11.5"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </figure>
                <h6>We offer Robust Systems</h6>
                <p className="mb-0">
                  Our Customers worry less on technology reliability because
                  Softnet is involved. We go extra mile to ensure optimum
                  service/solution provisions.
                </p>
              </div>
            </div>

            <div className="col-sm-6 col-lg-4">
              <div className="card card-body bg-transparent p-0">
                <figure className="text-primary mb-3 flex-shrink-0">
                  <svg
                    width="50"
                    height="50"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.0508 20.9081L16.9676 19.7107C18.3713 19.1344 19.0731 18.8463 19.5819 18.3633C19.9838 17.9818 20.2961 17.5159 20.4964 16.9993C20.75 16.3452 20.75 15.5865 20.75 14.0692C20.75 13.8719 20.75 13.7733 20.707 13.7098C20.6734 13.6603 20.6232 13.6244 20.5655 13.6087C20.4915 13.5886 20.3982 13.6206 20.2116 13.6846L12.5838 16.2998C12.327 16.3879 12.1986 16.4319 12.066 16.4407C12.0221 16.4436 11.9779 16.4436 11.934 16.4407C11.8014 16.4319 11.673 16.3879 11.4162 16.2998L3.78841 13.6846C3.60183 13.6206 3.50854 13.5886 3.43453 13.6087C3.37677 13.6244 3.32656 13.6603 3.293 13.7098C3.25 13.7733 3.25 13.8719 3.25 14.0692C3.25 15.5865 3.25 16.3452 3.50359 16.9993C3.70391 17.5159 4.01625 17.9818 4.41813 18.3633C4.9269 18.8463 5.62873 19.1344 7.03239 19.7107L7.03239 19.7107L9.94924 20.9081C10.8475 21.2769 11.2967 21.4613 11.7665 21.4979C11.9219 21.5101 12.0781 21.5101 12.2335 21.4979C12.7033 21.4613 13.1525 21.2769 14.0508 20.9081L14.0508 20.9081Z"
                      fill="currentColor"
                      fill-opacity="0.25"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M9.25035 5C9.25035 3.48122 10.4816 2.25 12.0003 2.25C13.5191 2.25 14.7503 3.48122 14.7503 5C14.7503 6.25878 13.9046 7.32002 12.7503 7.64648V8.24568L19.3266 10.8794C20.1324 11.2021 20.5353 11.3635 20.594 11.6181C20.6121 11.6967 20.611 11.7785 20.5907 11.8565C20.5248 12.1094 20.1176 12.2594 19.3031 12.5594L12.3115 15.1351C12.1748 15.1854 12.1065 15.2106 12.0356 15.2156C12.0121 15.2172 11.9886 15.2172 11.9651 15.2156C11.8942 15.2106 11.8259 15.1854 11.6892 15.1351L4.6976 12.5594C3.88311 12.2594 3.47586 12.1094 3.41002 11.8565C3.38969 11.7785 3.38855 11.6967 3.40668 11.6181C3.46543 11.3635 3.86832 11.2021 4.6741 10.8794L11.2503 8.24568V7.64648C10.0961 7.32002 9.25035 6.25878 9.25035 5Z"
                      fill="currentColor"
                    />
                  </svg>
                </figure>
                <h6>Easy to Integrate</h6>
                <p className="mb-0">
                  All our solutions are easy to integrate. Customize and adapt
                  in any environment just plug and play.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

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
