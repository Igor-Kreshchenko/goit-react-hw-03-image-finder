import React, { Component } from 'react';
import SearchBar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import Loader from './components/Loader';
import Button from './components/Button';
import Modal from './components/Modal';
import styles from './App.module.css';

class App extends Component {
  state = {};

  render() {
    return (
      <div className={styles.css}>
        <SearchBar />
        <ImageGallery />
        <Loader />
        <Button />
        {/* <Modal /> */}
      </div>
    );
  }
}

export default App;
