import { useState } from 'react';
import './index.css';

const Core = () => {
  return (
    <section className="intro">
      <div className="left">
        <h1>A Programming Club that nurtures the spirit of computer programming among students</h1>
        <div className="buttonContainer">
          
          <button className="bookTable">Join Us</button>
        </div>
        <div className="social">
          <img src="discord.png" alt="Twitter" />
          <img src="Linked.png" alt="Facebook" />
          <img src="instaa.jfif" alt="Instagram" />
        </div>
      </div>
      <div className="images1">
        <img src="code.jfif" className='restaurantImg' />
          </div>
    </section>
  );
};

export default Core;
