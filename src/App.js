import React from 'react';
import './App.css';

import TodoList from './components/TodoList';

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
      </div>
    );
  }
}

export default App;
