import React, { useEffect, useState } from "react";
import "./navbar.css";
import logo from "../../assets/logo.png";
import menu_icon from "../../assets/menu-icon.png";
import { Link } from "react-scroll";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);

  const [mobileMenu, setMobileMenu] = useState(false);

  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  };
  return (
    <nav className={`container , ${sticky ? "dark-nav" : ""}`}>
      <Link to="hero" smooth={true} offset={0} duration={500}>
        <img src={logo} alt="" className="logo" />
      </Link>
      <ul className={mobileMenu ? " " : "hide-mobile-menu"}>
        <li>
          <Link
            to="hero"
            smooth={true}
            offset={0}
            duration={500}
            onClick={toggleMenu}
          >
            Home{" "}
          </Link>
        </li>
        <li>
          <Link
            to="programs"
            smooth={true}
            offset={-230}
            duration={500}
            onClick={toggleMenu}
          >
            Program
          </Link>
        </li>
        <li>
          {" "}
          <Link
            to="about"
            smooth={true}
            offset={-180}
            duration={500}
            onClick={toggleMenu}
          >
            About Us
          </Link>
        </li>
        <li>
          {" "}
          <Link
            to="campus"
            smooth={true}
            offset={-230}
            duration={500}
            onClick={toggleMenu}
          >
            Campus
          </Link>
        </li>
        <li>
          {" "}
          <Link
            to="testimonials"
            smooth={true}
            offset={-230}
            duration={500}
            onClick={toggleMenu}
          >
            Testimonials
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} offset={-230} duration={500}>
            <button className="btn" onClick={toggleMenu}>
              Contact Us
            </button>
          </Link>
        </li>
      </ul>
      <img src={menu_icon} className="menu-icon" alt="" onClick={toggleMenu} />
    </nav>
  );
};

export default Navbar;
