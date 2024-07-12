import React from 'react';
import './Footer.css';
import { FaEnvelope, FaXing, FaFacebookF, FaYoutube, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <p>© 2024 ApplyBoard.com</p>
      </div>
      <div className="footer-center">
        <FaEnvelope className="footer-icon" />
        <FaXing className="footer-icon" />
        <FaFacebookF className="footer-icon" />
        <FaYoutube className="footer-icon" />
        <FaInstagram className="footer-icon" />
        <FaLinkedinIn className="footer-icon" />
      </div>
      <div className="footer-right">
        <a href="#privacy" className="footer-link">Privacy policy</a>
        <a href="#terms" className="footer-link">Terms & conditions</a>
        <a href="#about" className="footer-link">About</a>
        <a href="#blog" className="footer-link">Blog</a>
      </div>
    </footer>
  );
};

export default Footer;
