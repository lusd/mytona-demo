import React from 'react';
import styles from './social.module.css';
import vkontakte from './../../../assets/vk.svg';
import twitter from './../../../assets/twitter.svg';
import youtube from './../../../assets/youtube.svg';
import facebook from './../../../assets/facebook.svg';
import instagram from './../../../assets/instagram.svg';


const Social = (props) => {
  return (
    <div className={styles.social}>
      <a className={styles.social__link} href="https://vk.com/mytona_ru">
        <img src={vkontakte} alt="vk logo"/>
      </a>
      <a className={styles.social__link} href="https://twitter.com/mytona_official">
        <img src={twitter} alt="twitter logo"/>
      </a>
      <a className={styles.social__link} href="https://www.youtube.com/channel/UCFdoOYWqDIKXT4MVhC69OUg/featured">
        <img src={youtube} alt="youtube logo"/>
      </a>
      <a className={styles.social__link} href="https://www.facebook.com/mytona.official/">
        <img src={facebook} alt="facebook logo"/>
      </a>
      <a className={styles.social__link} href="https://www.instagram.com/mytona/">
        <img src={instagram} alt="instagram logo"/>
      </a>
    </div>
  )
}

export default Social;
