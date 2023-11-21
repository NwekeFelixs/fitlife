import React from 'react';
import '../css/style.css';
import videoBanner from '../images/video-banner.jpg';
import { IoPlay } from 'react-icons/io5';

const VideoSection = () => {
  return (
    <section className="section video" aria-label="video">
      <div className="container">

        <div className="video-card has-before has-bg-image"
          style={{ backgroundImage: `url(${videoBanner})` }}>

          <h2 className="h2 card-title">Explore Fitness Life</h2>

          <button className="play-btn" aria-label="play video">
            <IoPlay/>
          </button>

          <a href="#" className="btn-link has-before">Watch More</a>

        </div>

      </div>
    </section>
  );
}

export default VideoSection;
