import React from 'react';
import ScrollAnimation from './ui/ScrollAnimation';
import styles from '../styles/services.module.css';
import Video from '../assets/videos/video.mp4';

const Services = () => {
  return (
    <section className={styles.Services}>
      <div className={styles.subheading}>
      <ScrollAnimation>
        <h2 className='title'>What we do</h2>
        <p>Crafting Dreams into Reality: Our Approach.</p>
        </ScrollAnimation>
      </div>
      <div className={styles.servicesContent}>
        <div className={styles.video}>
          <video src={Video} preload="auto" autoPlay loop muted />
        </div>
        <div className={styles.featuresContainer}>
          <div className={styles.features}>
            <div className={styles.feature}>
            <ScrollAnimation>
              <h3>1. Conceptualization:</h3>
              <p>
                We begin by discussing your vision 
                for the custom design. we work with you to 
                understand your inspiration.
              </p>
              </ScrollAnimation>
            </div>
            <div className={styles.feature}>
            <ScrollAnimation>
              <h3>2. Sketching and Drafting</h3>
              <p>
                Next, our skilled artists translate your ideas into 
                preliminary sketches. This stage allows you to visualize the design 
                and make any changes.
              </p>
              </ScrollAnimation>
            </div>
            <div className={styles.feature}>
            <ScrollAnimation>
              <h3>3. Hand-Painting with Fabric Paint</h3>
              <p>
                Once the design is finalized, our artists 
                hand-paint each detail onto high-quality fabric. 
              </p>
              </ScrollAnimation>
            </div>
            <div className={styles.feature}>
            <ScrollAnimation>
              <h3>4. Quality Assurance and Finishing</h3>
              <p>
                we conduct quality checks to ensure the artwork meets our standards. 
                The final product is then carefully packaged for delivery to you.
              </p>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
