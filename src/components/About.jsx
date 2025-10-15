import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,       // Animation speed
      easing: "ease-in-out", // Smooth easing
      once: false,           // ✅ Animation will trigger both on scroll down & up
      mirror: true,          // ✅ Reverses animation when scrolling up
      offset: 120,           // Triggers animation slightly before visible
    });
  }, []);

  return (
    <section className="py-20 bg-black" id="about">
      <div className="max-w-7xl mx-auto px-6 md:px-10 mt-15">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div data-aos="fade-right">
            <p className="text-primary">About Us</p>
            <h4 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Elevate Your Potential
            </h4>

            <p
              data-aos="fade-up"
              data-aos-delay="150"
              className="text-gray-300 text-base md:text-lg leading-relaxed mb-4"
            >
              At Witness The Fitness, We believe in elevating more than just weights, we're here to inspire a lifestyle of strength, health, and overall well- being.
            </p>

            <p
              data-aos="fade-up"
              data-aos-delay="300"
              className="text-gray-300 text-base md:text-lg leading-relaxed mb-8"
            >
              Our state-of-the-art facility provides an invigorating environment for individuals at every fitness level.
            </p>

            <button className="border-2 border-primary bg-primary-hover text-white px-8 py-3 rounded-xl flex items-center gap-2 group hover:text-black transition font-semibold">
              <span className="transition-transform duration-300 text-sm lg:text-base group-hover:-translate-x-1 group-active:-translate-x-1">
                About Fitness
              </span>
            </button>
          </div>

          {/* Image Section */}
          <div
            data-aos="fade-left"
            className="flex justify-center items-center relative"
          >
            <div className="relative group">
              <img
                src="/image.png"
                alt="ATB Motor Engineers"
                className="rounded-2xl shadow-lg h-110 w-120 hover:shadow-[0_0_30px_rgba(30,58,138,0.4)] transition-all duration-500 transform group-hover:scale-105"
              />
              <div className="absolute inset-0 rounded-2xl bg-[#1E3A8A]/10 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
