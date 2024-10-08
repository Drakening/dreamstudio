import React from 'react';
import { FaBuilding, FaMobileAlt, FaRegEnvelope } from 'react-icons/fa';
import styles from '../styles/contact.module.css';

const Contact = () => {
  return (
    <section className={styles.section}>
      <div className={styles.sectionHeader}>
        <div className={styles.container}>
          <h2>Contact Us</h2>
          <p>Got an idea for the perfect custom t-shirt? Reach out to us and let's bring your vision to life with a design that's uniquely yours!</p>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.contactInfo}>
            <div className={styles.contactInfoItem}>
              <div className={styles.contactInfoIcon}>
                <FaBuilding />
              </div>
              <div className={styles.contactInfoContent}>
                <h4>Address</h4>
                <p>4671 Sugar Camp Road,<br/> Pretoria, <br/>55060</p>
              </div>
            </div>
            <div className={styles.contactInfoItem}>
              <div className={styles.contactInfoIcon}>
                <FaMobileAlt />
              </div>
              <div className={styles.contactInfoContent}>
                <h4>Phone</h4>
                <p>013-457-2321</p>
              </div>
            </div>
            <div className={styles.contactInfoItem}>
              <div className={styles.contactInfoIcon}>
                <FaRegEnvelope />
              </div>
              <div className={styles.contactInfoContent}>
                <h4>Email</h4>
                <p><a href="mailto:DreamStudio@gmail.com">DreamStudio@gmail.com</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
