function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <>
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
      <footer className="bg-dark position-relative overflow-hidden pt-6" data-bs-theme="dark">

        <div className="container position-relative mt-5">
          <div className="row g-4">
            <div className="col-xl-3 text-lg-center text-xl-start mb-4 mb-xl-0">
              <a href="index.html">
                <img className="light-mode-item h-60px" src="assets/images/logos/opsera-footer-light-4.svg" alt="logo" />
                <img className="dark-mode-item h-60px" src="assets/images/logos/opsera-footer-light-4.svg" alt="logo" />
              </a>
            </div>

            <div className="col-6 col-md-4 col-lg-5 col-xl-4">
              <h6 className="mb-2 mb-md-4">Quick links</h6>
              <div className="row g-0">
                <div className="col-lg-6">
                  <ul className="nav flex-column">
                    <li className="nav-item"><a className="nav-link pt-0" href="about-v1.html">About us</a></li>
                    <li className="nav-item"><a className="nav-link" href="contact-v1.html">Contact us</a></li>
                    <li className="nav-item"><a className="nav-link" href="services-v1.html">Services</a></li>
                    <li className="nav-item"><a className="nav-link" href="career.html">Career <span className="badge text-bg-danger ms-2">2 Job</span></a></li>
                    <li className="nav-item"><a className="nav-link" href="career-single.html">Career detail</a></li>
                    <li className="nav-item"><a className="nav-link" href="portfolio-showcase.html">Case studies</a></li>
                    <li className="nav-item"><a className="nav-link" href="portfolio-showcase.html">Team</a></li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul className="nav flex-column">
                    <li className="nav-item"><a className="nav-link" href="contact-v1.html">Become a partner</a></li>
                    <li className="nav-item"><a className="nav-link" href="customer-stories.html">Customer stories</a></li>
                    <li className="nav-item"><a className="nav-link" href="sign-in.html">Sign in</a></li>
                    <li className="nav-item"><a className="nav-link" href="sign-up.html">Sign up</a></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-6 col-md-4 col-lg-3 col-xl-2">
              <h6 className="mb-2 mb-md-4">Resources</h6>
              <ul className="nav flex-column">
                <li className="nav-item"><a className="nav-link" href="#">Privacy Policy</a></li>
                <li className="nav-item"><a className="nav-link pt-0" href="#">Legal</a></li>
                <li className="nav-item"><a className="nav-link" href="#">Supports <i className="bi bi-box-arrow-up-right small ms-1"></i></a></li>
                <li className="nav-item"><a className="nav-link" href="faq.html">Faqs</a></li>
                <li className="nav-item"><a className="nav-link" href="blog-grid.html">News and blogs</a></li>
                <li className="nav-item"><a className="nav-link" href="#">Terms &amp; condition</a></li>
              </ul>
            </div>

            {/* <div className="col-sm-6 col-md-4 col-lg-4 col-xl-3">
            <h6 className="mb-2 mb-md-4">Community</h6>
            <div className="position-relative d-flex align-items-center py-2 my-2">
              <div className="icon-lg bg-warning rounded-circle flex-shrink-0">
                <i className="bi bi-file-earmark-text-fill heading-color"></i>
              </div>
              <div className="nav flex-column ps-3">
                <h6 className="mb-2"><a href="#" className=" stretched-link p-0">Documentation</a></h6>
                <div className="small text-body-secondary">API, knowledge base, tutorials</div>
              </div>
            </div>

            <div className="position-relative d-flex align-items-center py-2 my-2">
              <div className="icon-lg bg-success rounded-circle flex-shrink-0">
                <i className="bi bi-stickies-fill heading-color"></i>
              </div>
              <div className="nav flex-column ps-3">
                <h6 className="mb-2"><a href="#" className=" stretched-link p-0">Snippets</a></h6>
                <div className="small text-body-secondary">API, knowledge base, tutorials</div>
              </div>
            </div>

            <div className="position-relative d-flex align-items-center py-2 my-2">
              <div className="icon-lg bg-info rounded-circle flex-shrink-0">
                <i className="bi bi-puzzle-fill heading-color"></i>
              </div>
              <div className="nav flex-column ps-3">
                <h6 className="mb-2"><a href="#" className="stretched-link p-0">Components</a></h6>
                <div className="small text-body-secondary">API, knowledge base, tutorials</div>
              </div>
            </div>
          </div> */}
          </div>

          <hr className="opacity-1 my-5 my-sm-6" />

          <div className="row g-4 align-items-center">
            <div className="col-xl-3 text-lg-center text-xl-start mb-4 mb-xl-0">
              <h5 className="mb-1">Get in touch with us</h5>
              <p className="mb-0">We look forward to hearing from you!</p>
            </div>

            <div className="col-sm-6 col-md-4 col-xl-3 d-flex justify-content-md-center">
              <div className="position-relative d-flex align-items-center">
                <div className="icon-lg bg-body rounded-circle flex-shrink-0">
                  <i className="bi bi-telephone heading-color"></i>
                </div>
                <div className="nav flex-column ps-3">
                  <div className="small text-body-secondary">Give us a call</div>
                  <p className="fw-semibold mt-1 mb-0"><a href="#" className="heading-color text-primary-hover stretched-link p-0">469-537-2410</a></p>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-md-4 col-xl-3 d-flex justify-content-md-center">
              <div className="position-relative d-flex align-items-center">
                <div className="icon-lg bg-body rounded-circle flex-shrink-0">
                  <i className="bi bi-envelope heading-color"></i>
                </div>
                <div className="nav flex-column ps-3">
                  <div className="small text-body-secondary">Send us an email</div>
                  <p className="fw-semibold mt-1 mb-0"><a href="#" className="heading-color text-primary-hover stretched-link p-0">example@gmail.com</a></p>
                </div>
              </div>
            </div>

            {/* <div className="col-sm-6 col-md-4 col-xl-3 d-flex justify-content-md-center">
            <div className="position-relative d-flex align-items-center">
              <div className="icon-lg bg-body rounded-circle flex-shrink-0">
                <i className="bi bi-geo-alt heading-color"></i>
              </div>
              <div className="nav flex-column ps-3">
                <div className="small text-body-secondary">Visit us in</div>
                <p className="fw-semibold heading-color mt-1 mb-0">55/123 Norman street, Banking road</p>
              </div>
            </div>
          </div> */}
          </div>

          <hr className="opacity-1 mt-6 mb-0" />

          <div className="d-md-flex justify-content-between align-items-center text-center text-lg-start py-4">
            <div className="text-body mb-3 mb-md-0"> Copyrights {currentYear} Mizzle. Build by <a href="https://www.webestica.com/" className="text-body text-primary-hover">Webestica</a>. </div>

            <ul className="list-inline mb-0">
              <li className="list-inline-item"> <a className="btn btn-xs btn-icon btn-light" href="#"><i className="fab fa-fw fa-facebook-f lh-base"></i></a> </li>
              <li className="list-inline-item"> <a className="btn btn-xs btn-icon btn-light" href="#"><i className="fab fa-fw fa-instagram lh-base"></i></a> </li>
              <li className="list-inline-item"> <a className="btn btn-xs btn-icon btn-light" href="#"><i className="fab fa-fw fa-twitter lh-base"></i></a> </li>
              <li className="list-inline-item"> <a className="btn btn-xs btn-icon btn-light" href="#"><i className="fab fa-fw fa-linkedin-in lh-base"></i></a> </li>
              <li className="list-inline-item"> <a className="btn btn-xs btn-icon btn-light" href="#"><i className="fab fa-fw fa-youtube lh-base"></i></a> </li>
            </ul>
          </div>

        </div>
      </footer>
    </>
  );
}

export default Footer;
