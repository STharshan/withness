"use client";
import React, { useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const trainers = [
  {
    name: "BLAKE HUDSON",
    role: "Strength & Conditioning Coach",
    image:
      "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?q=80&w=800",
  },
  {
    name: "ALEX HARRINGTON",
    role: "Holistic Fitness & Mobility Coach",
    image:
      "https://images.unsplash.com/photo-1598970434795-0c54fe7c0642?q=80&w=800",
  },
  {
    name: "NICHOLAS PHILLIPS",
    role: "Fat Loss & HIIT Expert",
    image:
      "https://images.unsplash.com/photo-1594737625785-cbdbf7b6b2e2?q=80&w=800",
  },
  {
    name: "LOUIS CHAVEZ",
    role: "Transformation Coach",
    image:
      "https://images.unsplash.com/photo-1594737625785-cbdbf7b6b2e2?q=80&w=800",
  },
  {
    name: "EMILY TURNER",
    role: "Yoga & Wellness Instructor",
    image:
      "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?q=80&w=800",
  },
];

export default function TrainersSection() {
  const scrollRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
      easing: "ease-in-out",
    });
  }, []);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount =
        direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="w-full bg-black text-white py-20 px-6 md:px-16 lg:px-24">
      {/* Section Header */}
      <div className="max-w-6xl mx-auto text-center mb-12" data-aos="fade-up">
        <p className="text-primary text-sm font-semibold mb-2">
          ★ Our Trainers
        </p>
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
          OUR EXPERT TRAINERS
        </h2>
        <p className="text-gray-400 text-lg max-w-lg mx-auto" data-aos="fade-up" data-aos-delay="200">
          Our certified fitness professionals are more than just trainers — they’re transformation specialists.
        </p>
      </div>

      {/* Trainer Cards */}
      <div className="relative max-w-6xl mx-auto" data-aos="fade-up" data-aos-delay="300">
        {/* Left Button */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 z-10 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-2 rounded-full transition"
          data-aos="fade-right"
        >
          <ChevronLeft className="w-5 h-5 text-white" />
        </button>

        {/* Scrollable Trainer Cards */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto gap-6 scroll-smooth scrollbar-hide px-10 py-10"
        >
          {trainers.map((trainer, index) => (
            <div
              key={index}
              className="w-64 bg-[#111] rounded-xl border border-gray-200  overflow-hidden flex-shrink-0 shadow-lg hover:scale-105 transition-transform duration-300"
              data-aos="zoom-in"
              data-aos-delay={index * 150}
            >
              <div className="relative">
                <img
                  src="/img.webp"
                  alt={trainer.name}
                  className="h-80 w-full object-cover"
                />
                <div className="absolute bottom-0 left-0 w-full bg-black/80 p-4">
                  <h3 className="text-lg font-bold text-white tracking-wide">
                    {trainer.name}
                  </h3>
                  <p className="text-primary text-sm font-medium">
                    {trainer.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Button */}
        <button
          onClick={() => scroll("right")}
          className="absolute -right-6 z-10 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-2 rounded-full transition"
          data-aos="fade-left"
        >
          <ChevronRight className="w-5 h-5 text-white" />
        </button>
      </div>
    </section>
  );
}
