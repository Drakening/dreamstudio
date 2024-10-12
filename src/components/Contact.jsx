import React from 'react';
import ScrollAnimation from './ui/ScrollAnimation'
import styles from '../styles/contact.module.css';

const Contact = () => {
  return (
    <section className={styles.section}>
      <div className={styles.sectionHeader}>
        <ScrollAnimation>
        <h2 className='title'>Contact Us</h2>
        </ScrollAnimation>
        <div className={styles.container}>
          <p>Got an idea for the perfect custom t-shirt? Reach out to us and let's bring your vision to life with a design that's uniquely yours!</p>
          <button className={styles.contact}>Email Us</button>
        </div>

      </div>
    </section>
  );
};

export default Contact;
