'use client';

import { TodoInterface, doneTodoSelector } from '@/atoms';
import { useRecoilState } from 'recoil';
import React from 'react';

interface UseRecoilStateSelectorComponentProps {}

const UseRecoilStateSelectorComponent =
  ({}: UseRecoilStateSelectorComponentProps) => {
    const [doneTodos, setDoneTodos] = useRecoilState(doneTodoSelector);
    return (
      <div>
        <div>다한 투두만 표시됩니다</div>
        {doneTodos.map((todo) => (
          <div key={`todo${todo.id}`}>
            <h2>{todo.subject}</h2>
            <p>{todo.text}</p>
          </div>
        ))}
      </div>
    );
  };

export default UseRecoilStateSelectorComponent;
