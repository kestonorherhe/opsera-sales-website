import React from "react";

function Terms() {
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
                      Terms & Conditions
                    </li>
                  </ol>
                </nav>
              </div>
              <h1 className="mb-0 text-white">Terms & Conditions</h1>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-lg-8 pt-xl-9">
        <div className="container pt-4 pt-lg-0">
          <div className="row">
            <div className="col-xl-8 mx-auto">
              <div className="text-center mb-6">
                <h1 style={{ fontSize: "25px" }}>Terms & Conditions</h1>
                <p className="lead mb-0" style={{ fontSize: "15px" }}>
                  Last updated on April , 2025
                </p>
              </div>

              <p>
                These Terms & Conditions govern your use of Softnet Limited
                services. By accessing or using our platform, you agree to be
                bound by these terms.
              </p>

              <h6 className="mb-3 mt-5">User Accounts</h6>

              <p>
                You are responsible for maintaining the confidentiality of your
                login details and for all activities under your account.
              </p>

              <h6 className="mb-3 mt-5">Acceptable Use</h6>
              <p>Users may not:</p>

              <ul className="list-group list-group-borderless">
                <li className="list-group-item heading-color d-flex mb-0">
                  <i className="bi bi-arrow-right me-2"></i>Engage in unlawful
                  or abusive behaviour
                </li>
                <li className="list-group-item heading-color d-flex mb-0">
                  <i className="bi bi-arrow-right me-2"></i>Attempt to access
                  data not intended for them
                </li>
                <li className="list-group-item heading-color d-flex mb-0">
                  <i className="bi bi-arrow-right me-2"></i>Upload viruses or
                  harmful software
                </li>
              </ul>

              <h6 className="mb-3 mt-5">Intellectual Property</h6>

              <p>
                All content, trademarks, and software on this platform are owned
                by Softnet Limited or its licensors and may not be used without
                permission.
              </p>

              <h6 className="mb-3 mt-5">Account Termination</h6>

              <p>
                We reserve the right to suspend or terminate your access if you
                violate these terms or use the platform inappropriately.
              </p>

              <h6 className="mb-3 mt-5"> Limitation of Liability</h6>

              <p>
                Softnet Limited shall not be liable for indirect, incidental, or
                consequential damages arising from your use of the platform.
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

export default Terms;
