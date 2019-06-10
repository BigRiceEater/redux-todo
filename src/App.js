import React from 'react';
import './App.css';

import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <TodoList
          todos={[
            { task: 'hello', id: '11', completed: false },
            { task: 'bye', id: '22', completed: true }
          ]}
        />
        <AddTodo />
      </div>
    );
  }
}

export default App;
