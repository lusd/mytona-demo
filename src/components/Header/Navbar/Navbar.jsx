import React from 'react';
import styles from './navbar.module.css';
import {NavLink} from 'react-router-dom';

const Navbar = (props) => {
  return (
    <nav className={styles.navbar}>
      <div className={`${styles.item} ${styles.active}`}>
        <NavLink exact to='/' activeClassName={styles.active}>
          { props.language === 'en' ? 'MAIN' : 'ГЛАВНАЯ' }
        </NavLink>
      </div>
      <div className={styles.item}>
        <NavLink to='/company' activeClassName={styles.active}>
          { props.language === 'en' ? 'COMPANY' : 'О КОМПАНИИ' }
        </NavLink>
      </div>
      <div className={styles.item}>
        <NavLink to='/career' activeClassName={styles.active}>
          { props.language === 'en' ? 'CAREER' : 'КАРЬЕРА' }
        </NavLink>
      </div>
      <div className={styles.item}>
        <NavLink to='/games' activeClassName={styles.active}>
          { props.language === 'en' ? 'GAMES' : 'НАШИ ИГРЫ' }
        </NavLink>
      </div>
      <div className={styles.item}>
        <NavLink to='/articles' activeClassName={styles.active}>
          { props.language === 'en' ? 'NEWS' : 'НОВОСТИ' }
        </NavLink>
      </div>
      <div className={styles.item}>
        <NavLink to='/techsupport' activeClassName={styles.active}>
          { props.language === 'en' ? 'SUPPORT' : 'ТЕХПОДДЕРЖКА' }
        </NavLink>
      </div>
    </nav>
  )
}

export default Navbar;
