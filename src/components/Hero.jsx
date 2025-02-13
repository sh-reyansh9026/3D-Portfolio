import React from "react";
import { motion } from "framer-motion";
import { Boxes } from "./ui/background-boxes";
import { LampContainer } from "./ui/lamp";
import { cn } from "../lib/utils"; // Adjust if needed

export default function HeroSection() {
  return (
    <LampContainer className="relative flex flex-col items-center justify-center min-h-screen text-center overflow-hidden pt-72">
      {/* Background Boxes Layer */}
      <div className="inset-0 w-[500px] h-full bg-slate-900 z-10 pointer-events-none" />
      <Boxes />

      {/* Main Content */}
      <div className="relative flex flex-col items-center justify-center pt-72 z-20">
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="text-4xl font-medium tracking-tight text-white md:text-7xl -mt-10"
        >
          Hi, I'm <span className="text-[#915eff]">Shreyansh</span>
          <p className="mt-4 text-white text-lg text-align text-center from-neutral-100">
            I'm a passionate Software Developer specializing in MERN stack and
            <br /> Next.js, building scalable and high-performance web
            applications.
            <br /> With a strong foundation in Data Structures and Algorithms, I
            create
            <br /> seamless and efficient digital experiences. Let's turn ideas
            into reality
            <br /> with clean, optimized code!
          </p>
        </motion.h1>

        <motion.button
          onClick={() =>
            window.open(
              "https://drive.google.com/file/d/1HK2yOUB1qBS3HymDsCX883CN3ly1v7qt/view?usp=drive_link",
              "_blank",
              "noopener,noreferrer"
            )
          }
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          className="mt-6 px-6 py-3 mb-4 bg-[#6363a6] text-white text-lg font-bold rounded-lg shadow-lg"
        >
          Resume
        </motion.button>
      </div>
    </LampContainer>
  );
}
