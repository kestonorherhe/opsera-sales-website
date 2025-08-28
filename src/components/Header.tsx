import { useState, useEffect } from "react";

// function Header() {
//   const [isSticky, setIsSticky] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   // Function to handle scroll event
//   useEffect(() => {
//     const handleScroll = () => {
//       // You can adjust this value to determine when the header becomes sticky
//       const scrollThreshold = 100;

//       if (window.scrollY > scrollThreshold) {
//         setIsSticky(true);
//       } else {
//         setIsSticky(false);
//       }
//     };

//     // Add scroll event listener
//     window.addEventListener("scroll", handleScroll);

//     // Clean up event listener
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   // Toggle mobile menu
//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   return (
//     <header className={`header-absolute ${isSticky ? "is-sticky" : ""}`}>
//       <nav className="navbar navbar-expand-xl">
//         <div className="container">
//           <a className="navbar-brand me-0" href="/">
//             <img
//               className="light-mode-item navbar-brand-item"
//               src="assets/images/logos/opsera-footer-dark-4.svg"
//               style={{ height: '55px' }}
//               alt="logo"
//             />
//             <img
//               className="dark-mode-item navbar-brand-item"
//               src="assets/images/logo-light.svg"
//               alt="logo"
//             />
//           </a>

//           <div
//             className={`collapse navbar-collapse ${isMobileMenuOpen ? "show" : ""
//               }`}
//             id="navbarCollapse"
//           >
//             <ul className="navbar-nav navbar-nav-scroll dropdown-hover mx-auto">
//               <li className="nav-item">
//                 <a
//                   className="nav-link"
//                   href="/#home"
//                   onClick={() => setIsMobileMenuOpen(false)}
//                 >
//                   Home
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a
//                   className="nav-link"
//                   href="/#features"
//                   onClick={() => setIsMobileMenuOpen(false)}
//                 >
//                   Features
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a
//                   className="nav-link"
//                   href="/#benefits"
//                   onClick={() => setIsMobileMenuOpen(false)}
//                 >
//                   Benefits
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a
//                   className="nav-link"
//                   href="/#pricing"
//                   onClick={() => setIsMobileMenuOpen(false)}
//                 >
//                   Pricing
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a
//                   className="nav-link"
//                   href="/#testimonials"
//                   onClick={() => setIsMobileMenuOpen(false)}
//                 >
//                   Testimonials
//                 </a>
//               </li>
//             </ul>
//           </div>

//           <ul className="nav align-items-center dropdown-hover ms-sm-2">
//             <li className="nav-item d-none d-sm-block">
//               <a href="/#get-started" className="btn btn-sm btn-primary mb-0">Get Started!</a>
//             </li>
//             <li className="nav-item">
//               <button
//                 className="navbar-toggler ms-auto"
//                 type="button"
//                 onClick={toggleMobileMenu}
//                 aria-controls="navbarCollapse"
//                 aria-expanded={isMobileMenuOpen ? "true" : "false"}
//                 aria-label="Toggle navigation"
//               >
//                 {isMobileMenuOpen ? (
//                   <span className="fs-2 fw-bold close-icon">&times;</span>
//                 ) : (
//                   <span className="navbar-toggler-animation">
//                     <span></span>
//                     <span></span>
//                     <span></span>
//                   </span>
//                 )}
//               </button>
//             </li>
//           </ul>
//         </div>
//       </nav>
//     </header>
//   );
// }

// function Header() {
//   const [isSticky, setIsSticky] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollThreshold = 100;

//       if (window.scrollY > scrollThreshold) {
//         setIsSticky(true);
//       } else {
//         setIsSticky(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   return (
//     <header className={`header-absolute ${isSticky ? "is-sticky" : ""}`}>
//       {/* === Main Menu === */}
//       <nav className="navbar navbar-expand-xl main-nav">
//         <div className="container">
//           <ul className="nav align-items-center dropdown-hover ms-sm-2">
//             <li className="nav-item d-none d-sm-block">
//               <a href="/#get-started" className="btn btn-sm btn-primary mb-0">Get Started!</a>
//             </li>
//             <li className="nav-item">
//               <button
//                 className="navbar-toggler ms-auto"
//                 type="button"
//                 onClick={toggleMobileMenu}
//                 aria-controls="navbarCollapse"
//                 aria-expanded={isMobileMenuOpen ? "true" : "false"}
//                 aria-label="Toggle navigation"
//               >
//                 {isMobileMenuOpen ? (
//                   <span className="fs-2 fw-bold close-icon">&times;</span>
//                 ) : (
//                   <span className="navbar-toggler-animation">
//                     <span></span>
//                     <span></span>
//                     <span></span>
//                   </span>
//                 )}
//               </button>
//             </li>
//           </ul>

