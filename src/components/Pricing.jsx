import React from 'react';
import styles from '../styles/pricing.module.css';

const Pricing = () => {
  const scrollToContact = () => {
    const Section = document.getElementById('contact');
    if (Section) {
      Section.scrollIntoView({ behavior: 'smooth', block: 'start', duration: 500 });
    }
  };

  const priceItems = [
    {
      title: 'Basic',
      price: 'Price: R300',
      description: 'one side of the apparel',
      features: [
        'Black and white colors',
        'Personalized design',
        'Standard-quality T-shirt',
        'Sizes options(S-L)',
      ],
    },
    {
      title: 'Pro',
      price: 'Price: R500',
      description: 'both sides of the apparel',
      features: [
        'Full color spectrum',
        'Complex design creation',
        'High-quality T-shirt',
        'Sizes options(S-XXL)',
      ],
    },
  ];

  return (
    <section className={styles.priceList}>
      <div className={styles.subheading}>
        <h2 className='title'>Pricing</h2>
        <p>Unbeatable Deals: Explore Our Low Prices.</p>
      </div>
      <div className={styles.pricesContainer}>
        {priceItems.map((item, index) => (
          <div key={index} className={styles.flexContent}>
            <h2>{item.title}</h2>
            <h4>{item.price}</h4>
            <span>{item.description}</span>
            <ul>
              {item.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
            <button onClick={scrollToContact}>Order Now</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
