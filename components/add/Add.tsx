'use client';

import { addTodo } from '@/lib/api/todos';
import { ChangeEvent, FormEvent, useState } from 'react';

export default function Add() {
  const [todo, setTodo] = useState('');
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    if (!todo.length) return;
    e.preventDefault();
    try {
      await addTodo({ text: todo });
    } catch (err) {
      console.log(err);
    } finally {
      setTodo('');
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };
  return (
    <form onSubmit={handleSubmit} className="flex items-end gap-3 mt-5">
      <label htmlFor="add">
        Add something to the list!
        <input
          className="input mt-1"
          name="add"
          type="text"
          onChange={handleChange}
        />
      </label>
      <button disabled={!todo.length} className="btn">
        Add
      </button>
    </form>
  );
}
