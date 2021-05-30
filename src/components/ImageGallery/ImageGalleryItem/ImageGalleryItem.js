import React from 'react';
import styles from '../ImageGallery.module.css';

const ImageGalleryItem = ({imgSrc}) => {
    return (
      <li className={styles.ImageGalleryItem}>
        <img src={imgSrc} alt="" className={styles.ImageGalleryItemImage} />
      </li>
    );
};

export default ImageGalleryItem;