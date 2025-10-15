"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const programs = [
  {
    id: 1,
    title: "TRANSFORMATION PROGRAMS",
    description:
      "Achieve your best self through structured, goal-driven fitness and nutrition plans tailored to your lifestyle. Includes assessments, progress tracking, and ongoing coaching.",
  },
  {
    id: 2,
    title: "PERSONAL TRAINING",
    description:
      "Get one-on-one guidance from certified trainers who customize every workout to your unique goals, ensuring progress, motivation, and accountability.",
  },
  {
    id: 3,
    title: "GROUP CLASSES",
    description:
      "Experience high-energy group workouts that blend fun, motivation, and competition. From strength circuits to cardio burn, every session is designed for results.",
  },
];

export default function ProgramsSection() {
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
      easing: "ease-in-out",
    });
  }, []);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      className="w-full bg-black text-white py-20 px-6 md:px-16 lg:px-32"
      id="programs"
    >
      {/* Section Header */}
      <div
        className="max-w-4xl mx-auto text-center"
        data-aos="fade-up"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
          PROGRAMS THAT DELIVER <br className="hidden md:block" /> REAL RESULTS
        </h2>
        <p
          className="text-gray-400 text-lg max-w-lg mx-auto mb-12"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Personalized, trackable programs built to push limits and redefine what your body can do.
        </p>
      </div>

      {/* Accordion List */}
      <div className="space-y-6 max-w-3xl mx-auto">
        {programs.map((program, index) => (
          <div
            key={program.id}
            className="border-t border-gray-700 pt-6 pb-4"
            data-aos="fade-up"
            data-aos-delay={index * 200}
          >
            {/* Accordion Header */}
            <div
              className="relative flex items-center justify-between cursor-pointer"
              onClick={() => toggleAccordion(index)}
            >
              {/* Left: Number */}
              <span className="absolute left-0 text-primary font-mono text-2xl">
                {String(program.id).padStart(2, "0")}
              </span>

              {/* Center: Title */}
              <h3 className="mx-auto text-2xl font-bold tracking-wide text-center">
                {program.title}
              </h3>

              {/* Right: Plus/Minus */}
              <span className="absolute right-0">
                {openIndex === index ? (
                  <Minus className="text-primary w-5 h-5" />
                ) : (
                  <Plus className="text-primary w-5 h-5" />
                )}
              </span>
            </div>

            {/* Accordion Body (Framer Motion) */}
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <p className="mt-4 text-gray-300 text-sm md:text-base leading-relaxed text-center">
                    {program.description}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
