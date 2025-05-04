import React from 'react';
import { Link } from 'react-router-dom'; // For navigation between pages
import '../styles/Footer.css';  // Include the relevant styles for design

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-buttons">
        {/* Privacy Policy Button */}
        <Link to="/privacy-policy" className="footer-button privacy-policy-btn">
          Privacy Policy
        </Link>
        
        {/* Data Deletion Button */}
        <Link to="/data-deletion" className="footer-button data-deletion-btn">
          Request Data Deletion
        </Link>
      </div>
    </footer>
  );
};

export default Footer;