//           <a className="navbar-brand me-0" href="/">
//             <img
//               className="light-mode-item navbar-brand-item"
//               src="assets/images/logos/opsera-footer-dark-4.svg"
//               style={{ height: '55px' }}
//               alt="logo"
//             />
//             <img
//               className="dark-mode-item navbar-brand-item"
//               src="assets/images/logo-light.svg"
//               alt="logo"
//             />
//           </a>

//           <div className={`collapse navbar-collapse ${isMobileMenuOpen ? "show" : ""}`} id="navbarCollapse">
//             <ul className="navbar-nav navbar-nav-scroll dropdown-hover mx-auto">
//               <li className="nav-item">
//                 <a className="nav-link" href="/#home" onClick={() => setIsMobileMenuOpen(false)}>
//                   Home
//                 </a>
//               </li>
//               <li className="nav-item"><a className="nav-link" href="/#features">Features</a></li>
//               <li className="nav-item"><a className="nav-link" href="/#pricing">Pricing</a></li>
//             </ul>
//           </div>


//         </div>
//       </nav>

//       {/* === Secondary Menu (stacked under main) === */}
//       <nav className="navbar navbar-expand-xl secondary-nav">
//         <div className="container">
//           <ul className="navbar-nav mx-auto">
//             <li className="nav-item"><a className="nav-link" href="/#solution">Solution</a></li>
//             <li className="nav-item"><a className="nav-link" href="/#customers">Customers</a></li>
//             <li className="nav-item"><a className="nav-link" href="/#partners">Partner with us</a></li>
//             <li className="nav-item"><a className="nav-link" href="/#resources">Resources</a></li>
//           </ul>
//         </div>

//         <ul className="nav align-items-center dropdown-hover ms-sm-2">
//           <li className="nav-item d-none d-sm-block">
//             <a href="/#get-started" className="btn btn-sm btn-primary mb-0">Get Started!</a>
//           </li>
//           <li className="nav-item">
//             <button
//               className="navbar-toggler ms-auto"
//               type="button"
//               onClick={toggleMobileMenu}
//               aria-controls="navbarCollapse"
//               aria-expanded={isMobileMenuOpen ? "true" : "false"}
//               aria-label="Toggle navigation"
//             >
//               {isMobileMenuOpen ? (
//                 <span className="fs-2 fw-bold close-icon">&times;</span>
//               ) : (
//                 <span className="navbar-toggler-animation">
//                   <span></span>
//                   <span></span>
//                   <span></span>
//                 </span>
//               )}
//             </button>
//           </li>
//         </ul>
//       </nav>
//     </header>
//   );
// }

// export default Header;


