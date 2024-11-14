// src/components/CardSection.jsx
import React from 'react';
import card1 from '../assets/cards/card1.png';
import card2 from '../assets/cards/card2.jpg';
import card3 from '../assets/cards/card3.jpg';
import card4 from '../assets/cards/card4.jpg';
import card5 from '../assets/cards/card5.jpg';
import card6 from '../assets/cards/card6.jpg';
import card7 from '../assets/cards/card7.jpg';
import card8 from '../assets/cards/card8.jpg';
import styles from './CardSection.module.css';

const CardSection = () => {
  const cardImages = [
    { image: card1, title: 'Card 1' },
    { image: card2, title: 'Card 2' },
    { image: card3, title: 'Card 3' },
    { image: card4, title: 'Card 4' },
    { image: card5, title: 'Card 5' },
    { image: card6, title: 'Card 6' },
    { image: card7, title: 'Card 7' },
    { image: card8, title: 'Card 8' },
  ];

  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>Fully Responsive Design</h2>
      <p className={styles.sectionSubtitle}>Providing optimal viewing experiences on desktops, tablets, and smartphones.</p>
      <div className={styles.cardGrid}>
        {cardImages.map((card, index) => (
          <div key={index} className={styles.card}>
            <img src={card.image} alt={card.title} className={styles.cardImage} />
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>{card.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CardSection;
