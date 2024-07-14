import React from 'react';
import { FaFacebook, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';
import "./Footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-icons">
        <a href="https://www.facebook.com/mbilal.sajid.73" target="_blank" rel="noopener noreferrer"><FaFacebook size={30} /></a>
        <a href="https://www.instagram.com/_b_h_a_l_i_/" target="_blank" rel="noopener noreferrer"><FaInstagram size={30} /></a>
        <a href="https://github.com/Bhali-ZzZ" target="_blank" rel="noopener noreferrer"><FaGithub size={30} /></a>
        <a href="https://www.linkedin.com/in/muhammad-bilal-sajid" target="_blank" rel="noopener noreferrer"><FaLinkedin size={30} /></a>
      </div>
    </footer>
  );
};

export default Footer;
