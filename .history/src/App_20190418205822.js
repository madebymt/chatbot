import React, {Component} from 'react';
import {connect} from 'react-redux';
import {sendMessage} from './chat';
import 'milligram';

class App extends Component {
  render() {
    const {feed, sendMessage} = this.props;
    return (
      <div className="App">
        <h1>HEY! Redux Chatbot</h1>
        < ul >
          {feed.map(entry => <li key={entry.id}>
            {entry.text}
          </li>)
}
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