import { atom, AtomOptions } from 'recoil';
import react from 'react';

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
