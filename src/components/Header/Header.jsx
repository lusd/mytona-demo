import React from 'react';
import styles from './header.module.css';
import Navbar from './Navbar/Navbar.jsx';
import logo from './../../assets/logo.svg';
import {setLanguage} from './../../redux/startDataReducer.js';
import {connect} from 'react-redux';
import Language from './Language/Language.jsx';
import Logo from './Logo/Logo.jsx';
import Social from './Social/Social.jsx';

const Header = (props) => {

  const Navigation = React.createRef();
  const MobileMenuButton = React.createRef();
  const Header = React.createRef();
  const openAnimationDelay = 115;
  const closeAnmitaionDelay = 450;
  let isActive = false;

  const toggleMenu = () => {
    if (!isActive) {
      Navigation.current.classList.toggle(styles.active);
      MobileMenuButton.current.classList.toggle(styles.change);
      Header.current.classList.toggle(styles.active);
      setTimeout(() => {Navigation.current.classList.toggle(styles.height)}, openAnimationDelay);
      isActive = true;
      document.body.style.overflow = "hidden";
    }
    else {
      MobileMenuButton.current.classList.toggle(styles.change);
      Navigation.current.classList.toggle(styles.height);
      setTimeout(() => {
        Header.current.classList.toggle(styles.active);
        Navigation.current.classList.toggle(styles.active);
        isActive = false;
        document.body.style.overflow = "scroll";
      }, closeAnmitaionDelay)
    }
  }

  return (
    <div ref={Header} className={styles.header}>
      <div className={styles.header__top}>
        <Logo />
        <div className={styles.mobileButton} ref={MobileMenuButton} onClick={toggleMenu}>
          <div className={styles.bar1}></div>
          <div className={styles.bar2}></div>
          <div className={styles.bar3}></div>
        </div>
      </div>
      <div ref={Navigation} className={styles.navigationWrap}>
        <Navbar language={props.language} />
        <Language language={props.language} changeLanguage={props.changeLanguage}/>
        <div className={styles.social__wrap}>
          <Social />
        </div>

      <img className={styles.navigation__logo} src={logo} alt="logo"/>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
    return {
      language: state.startData.language
    }
}

const HeaderContainer = (props) => {

  const changeLanguage = (lang) => {
    if (lang === 0) {
      props.setLanguage('en');
    } else if (lang === 1) {
      props.setLanguage('ru');
    }
  }

  return <Header language={props.language} changeLanguage={changeLanguage}/>
}

export default connect(mapStateToProps, {setLanguage})(HeaderContainer);
