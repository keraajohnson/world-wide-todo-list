'use client';
import { useState } from 'react';

// data & types
import { Todos } from '@/lib/todoStore';
import { deleteTodo, updateTodo } from '@/lib/api/todos';

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

  const handleDelete = async (id: string) => {
    setTodos((prev) => prev?.filter((item) => item.id !== id));
    await deleteTodo(id);
  };

  if (!todos) return <h2>Add something</h2>;
  return (
    <div>
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
                onDelete={handleDelete}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
