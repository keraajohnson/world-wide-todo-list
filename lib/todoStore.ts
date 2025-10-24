export interface Todos {
  id: string;
  text: string;
  complete: boolean;
  createdAt: string;
  updatedAt?: string;
}

const todos: Todos[] = [];

export function getAll() {
  return todos;
}

export function add(text: string) {
  const newTodo = {
    id: crypto.randomUUID(),
    text,
    complete: false,
    createdAt: new Date().toISOString(),
  };

  todos.push(newTodo);
  return newTodo;
}

export function update(
  id: string,
  patch: { text?: string; completed?: boolean },
) {
  const i = todos.findIndex((todo) => todo.id === id);
  if (i === -1) return null;
  todos[i] = { ...todos[i], ...patch, updatedAt: new Date().toISOString() };
  return todos[i];
}

export function deleteItem(id: string) {
  const index = todos.findIndex((el) => el.id === id);
  if (index === -1) return null;

  const itemToDelete = todos[index];
  todos.splice(index, 1);

  return itemToDelete;
}
