import React from 'react';
import './App.css';
import { addTodo } from './store/actions/todo';

import TodoList from './containers/ReduxTodoList';
import AddTodo from './components/AddTodo';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <TodoList />
        <AddTodo />
      </div>
    );
  }
}

export default App;
