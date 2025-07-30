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
              src="assets/images/logos/opsera-footer-dark-4.svg"
              // style={{ height: '50px' }}
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
    </header>
  );
}

export default Header;
