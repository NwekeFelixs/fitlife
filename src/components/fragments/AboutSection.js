import React from 'react';
import '../css/style.css';

import aboutBanner from '../images/about-banner.png';
import aboutCircle1 from '../images/about-circle-one.png';
import aboutCircle2 from '../images/about-circle-two.png';
import coach from '../images/about-coach.jpg';
import fitness from '../images/fitness.png';


const AboutSection = () => {
  return (
    <section className="section about" id="about" aria-label="about">
      <div className="container">

        <div className="about-banner has-after">
          <img src={aboutBanner} width="660" height="648" loading="lazy" alt="about banner" className="w-100" />

          <img src={aboutCircle1} width="660" height="534" loading="lazy" aria-hidden="true" alt="" className="circle circle-1" />
          <img src={aboutCircle2} width="660" height="534" loading="lazy" aria-hidden="true" alt="" className="circle circle-2" />

          <img src={fitness} width="650" height="154" loading="lazy" alt="fitness" className="abs-img w-100" />
        </div>

        <div className="about-content">

          <p className="section-subtitle">About Us</p>

          <h2 className="h2 section-title">Welcome To Our Fitness Gym</h2>

          <p className="section-text">
            Nam ut hendrerit leo. Aenean vel ipsum nunc. Curabitur in tellus vitae nisi aliquet dapibus non et erat.
            Pellentesque
            porta sapien non accumsan dignissim curabitur sagittis nulla sit amet dolor feugiat.
          </p>

          <p className="section-text">
            Integer placerat vitae metus posuere tincidunt. Nullam suscipit ante ac aliquet viverra vestibulum ante
            ipsum primis.
          </p>

          <div className="wrapper">

            <div className="about-coach">

              <figure className="coach-avatar">
                <img src={coach} width="65" height="65" loading="lazy" alt="Trainer" />
              </figure>

              <div>
                <h3 className="h3 coach-name">Denis Robinson</h3>

                <p className="coach-title">Our Coach</p>
              </div>

            </div>

            <a href="#" className="btn btn-primary">Explore More</a>

          </div>

        </div>

      </div>
    </section>
  );
}

export default AboutSection;
