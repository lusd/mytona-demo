import React from 'react';
import styles from './language.module.css';

const Language = (props) => {
  const changeToEnglish = () => {
    props.changeLanguage(0);
  }
  const changeToRussian = () => {
    props.changeLanguage(1);
  }
  return <div className={styles.language}>
    {props.language === 'ru' ? <span className={styles.link} onClick={changeToEnglish}>ENG</span> : <span className={styles.link} onClick={changeToRussian}>РУС</span>}
  </div>
}

export default Language;
