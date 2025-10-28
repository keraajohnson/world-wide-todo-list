// components
import Add from '@/components/add/Add';
import List from '@/components/list/List';
import { getTodos } from '@/lib/api/todos';

export default async function Home() {
  const todos = await getTodos();
  return (
    <div className="flex flex-col md:flex-row container">
      <header className="w-full md:w-1/2 py-10">
        <h1 className=" mb-3">World Wide To Do List</h1>
        <p>A list of things we need to fix</p>
        <Add />
      </header>
      <section className="w-full md:w-1/2">
        <List list={todos} />
      </section>
    </div>
  );
}
