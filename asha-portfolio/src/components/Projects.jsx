import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    title: "ZenMail SaaS Platform",
    description:
      "High-volume backend service for transactional and marketing emails, built with Node.js, PostgreSQL, and AWS SES.",
    tech: ["Node.js", "Express", "PostgreSQL", "AWS SES"],
    link: "https://zenmail.yoursite.com",
    github: "#",
  },
  {
    title: "ZenBasket Store Admin",
    description:
      "SaaS store management platform handling inventory, orders, and payments with scalable REST APIs.",
    tech: ["Node.js", "PostgreSQL", "AWS S3"],
    link: "https://zenbasket.yoursite.com",
    github: "#",
  },
  {
    title: "Portfolio Website",
    description:
      "Personal developer portfolio built with React, Tailwind CSS, and Framer Motion animations.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    link: "/",
    github: "#",
  },
];

const Projects = () => {
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
      className="sticky top-0 min-h-screen z-30 flex flex-col px-6 py-20 bg-white dark:bg-gray-900"
    >
      <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col justify-between"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              {project.title}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-sm bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-3 mt-auto">
              <a
                href={project.link}
                target="_blank"
                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
              >
                Live
              </a>
              <a
                href={project.github}
                target="_blank"
                className="px-4 py-2 border border-gray-700 dark:border-gray-300 text-gray-800 dark:text-gray-200 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition"
              >
                Code
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
