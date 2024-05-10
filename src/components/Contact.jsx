import React from 'react';
import styles from '../styles/contact.module.css';
import { FaHandPointDown } from 'react-icons/fa'; // Import the hand-point-down icon from react-icons

const Contact = () => {
  return (
    <section className={styles.contactUs} id="contact">
    
      <div className={styles.container}>
        <div className={styles.title}>
          Vibrant, Designer and <span className={styles.color}>Enigmatic</span>
        </div>
        <div className={styles.description2}>
          We are Dreamy Designs, where every creation is more than just fashion—it's an ode to innovation, 
          a celebration of our origins, and a stride toward a future brimming with endless possibilities. 
          Each piece is meticulously crafted, uniquely tailored to reflect your individuality. 
          If you're seeking something as rare and one-of-a-kind as you are, don't hesitate to reach out to us.
        </div>
        <FaHandPointDown className={styles.handIcon} /> {/* Use the FaHandPointDown icon */}
        <div className={styles.description}>
          <a href="mailto:Dream@gmail.com" className={`${styles.btn} ${styles.dark}`}>Email Us</a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
