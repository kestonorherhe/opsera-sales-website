import React from "react";

export default function IndustriesServed() {
  // Industry data with icons and brief descriptions
  const industries = [
    {
      id: 1,
      name: "Government",
      icon: "bi-building",
      description:
        "Digital solutions that enhance public services and streamline administrative processes.",
    },
    {
      id: 2,
      name: "Hospitality",
      icon: "bi-cup-hot",
      description:
        "Custom systems that improve guest experiences and operational efficiency.",
    },
    {
      id: 3,
      name: "Agriculture",
      icon: "bi-flower1",
      description:
        "Innovative technology to optimize agriculture, lifecycle operations and management.",
    },
    {
      id: 4,
      name: "Payment",
      icon: "bi-cart3",
      description:
        "User-centric payment technologies that streamline checkout and build customer trust.",
    },
    {
      id: 5,
      name: "Education",
      icon: "bi-book",
      description:
        "Digital learning solutions that enhance educational outcomes and accessibility.",
    },
    {
      id: 6,
      name: "Healthcare",
      icon: "bi-heart-pulse",
      description:
        "Medical systems that improve patient care and operational efficiency.",
    },
  ];

  return (
    <section className="py-5 bg-white">
      <div className="container">
        {/* Section Header */}
        <div className="row justify-content-center mb-5">
          <div className="col-lg-8 text-center">
            <h2 className="mb-3" style={{ fontSize: "30px" }}>
              Industries We Serve
            </h2>
            <p className="lead text-muted">
              We deliver tailored digital solutions across diverse sectors,
              helping organizations overcome challenges and achieve their goals.
            </p>
          </div>
        </div>

        {/* Industries Grid */}
        <div className="row g-4">
          {industries.map((industry) => (
            <div key={industry.id} className="col-md-6 col-lg-4">
              <div className="card h-full shadow-sm hover-lift">
                <div className="card-body p-4">
                  <div className="d-flex align-items-center mb-3">
                    <div className="bg-primary text-white p-3 rounded me-3">
                      <i className={`${industry.icon} fs-4`}></i>
                    </div>
                    <h4 className="mb-0" style={{ fontSize: "24px" }}>
                      {industry.name}
                    </h4>
                  </div>
                  <p className="card-text mb-3">{industry.description}</p>
                  {/* <a
                    href={`/industries/${industry.name.toLowerCase()}`}
                    className="btn btn-sm btn-outline-primary mt-auto"
                  >
                    Learn More
                  </a> */}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        {/* <div className="row mt-5">
          <div className="col-12">
            <div className="bg-white border rounded-3 p-4 p-md-5 text-center">
              <h3 className="mb-3">Need a solution for your industry?</h3>
              <p className="mb-4">
                Our team of experts is ready to understand your unique
                challenges and create the perfect digital solution for your
                specific needs.
              </p>
              <a href="/contact" className="btn btn-primary px-4 py-2">
                Get in Touch
              </a>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}
