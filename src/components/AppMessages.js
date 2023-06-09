import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Message from './Message';
import * as actions from '../actions/appActions';
import { makeGetAndSortMessages } from '../selectors/messagesSelectors';

export class AppMessages extends Component {

  componentWillMount() {
    this.props.showToast('', 'Application loaded', 'success');
  }

  render() {
    const { messages, removeMessage } = this.props;
    return (
      <div id="notificationArea">
        {messages.map((message) => {
          return (<Message key={message.id} hide={() => removeMessage(message.id)} {...message} />);
        })}
      </div>
    );
  }
}

const makeMapStateToProps = () => {
  const getOrderedMessages = makeGetAndSortMessages();
  const mapStateToProps = (state) => {
    return {
      messages: getOrderedMessages(state)
    };
  };
  return mapStateToProps;
};


AppMessages.propTypes = {
  messages: PropTypes.array.isRequired,
  removeMessage: PropTypes.func.isRequired,
  showToast: PropTypes.func.isRequired
};

export default connect(makeMapStateToProps, { ...actions })(AppMessages);
