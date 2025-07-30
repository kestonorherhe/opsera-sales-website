import React, { useState, useRef, useEffect } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestimonialsSection = () => {
  // Refs for the sliders to sync them
  const avatarSliderRef = useRef(null);
  const testimonialSliderRef = useRef(null);
  const profileTabsRef = useRef(null);

  // Testimonial data
  const testimonials = [
    {
      id: "testi-one",
      avatar: "assets/images/test-img1.jpg",
      name: "Gambi Umar",
      role: "MD/CEO Vents",
      title: "Transformed My Agency's Results",
      content:
        "Softnet is an awesome company that delivers as they promise, I'm delighted for using softnet payment solution to drive my businesses.",
    },
    {
      id: "testi-two",
      avatar: "assets/images/test-img2.jpg",
      name: "Emma Watson",
      role: "Rose Okpara",
      title: "Excellent Service and Support",
      content:
        "Our corporate payment was automated by Softnet since 2016 till date, we have saved 30million due to the automation.",
    },
    // {
    //   id: "testi-three",
    //   avatar: "assets/images/avatar/10.jpg",
    //   name: "Samuel Bishop",
    //   role: "Product Designer",
    //   title: "Highly Recommend This Service",
    //   content:
    //     "I've used many recruitment platforms in the past, but this one stands out from the crowd. The quality of candidates and the ease of use made our hiring process much more efficient. We'll definitely continue using this service for all our future hiring needs.",
    // },
    // {
    //   id: "testi-four",
    //   avatar: "assets/images/avatar/05.jpg",
    //   name: "Jessica Chen",
    //   role: "Marketing Director",
    //   title: "Streamlined Our Hiring Process",
    //   content:
    //     "This platform simplified our entire recruitment workflow. The advanced filtering options allowed us to quickly narrow down candidates based on our specific requirements. We managed to fill three positions in record time with exceptional talent.",
    // },
  ];

  // Settings for the avatar slider
  const avatarSliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    arrows: false,
    beforeChange: (current, next) => {
      // Sync the testimonial slider with the avatar slider
      if (testimonialSliderRef.current) {
        testimonialSliderRef.current.slickGoTo(next);
      }

      // Sync the profile tabs with the avatar slider
      if (profileTabsRef.current) {
        profileTabsRef.current.slickGoTo(next);
      }
    },
  };

  // Settings for the testimonial content slider
  const testimonialSliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false,
    autoplay: false, // We'll let the avatar slider control the autoplay
  };

  // Settings for the profile tabs slider
  const profileTabsSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false, // We'll let the avatar slider control the autoplay
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="avatar avatar-xl mb-4">
              <Slider ref={avatarSliderRef} {...avatarSliderSettings}>
                {testimonials.map((testimonial, index) => (
                  <div key={`avatar-${index}`}>
                    <img
                      className="avatar-img rounded-circle border border-2 border-white"
                      src={testimonial.avatar}
                      alt={`${testimonial.name} avatar`}
                    />
                  </div>
                ))}
              </Slider>
            </div>

            <h2 className="mb-4">Hear from our satisfied clients ❤️</h2>
            <p className="mb-5">
              Read what our satisfied clients have to say about their
              experiences with our platform.
            </p>
          </div>

          <div className="col-lg-7 d-flex flex-column ms-auto">
            {/* Testimonial content slider */}
            <div className="mb-4">
              <Slider ref={testimonialSliderRef} {...testimonialSliderSettings}>
                {testimonials.map((testimonial, index) => (
                  <div key={`testimonial-${index}`} className="px-2">
                    <div className="icon-lg bg-dark text-white rounded-circle mb-4">
                      <i className="bi bi-quote fa-xl"></i>
                    </div>
                    <ul className="list-inline mb-4">
                      {[1, 2].map((_, starIndex) => (
                        <li key={starIndex} className="list-inline-item me-0">
                          <i
                            className={`fas fa-star ${
                              starIndex === 4
                                ? "text-warning opacity-75"
                                : "text-warning"
                            }`}
                          ></i>
                        </li>
                      ))}
                    </ul>
                    <h6 className="mb-2">"{testimonial.title}"</h6>
                    <p className="heading-color">{testimonial.content}</p>
                  </div>
                ))}
              </Slider>
            </div>

            {/* Profile tabs slider */}
            <div className="mt-auto">
              <Slider ref={profileTabsRef} {...profileTabsSettings}>
                {testimonials.map((testimonial, index) => (
                  <div key={`tab-${index}`} className="px-2">
                    <div
                      className="d-flex align-items-center text-start p-3 bg-light rounded"
                      onClick={() => {
                        avatarSliderRef.current.slickGoTo(index);
                        testimonialSliderRef.current.slickGoTo(index);
                        profileTabsRef.current.slickGoTo(index);
                      }}
                      style={{ cursor: "pointer" }}
                    >
                      <div className="avatar flex-shrink-0">
                        <img
                          className="avatar-img rounded-circle"
                          src={testimonial.avatar}
                          alt={`${testimonial.name} avatar`}
                        />
                      </div>
                      <div className="ms-2">
                        <h6 className="mb-0">{testimonial.name}</h6>
                        <p className="mb-0 small">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
