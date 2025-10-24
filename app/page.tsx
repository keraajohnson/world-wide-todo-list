import List from '@/components/list/List';
import { getTodos } from '@/lib/api/todos';

export default async function Home() {
  const todos = await getTodos();
  return (
    <>
      <header className="container py-9">
        <h1 className="text-center mb-3">World Wide To Do List</h1>
        <p className="text-center">A list of things we need to fix</p>
      </header>
      <List list={todos} />
    </>
  );
}
