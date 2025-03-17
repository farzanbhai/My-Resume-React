// src/pages/About.jsx
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope, FaGraduationCap, FaBriefcase, FaCode } from "react-icons/fa";
import farzan from "../assets/farzan.jpg"
import { SiFreelancer } from "react-icons/si";

const About = () => {
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

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className="min-h-screen bg-gray-100 text-gray-900 py-16"
    >
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">About Me</h1>
          <p className="text-xl text-gray-600">
            Motivated IT professional with expertise in React, Python, WordPress, and AI/ML.
          </p>
        </motion.div>

        {/* Profile Section */}
        <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Profile Image */}
          <motion.div variants={fadeInUp} className="flex justify-center">
            <img
              src={farzan} // Replace with your profile image URL
              alt="Muhammad Farzan"
              className="rounded-lg shadow-lg max-w-md"
            />
          </motion.div>

          {/* Profile Details */}
          <motion.div variants={fadeInUp} className="space-y-8">
            {/* Education */}
            <div>
              <h2 className="text-3xl font-bold mb-4 flex items-center">
                <FaGraduationCap className="mr-2" /> Education
              </h2>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold">BS Information Technology</h3>
                <p className="text-gray-600">PMAS-ARID University</p>
                <p className="text-gray-600">September 2020 - August 2024</p>
              </div>
            </div>

            {/* Skills */}
            <div>
              <h2 className="text-3xl font-bold mb-4 flex items-center">
                <FaCode className="mr-2" /> Skills
              </h2>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "React Developer",
                    "Python Developer",
                    "WordPress Developer",
                    "Graphic Designer",
                    "Database Management",
                    "AI/ML Enthusiast",
                  ].map((skill, index) => (
                    <li key={index} className="text-gray-600">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Experience */}
            <div>
              <h2 className="text-3xl font-bold mb-4 flex items-center">
                <FaBriefcase className="mr-2" /> Experience
              </h2>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold">Intern @E-axon</h3>
                <p className="text-gray-600">Oct 05 2024 – Jan 05 2025</p>
                <ul className="mt-2 list-disc list-inside text-gray-600">
                  <li>Collected and stored AI-generated image data in Firebase.</li>
                  <li>Made UI fixes and enhancements on the E-axon website using React.</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Personal Projects */}
        <motion.div variants={fadeInUp} className="mt-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Personal Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "SolarAI – IoT-Enabled Solar Panel Optimization",
                description:
                  "Developed an AI-driven system for real-time defect detection in solar panels using IoT and deep learning.",
              },
              {
                title: "E-commerce Website - SofaScene",
                description:
                  "Built a fully functional e-commerce platform for a UK-based furniture retailer.",
              },
              {
                title: "E-commerce Website - Sofas n Beds",
                description:
                  "Designed and launched an e-commerce website for a UK-based furniture retailer.",
              },
              {
                title: "Corporate Website - Apricus Technical Solutions",
                description:
                  "Created a professional website for a supply sourcing and engineering consultancy company.",
              },
              {
                title: "Corporate Website - Alifah Enterprise",
                description:
                  "Built a sleek website for a Singapore-based supplier of electronic components.",
              },
              {
                title: "TextChanger Web App",
                description:
                  "Developed a responsive web app for text manipulation with dark mode support.",
              },
            ].map((project, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="mt-2 text-gray-600">{project.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Social Links */}
        <motion.div variants={fadeInUp} className="mt-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Connect With Me</h2>
          <div className="flex justify-center space-x-4">
            <a
              href="https://www.linkedin.com/in/m-farzan2002/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-300 flex items-center"
            >
              <FaLinkedin className="mr-2" /> LinkedIn
            </a>
            <a
              href="https://github.com/farzanbhai"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-300 flex items-center"
            >
              <FaGithub className="mr-2" /> GitHub
            </a>
            <a
              href="mailto:muhammadfarzan58@gmail.com"
              className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-300 flex items-center"
            >
              <FaEnvelope className="mr-2" /> Email
            </a>
            <a
              href="mailto:muhammadfarzan58@gmail.com"
              className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-300 flex items-center"
            >
              <SiFreelancer className="mr-2" />Freelancer
            </a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;