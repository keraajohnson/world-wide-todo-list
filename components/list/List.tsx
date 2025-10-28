// data & types
import { Todos } from '@/lib/todoStore';

// components
import { ListItem } from '../list-item/ListItem';

interface ListProps {
  list: Todos[];
}

export default function List({ list }: ListProps) {
  if (!list.length) return <h2>Add something</h2>;
  return (
    <div>
      <h2 className="mb-4">To Do</h2>
      <ul>
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
  );
}
