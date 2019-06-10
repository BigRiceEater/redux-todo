import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddTodo extends Component {
  state = { task: '' };
  render() {
    return (
      <div>
        <form
          onSubmit={e => {
            e.preventDefault();
            this.props.onNewTask(this.state.task);
          }}
        >
          <label htmlFor='task_input'>Task:</label>
          <input
            type='text'
            value={this.state.task}
            onChange={e => this.setState({ task: e.target.value })}
          />
          <button>Add</button>
        </form>
      </div>
    );
  }
}

AddTodo.propTypes = {
  onNewTask: PropTypes.func
};

AddTodo.defaultProps = {
  onNewTask: () => console.warn('onNewTask not provided')
};

export default AddTodo;
