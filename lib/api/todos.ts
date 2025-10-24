const BASE = process.env.NEXT_PUBLIC_BASE_URL ?? 'http://localhost:3000';

export async function getTodos() {
  const res = await fetch(`${BASE}/api/todos`, { cache: 'no-store' });
  if (!res.ok) throw new Error('Failed to fetch todos');
  return res.json();
}
