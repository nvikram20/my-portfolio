import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {ReactTyped} from "react-typed";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <nav className="navbar">
        <div className="navbar-logo">
          <ReactTyped
            strings={["NV", "Niharika Vikram"]}
            typeSpeed={40}
            backSpeed={50}
            loop
          />
        </div>
        <ul className="navbar-menu">
          {[
            { name: "Home", to: "/" },
            { name: "Projects", to: "/projects" },
            { name: "Resume", to: "/resume" },
            { name: "Let's Connect", to: "/connect" },
          ].map((item, index) => (
            <motion.li
              className="navbar-item"
              key={index}
              whileHover={{ y: -5, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link to={item.to} className="nav-link">{item.name}</Link>
              <motion.div
                className="underline"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.li>
          ))}
        </ul>
        <div className="navbar-animation"></div>
        <div className="navbar-animation-2"></div>
        <div className="navbar-animation-3"></div>
        <div className="navbar-animation-4"></div>
        <div className="navbar-animation-5"></div>
        <div className="navbar-animation-6"></div>
        <div className="navbar-animation-7"></div>
        <div className="navbar-animation-8"></div>
        <div className="navbar-animation-9"></div>
        <div className="navbar-animation-10"></div>
      </nav>
    </div>
  );
};

export default Navbar;
