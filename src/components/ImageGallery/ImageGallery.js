import React from 'react';
import ImageGalleryItem from './ImageGalleryItem';
import styles from './ImageGallery.module.css';
import { v4 as uuid4 } from 'uuid';

const ImageGallery = ({ onClick, images }) => {
  return (
    <ul className={styles.ImageGallery}>
      {images.map(image => {
        const id = uuid4();

        return (
          <ImageGalleryItem onClick={onClick} key={id} imgSrc={image.src} />
        );
      })}
    </ul>
  );
};

export default ImageGallery;
