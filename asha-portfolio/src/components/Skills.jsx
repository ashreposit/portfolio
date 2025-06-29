import { motion } from "framer-motion";

const skills = [
    "Node.js",
    "Express.js",
    "JavaScript",
    "TypeScript",
    "PostgreSQL",
    "MongoDB",
    "AWS SES",
    "AWS Lambda",
    "React",
    "TailwindCss",
    "GraphQL",
    "Angular",
    "CI/CD",
    "Sequelize"
];

const Skills = () => {
    return (
        <motion.section
            className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-900 px-6 py-20 scroll-snap-start"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12">
                Skills & Tech Stack
            </h2>

            <motion.div
                className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                variants={{
                    visible: {
                        transition: {
                            staggerChildren: 0.08,
                        },
                    },
                }}
            >

                {skills.map((skill, index) => (
                    <motion.span
                        key={index}
                        className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full text-sm shadow cursor-default transition transform hover:scale-105 hover:bg-green-600 hover:text-white"
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        transition={{ duration: 0.4 }}
                    >
                        {skill}
                    </motion.span>
                ))}
            </motion.div>
        </motion.section>
    );
};

export default Skills;
