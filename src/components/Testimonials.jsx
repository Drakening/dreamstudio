import React from 'react';
import styles from '../styles/testimonials.module.css';
import Jeff from '../assets/images/jeffery-erhunse-vp9mRauo68c-unsplash.jpg';
import Prince from '../assets/images/prince-akachi-LWkFHEGpleE-unsplash.jpg';
import Luis from '../assets/images/luis-villasmil-hh3ViD0r0Rc-unsplash.jpg';

const Testimonials = () => {
  const testimonialsData = [
    {
      name: 'Emily Johnson',
      image: Jeff,
      text:
        "I ordered a custom hoodie with my favorite quote, and I couldn't be happier! The design was exactly what I wanted, and the fabric is so comfy. I've gotten so many compliments, and it's become my favorite piece in my wardrobe. The whole process was smooth, from design to delivery. Can't wait to order more for my friends!",
    },
    {
      name: 'Sarah Lucas',
      image: Prince,
      text:
        "My personalized t-shirt is an absolute gem! The design is stunning, with vibrant colors that pop. It's become my go-to shirt for casual outings, and I always get asked where I got it. Working with Dream was a breeze; they understood my vision perfectly and brought it to life. I'm beyond thrilled!",
    },
    {
      name: 'Michael Smith',
      image: Luis,
      text:
        "I surprised my girlfriend with a custom tee for her birthday, and she absolutely adored it! The print quality was top-notch, with vivid colors that looked amazing. It was the perfect personalized gift, and she wears it proudly. The team at Dream made the process seamless, and I couldn't be happier with the result!",
    },
  ];

  return (
    <section className={styles.testimonials}>
      <div className={styles.subheading}>
        <h2 className='title'>Testimonials</h2>
        <p>Words from the Wise.</p>
      </div>
      <div className={styles.testimonialsWrapper}>
        {testimonialsData.map((testimonial, index) => (
          <div key={index} className={styles.testimonialsContainer}>
            <div className={styles.profile}>
              <div className={styles.imgBox}>
                <img src={testimonial.image} alt={testimonial.name} />
              </div>
              <h2>{testimonial.name}</h2>
            </div>
            <p>
              <span className={styles.left}>"</span>
              {testimonial.text}
              <span className={styles.right}>"</span>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
