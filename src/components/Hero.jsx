import React from 'react';
import styles from '../styles/hero.module.css';
import HeroPic from '../assets/images/custom-t.jpg';
import { motion } from 'framer-motion';

const Hero = () => {
  const scrollToContact = () => {
    const Section = document.getElementById('pricing');
    if (Section) {
      Section.scrollIntoView({ behavior: 'smooth', block: 'start', duration: 500 });
    }
  };

  return (
    <section className={styles.hero}>
      <div className={styles.heroContainer}>
        <motion.img
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2, ease: 'easeIn', delay: 0.5 }}
          src={HeroPic}
          alt=""
        />

        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2, ease: 'easeIn', delay: 0.5 }}
          className={styles.heroText}
        >
          <h1>
            Custom <span>T-Shirts</span>
          </h1>
          <p>Unleash your individuality with our unique, tailored t-shirt designs.</p>
          <button className={styles.heroBtn} onClick={scrollToContact}>
            Get started now
          </button>
          <div className={styles.checklistContainer}>
            <ul className={styles.checklist}>
              <li>Free Shipping <span>(orders over R999)</span></li>
              <li>No Minimums</li>
              <li>Quality Guaranteed</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
