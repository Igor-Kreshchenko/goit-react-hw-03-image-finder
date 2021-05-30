import React, { Component } from 'react';
import SearchBar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import Loader from './components/Loader';
import Button from './components/Button';
import Modal from './components/Modal';
import styles from './App.module.css';

import images from './images.json';

class App extends Component {
  state = {
    images: images,
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  render() {
    const { images, showModal } = this.state;
    const { toggleModal } = this;

    return (
      <div className={styles.css}>
        <SearchBar />
        <ImageGallery onClick={toggleModal} images={images} />
        <Loader />
        <Button />
        {showModal && (
          <Modal
            onClose={toggleModal}
            largeImg={
              'https://image.freepik.com/free-photo/funny-smiling-gray-tabby-cute-cat-with-blue-eyes_253512-36.jpg'
            }
          />
        )}
      </div>
    );
  }
}

export default App;
