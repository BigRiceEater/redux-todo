import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component {
  render() {
    const { todos } = this.props;
    return (
      <div>
        {todos.map(todo => (
          <TodoItem todo={todo} />
        ))}
      </div>
    );
  }
}

export default TodoList;
