// src/components/Footer.jsx
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope, FaArrowUp } from "react-icons/fa";
import { SiFreelancer } from "react-icons/si";

const Footer = () => {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <motion.footer
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-10"
      //   footer ke uoer nechy wali space  py-7
    >
      <div className="container mx-auto px-4">
        {/* Footer Content */}
        <motion.div
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {/* About Section */}
          <motion.div variants={fadeInUp} className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-4">About Me</h3>
            <p className="text-gray-200">
              Motivated IT professional with expertise in React, Python,
              WordPress, and AI/ML. Passionate about building innovative
              solutions and solving complex problems.
            </p>
          </motion.div>

          {/* Quick Links Section */}
          <motion.div variants={fadeInUp} className="text-center">
            <h3 className="text-2xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#skills"
                  className="text-gray-200 hover:text-white transition duration-300"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="text-gray-200 hover:text-white transition duration-300"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-gray-200 hover:text-white transition duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Social Links Section */}
          <motion.div variants={fadeInUp} className="text-center md:text-left">
          <h3 className="text-2xl font-bold ">WhatsApp Number</h3>
          <div className="flex  space-x-4 mt-2"><h4>+92 321 4479016</h4></div>
            <h3 className="text-2xl font-bold mb-4 mt-2">Connect With Me</h3>
            <div className="flex  space-x-4">
              <a
                href="https://www.linkedin.com/in/m-farzan2002/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-200 hover:text-white transition duration-300"
              >
                <FaLinkedin className="text-2xl" />
              </a>
              <a
                href="https://github.com/farzanbhai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-200 hover:text-white transition duration-300"
              >
                <FaGithub className="text-2xl" />
              </a>
              <a
                href="mailto:muhammadfarzan58@gmail.com"
                className="text-gray-200 hover:text-white transition duration-300"
              >
                <FaEnvelope className="text-2xl" />
              </a>
              <a
                href="https://www.freelancer.com/u/muhammadfarzan58"
                className="text-gray-200 hover:text-white transition duration-300"
              >
              <SiFreelancer className="text-2xl" />
              </a>
            </div>
            
          </motion.div>
        </motion.div>

        {/* Back to Top Button */}
        <motion.div variants={fadeInUp} className=" text-right my-4">
          <button
            onClick={scrollToTop}
            className="bg-white text-blue-600 px-4 py-2 rounded-full font-semibold hover:bg-gray-100 transition duration-300 flex items-center space-x-2 ml-auto"
          >
            <span>Go Top</span>
            <FaArrowUp />
          </button>
        </motion.div>

        {/* Copyright Section */}
        <motion.div variants={fadeInUp} className=" text-center text-gray-200 ">
          <p>
            &copy; {new Date().getFullYear()} Muhammad Farzan. All rights
            reserved.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
