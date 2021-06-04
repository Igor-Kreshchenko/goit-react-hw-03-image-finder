import React from 'react';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const styles = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
};

const AppLoader = () => {
  return (
    <>
      <Loader
        style={styles}
        type="ThreeDots"
        color="#3f51b5"
        height={100}
        width={100}
      />
    </>
  );
};

export default AppLoader;
