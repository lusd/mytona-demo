import React from 'react';
import preloader from './../../assets/23.gif';
import styles from './prealoder.module.css';

const Preloader = (props) => {
  return <div className={styles.preloader}>
    <img src={preloader} alt="Preloader"/>
  </div>
}

export default Preloader;
