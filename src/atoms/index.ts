import { atom, selector } from 'recoil';

export interface TodoInterface {
  id: number;
  subject: string;
  text: string;
  done: boolean;
}
const initialState: TodoInterface[] = [];

export const todoAtom = atom<TodoInterface[]>({
  key: 'todoAtom',
  default: initialState,
});

export const doneTodoSelector = selector<TodoInterface[]>({
  key: 'doneTodoSelector',
  get: ({ get }) => {
    const todos = get(todoAtom);
    return todos.filter((todo) => todo.done);
  },
  set: ({ set, get }, newValue) => {
    set(todoAtom, newValue);
  },
});
