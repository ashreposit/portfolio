import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    title: "DevTinder",
    description:
      "DevTinder is a polished, skill-focused networking app that blends tertiary features like swiping, chatting, profile showcase, and real-time backend integration into a learning-rich MERN project. It stands out as both a developer learning tool and a proof-of-concept for portfolio-driven social networking.",
    tech: ["Node.js", "Express", "MongoDB", "AWS EC2","AWS S3","React","Tailwindcss","Vite","Nginx"],
    link: "https://yoursite.com",
    github: "https://github.com/ashreposit/devtinder-backend",
  },
  {
    title: "Portfolio Website",
    description:
      "Personal developer portfolio built with React, Tailwind CSS, and Framer Motion animations.",
    tech: ["React", "Vite","Tailwind CSS", "Framer Motion","mailjs"],
    link: "/",
    github: "https://github.com/ashreposit/portfolio",
  },
];

const PersonalProjects = () => {
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
        Personal Projects
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

export default PersonalProjects;
