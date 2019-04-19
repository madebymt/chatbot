import React, {Component} from 'react';
import {connect} from 'react-redux';
import {sendMessage} from './chat';

class App extends Component {
  render() {
    const {feed} = this.props;
    return (
      <div className="App">
        <h1>YEAH!</h1>
        <ul>
          {feed.map(entry => <li>{entry.text}</li>)}
        </ul>
      </div>

    );
  }
}
const mapStateToProps = state => ({feed: state})
export default connect(mapStateToProps, {sendMessage})