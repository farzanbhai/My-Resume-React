// src/pages/Home.js
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  FaReact,
  FaPython,
  FaWordpress,
  FaPaintBrush,
  FaDatabase,
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaSolarPanel,
  FaShoppingCart,
  FaLaptopCode,
} from "react-icons/fa";
import { SiFreelancer } from "react-icons/si";

const Home = () => {
  // Custom arrow components
  const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} z-10`}
        style={{
          ...style,
          right: "10px",
          display: "block",
          background: "rgba(0, 0, 0, 0.5)",
          borderRadius: "50%",
          padding: "0px",
        }}
        onClick={onClick}
      />
    );
  };

  const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} z-10`}
        style={{
          ...style,
          left: "10px",
          display: "block",
          background: "rgba(0, 0, 0, 0.5)",
          borderRadius: "50%",
          padding: "0px",
        }}
        onClick={onClick}
      />
    );
  };

  // Slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // Slider data (you can replace this with your projects or skills)
  const sliderData = [
    {
      icon: <FaReact className="text-6xl text-blue-500" />,
      title: "React Developer",
      description:
        "Experienced in building dynamic and responsive web applications using React.",
    },
    {
      icon: <FaPython className="text-6xl text-yellow-500" />,
      title: "Python Developer",
      description:
        "Skilled in Python programming, data preprocessing, and AI/ML integration.",
    },
    {
      icon: <FaWordpress className="text-6xl text-blue-700" />,
      title: "WordPress Developer",
      description:
        "Developed multiple e-commerce and corporate websites using WordPress.",
    },
    {
      icon: <FaPaintBrush className="text-6xl text-purple-500" />,
      title: "Graphic Designer",
      description:
        "Specialized in logo design and creating visually appealing graphics.",
    },
    {
      icon: <FaDatabase className="text-6xl text-green-500" />,
      title: "Database Management",
      description: "Proficient in managing databases using MS SQL and MongoDB.",
    },
  ];

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

  // Hover animation for skill cards
  const skillCardHover = {
    scale: 1.05,
    boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
    transition: { duration: 0.3 },
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Hero Section */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="bg-gradient-to-r from-blue-500 to-purple-600 py-20 text-white text-center"
      >
        <motion.h1 variants={fadeInUp} className="text-5xl font-bold">
          Muhammad Farzan
        </motion.h1>
        <motion.p variants={fadeInUp} className="mt-4 text-xl">
          Motivated IT professional with expertise in React, WordPress, Python,
          Logo Designing and AI/ML.
        </motion.p>
        <motion.div
          variants={fadeInUp}
          className="mt-8 flex justify-center space-x-4"
        >
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
            href="https://www.freelancer.com/u/muhammadfarzan58"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-300 flex items-center"
          >
            <SiFreelancer className="mr-2" />
            Freelancer
          </a>
        </motion.div>
      </motion.div>

      {/* Slider Section */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="container mx-auto px-4 py-16 relative"
      >
        <motion.h2
          variants={fadeInUp}
          className="text-3xl font-bold text-center mb-8"
        >
          What I Do
        </motion.h2>
        <Slider {...sliderSettings}>
          {sliderData.map((item, index) => (
            <motion.div key={index} variants={fadeInUp} className="px-4">
              <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
                <div className="flex justify-center">{item.icon}</div>
                <h3 className="text-2xl font-semibold mt-4">{item.title}</h3>
                <p className="mt-2 text-gray-600">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </Slider>
      </motion.div>

      {/* Skills Section */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        id="skills"
        className="bg-gray-50 py-16"
      >
        <div className="container mx-auto px-4">
          <motion.h2
            variants={fadeInUp}
            className="text-3xl font-bold text-center mb-8"
          >
            My Skills
          </motion.h2>
          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                icon: <FaReact className="text-4xl text-blue-500" />,
                title: "React Developer",
                description:
                  "Experienced in building dynamic and responsive web applications using React.",
              },
              {
                icon: <FaPython className="text-4xl text-yellow-500" />,
                title: "Python Developer",
                description:
                  "Skilled in Python programming, data preprocessing, and AI/ML integration.",
              },
              {
                icon: <FaWordpress className="text-4xl text-blue-700" />,
                title: "WordPress Developer",
                description:
                  "Developed multiple e-commerce and corporate websites using WordPress.",
              },
              {
                icon: <FaPaintBrush className="text-4xl text-purple-500" />,
                title: "Graphic Designer",
                description:
                  "Achieved and maintained a 5/5 rating based on excellent feedback and consistent performance.",
              },
              {
                icon: <FaDatabase className="text-4xl text-green-500" />,
                title: "Database Management",
                description:
                  "Proficient in managing databases using MS SQL and MongoDB.",
              },
              {
                icon: <FaSolarPanel className="text-4xl text-orange-500" />,
                title: "AI/ML Enthusiast",
                description:
                  "Experienced in AI/ML projects, including defect detection in solar panels.",
              },
            ].map((skill, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                // whileHover={skillCardHover} // Add hover animation
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex justify-center">{skill.icon}</div>
                <h3 className="text-xl font-semibold mt-4 text-center">
                  {skill.title}
                </h3>
                <p className="mt-2 text-gray-600 text-center">
                  {skill.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Projects Section */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="container mx-auto px-4 py-16"
      >
        <motion.h2
          variants={fadeInUp}
          className="text-3xl font-bold text-center mb-8"
        >
          My Projects
        </motion.h2>
        <motion.div
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {[
            {
              icon: <FaShoppingCart className="text-4xl text-blue-500" />,
              title: "E-commerce Website - SofaScene",
              description:
                "Built a fully functional e-commerce platform for a UK-based furniture retailer.",
                link: "https://sofascene.co.uk/",
            },
            {
              icon: <FaShoppingCart className="text-4xl text-green-500" />,
              title: "E-commerce Website - Sofas n Beds",
              description:
                "Designed and launched an e-commerce website for a UK-based furniture retailer.",
                link: "https://sofasnbeds.co.uk/",
            },
            {
              icon: <FaLaptopCode className="text-4xl text-purple-500" />,
              title: "Apricus Technical Solutions",
              description:
                "Created a professional website for supply sourcing & engineering consultancy company.",
                link: "https://www.apricus-tek.com/",
            },
            {
              icon: <FaLaptopCode className="text-4xl text-red-500" />,
              title: "Corporate Website - Alifah Enterprise",
              description:
                "Built a sleek website for a Singapore-based supplier of electronic components.",
                link: "https://www.alif-ent.com/",
            },
            {
              icon: <FaReact className="text-4xl text-blue-500" />,
              title: "TextChanger Web App",
              description:
                "Developed a responsive web app for text manipulation with dark mode support.",
                link: "https://github.com/farzanbhai",
            },
            {
              icon: <FaSolarPanel className="text-4xl text-orange-500" />,
              title: "SolarAI – Application",
              description:
                "Developed an AI-driven system for real-time defect detection in solar panels using DL.",
            }
          ].map((project, index) => (
            <a
              key={index}
              href={project.link} // Redirect to the specified link
              target="_blank" // Open link in a new tab
              rel="noopener noreferrer" // Security best practice
            >
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={skillCardHover}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              >
                <div className="flex justify-center">{project.icon}</div>
                <h3 className="text-xl font-semibold mt-4 text-center">
                  {project.title}
                </h3>
                <p className="mt-2 text-gray-600 text-center">
                  {project.description}
                </p>
              </motion.div>
            </a>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home;

Home.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func,
};

Home.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func,
};
