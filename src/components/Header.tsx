import { useState, useEffect } from "react";

function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Function to handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      // You can adjust this value to determine when the header becomes sticky
      const scrollThreshold = 100;

      if (window.scrollY > scrollThreshold) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`header-absolute ${isSticky ? "is-sticky" : ""}`}>
      <nav className="navbar navbar-expand-xl">
        <div className="container">
          <a className="navbar-brand me-0" href="/">
            <img
              className="light-mode-item navbar-brand-item"
              src="assets/images/softnet-logo.png"
              alt="logo"
            />
            <img
              className="dark-mode-item navbar-brand-item"
              src="assets/images/logo-light.svg"
              alt="logo"
            />
          </a>

          {/* <button
            className="navbar-toggler ms-auto"
            type="button"
            onClick={toggleMobileMenu}
            aria-controls="navbarCollapse"
            aria-expanded={isMobileMenuOpen ? "true" : "false"}
            aria-label="Toggle navigation"
          >
            {isMobileMenuOpen ? (
              <span className="fs-2 fw-bold close-icon">&times;</span>
            ) : (
              <span className="navbar-toggler-animation">
                <span></span>
                <span></span>
                <span></span>
              </span>
            )}
          </button> */}

          <div
            className={`collapse navbar-collapse ${isMobileMenuOpen ? "show" : ""
              }`}
            id="navbarCollapse"
          >
            {/* <ul className="navbar-nav navbar-nav-scroll ms-auto"> */}
            <ul className="navbar-nav navbar-nav-scroll dropdown-hover mx-auto">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="/#home"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="/#features"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="/#benefits"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Benefits
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="/#pricing"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="/#testimonials"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Testimonials
                </a>
              </li>
            </ul>
          </div>

          <ul className="nav align-items-center dropdown-hover ms-sm-2">
            {/* <li className="nav-item dropdown dropdown-animation">
              <button
                className="btn btn-link mb-0 px-2 lh-1"
                id="bd-theme"
                type="button"
                aria-expanded="false"
                data-bs-toggle="dropdown"
                data-bs-display="static"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  className="bi bi-circle-half theme-icon-active fill-mode fa-fw"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 15A7 7 0 1 0 8 1v14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z" />
                  <use href="#"></use>
                </svg>
              </button>

              <ul
                className="dropdown-menu min-w-auto dropdown-menu-end"
                aria-labelledby="bd-theme"
              >
                <li className="mb-1">
                  <button
                    type="button"
                    className="dropdown-item d-flex align-items-center"
                    data-bs-theme-value="light"
                  >
                    <svg
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-brightness-high-fill fa-fw mode-switch me-1"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
                      <use href="#"></use>
                    </svg>
                    Light
                  </button>
                </li>
                <li className="mb-1">
                  <button
                    type="button"
                    className="dropdown-item d-flex align-items-center"
                    data-bs-theme-value="dark"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-moon-stars-fill fa-fw mode-switch me-1"
                      viewBox="0 0 16 16"
                    >
                      <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z" />
                      <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z" />
                      <use href="#"></use>
                    </svg>
                    Dark
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="dropdown-item d-flex align-items-center active"
                    data-bs-theme-value="auto"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-circle-half fa-fw mode-switch me-1"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 15A7 7 0 1 0 8 1v14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z" />
                      <use href="#"></use>
                    </svg>
                    Auto
                  </button>
                </li>
              </ul>
            </li> */}

            {/* <li className="nav-item me-2">
              <a href="sign-up.html" className="btn btn-sm btn-light mb-0">
                <i className="bi bi-person-circle me-1"></i>Sign up
              </a>
            </li> */}
            <li className="nav-item d-none d-sm-block">
              <button className="btn btn-sm btn-primary mb-0">Get Started!</button>
            </li>
            <li className="nav-item">
              <button
                className="navbar-toggler ms-auto"
                type="button"
                onClick={toggleMobileMenu}
                aria-controls="navbarCollapse"
                aria-expanded={isMobileMenuOpen ? "true" : "false"}
                aria-label="Toggle navigation"
              >
                {isMobileMenuOpen ? (
                  <span className="fs-2 fw-bold close-icon">&times;</span>
                ) : (
                  <span className="navbar-toggler-animation">
                    <span></span>
                    <span></span>
                    <span></span>
                  </span>
                )}
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>

    // <header className="header-sticky header-absolute">
    //   <nav className="navbar navbar-expand-xl">
    //     <div className="container">
    //       <a className="navbar-brand me-0" href="index.html">
    //         <img
    //           className="light-mode-item navbar-brand-item"
    //           src="assets/images/logo.svg"
    //           alt="logo"
    //         />
    //         <img
    //           className="dark-mode-item navbar-brand-item"
    //           src="assets/images/logo-light.svg"
    //           alt="logo"
    //         />
    //       </a>

    //       <div className="navbar-collapse collapse" id="navbarCollapse">
    //         <ul className="navbar-nav navbar-nav-scroll dropdown-hover mx-auto">
    //           <li className="nav-item dropdown">
    //             <a
    //               className="nav-link dropdown-toggle active"
    //               href="#"
    //               data-bs-auto-close="outside"
    //               data-bs-toggle="dropdown"
    //               aria-haspopup="true"
    //               aria-expanded="false"
    //             >
    //               Demos
    //             </a>
    //             <div className="dropdown-menu dropdown-menu-size-lg p-3">
    //               <div className="row pt-2">
    //                 <div className="col-sm-6">
    //                   <ul className="list-unstyled">
    //                     <li>
    //                       {" "}
    //                       <a className="dropdown-item" href="index.html">
    //                         Classic Default
    //                       </a>{" "}
    //                     </li>
    //                     <li>
    //                       {" "}
    //                       <a
    //                         className="dropdown-item"
    //                         href="index-creative-agency.html"
    //                       >
    //                         Creative Agency
    //                       </a>{" "}
    //                     </li>
    //                     <li>
    //                       {" "}
    //                       <a
    //                         className="dropdown-item"
    //                         href="index-digital-agency.html"
    //                       >
    //                         Digital Agency
    //                       </a>{" "}
    //                     </li>
    //                     <li>
    //                       {" "}
    //                       <a
    //                         className="dropdown-item"
    //                         href="index-design-agency.html"
    //                       >
    //                         Design Agency
    //                       </a>{" "}
    //                     </li>
    //                     <li>
    //                       {" "}
    //                       <a className="dropdown-item" href="index-seo-agency.html">
    //                         SEO Agency
    //                       </a>{" "}
    //                     </li>
    //                     <li>
    //                       {" "}
    //                       <a
    //                         className="dropdown-item"
    //                         href="index-landing-product.html"
    //                       >
    //                         Product Landing
    //                       </a>{" "}
    //                     </li>
    //                     <li>
    //                       {" "}
    //                       <a
    //                         className="dropdown-item"
    //                         href="index-mobile-app-showcase.html"
    //                       >
    //                         Mobile App Showcase
    //                       </a>{" "}
    //                     </li>
    //                   </ul>
    //                 </div>

    //                 <div className="col-sm-6">
    //                   <ul className="list-unstyled">
    //                     <li>
    //                       {" "}
    //                       <a className="dropdown-item" href="index-saas.html">
    //                         SaaS v.1
    //                       </a>{" "}
    //                     </li>
    //                     <li>
    //                       {" "}
    //                       <a
    //                         className="dropdown-item active"
    //                         href="index-saas-v2.html"
    //                       >
    //                         SaaS v.2
    //                       </a>{" "}
    //                     </li>
    //                     <li>
    //                       {" "}
    //                       <a className="dropdown-item" href="index-saas-v3.html">
    //                         SaaS v.3
    //                       </a>{" "}
    //                     </li>
    //                     <li>
    //                       {" "}
    //                       <a className="dropdown-item" href="index-saas-v4.html">
    //                         SaaS v.4
    //                       </a>{" "}
    //                     </li>
    //                     <li>
    //                       {" "}
    //                       <a className="dropdown-item" href="index-saas-v5.html">
    //                         SaaS v.5
    //                       </a>{" "}
    //                     </li>
    //                     <li>
    //                       {" "}
    //                       <a
    //                         className="dropdown-item"
    //                         href="index-finance-consulting.html"
    //                       >
    //                         Finance consulting
    //                       </a>{" "}
    //                     </li>
    //                     <li>
    //                       {" "}
    //                       <a className="dropdown-item" href="index-shop.html">
    //                         Index Shop
    //                       </a>{" "}
    //                     </li>
    //                   </ul>
    //                 </div>

    //                 <div className="col-12">
    //                   <hr className="mt-2" />
    //                   <div className="d-sm-flex justify-content-between align-items-center px-2">
    //                     <div className="me-3 mb-2 mb-sm-0">
    //                       <h6 className="mb-2 mb-sm-0">Ready to get started?</h6>
    //                       <small className="mb-0">
    //                         Take your documents to the next level with Mizzle
    //                       </small>
    //                     </div>
    //                     <a href="#" className="btn btn-sm btn-primary">
    //                       Get in touch
    //                     </a>
    //                   </div>
    //                 </div>
    //               </div>
    //             </div>
    //           </li>

    //           <li className="nav-item dropdown">
    //             <a
    //               className="nav-link dropdown-toggle"
    //               href="#"
    //               data-bs-toggle="dropdown"
    //               data-bs-auto-close="outside"
    //               aria-haspopup="true"
    //               aria-expanded="false"
    //             >
    //               Pages
    //             </a>
    //             <ul className="dropdown-menu">
    //               <li className="dropdown dropend">
    //                 <a
    //                   className="nav-link dropdown-link dropdown-toggle"
    //                   data-bs-toggle="dropdown"
    //                   href="#"
    //                 >
    //                   About
    //                 </a>
    //                 <ul className="dropdown-menu" data-bs-popper="none">
    //                   <li>
    //                     {" "}
    //                     <a className="dropdown-item" href="about-v1.html">
    //                       About v.1
    //                     </a>
    //                   </li>
    //                   <li>
    //                     {" "}
    //                     <a className="dropdown-item" href="about-v2.html">
    //                       About v.2
    //                     </a>
    //                   </li>
    //                   <li>
    //                     {" "}
    //                     <a className="dropdown-item" href="about-v3.html">
    //                       About v.3
    //                     </a>
    //                   </li>
    //                   <li>
    //                     {" "}
    //                     <a className="dropdown-item" href="team.html">
    //                       Team
    //                     </a>
    //                   </li>
    //                   <li>
    //                     {" "}
    //                     <a className="dropdown-item" href="services-v1.html">
    //                       Services v.1
    //                     </a>
    //                   </li>
    //                   <li>
    //                     {" "}
    //                     <a className="dropdown-item" href="services-v2.html">
    //                       Services v.2
    //                     </a>
    //                   </li>
    //                   <li>
    //                     {" "}
    //                     <a className="dropdown-item" href="service-single.html">
    //                       Service Single
    //                     </a>
    //                   </li>
    //                   <li>
    //                     {" "}
    //                     <a className="dropdown-item" href="customer-stories.html">
    //                       Customer Stories
    //                     </a>
    //                   </li>
    //                   <li>
    //                     {" "}
    //                     <a
    //                       className="dropdown-item"
    //                       href="customer-story-single.html"
    //                     >
    //                       Customer Story Single
    //                     </a>
    //                   </li>
    //                   <li>
    //                     {" "}
    //                     <a className="dropdown-item" href="career.html">
    //                       Career{" "}
    //                       <span className="badge text-bg-primary ms-2">2 Job</span>
    //                     </a>
    //                   </li>
    //                   <li>
    //                     {" "}
    //                     <a className="dropdown-item" href="career-single.html">
    //                       Career Single
    //                     </a>
    //                   </li>
    //                 </ul>
    //               </li>

    //               <li>
    //                 {" "}
    //                 <a className="dropdown-item" href="contact-v1.html">
    //                   Contact v.1
    //                 </a>
    //               </li>
    //               <li>
    //                 {" "}
    //                 <a className="dropdown-item" href="contact-v2.html">
    //                   Contact v.2
    //                 </a>
    //               </li>

    //               <li className="dropdown dropend">
    //                 <a
    //                   className="dropdown-item dropdown-toggle"
    //                   data-bs-toggle="dropdown"
    //                   href="#"
    //                 >
    //                   SaaS Pages
    //                 </a>
    //                 <ul className="dropdown-menu">
    //                   <li>
    //                     {" "}
    //                     <a className="dropdown-item" href="features.html">
    //                       Features
    //                     </a>
    //                   </li>
    //                   <li>
    //                     {" "}
    //                     <a className="dropdown-item" href="feature-single.html">
    //                       Feature Single
    //                     </a>
    //                   </li>
    //                   <li>
    //                     {" "}
    //                     <a className="dropdown-item" href="integrations.html">
    //                       Integrations
    //                     </a>
    //                   </li>
    //                   <li>
    //                     {" "}
    //                     <a className="dropdown-item" href="integration-single.html">
    //                       Integration Single
    //                     </a>
    //                   </li>
    //                 </ul>
    //               </li>

    //               <li className="dropdown dropend">
    //                 <a
    //                   className="dropdown-item dropdown-toggle"
    //                   data-bs-toggle="dropdown"
    //                   href="#"
    //                 >
    //                   Shop
    //                 </a>
    //                 <ul className="dropdown-menu">
    //                   <li>
    //                     {" "}
    //                     <a className="dropdown-item" href="shop-grid.html">
    //                       Shop Grid
    //                     </a>
    //                   </li>
    //                   <li>
    //                     {" "}
    //                     <a className="dropdown-item" href="shop-single.html">
    //                       Shop Single
    //                     </a>
    //                   </li>
    //                   <li>
    //                     {" "}
    //                     <a className="dropdown-item" href="shop-cart.html">
    //                       Shop Cart
    //                     </a>
    //                   </li>
    //                   <li>
    //                     {" "}
    //                     <a className="dropdown-item" href="shop-empty-cart.html">
    //                       Shop Empty Cart
    //                     </a>
    //                   </li>
    //                   <li>
    //                     {" "}
    //                     <a className="dropdown-item" href="shop-checkout.html">
    //                       Shop Checkout
    //                     </a>
    //                   </li>
    //                 </ul>
    //               </li>

    //               <li className="dropdown dropend">
    //                 <a
    //                   className="dropdown-item dropdown-toggle"
    //                   data-bs-toggle="dropdown"
    //                   href="#"
    //                 >
    //                   Blog
    //                 </a>
    //                 <ul className="dropdown-menu">
    //                   <li>
    //                     {" "}
    //                     <a className="dropdown-item" href="blog-grid.html">
    //                       Blog Grid
    //                     </a>
    //                   </li>
    //                   <li>
    //                     {" "}
    //                     <a className="dropdown-item" href="blog-list-sidebar.html">
    //                       Blog List Sidebar
    //                     </a>
    //                   </li>
    //                   <li>
    //                     {" "}
    //                     <a className="dropdown-item" href="blog-single-v1.html">
    //                       Blog Single v.1
    //                     </a>
    //                   </li>
    //                   <li>
    //                     {" "}
    //                     <a className="dropdown-item" href="blog-single-v2.html">
    //                       Blog Single v.2
    //                     </a>
    //                   </li>
    //                 </ul>
    //               </li>

    //               <li className="dropdown dropend">
    //                 <a
    //                   className="nav-link dropdown-link dropdown-toggle"
    //                   data-bs-toggle="dropdown"
    //                   href="#"
    //                 >
    //                   Specialty Pages
    //                 </a>
    //                 <ul className="dropdown-menu" data-bs-popper="none">
    //                   <li>
    //                     {" "}
    //                     <a className="dropdown-item" href="help-center.html">
    //                       Help Center
    //                     </a>
    //                   </li>
    //                   <li>
    //                     {" "}
    //                     <a className="dropdown-item" href="help-center-detail.html">
    //                       Help Center Detail
    //                     </a>
    //                   </li>
    //                   <li>
    //                     {" "}
    //                     <a className="dropdown-item" href="pricing.html">
    //                       Pricing
    //                     </a>
    //                   </li>
    //                   <li>
    //                     {" "}
    //                     <a className="dropdown-item" href="faq.html">
    //                       Faqs
    //                     </a>
    //                   </li>
    //                   <li>
    //                     {" "}
    //                     <a className="dropdown-item" href="error-404.html">
    //                       Error 404
    //                     </a>
    //                   </li>
    //                   <li>
    //                     {" "}
    //                     <a className="dropdown-item" href="coming-soon.html">
    //                       Coming Soon
    //                     </a>
    //                   </li>
    //                   <li>
    //                     {" "}
    //                     <a
    //                       className="dropdown-item"
    //                       href="terms-and-condition.html"
    //                     >
    //                       Terms & Conditions
    //                     </a>
    //                   </li>
    //                 </ul>
    //               </li>

    //               <li className="dropdown dropend">
    //                 <a
    //                   className="dropdown-item dropdown-toggle"
    //                   data-bs-toggle="dropdown"
    //                   href="#"
    //                 >
    //                   Authentication
    //                 </a>
    //                 <ul className="dropdown-menu" data-bs-popper="none">
    //                   <li>
    //                     {" "}
    //                     <a className="dropdown-item" href="sign-up.html">
    //                       Sign Up
    //                     </a>
    //                   </li>
    //                   <li>
    //                     {" "}
    //                     <a className="dropdown-item" href="sign-in.html">
    //                       Sign In
    //                     </a>
    //                   </li>
    //                   <li>
    //                     {" "}
    //                     <a className="dropdown-item" href="forgot-password.html">
    //                       Forgot Password
    //                     </a>
    //                   </li>
    //                 </ul>
    //               </li>

    //               <li className="dropdown dropend">
    //                 <a
    //                   className="dropdown-item dropdown-toggle"
    //                   data-bs-toggle="dropdown"
    //                   href="#"
    //                 >
    //                   Accounts
    //                 </a>
    //                 <ul className="dropdown-menu" data-bs-popper="none">
    //                   <li>
    //                     {" "}
    //                     <a className="dropdown-item" href="account-detail.html">
    //                       Details
    //                     </a>
    //                   </li>
    //                   <li>
    //                     {" "}
    //                     <a className="dropdown-item" href="account-security.html">
    //                       Security
    //                     </a>
    //                   </li>
    //                   <li>
    //                     {" "}
    //                     <a
    //                       className="dropdown-item"
    //                       href="account-notification.html"
    //                     >
    //                       Notifications
    //                     </a>
    //                   </li>
    //                   <li>
    //                     {" "}
    //                     <a className="dropdown-item" href="account-projects.html">
    //                       My Projects
    //                     </a>
    //                   </li>
    //                   <li>
    //                     {" "}
    //                     <a
    //                       className="dropdown-item"
    //                       href="account-payment-details.html"
    //                     >
    //                       Payment Details
    //                     </a>
    //                   </li>
    //                   <li>
    //                     {" "}
    //                     <a className="dropdown-item" href="account-order.html">
    //                       Order History
    //                     </a>
    //                   </li>
    //                   <li>
    //                     {" "}
    //                     <a className="dropdown-item" href="account-wishlist.html">
    //                       Wishlist
    //                     </a>
    //                   </li>
    //                   <li>
    //                     {" "}
    //                     <a className="dropdown-item" href="account-delete.html">
    //                       Delete Profile
    //                     </a>
    //                   </li>
    //                 </ul>
    //               </li>

    //               <li>
    //                 {" "}
    //                 <hr className="dropdown-divider" />
    //               </li>

    //               <li className="dropdown dropend">
    //                 <a
    //                   className="dropdown-item dropdown-toggle"
    //                   data-bs-toggle="dropdown"
    //                   data-bs-auto-close="outside"
    //                   href="#"
    //                 >
    //                   Dropdown levels
    //                 </a>
    //                 <ul className="dropdown-menu">
    //                   <li className="dropdown dropend">
    //                     <a
    //                       className="dropdown-item dropdown-toggle"
    //                       data-bs-toggle="dropdown"
    //                       data-bs-auto-close="outside"
    //                       href="#"
    //                     >
    //                       Dropdown (end)
    //                     </a>
    //                     <ul className="dropdown-menu">
    //                       <li>
    //                         {" "}
    //                         <a className="dropdown-item" href="#">
    //                           Dropdown item
    //                         </a>{" "}
    //                       </li>
    //                       <li>
    //                         {" "}
    //                         <a className="dropdown-item" href="#">
    //                           Dropdown item
    //                         </a>{" "}
    //                       </li>
    //                     </ul>
    //                   </li>
    //                   <li>
    //                     {" "}
    //                     <a className="dropdown-item" href="#">
    //                       Dropdown item
    //                     </a>{" "}
    //                   </li>

    //                   <li className="dropdown dropstart">
    //                     <a
    //                       className="dropdown-item dropdown-toggle"
    //                       data-bs-toggle="dropdown"
    //                       data-bs-auto-close="outside"
    //                       href="#"
    //                     >
    //                       Dropdown (start)
    //                     </a>
    //                     <ul className="dropdown-menu">
    //                       <li>
    //                         {" "}
    //                         <a className="dropdown-item" href="#">
    //                           Dropdown item
    //                         </a>{" "}
    //                       </li>
    //                       <li>
    //                         {" "}
    //                         <a className="dropdown-item" href="#">
    //                           Dropdown item
    //                         </a>{" "}
    //                       </li>
    //                     </ul>
    //                   </li>
    //                   <li>
    //                     {" "}
    //                     <a className="dropdown-item" href="#">
    //                       Dropdown item
    //                     </a>{" "}
    //                   </li>
    //                 </ul>
    //               </li>
    //             </ul>
    //           </li>

    //           <li className="nav-item dropdown">
    //             <a
    //               className="nav-link dropdown-toggle"
    //               href="#"
    //               data-bs-toggle="dropdown"
    //               aria-haspopup="true"
    //               aria-expanded="false"
    //             >
    //               Portfolio
    //             </a>
    //             <div className="dropdown-menu dropdown-menu-center dropdown-menu-size-xl p-3">
    //               <div className="row g-xl-3">
    //                 <div className="col-xl-8 d-none d-xl-block">
    //                   <div className="d-flex gap-4">
    //                     <div className="card bg-transparent">
    //                       <img
    //                         src="assets/images/portfolio/list/01.jpg"
    //                         className="card-img"
    //                         alt=""
    //                       />
    //                       <div className="card-body px-0 text-start pb-0">
    //                         <h6>
    //                           <a href="#">Ceremony Worthy of Time</a>
    //                         </h6>
    //                         <p className="mb-2 small">
    //                           We help our customers better manage their web
    //                           presence.
    //                         </p>
    //                         <a
    //                           className="icon-link icon-link-hover stretched-link mb-0"
    //                           href="portfolio-case-studies-v1.html"
    //                         >
    //                           Learn more<i className="bi bi-arrow-right"></i>{" "}
    //                         </a>
    //                       </div>
    //                     </div>

    //                     <div className="card bg-transparent">
    //                       <img
    //                         src="assets/images/portfolio/list/02.jpg"
    //                         className="card-img"
    //                         alt=""
    //                       />
    //                       <div className="card-body px-0 text-start pb-0">
    //                         <h6>
    //                           <a href="#">Brushstrokes and Beyond</a>
    //                         </h6>
    //                         <p className="mb-2 small">
    //                           We help our customers better manage their web
    //                           presence.
    //                         </p>
    //                         <a
    //                           className="icon-link icon-link-hover stretched-link mb-0"
    //                           href="portfolio-case-studies-v2.html"
    //                         >
    //                           Learn more<i className="bi bi-arrow-right"></i>{" "}
    //                         </a>
    //                       </div>
    //                     </div>

    //                     <div className="vr ms-2"></div>
    //                   </div>
    //                 </div>

    //                 <div className="col-xl-4">
    //                   <ul className="list-unstyled">
    //                     <li className="dropdown-header h6">Portfolio Pages</li>
    //                     <li>
    //                       {" "}
    //                       <a
    //                         className="dropdown-item"
    //                         href="portfolio-masonry.html"
    //                       >
    //                         Portfolio Masonry
    //                       </a>{" "}
    //                     </li>
    //                     <li>
    //                       {" "}
    //                       <a
    //                         className="dropdown-item"
    //                         href="portfolio-showcase.html"
    //                       >
    //                         Portfolio Showcase
    //                       </a>{" "}
    //                     </li>
    //                     <li>
    //                       {" "}
    //                       <a className="dropdown-item" href="portfolio-list.html">
    //                         Portfolio List
    //                       </a>{" "}
    //                     </li>
    //                     <li>
    //                       {" "}
    //                       <a
    //                         className="dropdown-item"
    //                         href="portfolio-case-studies-v1.html"
    //                       >
    //                         Portfolio Case Study v.1
    //                       </a>{" "}
    //                     </li>
    //                     <li>
    //                       {" "}
    //                       <a
    //                         className="dropdown-item"
    //                         href="portfolio-case-studies-v2.html"
    //                       >
    //                         Portfolio Case Study v.2
    //                       </a>{" "}
    //                     </li>
    //                   </ul>
    //                 </div>
    //               </div>
    //             </div>
    //           </li>

    //           <li className="nav-item">
    //             {" "}
    //             <a className="nav-link" href="contact-v1.html">
    //               Contact us
    //             </a>{" "}
    //           </li>

    //           <li className="nav-item">
    //             {" "}
    //             <a className="nav-link" href="docs/index.html" target="_blank">
    //               Docs
    //             </a>
    //           </li>
    //         </ul>
    //       </div>

    //       <ul className="nav align-items-center dropdown-hover ms-sm-2">
    //         <li className="nav-item dropdown dropdown-animation">
    //           <button
    //             className="btn btn-link mb-0 px-2 lh-1"
    //             id="bd-theme"
    //             type="button"
    //             aria-expanded="false"
    //             data-bs-toggle="dropdown"
    //             data-bs-display="static"
    //           >
    //             <svg
    //               xmlns="http://www.w3.org/2000/svg"
    //               width="20"
    //               height="20"
    //               className="bi bi-circle-half theme-icon-active fill-mode fa-fw"
    //               viewBox="0 0 16 16"
    //             >
    //               <path d="M8 15A7 7 0 1 0 8 1v14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z" />
    //               <use href="#"></use>
    //             </svg>
    //           </button>

    //           <ul
    //             className="dropdown-menu min-w-auto dropdown-menu-end"
    //             aria-labelledby="bd-theme"
    //           >
    //             <li className="mb-1">
    //               <button
    //                 type="button"
    //                 className="dropdown-item d-flex align-items-center"
    //                 data-bs-theme-value="light"
    //               >
    //                 <svg
    //                   width="16"
    //                   height="16"
    //                   fill="currentColor"
    //                   className="bi bi-brightness-high-fill fa-fw mode-switch me-1"
    //                   viewBox="0 0 16 16"
    //                 >
    //                   <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
    //                   <use href="#"></use>
    //                 </svg>
    //                 Light
    //               </button>
    //             </li>
    //             <li className="mb-1">
    //               <button
    //                 type="button"
    //                 className="dropdown-item d-flex align-items-center"
    //                 data-bs-theme-value="dark"
    //               >
    //                 <svg
    //                   xmlns="http://www.w3.org/2000/svg"
    //                   width="16"
    //                   height="16"
    //                   fill="currentColor"
    //                   className="bi bi-moon-stars-fill fa-fw mode-switch me-1"
    //                   viewBox="0 0 16 16"
    //                 >
    //                   <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z" />
    //                   <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z" />
    //                   <use href="#"></use>
    //                 </svg>
    //                 Dark
    //               </button>
    //             </li>
    //             <li>
    //               <button
    //                 type="button"
    //                 className="dropdown-item d-flex align-items-center active"
    //                 data-bs-theme-value="auto"
    //               >
    //                 <svg
    //                   xmlns="http://www.w3.org/2000/svg"
    //                   width="16"
    //                   height="16"
    //                   fill="currentColor"
    //                   className="bi bi-circle-half fa-fw mode-switch me-1"
    //                   viewBox="0 0 16 16"
    //                 >
    //                   <path d="M8 15A7 7 0 1 0 8 1v14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z" />
    //                   <use href="#"></use>
    //                 </svg>
    //                 Auto
    //               </button>
    //             </li>
    //           </ul>
    //         </li>

    //         <li className="nav-item me-2">
    //           <a href="sign-up.html" className="btn btn-sm btn-light mb-0">
    //             <i className="bi bi-person-circle me-1"></i>Sign up
    //           </a>
    //         </li>
    //         <li className="nav-item d-none d-sm-block">
    //           <button className="btn btn-sm btn-primary mb-0">Buy now!</button>
    //         </li>
    //         <li className="nav-item">
    //           <button
    //             className="navbar-toggler ms-sm-3 p-2"
    //             type="button"
    //             data-bs-toggle="collapse"
    //             data-bs-target="#navbarCollapse"
    //             aria-controls="navbarCollapse"
    //             aria-expanded="false"
    //             aria-label="Toggle navigation"
    //           >
    //             <span className="navbar-toggler-animation">
    //               <span></span>
    //               <span></span>
    //               <span></span>
    //             </span>
    //           </button>
    //         </li>
    //       </ul>
    //     </div>
    //   </nav>
    // </header>
  );
}

export default Header;
