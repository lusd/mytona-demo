import React from 'react';
import Header from './components/Header/Header.jsx';
import styles from './App.module.css';
import {withRouter, BrowserRouter, Route, Switch} from 'react-router-dom';
import {compose} from 'redux';
import {Provider} from 'react-redux';
import store from './redux/redux-store.js';
import Homepage from './components/Homepage/Homepage.jsx';
import Company from './components/Company/Company.jsx';
import Career from './components/Career/Career.jsx';
import Games from './components/Games/Games.jsx';
import Articles from './components/Articles/Articles.jsx';
import TechSupport from './components/TechSupport/TechSupport.jsx';
import FooterContainer from './components/Footer/FooterContainer.jsx';
import Error from './components/404/Error.jsx';

const App = () => {
  return (
    <div className={styles.app}>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/company" component={Company} />
        <Route path="/career" component={Career} />
        <Route path="/games" component={Games} />
        <Route path="/articles" component={Articles} />
        <Route path="/techsupport" component={TechSupport} />
        <Route path='*' component={Error} />
      </Switch>
      <FooterContainer />
    </div>
  );
}

const AppContainer = compose (
  withRouter
)(App);

const MyTona = (props) => {
  return (
    <BrowserRouter >
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>
  )
}

export default MyTona;
