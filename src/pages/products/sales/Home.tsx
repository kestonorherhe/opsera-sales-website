import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header2 from "../../../components/Header2";

function Home() {
  const sliderSettings = {
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
  const sliderSettings2 = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    // responsive: [
    //   {
    //     breakpoint: 992,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 1,
    //     },
    //   },
    //   {
    //     breakpoint: 768,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //     },
    //   },
    // ],
  };
  return (
    <main>
      <Header2 />


      <section id="home" className="overflow-hidden pt-xl-8 mb-n6 parallax-wrap">
        <div className="container position-relative zindex-5 pt-5">
          <div className="row justify-content-xl-start justify-content-center flex-xl-nowrap">
            <div className="col-xl-6 ps-xl-5 mb-8 mb-xl-0">
              <span className="text-primary fw-bold text-uppercase" style={{ fontSize: 'small' }}>Built exclusively for real estate businesses 2.</span>
              <h1 className="mt-4">Sell Properties with Confidence. Manage Sales with Ease.</h1>
              <p className="mt-4">Opsera Sales helps real estate agencies and agents manage sales applications, leads, affiliates, and commissions—all from a single, powerful platform.</p>
              <div className="d-flex gap-3 gap-sm-4 flex-wrap mt-4 mt-md-5">
                <a href="/#features" className="btn btn-lg btn-dark mb-0" type="button">Discover features</a>
                <a className="icon-link icon-link-hover heading-color text-primary-hover mb-0" href="/#get-started">Get started<i className="bi bi-arrow-right"></i> </a>
              </div>

              <hr className="my-4 my-sm-6" />
              <ul className="list-inline d-flex flex-wrap gap-2 gap-sm-4 mb-0 mt-4 mt-xl-5">
                <li className="list-inline-item heading-color"> <i className="bi bi-stopwatch me-1"></i>24/7 Supports</li>
                <li className="list-inline-item heading-color"> <i className="bi bi-fire me-1"></i>Free updates</li>
                <li className="list-inline-item heading-color"> <i className="bi bi-life-preserver me-1"></i>Access premium doc</li>
              </ul>
            </div>

            <div className="col-xl-10 d-flex rotate-343 position-relative aos z-index-2" data-aos="zoom-in-up" data-aos-delay="200" data-aos-duration="1000" data-aos-easing="ease-in-out">
              <img src="assets/images/bg/hero.png" className="rounded-4 position-relative" alt="" />
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="bg-dark position-relative overflow-hidden" data-bs-theme="dark">

        <figure className="position-absolute top-0 start-0 mt-n6 ms-n8">
          <svg className="opacity-3" width="371" height="354" viewBox="0 0 371 354" fill="none" xmlns="http://www.w3.org/2000/svg">
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

        <figure className="position-absolute top-0 end-0 me-n9 mt-n7 d-none d-md-block">
          <svg className="fill-white" width="768.8px" height="1386px" viewBox="0 0 768.8 1386">
            <path d="M647.6,748.4c1.9,6,3.3,12.2,3.8,18.4c2.2,18.9-0.7,38.9-9.1,61.5c-15.6,41.9-47.8,85.3-81.6,131.5 c-46.1,63.1-94.5,128.4-108.1,199.1c-15.7,80.6,17.2,154.5,101.1,226.1l-0.4,0.4c-188.1-160.7-84.4-301.8,7.3-426.2 c33.9-46,65.8-89.6,81.4-131.2c17.5-46.8,11.8-84.9-18-119.6c-39.6-46.6-86.5-86.9-135.7-129.3C339.1,450.3,184.9,317.3,240.6,4.6 l0.6,0.1C185.7,317,339.7,450.1,488.7,578.7c49.3,42.7,95.8,82.8,135.8,129.6C635.5,721,643.1,734.2,647.6,748.4z"></path>
            <path d="M636.2,722.3c23.4,73.7-25.2,149.2-76.5,228.7c-40.8,63.5-83,129.1-91.9,198.3c-9.9,78.2,25.9,150,109.6,219 l-0.4,0.7c-45-37.1-75.4-74-93.5-112.7c-15.9-34.5-21.2-69.5-16.5-106.8c8.9-69.5,51-135.1,91.9-198.6 C616.4,861.3,671,776.5,622,694.1c-39.6-66.6-102.4-118.8-169-174.2c-68.7-57.3-140-116.4-188.1-195.3 c-25.9-42.6-42.9-86.9-51.5-135.2c-9.8-54.6-9.2-112.9,2-177.9l0.6,0.1c-46.5,271.4,97.9,391.7,237.5,507.9 c66.7,55.4,129.4,107.7,169.1,174.5C628.8,702.7,633.1,712.6,636.2,722.3z"></path>
            <path d="M624.6,687.5c11.7,37,10.5,76.9-3.8,121.9c-13.7,43.3-38.1,87.4-61.8,130.2c-35.7,64.2-72.5,130.4-76.3,198.6 c-4.4,76.5,34.5,146.1,118.7,213.3l-0.6,0.8c-188.5-150.2-114.3-284-42.6-413.2c49.3-88.7,95.7-172.7,62.4-260.6 c-31.5-83-108.5-141.7-189.7-204C363,422.5,293.2,369,244.9,298c-26.1-38.5-43.3-78.4-53-121.8C181.2,127,180.6,75,190.2,16.8l0.9,0 C151,259.3,293.5,368.3,431.2,473.7c81.5,62.2,158.3,121.3,190.1,204.2C622.6,681.2,623.6,684.4,624.6,687.5z"></path>
            <path d="M614.6,642.5c2.2,6.8,4.1,13.7,5.4,20.8c18.1,91.8-22.3,177.4-61.1,260.2c-32.2,68.8-62.8,133.6-62.1,201.3 c0.8,76.3,41.6,143,128.7,209.2l-0.6,0.8c-46.1-35.1-78.8-70-100.3-106.8c-19.1-32.9-28.6-66.6-28.9-103.1 c-0.6-67.6,29.8-132.7,62.3-201.6c38.8-82.7,79-168.2,60.9-259.8c-19.1-96.7-109.2-158.6-204.5-224.2 c-68.3-47.1-139.2-95.6-188.9-160.4c-56.1-73.2-75.8-157-60.3-255.8l0.9,0c-34.9,220.7,109.1,319.7,248.6,415.2 C503.4,499.3,587.6,557.2,614.6,642.5z"></path>
            <path d="M610.8,603.9c4.4,13.9,7.1,28.7,7.8,44.6c3.6,91.5-28.4,172.7-59.3,251.2c-28.5,72.3-55.1,140.5-50.2,208.8 c5.2,76.6,49.9,143,140.1,208.8l-0.4,0.7c-90.5-66-135.2-132.4-140.8-209.2c-5-68.6,21.9-136.9,50.3-209.4 c30.9-78.5,62.6-159.6,59.1-250.9c-4.2-109-107.3-171.8-216.8-238.5c-70.1-42.7-142.8-87-194.2-146.1 c-58.1-66.8-79.9-143.6-66-234.6l1,0.3c-30.7,202.9,117.1,292.9,259.8,379.6C494.9,466.2,584.1,520.8,610.8,603.9z"></path>
            <path d="M610.7,570.7c6.1,19.2,8.4,40.1,6,62.8c-8.3,84.1-33.8,160.3-55.9,227.3c-27.6,83.2-51.4,154.9-42.7,226 c9.5,78.4,58.7,146,155,213l-0.6,0.8c-96.5-66.7-145.8-134.6-155.4-213.2c-8.8-71.4,15.2-143.4,42.8-226.7 c22.3-67.1,47.6-143.3,55.9-227.3c12-120.7-104.2-182.9-227.6-248.9c-72.3-38.6-147.1-78.7-200.6-132.7 c-60.6-61-84.2-131.8-72-216.2l1.2,0.2C89.9,223.5,242,305,389.1,383.7C488.9,437.2,584.6,488.6,610.7,570.7z"></path>
            <path d="M613,540.8c7.3,23.1,8.5,48.7,1.9,77.9c-14,63.3-31.8,122.1-47.4,173.8c-30,99.3-56,185.2-45,263.4 c11.7,84.3,67.2,156.6,174.2,227.2l-0.5,1c-56.6-37.2-98.1-74.3-126.8-113.1c-26.6-35.7-42.3-73.2-47.9-114.7 c-11.1-78.8,14.9-164.4,45.1-264c15.7-51.7,33.4-110.5,47.5-173.6C643.5,486.7,513.4,426,375.8,361.9 c-74.9-34.9-152.2-71-207.6-120.1c-63-55.7-88.3-121-78-199.6l1.1-0.1c-10.5,78.1,14.8,143.1,77.7,198.6 c55.4,49.1,132.7,85.3,207.5,119.9C484,410.7,587.1,458.9,613,540.8z"></path>
            <path d="M617.2,512.9c8.3,26.2,8,56.1-3.5,90.9c-5.6,17.1-11.2,33.9-16.5,50c-47.8,143.4-85.7,256.4-76.5,351.9 c9.7,99.7,71.5,180,200.4,260.4l-0.5,1c-67.3-41.9-115.6-83.2-148.1-126.6c-30.9-41-48.1-85.2-52.8-134.8 c-9.3-95.8,28.8-208.9,76.6-352.3c5.6-16.2,10.9-32.9,16.5-50c47.5-143.5-96.3-201.6-248.6-263.1c-77.7-31.1-157.6-63.5-215.4-108.2 C83.3,181.7,56.1,121.4,65.2,48l1.2,0.2c-9,72.7,18.1,132.8,83.1,183c57.8,44.6,137.6,76.8,214.8,108.1 C480.2,386,591.2,431,617.2,512.9z"></path>
            <path d="M622.4,486.7c9.6,30.2,6.1,63.9-10.3,102.3C465,933,463,1084.4,745.1,1249l-0.8,1.1 c-143.5-83.6-211.5-162.5-227.9-263.5c-17.4-106.8,25.3-236.4,94.5-398.1c18.6-43.4,20.4-80.4,6-113.1 C583.7,401.1,471.1,362,351.5,320.8C189.7,265,22.7,207.3,40,54.3l1.2,0.2C23.8,206.4,190.5,263.8,351.7,319.6 C471.4,361,584.6,400,617.6,475C619.7,478.9,621.2,482.8,622.4,486.7z"></path>
            <path d="M628.6,461.4c10.3,32.5,4.4,69.6-18,112.8c-93.9,182.2-122.9,308.3-94.5,408.8c26.1,92.5,101.7,167,252.8,249 l-0.8,1.1c-151.5-82.5-227.2-157.2-253.6-249.9c-28.5-100.7,0.5-227.1,94.5-409.9c24.3-47.3,29-87.1,14.3-121.5 c-32.7-76-155.1-112-284.6-149.7C172.6,253.7,0.1,203.5,15.1,60.4l1.2,0.2c-14.6,141.8,157,191.9,323.2,240.6 c129.9,37.9,252.4,73.9,285.3,150.4C626.2,454.9,627.5,458,628.6,461.4z"></path>
          </svg>
        </figure>

        <div className="container pb-6 position-relative">
          <div className="inner-container-small text-center mb-4 mb-sm-5">
            <span className="fw-bold text-uppercase" style={{ color: '#FFA600' }}>Features</span>
            <h2 className="mb-0 mt-3">Designed for Real Estate Sales agencies</h2>
          </div>

          <div className="row">
            <div className="col-lg-12 col-xl-10 col-xxl-8 mx-auto mb-6 mb-xl-8">
              <div className="bg-light rounded-pill p-2">
                <ul className="nav nav-pills nav-pills-primary nav-responsive justify-content-between">
                  <li className="nav-item" role="presentation">
                    <button className="nav-link rounded-pill active" id="pills-analytics-tab" data-bs-toggle="pill" data-bs-target="#pills-analytics" type="button" role="tab" aria-controls="pills-analytics" aria-selected="true"><i className="bi bi-funnel me-2"></i>Leads</button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link rounded-pill" id="pills-collaboration-tab" data-bs-toggle="pill" data-bs-target="#pills-collaboration" type="button" role="tab" aria-controls="pills-collaboration" aria-selected="false"><i className="bi bi-basket me-2"></i>Sales</button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link rounded-pill" id="pills-commissions-tab" data-bs-toggle="pill" data-bs-target="#pills-commissions" type="button" role="tab" aria-controls="pills-commissions" aria-selected="false"><i className="bi bi-basket me-2"></i>Commissions & Rewards</button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link rounded-pill" id="pills-properties-tab" data-bs-toggle="pill" data-bs-target="#pills-properties" type="button" role="tab" aria-controls="pills-properties" aria-selected="false"><i className="bi bi-basket me-2"></i>Properties</button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link rounded-pill" id="pills-affiliates-tab" data-bs-toggle="pill" data-bs-target="#pills-affiliates" type="button" role="tab" aria-controls="pills-affiliates" aria-selected="false"><i className="bi bi-basket me-2"></i>Affiliates</button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link rounded-pill" id="pills-reports-tab" data-bs-toggle="pill" data-bs-target="#pills-reports" type="button" role="tab" aria-controls="pills-reports" aria-selected="false"><i className="bi bi-basket me-2"></i>Reports</button>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-11 mx-auto">
              <div className="tab-content" id="pills-tabContent">
                <div className="tab-pane fade show active" id="pills-analytics" role="tabpanel" aria-labelledby="pills-analytics-tab" tabIndex={0}>
                  <div className="row align-items-center">
                    <div className="col-lg-6 mb-6 mb-lg-0">
                      <span className="bg-primary text-uppercase text-white rounded small px-3 py-2">Leads</span>
                      <h3 className="my-4">Convert More Leads Without Dropping the Ball</h3>
                      <p>Turn raw inquiries into closed deals faster. Organize, assign, and follow up with leads without letting anyone slip through the cracks.</p>
                      <ul className="list-group list-group-borderless mb-4">
                        <li className="list-group-item heading-color mb-0"><i className="bi bi-patch-check-fill me-2" style={{ color: '#FFA600' }}></i>Automatically collect and qualify leads from forms or campaigns</li>
                        <li className="list-group-item heading-color mb-0"><i className="bi bi-patch-check-fill me-2" style={{ color: '#FFA600' }}></i>Assign leads to in-house staff or affiliates</li>
                        <li className="list-group-item heading-color mb-0"><i className="bi bi-patch-check-fill me-2" style={{ color: '#FFA600' }}></i>Get reminders to follow up based on lead activity</li>
                        <li className="list-group-item heading-color mb-0"><i className="bi bi-patch-check-fill me-2" style={{ color: '#FFA600' }}></i>Track conversion performance in real time</li>
                      </ul>
                      <a className="btn btn-white icon-link icon-link-hover" href="/#get-started">Get started<i className="bi bi-arrow-right"></i> </a>
                    </div>

                    <div className="col-lg-5 position-relative ms-auto">
                      <img src="assets/images/services/leeds.png" alt="feature-img" />
                    </div>
                  </div>
                </div>

                <div className="tab-pane fade" id="pills-collaboration" role="tabpanel" aria-labelledby="pills-collaboration-tab" tabIndex={0}>
                  <div className="row align-items-center">
                    <div className="col-lg-6 mb-6 mb-lg-0">
                      <span className="bg-primary text-white text-uppercase rounded small px-3 py-2">Sales</span>
                      <h3 className="my-4">Streamline Sales Application from Start to Finish</h3>
                      <p className="mb-5">Track every sales application—from initial submission to final allocation—in one clean dashboard.</p>

                      <ul className="list-group list-group-borderless mb-4">
                        <li className="list-group-item heading-color mb-0"><i className="bi bi-patch-check-fill me-2" style={{ color: '#FFA600' }}></i>Approve or reject applications with full documentation</li>
                        <li className="list-group-item heading-color mb-0"><i className="bi bi-patch-check-fill me-2" style={{ color: '#FFA600' }}></i>View status by property, buyer, or agent</li>
                        <li className="list-group-item heading-color mb-0"><i className="bi bi-patch-check-fill me-2" style={{ color: '#FFA600' }}></i>Save time by eliminating paperwork and back-and-forth emails</li>
                        <li className="list-group-item heading-color mb-0"><i className="bi bi-patch-check-fill me-2" style={{ color: '#FFA600' }}></i> Improve trust by giving customers clarity on their application stage</li>
                      </ul>
                      <a className="btn btn-white icon-link icon-link-hover" href="/#get-started">Get started<i className="bi bi-arrow-right"></i> </a>
                    </div>

                    <div className="col-lg-5 position-relative ms-auto">
                      <img src="assets/images/services/sales.png" className="rounded" alt="feature-img" />
                    </div>
                  </div>
                </div>

                <div className="tab-pane fade" id="pills-commissions" role="tabpanel" aria-labelledby="pills-commissions-tab" tabIndex={0}>
                  <div className="row align-items-center">
                    <div className="col-lg-6 mb-6 mb-lg-0">
                      <span className="bg-primary text-white text-uppercase rounded small px-3 py-2">Commissions & Rewards</span>
                      <h3 className="my-4">Effortless Commission Tracking for Agents & Affiliates</h3>
                      <p className="mb-5">Stop managing commissions with spreadsheets. Let affiliates track their earnings and focus on selling.</p>

                      <ul className="list-group list-group-borderless mb-4">
                        <li className="list-group-item heading-color mb-0"><i className="bi bi-patch-check-fill me-2" style={{ color: '#FFA600' }}></i>See how much each agent or affiliate has earned</li>
                        <li className="list-group-item heading-color mb-0"><i className="bi bi-patch-check-fill me-2" style={{ color: '#FFA600' }}></i>Automatically calculate commissions on closed deals</li>
                        <li className="list-group-item heading-color mb-0"><i className="bi bi-patch-check-fill me-2" style={{ color: '#FFA600' }}></i>Allow affiliates to view earnings, request withdrawals, and track payout status</li>
                        <li className="list-group-item heading-color mb-0"><i className="bi bi-patch-check-fill me-2" style={{ color: '#FFA600' }}></i>Reduce disputes, errors, and overpayments</li>
                      </ul>
                      <a className="btn btn-white icon-link icon-link-hover" href="/#get-started">Get started<i className="bi bi-arrow-right"></i> </a>
                    </div>

                    <div className="col-lg-5 position-relative ms-auto">
                      <img src="assets/images/services/rewards.png" className="rounded" alt="feature-img" />
                    </div>
                  </div>
                </div>

                <div className="tab-pane fade" id="pills-properties" role="tabpanel" aria-labelledby="pills-properties-tab" tabIndex={0}>
                  <div className="row align-items-center">
                    <div className="col-lg-6 mb-6 mb-lg-0">
                      <span className="bg-primary text-white text-uppercase rounded small px-3 py-2">Properties</span>
                      <h3 className="my-4">One Platform to Manage All Your Property Listings</h3>
                      <p className="mb-5">Whether you're selling land plots, individual units, or entire estates, Opsera gives you control over your property listings.</p>

                      <ul className="list-group list-group-borderless mb-4">
                        <li className="list-group-item heading-color mb-0"><i className="bi bi-patch-check-fill me-2" style={{ color: '#FFA600' }}></i>Add and categorize properties by location, type, status (available, sold, pending)</li>
                        <li className="list-group-item heading-color mb-0"><i className="bi bi-patch-check-fill me-2" style={{ color: '#FFA600' }}></i>Break down estates into units or plots with pricing per item</li>
                        <li className="list-group-item heading-color mb-0"><i className="bi bi-patch-check-fill me-2" style={{ color: '#FFA600' }}></i>Know what's available, what's sold, and what’s being negotiated</li>
                        <li className="list-group-item heading-color mb-0"><i className="bi bi-patch-check-fill me-2" style={{ color: '#FFA600' }}></i>Attach documentation, images, and allocation notes</li>
                      </ul>
                      <a className="btn btn-white icon-link icon-link-hover" href="/#get-started">Get started<i className="bi bi-arrow-right"></i> </a>
                    </div>

                    <div className="col-lg-5 position-relative ms-auto">
                      <img src="assets/images/services/properties.png" className="rounded" alt="feature-img" />
                    </div>
                  </div>
                </div>

                <div className="tab-pane fade" id="pills-affiliates" role="tabpanel" aria-labelledby="pills-affiliates-tab" tabIndex={0}>
                  <div className="row align-items-center">
                    <div className="col-lg-6 mb-6 mb-lg-0">
                      <span className="bg-primary text-white text-uppercase rounded small px-3 py-2">Affiliates</span>
                      <h3 className="my-4">Organize and Optimize Affiliate Performance</h3>
                      <p className="mb-5">Handle hundreds of agents and partners without stress. Structure affiliate tiers, permissions, and activity tracking easily.</p>

                      <ul className="list-group list-group-borderless mb-4">
                        <li className="list-group-item heading-color mb-0"><i className="bi bi-patch-check-fill me-2" style={{ color: '#FFA600' }}></i>Approve or suspend affiliates in one click</li>
                        <li className="list-group-item heading-color mb-0"><i className="bi bi-patch-check-fill me-2" style={{ color: '#FFA600' }}></i>Assign special commission rates or sales packages</li>
                        <li className="list-group-item heading-color mb-0"><i className="bi bi-patch-check-fill me-2" style={{ color: '#FFA600' }}></i>Monitor who is selling what—and how much</li>
                        <li className="list-group-item heading-color mb-0"><i className="bi bi-patch-check-fill me-2" style={{ color: '#FFA600' }}></i>Keep affiliates accountable with transparent performance tracking</li>
                      </ul>
                      <a className="btn btn-white icon-link icon-link-hover" href="/#get-started">Get started<i className="bi bi-arrow-right"></i> </a>
                    </div>

                    <div className="col-lg-5 position-relative ms-auto">
                      <img src="assets/images/services/affiliates.png" className="rounded" alt="feature-img" />
                    </div>
                  </div>
                </div>

                <div className="tab-pane fade" id="pills-reports" role="tabpanel" aria-labelledby="pills-reports-tab" tabIndex={0}>
                  <div className="row align-items-center">
                    <div className="col-lg-6 mb-6 mb-lg-0">
                      <span className="bg-primary text-white text-uppercase rounded small px-3 py-2">Reports</span>
                      <h3 className="my-4">Data-Driven Insights for Smarter Real Estate Decisions</h3>
                      <p className="mb-5">Make smarter decisions with real-time data on your sales, agents, and business performance.</p>

                      <ul className="list-group list-group-borderless mb-4">
                        <li className="list-group-item heading-color mb-0"><i className="bi bi-patch-check-fill me-2" style={{ color: '#FFA600' }}></i>Visualize sales performance over time</li>
                        <li className="list-group-item heading-color mb-0"><i className="bi bi-patch-check-fill me-2" style={{ color: '#FFA600' }}></i>Identify top-performing agents and affiliates</li>
                        <li className="list-group-item heading-color mb-0"><i className="bi bi-patch-check-fill me-2" style={{ color: '#FFA600' }}></i>Forecast sales revenue and trends</li>
                        <li className="list-group-item heading-color mb-0"><i className="bi bi-patch-check-fill me-2" style={{ color: '#FFA600' }}></i>Download data-rich reports for investors or internal review</li>
                      </ul>
                      <a className="btn btn-white icon-link icon-link-hover" href="/#get-started">Get started<i className="bi bi-arrow-right"></i> </a>
                    </div>

                    <div className="col-lg-5 position-relative ms-auto">
                      <img src="assets/images/services/reports.png" className="rounded" alt="feature-img" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-0">
        <div className="container">
          <div className="row align-items-center mb-4 mb-md-6">
            <div className="col-md-6 mb-3 mb-md-0">
              <h2 className="mb-0">Trusted by Real Estate Businesses of All Sizes</h2>
              <p className="mb-0">Whether you’re selling plots of land or luxury buildings, Opsera Sales gives you the tools to simplify property sales, manage agents, and scale your business.</p>
            </div>
          </div>

          <div className="slider-container">
            <Slider {...sliderSettings}>

              <div className="swiper-slide">
                <div className="card bg-primary p-5 mt-lg-7">
                  <div className="card-header bg-transparent d-flex justify-content-between p-0 pb-6">
                    <h5 className="me-4 mb-0"><a href="#" className="stretched-link text-white">For Agencies</a></h5>
                    <a href="#" className="btn btn-round btn-light border flex-shrink-0"><i className="bi bi-arrow-up-right"></i></a>
                  </div>

                  <div className="card-body p-0">

                    <figure className="mb-5 text-white">
                      <svg width="79" height="90" viewBox="0 0 79 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M78.3117 35.252L62.0851 26.4733C61.7532 26.2904 61.3476 26.2904 61.0341 26.4733L56.7562 28.7777V9.88519C56.7562 9.48283 56.5349 9.11705 56.1846 8.91587L39.958 0.137167C39.6261 -0.0457224 39.2204 -0.0457224 38.9069 0.137167L22.6803 8.91587C22.33 9.11705 22.1087 9.48283 22.1087 9.88519V28.7777L17.8492 26.4733C17.5173 26.2904 17.1117 26.2904 16.7982 26.4733L0.571618 35.252C0.221271 35.4532 0 35.8189 0 36.2213V68.4099C0 68.8122 0.221271 69.178 0.571618 69.3792L16.7982 78.1579C17.1301 78.3408 17.5358 78.3408 17.8492 78.1579L22.1087 75.8535V80.1148C22.1087 80.5172 22.33 80.883 22.6803 81.0841L38.9069 89.8628C39.2388 90.0457 39.6445 90.0457 39.958 89.8628L56.1846 81.0841C56.5349 80.883 56.7562 80.5172 56.7562 80.1148V75.8535L61.0157 78.1579C61.3476 78.3408 61.7532 78.3408 62.0667 78.1579L78.2933 69.3792C78.6436 69.178 78.8649 68.8122 78.8649 68.4099V36.2213C78.8833 35.8189 78.6621 35.4532 78.3117 35.252ZM61.5504 28.6862L75.4721 36.2213L61.5504 43.7564L47.6287 36.2213L61.5504 28.6862ZM39.4232 65.7031L25.5016 58.1681L39.4232 50.633L53.3449 58.1681L39.4232 65.7031ZM34.629 36.2213C34.629 35.8189 34.4077 35.4532 34.0574 35.252L24.303 29.9848V11.7324L38.3169 19.3223V48.7492L34.629 50.7427V36.2213ZM54.5435 29.9848L44.7891 35.252C44.4387 35.4532 44.2175 35.8189 44.2175 36.2213V50.7244L40.5296 48.7309V19.3223L54.5435 11.7324V29.9848ZM56.1846 57.1987L46.4302 51.9315V38.0685L60.444 45.6584V75.3414L56.7562 73.3479V58.1681C56.7562 57.7657 56.5349 57.3999 56.1846 57.1987ZM39.4232 2.35013L53.3449 9.88519L39.4232 17.4202L25.5016 9.88519L39.4232 2.35013ZM17.2961 28.6862L31.2177 36.2213L17.2961 43.7564L3.37439 36.2213L17.2961 28.6862ZM2.17584 38.0685L16.1897 45.6584V75.3414L2.17584 67.7515V38.0685ZM18.4024 75.3414V45.6584L32.4163 38.0685V51.9315L22.6619 57.1987C22.3116 57.3999 22.0903 57.7657 22.0903 58.1681V73.3479L18.4024 75.3414ZM24.303 73.988V60.0152L38.3169 67.6052V87.0463L24.303 79.4564V73.988ZM54.5435 79.4564L40.5296 87.0463V67.6052L54.5435 60.0152V73.988V79.4564ZM62.6568 75.3414V45.6584L76.6706 38.0685V67.7515L62.6568 75.3414Z" fill="currentColor" />
                      </svg>

                    </figure>

                    {/* <span className="text-white">What included:</span> */}
                    <p className="fw-semibold mb-0 mt-2 text-white">Manage listings, applications, and commissions with full transparency.</p>
                  </div>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="card bg-dark p-5 mt-lg-4" data-bs-theme="dark">
                  <div className="card-header bg-transparent d-flex justify-content-between p-0 pb-6">
                    <h5 className="me-4 mb-0"><a href="#" className="stretched-link text-white">For Agents & Affiliates</a></h5>
                    <a href="#" className="btn btn-round btn-light border flex-shrink-0"><i className="bi bi-arrow-up-right"></i></a>
                  </div>

                  <div className="card-body p-0">

                    <figure className="heading-color mb-5">
                      <svg width="74" height="90" viewBox="0 0 74 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M36.582 90C36.3791 90 36.1898 89.942 36.0297 89.8412L0.501132 68.337C0.190185 68.1489 0 67.8116 0 67.448C0 67.448 0 58.0947 0 58.0855C0.00332564 57.722 0.203487 57.3791 0.516721 57.1961L5.98635 53.8859L0.500925 50.5657C0.190186 50.3776 0 50.0402 0 49.6767C0 49.6767 0 40.3233 0 40.3142C0.00332564 39.9511 0.203695 39.6073 0.516721 39.4248L5.98614 36.1143L0.501132 32.7945C0.190185 32.6062 0 32.2691 0 31.9053C0 31.9053 0 22.552 0 22.5428C0.00332564 22.1703 0.216582 21.828 0.516928 21.6534L36.0439 0.150277C36.3748 -0.0500924 36.7892 -0.0500924 37.1201 0.150277C37.1201 0.150277 72.5965 21.6229 72.6473 21.6534C72.9651 21.8459 73.1609 22.1797 73.164 22.552V31.9053C73.164 32.2691 72.974 32.6062 72.6628 32.7943L67.1778 36.1143C67.1778 36.1143 72.6429 39.4225 72.647 39.425C72.9538 39.6106 73.1606 39.9482 73.1638 40.3235V49.6769C73.1638 50.0404 72.9738 50.3778 72.6626 50.5659L67.1774 53.8859C67.1774 53.8859 72.6441 57.1947 72.6466 57.1961C72.9534 57.3818 73.1606 57.7164 73.1638 58.0949V67.4482C73.1638 67.8118 72.9738 68.1491 72.6626 68.3372L37.1343 89.8412C36.9742 89.942 36.7851 90 36.582 90ZM37.6212 80.1931V87.1169L71.0854 66.8623V59.9385L37.6212 80.1931ZM2.07852 66.8623L35.5427 87.1169V80.1931L2.07852 59.9385V66.8623ZM3.04649 58.0947L36.582 78.3925L70.1177 58.0947L65.1706 55.1006L37.1343 72.07C36.9742 72.1706 36.7851 72.2286 36.582 72.2286C36.3791 72.2286 36.1898 72.1706 36.0297 72.0698L7.99358 55.1006L3.04649 58.0947ZM37.6212 62.4218V69.3455L71.0854 49.0909V42.1672L37.6212 62.4218ZM2.07852 49.0909L35.5427 69.3455V62.4218L2.07852 42.1672V49.0909ZM3.04628 40.3233L36.582 60.6211L70.1177 40.3233L65.1708 37.329L37.1343 54.2985C36.974 54.3991 36.7848 54.4573 36.582 54.4573C36.3791 54.4573 36.1898 54.3993 36.0297 54.2985L7.99296 37.329L3.04628 40.3233ZM37.6212 44.6504V51.5742L71.0854 31.3196V24.3958L37.6212 44.6504ZM2.07852 31.3196L35.5427 51.5742V44.6504L2.07852 24.3958V31.3196ZM3.04628 22.552L36.582 42.8498L70.1177 22.552L36.582 2.25416L3.04628 22.552Z" fill="currentColor" />
                      </svg>
                    </figure>

                    {/* <span>What included:</span> */}
                    <p className="fw-semibold heading-color mb-0 mt-2">Track sales, commissions, and client engagement in real-time.</p>
                  </div>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="card bg-light border p-5">
                  <div className="card-header bg-transparent d-flex justify-content-between p-0 pb-6">
                    <h5 className="me-4 mb-0"><a href="#" className="stretched-link">For Buyers</a></h5>
                    <a href="#" className="btn btn-round btn-white border flex-shrink-0"><i className="bi bi-arrow-up-right"></i></a>
                  </div>

                  <div className="card-body p-0">
                    <figure className="heading-color mb-5">
                      <svg width="82" height="91" viewBox="0 0 82 91" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.894531 65.0129C0.894523 65.2227 0.948005 65.4291 1.04993 65.6126C1.15185 65.796 1.29885 65.9505 1.47705 66.0613L40.453 90.313C40.6524 90.4373 41.4679 90.6552 41.8211 90.3106L80.4581 66.0589C80.6352 65.9478 80.7811 65.7935 80.8823 65.6105C80.9835 65.4276 81.0366 65.2219 81.0366 65.0129C81.0366 65.0129 81.0334 25.8976 81.0331 25.8856C81.0413 25.6708 80.9918 25.4577 80.8899 25.2684C80.7879 25.0791 80.6372 24.9205 80.4533 24.8091L41.6173 0.682433C41.4217 0.560647 41.196 0.496094 40.9656 0.496094C40.7352 0.496094 40.5095 0.560647 40.3139 0.682433L1.47787 24.8092C1.29278 24.9193 1.14107 25.0776 1.03895 25.2672C0.936835 25.4568 0.88814 25.6705 0.898072 25.8857C0.897742 25.8976 0.894531 65.0129 0.894531 65.0129ZM59.1999 58.2046L41.0757 69.4641L22.9514 58.2046L41.0757 46.9451L59.1999 58.2046ZM39.9145 44.7586L21.8461 55.9836V38.1889L39.9145 26.8151V44.7586ZM60.3054 38.1922V55.9836L42.4156 44.8697V27.0275L60.3054 38.1922ZM3.36457 28.0789L19.2641 37.9566V58.0645C19.2588 58.3076 19.321 58.5473 19.4438 58.7572C19.5665 58.967 19.745 59.1387 19.9594 59.2533L39.8705 71.6231V87.0413L3.36457 64.3268V28.0789ZM42.3995 87.0313V71.5791L62.1919 59.2536C62.402 59.1535 62.573 58.9868 62.6785 58.7794C62.784 58.5721 62.818 58.3357 62.7753 58.107V37.8891L78.5664 28.0789V64.3297L42.3995 87.0313ZM77.4612 25.858L61.303 35.8962L42.2878 24.0194C41.964 23.8172 41.5903 23.709 41.2085 23.7069C40.8267 23.7048 40.4518 23.809 40.1258 24.0078L20.6277 35.8961L4.46955 25.8579L40.9656 3.18545L77.4612 25.858Z" fill="currentColor" />
                      </svg>
                    </figure>

                    {/* <span>What included:</span> */}
                    <p className="fw-semibold heading-color mb-0 mt-2">Seamless application and allocation experience.</p>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>

      <section id="benefits" className="pb-0">
        <div className="container">
          <div className="inner-container text-center mb-4 mb-sm-6">
            <h2 className="mb-0">Why Real Estate Businesses Choose Opsera</h2>
          </div>

          <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">
            <div className="col">
              <div className="card card-hover-shadow border h-100 p-4">
                <div className="card-body p-0">
                  <figure className="text-primary mb-4">
                    <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2.25 12C2.25 17.3848 6.61522 21.75 12 21.75C16.567 21.75 20.4006 18.6099 21.4597 14.371C21.6257 13.7068 21.7086 13.3746 21.5327 13.0378C21.4825 12.9418 21.3914 12.8252 21.3104 12.7532C21.0263 12.5009 20.6322 12.5009 19.844 12.5009H13.3C12.5501 12.5009 12.1751 12.5009 11.9122 12.3099C11.8273 12.2482 11.7527 12.1736 11.691 12.0887C11.5 11.8258 11.5 11.4508 11.5 10.7009V4.15582C11.5 3.36765 11.5 2.97356 11.2477 2.68947C11.1758 2.60848 11.0591 2.51736 10.9631 2.4672C10.6263 2.29125 10.2942 2.37418 9.63002 2.54005C5.39056 3.59874 2.25 7.43262 2.25 12Z" fill="currentColor" fill-opacity="0.25" />
                      <path d="M12.8 9.4V4.25994C12.8 3.42978 12.8 3.0147 13.0698 2.72637C13.1465 2.64435 13.2702 2.55404 13.3717 2.50592C13.7284 2.33679 14.0733 2.44702 14.7632 2.6675C17.8775 3.66283 20.3372 6.12259 21.3326 9.23688C21.553 9.92672 21.6633 10.2716 21.4941 10.6284C21.446 10.7299 21.3557 10.8536 21.2737 10.9303C20.9853 11.2 20.5703 11.2 19.7401 11.2H14.6C13.8501 11.2 13.4751 11.2 13.2123 11.009C13.1274 10.9473 13.0527 10.8727 12.991 10.7878C12.8 10.5249 12.8 10.1499 12.8 9.4Z" fill="currentColor" />
                    </svg>
                  </figure>

                  <h5 className="mb-3"><a href="#">Tailored for Real Estate Workflows</a></h5>
                  <p>Unlike generic CRM or sales platforms, Opsera is purpose-built for real estate companies. From land and housing sales to affiliate and commission management, every feature is designed around how real estate teams actually operate.
                    No need to bend a general tool to fit your workflow—Opsera speaks your language.</p>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card card-hover-shadow border h-100 p-4">
                <div className="card-body p-0">
                  <figure className="text-primary mb-4">
                    <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3 5.75H5M10.5 5.75H21M3 18.25H5M10.5 18.25H21M21 12H19M13.5 12H3" stroke="currentColor" stroke-opacity="0.25" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M4.25 5.75C4.25 3.817 5.817 2.25 7.75 2.25V2.25C9.683 2.25 11.25 3.817 11.25 5.75V5.75C11.25 7.683 9.683 9.25 7.75 9.25V9.25C5.817 9.25 4.25 7.683 4.25 5.75V5.75Z" fill="currentColor" />
                      <path d="M4.25 18.25C4.25 16.317 5.817 14.75 7.75 14.75V14.75C9.683 14.75 11.25 16.317 11.25 18.25V18.25C11.25 20.183 9.683 21.75 7.75 21.75V21.75C5.817 21.75 4.25 20.183 4.25 18.25V18.25Z" fill="currentColor" />
                      <path d="M12.75 12C12.75 10.067 14.317 8.5 16.25 8.5V8.5C18.183 8.5 19.75 10.067 19.75 12V12C19.75 13.933 18.183 15.5 16.25 15.5V15.5C14.317 15.5 12.75 13.933 12.75 12V12Z" fill="currentColor" />
                    </svg>
                  </figure>

                  <h5 className="mb-3"><a href="#">End-to-End Sales Automation</a></h5>
                  <p>From capturing leads to allocating properties and paying commissions, Opsera automates repetitive tasks so your team can focus on closing more deals.
                    Sales pipelines move faster. Errors are reduced. Revenue grows.</p>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card card-hover-shadow border h-100 p-4">
                <div className="card-body p-0">
                  <figure className="text-primary mb-4">
                    <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20.2402 6.75391C21.2543 9.81065 21.2543 11.8485 20.2402 14.9052" stroke="currentColor" stroke-opacity="0.25" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M2.25047 12.9739C2.25055 14.0922 3.15715 14.9988 4.27547 14.9988V14.9988L4.25651 19.4911C4.25125 20.7361 5.25945 21.7481 6.50452 21.7474V21.7474C7.74497 21.7468 8.75021 20.741 8.75021 19.5006V15.1105H10V6.55981H6.46978C5.09959 6.55981 4.41449 6.55981 3.87962 6.79848C3.26038 7.07479 2.76505 7.57015 2.48879 8.18941C2.25016 8.72431 2.25021 9.4094 2.25031 10.7796L2.25047 12.9739Z" fill="currentColor" />
                      <path d="M11.0002 15.8122C13.9211 18.3111 15.3815 19.5606 16.6274 19.37C17.1377 19.2919 17.6157 19.0718 18.0068 18.7348C18.9616 17.912 18.9616 15.99 18.9616 12.146V9.4287C18.9616 5.58267 18.9616 3.65966 18.0199 2.83775C17.6138 2.48322 17.1124 2.2559 16.5781 2.18405C15.3393 2.01748 13.893 3.28476 11.0002 5.81933V5.81933V15.8122V15.8122Z" fill="currentColor" fill-opacity="0.25" />
                    </svg>
                  </figure>

                  <h5 className="mb-3"><a href="#">Smart Affiliate & Agent Management</a></h5>
                  <p>Whether you work with in-house sales reps, freelance marketers, or referral partners, Opsera helps you manage them all transparently.
                    Agents can view their applications, earnings, and commissions—reducing back-and-forth and disputes. </p>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card card-hover-shadow border h-100 p-4">
                <div className="card-body p-0">
                  <figure className="text-primary mb-4">
                    <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.523 8.92914C17.523 9.94279 16.6746 10.7645 15.6281 10.7645C14.5816 10.7645 13.7333 9.94279 13.7333 8.92914C13.7333 7.91548 14.5816 7.09375 15.6281 7.09375C16.6746 7.09375 17.523 7.91548 17.523 8.92914Z" fill="currentColor" />
                      <path d="M10.485 8.92914C10.485 9.94279 9.63664 10.7645 8.59015 10.7645C7.54366 10.7645 6.69531 9.94279 6.69531 8.92914C6.69531 7.91548 7.54366 7.09375 8.59015 7.09375C9.63664 7.09375 10.485 7.91548 10.485 8.92914Z" fill="currentColor" />
                      <path d="M11.0264 15.2219C11.0264 16.2355 10.178 17.0573 9.13154 17.0573C8.08504 17.0573 7.2367 16.2355 7.2367 15.2219C7.2367 14.2082 8.08504 13.3865 9.13154 13.3865C10.178 13.3865 11.0264 14.2082 11.0264 15.2219Z" fill="currentColor" />
                      <path d="M21.748 9.45998C21.4753 4.55256 14.4854 1.4706 9.28231 2.41642C4.07925 3.36223 1.56208 8.48915 2.41245 13.4547C3.23924 18.2826 8.68956 21.7459 12.1134 21.7459C15 21.7459 17.25 20.6058 17.25 18.9959C17.25 18.9959 17.2846 18.5254 16.98 17.9961C16.7157 17.5369 16.4642 17.3392 16.07 16.9961C15.8584 16.8119 15.5273 16.5296 15.15 15.9959C14.9079 15.6534 14.8139 15.4137 14.8 15.3435C14.7846 14.9174 15.0127 14.407 15.5 14.2561C15.6439 14.2115 15.8105 14.2221 16 14.2459C18 14.3961 22 13.9961 21.748 9.45998Z" fill="currentColor" fill-opacity="0.25" />
                    </svg>
                  </figure>

                  <h5 className="mb-3"><a href="#">Built for Teams of Any Size</a></h5>
                  <p>From a one-person agency to large firms with dozens of agents, Opsera scales with you. You control who gets access to what with staff roles and permission settings.
                    No extra cost or complexity as your business grows.</p>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card card-hover-shadow border h-100 p-4">
                <div className="card-body p-0">
                  <figure className="text-primary mb-4">
                    <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 18V15M12 13V18M16 18V11M6.5 11.5L7.9646 9.7913C8.91547 8.68195 10.3837 8.16067 11.8212 8.42204V8.42204C13.812 8.78401 15.8538 8.14622 17.2846 6.71542L17.5 6.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M13.2 2.25H10.8C7.23775 2.25 5.45663 2.25 4.20802 3.15717C3.80477 3.45015 3.45015 3.80477 3.15717 4.20802C2.25 5.45663 2.25 7.23775 2.25 10.8V13.2C2.25 16.7622 2.25 18.5434 3.15717 19.792C3.45015 20.1952 3.80477 20.5499 4.20802 20.8428C5.45663 21.75 7.23775 21.75 10.8 21.75H13.2C16.7622 21.75 18.5434 21.75 19.792 20.8428C20.1952 20.5499 20.5499 20.1952 20.8428 19.792C21.75 18.5434 21.75 16.7622 21.75 13.2V10.8C21.75 7.23775 21.75 5.45663 20.8428 4.20802C20.5499 3.80477 20.1952 3.45015 19.792 3.15717C18.5434 2.25 16.7622 2.25 13.2 2.25Z" fill="currentColor" fill-opacity="0.25" />
                    </svg>
                  </figure>

                  <h5 className="mb-3"><a href="#">Data You Can Act On</a></h5>
                  <p>With real-time reporting, sales analytics, and performance dashboards, you’re never in the dark.
                    Understand what’s working, who’s performing, and where you’re losing opportunities.</p>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card card-hover-shadow border h-100 p-4">
                <div className="card-body p-0">
                  <figure className="text-primary mb-4">
                    <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 21.75C17.3848 21.75 21.75 17.3848 21.75 12C21.75 6.61522 17.3848 2.25 12 2.25C6.61522 2.25 2.25 6.61522 2.25 12C2.25 17.3848 6.61522 21.75 12 21.75Z" fill="currentColor" fill-opacity="0.25" />
                      <path d="M14.5 10V10C14.5 8.89543 13.6046 8 12.5 8H12M12 8H11.5C10.3954 8 9.5 8.89543 9.5 10V10C9.5 11.1046 10.3954 12 11.5 12H12M12 8V6.5M12 8V12M12 12H12.5C13.6046 12 14.5 12.8954 14.5 14V14C14.5 15.1046 13.6046 16 12.5 16H12M12 12V16M12 16H11.5C10.3954 16 9.5 15.1046 9.5 14V14M12 16V17.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </figure>

                  <h5 className="mb-3"><a href="#">Secure, Cloud-Based, and Always Accessible</a></h5>
                  <p>Your data is safely stored in the cloud and accessible anywhere—on-site, in the office, or on mobile.
                    Stay connected to your sales operation no matter where you are.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="overflow-hidden">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-6 mb-sm-6 mb-lg-0">
              <h2 className="mb-4">Why Use Opsera Sales Platform</h2>
              {/* <p className="mb-0">Supposing so be resolving breakfast am or perfectly. It drew a hill from me. Valley by oh twenty direct me so.</p> */}

              <hr className="my-4 my-sm-5" />

              <div className="row g-4 mb-4 mb-sm-5">
                <div className="col-sm-12">
                  <div className="d-flex">
                    {/* <div className="icon-md flex-shrink-0 text-primary bg-primary bg-opacity-10 rounded-circle"><i className="bi bi-boxes fa-xl"></i></div> */}
                    <div className="ms-3">
                      <h6 className="mb-0 mb-sm-2 text-primary">Save Time</h6>
                      <ul className="list-group list-group-borderless mb-4">
                        <li className="list-group-item heading-color mb-0"><i className="bi bi-patch-check-fill me-2" style={{ color: '#FFA600' }}></i>Automate repetitive tasks like status updates, follow-ups, and commission reports</li>
                        <li className="list-group-item heading-color mb-0"><i className="bi bi-patch-check-fill me-2" style={{ color: '#FFA600' }}></i>Speed up onboarding of staff and agents</li>
                      </ul>
                    </div>
                  </div>
                  <div className="d-flex">
                    {/* <div className="icon-md flex-shrink-0 text-primary bg-primary bg-opacity-10 rounded-circle"><i className="bi bi-boxes fa-xl"></i></div> */}
                    <div className="ms-3">
                      <h6 className="mb-0 mb-sm-2 text-primary">Boost Accountability</h6>
                      <ul className="list-group list-group-borderless mb-4">
                        <li className="list-group-item heading-color mb-0"><i className="bi bi-patch-check-fill me-2" style={{ color: '#FFA600' }}></i>Know exactly who is selling, what they’re selling, and how much they’ve earned</li>
                        <li className="list-group-item heading-color mb-0"><i className="bi bi-patch-check-fill me-2" style={{ color: '#FFA600' }}></i>Eliminate guesswork with full visibility into your entire sales process</li>
                      </ul>
                    </div>
                  </div>
                  <div className="d-flex">
                    {/* <div className="icon-md flex-shrink-0 text-primary bg-primary bg-opacity-10 rounded-circle"><i className="bi bi-boxes fa-xl"></i></div> */}
                    <div className="ms-3">
                      <h6 className="mb-0 mb-sm-2 text-primary">Work from Anywhere</h6>
                      <ul className="list-group list-group-borderless mb-4">
                        <li className="list-group-item heading-color mb-0"><i className="bi bi-patch-check-fill me-2" style={{ color: '#FFA600' }}></i>Cloud-based platform accessible via web and mobile</li>
                        <li className="list-group-item heading-color mb-0"><i className="bi bi-patch-check-fill me-2" style={{ color: '#FFA600' }}></i>Agents and staff can use it on the go—no desktop dependency</li>
                      </ul>
                    </div>
                  </div>
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

      <section id="pricing" className="bg-dark position-relative price-wrap" data-bs-theme="dark">

        <figure className="position-absolute top-0 start-0 ms-n9">
          <svg className="opacity-2" width="424" height="405" viewBox="0 0 424 405" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="212" cy="202.5" rx="212" ry="202.5" fill="url(#paint0_linear_153_3831)"></ellipse>
            <defs>
              <linearGradient id="paint0_linear_153_3831" x1="212" y1="0" x2="212" y2="405" gradientUnits="userSpaceOnUse">
                <stop offset="0.0569271" stop-color="#D9D9D9" stop-opacity="0"></stop>
                <stop offset="0.998202" stop-color="#D9D9D9" stop-opacity="0.5"></stop>
              </linearGradient>
            </defs>
          </svg>
        </figure>

        <div className="container position-relative">
          <div className="row g-4 g-lg-6">
            <div className="col-xl-12 text-center">
              <span className="text-primary fw-bold text-uppercase">Pricing</span>
              <h2 className="mb-4 mt-3">Budget-friendly pricing solutions</h2>
              <p className="mb-5">Choose the plan that fits your real estate business. Whether you're just starting out or scaling rapidly, Opsera Sales Platform grows with you.</p>
              {/* <form className="d-flex align-items-center">
                <span className="fw-semibold heading-color">Monthly</span>
                <div className="form-check form-switch form-check-lg mx-2 mb-0">
                  <input className="form-check-input mt-0 price-toggle" type="checkbox" id="flexSwitchCheckDefault" />
                </div>
                <div className="position-relative">
                  <span className="fw-semibold heading-color">Yearly</span>
                  <span className="badge bg-danger position-absolute top-0 start-100 translate-middle mt-n2 ms-2 ms-md-5">20% save</span>
                </div>
              </form> */}
            </div>



            <div className="col-md-6 col-xl-4">
              <div className="card card-body p-4 p-sm-5">
                <figure className="position-absolute top-0 start-0 translate-middle mt-n4 ms-n5 d-none d-md-block">
                  <svg className="fill-mode" width="86" height="105" viewBox="0 0 86 105" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M50.9805 4.63769C51.6165 4.24345 56.4262 10.3524 61.7246 18.1163C67.0564 25.8003 72.7966 35.1061 75.9634 40.6314C82.2158 51.6489 85.8889 61.2748 84.5362 62.0301C83.1029 62.7522 77.2708 54.3462 71.0415 43.3853C67.8986 37.9165 62.7042 28.3199 58.293 20.1246C53.8819 11.9293 50.2874 5.05535 50.9805 4.63769Z"></path>
                    <path d="M64.0889 66.7297C63.5001 67.2372 60.6142 65.1098 57.1179 62.637C53.6451 60.2207 49.5285 57.539 47.2336 56.0303C42.5967 52.8997 39.0022 49.8707 39.6599 48.4069C40.2841 47.0231 45.3294 47.9307 50.3923 51.2838C52.9286 52.892 56.9393 56.2802 59.8742 59.6469C62.809 63.0137 64.6779 66.2223 64.0889 66.7297Z"></path>
                    <path d="M55.1316 86.0595C55.1297 86.856 48.7063 87.4433 40.9853 87.6368C33.2643 87.8295 24.2555 87.492 19.0669 87.0413C8.68981 86.139 0.434871 83.7683 0.656712 82.218C0.878555 80.6685 9.34356 80.5005 19.5833 81.393C24.7149 81.867 33.5706 82.7978 41.1895 83.6415C48.832 84.5408 55.1571 85.32 55.1316 86.0595Z"></path>
                  </svg>
                </figure>
                <h5>Free Plan</h5>
                <p className="small mb-0">Perfect for small teams or individual agents starting out.</p>
                <hr className="my-4" />
                <p className="heading-color fw-normal mb-2">Quick look at all the features</p>
                <ul className="list-group list-group-borderless mb-2 mb-sm-4">
                  <li className="list-group-item d-flex small mb-0"><i className="bi bi-patch-check-fill me-1" style={{ color: '#FFA600' }}></i>Manage up to 10 properties</li>
                  <li className="list-group-item d-flex small mb-0"><i className="bi bi-patch-check-fill me-1" style={{ color: '#FFA600' }}></i>Up to 3 team members</li>
                  <li className="list-group-item d-flex small mb-0"><i className="bi bi-patch-check-fill me-1" style={{ color: '#FFA600' }}></i>Sales application tracking</li>
                  <li className="list-group-item d-flex small mb-0"><i className="bi bi-patch-check-fill me-1" style={{ color: '#FFA600' }}></i>Basic lead management</li>
                  <li className="list-group-item d-flex small mb-0"><i className="bi bi-patch-check-fill me-1" style={{ color: '#FFA600' }}></i>Access to affiliate tools</li>
                  <li className="list-group-item d-flex small mb-0"><i className="bi bi-patch-check-fill me-1" style={{ color: '#FFA600' }}></i>Basic reports and analytics</li>
                  <li className="list-group-item d-flex small mb-0"><i className="bi bi-patch-check-fill me-1" style={{ color: '#FFA600' }}></i>Email support</li>
                </ul>

                <span className="mb-4 heading-color"><span className="h2 plan-price" data-monthly-price="$299" data-annual-price="$250">$0</span> /month</span>
                <a className="btn btn-primary icon-link icon-link-hover justify-content-center" href="/#get-started">Get started<i className="bi bi-arrow-right"></i> </a>
              </div>
            </div>
            <div className="col-md-6 col-xl-4">
              <div className="card card-body p-4 p-sm-5">
                <h5>Basic Plan</h5>
                <p className="small mb-0">Best for growing real estate agencies and small firms.</p>
                <hr className="my-4" />
                <p className="heading-color fw-normal mb-2">Quick look at all the features</p>
                <ul className="list-group list-group-borderless mb-2 mb-sm-4">
                  <li className="list-group-item d-flex small mb-0"><i className="bi bi-patch-check-fill me-1" style={{ color: '#FFA600' }}></i>Everything in Free Plan</li>
                  <li className="list-group-item d-flex small mb-0"><i className="bi bi-patch-check-fill me-1" style={{ color: '#FFA600' }}></i>Unlimited properties</li>
                  <li className="list-group-item d-flex small mb-0"><i className="bi bi-patch-check-fill me-1" style={{ color: '#FFA600' }}></i>Up to 20 team members</li>
                  <li className="list-group-item d-flex small mb-0"><i className="bi bi-patch-check-fill me-1" style={{ color: '#FFA600' }}></i>Full sales application workflows</li>
                  <li className="list-group-item d-flex small mb-0"><i className="bi bi-patch-check-fill me-1" style={{ color: '#FFA600' }}></i>Commission and affiliate tracking</li>
                  <li className="list-group-item d-flex small mb-0"><i className="bi bi-patch-check-fill me-1" style={{ color: '#FFA600' }}></i>Access control for staff</li>
                  <li className="list-group-item d-flex small mb-0"><i className="bi bi-patch-check-fill me-1" style={{ color: '#FFA600' }}></i>Advanced lead conversion tools</li>
                  <li className="list-group-item d-flex small mb-0"><i className="bi bi-patch-check-fill me-1" style={{ color: '#FFA600' }}></i>Standard analytics dashboard</li>
                  <li className="list-group-item d-flex small mb-0"><i className="bi bi-patch-check-fill me-1" style={{ color: '#FFA600' }}></i>Email support</li>
                </ul>

                <span className="mb-4 heading-color"><span className="h2 plan-price" data-monthly-price="$299" data-annual-price="$250">$299</span> /month</span>
                <a className="btn btn-primary icon-link icon-link-hover justify-content-center" href="/#get-started">Get started<i className="bi bi-arrow-right"></i> </a>
              </div>
            </div>
            <div className="col-md-6 col-xl-4">
              <div className="card card-body bg-light p-4 p-sm-5">


                <h5>Enterprise Plan</h5>
                <p className="small mb-0">For large agencies managing high-volume sales operations.</p>

                <hr className="my-4" />
                <p className="heading-color fw-normal mb-2">Quick look at all the features</p>
                <ul className="list-group list-group-borderless mb-2 mb-sm-4">
                  <li className="list-group-item d-flex small mb-0"><i className="bi bi-patch-check-fill me-1" style={{ color: '#FFA600' }}></i>Everything in Basic Plan</li>
                  <li className="list-group-item d-flex small mb-0"><i className="bi bi-patch-check-fill me-1" style={{ color: '#FFA600' }}></i>Unlimited team members</li>
                  <li className="list-group-item d-flex small mb-0"><i className="bi bi-patch-check-fill me-1" style={{ color: '#FFA600' }}></i>Custom affiliate packages</li>
                  <li className="list-group-item d-flex small mb-0"><i className="bi bi-patch-check-fill me-1" style={{ color: '#FFA600' }}></i>Enterprise-grade property manager</li>
                  <li className="list-group-item d-flex small mb-0"><i className="bi bi-patch-check-fill me-1" style={{ color: '#FFA600' }}></i>White-label branding</li>
                  <li className="list-group-item d-flex small mb-0"><i className="bi bi-patch-check-fill me-1" style={{ color: '#FFA600' }}></i>Custom reports & KPIs</li>
                  <li className="list-group-item d-flex small mb-0"><i className="bi bi-patch-check-fill me-1" style={{ color: '#FFA600' }}></i>Dedicated account manager</li>
                  <li className="list-group-item d-flex small mb-0"><i className="bi bi-patch-check-fill me-1" style={{ color: '#FFA600' }}></i>API access & integrations</li>
                  <li className="list-group-item d-flex small mb-0"><i className="bi bi-patch-check-fill me-1" style={{ color: '#FFA600' }}></i>Priority support</li>
                </ul>
                <a className="btn btn-primary icon-link icon-link-hover justify-content-center" href="/#get-started">Get started<i className="bi bi-arrow-right"></i> </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials" className="pb-0">
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

                          {/* <h6>"Mizzle is essential tool for me and my team"</h6> */}
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
                  {/* <h2 className="my-3">Don't take our word for it. See what our client says.</h2> */}
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
      </section>

      <section id='faqs' className="bg-light mt-8 mb-8">
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
      </section>

      <section id="get-started" className="pt-0">
        <div className="container">

          <div className="inner-container-small mx-auto">
            <div className="text-center mb-6">
              <h2 className="mb-">We've been waiting for you</h2>
              <p className="mb-0">You can watch your business bloom and glow, achieving new heights of success and radiating prosperity.</p>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-8 mx-auto">
              <form className="row g-4">
                <div className="col-md-6">
                  <label className="form-label heading-color">Your name *</label>
                  <input type="text" className="form-control form-control-lg" placeholder="Full name" />
                </div>

                <div className="col-md-6">
                  <label className="form-label heading-color">Email address *</label>
                  <input type="email" className="form-control form-control-lg" id="floatingInput" placeholder="name@example.com" />
                </div>

                <div className="col-md-6">
                  <label className="form-label heading-color">Phone number *</label>
                  <input type="text" className="form-control form-control-lg" placeholder="(xxx) xx xxxx" />
                </div>

                <div className="col-md-6">
                  <label className="form-label heading-color">Company *</label>
                  <input type="text" className="form-control form-control-lg" placeholder="Company name" />
                </div>

                <div className="col-12">
                  <label className="form-label heading-color">Message *</label>
                  <textarea className="form-control" placeholder="Write your message here...." id="floatingTextarea2" style={{ height: "150px" }}></textarea>
                </div>
                <div className="col-12 d-grid">
                  <button className="btn btn-lg btn-primary mb-0">Get Started</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
