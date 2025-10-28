// components
import { ListItem } from '../list-item/ListItem';

// types
import { Todos } from '@/lib/todoStore';

interface ListProps {
  list: Todos[];
}

export default function List({ list }: ListProps) {
  return (
    <section className="haze">
      <div className="bg-[url('/paper-bg.jpg')] bg-no-repeat bg-cover bg-top bg-origin-content h-screen w-full">
        <div className="relative py-10">
          <h2 className="mb-4 text-primary">
            {list.length ? 'To Do' : 'Add something!'}
          </h2>
          <ul className="overflow-y-auto space-y-3 px-5 py-3">
            {list?.map((item) => {
              return (
                <li key={item.id}>
                  <ListItem
                    id={item.id}
                    text={item.text}
                    completed={item.complete}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
