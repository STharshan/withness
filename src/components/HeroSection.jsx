import React, { useEffect } from "react";
import { FiArrowRight, FiPlay } from "react-icons/fi";
import AOS from "aos";
import "aos/dist/aos.css";

const HeroSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <div className="relative bg-black" id="hero">
      {/* 🎥 Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="/video.mp4" // 👈 your video path
        autoPlay
        loop
        muted
        playsInline
      ></video>

      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-[1]" />

      {/* Hero Content */}
      <section className="relative z-[2] text-white min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl w-full flex flex-col items-center text-center gap-8 md:gap-12">
          <div data-aos="fade-up">
            <p className="text-primary">The #1 Gym In The Country</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold leading-tight">
              Witness The Fitness
              <br />
              <span className="text-white">Fitness Results.</span>
            </h1>

            <p className="text-gray-300 max-w-2xl mx-auto mt-4 text-base sm:text-lg md:text-xl">
              Welcome to Witness The Fitness, where every workout propels you toward
              the summit of your fitness goals.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
              <a href="/#contact">
                <button className="border-2 border-primary bg-primary-hover text-white hover:text-black px-6 py-3 rounded-full flex items-center gap-2 group hover:bg-primary transition font-semibold">
                  <span className="transition-transform duration-300 text-sm lg:text-base group-hover:-translate-x-1 group-active:-translate-x-1">
                    Let's Reach Your Fitness
                  </span>
                  <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1 group-active:translate-x-1 mt-1" />
                </button>
              </a>

              <button className="w-14 h-14 rounded-full border-2 border-gray-500 flex items-center justify-center border-primary-hover transition">
                <FiPlay className="text-2xl" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section (merged look) */}
      <section className="relative z-[3] bg-black text-white border border-white shadow-inner py-12 w-full px-6 md:px-12 lg:px-20 max-w-4xl mx-auto rounded-xl">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 items-center text-center">
          <div className="text-center" data-aos="fade-up">
            <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold">10K</h3>
            <p>Members</p>
          </div>
          <div className="text-center" data-aos="fade-up" data-aos-delay="100">
            <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold">1K</h3>
            <p>Trainers</p>
          </div>
          <div className="text-center" data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold">10M</h3>
            <p>Calories Burnt</p>
          </div>
          <div className="text-center" data-aos="fade-up" data-aos-delay="300">
            <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold">10K</h3>
            <p>Hours Trained</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
