import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTiktok } from '@fortawesome/free-brands-svg-icons';
import styles from '../styles/about.module.css';
import aboutImg from '../assets/images/about.webp';

const About = () => {
  const openSocialMedia = (url) => {
    window.open(url, '_blank');
  };

  return (
    <section className={styles.aboutUs}>
      <div className={styles.subheading}>
      
        <h2 className='title'>About Us</h2>
        <p>Sharing Our Journey, Values, and Passion.</p>
        
      </div>
      <div className={`${styles.responsiveContainerBlock} ${styles.bigContainer}`}>
        <div className={`${styles.responsiveContainerBlock} ${styles.Container}`}>
          <img className={styles.mainImg} src={aboutImg} alt="About Us" />
          <div className={`${styles.allText} ${styles.aboveText}`}>
          
            <p className={`${styles.textBlk} ${styles.subHeadingText}`}>
              At Dream, we're all about helping you express yourself!
            </p>
          
            <p className={`${styles.textBlk} ${styles.description}`}>
              Our journey began with a love for art and a knack for turning blank 
              canvases (or in this case, blank tees!) into your favorite 
              anime character, or a portrait of your beloved pet.
            </p>
            
            <div className={styles.socialIcons}>
              <FontAwesomeIcon icon={faInstagram} className={styles.icon} onClick={() => openSocialMedia('https://www.instagram.com/')} />
              <FontAwesomeIcon icon={faFacebook} className={styles.icon} onClick={() => openSocialMedia('https://www.facebook.com/')} />
              <FontAwesomeIcon icon={faTiktok} className={styles.icon} onClick={() => openSocialMedia('https://www.tiktok.com/')} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
