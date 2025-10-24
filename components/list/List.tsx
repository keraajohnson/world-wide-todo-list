import { Todos } from '@/lib/todoStore';

interface ListProps {
  list?: Todos[];
}

export default function List({ list }: ListProps) {
  console.log(list);
  return (
    <section className="container">
      <p>this is the list</p>
    </section>
  );
}
