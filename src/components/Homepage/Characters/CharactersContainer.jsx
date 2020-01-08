import React from 'react';
import Characters from './Characters.jsx';
import {connect} from 'react-redux';
import {getRickData} from './../../../redux/rickReducer.js';

class CharactersContainer extends React.Component {

  askSomeData (page = 1) {
    this.props.getRickData(page);
  }

  componentDidMount() {
    this.askSomeData();
  }

  render() { return <Characters askSomeData={this.askSomeData.bind(this)} {...this.props} />
  }
}

const mapStateToProps = (state) => {
  return {
    characters: state.rickData.results,
    isFetching: state.rickData.isFetching,
    pages: state.rickData.info.pages
  }
}

export default connect(mapStateToProps, {getRickData})(CharactersContainer);
