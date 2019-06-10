import { Actions } from '.';
// action creators -> as the name implies, returns an Action!

export function addTodo(todo) {
  return { type: Actions.ADD_TODO, todo };
}

export function toggleTodo(id) {
  return { type: Actions.TOGGLE_TODO, id };
}
