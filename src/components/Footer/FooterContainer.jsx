import React from 'react';
import {connect} from 'react-redux';
import Footer from './Footer.jsx';

const FooterContainer = (props) => {
  return <Footer language={props.language}/>
}

const mapStateToProps = (state) => {
  return {
    language: state.startData.language
  }
}

export default connect(mapStateToProps)(FooterContainer);
