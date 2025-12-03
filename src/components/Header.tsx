import { useState, useEffect } from "react";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [isMainMenuOpen, setIsMainMenuOpen] = useState(false);
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
    // <header
    //   className={`header-absolute ${isSticky ? "is-sticky" : ""}`}
    //   style={{
    //     backgroundColor: '#191b1d',
    //     color: '#ffffff',
    //   }}
    // >
    <header
      className={`header-absolute ${isSticky ? "is-sticky" : ""}`}
      style={{
        backgroundColor: isSticky ? '#191b1d' : 'transparent',
        color: '#ffffff',
        transition: 'background-color 0.3s ease', // Smooth transition
      }}
    >
      {/* ========= PRIMARY NAVBAR ========= */}
      <nav className="navbar navbar-expand-xl px-lg-5 primary-nav">
        <div className="container-fluid">

          <a className="navbar-brand me-5" href="/">
            <img className="light-mode-item navbar-brand-item" src="assets/images/logos/opsera-footer-light-4.svg" alt="logo" />
          </a>

          {/* Main collapse */}
          <div className={`collapse navbar-collapse ${isMainMenuOpen ? "show" : ""}`} id="mainNav">
            <ul className="navbar-nav navbar-nav-scroll dropdown-hover">
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle active" href="#" data-bs-toggle="dropdown" style={{ color: "white" }}>Products</a>
                <div className="dropdown-menu dropdown-menu-size-md p-3">
                  <ul className="list-unstyled">
                    <li className="dropdown-item">
                      <a className="fw-bold text-black" href="/sales"
                      >Opsera Sales
                        <p style={{ fontWeight: 'normal' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                      </a>
                    </li>
                    <li className="dropdown-item">
                      <a className="fw-bold text-black" href="/buildsync">BuildSync
                        <p style={{ fontWeight: 'normal' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                      </a>
                    </li>
                  </ul>
                  {/* <hr />
                  <div className="d-flex justify-content-between align-items-center px-2">
                    <div>
                      <h6 className="mb-1">Ready to get started?</h6>
                      <small>Take your documents to the next level with Mizzle</small>
                    </div>
                    <a href="#" className="btn btn-sm btn-primary">Get in touch</a>
                  </div> */}
                </div>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle active" href="#" data-bs-toggle="dropdown" style={{ color: "white" }}>Partners</a>
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
              <li className="nav-item"><a className="nav-link" href="/#features" style={{ color: "white" }} onClick={() => setIsMobileMenuOpen(false)}>Testimonials</a></li>
              <li className="nav-item"><a className="nav-link" href="/#pricing" style={{ color: "white" }} onClick={() => setIsMobileMenuOpen(false)}>About Us</a></li>
              <li className="nav-item"><a className="nav-link" href="/#pricing" style={{ color: "white" }} onClick={() => setIsMobileMenuOpen(false)}>Contact Us</a></li>
            </ul>
          </div>

          {/* Main toggler */}
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

        </div>
      </nav>

    </header>
  );
}

export default Header;