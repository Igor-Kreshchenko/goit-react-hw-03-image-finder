import React, { Component } from 'react';
import SearchBar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import Button from './components/Button';
import Modal from './components/Modal';
import AppLoader from './Loader';
import fetchImages from './services/api-service';
import styles from './App.module.css';

class App extends Component {
  state = {
    images: [],
    showModal: false,
    currentPage: 1,
    searchQuery: '',
    largeImg: '',
    isLoading: false,
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchImages();
    }
  }

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  onChangeQuery = query => {
    this.setState({
      images: [],
      searchQuery: query,
      currentPage: 1,
      error: null,
    });
  };

  fetchImages = () => {
    const { currentPage, searchQuery } = this.state;
    const options = {
      searchQuery,
      currentPage,
    };

    this.setState({ isLoading: true });

    fetchImages(options)
      .then(images => {
        this.setState(prevState => ({
          images: [...prevState.images, ...images],
          currentPage: (prevState.currentPage += 1),
        }));
      })
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  render() {
    const { images, showModal, isLoading } = this.state;
    const { toggleModal, onChangeQuery, fetchImages } = this;

    return (
      <div className={styles.App}>
        <SearchBar onSubmit={onChangeQuery} />
        <ImageGallery onClick={toggleModal} images={images} />
        {isLoading && <AppLoader />}
        {images.length > 0 && <Button onClick={fetchImages} />}
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
