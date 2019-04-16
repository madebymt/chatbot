import React, {Component} from 'react';
import {connect} from 'react-redux';
import {sendMessage} from './chat';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>YEAH!</h1>
      </div>
    );
  }
}

const mapStateToProps = state => ({feed: state})

export default connect(mapStateToProps, {sendMessage})(App);
