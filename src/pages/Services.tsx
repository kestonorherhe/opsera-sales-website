import IndustriesServed from "../components/IndustriesSection";
import TestimonialsSection from "../components/Testimonial";

function Services() {
  const services = [
    {
      id: 1,
      name: "Process and Government Automation",
      description:
        "We help organizations automate routine and complex processes to improve efficiency, accuracy, and compliance. Our automation solutions are tailored for government agencies and enterprises, enabling seamless workflows, reducing manual effort, and ensuring transparency. From digital forms to automated reporting systems, we empower clients to achieve operational excellence.",
    },
    {
      id: 2,
      name: "Web Development",
      description:
        "Our team creates custom websites tailored to your business needs. We develop scalable, secure, and user-friendly websites that serve as an effective digital storefront or information hub. Whether you need a corporate website, e-commerce platform, or portal, we ensure functionality aligns with your goals.",
    },
    {
      id: 3,
      name: "App Development",
      description:
        "We design and build mobile and web applications that provide valuable tools and engaging experiences for your users. From concept to deployment, our app development services cover native and cross-platform solutions, ensuring performance, security, and usability across devices.",
    },
    {
      id: 4,
      name: "Web Design and Hosting",
      description:
        "Our creative web design team crafts visually appealing, intuitive interfaces that enhance user engagement. Coupled with reliable hosting solutions, we ensure your website is fast, secure, and available around the clock. We offer end-to-end services from design to hosting management.",
    },
    {
      id: 5,
      name: "Consulting and Strategy",
      description:
        "Our expert consultants work closely with your organization to develop effective technology strategies. We assess your current systems, identify opportunities for improvement, and craft tailored plans that align IT initiatives with your business objectives. Our goal is to maximize ROI and future-proof your technology investments.",
    },
    {
      id: 6,
      name: "Managed IT Services",
      description:
        "We provide comprehensive managed IT support to keep your infrastructure running smoothly. Our services include proactive monitoring, maintenance, cybersecurity, data backup, and help desk support. With our managed services, you can focus on your core business while we handle your IT needs.",
    },
  ];

  return (
    <main>
      <section
        className="py-8 py-sm-9 position-relative"
        style={{
          background: "url(assets/images/bg/05.jpg) no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="bg-overlay bg-dark opacity-7"></div>

        <div className="container position-relative z-index-1">
          <div className="row g-4 g-xxl-5">
            <div className="col-lg-8 text-center mx-auto">
              <div className="d-flex justify-content-center position-relative mb-2">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb breadcrumb-dots breadcrumb-dark pb-0 mb-0">
                    <li className="breadcrumb-item">
                      <a href="#">Home</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Services
                    </li>
                  </ol>
                </nav>
              </div>
              <h1 className="mb-0 text-white">Our services</h1>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-0">
        <div className="container" data-sticky-container>
          <p>
            Our IT firm specializes in delivering comprehensive technology
            solutions to streamline operations, enhance digital presence, and
            support strategic growth. Our core services include:
          </p>
          <div className="row">
            <div className="col-lg-12 ps-xl-12">
              {/* SINGLE ROW for all cards */}
              <div className="row g-4 g-sm-5">
                {services.map((service) => (
                  <div className="col-md-4" key={service.id}>
                    <div className="card border bg-light p-5">
                      <div className="card-body p-0">
                        <h5 className="mb-3" style={{ fontSize: "18px" }}>
                          {service.name}
                        </h5>
                        <p className="mb-0">{service.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {/* END SINGLE ROW */}
            </div>
          </div>
        </div>
      </section>

      <IndustriesServed />

      {/* <TestimonialsSection /> */}
    </main>
  );
}

export default Services;
