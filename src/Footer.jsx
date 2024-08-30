import React from "react";
import './index.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-grid">
      <div className="social1">
        <p className="footer-text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, enim sed nihil architecto dolor eaerror!
        </p>
        <div className="social">
            <img src="discord.png" />
            <img src="Linked.png" />
            <img src="instaa.jfif"/>   </div>
        </div>
        <ul className="footer-list">
          <li className="footer-list-item title">Address</li>
          <li className="footer-list-item">Lorem ipsum doab nemo rem, porro repellendus suscipit itaque deleniti est ratione minus! Molestiae sint eos aut, iure necessitatibus quos. Deleniti, aut.</li>
        </ul>
        <ul className="footer-list">
          <li className="footer-list-item title">Contact</li>
          <li className="footer-list-item">XYZ-999999999</li>
          <li className="footer-list-item">ABC-111111111</li>
        </ul>
        <ul className="footer-list">
          <li className="footer-list-item title">About</li>
          <li className="footer-list-item">DJS CODESTARS IS THE COMPETITIVE PROGRAMMING CLUB IN DJ SANGHVI</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
