import React from 'react';
import styles from './logo.module.css';
import logoleaf from './../../../assets/logoleaf.svg';
import logo from './../../../assets/logo.svg';
import {NavLink} from 'react-router-dom'


const Logo = (props) => {
  return (
    <div className={styles.logoBlock}>
      <NavLink exact to='/'>
        <picture>
          <source srcSet={logoleaf} media={'(max-width: 1199px)'}></source>
          <source srcSet={logo}></source>
          <img src={logo} className={styles.logo} alt="MyTona logo"/>
        </picture>
      </NavLink>
      <span className={styles.logoName}>mytona</span>
    </div>
  )
}

export default Logo;
