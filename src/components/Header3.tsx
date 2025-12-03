import { useState, useEffect } from "react";

function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const [isMainMenuOpen, setIsMainMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSecondaryMenuOpen, setIsSecondaryMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsSticky(window.scrollY > 100);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleMainMenu = () => {
    setIsMainMenuOpen(!isMainMenuOpen);
    if (!isMainMenuOpen) setIsSecondaryMenuOpen(false);
  };

  const toggleSecondaryMenu = () => {
    setIsSecondaryMenuOpen(!isSecondaryMenuOpen);
    if (!isSecondaryMenuOpen) setIsMainMenuOpen(false);
  };

  const closeAllMenus = () => {
    setIsMainMenuOpen(false);
    setIsSecondaryMenuOpen(false);
  };

  return (
    <header className={`header-absolute ${isSticky ? "is-sticky" : ""}`}>

      {/* ========= PRIMARY NAVBAR ========= */}
      <nav className="navbar navbar-expand-xl px-lg-5 primary-nav">
        <div className="container-fluid">

          <a className="navbar-brand me-5" href="/">
            <img className="light-mode-item navbar-brand-item" src="assets/images/logos/opsera-footer-dark-4.svg" alt="logo" />
          </a>

          {/* Main collapse */}
          <div className={`collapse navbar-collapse ${isMainMenuOpen ? "show" : ""}`} id="mainNav">
            <ul className="navbar-nav navbar-nav-scroll dropdown-hover">
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle active" href="#" data-bs-toggle="dropdown">Products</a>
                <div className="dropdown-menu dropdown-menu-size-md p-3">
                  <ul className="list-unstyled">
                    <li className="dropdown-item">
                      <a className="fw-bold text-black" href="index-2.html">Opsera Sales</a>
                      <p style={{ fontWeight: 'normal' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </li>
                    <li className="dropdown-item">
                      <a className="fw-bold text-black" href="index-2.html">BuildSync</a>
                      <p style={{ fontWeight: 'normal' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle active" href="#" data-bs-toggle="dropdown">Partners</a>
                <div className="dropdown-menu dropdown-menu-size-md p-3">
                  <ul className="list-unstyled">
                    <li className="dropdown-item">
                      <a className="fw-bold text-black" href="index-2.html">Work with a partner</a>
                    </li>
                    <li className="dropdown-item">
                      <a className="fw-bold text-black" href="index-2.html">Become a partner</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-item"><a className="nav-link" href="/#features" onClick={() => setIsMobileMenuOpen(false)}>Testimonials</a></li>
              <li className="nav-item"><a className="nav-link" href="/#pricing" onClick={() => setIsMobileMenuOpen(false)}>About Us</a></li>
              <li className="nav-item"><a className="nav-link" href="/#pricing" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</a></li>
            </ul>
          </div>
          <ul className="nav align-items-center dropdown-hover ms-sm-2 d-none d-xl-flex">
            <li className="nav-item d-none d-sm-block">
              <a href="/#get-started" className="btn btn-md btn-primary mb-0">Get Started!</a>
            </li>
            <li className="nav-item">
              <button
                className="navbar-toggler ms-3 p-2"
                type="button"
                onClick={toggleMainMenu}
              >
                {isMainMenuOpen ? (
                  <span className="fs-2 fw-bold close-icon">&times;</span>
                ) : (
                  <span className="navbar-toggler-animation">
                    <span></span><span></span><span></span>
                  </span>
                )}
              </button>
            </li>
          </ul>

        </div>
      </nav>

      {/* ========= SECONDARY NAVBAR ========= */}
      <nav className={`navbar navbar-expand-xl secondary-nav ${isMainMenuOpen ? "d-none" : ""}`}>
        <div className="container">

          {/* Mobile Logo + toggler */}
          <div className="d-flex align-items-center d-xl-none">
            <button
              className="btn-sm navbar-toggler me-3"
              type="button"
              onClick={toggleSecondaryMenu}
            >
              {isSecondaryMenuOpen ? (
                <span className="fs-3 fw-bold close-icon">&times;</span>
              ) : (
                <span className="navbar-toggler-animation">
                  <span></span><span></span><span></span>
                </span>
              )}
            </button>

            <a className="navbar-brand me-0" href="/">
              <img className="light-mode-item navbar-brand-item" src="assets/images/logos/opsera-footer-light-4.svg" alt="logo" />
            </a>
          </div>

          {/* Desktop logo */}
          <a className="navbar-brand me-0 d-none d-xl-block" href="/">
            <img className="light-mode-item navbar-brand-item" src="assets/images/logos/opsera-footer-light-4.svg" alt="logo" />
          </a>

          {/* Secondary items */}
          <div className={`collapse navbar-collapse ${isSecondaryMenuOpen ? "show" : ""}`} id="secondaryNav">
            <ul className="navbar-nav mx-auto">
              {["Home", "Features", "Benefits", "Pricing", "Testimonials", "FAQs"].map(item => (
                <li className="nav-item" key={item}>
                  <a
                    className="nav-link"
                    href={`/#${item.toLowerCase()}`}
                    onClick={closeAllMenus}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </nav>

    </header>
  );
}

export default Header;
