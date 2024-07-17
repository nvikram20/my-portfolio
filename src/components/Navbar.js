import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./Navbar.css";

const Navbar = () => {
  const [isNightMode, setIsNightMode] = useState(false);

  const toggleNightMode = () => {
    setIsNightMode(!isNightMode);
    document.body.classList.toggle("night-mode", !isNightMode);
  };

  return (
    <div className="navbar-container">
      <nav className="navbar">
        <div className="navbar-logo">
          <Link to="/" className="navbar-logo-link">
            Niharika Vikram
          </Link>
        </div>
        <div className="navbar-right">
          <ul className="navbar-menu">
            {[
              { name: "Home", to: "/" },
              { name: "Education", to: "/education" },
              { name: "Work", to: "/work" },
              { name: "Projects", to: "/projects" },
              { name: "Connect", to: "/connect" },
            ].map((item, index) => (
              <motion.li
                className="navbar-item"
                key={index}
              >
                <Link to={item.to} className="nav-link">
                  {item.name}
                </Link>
              </motion.li>
            ))}
          </ul>
          <div className="night-mode-toggle" onClick={toggleNightMode}>
            {isNightMode ? "🌞" : "🌜"}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
