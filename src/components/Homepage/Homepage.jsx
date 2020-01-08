import React from 'react';
import Slider from './Slider/Slider.jsx';
import CharactersContainer from './Characters/CharactersContainer.jsx';
import {connect} from 'react-redux';

const Homepage = (props) => {
  return (
    <div>
      <Slider language={props.language} />
      <CharactersContainer />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    language: state.startData.language
  }
}

const HomePageContainer = (props) => {
    return <Homepage language={props.language} />
}

export default connect(mapStateToProps, {})(HomePageContainer);
