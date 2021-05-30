import React from 'react';
import styles from './Modal.module.css';

const Modal = () => {
  return <div className={styles.Overlay}>
    <div className={styles.Modal}></div>
  </div>;
};

export default Modal;