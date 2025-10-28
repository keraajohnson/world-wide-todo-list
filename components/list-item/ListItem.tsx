'use client';
import { useRouter } from 'next/navigation';
import classNames from 'classnames';

// api
import { deleteTodo, updateTodo } from '@/lib/api/todos';

interface ListItemProps {
  id: string;
  text: string;
  completed: boolean;
}

export function ListItem({ id, text, completed }: ListItemProps) {
  const router = useRouter();
  const onToggle = async (id: string, nextChecked: boolean) => {
    await updateTodo(id, { complete: nextChecked });
    router.refresh();
  };

  const onDelete = async (id: string) => {
    await deleteTodo(id);
    router.refresh();
  };

  return (
    <div className="flex items-center justify-between mb-4 rounded-lg px-4 py-3 ">
      <label htmlFor={id} className="flex items-center mb-3">
        <input
          id={id}
          name={id}
          type="checkbox"
          checked={completed}
          onChange={(e) => onToggle(id, e.target.checked)}
          className="h-5 w-5 rounded-full border-ink/20 accent-primary shadow-[inset_0_0_0_2px_#fff] focus:ring-primary/40"
        />
        <h3
          className={classNames(
            'pl-4 text-xl font-semibold text-ink',
            completed && 'text-ink/50 line-through',
          )}
        >
          {text}
        </h3>
      </label>
      <button
        type="button"
        aria-label="Delete"
        className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-ink/10 text-white bg-warning/80 hover:bg-warning/10 hover:text-warning shadow-sm"
        onClick={() => onDelete(id)}
      >
        ×
      </button>
    </div>
  );
}
