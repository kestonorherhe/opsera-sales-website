import React, { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const subject = encodeURIComponent("Contact Form Submission");
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nCompany: ${formData.company}\n\nMessage:\n${formData.message}`,
    );

    const mailtoLink = `mailto:info@softnet.com.ng?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
  };

  return (
    <main>
      <section
        className="py-8 py-sm-9 position-relative"
        style={{
          background: "url(assets/images/contact-us.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="bg-overlay bg-dark opacity-7"></div>
        <div className="container position-relative z-index-1">
          <div className="row g-4 g-xxl-5">
            <div className="col-lg-8 text-center mx-auto">
              <div className="d-flex justify-content-center position-relative mb-2">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb breadcrumb-dots breadcrumb-dark pb-0 mb-0"></ol>
                </nav>
              </div>
              <h1 className="mb-0 text-white">Contact Us</h1>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-7 pt-md-8">
        <div className="container pt-4 pt-md-0">
          <div className="row gx-5 justify-content-between align-items-start">
            {/* LEFT COLUMN */}
            <div className="col-lg-6 mb-5 mb-lg-0">
              <div className="d-flex flex-column h-100">
                <h1 className="mb-3">Get in touch for more information</h1>
                <p className="mb-0">
                  You can reach us anytime via{" "}
                  <span className="text-[#e86b6a]" style={{ color: "#e86b6a" }}>
                    info@softnet.com.ng
                  </span>
                </p>

                {/* Embedded Google Map */}
                <div className="flex-grow-1 mt-4">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.20053322603!2d7.473392875914425!3d9.045464491016563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0b749be6f5b1%3A0x5b9c84ab24838a88!2sYakubu%20Gowon%20Centre!5e0!3m2!1sen!2sng!4v1746701425965!5m2!1sen!2sng"
                    width="100%"
                    height="300"
                    title="Google Map"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="col-lg-6 col-xl-5 d-flex align-items-center">
              <div className="card card-body shadow border p-sm-5 w-100">
                <form className="row g-4" onSubmit={handleSubmit}>
                  {[
                    {
                      label: "Your name *",
                      name: "name",
                      type: "text",
                      placeholder: "Full name",
                    },
                    {
                      label: "Email address *",
                      name: "email",
                      type: "email",
                      placeholder: "info@softnet.com.ng",
                    },
                    {
                      label: "Phone number *",
                      name: "phone",
                      type: "text",
                      placeholder: "(xxx) xx xxxx",
                    },
                    {
                      label: "Company *",
                      name: "company",
                      type: "text",
                      placeholder: "Company name",
                    },
                  ].map((field, idx) => (
                    <div className="col-md-6" key={idx}>
                      <label className="form-label heading-color">
                        {field.label}
                      </label>
                      <input
                        type={field.type}
                        className="form-control form-control-lg"
                        placeholder={field.placeholder}
                        name={field.name}
                        value={formData[field.name as keyof FormData]}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  ))}

                  <div className="col-12">
                    <label className="form-label heading-color">
                      Message *
                    </label>
                    <textarea
                      className="form-control"
                      placeholder="Write your message here...."
                      style={{ height: "150px" }}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>

                  <div className="col-12">
                    <button
                      className="btn btn-lg btn-primary mb-0"
                      type="submit"
                    >
                      Send a message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactUs;
