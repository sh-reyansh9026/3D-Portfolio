import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

export const Timeline = ({ data, heading }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  // Update height correctly on resize
  useEffect(() => {
    const updateHeight = () => {
      if (ref.current) {
        setHeight(ref.current.scrollHeight);
      }
    };
    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-white dark:bg-black-200
       font-sans md:px-10 overflow-hidden"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        {heading && (
          <h2 className="text-5xl md:text-6xl font-bold mb-1 text-white dark:text-white max-w-4xl">
            {heading.heading}
          </h2>
        )}
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={item.id || index}
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
          >
            {/* Timeline Dots */}
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
              </div>
              <h3 className="hidden md:block text-lg md:pl-20 md:text-5xl font-bold text-neutral-950 dark:text-neutral-500">
                {item.title}
              </h3>
            </div>
            {/* Content */}
            <div className="relative pl-20 pr-4 md:pl-4 w-full text-white">
              <p className="mb-4">{item.content}</p>

              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-all duration-300 shadow-md"
              >
                Explore
              </a>
            </div>

            <a href={item.link}></a>
          </div>
        ))}

        {/* Timeline Line */}
        <div className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] h-full bg-gradient-to-b from-transparent via-neutral-300 dark:via-neutral-700 to-transparent">
          <motion.div
            style={{ height: heightTransform, opacity: opacityTransform }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
