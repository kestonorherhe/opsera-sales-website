function Legal() {
  return (
    <main>
      <section
        className="py-8 py-sm-9 position-relative"
        style={{
          // background: "url(assets/images/contact-us.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundColor: "#000",
        }}
      >
        <div className="bg-overlay bg-dark opacity-7"></div>

        <div className="container position-relative z-index-1">
          <div className="row g-4 g-xxl-5">
            <div className="col-lg-8 text-center mx-auto">
              <div className="d-flex justify-content-center position-relative mb-2">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb breadcrumb-dots breadcrumb-dark pb-0 mb-0">
                    {/* <li className="breadcrumb-item">
                      <a href="#">Home</a>
                    </li> */}
                    <li className="breadcrumb-item active" aria-current="page">
                      Privacy Policy
                    </li>
                  </ol>
                </nav>
              </div>
              <h1 className="mb-0 text-white">Privacy Policy</h1>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-lg-8 pt-xl-9">
        <div className="container pt-4 pt-lg-0">
          <div className="row">
            <div className="col-xl-8 mx-auto">
              <div className="text-center mb-6">
                <h1 style={{ fontSize: "25px" }}>Privacy Policy</h1>
                <p className="lead mb-0" style={{ fontSize: "15px" }}>
                  Last updated on April , 2025
                </p>
              </div>

              <p>
                At Softnet Limited, we prioritize the privacy and security of
                your personal information. This Privacy Policy outlines how we
                collect, use, and protect your data when you interact with our
                platform.
              </p>

              <h6 className="mb-3 mt-5">Information We Collect</h6>

              <ul className="list-group list-group-borderless">
                <li className="list-group-item heading-color d-flex mb-0">
                  <i className="bi bi-arrow-right me-2"></i>Personal Information
                  (e.g., name, email, phone number)
                </li>
                <li className="list-group-item heading-color d-flex mb-0">
                  <i className="bi bi-arrow-right me-2"></i>Institutional Data
                  (for institution clients)
                </li>
                <li className="list-group-item heading-color d-flex mb-0">
                  <i className="bi bi-arrow-right me-2"></i>Usage Data (e.g.,
                  browser type, pages visited)
                </li>
                <li className="list-group-item heading-color d-flex mb-0">
                  <i className="bi bi-arrow-right me-2"></i>Device and Log Data
                  (IP address, device identifiers, access logs)
                </li>
              </ul>

              <h6 className="mb-3 mt-5">How We Use Your Information</h6>

              <ul className="list-group list-group-borderless">
                <li className="list-group-item heading-color d-flex mb-0">
                  <i className="bi bi-arrow-right me-2"></i>To provide and
                  maintain our platform services
                </li>
                <li className="list-group-item heading-color d-flex mb-0">
                  <i className="bi bi-arrow-right me-2"></i>For authentication
                  and account management
                </li>
                <li className="list-group-item heading-color d-flex mb-0">
                  <i className="bi bi-arrow-right me-2"></i>To communicate
                  important service updates
                </li>
                <li className="list-group-item heading-color d-flex mb-0">
                  <i className="bi bi-arrow-right me-2"></i>For internal
                  analytics and platform optimization.
                </li>
              </ul>

              <h6 className="mb-3 mt-5">Data Sharing</h6>

              <p>We do not sell your data. We may share data with:</p>

              <ul className="list-group list-group-borderless">
                <li className="list-group-item heading-color d-flex mb-0">
                  <i className="bi bi-arrow-right me-2"></i>Trusted service
                  providers under strict confidentiality
                </li>
                <li className="list-group-item heading-color d-flex mb-0">
                  <i className="bi bi-arrow-right me-2"></i>Legal authorities,
                  when required by applicable law
                </li>
              </ul>

              <h6 className="mb-3 mt-5">Data Retention</h6>

              <p>
                Your data is retained only as long as necessary for service
                delivery or to meet legal obligations.
              </p>

              <h6 className="mb-3 mt-5">Your Rights</h6>

              <p>
                You may request to access, update, or delete your personal
                information at any time. Please contact us at
                info@softnet.com.ng
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="pt-0">
        <div className="container">
          <div className="bg-dark rounded p-4 p-sm-6" data-bs-theme="dark">
            <div className="row align-items-center">
              <div className="col-md-6">
                <h2>Let’s automate & simplify your performance</h2>
                <p className="mb-0">
                  Let us manage your IT for you so that you can get back to
                  doing what you do best and we look in the future.
                </p>
              </div>

              <div className="col-md-6 text-end">
                <a
                  href="contact-v1.html"
                  className="btn btn-lg btn-primary mb-0"
                >
                  Get started
                </a>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </main>
  );
}

export default Legal;
