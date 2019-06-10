import { createStore } from 'redux';
import { todoReducer } from './reducers/todo';

function AppState(state, action) {
  switch (action.type) {
    default:
      return todoReducer(state, action);
  }
}

export const store = createStore(AppState);
