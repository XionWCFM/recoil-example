'use client';
import { useRecoilState } from 'recoil';
import { todoAtom, TodoInterface } from '@/atoms';
import React, { useRef } from 'react';

interface UseRecoilStateComponentProps {}

const UseRecoilStateComponent = ({}: UseRecoilStateComponentProps) => {
  const [todos, setTodos] = useRecoilState(todoAtom);
  const formRef = useRef<HTMLFormElement>(null);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const subject = (
      formRef.current?.elements.namedItem('subject') as HTMLInputElement
    )?.value;
    const text = (
      formRef.current?.elements.namedItem('text') as HTMLInputElement
    )?.value;

    const newTodo: TodoInterface = {
      id: Number(new Date()),
      subject: subject,
      text: text,
      done: false,
    };
    console.log(newTodo);
    setTodos(todos.concat(newTodo));
  };

  console.log(todos);

  return (
    <div>
      <form ref={formRef} onSubmit={onSubmit}>
        <input type="text" name="subject" />
        <input type="text" name="text" />
        <button type="submit">Submit</button>
      </form>
      <div>
        {todos.map((todo) => (
          <div key={`todo${todo.id}`}>
            <h2>{todo.subject}</h2>
            <p>{todo.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UseRecoilStateComponent;
