import React from 'react';
import styles from './error.module.css';
import errorImage from './../../assets/404.png';
import {NavLink} from 'react-router-dom';

const Error = (props) => {
  return (
    <div className={styles.error}>
      <img src={errorImage} alt="404"/>
      <p className={styles.message}>Oops! Looks like this page doesn’t exist <span role="img" aria-label="sad emoji">🥺</span></p>
      <NavLink exact to='/' className={styles.back}>
        MAIN >
      </NavLink>
    </div>
  )
}

export default Error;