function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSecondaryMenuOpen, setIsSecondaryMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 100;

      if (window.scrollY > scrollThreshold) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    // Close secondary menu when main menu is opened
    if (!isMobileMenuOpen) {
      setIsSecondaryMenuOpen(false);
    }
  };

  const toggleSecondaryMenu = () => {
    setIsSecondaryMenuOpen(!isSecondaryMenuOpen);
  };

  return (
    <header className={`header-absolute ${isSticky ? "is-sticky" : ""}`}>
      {/* === Main Menu === */}
      <nav className="navbar navbar-expand-xl main-nav">
        <div className="container">
          {/* Mobile: Left aligned hamburger and logo */}
          <div className="d-flex align-items-center d-xl-none">
            <button
              className="navbar-toggler me-3"
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

            <a className="navbar-brand me-0" href="/">
              <img
                className="light-mode-item navbar-brand-item"
                src="assets/images/logos/opsera-footer-dark-4.svg"
                style={{ height: '55px' }}
                alt="logo"
              />
              <img
                className="dark-mode-item navbar-brand-item"
                src="assets/images/logo-light.svg"
                alt="logo"
              />
            </a>
          </div>

          {/* Desktop: Original layout */}


          <a className="navbar-brand me-0 d-none d-xl-block" href="/">
            <img
              className="light-mode-item navbar-brand-item"
              src="assets/images/logos/opsera-footer-dark-4.svg"
              style={{ height: '55px' }}
              alt="logo"
            />
            <img
              className="dark-mode-item navbar-brand-item"
              src="assets/images/logo-light.svg"
              alt="logo"
            />
          </a>

          <div className={`collapse navbar-collapse ${isMobileMenuOpen ? "show" : ""}`} id="navbarCollapse">
            <ul className="navbar-nav navbar-nav-scroll dropdown-hover mx-auto">
              <li className="nav-item">
                <a className="nav-link" href="/#home" onClick={() => setIsMobileMenuOpen(false)}>
                  Home
                </a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle active" href="#" data-bs-auto-close="outside" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Demos</a>
                <div className="dropdown-menu dropdown-menu-size-lg p-3">
                  <div className="row pt-2">
                    <div className="col-sm-6">
                      <ul className="list-unstyled">
                        <li> <a className="dropdown-item" href="index-2.html">Classic Default</a> </li>
                        <li> <a className="dropdown-item" href="index-creative-agency.html">Creative Agency</a> </li>
                        <li> <a className="dropdown-item" href="index-digital-agency.html">Digital Agency</a> </li>
                        <li> <a className="dropdown-item" href="index-design-agency.html">Design Agency</a> </li>
                        <li> <a className="dropdown-item" href="index-seo-agency.html">SEO Agency</a> </li>
                        <li> <a className="dropdown-item" href="index-landing-product.html">Product Landing</a> </li>
                        <li> <a className="dropdown-item" href="index-mobile-app-showcase.html">Mobile App Showcase</a> </li>
                      </ul>
                    </div>

                    <div className="col-sm-6">
                      <ul className="list-unstyled">
                        <li> <a className="dropdown-item" href="index-saas.html">SaaS v.1</a> </li>
                        <li> <a className="dropdown-item" href="index-saas-v2.html">SaaS v.2</a> </li>
                        <li> <a className="dropdown-item" href="index-saas-v3.html">SaaS v.3</a> </li>
                        <li> <a className="dropdown-item" href="index-saas-v4.html">SaaS v.4</a> </li>
                        <li> <a className="dropdown-item" href="index-saas-v5.html">SaaS v.5</a> </li>
                        <li> <a className="dropdown-item active" href="index-finance-consulting.html">Finance consulting<span className="badge text-bg-success ms-2">New</span></a> </li>
                        <li> <a className="dropdown-item" href="index-shop.html">Index Shop</a> </li>
                      </ul>
                    </div>

                    <div className="col-12">
                      <hr className="mt-2" />
                        <div className="d-sm-flex justify-content-between align-items-center px-2">
                          <div className="me-3 mb-2 mb-sm-0">
                            <h6 className="mb-2 mb-sm-0">Ready to get started?</h6>
                            <small className="mb-0">Take your documents to the next level with Mizzle</small>
                          </div>
                          <a href="#" className="btn btn-sm btn-primary">Get in touch</a>
                        </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item"><a className="nav-link" href="/#features" onClick={() => setIsMobileMenuOpen(false)}>Features</a></li>
              <li className="nav-item"><a className="nav-link" href="/#pricing" onClick={() => setIsMobileMenuOpen(false)}>Pricing</a></li>
            </ul>
          </div>

          <ul className="nav align-items-center dropdown-hover ms-sm-2 d-none d-xl-flex">
            <li className="nav-item d-none d-sm-block">
              <a href="/#get-started" className="btn btn-sm btn-primary mb-0">Get Started!</a>
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

      {/* === Secondary Menu (stacked under main) === */}
      {/* Hide secondary nav when mobile menu is open */}
      <nav className={`navbar navbar-expand-xl secondary-nav ${isMobileMenuOpen ? "d-none" : ""}`}>
        <div className="container">
          <ul className="navbar-nav mx-auto d-none d-xl-flex">
            <li className="nav-item"><a className="nav-link" href="/#solution">Solution</a></li>
            <li className="nav-item"><a className="nav-link" href="/#customers">Customers</a></li>
            <li className="nav-item"><a className="nav-link" href="/#partners">Partner with us</a></li>
            <li className="nav-item"><a className="nav-link" href="/#resources">Resources</a></li>
          </ul>

          {/* Mobile: Right aligned hamburger for secondary nav */}
          <div className="w-100 d-flex justify-content-end d-xl-none">
            <button
              className="navbar-toggler"
              type="button"
              onClick={toggleSecondaryMenu}
              aria-controls="secondaryNavCollapse"
              aria-expanded={isSecondaryMenuOpen ? "true" : "false"}
              aria-label="Toggle secondary navigation"
            >
              {isSecondaryMenuOpen ? (
                <span className="fs-2 fw-bold close-icon">&times;</span>
              ) : (
                <span className="navbar-toggler-animation">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              )}
            </button>
          </div>

          {/* Mobile secondary nav menu - only show on mobile and when expanded */}
          {!window.matchMedia('(min-width: 1200px)').matches && (
            <div className={`collapse navbar-collapse ${isSecondaryMenuOpen ? "show" : ""}`} id="secondaryNavCollapse" style={{ backgroundColor: '#007bff' }}>
              <ul className="navbar-nav mx-auto">
                <li className="nav-item">
                  <a className="nav-link text-white" href="/#solution" onClick={() => setIsSecondaryMenuOpen(false)}>
                    Solution
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="/#customers" onClick={() => setIsSecondaryMenuOpen(false)}>
                    Customers
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="/#partners" onClick={() => setIsSecondaryMenuOpen(false)}>
                    Partner with us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="/#resources" onClick={() => setIsSecondaryMenuOpen(false)}>
                    Resources
                  </a>
                </li>
              </ul>
            </div>
          )}

          {/* Desktop: Original layout */}
          <ul className="nav align-items-center dropdown-hover ms-sm-2 d-none d-xl-flex">
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
  );
}

export default Header;
