'use client';
import { useRouter } from 'next/navigation';
import { addTodo } from '@/lib/api/todos';
import { ChangeEvent, FormEvent, useState } from 'react';

export default function Add() {
  const router = useRouter();

  const [todo, setTodo] = useState('');
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    if (!todo.length) return;
    e.preventDefault();
    try {
      setTodo('');
      await addTodo({ text: todo });
      router.refresh();
    } catch (err) {
      console.log(err);
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
          value={todo}
          onChange={handleChange}
        />
      </label>
      <button disabled={!todo.length} className="btn">
        Add
      </button>
    </form>
  );
}
