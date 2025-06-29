import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"], // fade as section scrolls out
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.section
      ref={ref}
      style={{ opacity }}
      className="flex flex-col md:flex-row items-center justify-center gap-12 px-6 py-20 min-h-screen sticky top-0 z-10 bg-white dark:bg-gray-900"
    >
      {/* Image Section */}
      <motion.div
        className="w-64 h-64 rounded-full border-4 border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-800 flex items-center justify-center shadow-lg overflow-hidden"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <img
          src="/girl-with-laptop.png"
          alt="Asha working on laptop"
          className="w-56 h-56 object-contain"
        />
      </motion.div>

      {/* Text Content */}
      <div className="text-center md:text-left max-w-lg">
        <motion.h1
          className="text-5xl font-extrabold mb-4 text-gray-800 dark:text-white"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Hi, I'm Asha Laxmi
        </motion.h1>

        <motion.p
          className="text-xl text-gray-600 dark:text-gray-300 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Software Engineer | Node.js, React, PostgreSQL | Cloud Enthusiast
        </motion.p>

        <a
          href="/Asha Laxmi Resume.pdf"
          download
          className="px-6 py-3 bg-green-600 text-white rounded-4xl shadow hover:bg-blue-700 transition"
        >
          Download Resume
        </a>
      </div>
    </motion.section>
  );
}

export default Hero;
