const BASE = process.env.NEXT_PUBLIC_BASE_URL ?? 'http://localhost:3000';

export type TodoPatch = {
  complete?: boolean;
  text?: string;
};

export async function getTodos() {
  console.log('Fetching todos from', `${BASE}/api/todos`);
  const res = await fetch(`${BASE}/api/todos`, { cache: 'no-store' });
  if (!res.ok) throw new Error('Failed to fetch todos');
  return res.json();
}

export async function addTodo(payload: { text: string }) {
  const res = await fetch(`${BASE}/api/todos`, {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: { 'Content-Type': 'application/json' },
  });
  return res.json();
}

export async function updateTodo(id: string, patch: TodoPatch) {
  const res = await fetch(`${BASE}/api/todos/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(patch),
    headers: { 'Content-Type': 'application/json' },
  });

  return res.json();
}

export async function deleteTodo(id: string) {
  const res = await fetch(`${BASE}/api/todos/${id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  });

  if (!res.ok) throw new Error('Failed to delete todo');
}
