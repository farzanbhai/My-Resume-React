import "./App.css";
//import ThemeWrapper from "./components/ThemeWrapper";
import Navbar from "./components/Navbar";
import "./styles/global.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Chatbot from "./components/Chatbot";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Chatbot />
        <Footer />
      </Router>
    </>
  );
}

export default App;
