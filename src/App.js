import React from 'react';
import './App.css';

import { store } from './store';
import { addTodo } from './store/actions/todo';

class App extends React.Component {
  componentDidMount() {
    console.log(store.getState());

    const unsubscribe = store.subscribe(() => console.log(store.getState()));

    store.dispatch(addTodo({ task: 'Our new Task', id: '123' }));
    unsubscribe();
  }

  render() {
    return <div className='App' />;
  }
}

export default App;
