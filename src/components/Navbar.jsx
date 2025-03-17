// src/components/Navbar.js
import "./Navbar.css"; // Import the CSS file
import { FaSearch } from "react-icons/fa"; // Import search icon from react-icons
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?query=${searchQuery}`);
    }
  };

  return (
    <nav className="navbar">
      {/* Site Name or Logo */}
      <div className="navbar-logo">
        <Link to="/">IT Specialist</Link>
      </div>

      {/* Navigation Links */}
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>

      {/* Search Bar */}
      <form className="navbar-search" onSubmit={handleSearchSubmit}>
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="search-input"
        />
        <button type="submit" className="search-button">
          <FaSearch className="search-icon" />
        </button>
      </form>
    </nav>
  );
};

export default Navbar;