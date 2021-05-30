import React from 'react';
import styles from '../ImageGallery.module.css';

const ImageGalleryItem = ({ imgSrc, onClick }) => {
  return (
    <li className={styles.ImageGalleryItem} onClick={onClick}>
      <img src={imgSrc} alt="" className={styles.ImageGalleryItemImage} />
    </li>
  );
};

export default ImageGalleryItem;
