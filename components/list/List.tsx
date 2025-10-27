'use client';
import { useState } from 'react';

// data & types
import { Todos } from '@/lib/todoStore';
import { updateTodo } from '@/lib/api/todos';

// components
import { ListItem } from '../list-item/ListItem';

interface ListProps {
  list?: Todos[];
}

export default function List({ list }: ListProps) {
  const [todos, setTodos] = useState(list);

  const handleToggle = async (id: string, nextChecked: boolean) => {
    setTodos((prev) =>
      prev?.map((todo) =>
        todo.id === id ? { ...todo, complete: nextChecked } : todo,
      ),
    );

    await updateTodo(id, { complete: nextChecked });
  };
  return (
    <section className="container bg-accent p-10 rounded-lg md:w-1/2 md:m-auto">
      <h2 className="mb-4">To Do</h2>
      <ul>
        {todos?.map((item) => {
          return (
            <li key={item.id}>
              <ListItem
                id={item.id}
                text={item.text}
                completed={item.complete}
                onToggle={handleToggle}
              />
            </li>
          );
        })}
      </ul>
    </section>
  );
}
