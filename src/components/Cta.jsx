import React from 'react';
import styles from '../styles/cta.module.css';

const Cta = () => {
  const scrollToContact = () => {
    const Section = document.getElementById('pricing');
    if (Section) {
      Section.scrollIntoView({ behavior: 'smooth', block: 'start', duration: 500 });
    }
  };
  return (
    <div className={styles.cta}>
      <div className={styles.ctaInner}>
        <h3 className={styles.ctaInnerHeading}>
          Ready to raise
          <br />
          your T-shirt game?
        </h3>
        <div className={styles.btnWrapper}>
          <button onClick={scrollToContact} className={styles.ctaBtn}>
            <div className={styles.btnText}>Begin your order</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cta;
