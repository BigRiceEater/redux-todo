import { Actions } from './../actions';

export const visibility = {
  show_all: 'SHOW_ALL',
  show_completed: 'SHOW_COMPLETED',
  show_unfinished: 'SHOW _UNFINISHED'
};

const initialState = {
  todos: [],
  visibilityFilter: visibility.show_all
};

export function todoReducer(state = initialState, action) {
  switch (action.type) {
    case Actions.SET_VISIBILITY:
      return { ...state, filter: action.filter };
    case Actions.ADD_TODO:
      const newState = state;
      newState.todos.push({ task: action.todo.task, id: action.todo.id });

    default:
      return state;
  }
}
