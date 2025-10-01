import { useState, useEffect } from "react";

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
                <a className="nav-link dropdown-toggle active" href="#" data-bs-auto-close="outside" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Products</a>
                <div className="dropdown-menu dropdown-menu-size-lg p-3">
                  <div className="row pt-2">
                    <div className="col-sm-6">
                      <ul className="list-unstyled">
                        <li> <a className="dropdown-item" href="index-2.html">Classic Default</a> </li>
                        <li> <a className="dropdown-item" href="index-creative-agency.html">Creative Agency</a> </li>
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
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle active" href="#" data-bs-auto-close="outside" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Partners</a>
                <div className="dropdown-menu dropdown-menu-size-lg p-3">
                  <div className="row pt-2">
                    <div className="col-sm-6">
                      <ul className="list-unstyled">
                        <li> <a className="dropdown-item" href="index-2.html">Work with a partner</a> </li>
                        <li> <a className="dropdown-item" href="index-creative-agency.html">Become a partner</a> </li>
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
              <li className="nav-item"><a className="nav-link" href="/#features" onClick={() => setIsMobileMenuOpen(false)}>Testimonials</a></li>
              <li className="nav-item"><a className="nav-link" href="/#pricing" onClick={() => setIsMobileMenuOpen(false)}>About Us</a></li>
              <li className="nav-item"><a className="nav-link" href="/#pricing" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</a></li>
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
            <li className="nav-item"><a className="nav-link" href="/#home">Home</a></li>
            <li className="nav-item"><a className="nav-link" href="/#features">Features</a></li>
            <li className="nav-item"><a className="nav-link" href="/#benefits">Benefits</a></li>
            <li className="nav-item"><a className="nav-link" href="/#pricing">Pricing</a></li>
            <li className="nav-item"><a className="nav-link" href="/#testimonials">Testtimonials</a></li>
            <li className="nav-item"><a className="nav-link" href="/#faqs">FAQs</a></li>
          </ul>
          {/* <ul className="navbar-nav mx-auto d-none d-xl-flex">
            <li className="nav-item d-none d-sm-block">
              <a href="/#get-started" className="btn btn-sm btn-primary mb-0">Get Started!</a>
            </li>
          </ul> */}

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
