import React from 'react';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const AppLoader = () => {
  const styles = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  };

  return (
    <>
      <Loader
        style={styles}
        type="ThreeDots"
        color="#00BFFF"
        height={100}
        width={100}
      />
    </>
  );
};

export default AppLoader;
