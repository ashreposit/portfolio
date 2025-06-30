import { motion } from "framer-motion";

const experiences = [
    {
        title: "Intern — Software Developer",
        company: "Centizen Inc.",
        period: "2023",
        description: [
            "Optimized relational schemas for 3+ backend modules using PostgreSQL, MySQL, and MongoDB, improving query performance by 35% and reducing response times by 30%",
            "Built and documented 10+ RESTful APIs with Express.js and Swagger,achieving 90% unit test coverage using Jest and cutting production bugs by 30%",
        ]
    },
    {
        title: "Software Engineer",
        company: "Centizen Inc.",
        period: "2023 — Present",
        description: [
            "Delivered 25+ scalable APIs for ZenBasket, enhancing email campaigns and admin tools, supporting 1,000+ store admins and ensuring 99.9% uptime.",
            "Improved service reliability with 35% faster query performance and 30% lower DB response time, maintaining 99.9% uptime.",
            "Integrated AWS Lambda with SES tracking, reducing email delivery issues,including bounces, complaints, and spam by 95%.",
            "Led the launch of ZenMail, used in 3+ production apps, centralizing email delivery and reducing redundancy.",
            "Scaled backend to handle 2M+ emails/month, optimizing bulk delivery and cutting failures by 95% via AWS SES event tracking",
        ]
    }
];

const Experience = () => {
    return (
        <motion.section
            className="min-h-screen flex flex-col bg-white dark:bg-gray-900 px-6 py-20 scroll-snap-start"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 0.8 }}
        >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
                Experience
            </h2>

            <div className="flex flex-col space-y-10 max-w-3xl mx-auto relative">
                {experiences.map((exp, index) => (
                    <motion.div
                        key={index}
                        className="relative pl-8"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                    >
                        {/* Timeline dot */}
                        <div className="absolute left-0 top-2 w-4 h-4 bg-green-600 rounded-full"></div>

                        <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{exp.title}</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{exp.company} | {exp.period}</p>

                        <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 mt-2 space-y-1">
                            {exp.description.map((point, i) => (
                                <li key={i}>{point}</li>
                            ))}
                        </ul>
                    </motion.div>
                ))}

                {/* Vertical line */}
                <div className="absolute top-2 left-1.5 w-0.5 h-full bg-gray-300 dark:bg-gray-700"></div>
            </div>
        </motion.section>
    );
};

export default Experience;
