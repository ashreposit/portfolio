import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactMe = () => {
    const form = useRef();

    const sendEmail = (e) => {
        console.log({ form });
        e.preventDefault();

        emailjs.send(
            "service_zfk72rf",
            "template_x5ki7kt",
            {
                name: form.current.name.value,
                email: form.current.email.value,
                message: form.current.message.value
            },
            "Y2ujP_Y7233pCKtde"
        ).then(() => {
            alert('Email send successfully!');
            form.current.reset();
        },
            (error) => {
                console.error(error.text);
                alert("Failed to send message, please try again.");
            })
    }
    return (
        <motion.section
            className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-900 px-6 py-20 scroll-snap-start"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 0.8 }}
        >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12">
                Get In Touch
            </h2>

            {/* Icons */}
            <div className="flex gap-8 text-4xl text-gray-700 dark:text-gray-300 mb-12">
                <motion.a
                    href="mailto:anithaasha12@gmail.com"
                    whileHover={{ scale: 1.2, color: "#16a34a" }}
                    className="transition"
                >
                    <FaEnvelope />
                </motion.a>

                <motion.a
                    href="https://www.linkedin.com/in/asha-laxmi-a5005517b/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, color: "#16a34a" }}
                    className="transition"
                >
                    <FaLinkedin />
                </motion.a>

                <motion.a
                    href="https://github.com/ashreposit"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, color: "#16a34a" }}
                    className="transition"
                >
                    <FaGithub />
                </motion.a>
            </div>

            {/* Message Form */}
            <form
                ref={form}
                className="w-full max-w-lg space-y-4"
                onSubmit={sendEmail}
            >
                <input
                    type="text"
                    placeholder="Your Name"
                    name="name"
                    className="w-full px-4 py-3 rounded border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
                    required
                />
                <input
                    type="email"
                    placeholder="Your Email"
                    name="email"
                    className="w-full px-4 py-3 rounded border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
                    required
                />
                <textarea
                    placeholder="Your Message"
                    name="message"
                    className="w-full px-4 py-3 rounded border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
                    rows="5"
                    required
                />
                <button
                    type="submit"
                    className="w-full px-4 py-3 bg-green-600 text-white rounded hover:bg-green-700 transition"
                >
                    Send Message
                </button>
            </form>
        </motion.section>
    );
};

export default ContactMe;
