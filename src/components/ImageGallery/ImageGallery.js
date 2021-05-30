import React from 'react';
import ImageGalleryItem from './ImageGalleryItem';
import styles from './ImageGallery.module.css';
import images from './images.json';
import { v4 as uuid4 } from 'uuid';

const ImageGallery = () => {
    return (
      <ul className={styles.ImageGallery}>
        {images.map(image => {
          const id = uuid4();

          return <ImageGalleryItem key={id} imgSrc={image.src} />;
        })}
      </ul>
    );
};

export default ImageGallery;