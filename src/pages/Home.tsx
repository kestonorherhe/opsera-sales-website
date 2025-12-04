import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "../components/Header";

function Home() {
  const sliderSettings2 = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 7000,

    variableWidth: false,
    centerMode: false,
    centerPadding: '0px',

    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, // Hide arrows for cleaner mobile experience
    fade: true, // Smooth fade transition
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        },
      },
    ],
  };

  const slides = [
    {
      title: "Building the Future of Property in West Africa",
      description: "At Exhale Avenue, we craft properties that blend functionality with inspiration, delivering innovation and satisfaction. Our mission is simple — to fulfill every investment, residential, or commercial project with excellence, transparency, and timely delivery.",
      buttonText: "Buy Now",
      buttonLink: "/properties"
    },
    {
      title: "Earn like an investor, live like a guest. Discover the BnB that does both.",
      description: "Invest in comfort. Live in style. Earn without limits.",
      buttonText: "Buy Now",
      buttonLink: "/properties"
    },
    {
      title: "A scenic blend of elegance, comfort, and real estate value.",
      description: "Panoramic views. Profitable returns. Premium lifestyle.",
      buttonText: "Buy Now",
      buttonLink: "/properties"
    },
    {
      title: "A scenic blend of elegance, comfort, and real estate value.",
      description: "Stylish, serene, and strategically located.- Welcome to Jas Residence.",
      buttonText: "Buy Now",
      buttonLink: "/properties"
    },
  ];
  return (
    <main>
      <Header />

      <Slider className="swiper-wrapper" {...sliderSettings}>
        {slides.map((slide, index) => (
          <div key={index} className="swiper-wrapper">
            <div
              className="swiper-slide"
              style={{
                backgroundImage: `url(assets/images/bg/10.jpg)`,
              }}
            >
              <div className="overlay-dark"></div>

              <div className="card overflow-hidden min-vh-100 rounded-0" style={{ background: 'url(assets/images/bg/10.jpg) no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="bg-overlay bg-linear-overlay"></div>

                <div className="position-relative z-index-2 d-flex flex-column m-auto h-100 py-9">
                  <div className="container">
                    <div className="row">
                      <div className="col-sm-11 col-lg-8 col-xl-7 text-center m-auto">
                        <h1 className="text-white display-4 my-4">{slide.title}</h1>
                        <p className="text-white mb-5"> {slide.description}</p>
                        <a className="btn btn-lg btn-white icon-link icon-link-hover mb-0" href="#">Get started now<i className="bi bi-arrow-right"></i> </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {/* Our Goal */}
      <section className="pb-0">
        <div className="container">
          <div className="row mb-3 mb-xl-0">
            <div className="col-xl-9">
              <h4 className="lh-base mb-0">We Are Engineering the Backbone of West Africa’s Property Economy.</h4>
            </div>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-7 pe-lg-5">
              <p className="mb-2">Opsera was born from a simple belief:
                technology should make the complex simple, the opaque transparent, and the impossible achievable.</p>
              <p className="mb-3">Across Nigeria and West Africa, property owners, estate managers, investors, and construction teams struggle with fragmented processes, manual operations, poor accountability, costly delays, and unreliable data.</p>
              <p className="mb-5 fw-bold">We saw an opportunity—not just to fix these problems, but to reinvent how the entire industry works.</p>
              <p className="mb-2 fw-bold">Opsera is not just a company.</p>
              <p className="mb-2">It’s an ecosystem.</p>
              <p className="mb-3">A platform of intelligent products that transform the way real estate is owned, built, managed, and grown.</p>
              <p className="mb-5 fw-bold">We are building the digital foundation for the region’s next era of property excellence.</p>
            </div>

            <div className="col-lg-5 mt-7 mt-lg-0">
              <div className="position-relative d-flex justify-content-center">
                <img src="assets/images/about/04.jpg" className="rounded" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row g-4 align-items-xl-center">

            <div className="col-lg-6">
              <div className="row pe-xl-5">
                <div className="col-sm-6">
                  <img src="assets/images/about/02.jpg" className="rounded" alt="about-img" />
                </div>

                <div className="col-sm-6">
                  <div className="row mb-4">
                    <div className="col-sm-6 mb-4 mb-sm-0">
                      <div className="bg-dark text-white rounded text-center p-3">
                        <span className="h2 text-white">10+</span>
                        <p className="mb-0">Years of experience</p>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="bg-primary rounded text-center p-3">
                        <span className="h2 text-white">1.2K</span>
                        <p className="mb-0 text-white">Happy customers</p>
                      </div>
                    </div>
                  </div>

                  <img src="assets/images/about/01.jpg" className="rounded" alt="about-img-2" />
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <h4 className="my-4">Our Mission</h4>
              <p className="mb-4">To empower property owners, investors, managers, and construction professionals through innovative, integrated, and intelligent technology—simplifying operations, maximizing revenue, and enabling sustainable growth.</p>
              <h4 className="my-4">Our Vision</h4>
              <p className="mb-4">To become West Africa’s leading PropTech ecosystem, redefining how real estate, construction, and property investment are managed through transparency, automation, and disruptive technology.</p>

              {/* <h5 className="my-4">Our Core Values</h5>
              <ul className="list-group list-group-borderless mb-4">
                <li className="list-group-item heading-color d-flex mb-0"><b>Innovation</b> - We don’t follow trends; we create them.</li>
                <li className="list-group-item heading-color d-flex mb-0"><b>Simplicity</b> - Complex processes should be effortlessly simple.</li>
                <li className="list-group-item heading-color d-flex mb-0"><b>Transparency</b> - Trust thrives where clarity lives.</li>
                <li className="list-group-item heading-color d-flex mb-0"><b>Empowerment</b> - We give every stakeholder the tools to succeed.</li>
                <li className="list-group-item heading-color d-flex mb-0"><b>Sustainability</b> - Long-term thinking, responsible growth.</li>
                <li className="list-group-item heading-color d-flex mb-0"><b>Excellence</b> - Every solution, every product, every time.</li>
                <li className="list-group-item heading-color d-flex mb-0"><b>Collaboration</b> - We grow by lifting others.</li>
              </ul> */}
            </div>

          </div>
        </div>
      </section>


      <section className="bg-dark position-relative overflow-hidden" data-bs-theme="dark">

        <div className="container position-relative">
          <div className="inner-container-small text-center">
            <span className="bg-light heading-color small rounded-3 px-3 py-2">🚀 Innovative solutions, Measurable results</span>
            <h2 className="mb-0 mt-4">A Unified PropTech Platform for the Entire Property Lifecycle</h2>
            <p>Opsera is home to six powerful SaaS platforms, each solving a mission-critical need—yet designed to work together seamlessly.</p>
          </div>

          <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 gy-5 gy-md-7 mt-3">
            <div className="col">
              <div className="card bg-light h-100">
                <div className="card-body pb-0">
                  <div className="icon-lg bg-white text-primary rounded-circle mb-4 mt-n5">
                    <i className="bi bi-stack fa-fw fs-5"></i>
                  </div>
                  <h5 className="mb-3"><a href="#" className="text-white">Hotel Management Software (HMS)</a></h5>
                  <p>Smart hospitality management for hotels of all sizes.</p>
                  <p>Automate bookings, optimize operations, increase occupancy, and deliver memorable guest experiences.</p>
                </div>
                <div className="card-footer bg-light mt-auto pt-2">
                  <a className="icon-link icon-link-hover" href="#">Know more<i className="bi bi-arrow-right"></i> </a>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card bg-light h-100">
                <div className="card-body pb-0">
                  <div className="icon-lg bg-white text-primary rounded-circle mb-4 mt-n5">
                    <i className="bi bi-boxes fa-fw fs-5"></i>
                  </div>
                  <h5 className="mb-3"><a href="#" className="text-white">Property Management Software (PMS)</a></h5>
                  <p>A modern system for managing rentals, maintenance, tenants, facilities, and property finance—built for landlords, facility managers, and property companies.</p>
                </div>
                <div className="card-footer bg-light mt-auto pt-2">
                  <a className="icon-link icon-link-hover" href="#">Know more<i className="bi bi-arrow-right"></i> </a>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card bg-light h-100">
                <div className="card-body pb-0">
                  <div className="icon-lg bg-white text-primary rounded-circle mb-4 mt-n5">
                    <i className="bi bi-circle-square fa-fw fs-5"></i>
                  </div>
                  <h5 className="mb-3"><a href="#" className="text-white">Estate Management Software (EMS)</a></h5>
                  <p>Digitize and automate estate governance.</p>
                  <p>Payments. Security. Maintenance. Communication. All in one place.</p>
                </div>
                <div className="card-footer bg-light mt-auto pt-2">
                  <a className="icon-link icon-link-hover" href="#">Know more<i className="bi bi-arrow-right"></i> </a>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card bg-light h-100">
                <div className="card-body pb-0">
                  <div className="icon-lg bg-white text-primary rounded-circle mb-4 mt-n5">
                    <i className="bi bi-vector-pen fa-fw fs-5"></i>
                  </div>
                  <h5 className="mb-3"><a href="#" className="text-white">Construction Management Software (CMS)</a></h5>
                  <p>The future of construction project management.</p>
                  <p>Plan, track, collaborate, and deliver projects with precision, transparency, and cost control.</p>
                </div>
                <div className="card-footer bg-light mt-auto pt-2">
                  <a className="icon-link icon-link-hover" href="#">Know more<i className="bi bi-arrow-right"></i> </a>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card bg-light h-100">
                <div className="card-body pb-0">
                  <div className="icon-lg bg-white text-primary rounded-circle mb-4 mt-n5">
                    <i className="bi bi-briefcase fa-fw fs-5"></i>
                  </div>
                  <h5 className="mb-3"><a href="#" className="text-white">Real Estate Investment Software (REIS)</a></h5>
                  <p>A platform that empowers investors with data-driven insights, risk analysis, portfolio tracking, and smart investment tools for wealth creation.</p>
                </div>
                <div className="card-footer bg-light mt-auto pt-2">
                  <a className="icon-link icon-link-hover" href="#">Know more<i className="bi bi-arrow-right"></i> </a>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card bg-light h-100">
                <div className="card-body pb-0">
                  <div className="icon-lg bg-white text-primary rounded-circle mb-4 mt-n5">
                    <i className="bi bi-binoculars fa-fw fs-5"></i>
                  </div>
                  <h5 className="mb-3"><a href="#" className="text-white">Sales Management Software (SMS)</a></h5>
                  <p>A sales engine built for real-estate developers and agencies.</p>
                  <p>Lead management, automation, customer engagement, and revenue tracking in one streamlined workflow.</p>
                </div>
                <div className="card-footer bg-light mt-auto pt-2">
                  <a className="icon-link icon-link-hover" href="#">Know more<i className="bi bi-arrow-right"></i> </a>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div className="container mt-7 text-left">
          <h6 className="mb-2 mt-4">Together, they form the Opsera Ecosystem—</h6>
          <p>Opsera is home to six powerful SaaS platforms, each solving a mission-critical need—yet designed to work together seamlessly.</p>
        </div>
      </section>

      <section className="overflow-hidden">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-6 mb-sm-6 mb-lg-0">
              <h2 className="mb-4">Real Estate & Construction in West Africa are filled with challenges:</h2>
              {/* <p className="mb-0">Supposing so be resolving breakfast am or perfectly. It drew a hill from me. Valley by oh twenty direct me so.</p> */}

              <hr className="my-4 my-sm-5" />

              <div className="row g-4 mb-4 mb-sm-5">
                <div className="col-sm-12">
                  <div className="d-flex">
                    <div className="ms-3">
                      {/* <h6 className="mb-0 mb-sm-2 text-primary">Save Time</h6> */}
                      <ul className="list-group list-group-borderless mb-4">
                        <li className="list-group-item heading-color mb-0"><i className="bi bi-patch-check-fill me-2" style={{ color: '#FFA600' }}></i>Manual workflows that slow down operations</li>
                        <li className="list-group-item heading-color mb-0"><i className="bi bi-patch-check-fill me-2" style={{ color: '#FFA600' }}></i>Data scattered across spreadsheets and WhatsApp</li>
                        <li className="list-group-item heading-color mb-0"><i className="bi bi-patch-check-fill me-2" style={{ color: '#FFA600' }}></i>High costs from delays, errors, and mismanagement</li>
                        <li className="list-group-item heading-color mb-0"><i className="bi bi-patch-check-fill me-2" style={{ color: '#FFA600' }}></i>No real-time visibility across properties or projects</li>
                        <li className="list-group-item heading-color mb-0"><i className="bi bi-patch-check-fill me-2" style={{ color: '#FFA600' }}></i>Revenue leakages and fraud</li>
                        <li className="list-group-item heading-color mb-0"><i className="bi bi-patch-check-fill me-2" style={{ color: '#FFA600' }}></i>Poor accountability and documentation</li>
                        <li className="list-group-item heading-color mb-0"><i className="bi bi-patch-check-fill me-2" style={{ color: '#FFA600' }}></i>Investor mistrust and lack of transparency</li>
                        <li className="list-group-item heading-color mb-0"><i className="bi bi-patch-check-fill me-2" style={{ color: '#FFA600' }}></i>Fragmented tools that don’t talk to each other</li>
                      </ul>
                    </div>
                  </div>
                  <p className="mb-0">Opsera solves all of this by building a connected, integrated platform where every activity, every stakeholder, and every decision lives in one ecosystem.</p>
                </div>
              </div>

            </div>

            <div className="col-lg-6">
              <div className="row">
                <div className="col-lg-11 col-xl-9 position-relative ms-auto">
                  <figure className="position-absolute top-50 start-0 translate-middle z-index-2">
                    <svg width="159" height="155" viewBox="0 0 159 155" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path className="fill-primary" d="M14.2394 111.637C13.5965 111.365 12.9265 111.083 12.2734 110.839C10.1612 110.017 8.07613 109.206 5.88225 108.354C6.18466 107.629 6.68446 107.288 7.12302 106.862C8.19051 105.834 9.28521 104.815 10.1758 103.596C10.9576 102.585 11.4775 101.445 11.7254 100.202C11.7797 99.9745 11.7898 99.6988 11.5177 99.597C11.3272 99.5257 11.0449 99.4511 10.8681 99.5091C10.4294 99.6864 10.035 99.9113 9.6304 100.163C6.57033 102.123 4.06486 104.755 1.43689 107.217C1.2567 107.367 1.12074 107.565 0.984778 107.762C0.525929 108.491 0.553501 109.495 1.0979 110.195C1.43134 110.63 1.85998 110.977 2.36679 111.198C5.43823 112.441 8.5844 113.401 11.9004 113.742C12.5874 113.813 13.3322 113.812 13.985 113.56C14.4509 113.393 14.8385 113.103 14.8213 112.569C14.8551 112.147 14.6374 111.817 14.2394 111.637Z" />
                      <path className="fill-primary" d="M14.8846 105.45C20.7137 105.459 26.5019 105.079 32.2524 104.22C34.1942 103.923 36.1122 103.523 37.9995 102.957C45.8716 100.656 51.4064 95.6497 55.0392 88.3477C56.5889 85.2023 57.6011 81.9178 58.2869 78.511C58.8572 75.7441 59.3459 72.9467 59.889 70.1696C60.4084 67.5388 60.9822 64.9284 62.0933 62.4571C64.0642 58.1033 67.4234 55.7593 72.1948 55.5273C73.3 55.4753 74.3815 55.5697 75.4767 55.7933C77.9595 56.288 80.2996 57.164 82.5752 58.2951C84.5345 59.2769 86.521 60.2688 88.4904 61.2233C92.5722 63.2479 96.5579 62.877 100.461 60.7368C101.709 60.0552 102.879 59.2511 104.004 58.3995C105.252 57.4694 106.449 56.4272 107.662 55.4224C109.492 53.9338 111.348 52.4554 113.221 51.0145C114.612 49.9517 116.104 49.1133 117.703 48.4076C121.273 46.8257 124.759 47.0439 128.126 48.9874C129.63 49.8606 131.066 50.8326 132.521 51.7501C134.651 53.106 136.821 54.353 139.287 55.0587C142.28 55.9306 145.171 55.8329 147.949 54.2959C148.231 54.3705 148.445 54.2955 148.557 53.9959L148.595 53.9789C149.016 54.0126 149.329 53.7571 149.649 53.5663C151.278 52.5305 152.773 51.3518 154.086 49.9182C155.694 48.6884 156.7 47.0781 157.349 45.1788C156.06 46.4661 154.888 47.8588 153.786 49.3093C152.154 50.9338 150.077 51.9258 148.183 53.1728C147.877 53.2445 147.571 53.3162 147.282 53.4254C144.551 54.4213 141.902 54.2058 139.259 53.0613C137.286 52.1987 135.585 50.9411 133.874 49.7107C132.36 48.6163 130.887 47.413 129.278 46.4072C125.251 43.9062 121.054 43.515 116.671 45.4447C115.223 46.0822 113.879 46.8524 112.577 47.762C110.775 49.0123 109.086 50.4599 107.45 51.9279C105.815 53.3959 104.153 54.8537 102.5 56.2842C101.303 57.3265 100.011 58.2089 98.58 58.8839C95.8563 60.1928 93.1459 60.3891 90.4213 58.9656C88.8158 58.1163 87.268 57.1955 85.6625 56.3462C82.4617 54.6203 79.2404 52.9489 75.6217 52.3394C69.4351 51.2966 64.2324 53.0126 60.4832 58.222C59.2425 59.9619 58.3896 61.909 57.8258 63.9953C56.7458 67.8754 56.1861 71.8571 55.4529 75.8049C54.6655 79.9807 53.6773 84.1125 51.662 87.9219C48.8956 93.1576 45.0678 97.251 39.5354 99.6818C37.349 100.633 35.1251 101.353 32.8161 101.886C29.1435 102.746 25.4062 103.365 21.6654 103.828C19.3189 104.129 16.9928 104.376 14.6463 104.678C14.2586 104.719 13.7553 104.655 13.5616 105.172C13.9324 105.59 14.4255 105.433 14.8846 105.45Z" />
                      <path className="fill-primary" d="M157.352 45.087C157.342 45.1142 157.314 45.104 157.304 45.1313C157.294 45.1585 157.284 45.1857 157.274 45.213C157.284 45.1857 157.321 45.1687 157.321 45.1687C157.331 45.1414 157.342 45.1142 157.352 45.087Z" />
                      <path className="fill-primary" d="M157.889 43.6438C157.655 44.2701 157.502 44.6786 157.349 45.087C157.91 44.583 157.92 44.5557 157.889 43.6438Z" />
                    </svg>
                  </figure>

                  <figure className="position-absolute top-0 start-100 translate-middle mt-8 ms-5 d-none d-xl-block">
                    <svg className="fill-mode" width="96" height="99" viewBox="0 0 96 99" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M66.5204 64.3653C68.4878 62.2239 69.8711 59.7411 70.3936 56.886C72.4225 45.5894 64.3072 35.5653 52.1035 36.6825C44.603 37.3653 38.9777 44.5653 39.8999 52.0446C40.6684 58.2205 45.9556 62.4101 51.8576 61.448C54.6549 60.9825 56.776 59.4929 58.0363 56.886C59.02 54.8377 58.7126 52.5101 57.2985 51.0205C55.7923 49.4377 51.8576 48.6308 49.798 49.4377C49.4599 49.5618 49.2447 50.2136 49.4599 50.5239C49.7673 50.9273 50.1054 51.2687 50.4743 51.6101C51.1506 52.2308 51.8576 52.8205 52.5031 53.4722C52.9028 53.8756 52.872 54.4032 52.4724 54.8067C51.5195 55.8618 50.3206 56.048 49.0603 55.6756C46.9393 55.0239 45.8019 53.4411 45.4023 51.2998C44.3571 45.7136 49.4292 42.0205 53.1487 41.7722C58.6511 41.3687 63.5694 44.7205 65.1679 49.9963C66.7356 55.086 65.2294 59.7411 60.9873 62.9377C59.7884 63.8377 58.4666 64.5515 57.0219 65.017C53.0872 66.3204 49.1525 66.3515 45.2793 65.017C37.9325 62.5032 34.1823 56.6377 35.1352 48.5998C35.7193 43.6963 37.7788 39.4446 41.0065 35.7825C42.3898 34.1998 43.8653 32.7101 46.0478 32.3067C46.14 32.3067 46.2015 32.2446 46.2937 32.2136C46.5089 32.0894 46.5396 31.5308 46.3245 31.3136C46.0478 30.9722 45.6789 30.7549 45.2793 30.7239C44.4493 30.5998 43.6501 30.7239 42.8201 31.0032C41.2832 31.5618 40.0536 32.4929 38.8855 33.6101C34.336 37.9239 31.6616 43.2308 31.0468 49.4998C30.1861 58.4377 34.2745 65.048 41.8365 68.7101C44.8182 70.1377 47.9844 70.7273 51.2736 70.7584C52.3494 70.6963 53.4253 70.6653 54.5012 70.5101C59.2351 69.8584 63.2928 67.9032 66.5204 64.3653Z" />
                      <path d="M0.769309 44.5963C2.36777 45.8998 3.99697 47.2032 5.65692 48.4756C7.99313 50.2446 10.6367 51.0205 13.8337 51.1136C13.7722 51.1136 14.0488 51.1446 14.264 51.0825C14.4792 51.0205 14.7866 50.9274 14.8481 50.7412C14.9096 50.586 14.8173 50.2446 14.6944 50.0894C14.0796 49.5308 13.4955 48.9101 12.7885 48.4756C10.1449 46.8929 7.53204 45.3101 4.70399 44.0998C3.6281 43.6343 2.52147 43.3239 1.41484 42.9515C1.10745 42.8584 0.769309 42.8584 0.431173 42.8584C0.123776 42.8584 -0.152881 43.3549 0.00081747 43.6032C0.246735 43.9446 0.461913 44.3481 0.769309 44.5963Z" />
                      <path d="M55.6683 15.2692C55.822 15.2692 56.0064 15.3002 56.1294 15.2071C56.6212 14.8657 56.8364 14.3071 57.0823 13.7795C58.4349 10.614 60.1563 7.66572 62.0007 4.77951C62.6462 3.78641 63.2303 2.79331 63.8451 1.8002C64.0602 1.45882 64.2447 1.05537 64.3676 0.68296C64.3984 0.558822 64.3369 0.372615 64.2447 0.217443C64.091 -0.0308331 63.8143 0.00020143 63.5991 0.0933049C63.384 0.186408 63.1688 0.341581 62.9536 0.465719C58.0967 3.91055 56.1601 8.93813 55.4531 14.6795C55.4839 14.7726 55.4839 14.9278 55.5453 15.114C55.5453 15.1761 55.6376 15.2692 55.6683 15.2692Z" />
                      <path d="M24.5905 26.6586C23.3916 23.0896 22.1928 19.5207 20.9325 15.9827C20.3791 14.4 19.6721 12.8793 18.9959 11.3586C18.8729 11.0793 18.627 10.831 18.4425 10.6138C18.2274 10.7069 18.0122 10.7379 17.9507 10.831C17.7048 11.2034 17.797 11.6379 17.8278 12.0414C18.2888 17.9689 20.6251 23.1827 23.8835 28.0551C23.9757 28.1793 24.0986 28.3345 24.2216 28.3965C24.3446 28.4586 24.5597 28.5517 24.6827 28.4896C24.8057 28.4586 24.9286 28.2414 24.8979 28.1172C24.8364 27.6207 24.7442 27.1241 24.5905 26.6586Z" />
                      <path d="M56.5302 83.9173C56.4072 83.8862 56.1613 83.9483 56.0998 84.0414C55.7924 84.7241 55.4851 85.4069 55.2699 86.1207C54.6243 88.1379 53.8251 90.0621 52.3189 91.5828C51.9192 91.9862 51.6119 92.5138 51.2737 93.0104C50.3208 94.4069 49.6753 95.9586 49.0912 97.5104C48.9682 97.8207 48.9682 98.1621 48.9375 98.5035C48.9375 98.6586 48.999 98.9379 49.0912 98.9379C49.3064 99 49.6445 99.0311 49.7675 98.9069C51.1815 97.2621 52.5033 95.5241 54.0095 93.9724C55.9461 91.8931 56.8376 89.4724 56.8683 86.6793C56.8683 86.3379 56.9298 85.9966 56.9606 85.469C56.9298 85.1897 56.9298 84.6931 56.8683 84.1966C56.8376 84.0724 56.6532 83.9173 56.5302 83.9173Z" />
                      <path d="M80.4469 37.086C81.031 37.1481 81.615 37.1791 82.1683 37.055C83.8897 36.7136 85.6112 36.6205 87.3633 36.7136C89.8533 36.9308 92.3124 36.4033 94.7716 36.124C95.079 36.0929 95.4171 35.9377 95.6938 35.7826C95.8167 35.7205 96.0319 35.4722 96.0012 35.4412C95.8782 35.2239 95.7245 35.0067 95.5401 34.9136C95.3249 34.7895 95.079 34.7584 94.8331 34.7274C92.5276 34.4791 90.2221 34.2619 87.9166 34.0446C85.2423 33.7653 82.8753 34.7895 80.5391 35.8446C80.3854 35.9067 80.2625 36.0308 80.1702 36.155C80.078 36.2791 79.9551 36.4964 80.0165 36.5895C80.078 36.7757 80.2625 37.055 80.4469 37.086Z" />
                      <path d="M78.4176 68.4311C78.2332 68.6173 78.1717 68.8656 78.3254 69.1139C78.4484 69.3311 78.5713 69.5484 78.7865 69.7035C80.7231 71.1001 82.0141 72.9932 83.2437 75.0104C84.3196 76.8104 85.7951 78.269 87.3936 79.6346C87.6088 79.8208 87.9469 80.069 88.2543 79.7587C88.3773 79.6035 88.4387 79.2311 88.3773 79.0759C87.0247 76.5001 85.7644 73.8621 84.0737 71.4725C82.8134 69.7346 80.8768 68.9277 78.9709 68.2139C78.6943 68.2759 78.5406 68.338 78.4176 68.4311Z" />
                      <path d="M18.9031 80.3173C16.1058 81.0621 13.8311 82.6759 11.8023 84.7242C11.7408 84.7863 11.6793 84.8483 11.6793 84.9104C11.6486 84.9725 11.6486 85.0966 11.6793 85.1587C11.7715 85.2518 11.9252 85.4069 12.0174 85.4069C12.2634 85.3759 12.5093 85.2828 12.7245 85.1587C16.0443 83.1414 19.6409 82.0242 23.4526 81.5276C23.9444 81.4656 24.4363 81.3725 24.8974 80.7207C22.8071 79.7897 20.8397 79.7897 18.9031 80.3173Z" />
                    </svg>
                  </figure>

                  <div className="card border p-4">
                    <h6>Recent Project</h6>
                    <img src="assets/images/about/07.jpg" className="card-img mb-3" alt="card image" />
                    <h6>Design webflow multipurpose SaaS theme</h6>
                    <ul className="nav nav-divider mb-2 mb-sm-3">
                      <li className="nav-item">Tuesday, Jan 28</li>
                      <li className="nav-item">11:30 PM</li>
                    </ul>
                    <div className="d-flex align-items-center mb-3">
                      <div className="avatar avatar-sm">
                        <img className="avatar-img rounded-circle" src="assets/images/avatar/02.jpg" alt="avatar" />
                      </div>
                      <div className="ms-2">
                        <small className="mb-0 fw-bold">Emma Watson</small>
                      </div>
                    </div>
                    <a href="#" className="btn btn-dark-soft mb-0">View case study</a>
                  </div>

                  <div className="bg-body rounded-4 shadow d-flex align-items-center position-absolute top-0 end-0 d-none d-sm-flex mt-n5 me-xl-n6 p-3">
                    <div className="avatar">
                      <img className="avatar-img rounded-circle" src="assets/images/avatar/05.jpg" alt="avatar" />
                    </div>
                    <div className="mx-3">
                      <h6 className="mb-0">Followers Gain</h6>
                      <small>Form the last 7 days</small>
                    </div>
                    <div className="badge bg-primary">24.7%</div>
                  </div>

                  <ul className="list-inline bg-body d-flex flex-column rounded shadow position-absolute top-0 start-0 d-none d-sm-flex p-2 mb-0 mt-3 ms-xl-n5">
                    <li className="list-inline-item me-0"> <a className="btn btn-xs btn-icon bg-facebook" href="#"><i className="fab fa-fw fa-facebook-f lh-base"></i></a> </li>
                    <li className="list-inline-item me-0"> <a className="btn btn-xs btn-icon bg-instagram" href="#"><i className="fab fa-fw fa-instagram lh-base"></i></a> </li>
                    <li className="list-inline-item me-0"> <a className="btn btn-xs btn-icon bg-twitter" href="#"><i className="fab fa-fw fa-twitter lh-base"></i></a> </li>
                    <li className="list-inline-item me-0"> <a className="btn btn-xs btn-icon bg-linkedin" href="#"><i className="fab fa-fw fa-linkedin-in lh-base"></i></a> </li>
                    <li className="list-inline-item me-0"> <a className="btn btn-xs btn-icon bg-youtube" href="#"><i className="fab fa-fw fa-youtube lh-base"></i></a> </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="pb-0"> */}
      <div className="container">
        <div className="row g-4 g-md-5">

          <div className="col-md-6 col-lg-4">
            <h2 className="mb-0">We Simplify. We Automate. We Transform.</h2>
            <p>Opsera’s ecosystem delivers unmatched value across the entire property and construction lifecycle.</p>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="card card-body border p-4 h-100">
              <h6 className="text-primary mb-4">01.</h6>
              <h5>Unified Operations</h5>
              <p className="mb-0">Opsera brings property management, construction, sales, hospitality, and estate operations into one seamless platform—removing fragmentation and enabling full oversight from a single dashboard.</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="card card-body border p-4 h-100">
              <h6 className="text-primary mb-4">02.</h6>
              <h5>Real-Time Transparency</h5>
              <p className="mb-0">Every activity, update, and financial movement is visible instantly, ensuring accountability, trust, and confident decision-making across all stakeholders. </p>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="card card-body border p-4 h-100">
              <h6 className="text-primary mb-4">03.</h6>
              <h5>Automated Workflows</h5>
              <p className="mb-0">From approvals to reporting to financial tracking, Opsera automates repetitive tasks—reducing human error, accelerating processes, and improving operational efficiency.</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="card card-body border p-4 h-100">
              <h6 className="text-primary mb-4">04.</h6>
              <h5>Data-Driven Insights</h5>
              <p className="mb-0">Our platform analyzes your operations, financials, and performance data to deliver insights that reveal opportunities, reduce risks, and drive measurable growth.</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="card card-body border p-4 h-100">
              <h6 className="text-primary mb-4">05.</h6>
              <h5>Faster Deliveries</h5>
              <p className="mb-0">Our tools streamline planning, communication, tracking, and execution—helping teams deliver projects and daily operations with speed, accuracy, and consistency.</p>
            </div>
          </div>

          <h6>We Turn Inefficiency Into Profit</h6>
          <p className="m-0">Through automation and optimization, we help businesses operate leaner, smarter, and more cost-effectively—directly increasing revenue and reducing waste.</p>
        </div>
      </div>
      {/* </section> */}


      {/* <section id="testimonials" className="pb-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-11">
              <div className="row align-items-center">
                <div className="col-lg-6 order-2 mt-5 mt-lg-0">
                  <div className="slider-container align-items-center">
                    <Slider {...sliderSettings2}>
                      <div className="swiper-slide card bg-transparent p-0 pe-md-7">
                        <img src="assets/images/team/03.jpg" className="rounded" alt="review-img" />

                        <div className="col-10 col-xl-9 card-body bg-body shadow rounded position-absolute end-0 bottom-0 p-xl-5 mb-4 me-4">

                          <p>We used to manage land sales manually, and it was messy. Since switching to Opsera Sales, we've seen a 60% reduction in delays and a huge boost in agent transparency.</p>
                          <ul className="list-inline mb-1">
                            <li className="list-inline-item small me-0"><i className="fas fa-star text-primary"></i></li>
                            <li className="list-inline-item small me-0"><i className="fas fa-star text-primary"></i></li>
                            <li className="list-inline-item small me-0"><i className="fas fa-star text-primary"></i></li>
                            <li className="list-inline-item small me-0"><i className="fas fa-star text-primary"></i></li>
                            <li className="list-inline-item small me-0"><i className="fas fa-star-half-alt text-primary"></i></li>
                          </ul>
                          <span className="heading-color fw-bold">Jacqueline Miller</span>
                          <p className="small mb-0">Head of marketing</p>
                        </div>
                      </div>

                      <div className="swiper-slide card bg-transparent p-0 pe-md-7">
                        <img src="assets/images/team/02.jpg" className="rounded" alt="review-img" />

                        <div className="col-10 col-xl-9 card-body bg-body shadow rounded position-absolute end-0 bottom-0 p-xl-5 mb-4 me-4">
                          <h6>"Transformed My Agency's Results"</h6>
                          <p>I can't say enough about the impact this platform has had on my agency. The automation tools, project management features, and seamless collaboration have transformed the way we work. </p>
                          <ul className="list-inline mb-1">
                            <li className="list-inline-item small me-0"><i className="fas fa-star text-primary"></i></li>
                            <li className="list-inline-item small me-0"><i className="fas fa-star text-primary"></i></li>
                            <li className="list-inline-item small me-0"><i className="fas fa-star text-primary"></i></li>
                            <li className="list-inline-item small me-0"><i className="fas fa-star text-primary"></i></li>
                            <li className="list-inline-item small me-0"><i className="fas fa-star-half-alt text-primary"></i></li>
                          </ul>
                          <span className="heading-color fw-bold">Allen Smith</span>
                          <p className="small mb-0">Digital Marketing Agency Owner</p>
                        </div>
                      </div>
                    </Slider>
                  </div>
                </div>

                <div className="col-lg-6 ms-auto order-1 order-lg-2">
                  <span className="text-primary fw-bold text-uppercase">Testimonials</span>
                  <p className="mb-4">Hear what our satisfied clients have to say about their experiences with our platform. Discover how we've helped agencies like yours achieve remarkable results.</p>
                  <div className="d-sm-flex gap-3">
                    <a href="/#get-started" className="btn btn-lg btn-dark mb-2 mb-sm-0">Get Started</a>
                    <a className="icon-link icon-link-hover heading-color text-primary-hover mb-0" href="/#features">Browse features<i className="bi bi-arrow-right"></i> </a>
                  </div>

                  <hr className="my-6" />

                  <div className="row row-cols-2 row-cols-sm-3 g-4 g-md-5 align-items-center">
                    <div className="col">
                      <img src="assets/images/client/01.svg" className="grayscale px-2" alt="client-img" />
                    </div>
                    <div className="col">
                      <img src="assets/images/client/02.svg" className="grayscale px-2" alt="client-img" />
                    </div>
                    <div className="col">
                      <img src="assets/images/client/03.svg" className="grayscale px-2" alt="client-img" />
                    </div>
                    <div className="col">
                      <img src="assets/images/client/04.svg" className="grayscale px-2" alt="client-img" />
                    </div>
                    <div className="col">
                      <img src="assets/images/client/05.svg" className="grayscale px-2" alt="client-img" />
                    </div>
                    <div className="col">
                      <img src="assets/images/client/07.svg" className="grayscale px-2" alt="client-img" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="avatar avatar-xl mb-md-4">
                <div className="swiper swiper-img-scale overflow-hidden">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <img className="avatar-img rounded-circle border border-2 border-white" src="assets/images/avatar/09.jpg" alt="avatar" />
                    </div>
                  </div>
                </div>
              </div>

              <h2 className="mb-lg-4">Hear from our satisfied clients ❤️</h2>
              <p className="mb-5">Read what our satisfied clients have to say about their experiences with our platform.</p>
            </div>

            <div className="col-lg-7 d-flex flex-column ms-auto">
              <div className="tab-content mb-lg-3" id="pills-tabContent">
                <div className="tab-pane fade" id="testi-one" role="tabpanel" aria-labelledby="testi-one-tab" tabIndex={0}>
                  <div className="icon-lg bg-dark text-white rounded-circle mb-3 mb-lg-4"><i className="bi bi-quote fa-xl"></i></div>
                  <ul className="list-inline mb-3 mb-lg-4">
                    <li className="list-inline-item me-0"><i className="fas fa-star text-warning"></i></li>
                    <li className="list-inline-item me-0"><i className="fas fa-star text-warning"></i></li>
                    <li className="list-inline-item me-0"><i className="fas fa-star text-warning"></i></li>
                    <li className="list-inline-item me-0"><i className="fas fa-star text-warning"></i></li>
                    <li className="list-inline-item me-0"><i className="fas fa-star-half-alt text-warning"></i></li>
                  </ul>
                  <h6 className="mb-2">"Transformed My Agency's Results"</h6>
                  <p className="heading-color">As an employer, the platform exceeded my expectations. We swiftly found top-tier talent for our company, thanks to the user-friendly interface and the ability to connect with candidates that perfectly fit our requirements.</p>
                </div>

                <div className="tab-pane fade show active" id="testi-two" role="tabpanel" aria-labelledby="testi-two-tab" tabIndex={0}>
                  <div className="icon-lg bg-dark text-white rounded-circle mb-3 mb-lg-4"><i className="bi bi-quote fa-xl"></i></div>
                  <ul className="list-inline mb-3 mb-lg-4">
                    <li className="list-inline-item me-0"><i className="fas fa-star text-warning"></i></li>
                    <li className="list-inline-item me-0"><i className="fas fa-star text-warning"></i></li>
                    <li className="list-inline-item me-0"><i className="fas fa-star text-warning"></i></li>
                    <li className="list-inline-item me-0"><i className="fas fa-star text-warning"></i></li>
                    <li className="list-inline-item me-0"><i className="fas fa-star-half-alt text-warning"></i></li>
                  </ul>
                  <h6 className="mb-2">"Transformed My Agency's Results"</h6>
                  <p className="heading-color">As an employer, the platform exceeded my expectations. We swiftly found top-tier talent for our company, thanks to the user-friendly interface and the ability to connect with candidates that perfectly fit our requirements.</p>
                </div>

                <div className="tab-pane fade" id="testi-three" role="tabpanel" aria-labelledby="testi-three-tab" tabIndex={0}>
                  <div className="icon-lg bg-dark text-white rounded-circle mb-3 mb-lg-4"><i className="bi bi-quote fa-xl"></i></div>
                  <ul className="list-inline mb-3 mb-lg-4">
                    <li className="list-inline-item me-0"><i className="fas fa-star text-warning"></i></li>
                    <li className="list-inline-item me-0"><i className="fas fa-star text-warning"></i></li>
                    <li className="list-inline-item me-0"><i className="fas fa-star text-warning"></i></li>
                    <li className="list-inline-item me-0"><i className="fas fa-star text-warning"></i></li>
                    <li className="list-inline-item me-0"><i className="fas fa-star-half-alt text-warning"></i></li>
                  </ul>
                  <h6 className="mb-2">"Transformed My Agency's Results"</h6>
                  <p className="heading-color">As an employer, the platform exceeded my expectations. We swiftly found top-tier talent for our company, thanks to the user-friendly interface and the ability to connect with candidates that perfectly fit our requirements.</p>
                </div>
              </div>

              <div className="nav nav-pills nav-pills-testimonial nav-justified mb-4 mb-lg-0" id="pills-tab" role="tablist">
                <div className="nav-item" role="presentation">
                  <div className="nav-link d-flex align-items-center text-start p-3" id="testi-one-tab" data-bs-toggle="pill" data-bs-target="#testi-one" role="tab" aria-controls="testi-one" aria-selected="true">
                    <div className="avatar flex-shrink-0">
                      <img className="avatar-img rounded-circle" src="assets/images/avatar/04.jpg" alt="avatar" />
                    </div>
                    <div className="ms-2">
                      <h6 className="mb-0">Louis Ferguson</h6>
                      <p className="mb-0 small">Web Developer</p>
                    </div>
                  </div>
                </div>

                <div className="nav-item" role="presentation">
                  <div className="nav-link d-flex align-items-center text-start p-3 active" id="testi-two-tab" data-bs-toggle="pill" data-bs-target="#testi-two" role="tab" aria-controls="testi-two" aria-selected="false">
                    <div className="avatar flex-shrink-0">
                      <img className="avatar-img rounded-circle" src="assets/images/avatar/05.jpg" alt="avatar" />
                    </div>
                    <div className="ms-2">
                      <h6 className="mb-0">Emma Watson</h6>
                      <p className="mb-0 small">Co-Founder</p>
                    </div>
                  </div>
                </div>

                <div className="nav-item" role="presentation">
                  <div className="nav-link d-flex align-items-center text-start p-3" id="testi-three-tab" data-bs-toggle="pill" data-bs-target="#testi-three" role="tab" aria-controls="testi-three" aria-selected="false">
                    <div className="avatar flex-shrink-0">
                      <img className="avatar-img rounded-circle" src="assets/images/avatar/06.jpg" alt="avatar" />
                    </div>
                    <div className="ms-2">
                      <h6 className="mb-0">Samuel Bishop</h6>
                      <p className="mb-0 small">Product designer</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section id='faqs' className="bg-light mt-8">
        <div className="container">

          <div className="row align-items-center">
            <div className="col-lg-5 mb-5 mb-sm-0">
              <h2 className="mb-4">Frequently Asked Questions</h2>
              <p className="mb-4">Need a help with something? Here are our most frequently asked questions.</p>
            </div>

            <div className="col-lg-7 ps-xl-6">
              <div className="accordion accordion-icon accordion-border" id="accordionFaq">
                <div className="accordion-item mb-3">
                  <div className="accordion-header font-base" id="heading-1">
                    <button className="accordion-button fw-semibold rounded collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-1" aria-expanded="true" aria-controls="collapse-1">
                      How many items are there on this list?
                    </button>
                  </div>
                  <div id="collapse-1" className="accordion-collapse collapse show" aria-labelledby="heading-1" data-bs-parent="#accordionFaq">
                    <div className="accordion-body mt-3 pb-0">
                      Was out laughter raptures returned outweigh. Luckily cheered colonel I do we attack highest enabled. Tried law yet style child. The bore of true of no be deal. Drawings offended yet answered Jennings perceive laughing six did far. Rooms oh fully taken by worse do. Points afraid but may end law lasted.
                    </div>
                  </div>
                </div>

                <div className="accordion-item mb-3">
                  <div className="accordion-header font-base" id="heading-2">
                    <button className="accordion-button fw-semibold rounded collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-2" aria-expanded="false" aria-controls="collapse-2">
                      Can you describe mizzle in just one sentence?
                    </button>
                  </div>
                  <div id="collapse-2" className="accordion-collapse collapse" aria-labelledby="heading-2" data-bs-parent="#accordionFaq">
                    <div className="accordion-body mt-3">
                      September how men saw tolerably two behavior arranging. She offices for highest and replied one venture pasture. Applauded no discovery in newspaper allowance am northward. Frequently partiality possession resolution at or appearance unaffected me. Engaged its was the evident pleased husband. Ye goodness felicity do disposal dwelling no. First am plate jokes to began to cause a scale. Subjects he prospect elegance followed no overcame possible it on. Improved own provided blessing may peculiar domestic. Sight house has sex never. No visited raising gravity outward subject my cottage Mr be.
                    </div>
                  </div>
                </div>

                <div className="accordion-item mb-3">
                  <div className="accordion-header font-base" id="heading-3">
                    <button className="accordion-button fw-semibold collapsed rounded" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-3" aria-expanded="false" aria-controls="collapse-3">
                      What services do agencies provide?
                    </button>
                  </div>
                  <div id="collapse-3" className="accordion-collapse collapse" aria-labelledby="heading-3" data-bs-parent="#accordionFaq">
                    <div className="accordion-body mt-3">
                      Agencies provide a wide range of services depending on their specialization. Some common services include advertising campaigns, digital marketing, branding, creative design, media planning and buying, public relations, talent management, event planning, and market research.
                    </div>
                  </div>
                </div>

                <div className="accordion-item mb-3">
                  <div className="accordion-header font-base" id="heading-4">
                    <button className="accordion-button fw-semibold collapsed rounded" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-4" aria-expanded="false" aria-controls="collapse-4">
                      How do I choose the right agency for my needs?
                    </button>
                  </div>
                  <div id="collapse-4" className="accordion-collapse collapse" aria-labelledby="heading-4" data-bs-parent="#accordionFaq">
                    <div className="accordion-body mt-3">
                      When selecting an agency, consider your specific requirements, budget, and the agency's expertise and track record in your industry. Research their portfolio, client testimonials, and case studies to gauge their capabilities. It's also important to meet with the agency to assess their communication style and ensure they align with your goals.
                    </div>
                  </div>
                </div>

                <div className="accordion-item mb-3">
                  <div className="accordion-header font-base" id="heading-5">
                    <button className="accordion-button fw-semibold collapsed rounded" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-5" aria-expanded="false" aria-controls="collapse-5">
                      What are the advantages of hiring an agency?
                    </button>
                  </div>
                  <div id="collapse-5" className="accordion-collapse collapse" aria-labelledby="heading-5" data-bs-parent="#accordionFaq">
                    <div className="accordion-body mt-3">
                      Hiring an agency offers several benefits, such as access to specialized skills and expertise, industry insights, creative thinking, established networks, and resources. Agencies can provide fresh perspectives, save time and effort, and help you achieve your objectives more effectively.
                    </div>
                  </div>
                </div>

                <div className="accordion-item mb-3">
                  <div className="accordion-header font-base" id="heading-6">
                    <button className="accordion-button fw-semibold collapsed rounded" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-6" aria-expanded="false" aria-controls="collapse-6">
                      How long does it take for an agency to deliver results?
                    </button>
                  </div>
                  <div id="collapse-6" className="accordion-collapse collapse" aria-labelledby="heading-6" data-bs-parent="#accordionFaq">
                    <div className="accordion-body mt-3">
                      The timeframe for achieving results depends on the nature of the project and its complexity. Short-term campaigns may yield results within weeks, while long-term strategies may take several months or even years to show significant impact. Effective collaboration, clear goals, and realistic expectations can help expedite the process.
                    </div>
                  </div>
                </div>

                <div className="accordion-item mb-3">
                  <div className="accordion-header font-base" id="heading-7">
                    <button className="accordion-button fw-semibold collapsed rounded" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-7" aria-expanded="false" aria-controls="collapse-7">
                      How can I measure the success of agency campaigns or services?
                    </button>
                  </div>
                  <div id="collapse-7" className="accordion-collapse collapse" aria-labelledby="heading-7" data-bs-parent="#accordionFaq">
                    <div className="accordion-body mt-3">
                      Success metrics depend on the goals and objectives of your project. Common metrics include increased sales or revenue, improved brand recognition, website traffic growth, social media engagement, lead generation, customer acquisition, or positive media coverage. Work with the agency to define key performance indicators (KPIs) and establish measurement mechanisms.
                    </div>
                  </div>
                </div>

                <div className="accordion-item mb-3">
                  <div className="accordion-header font-base" id="heading-8">
                    <button className="accordion-button fw-semibold collapsed rounded" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-8" aria-expanded="false" aria-controls="collapse-8">
                      Can I terminate my contract with an agency if I'm not satisfied?
                    </button>
                  </div>
                  <div id="collapse-8" className="accordion-collapse collapse" aria-labelledby="heading-8" data-bs-parent="#accordionFaq">
                    <div className="accordion-body mt-3">
                      Yes, you can terminate your contract with an agency if you're not satisfied, although the specific terms of termination should be outlined in the contract. It's advisable to communicate any concerns or issues with the agency first to see if they can address them. If the relationship is not salvageable, you may need to follow the agreed-upon termination procedures.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section className="position-relative z-index-2 py-0 mb-n7">
        <div className="container position-relative">
          <div className="bg-primary rounded position-relative overflow-hidden p-4 p-sm-5">

            <figure className="position-absolute top-0 start-0 ms-n8">
              <svg width="371" height="354" viewBox="0 0 371 354" fill="none" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="172.5" cy="176.5" rx="131.5" ry="125.5" fill="url(#paint0_linear_195_2)"></ellipse>
                <ellipse cx="185.5" cy="177" rx="185.5" ry="177" fill="url(#paint1_linear_195_2)"></ellipse>
                <defs>
                  <linearGradient id="paint0_linear_195_2" x1="172.5" y1="51" x2="172.5" y2="302" gradientUnits="userSpaceOnUse">
                    <stop offset="0.0569271" stop-color="#D9D9D9" stop-opacity="0.5"></stop>
                    <stop offset="0.998202" stop-color="#D9D9D9" stop-opacity="0"></stop>
                  </linearGradient>
                  <linearGradient id="paint1_linear_195_2" x1="185.5" y1="0" x2="185.5" y2="354" gradientUnits="userSpaceOnUse">
                    <stop offset="0.0569271" stop-color="#D9D9D9" stop-opacity="0.2"></stop>
                    <stop offset="0.998202" stop-color="#D9D9D9" stop-opacity="0"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </figure>

            <div className="position-absolute end-0 bottom-0 me-sm-5">
              <img src="assets/images/elements/cta-vector.svg" className="h-200px" alt="vector-img" />
            </div>

            <div className="row g-4 position-relative">
              <div className="col-lg-7 mx-auto text-center">
                <h2 className="text-white mb-4">Take Your Business to the Next Level</h2>
                <p className="text-white mb-4">Explore the possibilities and discover how integrating with [Your SaaS Product] can take your business to the next level.</p>
                <a href="#" className="btn btn-dark">Optimize Your Workflow</a>
              </div>

            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
