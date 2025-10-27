const BASE = process.env.NEXT_PUBLIC_BASE_URL ?? 'http://localhost:3000';

export type TodoPatch = {
  complete?: boolean;
  text?: string;
};

export async function getTodos() {
  const res = await fetch(`${BASE}/api/todos`, { cache: 'no-store' });
  if (!res.ok) throw new Error('Failed to fetch todos');
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
