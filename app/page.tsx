import Add from '@/components/add/Add';
import List from '@/components/list/List';
import { getTodos } from '@/lib/api/todos';

export default async function Home() {
  const todos = await getTodos();
  return (
    <div className="flex container">
      <header className=" w-1/4">
        <h1 className=" mb-3">World Wide To Do List</h1>
        <p className="">A list of things we need to fix</p>
        <Add />
      </header>
      <section className="w-3/4">
        <List list={todos} />
      </section>
    </div>
  );
}
