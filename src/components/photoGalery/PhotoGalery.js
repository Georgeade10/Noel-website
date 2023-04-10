import React from 'react';
import styles from './PhotoGallery.module.css';

import image1 from '../../assets/img1.jpg';
import image2 from '../../assets/img2.jpg';
import image3 from '../../assets/img3.jpg';
import image4 from '../../assets/img4.jpg';
import image5 from '../../assets/img5.jpg';

const images = [image1, image2, image3, image4, image5];

const PhotoGallery = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageGrid}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            className={styles.image}
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;
