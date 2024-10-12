import React, { useState } from 'react';
import styles from '../styles/questions.module.css';
import ScrollAnimation from './ui/ScrollAnimation';

const Questions = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const accordion = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className={`card ${styles.frequentlyAsked}`}>
    <ScrollAnimation>
      <h2 className='title'>Frequently asked questions</h2>
      <p>Answers Await: Your FAQs Answered Here.</p>
    </ScrollAnimation>
      <div className={styles.accContainer}>
        {faqData.map((faq, index) => (
          <div key={index}>
            <button
              className={`${styles.accBtn} ${openIndex === index ? styles.isOpen : ''}`}
              onClick={() => accordion(index)}
            >
              {faq.question}
            </button>
            <div
              className={styles.accContent}
              style={{ maxHeight: openIndex === index ? '1000px' : '0' }}
            >
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const faqData = [
  {
    question: 'How long does it take to receive my custom t-shirt?',
    answer:
      'Our typical turnaround time for custom orders is 7-10 business days. This includes the design process, printing, and shipping. However, complex designs or bulk orders may take a bit longer. Rest assured, we strive to get your unique piece to you as quickly as possible!',
  },
  {
    question: 'Can I wash my custom apparel like regular clothing?',
    answer:
      'Absolutely! We use high-quality fabric paints that are durable and washable. To ensure the longevity of your design, we recommend washing your custom t-shirt inside out in cold water and air drying or using low heat in the dryer.',
  },
  {
    question: 'Do you offer size options for your custom t-shirts?',
    answer:
      "Yes, we offer a range of sizes to accommodate all body types. If you're unsure, feel free to reach out to us, and we'll be happy to assist you in selecting the right size for your custom apparel.",
  },
  {
    question: "Can I see a proof of my design before it's printed?",
    answer:
      "Absolutely! Once you've placed your order and submitted your design, our team will create a digital proof for your approval. We want to ensure that you're completely satisfied with the design before we proceed with printing. You'll have the opportunity to review the proof and request any adjustments if needed.",
  },
];

export default Questions;
