import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header3 from "../../../components/Header3";
import { useEffect } from "react";

function HotelHome() {
  useEffect(() => {
    window.location.href = '/hotel/#home'
  })
  const sliderSettings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const sliderSettings2 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <main>
      {/* <Header2 /> */}
      <Header3 productLogo='../assets/images/logos/buildsync-logo.png' subNavMenuItems={[{ link: 'hotel/#home', label: 'Home' }, { link: 'hotel/#features', label: 'Features' }, { link: 'hotel/#benefits', label: 'Benefits' }, { link: 'hotel/#pricing', label: 'Pricing' }, { link: 'hotel/#testimonials', label: 'Testimonials' }, { link: 'hotel/#faqs', label: 'FAQs' }]} />

      <section className="pt-xl-8 pb-0">
        <div className="container pt-2 pt-sm-5">
          <div className="row g-4 g-xxl-5">
            <div className="col-xl-6">
              <h1 className="mb-0 lh-base">
                Run Your Hotel
                <span className="position-relative mx-4">
                  Smarter.
                  <span className="position-absolute top-50 start-50 translate-middle z-index-n1 ms-n2 d-none d-sm-block">
                    <svg
                      width="250"
                      height="80"
                      viewBox="0 0 182 53"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        className="fill-primary"
                        d="M3.39646 26.6791C5.18665 34.7553 18.564 38.9851 25.9087 41.4254C46.0791 47.4215 67.3652 48.7695 88.3693 49.6062C104.15 50.0478 119.955 49.7573 135.662 48.1885C149.211 46.7243 164.06 45.5158 174.924 36.9051C179.694 33.0239 179.89 27.2834 175.537 22.9954C164.011 11.8166 134.166 7.57514 117.871 4.98378C99.9319 2.36919 81.7603 3.171 63.7112 4.27494C75.4946 4.49573 87.278 5.19295 98.9755 6.57578C103.978 7.27301 109.202 8.35371 113.297 11.3053C109.484 10.457 105.535 10.4338 101.649 10.1084C74.3665 7.19166 45.6622 4.62355 19.2875 13.5713C13.5245 15.8256 2.88147 19.5442 3.39646 26.6791ZM0 25.7727C1.02997 10.1897 38.4891 5.03027 51.6213 4.43763C49.4878 4.29818 47.3543 4.07739 45.233 3.78688C48.7766 2.79915 52.3938 2.04382 56.06 1.60224C63.466 0.939879 70.9088 0.753952 78.327 0.323997C91.0913 -0.349987 103.88 0.0102456 116.571 1.56738C132.45 4.10063 191.085 11.3983 180.797 34.918C178.664 38.8573 174.642 41.4603 170.645 43.5403C160.86 48.6068 149.591 49.8618 138.691 51.1285C122.42 52.7902 106.063 53.3131 89.7058 52.825C65.575 51.907 40.8311 50.501 18.0981 42.1459C10.8025 39.1943 0.122616 34.3834 0 25.7727Z"
                      />
                    </svg>
                  </span>
                </span>
                Faster. More Profitably.
              </h1>

              <p className="mb-0 mt-4 mt-xl-5">
                OpseraHotel is an all-in-one Hotel Management System that unifies operations, staff, guests, finances, maintenance, restaurant, and bar — all in one platform.
              </p>

              <div className="d-flex gap-1 gap-sm-3 flex-wrap mt-4 mt-xl-5">
                <button className="btn btn-dark" type="button">
                  Request a Demo
                </button>
                <button className="btn btn-outline-dark" type="button">
                  Start a 14 days free trial
                </button>
              </div>

              <ul className="list-inline d-flex flex-wrap gap-2 gap-sm-4 mb-0 mt-4 mt-xl-5">
                <li className="list-inline-item heading-color">
                  {" "}
                  <i className="bi bi-stopwatch me-1"></i>24/7 Supports
                </li>
                <li className="list-inline-item heading-color">
                  {" "}
                  <i className="bi bi-fire me-1"></i>Free updates
                </li>
                <li className="list-inline-item heading-color">
                  {" "}
                  <i className="bi bi-life-preserver me-1"></i>Access premium
                  doc
                </li>
              </ul>
            </div>

            {/* <div className="col-xl-6 text-center" style={{ alignItems: 'center' }}>
              <img
                src="../assets/images/bg/hotel-hero-img.png"
                style={{ width: '100%', alignContent: "center" }}
                alt="hero-img"
              />
            </div> */}
            <div
              className="col-xl-6 text-center"
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              <img
                src="../assets/images/bg/hotel-hero-img.png"
                style={{ width: '100%' }}
                alt="hero-img"
              />
            </div>
          </div>

          <hr className="border-primary opacity-2 mt-sm-7 my-5" />

          <div className="row">
            <div className="col-md-6 col-xl-7 mb-5 mb-md-0">
              <p className="mb-0">
                <i className="bi bi-shield-check"></i> | We believe in going
                above and beyond to exceed. We reached{" "}
                <b className="text-primary fs-6">19k</b>
              </p>

              <div className="align-items-center py-4">
                <Slider {...sliderSettings}>
                  <div className="swiper-slide d-flex justify-content-center">
                    <img
                      src="../assets/images/client/01.svg"
                      className="px-3 ps-0"
                      style={{ width: "250px" }}
                      alt="client-img"
                    />
                  </div>
                  <div className="swiper-slide d-flex justify-content-center">
                    <img
                      src="../assets/images/client/02.svg"
                      className="px-3"
                      style={{ width: "250px" }}
                      alt="client-img"
                    />
                  </div>
                  <div className="swiper-slide d-flex justify-content-center">
                    <img
                      src="../assets/images/client/03.svg"
                      className="px-3"
                      style={{ width: "250px" }}
                      alt="client-img"
                    />
                  </div>
                  <div className="swiper-slide d-flex justify-content-center">
                    <img
                      src="../assets/images/client/04.svg"
                      className="px-3"
                      style={{ width: "250px" }}
                      alt="client-img"
                    />
                  </div>
                </Slider>
              </div>
            </div>

            <div className="col-md-6 col-lg-5 col-xl-3 ms-auto text-md-end">
              <p className="mb-0 me-2">
                Trusted by Customers{" "}
                <span className="badge bg-dark">Active</span>
              </p>

              <div className="d-flex justify-content-md-end mt-2 mt-md-4">
                <div>
                  <div className="d-flex justify-content-md-end">
                    <h4
                      className="purecounter mb-0"
                      data-purecounter-start="0"
                      data-purecounter-end="15"
                      data-purecounter-delay="300"
                    >
                      0
                    </h4>
                    <span className="h4 mb-0">k+</span>
                  </div>
                  <p className="mb-0">Active users</p>
                </div>

                <div className="vr mx-3 mx-sm-4"></div>

                <div>
                  <div className="d-flex justify-content-md-end">
                    <h4
                      className="purecounter mb-0"
                      data-purecounter-start="0"
                      data-purecounter-end="56"
                      data-purecounter-delay="300"
                    >
                      0
                    </h4>
                    <span className="h4 mb-0">+</span>
                  </div>
                  <p className="mb-0">Completed projects</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="overflow-hidden pb-0">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 text-center position-relative mb-5 mb-lg-0">
              <div className="pe-lg-6 pe-xl-8">
                <img
                  src="../assets/images/opsera-stay/opsera-stay-problem-statement.png"
                  style={{ height: '100%' }}
                  className="rounded"
                  alt=""
                />
              </div>
            </div>

            <div className="col-lg-6 ms-auto">
              <h2 className="mb-lg-4">The Problem Most Hotels Face</h2>
              <p className="mb-lg-4">
                Hotel operations are fast-moving and interconnected. Yet many hotels still rely on manual processes or fragmented systems. This leads to;
              </p>
              {/* <hr className="my-4 my-lg-5" /> */}

              <ul className="list-group list-group-borderless">
                <li className="list-group-item heading-color fw-normal d-flex mb-0">
                  <i className="bi bi-patch-check text-primary me-2"></i>
                  Disconnected booking, accounting, and inventory systems
                </li>
                <li className="list-group-item heading-color fw-normal d-flex mb-0">
                  <i className="bi bi-patch-check text-primary me-2"></i>
                  Manual staff coordination and poor accountability
                </li>
                <li className="list-group-item heading-color fw-normal d-flex mb-0">
                  <i className="bi bi-patch-check text-primary me-2"></i>
                  Reactive maintenance and high operational costs
                </li>
                <li className="list-group-item heading-color fw-normal d-flex mb-0">
                  <i className="bi bi-patch-check text-primary me-2"></i>
                  Inconsistent guest experience
                </li>
                <li className="list-group-item heading-color fw-normal d-flex mb-0">
                  <i className="bi bi-patch-check text-primary me-2"></i>
                  Limited visibility into real profitability
                </li>
              </ul>

              <p style={{ fontStyle: 'italic', marginTop: '1rem' }}><strong>Managing a hotel shouldn’t feel chaotic.</strong></p>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-0">
        <div className="container">
          <div className="row g-4 g-md-5">
            <div className="col-md-6 col-lg-4">
              <h2 className="mb-0">One Platform That Replaces Multiple Systems.</h2>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="card card-body border p-4 h-100">
                <h6 className="text-primary mb-4">01.</h6>
                <h5>Booking & Reservation</h5>
                <p className="mb-0">
                  Manage walk-ins, advance bookings, group reservations, and complimentary stays from a real-time dashboard that keeps your front desk efficient and organized.
                </p>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="card card-body border p-4 h-100">
                <h6 className="text-primary mb-4">02.</h6>
                <h5>Room & Housekeeping</h5>
                <p className="mb-0">
                  Control room availability, pricing, and policies while tracking housekeeping status and occupancy in real time.
                </p>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="card card-body border p-4 h-100">
                <h6 className="text-primary mb-4">03.</h6>
                <h5>Guest & Customer</h5>
                <p className="mb-0">
                  Centralize guest profiles, preferences, and stay history to deliver personalized experiences and build long-term loyalty.
                </p>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="card card-body border p-4 h-100">
                <h6 className="text-primary mb-4">04.</h6>
                <h5>Staff & Payroll</h5>
                <p className="mb-0">
                  Coordinate staff across departments, track performance, and automate payroll with attendance-based calculations.
                </p>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="card card-body border p-4 h-100">
                <h6 className="text-primary mb-4">05.</h6>
                <h5>Maintenance, Equipment & Artisan</h5>
                <p className="mb-0">
                  Track maintenance requests, manage equipment, and monitor external technicians with clear accountability and preventive scheduling.
                </p>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="card card-body border p-4 h-100">
                <h6 className="text-primary mb-4">06.</h6>
                <h5>Inventory</h5>
                <p className="mb-0">
                  Monitor supplies in real time, receive low-stock alerts, and analyze usage to reduce losses and control costs.
                </p>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="card card-body border p-4 h-100">
                <h6 className="text-primary mb-4">07.</h6>
                <h5>Restaurant & Bar</h5>
                <p className="mb-0">
                  Manage orders, menus, inventory, and expenses in one system—eliminating silos between hospitality and finance.
                </p>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="card card-body border p-4 h-100">
                <h6 className="text-primary mb-4">08.</h6>
                <h5>Financial & Revenue</h5>
                <p className="mb-0">
                  Track income, expenses, cash flow, and profitability while optimizing pricing and forecasting revenue with confidence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-5">
              <div className="card card-body bg-dark p-sm-5">
                <span className="display-5 text-white">
                  <i className="bi bi-quote"></i>
                </span>
                <p className="text-white fs-5">
                  OpseraHotel completely transformed the way we manage our hotel operations. From bookings to guest services, everything is streamlined and easy to track. The real-time insights help us reduce errors and deliver an exceptional guest experience.
                </p>

                <div className="d-sm-flex align-items-center">
                  <div className="avatar flex-shrink-0">
                    <img
                      className="avatar-img rounded-circle"
                      src="../assets/images/avatar/07.jpg"
                      alt="avatar"
                    />
                  </div>
                  <div className="ms-sm-2 mt-5 mt-sm-0">
                    {/* <h6 className="text-white mb-0">Dennis Barrett</h6> */}
                    <p className="mb-0 small text-white">
                      Grace Adeyemi, Hotel Manager
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-7 ps-lg-5">
              <h2 className="mb-4">
                Built for Every Role in Your Hotel
              </h2>

              <div className="row g-4 g-lg-5">
                <div className="col-md-6">
                  <div className="card card-body bg-transparent p-0">
                    <div className="icon-md bg-white bg-opacity-10 text-primary rounded mb-3">
                      {/* <i className="bi bi-fire fa-xl"></i> */}
                      <img src="../assets/images/opsera-stay/icons/owners.png" />
                    </div>
                    <h6 className="mb-2 text-uppercase fs-7">Owners</h6>
                    <p className="mb-0">
                      See your hotel’s performance at a glance—profit, occupancy, & growth.
                    </p>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="card card-body bg-transparent p-0">
                    <div className="icon-md bg-white bg-opacity-10 text-primary rounded mb-3">
                      {/* <i className="bi bi-truck fa-xl"></i> */}
                      <img src="../assets/images/opsera-stay/icons/managers.png" />
                    </div>
                    <h6 className="mb-2 text-uppercase">MANAGERS</h6>
                    <p className="mb-0">
                      Run daily operations smoothly and keep guests happy effortlessly.
                    </p>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="card card-body bg-transparent p-0">
                    <div className="icon-md bg-white bg-opacity-10 text-primary rounded mb-3">
                      {/* <i className="bi bi-truck fa-xl"></i> */}
                      <img src="../assets/images/opsera-stay/icons/staff.png" />
                    </div>
                    <h6 className="mb-2 text-uppercase">Staff</h6>
                    <p className="mb-0">
                      Access tasks, schedules, and guest requests quickly and efficiently.
                    </p>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="card card-body bg-transparent p-0">
                    <div className="icon-md bg-white bg-opacity-10 text-primary rounded mb-3">
                      <img src="../assets/images/opsera-stay/icons/account_officers.png" />
                    </div>
                    <h6 className="mb-2 text-uppercase">ACCOUNT officers</h6>
                    <p className="mb-0">
                      Manage billing, payroll, and financial records with ease and accuracy.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="pb-0 price-wrap">
        <div className="container">
          <div className="row g-4 g-lg-5">
            <div className="col-lg-4 text-center text-lg-start">
              <h2 className="mb-4">Pick the best plan that suits you</h2>
              <p className="mb-4">
                Two before narrow not relied how except moment myself Dejection
                assurance mrs led certainly.
              </p>

              <form className="d-flex align-items-center justify-content-center justify-content-lg-start mb-4 mb-xl-0">
                <span className="fw-semibold heading-color">Monthly</span>
                <div className="form-check form-switch form-check-md mx-2 mb-0">
                  <input
                    className="form-check-input mt-0 price-toggle"
                    type="checkbox"
                    id="flexSwitchCheckDefault"
                  />
                </div>
                <span className="fw-semibold heading-color">Yearly</span>
              </form>

              <img
                src="../assets/images/elements/pricing.svg"
                className="h-200px d-flex mx-auto ms-lg-auto"
                alt="pricing-vector"
              />
            </div>

            <div className="col-sm-6 col-lg-4">
              <div className="d-md-flex justify-content-between mb-4 mb-sm-0 ms-xl-5">
                <div className="text-center text-lg-start">
                  <div className="badge bg-primary mb-3">Boss mode</div>
                  <h6 className="mb-4">
                    {" "}
                    <span
                      className="h1 mb-0 plan-price"
                      data-monthly-price="$59"
                      data-annual-price="$45"
                    >
                      $59
                    </span>{" "}
                    /month
                  </h6>
                  <h6>Quick look at all the features</h6>

                  <ul className="list-group list-group-borderless mb-2 mb-sm-4">
                    <li className="list-group-item heading-color mb-0">
                      <i className="bi bi-check-lg text-primary me-1"></i>Up to
                      05 users monthly
                    </li>
                    <li className="list-group-item heading-color mb-0">
                      <i className="bi bi-check-lg text-primary me-1"></i>Free 5
                      host domain
                    </li>
                    <li className="list-group-item heading-color mb-0">
                      <i className="bi bi-check-lg text-primary me-1"></i>Google
                      docs style editors
                    </li>
                    <li className="list-group-item heading-color mb-0">
                      <i className="bi bi-check-lg text-primary me-1"></i>
                      Support for 30+ languages
                    </li>
                    <li className="list-group-item heading-color mb-0">
                      <i className="bi bi-check-lg text-primary me-1"></i>
                      Landing pages Web widgets
                    </li>
                    <li className="list-group-item heading-color mb-0">
                      <i className="bi bi-check-lg text-primary me-1"></i>24/7
                      dedicated Support
                    </li>
                  </ul>
                  <a href="#" className="btn btn-dark">
                    Start a free 7-day trial
                  </a>
                </div>
                <div className="vr opacity-1 ms-md-5 d-none d-md-block"></div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-4">
              <div className="text-center text-lg-start ms-md-5 ms-lg-0 ms-xl-5">
                <div className="badge bg-primary mb-3">Enterprise mode</div>
                <h6 className="mb-4">
                  {" "}
                  <span
                    className="h1 mb-0 plan-price"
                    data-monthly-price="$199"
                    data-annual-price="$175"
                  >
                    $199
                  </span>{" "}
                  /month
                </h6>
                <h6>Quick look at all the features</h6>

                <ul className="list-group list-group-borderless mb-2 mb-sm-4">
                  <li className="list-group-item heading-color mb-0">
                    <i className="bi bi-check-lg text-primary me-1"></i>Up to 05
                    users monthly
                  </li>
                  <li className="list-group-item heading-color mb-0">
                    <i className="bi bi-check-lg text-primary me-1"></i>Free 5
                    host domain
                  </li>
                  <li className="list-group-item heading-color mb-0">
                    <i className="bi bi-check-lg text-primary me-1"></i>Google
                    docs style editors
                  </li>
                  <li className="list-group-item heading-color mb-0">
                    <i className="bi bi-check-lg text-primary me-1"></i>Support
                    for 30+ languages
                  </li>
                  <li className="list-group-item heading-color mb-0">
                    <i className="bi bi-check-lg text-primary me-1"></i>Landing
                    pages Web widgets
                  </li>
                  <li className="list-group-item heading-color mb-0">
                    <i className="bi bi-check-lg text-primary me-1"></i>24/7
                    dedicated Support
                  </li>
                </ul>
                <a href="#" className="btn btn-dark">
                  Start a free 7-days trial
                </a>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section className="pt-0">
        <div className="container">
          <div className="inner-container-small text-center mb-4 mb-sm-5">
            <h2 className="mb-4">Get Yourself On a Plan</h2>
            <p className="mb-0">Your agency's success deserves a pricing strategy that aligns with your goals. We offer a range of pricing plans crafted to meet your unique needs.</p>
          </div>

          <Slider {...sliderSettings2}>
            <div className="swiper-slide">
              <div className="card card-body border rounded p-md-4">
                <h6 className="mb-2">Basic Plan</h6>
                <div className="d-flex align-items-center">
                  <span className="h1 mb-0">$25</span>
                  <div className="ms-3">
                    <p className="heading-color mb-0">Per user</p>
                    <p className="heading-color mb-0">Per month</p>
                  </div>
                </div>
                <span>Basic feature for up to 10 users</span>

                <a href="#" className="btn btn-dark mt-4">Get started</a>
                <a href="#" className="btn btn-outline-light">Chat to sales</a>

                <hr className="my-4" />

                <h6 className="mb-0">Features</h6>
                <span>Everything in basic plan</span>

                <ul className="list-group list-group-borderless border-0 mb-0 mt-2">
                  <li className="list-group-item d-flex mb-0"><i className="bi bi-check-circle-fill text-primary me-2"></i>Access to basic feature</li>
                  <li className="list-group-item d-flex mb-0"><i className="bi bi-check-circle-fill text-primary me-2"></i>Basic reporting and analytics</li>
                  <li className="list-group-item d-flex mb-0"><i className="bi bi-check-circle-fill text-primary me-2"></i>Up to 10 individual users</li>
                  <li className="list-group-item d-flex mb-0"><i className="bi bi-check-circle-fill text-primary me-2"></i>20GB individual data each year</li>
                  <li className="list-group-item d-flex mb-0"><i className="bi bi-check-circle-fill text-primary me-2"></i>Basic chat and email support</li>
                  <li className="list-group-item d-flex mb-0"><i className="bi bi-check-circle-fill text-primary me-2"></i>Ongoing best practices and reviews</li>
                </ul>
              </div>
            </div>

            <div className="swiper-slide">
              <div className="card card-body bg-dark border rounded p-md-4" data-bs-theme="dark">
                <h6 className="mb-2 text-white">Business Plan</h6>
                <div className="d-flex align-items-center">
                  <span className="h1 mb-0">$50</span>
                  <div className="ms-3">
                    <p className="heading-color mb-0">Per user</p>
                    <p className="heading-color mb-0">Per month</p>
                  </div>
                </div>
                <span className="text-white">Basic feature for up to 10 users</span>

                <a href="#" className="btn btn-primary mt-4">Get started</a>
                <a href="#" className="btn btn-outline-white">Chat to sales</a>

                <hr className="my-4" />

                <h6 className="mb-0">Features</h6>
                <span>Everything in basic plan and</span>

                <ul className="list-group list-group-borderless border-0 mb-0 mt-2">
                  <li className="list-group-item d-flex mb-0"><i className="bi bi-check-circle-fill text-white me-2"></i>200+ integrations</li>
                  <li className="list-group-item d-flex mb-0"><i className="bi bi-check-circle-fill text-white me-2"></i>Basic reporting and analytics</li>
                  <li className="list-group-item d-flex mb-0"><i className="bi bi-check-circle-fill text-white me-2"></i>Up to 10 individual users</li>
                  <li className="list-group-item d-flex mb-0"><i className="bi bi-check-circle-fill text-white me-2"></i>40GB individual data each year</li>
                  <li className="list-group-item d-flex mb-0"><i className="bi bi-check-circle-fill text-white me-2"></i>Priority chat and email support</li>
                  <li className="list-group-item d-flex mb-0"><i className="bi bi-check-circle-fill text-white me-2"></i>Ongoing best practices and reviews</li>
                </ul>
              </div>
            </div>

            <div className="swiper-slide">
              <div className="card card-body border rounded p-md-4">
                <h6 className="mb-2">Enterprise Plan</h6>
                <div className="d-flex align-items-center">
                  <span className="h1 mb-0">$85</span>
                  <div className="ms-3">
                    <p className="heading-color mb-0">Per user</p>
                    <p className="heading-color mb-0">Per month</p>
                  </div>
                </div>
                <span>Basic feature for up to 10 users</span>

                <a href="#" className="btn btn-dark mt-4">Get started</a>
                <a href="#" className="btn btn-outline-light">Chat to sales</a>

                <hr className="my-4" />

                <h6 className="mb-0">Features</h6>
                <span>Everything in business and</span>

                <ul className="list-group list-group-borderless border-0 mb-0 mt-2">
                  <li className="list-group-item d-flex mb-0"><i className="bi bi-check-circle-fill text-primary me-2"></i>Advanced custom field</li>
                  <li className="list-group-item d-flex mb-0"><i className="bi bi-check-circle-fill text-primary me-2"></i>Audit log and data history</li>
                  <li className="list-group-item d-flex mb-0"><i className="bi bi-check-circle-fill text-primary me-2"></i>Ultimate individual users</li>
                  <li className="list-group-item d-flex mb-0"><i className="bi bi-check-circle-fill text-primary me-2"></i>60GB individual data each year</li>
                  <li className="list-group-item d-flex mb-0"><i className="bi bi-check-circle-fill text-primary me-2"></i>Basic chat and email support</li>
                  <li className="list-group-item d-flex mb-0"><i className="bi bi-check-circle-fill text-primary me-2"></i>Ongoing best practices and reviews</li>
                </ul>
              </div>
            </div>
          </Slider>
        </div>
      </section>

      <section
        className="bg-white position-relative overflow-hidden"
        data-bs-theme="white"
      >
        <div className="container position-relative">
          <div className="row align-items-start">
            <div className="col-lg-6 col-xl-5 position-relative text-center order-1 mt-6 mt-lg-0">
              <figure className="position-absolute top-0 start-0 mt-n6 ms-n5 z-index-1">
                <svg
                  width="117"
                  height="98"
                  viewBox="0 0 117 98"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="fill-primary"
                    d="M53.9804 0.725277C52.9701 1.69222 52.9701 5.07654 53.9804 11.1683C54.9906 17.1634 55.7123 18.5654 57.5885 18.5654C58.3582 18.5654 59.128 18.3237 59.3685 18.0336C59.561 17.6952 59.2723 13.9241 58.7912 9.52449C58.1177 3.52942 57.6847 1.45049 57.0112 0.773624C55.9047 -0.241669 54.9425 -0.290017 53.9804 0.725277Z"
                  />
                  <path
                    className="fill-primary"
                    d="M94.055 9.62103C87.2236 16.3413 84.8182 19.3872 85.0106 21.2244C85.1068 22.3847 85.3955 22.7715 86.3095 22.9165C87.2236 23.0616 88.3782 22.2397 91.6015 19.0004C96.9415 13.7305 101.512 8.46069 101.512 7.54209C101.512 6.62349 100.165 5.31812 99.2026 5.31812C98.7696 5.36646 96.4604 7.25201 94.055 9.62103Z"
                  />
                  <path
                    className="fill-primary"
                    d="M23.2866 15.2294C22.2763 15.8096 22.1801 17.5984 23.046 18.7104C24.1044 20.0641 34.0148 25.9625 35.2656 25.9625C35.891 25.9625 36.7088 25.6241 37.0937 25.2373C38.537 23.4001 36.4202 21.1278 29.1077 16.5348C25.9806 14.6492 24.7779 14.3108 23.2866 15.2294Z"
                  />
                  <path
                    className="fill-primary"
                    d="M103.433 40.37L97.8047 41.4337V42.8357C97.8047 43.851 98.1414 44.4312 99.0555 45.0114C100.21 45.6399 101.124 45.6399 107.09 44.8663C116.038 43.7543 116.038 43.7543 116.663 42.3523C117.096 41.337 117.048 40.9985 116.326 40.1283C115.22 38.8713 110.986 38.9196 103.433 40.37Z"
                  />
                  <path
                    className="fill-primary"
                    d="M3.94616 46.1232C0.193694 46.8485 -1.20145 49.2175 1.20397 50.7646C1.97371 51.2481 2.83967 51.4414 3.80184 51.1997C4.57157 51.0547 8.42026 50.7162 12.4133 50.5228C17.8495 50.2328 19.7739 49.9427 20.3512 49.4109C21.5058 48.2505 20.3993 46.8001 17.8495 46.1232C15.3479 45.4947 7.12133 45.4947 3.94616 46.1232Z"
                  />
                  <path
                    className="fill-primary"
                    d="M89.1454 69.9584C88.9529 70.1034 88.8086 70.7803 88.8086 71.4088C88.8086 72.7142 90.2518 73.8262 97.6125 77.9357C103.915 81.465 104.877 81.7551 106.416 80.4981C108.244 79.0477 107.234 77.5006 102.664 74.8898C95.3032 70.6352 90.3 68.7981 89.1454 69.9584Z"
                  />
                  <path
                    className="fill-primary"
                    d="M30.8398 72.8111C28.3382 74.9384 21.2181 86.9769 20.0635 91.038C19.0532 94.519 21.9397 95.9211 24.0565 93.0203C24.6819 92.1984 26.3657 89.2975 27.7609 86.6868C29.1079 84.0277 31.369 80.1115 32.6198 77.8876C34.929 74.0681 35.2177 72.8111 33.9187 71.9408C33.0047 71.3123 32.3312 71.5541 30.8398 72.8111Z"
                  />
                  <path
                    className="fill-primary"
                    d="M60.9544 80.7401C60.1365 81.707 60.0884 93.6488 60.9063 95.7277C61.243 96.4529 62.0128 97.3232 62.7825 97.6616C63.889 98.1935 64.1776 98.1451 65.0436 97.0815C65.5247 96.4529 65.8133 95.631 65.669 95.1959C65.5247 94.8091 65.2841 91.6666 65.0917 88.2823C64.9474 84.8979 64.6106 81.6103 64.4182 80.9818C63.889 79.6764 61.9165 79.5314 60.9544 80.7401Z"
                  />
                </svg>
              </figure>

              <figure className="position-absolute bottom-0 end-0 mb-n6 me-n6 d-none d-xl-block">
                <svg
                  className="fill-white"
                  width="170"
                  height="133"
                  viewBox="0 0 170 133"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M45.1119 117.165C45.245 116.536 45.2987 115.9 45.3557 115.224C45.6466 112.726 45.2954 110.253 44.9409 107.821C44.1631 102.349 42.9352 97 41.7469 91.654C40.8746 87.7763 39.9229 83.8918 39.5802 79.8986C39.5248 79.1331 39.4264 78.404 39.4505 77.6452C39.5193 75.4086 40.0293 75.0512 41.9043 76.0504C43.4353 76.8603 44.92 77.7465 46.3152 78.7452C48.6924 80.4274 50.9834 82.1825 53.3141 83.9409C60.1212 89.0403 66.925 94.1794 73.7751 99.2424C76.4464 101.23 79.2502 103.068 82.1933 104.678C83.7244 105.488 85.2555 106.298 86.989 106.604C90.1815 107.154 92.1918 105.602 92.5464 102.348C92.7438 100.483 92.3753 98.69 92.0068 96.897C91.125 92.658 89.8725 88.548 88.5802 84.4346C85.8178 75.472 82.8503 66.5721 80.4156 57.5171C79.1407 52.7244 78.1935 47.8392 77.7294 42.9148C77.5823 41.3407 77.5823 41.3407 78.1734 39.5486C79.2219 39.9174 79.9987 40.6637 80.7357 41.4066C82.4345 43.0716 84.1367 44.6969 85.7064 46.4711C89.4306 50.6697 93.1118 54.9046 96.7499 59.176C106.432 70.4845 116.157 81.7566 126.266 92.7407C128.024 94.651 129.872 96.4487 131.759 98.2498C132.536 98.9961 133.398 99.6696 134.357 100.151C136.467 101.21 138.381 99.8499 138.1 97.5036C137.926 96.2475 137.636 94.9417 137.178 93.7417C135.96 90.6357 134.703 87.5264 133.32 84.4865C129.327 75.9005 125.214 67.3045 121.137 58.7515C117.031 50.0759 112.882 41.4368 109.319 32.4867C106.98 26.5631 104.723 20.6064 103.083 14.4614C102.958 14.0504 102.482 13.5297 103.366 13.0037C104.357 14.0484 105.468 15.1032 106.41 16.2638C109.783 20.3527 113.117 24.4382 116.405 28.5999C123.776 37.9114 131.064 47.256 138.475 56.5709C141.912 60.8652 145.431 65.1265 149.297 69.0568C150.659 70.4531 152.067 71.7732 153.565 72.9808C154.95 74.0988 156.597 74.9586 158.318 73.9827C160.04 73.0068 160.231 71.2209 159.982 69.4379C159.824 68.4636 159.746 67.496 159.505 66.5547C159.087 64.8776 158.629 63.1972 158.045 61.5862C156.848 58.2416 155.611 54.8937 154.248 51.6153C151.127 44.0639 147.847 36.4992 144.725 28.9479C143.498 25.9611 142.357 22.9016 141.252 19.8852C141.153 19.6366 141.186 19.239 141.325 19.0105C141.518 18.6263 141.938 18.8619 142.166 19.0013C143.267 19.6949 144.371 20.3487 145.426 21.1185C148.55 23.4244 151.631 25.7667 154.756 28.0726C156.825 29.6087 158.981 31.072 161.097 32.532C162.611 33.5408 164.265 34.321 166.058 34.8728C166.603 35.0389 167.113 35.162 167.517 34.6355C167.835 34.1819 167.429 33.7872 167.214 33.4888C166.378 32.4972 165.542 31.5056 164.577 30.6233C158.908 25.2996 152.882 20.4263 146.322 16.1887C145.148 15.4089 143.878 14.8211 142.655 14.1573C141.775 13.6826 140.832 13.4829 139.876 13.4422C137.765 13.3442 136.467 14.516 136.206 16.6563C136.046 18.0843 136.491 19.4433 136.899 20.7592C138.231 24.876 139.937 28.8241 141.64 32.812C145.082 40.8308 148.563 48.853 151.962 56.9083C153.16 59.7724 154.146 62.7787 155.138 65.7056C155.528 66.7796 156.032 67.9033 155.713 69.318C154.185 68.4682 153.171 67.2214 152.11 66.0507C148.475 62.22 145.062 58.1278 141.771 54.0059C133.636 43.7891 125.545 33.5358 117.41 23.3189C114.915 20.1852 112.374 17.1277 109.751 14.1032C108.403 12.5478 106.922 11.1415 105.441 9.73512C104.664 8.98882 103.755 8.39152 102.746 8.02607C101.04 7.40151 99.4403 8.3477 99.0907 10.1202C98.881 11.1836 98.9095 12.2672 99.1796 13.3311C99.5056 14.6801 99.8283 16.0688 100.237 17.3847C102.801 25.85 106.021 34.1305 109.705 42.1297C115.484 54.6705 121.511 67.1121 127.373 79.6199C129.472 84.1217 131.449 88.6533 133.466 93.1882C133.667 93.6457 133.984 94.1529 133.364 94.8615C130.978 92.3376 128.585 89.8932 126.282 87.3362C117.178 77.2378 108.249 66.9539 99.4033 56.6369C95.9833 52.6242 92.4408 48.6413 88.9346 44.7014C86.9982 42.5358 84.9756 40.443 82.7376 38.5323C81.6534 37.6399 80.5691 36.7475 79.2991 36.1598C76.875 35.0342 75.0308 36.0398 74.6438 38.7301C74.4469 40.115 74.4883 41.52 74.609 42.9317C75.0927 48.0981 75.9834 53.1787 77.2382 58.2099C79.4252 66.8837 82.1847 75.4056 84.739 83.9902C86.1364 88.7532 87.6166 93.4831 88.5638 98.3683C88.7841 99.5481 88.9647 100.725 88.8641 101.917C88.7936 102.752 88.4094 103.04 87.6187 102.934C86.0043 102.637 84.5923 101.837 83.1803 101.037C79.8967 99.1985 76.7591 97.0516 73.7042 94.8717C66.6918 89.8351 59.7656 84.7256 52.7533 79.689C50.3761 78.0067 47.9559 76.3609 45.486 74.831C44.3089 74.091 42.9992 73.4999 41.6728 73.1077C39.3309 72.4295 37.599 73.5247 37.1958 75.9333C36.9861 76.9968 37.0543 78.0837 37.0828 79.1673C37.3489 83.5945 38.3431 87.923 39.2579 92.2448C40.4786 98.1541 41.739 104.067 42.3506 110.085C42.5995 112.348 42.567 114.628 42.0184 116.864C41.6493 118.395 40.7121 119.076 39.1737 118.827C38.029 118.65 36.8581 118.311 35.7732 117.899C33.1836 116.839 30.6437 115.664 28.0574 114.565C21.4001 111.48 14.862 108.406 8.01848 106.106C5.87843 105.405 3.74844 104.584 1.18058 104.688C1.77835 105.66 2.56571 105.806 3.22053 106.102C8.22424 108.406 13.1883 110.707 18.1489 113.048C22.9541 115.335 27.6799 117.616 32.4487 119.861C34.218 120.691 36.0338 121.445 37.9227 121.804C41.694 122.603 44.277 120.899 45.1119 117.165Z" />
                </svg>
              </figure>

              <div className="bg-dark text-center p-4 rounded position-absolute top-0 end-0 z-index-1 d-none d-sm-block my-3 mx-4">
                <h3 className="text-white mb-0">89%</h3>
                <p className="mb-0">Company growth</p>
              </div>

              <div className="col-md-6 card card-body bg-white text-center position-absolute top-100 start-0 ms-xl-n8 mt-n8 z-index-1">
                <ul className="avatar-group mb-2 justify-content-center">
                  <li className="avatar avatar-xs">
                    <img
                      className="avatar-img rounded-circle"
                      src="../assets/images/avatar/06.jpg"
                      alt="avatar"
                    />
                  </li>
                  <li className="avatar avatar">
                    <img
                      className="avatar-img rounded-circle"
                      src="../assets/images/avatar/05.jpg"
                      alt="avatar"
                    />
                  </li>
                  <li className="avatar avatar-lg z-index-2">
                    <img
                      className="avatar-img rounded-circle"
                      src="../assets/images/avatar/02.jpg"
                      alt="avatar"
                    />
                  </li>
                  <li className="avatar avatar z-index-1">
                    <img
                      className="avatar-img rounded-circle"
                      src="../assets/images/avatar/03.jpg"
                      alt="avatar"
                    />
                  </li>
                  <li className="avatar avatar-xs">
                    <img
                      className="avatar-img rounded-circle"
                      src="../assets/images/avatar/04.jpg"
                      alt="avatar"
                    />
                  </li>
                </ul>
                <p className="text-dark mb-0">
                  Keep your info updated to increase the number of intersection{" "}
                </p>
              </div>

              <img
                src="../assets/images/about/06.jpg"
                className="rounded position-relative"
                alt="about-img"
              />
            </div>

            <div className="col-lg-6 ms-auto position-relative order-lg-2">
              <h2 className="mb-4 mb-md-5">
                Got Questions? We’ve Got Answers
              </h2>
              <p className="mb-4 mb-md-5">
                Efficiently evaluate your digital content for accessibility,
                identifying and resolving issues swiftly to ensure an inclusive
                user experience.
              </p>
              <div
                className="accordion accordion-icon accordion-bg-light"
                id="accordionFaq"
              >
                <div className="accordion-item mb-3">
                  <div className="accordion-header font-base" id="heading-1">
                    <button
                      className="accordion-button fw-semibold rounded collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse-1"
                      aria-expanded="true"
                      aria-controls="collapse-1"
                    >
                      Explaining the value of design
                    </button>
                  </div>
                  <div
                    id="collapse-1"
                    className="accordion-collapse collapse show"
                    aria-labelledby="heading-1"
                    data-bs-parent="#accordionFaq"
                  >
                    <div className="accordion-body mt-3 pb-0" style={{ fontSize: '14px' }}>
                      It's the thoughtful arrangement of elements that not only
                      enhances visual appeal but also improves functionality,
                      usability, and user experience. Effective design
                      communicates your brand's identity, cultivates trust, and
                      can significantly impact conversion rates and customer
                      loyalty.
                    </div>
                  </div>
                </div>

                <div className="accordion-item mb-3">
                  <div className="accordion-header font-base" id="heading-2">
                    <button
                      className="accordion-button fw-semibold rounded collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse-2"
                      aria-expanded="false"
                      aria-controls="collapse-2"
                    >
                      Discover resources for color-accessible
                    </button>
                  </div>
                  <div
                    id="collapse-2"
                    className="accordion-collapse collapse"
                    aria-labelledby="heading-2"
                    data-bs-parent="#accordionFaq"
                  >
                    <div className="accordion-body mt-3 pb-0" style={{ fontSize: '14px' }}>
                      We provide a range of tools, guides, and best practices to
                      help you create designs, websites, and content that are
                      inclusive and accessible to all individuals, regardless of
                      their visual abilities.
                    </div>
                  </div>
                </div>

                <div className="accordion-item mb-3">
                  <div className="accordion-header font-base" id="heading-3">
                    <button
                      className="accordion-button fw-semibold collapsed rounded"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse-3"
                      aria-expanded="false"
                      aria-controls="collapse-3"
                    >
                      Checking interface contrast for accessibility standards
                    </button>
                  </div>
                  <div
                    id="collapse-3"
                    className="accordion-collapse collapse"
                    aria-labelledby="heading-3"
                    data-bs-parent="#accordionFaq"
                  >
                    <div className="accordion-body mt-3 pb-0" style={{ fontSize: '14px' }}>
                      This crucial process ensures that content is easily
                      readable and perceivable by individuals with varying
                      degrees of visual impairment. By adhering to accessibility
                      standards, you create a more inclusive and user-friendly
                      experience for all users, regardless of their visual
                      abilities, and contribute to a more accessible digital
                      environment.
                    </div>
                  </div>
                </div>

                <div className="accordion-item mb-3">
                  <div className="accordion-header font-base" id="heading-4">
                    <button
                      className="accordion-button fw-semibold collapsed rounded"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse-4"
                      aria-expanded="false"
                      aria-controls="collapse-4"
                    >
                      Checking accessibility on browsers
                    </button>
                  </div>
                  <div
                    id="collapse-4"
                    className="accordion-collapse collapse"
                    aria-labelledby="heading-4"
                    data-bs-parent="#accordionFaq"
                  >
                    <div className="accordion-body mt-3 pb-0" style={{ fontSize: '14px' }}>
                      By evaluating how your digital content and features
                      perform across different browsers, you can identify
                      potential accessibility issues and make necessary
                      adjustments to provide a seamless and accessible online
                      experience for users regardless of their choice of
                      browser.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <hr className="my-6 opacity-1" />

          <div className="row row-cols-2 row-cols-md-4 g-4 align-items-center">
            <div className="col">
              <div className="d-flex justify-content-center">
                <h4
                  className="purecounter mb-0"
                  data-purecounter-start="0"
                  data-purecounter-end="150"
                  data-purecounter-delay="300"
                >
                  0
                </h4>
                <span className="h4 text-primary mb-0">+</span>
              </div>
              <p className="text-center heading-color mb-0">
                Project management in a day
              </p>
            </div>

            <div className="col">
              <div className="d-flex justify-content-center">
                <h4
                  className="purecounter mb-0"
                  data-purecounter-start="0"
                  data-purecounter-end="120"
                  data-purecounter-delay="300"
                >
                  0
                </h4>
                <span className="h4 text-primary mb-0">+</span>
              </div>
              <p className="text-center heading-color mb-0">
                Hour save for our customer
              </p>
            </div>

            <div className="col">
              <div className="d-flex justify-content-center">
                <h4
                  className="purecounter mb-0"
                  data-purecounter-start="0"
                  data-purecounter-end="10"
                  data-purecounter-delay="300"
                >
                  0
                </h4>
                <span className="h4 text-primary mb-0">M+</span>
              </div>
              <p className="text-center heading-color mb-0">
                Positive user reviews
              </p>
            </div>

            <div className="col">
              <div className="d-flex justify-content-center">
                <h4
                  className="purecounter mb-0"
                  data-purecounter-start="0"
                  data-purecounter-end="600"
                  data-purecounter-delay="300"
                >
                  0
                </h4>
                <span className="h4 text-primary mb-0">+</span>
              </div>
              <p className="text-center heading-color mb-0">Happy customers</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default HotelHome;
