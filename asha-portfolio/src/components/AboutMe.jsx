import { Typewriter } from "react-simple-typewriter";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const AboutMe = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.section
      ref={ref}
      style={{ opacity }}
      className="sticky top-0 min-h-screen z-20 px-6 py-20 bg-white dark:bg-gray-900 flex justify-center items-center"
    >
      <motion.div
        className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg p-6 w-full max-w-3xl font-mono text-sm overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex items-center mb-4">
          <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
          <div className="w-3 h-3 bg-yellow-400 rounded-full mr-2"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>

        <p className="text-blue-500 mb-2">
          Asha-DEV:~ asha$ <span className="animate-pulse">|</span>
        </p>

        <h3 className="text-2xl text-blue-600 dark:text-blue-400 font-mono mb-8">
          <Typewriter
            words={[
              "Exploring GraphQL, Angular, CI/CD pipelines, and Kafka 🚀",
            ]}
            loop={true}
            cursor
            cursorStyle="█"
            typeSpeed={60}
            deleteSpeed={40}
            delaySpeed={1500}
          />
        </h3>

        <p className="text-lg text-gray-700 dark:text-gray-300 mb-2">
          Backend-focused developer passionate about REST APIs, database
          optimization, cloud services, and scalable backend systems.
        </p>

        <p className="text-lg text-gray-700 dark:text-gray-300">
          Currently diving into GraphQL, React, Angular, CI/CD pipelines, and
          Kafka.
        </p>
      </motion.div>
    </motion.section>
  );
};

export default AboutMe;
