import React from 'react';

class MessageContainer extends React.Component {
    render() {
      return (
        <div>
          {this.props.messageProp}
        </div>
      )
    }
  }

export default MessageContainer;  