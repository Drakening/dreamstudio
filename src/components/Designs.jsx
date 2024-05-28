import React, { useState } from 'react';
import ScrollAnimation from './ui/ScrollAnimation'
import { FaEye } from 'react-icons/fa';
import styles from '../styles/designs.module.css';
import Design1 from '../assets/images/1.webp';
import Design2 from '../assets/images/2.webp';
import Design3 from '../assets/images/3.webp';
import Design4 from '../assets/images/4.webp';
import Design5 from '../assets/images/5.webp';
import Design6 from '../assets/images/6.webp';
import Design7 from '../assets/images/7.webp';
import Design8 from '../assets/images/8.webp';

const Designs = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setModalOpen(false);
  };

  const designsData = [
    {
      id: 1,
      name: 'Basic T-shirts',
      info: 'Standard tees for any occasion',
      image: Design1,
    },
    {
      id: 2,
      name: 'Casual Hoodies',
      info: 'Stay cozy with our comfy hoodies',
      image: Design2,
    },
    {
      id: 3,
      name: 'Classic Denim',
      info: 'Timeless denim for everyday wear',
      image: Design3,
    },
    {
      id: 4,
      name: 'Sporty Jackets',
      info: 'Get active with our sporty jackets',
      image: Design4,
    },
    {
      id: 5,
      name: 'Sporty Jackets',
      info: 'Get active with our sporty jackets',
      image: Design5,
    },
    {
      id: 6,
      name: 'Sporty Jackets',
      info: 'Get active with our sporty jackets',
      image: Design6,
    },
    {
      id: 7,
      name: 'Sporty Jackets',
      info: 'Get active with our sporty jackets',
      image: Design7,
    },
    {
      id: 8,
      name: 'Sporty Jackets',
      info: 'Get active with our sporty jackets',
      image: Design8,
    },
  ];

  return (
    <section className={styles.ourPicks}>
      <div className={styles.subheading}>
      <ScrollAnimation>
        <h2 className={styles.title}>Recent Designs</h2>
        <p>Discover our latest sold apparel.</p>
        </ScrollAnimation>
      </div>

      <div className={styles.picksGrid}>
      <ScrollAnimation>
        {designsData.map((design) => (
          <div key={design.id} className={styles.grid} onClick={() => openModal(design.image)}>
            <div className={styles.gridImg}>
              <img src={design.image} alt={design.name} />
              <div className={styles.eyeIcon}>
                <FaEye />
              </div>
            </div>
            <div className={styles.gridInfo}>
              <div className={styles.name}>{design.name}</div>
              <div className={styles.info}>{design.info}</div>
            </div>
          </div>
        ))}
      </ScrollAnimation>
      </div>

      {modalOpen && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div className={styles.modalContent}>
            <span className={styles.closeButton} onClick={closeModal}>X</span>
            <img src={selectedImage} alt="Selected Design" className={styles.modalImage} />
          </div>
        </div>
      )}
    </section>
  );
};

export default Designs;
