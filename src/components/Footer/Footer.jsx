import React from 'react';
import styles from './footer.module.css';
import logoImage from './../../assets/logo.svg';
import Social from './../Header/Social/Social.jsx';

const Footer = (props) => {

  const year = new Date().getFullYear();
  const copy = '\u00A9';

  return (
    <div className={styles.footer}>
      <div className={styles.wrap}>
        <div className={styles.logo__block}>
          <img className={styles.footer__logo} src={logoImage} alt="logo"/>
        </div>
        <div className={styles.social__block}>
          <Social />
        </div>
        <div className={styles.sites__block}>
          <h5 className={styles.title}>
            {props.language === 'en' ? 'Game websites' : 'Сайты игр'}
          </h5>
          <a className={styles.link} href="https://seekersnotes.com/">Seekers Notes: Hidden Mystery</a>
          <a className={styles.link} href="https://cookingdiary.game/">Cooking Diary: Tasty Hills</a>
        </div>
        <div className={styles.contacts__block}>
          <h5 className={styles.title}>
            {props.language === 'en' ? 'Contacts' : 'Контакты'}
          </h5>
          <a className={styles.link} href="mailto:info@mytona.com">info@mytona.com</a>
          <a className={styles.link} href="mailto:support@mytona.com">support@mytona.com</a>
        </div>
        <div className={styles.confidential__block}>
          <a className={styles.link} href="/privacy-policy">
            {props.language === 'en' ? 'Privacy policy' : 'Политика конфиденциальности'}
          </a>
          <a className={styles.link} href="/terms-of-service">
            {props.language === 'en' ? 'Terms of use' : 'Условия использования'}
          </a>
          <a className={styles.link} href="/cookie-policy">
            {props.language === 'en' ? 'Cookie policy' : 'Политика использования файлов cookie'}
          </a>
          <a className={styles.link} href="/press-kit">
            {props.language === 'en' ? 'Press kit' : 'Пресс-кит'}
          </a>
          {props.language === 'en' ? '' : <a className={`${styles.link} ${styles.link__light}`} href="/sout-results">Оценка условий труда</a>}
        </div>
        <div className={styles.copyright}>{copy}2018-{year} MyTona. All rights reserved</div>
      </div>
    </div>
  )
}

export default Footer;
