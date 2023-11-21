import React from 'react';
import '../css/style.css';
import heroBg from '../images/hero-bg.png'
import calories from '../images/calories.svg';
import heroCircle from '../images/hero-circle-one.png';
import heroCircle2 from '../images/hero-circle-two.png';
import heroBanner from '../images/hero-banner.png';
import heartRate from '../images/heart-rate.svg';

const HeroSection = () => {
  return (
    <section className="section hero bg-dark has-after has-bg-image" id="home" aria-label="hero" data-section
      style={{ backgroundImage: `url(${heroBg})`  }}>
      <div className="container">

        <div className="hero-content">

          <p className="hero-subtitle">
            <strong className="strong">The Best</strong> Fitness Club
          </p>

          <h1 className="h1 hero-title">Work Hard To Get Better Life</h1>

          <p className="section-text">
            Duis mollis felis quis libero dictum vehicula. Duis dictum lorem mi, a faucibus nisi eleifend eu.
          </p>

          <a href="#" className="btn btn-primary">Get Started</a>

        </div>

        <div className="hero-banner">

          <img src={heroBanner} width="660" height="753" alt="hero banner" className="w-100" />

          <img src={heroCircle} width="666" height="666" aria-hidden="true" alt=""
            className="circle circle-1" />
          <img src={heroCircle2} width="666" height="666" aria-hidden="true" alt=""
            className="circle circle-2" />

          <img src={heartRate} width="255" height="270" alt="heart rate"
            className="abs-img abs-img-1" />
          <img src={calories} width="348" height="224" alt="calories" className="abs-img abs-img-2" />

        </div>

      </div>
    </section>
  );
};

export default HeroSection;
