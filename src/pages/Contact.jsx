// src/pages/Contact.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    emailjs
      .sendForm(
        "service_9s6jjkl", //  EmailJS service ID
        "template_uxobl7j", //  EmailJS template ID
        e.target,
        "2CRlP1teR8H35lDGX" //  EmailJS user ID
      )
      .then(
        (result) => {
          alert("Thank you for contacting me! I'll get back to you soon.");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          alert("Something went wrong. Please try again.");
        }
      );
  };

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
      className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white py-16"
    >
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">Contact Me</h1>
          <p className="text-xl text-gray-200">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </motion.div>

        {/* Contact Form and Details */}
        <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div variants={fadeInUp} className="bg-white p-8 rounded-lg shadow-lg text-gray-900">
            <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-200"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-200"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-200"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 flex items-center"
              >
                <FaPaperPlane className="mr-2" /> Send Message
              </button>
            </form>
          </motion.div>

          {/* Contact Details */}
          <motion.div variants={fadeInUp} className="space-y-8">
            {/* Location */}
            <div className="bg-white p-8 rounded-lg shadow-lg text-gray-900">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <FaMapMarkerAlt className="mr-2" /> Location
              </h2>
              <p className="text-gray-600">Rawalpindi, Pakistan</p>
              {/* Embedded Google Map */}
              <div className="mt-4 overflow-hidden rounded-lg">
                <iframe
                  title="Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3321.676715434678!2d73.04794931520416!3d33.65194698071948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df949b6e5f7f7d%3A0x7a1a5e3b3b3b3b3b!2sRawalpindi%2C%20Pakistan!5e0!3m2!1sen!2s!4v1631234567890!5m2!1sen!2s"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white p-8 rounded-lg shadow-lg text-gray-900">
              <h2 className="text-2xl font-bold mb-4">Connect With Me</h2>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/m-farzan2002/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 flex items-center"
                >
                  <FaLinkedin className="mr-2" /> LinkedIn
                </a>
                <a
                  href="https://github.com/farzanbhai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 flex items-center"
                >
                  <FaGithub className="mr-2" /> GitHub
                </a>
                <a
                  href="mailto:muhammadfarzan58@gmail.com"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 flex items-center"
                >
                  <FaEnvelope className="mr-2" /> Email
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;