import React, {Component} from 'react';
import {connect} from 'react-redux';
import {sendMessage} from './chat';

class App extends Component {
  render() {
    const {feed} = this.props;
    return (
      <div className="App">
        <h1>HEY!</h1>
        <ul>
          {feed.map(entry => <li>
            {entry.text}
          </li>)}
        </ul>
        <input
          type="text"
          onKeyDown={(e) => e.keyCode === 13
          ? sendMessage(e.target.value)
          : null}/>
      </div>
    )
  }
}
const mapStateToProps = state => ({feed: state})
export default connect(mapStateToProps, {sendMessage})(App)