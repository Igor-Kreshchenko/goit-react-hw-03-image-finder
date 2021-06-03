import React from 'react';
import ImageGalleryItem from './ImageGalleryItem';
import styles from './ImageGallery.module.css';

const ImageGallery = ({ onClick, images }) => {
  return (
    <ul className={styles.ImageGallery}>
      {images.map(({ id, webformatURL, largeImageURL }) => {
        return (
          <ImageGalleryItem
            onClick={onClick}
            key={id}
            imgSrc={webformatURL}
            data-src={largeImageURL}
          />
        );
      })}
    </ul>
  );
};

export default ImageGallery;
