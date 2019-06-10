import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
  render() {
    const { task, id, completed } = this.props.todo;
    return (
      <div key={id}>
        <div>{task}</div>
        <div>
          <input type='checkbox' defaultChecked={completed} />
        </div>
      </div>
    );
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object
};

TodoItem.defaultProps = {
  todo: { task: '', id: '', completed: false }
};

export default TodoItem;
